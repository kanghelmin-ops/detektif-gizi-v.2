/* ==========================================
   DOM ELEMENTS SELECTION
   ========================================== */
const elements = {
  // Scenes
  sceneCover: document.getElementById('scene-cover'),
  sceneInstructions: document.getElementById('scene-instructions'),
  sceneMain: document.getElementById('scene-main'),
  sceneOutro: document.getElementById('scene-outro'),

  // Backgrounds
  bgMain: document.getElementById('asset-main-bg'),
  bgOutro: document.getElementById('asset-outro-bg'),

  // Controls & Display
  btnStart: document.getElementById('btn-start'),
  btnContinue: document.getElementById('btn-continue-game'),
  btnSubmit: document.getElementById('btn-submit'),
  btnRestart: document.getElementById('btn-restart'),
  btnExit: document.getElementById('btn-exit'),
  btnToggleMusic: document.getElementById('btn-toggle-music'),
  btnToggleFullscreen: document.getElementById('btn-toggle-fullscreen'),
  assetBtnMusic: document.getElementById('asset-btn-music'),

  // VO Opening Countdown
  voCountdown: document.getElementById('vo-countdown'),
  voCountdownValue: document.getElementById('vo-countdown-value'),
  btnVoCountdownClose: document.getElementById('btn-vo-countdown-close'),

  // VO Instructions Countdown
  voCountdownInstructions: document.getElementById('vo-countdown-instructions'),
  voCountdownInstructionsValue: document.getElementById('vo-countdown-instructions-value'),
  btnVoCountdownInstructionsClose: document.getElementById('btn-vo-countdown-instructions-close'),

  // Carousel Petunjuk
  btnCarouselPrev: document.getElementById('btn-carousel-prev'),
  btnCarouselNext: document.getElementById('btn-carousel-next'),
  carouselSlides: document.querySelectorAll('.carousel-slide'),
  carouselDots: document.querySelectorAll('.carousel-dots .dot'),
  carouselTrack: document.querySelector('.carousel-track'),

  // Game Arena Dynamic Text
  sessionTitle: document.getElementById('session-title'),
  questionText: document.getElementById('question-text-dynamic'),
  currentScore: document.getElementById('current-score'),
  finalScore: document.getElementById('final-score'),
  foodImage: document.getElementById('asset-food-image'),
  optionButtons: document.querySelectorAll('.options-panel .btn-option[data-answer]'),

  // Modal Feedback
  modal: document.getElementById('quiz-modal'),
  popupFeedbackImg: document.getElementById('asset-popup-feedback'),
  modalTitle: document.getElementById('modal-title'),
  modalText: document.getElementById('modal-text'),
  btnModalClose: document.getElementById('btn-modal-close')
};