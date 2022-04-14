var numberOfDrums = document.querySelectorAll('button').length;

for(var i = 0; i < numberOfDrums; i++){
    document.querySelectorAll('button')[i].addEventListener("click", function () {
        buttonAnimation(this.textContent);
        initialiseKey(this.textContent);
    })
}

document.addEventListener('keypress', function(event) {
    buttonAnimation(event.key);
    initialiseKey(event.key);
})

function playSound(audioURL) {
    const audioObject = new Audio(audioURL);
    audioObject.play();
}

function initialiseSound(elementSelector, audioURL) {
    document.querySelector(elementSelector).addEventListener("click", () => {
        playSound(audioURL);
    })
}

function initialiseKey(letter) {
    switch(letter){
        case 'w':
            // var audio = new Audio('../sounds/crash.mp3');
            // audio.play(); 
            initialiseSound('.w', '../sounds/crash.mp3');
        break;  
        case 'a' :
            // var audio = new Audio('../sounds/kick-bass.mp3');
            // audio.play();
            initialiseSound('.a', '../sounds/kick-bass.mp3');
        break;
        case 's' :
            // var audio = new Audio('../sounds/snare.mp3');
            // audio.play();
            initialiseSound('.s', '../sounds/snare.mp3');
        break;
        case 'd' :
            // var audio = new Audio('../sounds/tom-1.mp3');
            // audio.play();
            initialiseSound('.d', '../sounds/tom-1.mp3');
        break;
        case 'j' :
            // var audio = new Audio('../sounds/tom-2.mp3');
            // audio.play();
            initialiseSound('.j', '../sounds/tom-2.mp3');
        break;
        case 'k' :
            // var audio = new Audio('../sounds/tom-3.mp3');
            // audio.play();
            initialiseSound('.k', '../sounds/tom-3.mp3');
        break;
        case 'l' :
            // var audio = new Audio('../sounds/tom-4.mp3');
            // audio.play();
            initialiseSound('.l', '../sounds/tom-4.mp3');
        break;
        default:
            console.log('button not found');
    }
}

function buttonAnimation(button){
    var activeButton = document.querySelector('.' + button);
    activeButton.classList.add('pressed');
    setTimeout(function (){
        activeButton.classList.remove('pressed');
    }, 100)
}