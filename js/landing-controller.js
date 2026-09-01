/* ==========================================
   LANDING CONTROLLER
   ========================================== */
let voOpeningDone = false;

function updateStartState() {
  elements.btnStart.disabled = !(voOpeningDone && carouselController.isComplete());
}

function resetLandingFlow() {
  voOpeningDone = false;
  carouselController.reset();
}

function playOpeningVO() {
  elements.btnStart.disabled = true;
  const vo = audioService.voOpening;
  vo.src = "./assets/audio/vo_opening.mp3";
  vo.currentTime = 0;
  audioService.duckBgm();
  vo.onended = () => audioService.restoreBgm();

  function onPlaying() {
    vo.removeEventListener('playing', onPlaying);
    startVoCountdown({
      audioEl: vo,
      countdownEl: elements.voCountdown,
      valueEl: elements.voCountdownValue,
      onFinish: () => { finishOpeningCountdown(); }
    });
  }
  vo.addEventListener('playing', onPlaying);
  vo.play().catch(() => { finishOpeningCountdown(); });
}

function finishOpeningCountdown() {
  stopVoCountdown();
  elements.voCountdown.classList.remove('active');
  voOpeningDone = true;
  updateStartState();
}

// Event Listener untuk Tombol Mulai
elements.btnStart.addEventListener('click', () => {
  audioService.stopVO(audioService.voOpening);
  switchScene(elements.sceneInstructions, 'main');
  playInstructionsVO();
});