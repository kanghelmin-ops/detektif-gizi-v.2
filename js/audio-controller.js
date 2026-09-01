/* ==========================================
   AUDIO CONTROLLER SERVICE
   ========================================== */
class AudioController {
  constructor() {
    this.bgm = document.getElementById('audio-bgm');
    this.sfxHover = document.getElementById('audio-sfx-hover');
    this.sfxClick = document.getElementById('audio-sfx-click');
    this.sfxCorrect = document.getElementById('audio-sfx-correct');
    this.sfxWrong = document.getElementById('audio-sfx-wrong');
    this.sfxVictory = document.getElementById('audio-sfx-victory');
    this.voQuestion = document.getElementById('audio-vo-question');
    this.voFeedback = document.getElementById('audio-vo-feedback');
    this.voInstructions = document.getElementById('audio-vo-instructions');
    this.voClosing = document.getElementById('audio-vo-closing');
    this.voOpening = document.getElementById('audio-vo-opening');
    this.bgmNormalVolume = 0.08;
    this.bgmDuckedVolume = 0.03;
    this.muted = false;
  }

  isAnyVoPlaying() {
    return [this.voOpening, this.voInstructions, this.voQuestion, this.voFeedback, this.voClosing]
      .some(el => el && !el.paused && el.currentTime > 0);
  }

  duckBgm() {
    if (this.bgm && !this.muted && !this.bgm.paused) {
      this.bgm.volume = this.bgmDuckedVolume;
    }
  }

  restoreBgm() {
    if (this.bgm && !this.muted && !this.bgm.paused) {
      this.bgm.volume = this.bgmNormalVolume;
    }
  }

  playSfx(type) {
    const sfxMap = {
      hover: { el: this.sfxHover, vol: 0.3 },
      click: { el: this.sfxClick, vol: 0.4 },
      correct: { el: this.sfxCorrect, vol: 0.6 },
      wrong: { el: this.sfxWrong, vol: 0.6 },
      victory: { el: this.sfxVictory, vol: 0.5 }
    };

    const target = sfxMap[type];
    if (target && target.el) {
      target.el.currentTime = 0;
      target.el.volume = target.vol;
      target.el.play().catch(() => {});
    }
  }

  playBgm() {
    if (this.bgm) {
      this.bgm.volume = this.bgmNormalVolume;
      this.bgm.play().catch(() => {});
      if (this.isAnyVoPlaying()) {
        this.bgm.volume = this.bgmDuckedVolume;
      }
    }
  }

  pauseBgm() {
    if (this.bgm) this.bgm.pause();
  }

  playVO(element, sourcePath) {
    if (element && sourcePath) {
      element.src = sourcePath;
      element.currentTime = 0;
      element.onended = () => this.restoreBgm();
      element.play().catch(() => {});
      this.duckBgm();
    }
  }

  stopVO(element) {
    if (element) {
      element.pause();
      element.currentTime = 0;
    }
    this.restoreBgm();
  }
}

const audioService = new AudioController();