var raycast = raycast || {};

window.requestAnimFrame = (function(){
    return window.requestAnimationFrame       || 
    window.webkitRequestAnimationFrame || 
    window.mozRequestAnimationFrame    || 
    window.oRequestAnimationFrame      || 
    window.msRequestAnimationFrame     || 
    function(callback, element){
        window.setTimeout(callback, 1000 / 60);
    };
})();

function start() {
    document.onkeyup = raycast.keyhandler.onKeyup;
    document.onkeydown = raycast.keyhandler.onKeydown;
    var textureFiles = ["https://stackblitz.com/files/web-platform-zudkyt/github/MrLordBrown/raycast/master/img/brick.png", "https://stackblitz.com/files/web-platform-zudkyt/github/MrLordBrown/raycast/master/img/ground.png", "https://stackblitz.com/files/web-platform-zudkyt/github/MrLordBrown/raycast/master/img/sky.png"];
    raycast.texture.initiateLoad(textureFiles, raycast.engine.start);
};
  
window.onload = start;