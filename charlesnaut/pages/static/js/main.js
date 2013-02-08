function shiftBoxes() {
    $(".page-box").animate({
        height: "30px",
        float: "none"
    });
    
    $(".page-title").animate({ 
        'padding-top': "0px",
        'line-height': "25px"
    });

    $("#container").removeClass("container");
    $("#container").addClass("container-fluid");
    
    $("#page-boxes").addClass("span3");
    $(".page-box").css("float", "none");
    $(".page-box").removeClass("span4");

}

function showPage(id) {
    setTimeout(function() { showPageNow(id); }, 350);
}

function showPageNow(id) {
    $("#" + id).removeClass("hidden-page");
    
    var position = $("#" + id + "-box").position();
    $("#" + id).offset({ top: position.top, left: position.left + 250 });
}

function transitionPage(id){
    if($(".current-page").attr('id') == id)
        return;
    
    $(".current-page").slideUp(600, "linear", function() {
            $("#" + id).removeClass("hidden-page"); 
            $(".current-page").addClass("hidden-page");
            $(".current-page").removeClass("current-page");
            $("#" + id).addClass("current-page"); 
            $("#" + id).show()});
    //$("#" + id).slideUp();
}

$().ready(function() {
    var $banner = $("#banner");
    var $sideBar = $("#side-bar");

    $(window).scroll(function(){            
        var scrollTop = $(window).scrollTop();
        var bannerHeight = $banner.height();
        var marginTop = scrollTop - bannerHeight;
        marginTop = (marginTop < 0) ? 0 : marginTop;
        $sideBar.css({'margin-top': marginTop + "px"});
    });
});
