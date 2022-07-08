var score_raclette = 0;
var score_barbecue = 0;
var mode_addition = false;
var step_mode = null;
var cpt_question = 1;
const nb_questions = 19;

var step = 0;

$(document).keypress(function (event) {
    switch (event.which || event.keyCode) {
        case 27: screen_home(); break; // Home (Escape)
        case 32: screen_next(); break; // Next (Space)
        case 39: screen_next(); break; // Next (Right Arrow)
        case 37: screen_previous(); break; // Previous (Left Arrow)
        case 98: screen_burger(); break; // Burger Jingle (B)
        case 110: screen_nuggets(); break; // Nuggets Jingle (N)
        case 109: screen_menu(); break; // Menu Jingle (M)
        case 97: screen_addition(); break; // Addition Jingle (A)
        case 115: screen_score(score_raclette, score_barbecue); break; // Score (S)
        // case 38: screen_score(15, 12); break; // Win Raclette (& // 1)
        // case 233: screen_score(12, 15); break; // Win Barbecue (é // 2)
    }
});

$(document).mousedown(function (event) {
    setTimeout(() => {
        $('.scoring').css({ display: 'none' });
        $('main').removeClass('animate__animated').removeClass('animate__fadeInDown');
        switch (event.which) {
            case 1: screen_next(); break; // Left
            case 2: break; // Middle
            case 3: screen_previous(); break; // Right
        }
    }, 300);

})

/***********************************************************************
 * SCREENS
 ***********************************************************************/

function screen_home() {
    console.log('[STEP #' + ('00' + step).slice(-3) + '][home] ./images/burger-quiz.png');
    if ($('main').attr('id') == 'home-screen') return screen_ready();
    $('main').attr('id', 'home-screen').html('\
        <img src="./images/burger-quiz.png"> \
    ');
    $('main').append('<div id="pagination">' + ('0' + step).slice(-2) + '/' + ('0' + game.length).slice(-2) + '</div>');
}

function screen_ready() {
    score_raclette = 0;
    score_barbecue = 0;
    step = 0;
    console.log('[STEP #00][ready] waiting for key press ...');
    $('main').attr('id', 'ready-screen').html('\
        <h1>Mariage Murielle &amp; Maxime - Le Quiz</h1> \
        \<img class="image_intro" src="./photos/intro.png">\
        <span class="date_intro">2 juillet 2022</span> \
        <video autoplay loop height="0px"><source src="./videos/burger-quiz-musique.mp4" type="video/mp4"></video> \
    ');
    $('main').append('<div id="pagination">' + ('0' + step).slice(-2) + '/' + ('0' + game.length).slice(-2) + '</div>');
    window.focus();
}

function screen_next() {
    step = Math.min(step + 1, game.length);
    game[step]();
}

function screen_previous() {
    step = Math.max(step - 1, 0);
    game[step]();
}

function screen_burger() {
    console.log('[STEP #' + ('00' + step).slice(-3) + '][burger]');
    $('main').attr('id', 'video-screen').html('\
        <video autoplay><source src="./videos/burger_quiz_generique_perso.mp4" type="video/mp4"></video> \
    ');
    $('main').append('<div id="pagination">' + ('0' + step).slice(-2) + '/' + ('0' + game.length).slice(-2) + '</div>');
}

function screen_nuggets() {
    displayTopScore();
    console.log('[STEP #' + ('00' + step).slice(-3) + '][nuggets] ./videos/burger-quiz-nuggets.mp4');
    $('main').attr('id', 'video-screen').attr('class', 'hide-tmc').html('\
        <video autoplay><source src="./videos/burger-quiz-nuggets.mp4" type="video/mp4"></video> \
    ');
    $('main').append('<div id="pagination">' + ('0' + step).slice(-2) + '/' + ('0' + game.length).slice(-2) + '</div>');
}

function screen_menu() {
    console.log('[STEP #' + ('00' + step).slice(-3) + '][menu] ./videos/burger-quiz-menu.mp4');
    $('main').attr('id', 'video-screen').attr('class', 'hide-tmc').html('\
        <video autoplay><source src="./videos/burger-quiz-menu.mp4" type="video/mp4"></video> \
    ');
    $('main').append('<div id="pagination">' + ('0' + step).slice(-2) + '/' + ('0' + game.length).slice(-2) + '</div>');
}

function screen_addition() {
    console.log('[STEP #' + ('00' + step).slice(-3) + '][addition] ./videos/burger-quiz-addition.mp4');
    $('main').attr('id', 'video-screen').attr('class', 'hide-tmc').html('\
        <video autoplay><source src="./videos/burger-quiz-addition.mp4" type="video/mp4"></video> \
    ');
    $('main').append('<div id="pagination">' + ('0' + step).slice(-2) + '/' + ('0' + game.length).slice(-2) + '</div>');
}

