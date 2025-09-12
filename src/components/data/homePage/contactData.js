// src/data/homePage/contactData.js

import contact1 from '../../../assets/contact1.svg';
import phone from '../../../assets/phone.svg';
import mail from '../../../assets/mail.svg';
import phone1 from '../../../assets/phone1.svg';
import mail1 from '../../../assets/mail1.svg';

export const contactData = {
    sectionHeader: { header: "დაგვიკავშირდით" },
    title: "გაქვთ შეკითხვა სერვისზე? <br /> გინდათ კურსებზე რეგისტრაცია ან კონსულტაცია? <br /> Finco-ს გუნდი მზადაა უპასუხოს თქვენს ყველა შეკითხვას",
    address: "მისამართი: ქ. ბათუმი მელიქიშვილის 88",
    phone: "ტელ: +995 123 456 789",
    email: "ელ.ფოსტა: info@finco.ge",
    image: contact1,
    buttons: [
        { id: 1, title: "+995 577 29 90 90", icon: phone, hoverIcon: phone1 },
        { id: 2, title: "Fincotime@gmail.com", icon: mail, hoverIcon: mail1 }
    ]
};