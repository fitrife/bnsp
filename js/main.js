window.addEventListener("load", () => {
  /* ----------------------------
      page loader
  ------------------------------- */
  document.querySelector(".js-page-loader").classList.add("fade-out");
  setTimeout(() => {
    document.querySelector(".js-page-loader").style.display = "none";
  }, 600);
});

/* ----------------------------
      page loader
  ------------------------------- */

/* ----------------------------
      whatsapp
  ------------------------------- */
$(document).on("click", "#send-it", function () {
  var a = document.getElementById("chat-input");
  if ("" != a.value) {
    var b = $("#get-number").text(),
      c = document.getElementById("chat-input").value,
      d = "https://web.whatsapp.com/send",
      e = b,
      f = "&text=" + c;
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    )
      var d = "whatsapp://send";
    var g = d + "?phone=" + e + f;
    window.open(g, "_blank");
  }
}),
  $(document).on("click", ".informasi", function () {
    (document.getElementById("get-number").innerHTML = $(this)
      .children(".my-number")
      .text()),
      $(".start-chat,.get-new").addClass("show").removeClass("hide"),
      $(".home-chat,.head-home").addClass("hide").removeClass("show"),
      (document.getElementById("get-nama").innerHTML = $(this)
        .children(".info-chat")
        .children(".chat-nama")
        .text()),
      (document.getElementById("get-label").innerHTML = $(this)
        .children(".info-chat")
        .children(".chat-label")
        .text());
  }),
  $(document).on("click", ".close-chat", function () {
    $("#whatsapp-chat").addClass("hide").removeClass("show");
  }),
  $(document).on("click", ".blantershow-chat", function () {
    $("#whatsapp-chat").addClass("show").removeClass("hide");
  });

/* ----------------------------
      countdown
  ------------------------------- */
(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;
  let today = new Date(),
    dd = String(today.getDate()).padStart(2, "0"),
    mm = String(today.getMonth() + 1).padStart(2, "0"),
    yyyy = today.getFullYear(),
    nextYear = yyyy + 0,
    dayMonth = "08/08/",
    birthday = dayMonth + yyyy;

  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end

  const countDown = new Date(birthday).getTime(),
    x = setInterval(function () {
      const now = new Date().getTime(),
        distance = countDown - now;

      (document.getElementById("days").innerText = Math.floor(distance / day)),
        (document.getElementById("hours").innerText = Math.floor(
          (distance % day) / hour
        )),
        (document.getElementById("minutes").innerText = Math.floor(
          (distance % hour) / minute
        )),
        (document.getElementById("seconds").innerText = Math.floor(
          (distance % minute) / second
        ));

      //do something later when date is reached
      if (distance < 0) {
        document.getElementById("headline").innerText = "It's my birthday!";
        document.getElementById("countdown").style.display = "none";
        document.getElementById("content").style.display = "block";
        clearInterval(x);
      }
      //seconds
    }, 0);
})();
/* ----------------------------
    benefits carousel
------------------------------- */
$(".programs-carousel").owlCarousel({
  loop: true,
  margin: 0,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
      nav: false,
    },
    1000: {
      items: 2,
    },
  },
});

/* ----------------------------
      curriculum image
  ------------------------------- */
let image = document.getElementById("imgCurriculum");
let images = [
  "../img/gallery/gallery-1.webp",
  "../img/gallery/gallery-2.webp",
  "../img/gallery/gallery-3.webp",
  "../img/gallery/gallery-4.webp",
  "../img/gallery/gallery-5.webp",
  "../img/gallery/gallery-6.webp",
  "../img/gallery/gallery-7.webp",
  "../img/gallery/gallery-8.webp",
  "../img/gallery/gallery-9.webp",
  "../img/gallery/gallery-10.webp",
];
setInterval(function () {
  let random = Math.floor(Math.random() * 10);
  image.src = images[random];
}, 1000);
/* ----------------------------
    price carousel
------------------------------- */
$(".price-carousel").owlCarousel({
  loop: true,
  margin: 0,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
      nav: false,
    },
  },
});

