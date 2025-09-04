import React from 'react';
import Ser1 from '../assets/Ser1.svg';
import Ser2 from '../assets/Ser2.svg';
import Ser3 from '../assets/Ser3.svg';
import ServiceCard from './ServicesCard';
import ButtonWithArrow from './ButtonWithArrow';
import SectionHeaders from './SectionHeaders';

const Services = () => {
  return (
    <div className="services-section text-center py-10 
    bg-[#ffffffd4] flex flex-col items-center gap-6 px-6 md:px-10 lg:px-20">
      <SectionHeaders
        header="ჩვენი სერვისები"
        paragraph="გთავაზობთ კომპლექსურ ფინანსურ მომსახურებას, რომელიც მორგებულია თქვენი ბიზნესის საჭიროებებზე."
        padding='py-0 md:py-10'
      />
      <div className="service-cards grid grid-cols-1 md:grid-cols-2 
      lg:grid-cols-3 gap-8 w-full">
        <ServiceCard
          image={Ser1}
          header="ბუღალტრული მომსახურება"
          paragraph="სრული ბუღალტრული აღრიცხვა, საგადასახადო დეკლარაციების მომზადება, ფინანსური ანგარიშგება და ანალიზი."
          features={[
            "ყოველდღიური აღრიცხვა",
            "საგადასახადო დეკლარაციები",
            "ფინანსური ანგარიშგება"
          ]}
        >
          <ButtonWithArrow
            buttonText="დეტალები"
            self='self-end'
            to="/accountingservices"
          />
        </ServiceCard>
        <ServiceCard
          image={Ser2}
          header="იურიდიული მომსახურება"
          paragraph="სამართლებრივი კონსულტაცია, ხელშეკრულებების მომზადება, საგადასახადო დავები და ბიზნესის რეგისტრაცია."
          features={[
            "ბიზნესის რეგისტრაცია",
            "ხელშეკრულებების მომზადება",
            "საგადასახადო დავები"
          ]}
        >
          <ButtonWithArrow
            buttonText="დეტალები"
            self='self-end'
            to="/lawservices"
          />
        </ServiceCard>
        <ServiceCard
          image={Ser3}
          header="ფინანსური კონსულტაცია"
          paragraph="ბიზნეს გეგმის შემუშავება, ფინანსური ანალიზი, ინვესტიციების დაგეგმვა და ბიუჯეტირება."
          features={[
            "ბიზნეს გეგმები",
            "ფინანსური ანალიზი",
            "ბიუჯეტირება"
          ]}
        >
          <ButtonWithArrow
            buttonText="დეტალები"
            self='self-end'
            to="/consultation"
          />
        </ServiceCard>
      </div>
    </div>
  );
};

export default Services;