const chronoMetre = document.getElementById('chrono');
const boutons = document.querySelector('#btnsDiv');

let heure = 0;
let minute = 0;
let seconde = 0;

let interval = null;
let temps = '';

function conversionTemps(time) {
    heure = Math.floor(time / 3600);
    minute = Math.floor(time / 60) % 60;
    seconde = time % 60;
    chronoMetre.innerHTML = `${heure < 10 ? "0" : ""}${heure}:${minute < 10 ? "0" : ""}${minute}:${seconde < 10 ? "0" : ""}${seconde}`
}

function decompte() {
    if (interval !== null) {
        clearInterval(interval);
    } 
    interval = setInterval(() => {
        conversionTemps(temps);
        temps--;
        if (temps < 0) {
            clearInterval(interval);
            hidden();
        }
    },1000)
}

function back(time) {
    let tempsActuel = new Date();
    heure = Math.floor(time / 3600);
    minute = Math.floor(time / 60) % 60;
    seconde = time % 60;
    tempsActuel.setHours(tempsActuel.getHours() + heure);
    tempsActuel.setMinutes(tempsActuel.getMinutes() + minute);
    tempsActuel.setSeconds(tempsActuel.getSeconds() + seconde);

    document.getElementById('beBack').innerHTML = `Be back at: ${tempsActuel.getHours() < 10 ? "0" : ""}${tempsActuel.getHours()}:${tempsActuel.getMinutes() < 10 ? "0" : ""}${tempsActuel.getMinutes()}:${tempsActuel.getSeconds() < 10 ? "0" : ""}${tempsActuel.getSeconds()}`;
}
function hidden() {
    afficherChrono.classList.add('hidden');
}

function display() {
    afficherChrono.classList.remove('hidden');
}
let input = document.querySelector('.time');
let afficherChrono = document.getElementById('afficheChrono');

input.addEventListener('keyup', (e) => {
    let entrer = parseInt(e.target.value)
    if (e.key === 'Enter') {
        if (entrer === '' || isNaN(e.target.valueAsNumber)) {
            alert('veuillez ecrire un nombre');
        } else if (entrer <= 0) {
            alert('veuillez entrer une valeur superieure a zero!')
        } else {
            temps = entrer * 60;
            decompte();
            back(temps)
            display();
        }
        input.value = '';
    }
        
        
});



boutons.addEventListener('click', (e) => {
    if (e.target.id === '20s') {
        temps = 20;
        back(temps);
        decompte();
        display();
    } else if (e.target.id === 'CAPPUCINO') {
        temps = 5 * 60;
        back(temps);
        decompte();
        display();
    } else if (e.target.id === 'THE') {
        temps = 15 * 60;
        back(temps);
        decompte();
        display();
    }
    else if (e.target.id === 'PETITDEJEUNER') {
        temps = 20 * 60;
        back(temps);
        decompte();
        display();
    }
    else if (e.target.id === 'DEJEUNE') {
        temps = 30 * 60;
        back(temps);
        decompte();
        display();
    } 
})




















































/* const startChrono = document.getElementById('chrono');
const buttons = document.querySelector('#btnsDiv');

let heure = 0;
let minute = 0;
let seconde = 0;

let interval = null;
let temps = '';

// fonction de conversionTemps du temps en heure, minutes et secondes

function convertTimer(time){
    heure = Math.floor(time / 3600);
    minute = Math.floor(time / 60) % 60;
    seconde = time % 60;
    startChrono.innerHTML = `${heure<10? '0': ''}${heure}:${minute<10? '0': ''}${minute}:${seconde<10? '0': ''}${seconde}`
}

// fonction qui permet de faire un decompte du temps choisi
function countDown(){
   
    if (interval !== null){ // pour arreter le decompte du temps
        clearInterval(interval);
    }interval = setInterval(() => {
        convertTimer(temps);
             temps--;
             if (temps <= 0) {
                     clearInterval(interval);
                     hidChrono()
                  }
                  
         }, 1000);
      
}

function beBack(time){ // 
    let date = new Date(); // on recupere la date et l'heure normales
    heure = Math.floor(time / 3600);
    minute = Math.floor(time / 60) % 60;
    seconde = time % 60;
// ajout des heures, minutes et secondes au temps actuel
    date.setHours(date.getHours() + heure);
    date.setMinutes(date.getMinutes() + minute);
    date.setSeconds(date.getSeconds() + seconde);
    document.getElementById('beBack').innerHTML = `Be back: ${date.getHours()< 10 ? "0" : ""}${date.getHours()}:${date.getMinutes()< 10 ? "0" : ""}${date.getMinutes()}:${date.getSeconds()< 10 ? "0" : ""}${date.getSeconds()}`
}

const divChrono = document.getElementById('afficheChrono');
const input = document.querySelector('.time');
input.addEventListener('keyup',(e) => { // keyup se declencher lorsqu'une touche est relachée
    let entrer = parseInt(e.target.value) // recuperer la valeur de l'input ensuite la convertir en nombre
    if(e.key == 'Enter'){
        if(entrer === '' ||  isNaN(e.target.valueAsNumber) ){ // on verifie si entrer est vide ou n'est pas un nombre
            alert('Veuillez entrer une valeur numerique!')
        }else if(entrer <= 0){
            alert('Veuillez entrer une valeur superieure à zero!')
        }else{
            temps = entrer * 60;
            countDown();
            beBack(temps);
            showChrono();    
        }
        input.value = ''; // vider l'input
        }
        
})
function showChrono(){
    divChrono.classList.remove('hidden');

}
function hidChrono(){
    divChrono.classList.add('hidden')
}

buttons.addEventListener('click', (e) => {
    if (e.target.id === '20s') {
        temps = 20;
        countDown()
        beBack(temps);
        showChrono()
    } else if (e.target.id === 'CAPPUCINO') {
        temps = 5 * 60 ;
        countDown();
        beBack(temps);
        showChrono()
    }else if (e.target.id === 'THE') {
        temps = 15 * 60;
        countDown();
        beBack(temps);
        showChrono()
    }else if (e.target.id === 'PETITDEJEUNER') {
        temps = 20 * 60;
        countDown();
        beBack(temps);
        showChrono()
    }else if (e.target.id === 'DEJEUNE') {
        temps = 30 * 60;
        countDown();
        beBack(temps);
        showChrono()
    }
});
 */