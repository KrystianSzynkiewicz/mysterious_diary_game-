export function fullscreen () {
    const fullButton = document.getElementById('fullButton');

    fullButton.addEventListener('click', () => {
        document.querySelector('body').requestFullscreen();
    })
}

//fotation Functions
const rotateButton = document.getElementById('rotateButton');
let portrait = window.matchMedia("(orientation: portrait)");

export function rotationCheker () {
    portrait.addEventListener("change", function(e) {
        if(e.matches) {
            // console.log("Portrait mode! TEST")
            // Portrait mode
            rotateButton.classList.remove('deactive');
        } else {
            // console.log("landscape mode! TEST")
            // Landscape
            rotateButton.classList.add('deactive');
        }
    })
}


export function startScreenCheker () {

    window.addEventListener("load", function(e) {
        if(this.window.innerWidth < 500) {
            // console.log("Portrait mode! TEST!!!!")
            // Portrait mode
            rotateButton.classList.remove('deactive');
        } else {
            // console.log("landscape mode! TEST!!!!!")
            // Landscape
            rotateButton.classList.add('deactive');
        }
        // console.log(this.window.innerWidth)
    })

}