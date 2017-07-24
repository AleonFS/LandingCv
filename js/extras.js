/**
 * Created by Alejandro Leon on 09/10/2015.
 */
/*Others*/
$(window).load(function () {
    var tech = document.getElementsByClassName('technology');

    for (i = 0; i < tech.length; i++) {
        tech[i].addEventListener('mouseover', function () {
            var text = this.getAttribute("data-hover");
            var color = this.getAttribute("data-color");
            $(this).append($("<span style='color:" + color + "'>" + text + "</span>").fadeIn(500));
        });
        tech[i].addEventListener('mouseout', function () {
            $(this).find("span:last").remove();
        });
    }
    ;
});
