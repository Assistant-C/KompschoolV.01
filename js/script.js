scrollSpy('.nav', {
  offset: 120,
  menuActiveTarget: '.list-link',
  sectionClass: '.scrollspy',
  activeClass: 'active',
  scrollContainer: '',
});

// Attach a scroll event listener to the window
$(window).scroll(function() {
  // Get the current scroll position
  var scrollPosition = $(this).scrollTop();

  // Modify image style based on scroll position
  if (scrollPosition > 120) { // Change 200 to the desired scroll position
      $('.nav-logo').hide(); // Modify the image width
      $('.nav-wrapper-logo').show(); // Modify the image width
      $('nav').css({'height':"70px",
                      "justify-content":"center"})
  } else {
      $('.nav-logo').show(); // Reset the image width
      $('.nav-wrapper-logo').hide(); // Modify the image width
      $('nav').css({'height':"120px",
                      "justify-content":"space-around"})
    }
});

var images = ["./img/student-1.png", "./img/student-2.png", "./img/student-3.png","./img/student-4.png"]; // Add your image URLs here
    var currentIndex = 0;
    var imageElement = $(".about-photo");

    function changeImage() {
        // Update the image source
        imageElement.attr("src", images[currentIndex]);

        // Increment the index for the next image (loop back to the beginning if at the end)
        currentIndex = (currentIndex + 1) % images.length;
    }

    // Set an interval to change the image every 3 seconds (3000 milliseconds)
    var interval = setInterval(changeImage, 3000);

    // Optional: Pause the slider on hover
    imageElement.hover(function() {
        clearInterval(interval); // Pause the interval
    }, function() {
        interval = setInterval(changeImage, 3000); // Resume the interval
    });

    function isBlockInViewport($block) {
      var viewportTop = $(window).scrollTop();
      var viewportBottom = viewportTop + $(window).height();
      var blockTop = $block.offset().top;
      var blockBottom = blockTop + $block.height();
      return blockTop <= viewportBottom && blockBottom >= viewportTop;
  }


    // Function to execute when the block enters the viewport
    function onBlockEnter() {
      if (isBlockInViewport($('.advantages'))) {
          // Execute your function when the block is in view
          yourFunction(); // Replace with your actual function call
          // You can also unbind the scroll event if you only want it to trigger once
          $(window).off('scroll', onBlockEnter);
      }
  }

  // Bind the scroll event to the onBlockEnter function
  $(window).on('scroll', onBlockEnter);

  // Your function to execute when the block is in view
  function yourFunction() {
    addDialogue(messages[0]);
  }

const twenty_years_slider = new Swiper('.twenty-years-slider', {
  navigation: {
    nextEl: '.twenty-years-button-next',
    prevEl: '.twenty-years-button-prev',
  },
  scrollbar: {
    snapOnRelease: true,
    el: '.twenty-years-scrollbar',
    hide: false,
    draggable: true,
  },
});

const story_slider = new Swiper('.story-slider', {
  navigation: {
    nextEl: '.story-button-next',
    prevEl: '.story-button-prev',
  },
  rewind: true,
  slidesPerView: 2,
  spaceBetween: 18,
});

const students_slider = new Swiper('.students-slider', {
  spaceBetween: 30,
  rewind: true,
  scrollbar: {
    el: '.students-scrollbar',
    hide: false,
    draggable: true,
  },
});

const reviews = new Swiper('.reviews-slider', {
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
  breakpoints: {
    0: { slidesPerView: 1 },
    480: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
  },
});

const collective = new Swiper('.collective', {
  spaceBetween: 20,
  slidesPerView: 4,
  navigation: {
    nextEl: '.collective-button-next',
    prevEl: '.collective-button-prev',
  },
  scrollbar: {
    snapOnRelease: true,
    el: '.collective-scrollbar',
    hide: false,
    draggable: true,
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    480: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1120: { slidesPerView: 4 },
  },
});

const swiper = new Swiper('.mySwiper', {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});

const swiper2 = new Swiper('.mySwiper2', {
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    snapOnRelease: true,
    el: '.gallery-scrollbar',
    hide: false,
    draggable: true,
  },
  thumbs: {
    swiper: swiper,
  },
});

const curriculumMixContainer = document.querySelector('#curriculum');
const reviewsMixContainer = document.querySelector('#reviews');

const mixerCurriculum = mixitup(curriculumMixContainer, {
  load: {
    filter: '.filter-1',
  },
  controls: {
    scope: 'local',
  },
});

const mixerReviews = mixitup(reviewsMixContainer, {
  load: {
    filter: 'all',
  },
  controls: {
    scope: 'local',
  },
  callbacks: {
    onMixStart: function () {
      reviews.update();
      reviews.allowSlideNext = false;
      reviews.allowSlidePrev = false;
      reviews.allowTouchMove = false;
    },
    onMixEnd: function () {
      reviews.update();
      reviews.allowSlideNext = true;
      reviews.allowSlidePrev = true;
      reviews.allowTouchMove = true;
    },
  },
});
