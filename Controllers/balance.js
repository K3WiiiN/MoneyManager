function generateRandomSzamlaszam() {
    
    const szamlaszamParts = Array.from({ length: 27 }, () => Math.floor(Math.random() * 10).toString());

    
    for (let i = 9; i < szamlaszamParts.length; i += 10) {
        szamlaszamParts[i] = `-${szamlaszamParts[i]}`;
    }

    const randomSzamlaszam = szamlaszamParts.join('');

    return randomSzamlaszam;
}

function generateRandomEgyenleg() {

    const randomEgyenleg = Math.floor(Math.random() * (10000 - 10000 + 1) + 10000);

    return randomEgyenleg;
}

function newData() {
    let szamlaszamhatter = document.createElement("div");
    szamlaszamhatter.id = 'szamlaszamhatter';
    szamlaszamhatter.className = 'szamlaszamhatter';

    let szamlaszamhatterStilus = {
        backgroundColor: 'rgba(177, 177, 177, 0.700)',
        padding: '10px',
        margin: '5px',
        border: '1px solid black',
        borderRadius: '5px',
        boxShadow: '1px 1px 5px 5px rgba(82, 82, 82, 0.411)',
        color: 'black'
    };

    Object.assign(szamlaszamhatter.style, szamlaszamhatterStilus);

    document.getElementsByClassName('newdata')[0].appendChild(szamlaszamhatter);

    let randomSzamlaszam = generateRandomSzamlaszam();

    let bankszamlaszam = document.createElement("p");
    const szamlaszamTartalom = document.createTextNode(randomSzamlaszam);
    bankszamlaszam.appendChild(szamlaszamTartalom);

    szamlaszamhatter.appendChild(bankszamlaszam);

   
    let randomEgyenleg = generateRandomEgyenleg();
    let egyenleg = document.createElement("p");
    const egyenlegTartalom = document.createTextNode(`Egyenleg: ${randomEgyenleg}FT`);
    egyenleg.appendChild(egyenlegTartalom);

    szamlaszamhatter.appendChild(egyenleg);

    
    let egyenlegElem = document.getElementById('egyenleg');
    let aktualisEgyenleg = parseInt(egyenlegElem.textContent.replace(/\D/g, '')) || 0; 
    egyenlegElem.textContent = `${aktualisEgyenleg + randomEgyenleg} FT`;
}


