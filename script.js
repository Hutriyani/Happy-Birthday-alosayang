const giftScreen = document.getElementById("gift-screen");
const bookSection = document.getElementById("book-section");
const giftBox = document.querySelector(".gift-box");
const giftLid = document.querySelector('.gift-lid');

giftBox.addEventListener('click', () => {
  giftLid.style.transform = 'rotateX(120deg) translateY(-30px)';
});

const spreads = document.querySelectorAll(".spread");
const openBookBtn = document.querySelector(".open-book-btn");
const nextButtons = document.querySelectorAll(".next");

let currentSpread = 0;

/* ================= INIT ================= */
bookSection.style.display = "none";

/* ================= GIFT CLICK ================= */
giftBox.addEventListener("click", () => {
  giftScreen.style.display = "none";
  bookSection.style.display = "flex";
});

/* ================= OPEN BOOK ================= */
openBookBtn.addEventListener("click", () => {
  // buka cover (spread 0)
  spreads[0].querySelector(".page.right").style.transform =
    "rotateY(-180deg)";

  // tampilkan spread pertama
  setTimeout(() => {
    spreads[0].classList.remove("active");
    spreads[1].classList.add("active");
    currentSpread = 1;
  }, 900);
});

/* ================= NEXT PAGE ================= */
nextButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (currentSpread >= spreads.length - 1) return;

    const current = spreads[currentSpread];
    const rightPage = current.querySelector(".page.right");

    // flip halaman kanan
    rightPage.style.transform = "rotateY(-180deg)";

    // tampilkan spread berikutnya
    setTimeout(() => {
      current.classList.remove("active");
      spreads[currentSpread + 1].classList.add("active");
      currentSpread++;
    }, 900);
  });
});
/* ================= SPARKLE GENERATOR ================= */

function createSparkle() {
  const sparkle = document.createElement("div");
  sparkle.classList.add("sparkle");

  const size = Math.random() * 20 + 40; // 10–20px
  sparkle.style.width = size + "px";
  sparkle.style.height = size + "px";

  sparkle.style.left = Math.random() * window.innerWidth + "px";
  sparkle.style.top = Math.random() * window.innerHeight + "px";

  sparkle.style.animationDuration = (Math.random() * 2 + 3) + "s";

  document.body.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 5000);
}

/* interval HALUS (tidak rame) */
setInterval(() => {
  if (document.querySelectorAll(".sparkle").length < 8) {
    createSparkle();
  }
}, 700);

const bgMusic = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-toggle");

let isPlaying = false;

musicBtn.addEventListener("click", () => {
  if (!isPlaying) {
    bgMusic.volume = 0.4;
    bgMusic.play();
    musicBtn.textContent = "⏸ Music";
    musicBtn.classList.add("playing");
  } else {
    bgMusic.pause();
    musicBtn.textContent = "▶ Music";
    musicBtn.classList.remove("playing");
  }
  isPlaying = !isPlaying;
});
