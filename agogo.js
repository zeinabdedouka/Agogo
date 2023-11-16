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

