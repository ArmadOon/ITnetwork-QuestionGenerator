'use strict';


const zaklady = [
    'Proměnné a datové typy',
    'Parsování',
    'Podmínky',
    'Operátory',
    'Cykly',
    'Pole',
    'Metody pro práci s polem',
    'Metody pro práci s řetězci',
    'DOM',
    'Vlastní funkce',
    'Časovače'];

const oop = [
    'Třídy a instance',
    'Atributy a metody',
    'Zapouzdření',
    'Základní metody objektů',
    'Dědičnost a polymorfismus',
    'Gettery/settery'
];


const nodeJS = [
    'SOAP a REST API',
    'JSON',
    'Express']


const webdesignAndBootstrap = [
    'Boxmodel',
    'Párové/nepárové elementy',
    'Blokové/řádkové elementy',
    'Tabulky',
    'Grid systém',
    'Breakpointy',
    'Základní komponenty Bootstrapu',
    'Výhody responzivního webdesignu',
    'Media queries',
    'Responzivní obrázky']


let nahodnaOtazka;

function vyberOtazku(okruh) {
    nahodnaOtazka = okruh[Math.floor(Math.random() * okruh.length)];
    return nahodnaOtazka;
}

const odpoved = document.getElementById("odpoved")
const modalButton = document.getElementById("modalButton");
modalButton.addEventListener("click", function () {
    let okruhPrompt = parseInt(prompt("Prosím vyber okruh otázek. 1 = Základy, 2 = OOP, 3 = NodeJS, 4 = WebDesign"))
    if (okruhPrompt === 1) {
        vyberOtazku(zaklady);
        odpoved.innerHTML = `${nahodnaOtazka}`;
    } else if (okruhPrompt === 2) {
        vyberOtazku(oop);
        odpoved.innerHTML = `${nahodnaOtazka}`;
    } else if (okruhPrompt === 3) {
        vyberOtazku(nodeJS);
        odpoved.innerHTML = `${nahodnaOtazka}`;
    }else if (okruhPrompt === 4){
        vyberOtazku(webdesignAndBootstrap);
        odpoved.innerHTML = `${nahodnaOtazka}`
    } else {
        odpoved.innerHTML = "Prosím vyber si otázku od 1 - 4."
    }
})