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
    $("#" + id).removeClass("hidden-page");
    $(".current-page").addClass("hidden-page");
    $(".current-page").removeClass("current-page");
    $("#" + id).addClass("current-page");
}
