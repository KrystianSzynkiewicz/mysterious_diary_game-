import {texts} from "./texts.js";
import {langTexts, enterTexts, Passwords} from "./utilityTexts.js";
import {fullscreen, rotationCheker, startScreenCheker} from "./utilityFunctions.js";

//general
const book = document.getElementById('book');
const bookBox = document.getElementById('book__box');
const textPlace = document.getElementById('text__place');
const start = document.getElementById('start');

//audio
const theme = document.getElementById("theme"); 
const theme2 = document.getElementById("theme2"); 
const nextPage = document.getElementById("nextPage");

//lectors
const lector1 = document.getElementById('text1');
const lector2 = document.getElementById('text2');
const lector3 = document.getElementById('text3');

// things
const name = document.getElementById('name');
const form = document.getElementById('form');
const form2 = document.getElementById('form2');
const infoForPlayer = document.getElementById('infoForPlayer');

const passText = document.getElementById('pass');

//LANGUAGE
const langButton = document.getElementById('langButton')
const langFlag = document.getElementById('langFlag')
const langText = document.getElementById('langText')

let lang = 'PL';

// enters

let enter = document.getElementById('enter');
let enterlvl4 = document.getElementById('enterlvl4');
let enterlvl5 = document.getElementById('enterlvl5');
let enterlvl6 = document.getElementById('enterlvl6');
let enterlvl7 = document.getElementById('enterlvl7');
let enterlvl8 = document.getElementById('enterlvl8');
let enterlvl9 = document.getElementById('enterlvl9');
let enterlvl10 = document.getElementById('enterlvl10');

//backgrounds

const bglvl1B = document.getElementById('bglvl1B');
const bglvl2B = document.getElementById('bglvl2B');
const bglvl3B = document.getElementById('bglvl3B');
const bglvl4B = document.getElementById('bglvl4B');
const bglvl5B = document.getElementById('bglvl5B');
const bglvl6B = document.getElementById('bglvl6B');
const bglvl7B = document.getElementById('bglvl7B');
const bglvl8B = document.getElementById('bglvl8B');
const bglvl9B = document.getElementById('bglvl9B');
const bglvl10B = document.getElementById('bglvl10B');


//UTILITY FUNCTIONS

function fadeUp (thing) {
    thing.classList.add('fade__up')
    
    setTimeout(()=>{
    thing.classList.remove('fade__up')
    },2000)
}

function fadeDown (thing) {
    thing.classList.add('fade__down');
    setTimeout(()=>{
        thing.classList.add('deactive');
        thing.classList.remove('fade__down');
    }, 2000)
}

function infoForPlayerPlay (lang) {
    if (lang == "PL") {
        infoForPlayer.innerHTML = langTexts.PL;
    } else {
        infoForPlayer.innerHTML = langTexts.EN;
    }

    infoForPlayer.classList.remove('deactive');
    infoForPlayer.classList.add('fade__upS')

    setTimeout(()=>{
    infoForPlayer.classList.remove('fade__upS')
    },1000)

    setTimeout(()=>{
        infoForPlayer.classList.add('fade__downS');
        setTimeout(()=>{
            infoForPlayer.classList.add('deactive');
            infoForPlayer.classList.remove('fade__downS');
        }, 1000)
    }, 1000)

    setTimeout(()=>{
        infoForPlayer.classList.add('deactive');
    }, 2000)
}
//PASSWORDSs
let pass1 = 'imię';
let pass2 = 'czas';
let pass3 = 'dźwięk';
let pass4 = 'muzyka';
let pass5 = 'koniec';
let pass6 = 'the new yorker hotel';

function languageTest (lvlPL, lvlEN) {
    if (lang == "PL") {
        textPlace.innerHTML= lvlPL;

        name.value = "Podaj imię";
        passText.value = "Hasło: ";

        enter.innerHTML = enterTexts.PL;
        enterlvl4.innerHTML = enterTexts.PL;
        enterlvl5.innerHTML = enterTexts.PL;
        enterlvl6.innerHTML = enterTexts.PL;
        enterlvl7.innerHTML = enterTexts.PL;
        enterlvl8.innerHTML = enterTexts.PL;
        enterlvl9.innerHTML = enterTexts.PL;
        // enterlvl10.innerHTML = enterTexts.PL;

        pass1 = Passwords.pass1.PL;
        pass2 = Passwords.pass2.PL;
        pass3 = Passwords.pass3.PL;
        pass4 = Passwords.pass4.PL;
        pass5 = Passwords.pass5.PL;


    } else {
        textPlace.innerHTML= lvlEN;

        name.value = "Enter name";
        passText.value = "Password: ";

        enter.innerHTML = enterTexts.EN;
        enterlvl4.innerHTML = enterTexts.EN;
        enterlvl5.innerHTML = enterTexts.EN;
        enterlvl6.innerHTML = enterTexts.EN;
        enterlvl7.innerHTML = enterTexts.EN;
        enterlvl8.innerHTML = enterTexts.EN;
        enterlvl9.innerHTML = enterTexts.EN;
        // enterlvl10.innerHTML = enterTexts.EN;

        pass1 = Passwords.pass1.EN;
        pass2 = Passwords.pass2.EN;
        pass3 = Passwords.pass3.EN;
        pass4 = Passwords.pass4.EN;
        pass5 = Passwords.pass5.EN;
    }
}

