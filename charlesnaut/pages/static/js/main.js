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
    
    $(".page-box").css("float", "none");

}
