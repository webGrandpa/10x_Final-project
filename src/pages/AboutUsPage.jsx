import React, { useState } from 'react';
import SectionHeaders from '../components/SectionHeaders';
import ServiceCard from '../components/ServicesCard';
import HeroCard from '../components/HeroCards';
import AbUsPage1 from '../assets/AbUsPage1.svg';
import AbUsPage2 from '../assets/AbUsPage2.svg';
import AbUsPage3 from '../assets/AbUsPage3.svg';
import AbUsPage4 from '../assets/AbUsPage4.svg';
import gir1 from '../assets/gir1.svg';
import gir2 from '../assets/gir2.svg';
import gir3 from '../assets/gir3.svg';
import gir4 from '../assets/gir4.svg';
import avatar1 from '../assets/avatar1.svg';
import avatar2 from '../assets/avatar2.svg';
import avatar3 from '../assets/avatar3.svg';
import avatar4 from '../assets/avatar4.svg';
import Button from '../components/Button';
import ConsultationModal from '../components/ModalComponents/ConsultationModal';

const AboutUsPage = () => {
  const [showConsultationModal, setShowConsultationModal] = useState(false);

  return (
    <>
    <div id="about-us-page" 
      className='about-us-section flex items-center justify-center flex-col gap-8 py-10   px-6 md:px-10 lg:px-20 bg-[#e6f3ff9f] mt-20'>
      <SectionHeaders
        header="ჩვენ შესახებ"
        paragraph="2010 წლიდან დღემდე, Finco ეხმარება ბიზნესებსა და ინდივიდების მხარდაჭერას, რათა მიაღწიონ ფინანსურ წარმატებას. ჩვენ ვაერთიანებთ გამოცდილებას, თანამედროვე ხედვებს და პერსონალიზებულ მიდგომას, რომ მივაწოდოთ შედეგები, რომლებიც ნამდვილად მნიშვნელოვანია.."
        hasDivider={true}
        padding='pb-1'
        gap='2'
        maxWidth='width-full'
              />
      <div className='flex flex-col md:flex-row justify-between 
        p-6 md:p-8 lg:p-10  w-full gap-8'>
        <div className='flex flex-col gap-5 justify-start text-start w-full md:w-1/2'>
          <SectionHeaders
            header="ჩვენი მისია"
            paragraph="ჩვენი მისიაა ვიყოთ სანდო პარტნიორი კომპანიებისა და პროფესიონალებისთვის — დავეხმაროთ მათ ფინანსურ დაგეგმვაში, სტრატეგიულ გადაწყვეტილებებსა და თანამედროვე ბიზნესგადაწყვეტილებებში. ჩვენ გვჯერა, რომ წარმატება მიიღწევა პროფესიონალიზმისა და ერთგულების გაერთიანებით, სადაც თითოეული ნაბიჯი სიმტკიცესა და გაზომვად შედეგზეა დაფუძნებული."
            hasDivider={false}
            textCenter='center md:start'
            padding='pb-0'
          />
        </div>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-4 w-full md:w-1/2 mt-4 md:mt-0 '>
          <HeroCard
            cardImage={AbUsPage1}
            numTitle="13"
            textTitle="წლიანი გამოცდილება"
            direction='flex-col'
            wrapperCenter='justify-center 
            rounded-lg bg-white py-2'
            alignCenter = 'items-center'
            fontSize='lg'
          />
          <HeroCard
            cardImage={AbUsPage2}
            numTitle="200+"
            textTitle="კმაყოფილი მომხმარებელი"
            direction='flex-col'
            wrapperCenter='justify-center 
            rounded-lg bg-white py-2'
            alignCenter = 'items-center'
            fontSize='lg'
          />
          <HeroCard
            cardImage={AbUsPage3}
            numTitle="170+"
            textTitle="პროფესიონალი"
            direction='flex-col'
            wrapperCenter='justify-center 
            rounded-lg bg-white py-2'
            alignCenter = 'items-center'
            fontSize='lg'
          />
          <HeroCard
            cardImage={AbUsPage4}
            numTitle="15+"
            textTitle="წარმატებული სტუდენტი"
            direction='flex-col'
            wrapperCenter='justify-center 
            rounded-lg bg-white py-2'
            alignCenter = 'items-center'
            fontSize='lg'
          />
        </div>
      </div>
      <div className='flex flex-col justify-between items-center p-6 md:p-8 lg:p-10      w-full gap-8'>
        <div className='flex flex-col gap-5 justify-start text-start w-full'>
          <SectionHeaders
            header="ჩვენი ღირებულებები"
            paragraph="   პრინციპები, რომლებიც გვაკავშირებს ყველა პროექტთან და პარტნიორთან:"
            hasDivider={true}
            textCenter='center'
            padding='pb-0'
          />
        </div>
        <div className='grid grid-cols-1 
          md:grid-cols-2 
          lg:grid-cols-4 gap-10 w-full'>
          <ServiceCard
            image={gir1}
            header="ინოვაცია"
            paragraph="ვიყენებთ თანამედროვე ინსტრუმენტებსა და მიდგომებს."
            direction='md:flex-col'
            textStart='justify-start md:justify-center'
          />
          <ServiceCard
            image={gir2}
            header="პასუხისმგებლობა"
            paragraph="თითოეული გადაწყვეტილება ეფუძნება ზუსტ ანალიზს."
            direction='md:flex-col'
            textStart='justify-start md:justify-center'
          />
          <ServiceCard
            image={gir3}
            header="სანდოობა"
            direction='md:flex-col'
            textStart='justify-start md:justify-center'
            paragraph="ჩვენი სიტყვა ისეთივე მტკიცეა, როგორც ჩვენი ანალიზი."
          />
          <ServiceCard
            image={gir4}
            header="თანამშრომლობა"
            paragraph="ვმუშაობთ როგორც ერთიანი გუნდი კლიენტთან და პარტნიორებთან ერთად."
            direction='md:flex-col'
            textStart='justify-start md:justify-center'
          />
        </div>
      </div>
    </div>
    <div className='flex flex-col justify-between py-10
      items-centerpy-10 px-6 md:px-10 lg:px-20 w-full gap-8 bg-white'>
        <div className='flex flex-col gap-5 justify-start text-start w-full'>
          <SectionHeaders
            header="ჩვენი გუნდი"
            paragraph="ჩვენი გუნდი შედგება სერტიფიცირებული პროფესიონალებისგან, რომელთაც მრავალწლიანი გამოცდილება აქვთ ფინანსურ, იურიდიულ და ბიზნეს სფეროებში. თითოეული მათგანი ქმნის Finco-ს ბირთვს — ერთიანობას, რომელიც უზრუნველყოფს სტაბილურ და ეფექტურ მომსახურებას."
            hasDivider={true}
            textCenter='center'
            padding='pb-0'
            maxWidth='width-full'
          />
        </div>
        <div className='grid grid-cols-1 
          md:grid-cols-2 
          lg:grid-cols-4 gap-10 w-full'>
          <HeroCard
            cardImage={avatar1}
            numTitle="გოგა ხილაძე"
            textTitle="ფინანსური ანალიტიკოსი"
            text='12+ წლიანი გამოცდილება საბანკო და საინვესტიციო სფეროში.'
            direction='flex-col'
            wrapperCenter='justify-start 
            rounded-lg bg-white py-6 px-12 text-center shadow-lg'
            alignCenter = 'items-center'
            fontSize='lg'
            noWrap={false}
          />
          <HeroCard
            cardImage={avatar2}
            numTitle="ქეთი ქათამაძე"
            textTitle="ფინანსური მრჩეველი"
            text='კორპორაციული სამართლის სპეციალისტი 10+ წლიანი პრაქტიკით.'
            direction='flex-col'
            wrapperCenter='justify-start 
            rounded-lg bg-white py-6 px-12 text-center shadow-lg'
            alignCenter = 'items-center'
            fontSize='lg'
            noWrap={false}
          />
          <HeroCard
            cardImage={avatar3}
            numTitle="თამუნა მუსერიძე"
            textTitle="იურიდიული კონსულტანტი"
            text='კორპორაციული სამართლის სპეციალისტი.'
            direction='flex-col'
            wrapperCenter='justify-start 
            rounded-lg bg-white py-6 px-12 text-center shadow-lg'
            alignCenter = 'items-center'
            fontSize='lg'
            noWrap={false}
          />
          <HeroCard
            cardImage={avatar4}
            numTitle="ხატია შუშაძე"
            textTitle="განვითარების მენეჯერი"
            text='ექსპერტი სტარტაპებსა და ბიზნეს სტრატეგიებში.'
            direction='flex-col'
            wrapperCenter='justify-start 
            rounded-lg bg-white py-6 px-12 text-center shadow-lg'
            alignCenter = 'items-center'
            fontSize='lg'
            noWrap={false}
          />
        </div>
        <button onClick={() => setShowConsultationModal(true)}>
          <Button
            title="კონსულტაციის დაგეგმვა"
            bgColor="bg-[#1b375d]"
            textColor="text-white"
            hoverText="text-[#1b375d]"
            hoverBg="bg-white"
          />
        </button>
         {showConsultationModal && (
        <ConsultationModal
          showModal={showConsultationModal}
          setShowModal={setShowConsultationModal}
        />
          )}
      </div>
    </>
  );
};

export default AboutUsPage;