function DTUt (lang1, lang2) {

    textPlace.classList.add('fade__downS');
    setTimeout(()=>{
        textPlace.classList.remove('fade__downS');
        languageTest (lang1, lang2);
    }, 1000)

    setTimeout(()=>{
        textPlace.classList.add('fade__up')
        
        setTimeout(()=>{
        textPlace.classList.remove('fade__up')
        },2000)
    },1000)

}

function BGfade (bg1, bg2) {

    bg1.classList.add('fade__downS')
    setTimeout(()=>{
        bg1.classList.add('deactive');
        bg1.classList.remove('fade__downS');
    }, 1000);
    setTimeout(()=>{
        bg2.classList.remove('deactive');
        bg2.classList.add('fade__upS');
        setTimeout(()=>{
            bg2.classList.remove('fade__upS');
        },1000)
    },1000);

}

function languageSwitch () {
    if (lang == 'PL') {
        lang = 'EN';
        langFlag.src = 'img/EN__flag.png';
        langText.innerHTML = 'EN';

    } else {
        lang = 'PL';
        langFlag.src = 'img/PL__flag.png';
        langText.innerHTML = 'PL';
    }
}

//END OF UTILITY FUNCTIONS

//LANG LISTENER
langButton.addEventListener('click', languageSwitch)


//LVL1
function lvl1Play () {
    
    fadeDown(bookBox);
    //background
    bglvl1B.classList.remove('deactive');
    languageTest (texts.lvl1.PL, texts.lvl1.EN);

    //MUSIC
    nextPage.play();
    theme.play();
    // lector1 play
    setTimeout(()=>{
        lector1.play();
    },2000)
}

book.addEventListener('click', lvl1Play);

//LVL2
function lvl2Play () {

    langButton.classList.add('deactive');
    fullButton.classList.add('deactive');
    //background
    BGfade (bglvl1B, bglvl2B);

    function playAudio() {
        theme.pause(); 
        theme2.loop = true;
        theme2.play();
        nextPage.play(); 
    }   
    playAudio();

    DTUt(texts.lvl2.PL, texts.lvl2.EN);

    //lector1 pause
    lector1.pause();
    // lector2 play
    setTimeout(()=>{
        lector2.play();
    },2000)

    //form & enter
    setTimeout(()=>{
        form.classList.remove('deactive');
        fadeUp(form);
        enter.classList.remove('deactive');
        fadeUp(enter);
    },1000)

    //switch on
    switchLight.classList.remove('deactive')
    //start btn
    start.classList.add('deactive')

}

start.addEventListener('click', lvl2Play)


// SWITCH LIGHT

const switchLight = document.getElementById('switch');

function lightOn () {
    document.getElementById('switchImg').src = "img/switch__on.png";
    flashlight.classList.add('deactive');
    nextPage.play(); 
}

switchLight.addEventListener('click', lightOn);

//END SWITCH LIGHT


//LVL3
function lvl3Play () {

    nextPage.play(); 

    //background
    BGfade (bglvl2B, bglvl3B);
    //form change
    form.classList.add('deactive');
    form2.classList.remove('deactive');
    //lector2 pause
    lector2.pause();
    // lector3 play
    setTimeout(()=>{
        lector3.play();
    },2000)
    //switch deactive
    switchLight.classList.add('deactive')

    DTUt(texts.lvl3.PL, texts.lvl3.EN);

    enter.classList.add('deactive');
    enterlvl4.classList.remove('deactive');
}

//GETNAME TO LVL3 u LASTLVL
// let varName = document.getElementById("nameX").value;

function getName () {
    let varName = document.getElementById("name").value;
    // console.log(varName) 
    if (varName.toLowerCase() == "nikola"){
        console.log('LAST LVL')
    }
    else{
        lvl3Play();
    }
}

enter.addEventListener('click', getName);

name.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
    enter.click();
    console.log('działa enter')
    }
});

//LVL 4
function lvl4Play () {
    nextPage.play(); 
    //background
    BGfade (bglvl3B, bglvl4B);
    //lector3 pause
    lector3.pause();
    // lector4 play
    // setTimeout(()=>{
    //     lector4.play();
    // },2000)

    DTUt(texts.lvl4.PL, texts.lvl4.EN);

    enterlvl4.classList.add('deactive');
    enterlvl5.classList.remove('deactive');

}


