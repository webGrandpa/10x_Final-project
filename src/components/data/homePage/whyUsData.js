// src/data/homePage/whyUsData.js

import wu1 from '../../../assets/wu1.svg';
import wu2 from '../../../assets/wu2.svg';
import wu3 from '../../../assets/wu3.svg';
import part1 from '../../../assets/part1.svg';
import part2 from '../../../assets/part2.svg';

export const whyUsData = {
    sectionHeader: {
        header: "რატომ უნდა აგვირჩიოთ",
        paragraph: "ჩვენ გთავაზობთ უმაღლესი ხარისხის მომსახურებას, რომელიც მორგებულია თქვენი უნიკალურ საჭიროებებზე."
    },
    cards: [
        { id: 1, image: wu1, header: "პროფესიონალური მომსახურება", paragraph: "ჩვენი გუნდი შედგება სპეციალისტებისგან, რომლებსაც აქვთ მრავალწლიანი გამოცდილება ფინანსურ სფეროში." },
        { id: 2, image: wu2, header: "პერსონალიზებული მიდგომა", paragraph: "ვითვალისწინებთ თქვენი ბიზნესის სპეციფიკას და გთავაზობთ ინდივიდუალურად მორგებულ გადაწყვეტილებებს." },
        { id: 3, image: wu3, header: "საიმედო პარტნიორობა", paragraph: "ვუზრუნველყოფთ თქვენი ფინანსური ინფორმაციის კონფიდენციალურობას და ვიცავთ ყველა საკანონმდებლო მოთხოვნას." }
    ],
    partnership: {
        header: "გრძელვადიანი პარტნიორობა",
        paragraph: "ჩვენ ვზრუნავთ თქვენი ბიზნესის წარმატებაზე და ვცდილობთ შევქმნათ გრძელვადიანი ურთიერთობები ჩვენს კლიენტებთან.",
        figures: [
            { id: 1, image: part1, caption: "24/7 მხარდაჭერა" },
            { id: 2, image: part2, caption: "უსაფრთხოება" }
        ],
        stats: [
            { id: 1, numTitle: "13", textTitle: "წლიანი გამოცდილება" },
            { id: 2, numTitle: "200+", textTitle: "კმაყოფილი კლიენტი" },
            { id: 3, numTitle: "170+", textTitle: "წარმატებული სტუდენტი" },
            { id: 4, numTitle: "15+", textTitle: "პროფესიონალი თანამშრომელი" }
        ]
    }
};