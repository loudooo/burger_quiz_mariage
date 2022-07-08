
// function template_nuggets_question_with_image(question, propositions, image, soluce) {
//     console.log('[STEP #' + ('00' + step).slice(-3) + '][nuggets] ' + question, soluce);
//     var img_class = '';
//     if (soluce == undefined) img_class = 'animate__animated animate__bounceInRight';
//     $('main').attr('id', 'nuggets-template').html('\
//         <h1>' + question + '</h1> \
//         <img class="image image-nugget '+ img_class + '" src="./photos/' + image + '"> \
//         <ul> \
//             <li ' + (soluce == 0 ? 'animate__animated' : '') + '><b class="text-' + (soluce == 0 ? 'success' : 'primary') + '">A</b> ' + '<span class="text-' + (soluce == 0 ? 'success' : '') + '">' + propositions[0] + '</span></li> \
//             <li ' + (soluce == 0 ? 'animate__animated' : '') + '><b class="text-' + (soluce == 1 ? 'success' : 'primary') + '">B</b> ' + '<span class="text-' + (soluce == 1 ? 'success' : '') + '">' + propositions[1] + '</li> \
//             <li ' + (soluce == 0 ? 'animate__animated' : '') + '><b class="text-' + (soluce == 2 ? 'success' : 'primary') + '">C</b> ' + '<span class="text-' + (soluce == 2 ? 'success' : '') + '">' + propositions[2] + '</li> \
//             <li ' + (soluce == 0 ? 'animate__animated' : '') + '><b class="text-' + (soluce == 3 ? 'success' : 'primary') + '">D</b> ' + '<span class="text-' + (soluce == 3 ? 'success' : '') + '">' + propositions[3] + '</li> \
//         </ul> \
//     ');
//     if (soluce != undefined) {
//         $('.scoring').css({ display: 'block' });
//         $('.scoring').removeClass('animate__animated').removeClass('animate__slideInUp').addClass('animate__animated').addClass('animate__slideInUp');
//     }
//     else {
//         $('.scoring').css({ display: 'none' });
//     }
//     $('main').append('<div id="pagination">' + ('0' + step).slice(-2) + '/' + ('0' + game.length).slice(-2) + '</div>');
// }

// function template_menu_list(menus) {
//     console.log('[STEP #' + ('00' + step).slice(-3) + '][menu]');
//     $('main').attr('id', 'menu-list-template').html('\
//         <h1><span class="text-barbecue">L</span><span class="text-raclette">E</span><span class="text-barbecue">S</span>&nbsp;<span class="text-raclette">M</span><span class="text-barbecue">E</span><span class="text-raclette">N</span><span class="text-barbecue">U</span><span class="text-raclette">S</span></h1> \
//         <ul></ul> \
//     ');
//     for (var i = 0; i < menus.length; i++) {
//         $('main > ul').append('<li><b class="text-' + (menus[i]['color'] || 'primary') + '">' + (i + 1) + '</b> ' + menus[i]['title'] + '</li>');
//     }
//     $('main').append('<div id="pagination">' + ('0' + step).slice(-2) + '/' + ('0' + game.length).slice(-2) + '</div>');
// }

// function template_menu_question(menu, question) {
//     console.log('[STEP #' + ('00' + step).slice(-3) + '][menu] ' + question);
//     $('main').attr('id', 'menu-question-template').html('\
//         <header> \
//             <span class="text-raclette">M</span><span class="text-barbecue">E</span><span class="text-raclette">N</span><span class="text-barbecue">U</span> \
//             ' + menu + ' \
//         </header> \
//         <h1>' + question + '</h1> \
//     ');
//     $('main').append('<div id="pagination">' + ('0' + step).slice(-2) + '/' + ('0' + game.length).slice(-2) + '</div>');
// }

// function template_addition_question(question) {
//     console.log('[STEP #' + ('00' + step).slice(-3) + '][addition] ' + question);
//     $('main').attr('id', 'addition-question-template').html('\
//         <header><span class="text-raclette">A</span><span class="text-barbecue">D</span><span class="text-raclette">D</span><span class="text-barbecue">I</span><span class="text-raclette">T</span><span class="text-barbecue">I</span><span class="text-raclette">O</span><span class="text-barbecue">N</span></header> \
//         <h1>' + question + '</h1> \
//     ');
//     $('main').append('<div id="pagination">' + ('0' + step).slice(-2) + '/' + ('0' + game.length).slice(-2) + '</div>');
// }

// Question avec image
// game.push(function () { template_nuggets_question_with_image(addition[0]['question'], addition[0]['propositions'], addition[0]['image']); });
// game.push(function () { template_nuggets_question_with_image(addition[0]['question'], addition[0]['propositions'], addition[0]['image'], addition[0]['response']); });
// game.push(function () { screen_score(score_raclette, score_barbecue); });