// Vytvoř objekt auto, který bude mít vlastnosti: znacka, barva, rokVyroby,..

let auto = {
    znacka: 'Ford',
    barva: 'modra',
    rokVyroby: '2015',
    spz: '5AM 3223'
};


// Přidej novou vlastnost (majitel a prirad ji svoje jmeno jako hodnotu)

auto.majitel = {};
auto.majitel.jmeno = 'Sandra';
auto.majitel.prijmeni = 'Malina';



// Přepiš značku na Škoda
auto['znacka'] = 'Skoda';

// Vytvor tri promenne majitelka, znacka a spz a vloz do techto elementu text z objektu auto.
let majitelka = auto.majitel.jmeno + ' ' + auto.majitel.prijmeni

