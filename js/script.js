/* ハンバーガーアイコンクリック時のドロワーメニュー開閉 */
$("#js-header-icon").on("click", function (e) {
  e.preventDefault();

  $("#js-header-icon").toggleClass("is-checked");
  $("#js-drawer").toggleClass("is-checked");
  $("body").toggleClass("is-fixed");
});

// ドロワーメニューのナビゲーションクリック時、ドロワーメニューを閉じる
$(".drawer__nav").on("click", function (e) {
  e.preventDefault();

  $("#js-header-icon").removeClass("is-checked");
  $("#js-drawer").removeClass("is-checked");
  $("body").removeClass("is-fixed");
});

/* スムーススクロール */
// #で始まるhref属性を指定
$('a[href^="#"]').on("click", function (e) {
  e.preventDefault();

  // hrefに記載されているid名を取得
  const id = $(this).attr("href");

  const target = "#" == id ? "html" : id;

  // 対象idの高さを取得
  const position = $(target).offset().top;

  $("html, body").animate(
    { scrollTop: position },
    500,
    "swing" // or linear
  );
});

/* スクロールしたらふわっと表示されるアニメーション */
const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    // 表示領域に入ったら
    if (entry.isIntersecting) {
      entry.target.classList.add("is-in-view");
      // 表示領域はずれたら
    } else {
      entry.target.classList.remove("is-in-view");
    }
  });
});
const inViewItems = document.querySelectorAll(".js-in-view");
inViewItems.forEach(function (inViewItem) {
  observer.observe(inViewItem);
});