function screen_score(raclette, barbecue) {
    step_mode = 'score';
    score_raclette = parseInt(raclette || 0);
    score_barbecue = parseInt(barbecue || 0);
    console.log('[STEP #' + ('00' + step).slice(-3) + '][score] ' + ('0' + score_raclette).slice(-2) + ' / ' + ('0' + score_barbecue).slice(-2));
    $('main').attr('id', 'score-screen').html('\
        <div><img src="./images/burger-quiz-points.png"><br> \
        <span class="raclette_under">raclette</span></div> \
        <div class="score text-raclette"><span class="span_score">' + ('0' + score_raclette).slice(-2) + '</span></div> \
        <div><img src="./images/burger-quiz-points.png"><br>\
        <span class="barbecue_under">barbecue</span></div>  \
        <div class="score text-barbecue"><span class="span_score">' + ('0' + score_barbecue).slice(-2) + '</span></div> \
    ');
    $('main').append('<div id="pagination">' + ('0' + step).slice(-2) + '/' + ('0' + game.length).slice(-2) + '</div>');
    $('main').removeClass('animate__animated').removeClass('animate__fadeInDown').addClass('animate__animated').addClass('animate__fadeInDown');
    // hideTopScore();
}

/***********************************************************************
 * TEMPLATES
 ***********************************************************************/

function template_nuggets_question(question, image_question, propositions, image_response, soluce) {
    console.log('[STEP #' + ('00' + step).slice(-3) + '][nuggets] ' + question, soluce, image_question, image_response);
    var str_image = '';
    var img_class = '';
    var html_image_question = '';
    if (soluce == undefined)
        img_class = 'animate__animated animate__bounceInRight';
    if (image_question)
        html_image_question = `<img class="image image-nugget-right ${img_class}" src="./photos/${image_question}">`;
    // console.log(image_response, soluce)
    if (image_response && soluce !== undefined) {
        if (image_response.length == 1)
            str_image += ` <img class="image image-nugget-right animate__animated animate__bounceInRight" src="./photos/${image_response[0]}"> `;
        if (image_response.length == 2) {
            str_image += ` <img class="image image-nugget-right animate__animated animate__bounceInRight" src="./photos/${image_response[0]}"> `;
            str_image += ` <img class="image image-nugget-left animate__animated animate__delay-400ms animate__bounceInLeft" src="./photos/${image_response[1]}"> `;
        }
        if (image_response.length == 3) {
            str_image += ` <img class="image image-nugget-right animate__animated animate__bounceInRight" src="./photos/${image_response[0]}"> `;
            str_image += ` <img class="image image-nugget-left animate__animated animate__delay-200ms animate__bounceInLeft" src="./photos/${image_response[1]}"> `;
            str_image += ` <img class="image image-nugget-bottom animate__animated animate__delay-400ms animate__bounceInUp" src="./photos/${image_response[2]}"> `;

        }
    }
    var html_cpt = `<span class="cpt_question">${cpt_question}/${nb_questions}</span>`;
    $('main').attr('id', 'nuggets-template').html(html_cpt+'\
        <h1>' + question + '</h1> ' + str_image + html_image_question + '\
        <ul> \
            <li class="' + (soluce == 0 ? 'animate__animated animate__headShake' : '') + '"><b class="letter text-' + (soluce == 0 ? 'success' : 'primary') + '">A</b> ' + '<span class="text-' + (soluce == 0 ? 'success' : '') + '">' + propositions[0] + '</span></li> \
            <li class="' + (soluce == 1 ? 'animate__animated animate__headShake' : '') + '"><b class="letter text-' + (soluce == 1 ? 'success' : 'primary') + '">B</b> ' + '<span class="text-' + (soluce == 1 ? 'success' : '') + '">' + propositions[1] + '</li> \
            <li class="' + (soluce == 2 ? 'animate__animated animate__headShake' : '') + '"><b class="letter text-' + (soluce == 2 ? 'success' : 'primary') + '">C</b> ' + '<span class="text-' + (soluce == 2 ? 'success' : '') + '">' + propositions[2] + '</li> \
            <li class="' + (soluce == 3 ? 'animate__animated animate__headShake' : '') + '"><b class="letter text-' + (soluce == 3 ? 'success' : 'primary') + '">D</b> ' + '<span class="text-' + (soluce == 3 ? 'success' : '') + '">' + propositions[3] + '</li> \
        </ul> \
    ');
    if (soluce != undefined) {
        $('.scoring').css({ display: 'block' });
        $('.scoring').removeClass('animate__animated').removeClass('animate__fadeInUp')
            .addClass('animate__animated').addClass('animate__fadeInUp');
        // var audio = new Audio('son.mp3');
        // audio.play();
        cpt_question++;
    }
    else {
        // $('.scoring').css({ display: 'none' });
    }
    $('main').append('<div id="pagination">' + ('0' + step).slice(-2) + '/' + ('0' + game.length).slice(-2) + '</div>');

}


