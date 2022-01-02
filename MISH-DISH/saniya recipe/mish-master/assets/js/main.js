// Menu 

function openMenu() {

  if ($(".navbar-content").hasClass("navbar-open")) {
    $(".navbar-icon").toggleClass("change");
    $(".navbar-content").css("width", "0");
    $(".navbar-content").css("opacity", "0");
    $("body").css("overflow-y", "scroll");
    $(".navbar-content").toggleClass("navbar-open")

  } else {

    if ($(window).width() <= 768) {
      $(".navbar-content img").attr("src", "./assets/images/icons/navbar-logo.png")
      $(".navbar-content").css("width", "100vw");
      $(".navbar-content").css("opacity", "1");
    } else {
      $(".navbar-content").css("width", "60vw");
      $(".navbar-content").css("opacity", "1");
    }
    $(".navbar-icon").toggleClass("change");
    $("body").css("overflow-y", "hidden");
    $(".navbar-content").toggleClass("navbar-open");
  }
}

$(".home-recipe-categories > p").click(function () {
  clickedCat = $(this).attr("id");
  filterCat(clickedCat);
  $(".home-recipe-categories > p").removeClass("active-recipe-cat");
  $(this).addClass("active-recipe-cat");
});

function filterCat(recipeCat) {
  const category = recipeCat.slice(recipeCat.lastIndexOf("-") + 1, recipeCat.length);
  console.log("filter: " + category)
  if (category === "all") {
    $(".home-recipe-grid .home-recipe").fadeIn(500);
  } else {
    $(".home-recipe").hide();
    $(`.home-recipe[data-recipe-type="${category}"`).fadeIn(500);
  }
}


const hideLoader = () => {
  $("html").css("overflow-y", "scroll")
  $(".loader").fadeOut(500);
  $(".page-body").fadeIn(500);
}