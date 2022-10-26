//Function for playing Key script
function playKey(e) {
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);

    //Enable animation on key
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);

    //No audio found
    if(!audio) return;

    //Rewind song
    audio.currentTime = 0;

    //Audio found
    audio.play();

    //animation
    key.classList.add('playing');
  }

    //remove animation
    function removeTransition(e){
      if(e.propertyName !== 'transform'){
        //This skips if it's not a transform
        return;
      }
      this.classList.remove('playing');
    }

    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));

    //Adding an event listener to the keys
    window.addEventListener("keydown", playKey);

    