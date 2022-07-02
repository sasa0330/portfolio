const skillTab = {
    skillTabSwitchPc: function () {
        $(".js-skill-content").each(function (index) {
            //タイトル
            let $thitTtl = $(this).find(".js-skill-content-ttl");
            //表示するコンテンツ
            let $thitContentDetail = $(this).find(".js-skill-content-detail");
            if (index === 0) {
                $(".js-skill-content-ttl").removeClass("active");
                $(".js-skill-content-detail").removeClass("active");
                $thitTtl.addClass("active");
                $thitContentDetail.addClass("active");
            }
            $thitTtl.on("click", function () {
                $(".js-skill-content-ttl").removeClass("active");
                $(".js-skill-content-detail").removeClass("active");
                $thitTtl.addClass("active");
                $thitContentDetail.addClass("active");
            })
        });
    },
    skillTabSwitchSp: function () {
        $(".js-skill-content").each(function () {
            let $currentThis = $(this);
            $currentThis.find(".js-skill-content-ttl").on("click", function () {
                $(this).toggleClass("active");
                $currentThis.find(".js-skill-content-detail").toggleClass("active");
            })
        })
    }
}

$(function () {
    if (window.matchMedia('(max-width: 767px)').matches) {
        //スマホ処理
        skillTab.skillTabSwitchSp();
    } else if (window.matchMedia('(min-width:768px)').matches) {
        //PC処理
        skillTab.skillTabSwitchPc();
    }
})




