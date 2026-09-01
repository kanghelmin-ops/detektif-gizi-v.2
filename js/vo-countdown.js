const VO_FALLBACK_SECONDS = 17;
let voCountdownTimer = null;

function getVoDuration(audioEl) {
  const dur = audioEl ? audioEl.duration : 0;
  return Number.isFinite(dur) && dur > 0 ? dur : VO_FALLBACK_SECONDS;
}

function startVoCountdown({ audioEl, countdownEl, valueEl, onFinish }) {
  stopVoCountdown();
  const duration = getVoDuration(audioEl);
  valueEl.innerText = Math.max(0, Math.ceil(duration));
  countdownEl.classList.add('active');

  voCountdownTimer = setInterval(() => {
    const elapsed = audioEl ? audioEl.currentTime : 0;
    valueEl.innerText = Math.max(0, Math.ceil(duration - elapsed));

    if (elapsed >= duration) {
      stopVoCountdown();
      countdownEl.classList.remove('active');
      if (typeof onFinish === 'function') onFinish();
    }
  }, 250);
}

function stopVoCountdown() {
  if (voCountdownTimer) {
    clearInterval(voCountdownTimer);
    voCountdownTimer = null;
  }
}