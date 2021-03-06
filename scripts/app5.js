//pages変数を空の関数内に格納
;(function(){

  var $pages;

  function urlChangeHandler() {
    var pageid = parseUrl( location.hash ); //現在のハッシュを渡す

    //js-animation
    // $pages
    // .filter(":visible")
    // .fadeOut(400)
    // .promise() //Deferredオブジェクトを返してもらい
    // .then(function(){ //thenでfadeOutの完了時の処理を登録
    //   $pages.hide() //fadeOut完了のタイミングでhideする
    //     .detach() //一度、配列$pages内の要素をDOMから外し
    //     .filter(".page"+pageid) //表示する要素を見つけ
    //     .appendTo("article") //article要素に追加
    //     .fadeIn(1500);
    // });

    //css Transitions
    // var $page = $pages
    //   .detach()
    //   .removeClass("page-enter")
    //   .filter(".page"+pageid)
    //   .appendTo("article");

    // setTimeout(function() {
    //   $page.addClass("page-enter"); //一度描写させてからこちらでclassを追加
    // }, 0);

    // $pages
    //   .detach()
    //   .removeClass("page-enter")
    //   .filter(".page"+pageid)
    //   .appendTo("article")
    //   .addClass("page-enter")
    //   .on("webkitAnimationEnd", function(){
    //     alert("animationEnd");
    //   });

    // css animation
    var $prevPage = $pages.filter(":visible"); // fadeinと同様に表示中の(fadeout)要素取得
    var $nextPage = $pages.filter(".page"+pageid); //fadein表示する要素も取得

    function enter() {
      $pages.detach();

      $nextPage
        .removeClass("page-enter")
        .appendTo("article")
        .addClass("page-enter");
    }

    if($prevPage.length > 0) {
      $prevPage
        .addClass("page-leave") //fadeoutのanimationが始まる
        .on("webkitAnimationEnd", function onFadeOut() {
          $nextPage
            .off("webkitAnimationEnd", onFadeOut)
            .removeClass("page-leave")
            .detach();
          enter();
        });
    } else {
      enter();
    }

  }

  function parseUrl(url) {
    return url.slice(1) || 1; ////＃を削除。空なら１を返す
  };

  function init() {
    $pages = $("[data-role='page']").detach();
    $(window)
      //windowオブジェクトのhashChangeイベントリスナーに、関数urlChangeHandlerを登録
      .on("hashchange", urlChangeHandler)
      .trigger("hashchange");
  };

  init();

})(); //すぐに実行