/* ----------------------------
    testimonial slider
------------------------------- */
function testimonialSlider() {
  const testimonialCarousel = document.getElementById("testimonialCarousel");
  testimonialCarousel.addEventListener("slid.bs.carousel", function () {
    const activeItem = this.querySelector(".active");
    document.querySelector(".testi-img img").src =
      activeItem.getAttribute("data-img");
    document.querySelector(".testi-img .circle").style.backgroundColor =
      activeItem.getAttribute("data-color");
  });
}
testimonialSlider();

/* ----------------------------
    team slider
------------------------------- */
function teamSlider() {
  const carouselOne = document.getElementById("carouselTeam");
  if (carouselOne) {
    carouselOne.addEventListener("slide.bs.carousel", function () {
      const activeItem = this.querySelector(".active");
      document.querySelector(".js-team-img").src =
        activeItem.getAttribute("data-img");
    });
  }
}
teamSlider();

/* ----------------------------
    course preview video
------------------------------- */
function coursePreviewVideo() {
  const coursePreviewVideo = document.querySelector(".js-course-preview-modal");
  if (coursePreviewVideo) {
    // if element exist
    coursePreviewVideo.addEventListener("shown.bs.modal", function () {
      this.querySelector(".js-course-preview-video").play();
      this.querySelector(".js-course-preview-video").currentTime = 0;
    });

    coursePreviewVideo.addEventListener("hide.bs.modal", function () {
      this.querySelector(".js-course-preview-video").pause();
    });
  }
}
coursePreviewVideo();

/* ----------------------------
    header menu
------------------------------- */
function headerMenu() {
  const menu = document.querySelector(".js-header-menu"),
    backdrop = document.querySelector(".js-header-backdrop"),
    menuCollapseBreakpoint = 991;

  function toggleMenu() {
    menu.classList.toggle("open");
    backdrop.classList.toggle("active");
    document.body.classList.toggle("overflow-hidden");
  }

  document.querySelectorAll(".js-header-menu-toggler").forEach((item) => {
    item.addEventListener("click", toggleMenu);
  });

  // close the menu by click outside of it
  backdrop.addEventListener("click", toggleMenu);

  function collapse() {
    menu.querySelector(".active .js-sub-menu").removeAttribute("style");
    menu.querySelector(".active").classList.remove("active");
  }

  menu.addEventListener("click", (event) => {
    const { target } = event;

    if (
      target.classList.contains("js-toggle-sub-menu") &&
      window.innerWidth <= menuCollapseBreakpoint
    ) {
      // prevent default anchor click behavior
      event.preventDefault();

      // if menu already expanded, collapse it and exit
      if (target.parentElement.classList.contains("active")) {
        collapse();
        return;
      }

      // if not already expanded, run code below

      // collapse the other expanded menu item if exists
      if (menu.querySelector(".active")) {
        collapse();
      }

      // expand new menu-item
      target.parentElement.classList.add("active");
      target.nextElementSibling.style.maxHeight =
        target.nextElementSibling.scrollHeight + "px";
    }
  });

  // when resizing window
  window.addEventListener("resize", function () {
    if (
      this.innerWidth > menuCollapseBreakpoint &&
      menu.classList.contains("open")
    ) {
      toggleMenu();
    }
    if (
      this.innerWidth > menuCollapseBreakpoint &&
      menu.querySelector(".active")
    ) {
      collapse();
    }
  });
}
headerMenu();
/* ----------------------------
    theme glass effect
------------------------------- */
function themeGlassEffect() {
  const glassEffectCheckbox = document.querySelector(".js-glass-effect"),
    glassStyle = document.querySelector(".js-glass-style");

  glassEffectCheckbox.addEventListener("click", function () {
    if (this.checked) {
      localStorage.setItem("glass-effect", "true");
    } else {
      localStorage.setItem("glass-effect", "false");
    }
    glass();
  });

  function glass() {
    if (localStorage.getItem("glass-effect") === "true") {
      glassStyle.removeAttribute("disabled");
    } else {
      glassStyle.disabled = true;
    }
  }
  if (localStorage.getItem("glass-effect") !== null) {
    glass();
  }
  if (!glassStyle.hasAttribute("disabled")) {
    glassEffectCheckbox.checked = true;
  }
}
themeGlassEffect();
