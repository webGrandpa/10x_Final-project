import React from 'react';
import wu1 from '../assets/wu1.svg';
import wu2 from '../assets/wu2.svg';
import wu3 from '../assets/wu3.svg';
import part1 from '../assets/part1.svg';
import part2 from '../assets/part2.svg';
import ServiceCard from './ServicesCard';
import SectionHeaders from './SectionHeaders';
import Figure from './Figure';

const WhyUs = () => {
  return (
    <div className='text-center pb-10 bg-[#1B365D0D] flex flex-col items-center gap-6 px-6 md:px-10 lg:px-20'>
      <SectionHeaders
        header="რატომ უნდა აგვირჩიოთ"
        paragraph="ჩვენ გთავაზობთ უმაღლესი ხარისხის მომსახურებას, რომელიც მორგებულია თქვენი უნიკალურ საჭიროებებზე."
        padding="pt-10"
      />
      <div className="service-cards flex flex-col md:flex-row 
      items-stretch justify-between gap-8 h-full">
        <ServiceCard
          image={wu1}
          header="პროფესიონალური მომსახურება"
          paragraph="ჩვენი გუნდი შედგება სპეციალისტებისგან, რომლებსაც აქვთ მრავალწლიანი გამოცდილება ფინანსურ სფეროში."
          direction={'flex-row'}
        />
        <ServiceCard
          image={wu2}
          header="პერსონალიზებული მიდგომა"
          paragraph="ვითვალისწინებთ თქვენი ბიზნესის სპეციფიკას და გთავაზობთ ინდივიდუალურად მორგებულ გადაწყვეტილებებს."
        />
        <ServiceCard
          image={wu3}
          header="საიმედო პარტნიორობა"
          paragraph="ვუზრუნველყოფთ თქვენი ფინანსური ინფორმაციის კონფიდენციალურობას და ვიცავთ ყველა საკანონმდებლო მოთხოვნას."
        />
      </div>
      <div className='flex flex-col md:flex-row justify-between bg-white p-6 md:p-8 lg:p-10 rounded-lg shadow-md w-full gap-8'>
        <div className='flex flex-col gap-5 justify-start text-start w-full md:w-1/2'>
          <SectionHeaders
            header="გრძელვადიანი პარტნიორობა"
            paragraph="ჩვენ ვზრუნავთ თქვენი ბიზნესის წარმატებაზე და ვცდილობთ შევქმნათ გრძელვადიანი ურთიერთობები ჩვენს კლიენტებთან. ჩვენი მიზანია დაგეხმაროთ ფინანსური სტაბილურობის მიღწევაში და ბიზნესის განვითარებაში."
            hasDivider={false}
            textCenter='start'
            padding='pb-0'
          />
          <div className='flex flex-col sm:flex-row items-start px-4 justify-start gap-5 pt-4'>
            <Figure image={part1} caption="24/7 მხარდაჭერა" />
            <Figure image={part2} caption="უსაფრთხოება" />
          </div>
        </div>
        <div className='grid grid-cols-2 gap-2 w-full md:w-1/2 mt-4 md:mt-0'>
          <SectionHeaders
            header="13"
            paragraph="წლიანი გამოცდილება"
            hasDivider={false}
            bgcolor="bg-[#E6F3FF4D]"
            padding="py-2"
            rounded='xl'
            textStart='center'
          />
          <SectionHeaders
            header="200+"
            paragraph="კმაყოფილი კლიენტი"
            hasDivider={false}
            bgcolor="bg-[#E6F3FF4D]"
            padding="py-2"
            rounded='xl'
            textStart='center'
          />
          <SectionHeaders
            header="170+"
            paragraph="წარმატებული სტუდენტი"
            hasDivider={false}
            bgcolor="bg-[#E6F3FF4D]"
            padding="py-2"
            rounded='xl'
            textStart='center'
          />
          <SectionHeaders
            header="15+"
            paragraph="პროფესიონალი თანამშრომელი"
            hasDivider={false}
            bgcolor="bg-[#E6F3FF4D]"
            padding="py-2"
            rounded='xl'
            textStart='center'
          />
        </div>
      </div>
    </div>
  );
};

export default WhyUs;