//firstPuzzle TO LVL4 u infoForPlayer

let pass = document.getElementById('pass').value; /// tutaj nie wiem //ale chyba jest dobrze

function getPass () {
    let pass = document.getElementById("pass").value;
    console.log(pass) 
    if (pass.toLowerCase() == pass1){
        lvl4Play();
    }
    else{
        infoForPlayerPlay(lang);
    }
}

enterlvl4.addEventListener('click', getPass);

//LVL 5
function lvl5Play () {
    nextPage.play(); 
    //background
    BGfade (bglvl4B, bglvl5B);
    //lector4 pause
    // lector4.pause();
    // lector5 play
    // setTimeout(()=>{
    //     lector5.play();
    // },2000)

    DTUt(texts.lvl5.PL, texts.lvl5.EN);
    

    enterlvl5.classList.add('deactive');
    enterlvl6.classList.remove('deactive');

}


//secondPuzzle TO LVL5 u infoForPlayer

function getPass2 () {
    let pass = document.getElementById("pass").value;
    console.log(pass) 
    if (pass.toLowerCase() == pass2){
        lvl5Play();
    }
    else{
        infoForPlayerPlay(lang);
    }
}

enterlvl5.addEventListener('click', getPass2);



//LVL 6
function lvl6Play () {
    nextPage.play(); 
    //background
    BGfade (bglvl5B, bglvl6B);
    //lector4 pause
    // lector4.pause();
    // lector5 play
    // setTimeout(()=>{
    //     lector5.play();
    // },2000)
    

    DTUt(texts.lvl6.PL, texts.lvl6.EN);
    

    enterlvl6.classList.add('deactive');
    enterlvl7.classList.remove('deactive');

}


//secondPuzzle TO LVL6 u infoForPlayer

function getPass3 () {
    let pass = document.getElementById("pass").value;
    console.log(pass) 
    if (pass.toLowerCase() == pass3){
        lvl6Play();
    }
    else{
        infoForPlayerPlay(lang);
    }
}

enterlvl6.addEventListener('click', getPass3);


//LVL 7
function lvl7Play () {
    nextPage.play(); 
    //background
    BGfade (bglvl6B, bglvl7B);
    //lector4 pause
    // lector4.pause();
    // lector5 play
    // setTimeout(()=>{
    //     lector5.play();
    // },2000)
    
    
    DTUt(texts.lvl7.PL, texts.lvl7.EN);

    enterlvl7.classList.add('deactive');
    enterlvl8.classList.remove('deactive');

}


//secondPuzzle TO LVL7 u infoForPlayer

function getPass4 () {
    let pass = document.getElementById("pass").value;
    console.log(pass) 
    if (pass.toLowerCase() == pass4){
        lvl7Play();
    }
    else{
        infoForPlayerPlay(lang);
    }
}

enterlvl7.addEventListener('click', getPass4);

//LVL 8
function lvl8Play () {
    nextPage.play(); 
    //background
    BGfade (bglvl7B, bglvl8B);
    //lector4 pause
    // lector4.pause();
    // lector5 play
    // setTimeout(()=>{
    //     lector5.play();
    // },2000)
    
    
    DTUt(texts.lvl8.PL, texts.lvl8.EN);

    enterlvl8.classList.add('deactive');
    enterlvl9.classList.remove('deactive');

}


//secondPuzzle TO LVL8 u infoForPlayer

function getPass5 () {
    let pass = document.getElementById("pass").value;
    console.log(pass) 
    if (pass.toLowerCase() == pass5){
        lvl8Play();
    }
    else{
        infoForPlayerPlay(lang);
    }
}

enterlvl8.addEventListener('click', getPass5);



//LVL 9
function lvl9Play () {
    nextPage.play(); 
    //background
    BGfade (bglvl8B, bglvl9B);
    //lector4 pause
    // lector4.pause();
    // lector5 play
    // setTimeout(()=>{
    //     lector5.play();
    // },2000)
    
    
    DTUt(texts.lvl9.PL, texts.lvl9.EN);

    enterlvl9.classList.add('deactive');
    // enterlvl10.classList.remove('deactive');
    let pass = document.getElementById('pass')
    pass.classList.add('deactive');
    

}


//secondPuzzle TO LVL9 u infoForPlayer

function getPass6 () {
    let pass = document.getElementById("pass").value;
    console.log(pass) 
    if (pass.toLowerCase() == "the new yorker hotel"){
        lvl9Play();
    }
    else{
        infoForPlayerPlay(lang);
    }
}

enterlvl9.addEventListener('click', getPass6);


//utilityFunctions.js // fullscreen & rotation info

fullscreen();

rotationCheker();

startScreenCheker();
