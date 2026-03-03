// Når du er færdig med denne opgave, ser siden ca sådan her ud: https://prnt.sc/AdvNjFr_TwHA

// 1. Der skal, med brug af javascript, indsættes 1 skill mere, altså nedenstående html. Se mere i punkt 1.1 - 1.6 under
/*
    <div>
        <span>CSS:</span>
        <span>60%</span>
        <meter min="0" max="100" value="60"></meter>
    </div>
*/

// 1.1 Fang .mySkills med en egnet metode
const mySkills = document.querySelector('.mySkills');


// 1.2 Anvend document.createElement() til at skabe en <div>, to <span> og et <meter> tag
const div = document.createElement('div');
const span1 = document.createElement('span');
const span2 = document.createElement('span');
const meter = document.createElement('meter');


// 1.3 Anvend document.textContent til at indsætte data i 2*span(se ovenfor for indhold)
span1.textContent = 'JS: ';
span2.textContent = '67%';



// 1.4 Anvend .setAttribute() til at sætte de tre attributter i meter-tagget (min, max og value)
meter.setAttribute('min', '0');
meter.setAttribute('max', '100');
meter.setAttribute('value', '67');

// 1.5 Anvend .append() til at indsætte <div> i .mySkills
div.append(span1, span2, meter);

// 1.6 Anvend .append() til at indsætte 2*span og 1*meter i <div>
mySkills.append(div);



// 2. Anvend .cloneNode() til at klone den <li> med "Mit portfolio" og indsætte den to gange nedenfor (Ja, så kommer der til at stå "Mit portfolio" tre gange - pyt med det:) )




// 2.1 Fang "mit portfolio"
const Mitportifolio = document.querySelector('li');
constulElement = document.querySelector('ul');


// 2.2 Indsæt tre kopier
for (let i = 0; i < 3; i++) {
     const clone = Mitportifolio.cloneNode(true);
     constulElement.append(clone);
}


// 3. I footeren er der en div med class="oval". Anvend .style-objektet til at give den følgende:
// width: 40px, height: 40px, background-color: pink, border-radius: 50%
const oval = document.querySelector('.oval');
/* oval.style.width = '40px';
oval.style.height = '40px';
oval.style.backgroundColor = 'pink';
oval.style.borderRadius = '50%'; */

oval.style.cssText = 'width: 40px; height: 40px; background-color: pink; border-radius: 50%;';


// 4. Se i dit .css dokument nederst at der er en class kaldet .niceStyling. Anvend .classList.add() til at sætte denne klasse på .oval2
const oval2 = document.querySelector('.oval2');
oval2.classList.add('niceStyling');