function template_photo(image, image_zoom, response) {
    console.log('[STEP #' + ('00' + step).slice(-3) + '][photo] ' + image);
    $('main').attr('id', 'photo-template').html('');
    if (image_zoom) {
        $('main').append('<img class="image image-back" src="./photos/' + image + '">');
        $('main').append('<img class="image-zoom" src="./photos/' + image_zoom + '">');
    } else {
        $('main').append('<img class="image" src="./photos/' + image + '">');
    }
    if (response) {
        $('.scoring').css({ display: 'block' });
    }
    $('main').append('<div id="pagination">' + ('0' + step).slice(-2) + '/' + ('0' + game.length).slice(-2) + '</div>');
}

/***********************************************************************
 * GAME
 ***********************************************************************/



function menus_color(colors) { for (var i = 0; i < menus.length; i++) { menus[i]['color'] = colors[i] || null; } }
var menus = [
    {
        title: 'Liste des personnes ayant déjà vu Bastien énervé',
        color: null,
        questions: [],
    },
    {
        title: 'Bastien, un sportif accompli',
        color: null,
        questions: [
            'Comment célèbre-t-il la fin d\'un passage difficile&nbsp;?',
            'Qu’est ce qui l\'a dérouté de la victoire lors du crosstri du Verdon&nbsp;?',
            'Quelle récompense s\'offre t il après une belle sortie vélo&nbsp;?',
            'Quelle autre récompense s\'offre t il après une autre sortie vélo&nbsp;?',
        ],
    },
    {
        title: 'Bastien, vrai ou faux shaper',
        color: null,
        questions: [],
    },
];

// var addition = [
//     'Que représente cette photo ? ',
//     'Pourquoi a-t-il toujours été considéré comme le beau gosse de l\'équipe &nbsp;?',
// ];


var game = Array();

game.push(function () { screen_ready(); });

game.push(function () { screen_burger(); });
game.push(function () { screen_score(0, 0); });
game.push(function () { screen_nuggets(); });



// Questions nuggets
for (let i = 0; i < 19; i++) {
    game.push(function () { template_nuggets_question(nuggets[i]['question'], nuggets[i]['image_question'], nuggets[i]['propositions'], nuggets[i]['image_response']); });
    game.push(function () { template_nuggets_question(nuggets[i]['question'], nuggets[i]['image_question'], nuggets[i]['propositions'], nuggets[i]['image_response'], nuggets[i]['response']); });
    if ((i + 1) % 5 == 0) {
        game.push(function () { screen_score(score_raclette, score_barbecue); });
    }
}
game.push(function () { screen_score(score_raclette, score_barbecue); });


// game.push(function () { screen_addition(); });
// game.push(function () { screen_score(score_raclette, score_barbecue); });
// game.push(function () { menus_color([null, null, null, null]); template_menu_list(menus.slice(0, 1)); });
// game.push(function () { menus_color([null, null, null, null]); template_menu_list(menus.slice(0, 2)); });
// game.push(function () { menus_color([null, null, null, null]); template_menu_list(menus.slice(0, 3)); });
// game.push(function () { menus_color([null, null, null, null]); template_menu_list(menus.slice(0, 4)); });

// game.push(function () { menus_color([null, 'raclette', null, null]); template_menu_list(menus.slice(0, 4)); });
// game.push(function () { template_menu_question(menus[1]['title'], menus[1]['questions'][0]); });
// game.push(function () { template_photo('portesoleil.png'); });
// game.push(function () { template_photo('portesoleil.png', 'portesoleil-zoom.png'); });
// game.push(function () { template_menu_question(menus[1]['title'], menus[1]['questions'][1]); });
// game.push(function () { template_photo('verdon.png'); });
// game.push(function () { template_menu_question(menus[1]['title'], menus[1]['questions'][2]); });
// game.push(function () { template_photo('portesoleil2.png'); });
// game.push(function () { template_menu_question(menus[1]['title'], menus[1]['questions'][3]); });
// game.push(function () { template_photo('ardeche.JPG'); });
// game.push(function () { template_photo('ardeche.JPG', 'ardeche-zoom.png', true); });

// game.push(function () { screen_score(score_raclette, score_barbecue); });
// game.push(function () { screen_addition(); });
// game.push(function () { screen_score(score_raclette, score_barbecue); });
// game.push(function () { template_addition_question(addition[0]); });
// game.push(function () { template_photo('axe.png', null, true); });
// game.push(function () { screen_score(score_raclette, score_barbecue); });

// game.push(function () { template_addition_question(addition[1]); });
// game.push(function () { template_photo('style.png', null, true); });
// game.push(function () { screen_score(score_raclette, score_barbecue); });

/***********************************************************************
 * MAIN
 ***********************************************************************/

step = 0;
game[step]();

$(function () {
    $(".raclette").click(function () {
        secondPlayRaclette();
        score_raclette++;
        $('.scoring').css({ display: 'none' });
    });
    $(".barbecue").click(function () {

        secondPlayBarbecue();
        score_barbecue++;
        $('.scoring').css({ display: 'none' });
    });
    console.log('eventScore : ', score_raclette, " : ", score_barbecue);
    hideTopScore();
});
