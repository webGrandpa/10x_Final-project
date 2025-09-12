// src/data/homePage/newsData.js

import news1 from '../../../assets/news1.svg';
import news2 from '../../../assets/news2.svg';
import news3 from '../../../assets/news3.svg';

export const newsData = {
    sectionHeader: {
        header: "სიახლეები და სტატიები",
        paragraph: "გაეცანით უახლეს ინფორმაციას ფინანსების, ბუღალტერიის და ბიზნესის სფეროში"
    },
    articles: [
        { id: 1, image: news1, header: "2025 წლის საგადასახადო ცვლილებები ბიზნესისთვის", paragraph: "გაეცანით 2025 წლის საგადასახადო კოდექსში შეტანილ ცვლილებებს და მათ გავლენას თქვენს..." },
        { id: 2, image: news2, header: "ციფრული ბუღალტერიის უპირატესობები", paragraph: "როგორ შეუძლია ციფრულ ბუღალტერიას გააუმჯობესოს თქვენი ბიზნესის ეფექტურობა და ..." },
        { id: 3, image: news3, header: "როგორ შევადგინოთ ეფექტური ბიზნეს გეგმა", paragraph: "ბიზნეს გეგმის შედგენის პრაქტიკული გზამკვლევი დამწყები მეწარმეებისთვის. გაეცანით ბიზნეს..." }
    ]
};