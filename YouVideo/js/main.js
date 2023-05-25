$(document).on("click", ".js-videoPoster", function (ev) {
  ev.preventDefault();
  var $poster = $(this);
  var $wrapper = $poster.closest(".js-videoWrapper");
  videoPlay($wrapper);
});

function videoPlay($wrapper) {
  var $iframe = $wrapper.find(".js-videoIframe");
  var src = $iframe.data("src");
  $wrapper.addClass("videoWrapperActive");
  $iframe.attr("src", src);
}

function videoStop($wrapper) {
  if (!$wrapper) {
    var $wrapper = $(".js-videoWrapper");
    var $iframe = $(".js-videoIframe");
  } else {
    var $iframe = $wrapper.find(".js-videoIframe");
  }
  $wrapper.removeClass("videoWrapperActive");
  $iframe.attr("src", "");
}

$(function () {
  $(".video-popup").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });
});

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});

$(document).ready(function () {
  $("#sidebarCollapse").on("click", function () {
    $("#sidebar, #content").toggleClass("active");
    $(".collapse.in").toggleClass("in");
    $("a[aria-expanded=true]").attr("aria-expanded", "false");
  });
});
