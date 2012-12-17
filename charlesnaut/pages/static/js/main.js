function shiftBoxes() {
    $("#container").removeClass("container");
    $("#container").addClass("container-fluid");
    
    $(".page-box").height("30px");
    $(".page-box").css("float", "none");
    $(".page-title").css("padding-top", "0px");
    $(".page-title").css("line-height", "25px");
}
