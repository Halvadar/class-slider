// Rewrite this functional module to es6 class

class Sliders {
  slideIndex = 1;
  paused = false;

  constructor(slides, dir, prev, next) {
    this.items = document.querySelectorAll(slides);
    this.div = dir;
    this.prev = prev;
    this.next = next;
  }
  showSlides(n) {
    if (n > this.items.length) {
      this.slideIndex = 1;
    }

    if (n < 1) {
      this.slideIndex = this.items.length;
    }

    this.items.forEach((item) => {
      item.classList.add("animated");
      item.style.display = "none";
    });

    this.items[this.slideIndex - 1].style.display = "block";
  }
  plusSlides(n) {
    this.showSlides((this.slideIndex += n));
  }
  activateAnimation() {
    if (this.dir === "vertical") {
      this.paused = setInterval(() => {
        this.plusSlides(1);
        this.items[this.slideIndex - 1].classList.add("slideInDown");
      }, 3000);
    } else {
      this.paused = setInterval(() => {
        this.plusSlides(1);
        this.items[this.slideIndex - 1].classList.remove("slideInRight");
        this.items[this.slideIndex - 1].classList.add("slideInLeft");
      }, 3000);
    }
  }

  startAnimation() {
    this.showSlides(this.slideIndex);
    try {
      const prevBtn = document.querySelector(this.prev),
        nextBtn = document.querySelector(this.next);

      prevBtn.addEventListener("click", () => {
        this.plusSlides(-1);
        this.items[this.slideIndex - 1].classList.remove("slideInLeft");
        this.items[this.slideIndex - 1].classList.add("slideInRight");
      });

      nextBtn.addEventListener("click", () => {
        this.plusSlides(1);
        this.items[this.slideIndex - 1].classList.remove("slideInRight");
        this.items[this.slideIndex - 1].classList.add("slideInLeft");
      });
    } catch (e) {}
    this.activateAnimation();
    this.items[0].parentNode.addEventListener("mouseenter", () => {
      clearInterval(this.paused);
    });
    this.items[0].parentNode.addEventListener("mouseleave", () => {
      this.activateAnimation();
    });
  }
}

export default Sliders;
