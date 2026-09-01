/* ==========================================
   GAME STATE MANAGEMENT
   ========================================== */
class GameState {
  constructor() {
    this.resetState();
  }

  resetState() {
    this.currentIndex = 0;
    this.score = 0;
    this.selectedAnswers = [];
    this.isMusicMuted = false;
    this.hasBgmStarted = false;
  }

  // Answer operations
  toggleAnswer(answerKey) {
    const index = this.selectedAnswers.indexOf(answerKey);
    if (index > -1) {
      this.selectedAnswers.splice(index, 1);
      return false; // state removed
    } else {
      this.selectedAnswers.push(answerKey);
      return true; // state added
    }
  }

  clearAnswers() {
    this.selectedAnswers = [];
  }

  addScore(points = 10) {
    this.score += points;
  }
}

const gameState = new GameState();