/* ==========================================
   CAROUSEL CONTROLLER
   ========================================== */
class CarouselController {
  constructor({ slides, track, dots, btnPrev, btnNext, onUpdate }) {
    this.slides = slides;
    this.track = track;
    this.dots = dots;
    this.btnPrev = btnPrev;
    this.btnNext = btnNext;
    
    // Callback ke Landing Controller
    this.onUpdate = typeof onUpdate === 'function' ? onUpdate : () => {};

    // Internal State
    this.index = 0;
    this.viewed = Array.from(this.slides, (_, i) => i === 0);

    this.render();
  }

  isComplete() {
    return this.viewed.every(v => v === true);
  }

  next() {
    if (this.index < this.slides.length - 1) {
      this.index++;
      this.viewed[this.index] = true;
      this.render();
    }
  }

  prev() {
    if (this.index > 0) {
      this.index--;
      this.render();
    }
  }

  reset() {
    this.index = 0;
    for (let i = 0; i < this.viewed.length; i++) {
      this.viewed[i] = (i === 0);
    }
    this.render();
  }

  render() {
    if (this.track) {
      this.track.style.transform = `translateX(-${this.index * 100}%)`;
    }

    this.slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === this.index);
    });
    
    this.dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === this.index);
    });

    if (this.btnPrev) this.btnPrev.disabled = (this.index === 0);
    if (this.btnNext) this.btnNext.disabled = (this.index === this.slides.length - 1);

    // Lapor kembali ke Landing Flow
    this.onUpdate();
  }
}