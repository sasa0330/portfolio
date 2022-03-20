const skillTab = {
    skillTabSwitch: function () {
        $(".js-skill-content").each(function () {
            //タイトル
            let $thitTtl = $(this).find(".js-skill-content-ttl");
            //表示するコンテンツ
            let $thitContentDetail = $(this).find(".js-skill-content-detail");

            skillTab.initDispTab();
            $thitTtl.hover(function () {
                skillTab.clearDispTab();
                $thitTtl.addClass("active");
                $thitContentDetail.addClass("active");
            }, function () {
                skillTab.clearDispTab();
                skillTab.initDispTab();
            })
        });
    },
    initDispTab: function () {
        $(".js-skill-content-ttl").eq(0).addClass("active");
        $(".js-skill-content-detail").eq(0).addClass("active");
    },
    clearDispTab: function () {
        $(".js-skill-content-ttl").removeClass("active");
        $(".js-skill-content-detail").removeClass("active");
    }
}

$(function () {
    skillTab.skillTabSwitch();
})




