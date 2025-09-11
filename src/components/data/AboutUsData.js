// src/components/data/aboutUsData.js

import AbUsPage1 from '../../assets/AbUsPage1.svg';
import AbUsPage2 from '../../assets/AbUsPage2.svg';
import AbUsPage3 from '../../assets/AbUsPage3.svg';
import AbUsPage4 from '../../assets/AbUsPage4.svg';
import gir1 from '../../assets/gir1.svg';
import gir2 from '../../assets/gir2.svg';
import gir3 from '../../assets/gir3.svg';
import gir4 from '../../assets/gir4.svg';
import avatar1 from '../../assets/avatar1.svg';
import avatar2 from '../../assets/avatar2.svg';
import avatar3 from '../../assets/avatar3.svg';
import avatar4 from '../../assets/avatar4.svg';

// main header section data
export const aboutUsHeader = {
  header: "ჩვენ შესახებ",
  paragraph: "2010 წლიდან დღემდე, Finco ეხმარება ბიზნესებსა და ინდივიდების მხარდაჭერას, რათა მიაღწიონ ფინანსურ წარმატებას. ჩვენ ვაერთიანებთ გამოცდილებას, თანამედროვე ხედვებს და პერსონალიზებულ მიდგომას, რომ მივაწოდოთ შედეგები, რომლებიც ნამდვილად მნიშვნელოვანია..",
};

// mision section data
export const missionData = {
  header: "ჩვენი მისია",
  paragraph: "ჩვენი მისიაა ვიყოთ სანდო პარტნიორი კომპანიებისა და პროფესიონალებისთვის — დავეხმაროთ მათ ფინანსურ დაგეგმვაში, სტრატეგიულ გადაწყვეტილებებსა და თანამედროვე ბიზნესგადაწყვეტილებებში. ჩვენ გვჯერა, რომ წარმატება მიიღწევა პროფესიონალიზმისა და ერთგულების გაერთიანებით, სადაც თითოეული ნაბიჯი სიმტკიცესა და გაზომვად შედეგზეა დაფუძნებული.",
};

// statistic section data
export const statisticsCards = [
  { id: 1, image: AbUsPage1, numTitle: "13", textTitle: "წლიანი გამოცდილება" },
  { id: 2, image: AbUsPage2, numTitle: "200+", textTitle: "კმაყოფილი მომხმარებელი" },
  { id: 3, image: AbUsPage3, numTitle: "170+", textTitle: "პროფესიონალი" },
  { id: 4, image: AbUsPage4, numTitle: "15+", textTitle: "წარმატებული სტუდენტი" },
];

// values section data
export const valuesHeader = {
    header: "ჩვენი ღირებულებები",
    paragraph: "პრინციპები, რომლებიც გვაკავშირებს ყველა პროექტთან და პარტნიორთან:",
};

export const coreValues = [
  { id: 1, image: gir1, header: "ინოვაცია", paragraph: "ვიყენებთ თანამედროვე ინსტრუმენტებსა და მიდგომებს." },
  { id: 2, image: gir2, header: "პასუხისმგებლობა", paragraph: "თითოეული გადაწყვეტილება ეფუძნება ზუსტ ანალიზს." },
  { id: 3, image: gir3, header: "სანდოობა", paragraph: "ჩვენი სიტყვა ისეთივე მტკიცეა, როგორც ჩვენი ანალიზი." },
  { id: 4, image: gir4, header: "თანამშრომლობა", paragraph: "ვმუშაობთ როგორც ერთიანი გუნდი კლიენტთან და პარტნიორებთან ერთად." },
];

// team section data
export const teamHeader = {
  header: "ჩვენი გუნდი",
  paragraph: "ჩვენი გუნდი შედგება სერტიფიცირებული პროფესიონალებისგან, რომელთაც მრავალწლიანი გამოცდილება აქვთ ფინანსურ, იურიდიულ და ბიზნეს სფეროებში. თითოეული მათგანი ქმნის Finco-ს ბირთვს — ერთიანობას, რომელიც უზრუნველყოფს სტაბილურ და ეფექტურ მომსახურებას.",
};

export const teamMembers = [
  { id: 1, image: avatar1, name: "გოგა ხილაძე", title: "ფინანსური ანალიტიკოსი", experience: "12+ წლიანი გამოცდილება საბანკო და საინვესტიციო სფეროში." },
  { id: 2, image: avatar2, name: "ქეთი ქათამაძე", title: "ფინანსური მრჩეველი", experience: "კორპორაციული სამართლის სპეციალისტი 10+ წლიანი პრაქტიკით." },
  { id: 3, image: avatar3, name: "თამუნა მუსერიძე", title: "იურიდიული კონსულტანტი", experience: "კორპორაციული სამართლის სპეციალისტი." },
  { id: 4, image: avatar4, name: "ხატია შუშაძე", title: "განვითარების მენეჯერი", experience: "ექსპერტი სტარტაპებსა და ბიზნეს სტრატეგიებში." },
];