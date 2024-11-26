$(document).ready(function() {
  $(".user-type").on("click", function() {
    if($(this).hasClass("user-type2")) {
      return;
    }
      $(".user-type").removeClass("user-type2");
      $(this).addClass("user-type2");
  });
});


// ドロワー
$(document).on("click", ".js-hamburger", function(e) {
  e.preventDefault();
  jQuery(".js-hamburger").toggleClass("is-checked");
  jQuery("#js-drawer").toggleClass("is-checked");
});

// スムーススクロール
$('a[href^="#"').on("click", function(e) {
  const speed = 300;
  const target = jQuery(this).attr("href");
  const position = jQuery(target).offset().top;
  jQuery("html, body").animate(
    {
      scrollTop: position,
    },
    speed,
    "swing"
  );
});

jQuery(document).on("click", "#js-drawer a", function() {
  jQuery(".js-hamburger").removeClass("is-checked");
  jQuery("#js-drawer").removeClass("is-checked");
});
