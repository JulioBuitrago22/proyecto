function handleBtnClick(event) {
    toggleButton(event.target);
  }
  
  function handleBtnKeyDown(event) {
    // Check to see if space or enter were pressed
    if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") { // "Spacebar" for IE11 support
      // Prevent the default action to stop scrolling when space is pressed
      event.preventDefault();
      toggleButton(event.target);
    }
  }
  
  function toggleButton(element) {
    var audio = document.getElementById('audio');
    // Check to see if the button is pressed
    var pressed = (element.getAttribute("aria-pressed") === "true");
    // Change aria-pressed to the opposite state
    element.setAttribute("aria-pressed", !pressed);
    // toggle the play state of the audio file
    if(pressed) {
       audio.pause();
    } else {
       audio.play();
    }
  }
