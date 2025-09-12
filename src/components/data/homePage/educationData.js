// src/data/homePage/educationData.js

import students from '../../../assets/students.svg';
import fig1 from '../../../assets/fig1.svg';
import fig2 from '../../../assets/fig2.svg';

export const educationData = {
    sectionHeader: {
        header: "ბუღალტრული განათლება",
        paragraph: "გთავაზობთ პროფესიულ ტრენინგებს და კურსებს ბუღალტერიაში, რომლებიც დაგეხმარებათ თქვენი ცოდნის გაღრმავებაში."
    },
    image: students,
    content: {
        header: "პროფესიული კურსები ბუღალტერიაში",
        paragraph: "ჩვენი კურსები შექმნილია როგორც დამწყები, ასევე გამოცდილი ბუღალტრისთვის."
    },
    courses: [
        { id: 1, header: "საბაზისო ბუღალტერია", paragraph: "იდეალური კურსი დამწყებთათვის, რომლებსაც სურთ ბუღალტერიის საფუძვლების შესწავლა.", figures: [{ image: fig1, caption: "3 თვე" }, { image: fig2, caption: "12 ადგილი" }] },
        { id: 2, header: "პრაქტიკული ბუღალტერია", paragraph: "კურსი მათთვის, ვინც უკვე ფლობს საბაზისო ცოდნას და სურს პრაქტიკული გამოცდილების მიღება.", figures: [{ image: fig1, caption: "5 თვე" }, { image: fig2, caption: "12 ადგილი" }] },
        { id: 3, header: "საგადასახადო აღრიცხვა", paragraph: "შეისწავლეთ საგადასახადო კანონმდებლობა და მისი პრაქტიკული გამოყენება ბიზნესში.", figures: [{ image: fig1, caption: "1.5 თვე" }, { image: fig2, caption: "15 ადგილი" }] }
    ]
};