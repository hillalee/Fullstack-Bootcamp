
var keys = [".w", ".a", ".s", ".d", ".j", ".k", ".l"];
for (var i = 0; i < keys.length; i++) {
    let key = keys[i]; 
    document.querySelector(key).addEventListener("click", function() { playSound(key[1]); });
}


document.addEventListener("keydown", function(event) {
    var key = event.key;
    var keyPress = key[key.length - 1].toLowerCase();
    playSound(keyPress);
})


function playSound(key) {
    key 
    switch (key) {
        case 'w':
            var audio = new Audio('./sounds/tom-1.mp3');
            audio.play();
            break;
        case 'a':
            var audio = new Audio('./sounds/tom-2.mp3');
            audio.play();
            break;
        case 's':
            var audio = new Audio('./sounds/tom-3.mp3');
            audio.play();
            break;
        case 'd':
            var audio = new Audio('./sounds/tom-4.mp3');
            audio.play();
            break;
        case 'j':
            var audio = new Audio('./sounds/snare.mp3');
            audio.play();
            break;
        case 'k':
            var audio = new Audio('./sounds/crash.mp3');
            audio.play();
            break;
        case 'l':
            var audio = new Audio('./sounds/kick-bass.mp3');
            audio.play();
            break;
        default:
            // Handle cases when key doesn't match any condition
            console.log("Invalid key! No sound for you!");
    }
}
