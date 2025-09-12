// src/data/homePage/aboutUsData.js

import teamImage from '../../../assets/teamImage.svg';
import AbUs1 from '../../../assets/AbUs1.svg';
import AbUs2 from '../../../assets/AbUs2.svg';

export const aboutUsData = {
    sectionHeader: {
        header: "ჩვენს შესახებ",
        paragraph: "ჩვენი გუნდი შედგება გამოცდილი პროფესიონალებისგან, რომლებიც მზად არიან დაგეხმაროთ ფინანსური გამოწვევების გადალახვაში."
    },
    title: "ვინ ვართ ჩვენ",
    p1: "2010 წლიდან ვეხმარებით მცირე და საშუალო ბიზნესებს ფინანსური სტაბილურობის მიღწევაში. ჩვენი მიზანია შევქმნათ გამჭვირვალე და ეფექტური ფინანსური სისტემები, რომლებიც უზრუნველყოფენ თქვენი ბიზნესის წარმატებას.",
    p2: "ჩვენი გუნდი შედგება სერტიფიცირებული ბუღალტრების, იურისტებისა და ფინანსური მრჩევლებისგან, რომლებსაც აქვთ მრავალწლიანი გამოცდილება სხვადასხვა ინდუსტრიაში.",
    stats: [
        { id: 1, image: AbUs1, numTitle: "15+ პროფესიონალი", textTitle: "გამოცდილი გუნდი", fontSize: "base" },
        { id: 2, image: AbUs2, numTitle: "200+ კმაყოფილი კლიენტი", textTitle: "ნდობა და რეპუტაცია", fontSize: "base" }
    ],
    image: teamImage
};