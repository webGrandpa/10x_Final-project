// src/data/homePage/heroData.js

import card1 from '../../../assets/card1.svg';
import card2 from '../../../assets/card2.svg';
import card3 from '../../../assets/card3.svg';
import heroImg from '../../../assets/heroImg.svg';


export const heroData = {
    image: heroImg,
    title: "ბუღალტრული <br /> მომსახურება  თქვენი <br /> ბიზნესისთვის",
    subtitle: "ჩვენ გთავაზობთ პროფესიონალურ ბუღალტრულ და იურიდიულ მომსახურებას,<br /> რომელიც დაგეხმარებათ ბიზნესის განვითარებაში.",
    stats: [
        { id: 1, image: card1, numTitle: "15+", textTitle: "წლიანი გამოცდილება" },
        { id: 2, image: card2, numTitle: "200+", textTitle: "კმაყოფილი კლიენტი" },
        { id: 3, image: card3, numTitle: "170+", textTitle: "წარმატებული სტუდენტი" }
    ]
};