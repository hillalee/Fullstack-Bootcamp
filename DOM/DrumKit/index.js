
// detecting mouse clicks
var keys = [".w", ".a", ".s", ".d", ".j", ".k", ".l"];
for (var i = 0; i < keys.length; i++) {
    let key = keys[i]; 
    document.querySelector(key).addEventListener("click", function() { playSound(key[1]); });
}


// detecting keyboard press
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
            buttonAnimation('w');
            break;
        case 'a':
            var audio = new Audio('./sounds/tom-2.mp3');
            audio.play();
            buttonAnimation('a');

            break;
        case 's':
            var audio = new Audio('./sounds/tom-3.mp3');
            audio.play();
            buttonAnimation('s');
            break;
        case 'd':
            var audio = new Audio('./sounds/tom-4.mp3');
            audio.play();
            buttonAnimation('d');

            break;
        case 'j':
            var audio = new Audio('./sounds/snare.mp3');
            audio.play();
            buttonAnimation('j');

            break;
        case 'k':
            var audio = new Audio('./sounds/crash.mp3');
            audio.play();
            buttonAnimation('k');

            break;
        case 'l':
            var audio = new Audio('./sounds/kick-bass.mp3');
            audio.play();
            buttonAnimation('l');

            break;
        default:
            // Handle cases when key doesn't match any condition
            console.log("Invalid key! No sound for you!");
    }
}

// add animation
function buttonAnimation(key) {
    var selectedButton = document.querySelector("." + key);
    selectedButton.classList.add("pressed");
    // wait for a bit
    setTimeout(function() {
        selectedButton.classList.remove("pressed");
    }, 70)

}