/**
 * Created by Alejandro Leon on 16/06/2015.
 */
/*window.onload = function(){
    document.addEventListener('keydown',move);
    document.addEventListener('keyup', stop);

};
var sprite = document.getElementById("sprite");
var left = 0;

function move(e) {
    *//*console.log(e.keyCode);*//*
    var keyCode = e.keyCode;
    if (keyCode == 68 || keyCode == 39) {
        sprite.className = "rightWalk";
        left+=sprite.clientWidth/15;
    }
    if (keyCode == 65 || keyCode == 37) {
        sprite.className = "leftWalk";
        left-=sprite.clientWidth/15;
    }
    sprite.style.left = left + 'px';
}

function stop(e){
    var keyCode = e.keyCode;
    if(keyCode == 68 || keyCode == 39){
        sprite.className="stopRight";
    }
    if(keyCode == 65 || keyCode == 37){
        sprite.className="stopLeft";
    }
}*/

function pj(idScope, options){

    /*OPCIONES*/

    var spriteRoute = options.spriteRoute;
    var boxSize = options.boxSize; //w = Widch h = Height.
    var movement = options.movement; //TODO: 1(Default) = left & right, 2 = top, right, bottom, left.

    /*Animation & Mapping*/
    var steps = options.steps; //number of images to animate.
    var time = options.timming; //in Seconds

    /* Use call -> l = X axis & t = Y axis, at all of this properties*/
    var positionLeft = options.positionLeft;
    var positionRight = options.positionRight;
    var positionTop = options.positionTop;
    var positionBottom = options.positionBottom;
    var stopLeftPosition = options.stopLeftPosition;
    var stopRightPosition = options.stopRightPosition;
    var stopTopPosition = options.stopTopPosition;
    var stopBottomPosition = options.stopBottomPosition;

    /*Keycodes*/ //TODO: Definir uso en función.
    var kLeft = options.keyLeft;
    var kRight = options.keyRight;
    var kTop = options.keyTop;
    var kBottom = options.keyBottom;

    /*helpers*/
    var left = 0;
    var sprite = document.getElementById(idScope);
    var head=document.getElementsByTagName('head')[0];

    /*Metodos*/
    function start(){
        //LISTENERS
        document.addEventListener('keydown',move);
        document.addEventListener('keyup', stop);

        /*TODO: ESPECÍFICO DE MI WEB*/
            sprite.addEventListener('click',moveExpress);
        /*FIN ESPECIFICACIÓN*/


        //Setup del CSS

        /*var css = document.createElement('style');
        css.type = 'text/css';
        head.appendChild(css);*/

        var style = (function() {
            // Create the <style> tag
            var style = document.createElement("style");
            style.setAttribute("id", "pjStyle");
            // WebKit hack
            style.appendChild(document.createTextNode(""));

            // Add the <style> element to the page
            document.head.appendChild(style);

            return style;
        })();

        document.getElementById('pjStyle').innerHTML='#'+idScope+'{width:'+boxSize.w+'px;height:'+boxSize.h+'px;background: url("'+spriteRoute+'") top left;background-position: -'+stopRightPosition.l+'px -'+stopRightPosition.t+'px;position: relative;}#'+
            idScope+'.stopRight{background-position: -'+stopRightPosition.l+'px -'+stopRightPosition.t+'px;}#'+idScope+'.rightWalk{background: url("'+spriteRoute+'") top left;animation:rightWalk '+time+'s steps('+steps+') infinite;'+
            '}#'+idScope+'.stopLeft{background-position: -'+stopLeftPosition.l+'px -'+stopLeftPosition.t+'px;}#'+idScope+'.leftWalk{background: url("'+spriteRoute+'") top left;animation:leftWalk '+time+'s steps('+steps+') infinite;}'+
            '@keyframes rightWalk{0% {background-position: -'+positionRight.l[0]+'px -'+positionRight.t[0]+'px;}100% {background-position: -'+positionRight.l[1]+'px -'+positionRight.t[1]+'px;}}@keyframes leftWalk{0% {background-position: -'+positionLeft.l[0]+'px -'+positionLeft.t[0]+'px;}'+
            '100% {background-position: -'+positionLeft.l[1]+'px -'+positionLeft.t[1]+'px;}}';
    };
    start();

    function move(e) {
        //console.log(e.keyCode); //TODO: Comentar esto tras debug.
        var keyCode = e.keyCode;
        //RIGHT
        if (keyCode == 68 || keyCode == 39) {
            sprite.className = "rightWalk";
            infinite();
            left+=sprite.clientWidth/15;
        }
        //LEFT
        if (keyCode == 65 || keyCode == 37) {
            sprite.className = "leftWalk";
            infinite();
            left-=sprite.clientWidth/15;
        }
        sprite.style.left = left + 'px';
    }

    function moveExpress(e) {
       rightWalk();
    }

    function rightWalk(){
        sprite.removeEventListener('click',moveExpress);
        sprite.className = "rightWalk";
        var continuous = setInterval(function(){
            left += sprite.clientWidth / 15;
            sprite.style.left = left + 'px';
            infinite(continuous);
        },60);
    }

    function stop(e){
        var keyCode = e.keyCode;
        //RIGHT
        if(keyCode == 68 || keyCode == 39){
            sprite.className="stopRight";
        }
        //LEFT
        if(keyCode == 65 || keyCode == 37){
            sprite.className="stopLeft";
        }
    }
    function infinite(vari){
        if(left>window.innerWidth){
            left= -options.boxSize.w;
            clearInterval(vari);
        }
    }
}