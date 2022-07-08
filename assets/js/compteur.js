

function secondPlayRaclette() {
    console.log("secondPlayRaclette");
    $("body").removeClass("play");
    var aa = $("ul.secondPlayRaclette li.active");

    if (aa.html() == undefined) {
        aa = $(" ul.secondPlayRaclette li").eq(0);
        aa.addClass("before")
            .removeClass("active")
            .next("li")
            .addClass("active")
            .closest("body")
            .addClass("play");

    }
    else if (aa.is(":last-child")) {
        $("ul.secondPlayRaclette li").removeClass("before");
        aa.addClass("before").removeClass("active");
        aa = $("ul.secondPlayRaclette li").eq(0);
        aa.addClass("active")
            .closest("body")
            .addClass("play");
        minutePlayRaclette();
    }
    else {
        $("ul.secondPlayRaclette li").removeClass("before");
        aa.addClass("before")
            .removeClass("active")
            .next("li")
            .addClass("active")
            .closest("body")
            .addClass("play");
    }

}

function secondPlayBarbecue() {
    $("body").removeClass("play");
    var aa = $("ul.secondPlayBarbecue li.active");

    if (aa.html() == undefined) {
        aa = $(" ul.secondPlayBarbecue li").eq(0);
        aa.addClass("before")
            .removeClass("active")
            .next("li")
            .addClass("active")
            .closest("body")
            .addClass("play");

    }
    else if (aa.is(":last-child")) {
        $("ul.secondPlayBarbecue li").removeClass("before");
        aa.addClass("before").removeClass("active");
        aa = $("ul.secondPlayBarbecue li").eq(0);
        aa.addClass("active")
            .closest("body")
            .addClass("play");
        minutePlayBarbecue();
    }
    else {
        $("ul.secondPlayBarbecue li").removeClass("before");
        aa.addClass("before")
            .removeClass("active")
            .next("li")
            .addClass("active")
            .closest("body")
            .addClass("play");
    }

}

function minutePlayRaclette() {
    $("body").removeClass("play");
    var aa = $("ul.minutePlayRaclette li.active");

    if (aa.html() == undefined) {
        aa = $("ul.minutePlayRaclette li").eq(0);
        aa.addClass("before")
            .removeClass("active")
            .next("li")
            .addClass("active")
            .closest("body")
            .addClass("play");

    }
    else if (aa.is(":last-child")) {
        $("ul.minutePlayRaclette li").removeClass("before");
        aa.addClass("before").removeClass("active");
        aa = $("ul.minutePlayRaclette li").eq(0);
        aa.addClass("active")
            .closest("body")
            .addClass("play");
    }
    else {
        $("ul.minutePlayRaclette li").removeClass("before");
        aa.addClass("before")
            .removeClass("active")
            .next("li")
            .addClass("active")
            .closest("body")
            .addClass("play");
    }
}

function minutePlayBarbecue() {
    $("body").removeClass("play");
    var aa = $("ul.minutePlayBarbecue li.active");

    if (aa.html() == undefined) {
        aa = $("ul.minutePlayBarbecue li").eq(0);
        aa.addClass("before")
            .removeClass("active")
            .next("li")
            .addClass("active")
            .closest("body")
            .addClass("play");

    }
    else if (aa.is(":last-child")) {
        $("ul.minutePlayBarbecue li").removeClass("before");
        aa.addClass("before").removeClass("active");
        aa = $("ul.minutePlayBarbecue li").eq(0);
        aa.addClass("active")
            .closest("body")
            .addClass("play");
    }
    else {
        $("ul.minutePlayBarbecue li").removeClass("before");
        aa.addClass("before")
            .removeClass("active")
            .next("li")
            .addClass("active")
            .closest("body")
            .addClass("play");
    }
}

function hideTopScore() {
    $(".raclette_score").removeClass('animate__fadeInDown').removeClass('animate__animated').removeClass('animate__fadeOutUp').addClass('animate__animated').addClass('animate__fadeOutUp');
    $(".barbecue_score").removeClass('animate__fadeInDown').removeClass('animate__animated').removeClass('animate__fadeOutUp').addClass('animate__animated').addClass('animate__fadeOutUp');
}

function displayTopScore() {
    $(".raclette_score").removeClass('animate__fadeInDown').removeClass('animate__animated').removeClass('animate__fadeOutUp').addClass('animate__animated').addClass('animate__fadeInDown');
    $(".barbecue_score").removeClass('animate__fadeInDown').removeClass('animate__animated').removeClass('animate__fadeOutUp').addClass('animate__animated').addClass('animate__fadeInDown');
}


function hideBottomScore() {
    $('.scoring').removeClass()
        .addClass('animate__animated').addClass('animate__slideInDown');
}

function displayBottomScore() {
    $('.scoring').removeClass()
        .addClass('animate__animated').addClass('animate__slideInUp');
}



