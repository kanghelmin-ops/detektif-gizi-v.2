/* ==========================================
       DATA - DATABASE SOAL KUIS DETEKTIF GIZI
       ========================================== */
    const quizData = [
      {
        id: 1,
        sessionName: "Sesi Kuis 1: Tempe Goreng",
        foodName: "Tempe Goreng",
        questionText: "Apa kandungan pada makanan ini?",
        questionVo: "./assets/audio/vo_soal-1.mp3",
        correctKeys: ["protein", "lemak", "makanan-sehat"],
        feedbackCorrect: "Luar biasa tepat! Tempe kaya akan Protein nabati dan Lemak baik, serta tergolong Makanan Sehat untuk tubuhmu!",
        wrongNotifications: {
          "karbohidrat": "Tempe bukan sumber karbohidrat utama, Detektif!",
          "serat": "Tempe yang sudah diolah bukan sumber serat utama ya!",
          "mineral-air-vitamin": "Tempe bukan kelompok makanan kaya air atau vitamin!",
          "makanan-tidak-sehat": "Wah, tempe adalah makanan sehat bergizi tinggi!"
        },
        wrongVo: {
          "karbohidrat": "./assets/audio/vo_salah_tempe_karbo.mp3",
          "serat": "./assets/audio/vo_salah_tempe_serat.mp3",
          "mineral-air-vitamin": "./assets/audio/vo_salah_tempe_mineral.mp3",
          "makanan-tidak-sehat": "./assets/audio/vo_salah_tempe_makanan.mp3"
        },
        feedbackVoCorrect: "./assets/audio/vo_benar_tempe.mp3"
      },
      {
        id: 2,
        sessionName: "Sesi Kuis 2: Permen & Snack",
        foodName: "Permen & Snack",
        questionText: "Hmm.. Makanan ini mengandung apa aja ya?",
        questionVo: "./assets/audio/vo_soal-2.mp3",
        correctKeys: ["karbohidrat", "lemak", "makanan-tidak-sehat"],
        feedbackCorrect: "Hebat! Jajanan ini tinggi Karbohidrat sederhana dan Lemak, serta tergolong Makanan Tidak Sehat jika dikonsumsi berlebihan!",
        wrongNotifications: {
          "protein": "Permen dan cokelat sama sekali tidak mengandung protein!",
          "serat": "Camilan manis ini tidak punya kandungan serat yang baik!",
          "mineral-air-vitamin": "Jajanan ini bukan sumber vitamin atau mineral alami!",
          "makanan-sehat": "Ups, camilan manis ini termasuk makanan tidak sehat jika dikonsumsi berlebihan!"
        },
        wrongVo: {
          "protein": "./assets/audio/vo_salah_permen_protein.mp3",
          "serat": "./assets/audio/vo_salah_permen_serat.mp3",
          "mineral-air-vitamin": "./assets/audio/vo_salah_permen_mineral.mp3",
          "makanan-sehat": "./assets/audio/vo_salah_permen_makanan.mp3"
        },
        feedbackVoCorrect: "./assets/audio/vo_benar_permen.mp3"
      },
      {
        id: 3,
        sessionName: "Sesi Kuis 3: Brokoli & Tomat",
        foodName: "Brokoli & Tomat",
        questionText: "Coba kamu tebak dari makanan ini apa aja?",
        questionVo: "./assets/audio/vo_soal-3.mp3",
        correctKeys: ["mineral-air-vitamin", "serat", "makanan-sehat"],
        feedbackCorrect: "Kerja bagus! Sayur dan buah ini kaya Mineral/Vitamin/Air serta Serat, dan pastinya merupakan Makanan Sehat!",
        wrongNotifications: {
          "karbohidrat": "Sayur dan buah segar bukan kelompok makanan sumber karbohidrat!",
          "protein": "Tomat dan brokoli tidak mengandung protein, ya!",
          "lemak": "Sayuran segar ini bebas dari kandungan lemak!",
          "makanan-tidak-sehat": "Salah besar, tomat dan brokoli adalah contoh makanan sehat!"
        },
        wrongVo: {
          "karbohidrat": "./assets/audio/vo_salah_brokoli_karbo.mp3",
          "protein": "./assets/audio/vo_salah_brokoli_protein.mp3",
          "lemak": "./assets/audio/vo_salah_brokoli_lemak.mp3",
          "makanan-tidak-sehat": "./assets/audio/vo_salah_brokoli_makanan.mp3"
        },
        feedbackVoCorrect: "./assets/audio/vo_benar_brokoli.mp3"
      },
      {
        id: 4,
        sessionName: "Sesi Kuis 4: Mie Instan",
        foodName: "Mie Instan",
        questionText: "Apa kandungan pada makanan ini?",
        questionVo: "./assets/audio/vo_soal-1.mp3",
        correctKeys: ["karbohidrat", "lemak", "makanan-tidak-sehat"],
        feedbackCorrect: "Tepat sekali! Mie instan mengandung tinggi Karbohidrat dan Lemak (dari proses pabrik & minyak bumbu), serta termasuk Makanan Tidak Sehat!",
        wrongNotifications: {
          "protein": "Mie instan kemasan bukan sumber protein yang baik!",
          "serat": "Mie instan tidak memiliki kandungan serat yang cukup!",
          "mineral-air-vitamin": "Mie instan tidak kaya akan vitamin atau mineral alami!",
          "makanan-sehat": "Hati-hati, mie instan termasuk makanan tidak sehat karena tinggi kandungan natrium dan lemak jenuh!"
        },
        wrongVo: {
          "protein": "./assets/audio/vo_salah_mi instan_protein.mp3",
          "serat": "./assets/audio/vo_salah_mi instan_serat.mp3",
          "mineral-air-vitamin": "./assets/audio/vo_salah_mi instan_mineral.mp3",
          "makanan-sehat": "./assets/audio/vo_salah_mi instan_makanan.mp3"
        },
        feedbackVoCorrect: "./assets/audio/vo_benar_mi instan.mp3"
      },
      {
        id: 5,
        sessionName: "Sesi Kuis 5: Ayam Goreng",
        foodName: "Ayam Goreng",
        questionText: "Hmm.. Makanan ini mengandung apa aja ya?",
        questionVo: "./assets/audio/vo_soal-2.mp3",
        correctKeys: ["protein", "lemak", "makanan-sehat"],
        feedbackCorrect: "Benar! Ayam goreng kaya Protein dan mengandung Lemak dari proses penggorengan, serta tetap menjadi Makanan Sehat sebagai sumber tenaga dan zat pembangun!",
        wrongNotifications: {
          "karbohidrat": "Daging ayam bukan sumber karbohidrat!",
          "serat": "Ayam goreng tidak mengandung serat sama sekali!",
          "mineral-air-vitamin": "Ayam goreng bukan kelompok makanan sumber vitamin atau mineral!",
          "makanan-tidak-sehat": "Ayam goreng tetap lauk makanan sehat bergizi, asal tidak berlebihan!"
        },
        wrongVo: {
          "karbohidrat": "./assets/audio/vo_salah_ayam_karbo.mp3",
          "serat": "./assets/audio/vo_salah_ayam_serat.mp3",
          "mineral-air-vitamin": "./assets/audio/vo_salah_ayam_mineral.mp3",
          "makanan-tidak-sehat": "./assets/audio/vo_salah_ayam_makanan.mp3"
        },
        feedbackVoCorrect: "./assets/audio/vo_benar_ayam.mp3"
      },
      {
        id: 6,
        sessionName: "Sesi Kuis 6: Minuman Serbuk & Sirup",
        foodName: "Minuman Serbuk & Sirup",
        questionText: "Coba kamu tebak dari makanan ini apa aja?",
        questionVo: "./assets/audio/vo_soal-3.mp3",
        correctKeys: ["karbohidrat", "mineral-air-vitamin", "makanan-tidak-sehat"],
        feedbackCorrect: "Pintar! Sirup tinggi kandungan Karbohidrat (gula) dan Mineral/Vitamin/Air (cairan manis), serta masuk kategori Makanan Tidak Sehat!",
        wrongNotifications: {
          "protein": "Minuman sirup sama sekali tidak mengandung protein!",
          "lemak": "Sirup manis tidak mengandung lemak!",
          "serat": "Minuman sirup buatan pabrik tidak ada seratnya!",
          "makanan-sehat": "Minuman tinggi gula ini termasuk makanan/minuman tidak sehat!"
        },
        wrongVo: {
          "protein": "./assets/audio/vo_salah_minuman sirup_protein.mp3",
          "lemak": "./assets/audio/vo_salah_minuman sirup_lemak.mp3",
          "serat": "./assets/audio/vo_salah_minuman sirup_serat.mp3",
          "makanan-sehat": "./assets/audio/vo_salah_minuman sirup_makanan.mp3"
        },
        feedbackVoCorrect: "./assets/audio/vo_benar_minuman sirup.mp3"
      },
      {
        id: 7,
        sessionName: "Sesi Kuis 7: Telur Rebus",
        foodName: "Telur Rebus",
        questionText: "Apa kandungan pada makanan ini?",
        questionVo: "./assets/audio/vo_soal-1.mp3",
        correctKeys: ["protein", "lemak", "makanan-sehat"],
        feedbackCorrect: "Keren! Telur rebus adalah sumber Protein dan Lemak yang sangat baik, serta tergolong Makanan Sehat!",
        wrongNotifications: {
          "karbohidrat": "Telur rebus tidak mengandung zat karbohidrat!",
          "serat": "Telur bukan kelompok makanan berserat!",
          "mineral-air-vitamin": "Telur bukan sumber utama vitamin atau air!",
          "makanan-tidak-sehat": "Telur rebus adalah salah satu contoh makanan sehat!"
        },
        wrongVo: {
          "karbohidrat": "./assets/audio/vo_salah_telur_karbo.mp3",
          "serat": "./assets/audio/vo_salah_telur_serat.mp3",
          "mineral-air-vitamin": "./assets/audio/vo_salah_telur_mineral.mp3",
          "makanan-tidak-sehat": "./assets/audio/vo_salah_telur_makanan.mp3"
        },
        feedbackVoCorrect: "./assets/audio/vo_benar_telur.mp3"
      },
      {
        id: 8,
        sessionName: "Sesi Kuis 8: Mie Bakso",
        foodName: "Mie Bakso",
        questionText: "Hmm.. Makanan ini mengandung apa aja ya?",
        questionVo: "./assets/audio/vo_soal-2.mp3",
        correctKeys: ["karbohidrat", "protein", "makanan-tidak-sehat"],
        feedbackCorrect: "Hebat! Mie bakso memiliki Karbohidrat dari mie dan Protein dari daging, namun tergolong Makanan Tidak Sehat jika sering dikonsumsi karena tinggi garam dan lemak!",
        wrongNotifications: {
          "lemak": "Lemak memang ada di kuahnya, tapi fokus gizi utamanya adalah karbohidrat dan protein!",
          "serat": "Semangkuk mie bakso standar hampir tidak memiliki kandungan serat!",
          "mineral-air-vitamin": "Mie bakso bukan kelompok makanan sumber vitamin atau mineral!",
          "makanan-sehat": "Meskipun mengenyangkan, mie bakso termasuk makanan tidak sehat jika dikonsumsi terlalu sering karena tinggi garam dan lemak!"
        },
        wrongVo: {
          "lemak": "./assets/audio/vo_salah_bakso_lemak.mp3",
          "serat": "./assets/audio/vo_salah_bakso_serat.mp3",
          "mineral-air-vitamin": "./assets/audio/vo_salah_bakso_mineral.mp3",
          "makanan-sehat": "./assets/audio/vo_salah_bakso_makanan.mp3"
        },
        feedbackVoCorrect: "./assets/audio/vo_benar_bakso.mp3"
      },
      {
        id: 9,
        sessionName: "Sesi Kuis 9: Susu",
        foodName: "Susu",
        questionText: "Coba kamu tebak dari makanan ini apa aja?",
        questionVo: "./assets/audio/vo_soal-3.mp3",
        correctKeys: ["protein", "lemak", "makanan-sehat"],
        feedbackCorrect: "Luar biasa! Susu kaya akan Protein dan Lemak alami yang baik untuk pertumbuhan, serta merupakan Makanan Sehat penguat tulang!",
        wrongNotifications: {
          "karbohidrat": "Susu murni tidak mengandung karbohidrat!",
          "serat": "Susu sama sekali tidak memiliki kandungan serat!",
          "mineral-air-vitamin": "Meskipun ada kalsium, fokus utama gizi makro susu murni adalah protein dan lemak!",
          "makanan-tidak-sehat": "Susu adalah minuman sehat penguat tulang!"
        },
        wrongVo: {
          "karbohidrat": "./assets/audio/vo_salah_susu_karbo.mp3",
          "serat": "./assets/audio/vo_salah_susu_serat.mp3",
          "mineral-air-vitamin": "./assets/audio/vo_salah_susu_mineral.mp3",
          "makanan-tidak-sehat": "./assets/audio/vo_salah_susu_makanan.mp3"
        },
        feedbackVoCorrect: "./assets/audio/vo_benar_susu.mp3"
      },
      {
        id: 10,
        sessionName: "Sesi Kuis 10: Buah Jeruk & Pisang",
        foodName: "Buah Jeruk & Pisang",
        questionText: "Apa kandungan pada makanan ini?",
        questionVo: "./assets/audio/vo_soal-1.mp3",
        correctKeys: ["mineral-air-vitamin", "serat", "makanan-sehat"],
        feedbackCorrect: "Sempurna! Buah segar kaya akan Mineral/Vitamin/Air serta Serat, dan merupakan contoh Makanan Sehat terbaik!",
        wrongNotifications: {
          "karbohidrat": "Buah segar bukan kelompok makanan sumber karbohidrat utama!",
          "protein": "Jeruk dan pisang tidak mengandung protein!",
          "lemak": "Buah-buahan segar bebas dari kandungan lemak!",
          "makanan-tidak-sehat": "Salah! Jeruk dan pisang adalah makanan sehat yang kaya manfaat."
        },
        wrongVo: {
          "karbohidrat": "./assets/audio/vo_salah_buah_karbo.mp3",
          "protein": "./assets/audio/vo_salah_buah_protein.mp3",
          "lemak": "./assets/audio/vo_salah_buah_lemak.mp3",
          "makanan-tidak-sehat": "./assets/audio/vo_salah_buah_makanan.mp3"
        },
        feedbackVoCorrect: "./assets/audio/vo_benar_buah.mp3"
      }
    ];