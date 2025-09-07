import React, { useState } from 'react';
import SectionHeaders from '../components/SectionHeaders'
import ServicesPageCard from '../components/componentParts/ServicesPageCard'
import Button from '../components/buttonsComponents/Button'
import ServiceCard from '../components/componentParts/ServicesCard'
import serP1 from '../assets/serP1.svg'
import serP2 from '../assets/serP2.svg'
import serP3 from '../assets/serP3.svg'
import s01 from '../assets/s01.svg'
import s02 from '../assets/s02.svg'
import s03 from '../assets/s03.svg'
import s04 from '../assets/s04.svg'
import ConsultationModal from '../components/ModalComponents/ConsultationModal'


const ServicesPage = () => {
    const [showConsultationModal, setShowConsultationModal] = useState(false);

  return (
    <div
          className='about-us-section flex items-center 
          justify-center flex-col gap-8 py-10   
          px-6 md:px-10 lg:px-20 bg-[#e6f3ff9f] mt-20'
    >
      <SectionHeaders
        header="სერვისები"
        paragraph="ფინკოში ვთავაზობთ თანამედროვე გადაწყვეტილებებს ფინანსურ,
         იურიდიულ და საგანმანათლებლო სფეროებში. ჩვენი გუნდი დაგეხმარებათ 
         როგორც ბიზნესის, ისე პირადი მიზნების მიღწევაში."
        hasDivider={true}
        padding='pb-1'
        gap='2'
        maxWidth='width-full'
              />
        <div className='flex flex-col gap-10 md:px-20'>
          <ServicesPageCard
            header='ბუღალტრული მომსახურება'
            paragraph='  მთლიანი ბუღალტრული აღრიცხვა, საგადასახადო დეკლარაციები და ფინანსური ანგარიშგება, სიზუსტეზე      და გამჭვირვალობაზე დაფუძნებული.  '
            image={serP1}
            imageWidth={'w-[584px]'}
            features={[
              "კონსულტაციები",
              "აუდიტის მხარდაჭერა",
              "ფინანსური ანგარიშგება",
              "საგადასახადო დაგეგმვა და მართვა"
            ]}
          >
            <Button 
                title="დაჯავშნე კონსულტაცია"
                bgColor="bg-[#1b375d]"
                textColor="text-white"
                hoverText="text-[#1b375d]"
                hoverBg="bg-white"
                onClick={() => setShowConsultationModal(true)}
                />
            </ServicesPageCard>
            <ServicesPageCard
            header='იურიდიული მომსახურება'
            paragraph=' სანდო იურიდიული კონსულტაცია და მხარდაჭერა თქვენი ბიზნესის დასაცავად. '
            image={serP2}
            imageWidth={'w-[584px]'}
            features={[
              "ბიზნესის რეგისტრაცია",
              "ხელშეკრულებების მომზადება",
              "ინტელექტუალური საკუთრება",
              "სამართლებრივი დავები"
            ]}
          >
            <Button 
                title="დაჯავშნე კონსულტაცია"
                bgColor="bg-[#1b375d]"
                textColor="text-white"
                hoverText="text-[#1b375d]"
                hoverBg="bg-white"
                onClick={() => setShowConsultationModal(true)}
                />
            </ServicesPageCard>
            <ServicesPageCard
            header='ფინანსური კონსულტაცია'
            paragraph='სტრატეგიული ფინანსური გადაწყვეტილებები ბიზნესის ზრდისა და სტაბილურობისთვის.'
            image={serP3}
            imageWidth={'w-[584px]'}
            features={[
              "ბიზნეს გეგმის შედგენა",
              "ფინანსური ანალიზი",
              "ბიუჯეტირება",
              "განვითარების სტრატეგიებ7"
            ]}
          >
            <Button 
                title="დაჯავშნე კონსულტაცია"
                bgColor="bg-[#1b375d]"
                textColor="text-white"
                hoverText="text-[#1b375d]"
                hoverBg="bg-white"
                onClick={() => setShowConsultationModal(true)}
                />
            </ServicesPageCard>
        </div>
            <SectionHeaders
            header="როგორ ვმუშაობთ ჩვენთან"
            paragraph="ჩვენი მუშაობის სტრატეგია დაფუძნებულია შემდგომ პრინციპებსა და ნაბიჯებზე, რომელიც 
ჩვენი ამდენ წლიანი გამოცდილების შედეგია."
            hasDivider={true}
            padding='pb-1'
            gap='2'
            maxWidth='width-full'
            size='text-2xl'
            />
          <div className='grid grid-cols-1 
            md:grid-cols-2 
            lg:grid-cols-4 gap-10 w-full md:px-20'>
          <ServiceCard
            image={s01}
            header="ინოვაცია"
            paragraph="ვიყენებთ თანამედროვე ინსტრუმენტებსა და მიდგომებს."
            direction='md:flex-col'
            textStart='justify-start md:justify-center'
          />
          <ServiceCard
            image={s02}
            header="პასუხისმგებლობა"
            paragraph="თითოეული გადაწყვეტილება ეფუძნება ზუსტ ანალიზს."
            direction='md:flex-col'
            textStart='justify-start md:justify-center'
          />
          <ServiceCard
            image={s03}
            header="სანდოობა"
            direction='md:flex-col'
            textStart='justify-start md:justify-center'
            paragraph="ჩვენი სიტყვა ისეთივე მტკიცეა, როგორც ჩვენი ანალიზი."
          />
          <ServiceCard
            image={s04}
            header="თანამშრომლობა"
            paragraph="ვმუშაობთ როგორც ერთიანი გუნდი კლიენტთან და პარტნიორებთან ერთად."
            direction='md:flex-col'
            textStart='justify-start md:justify-center'
          />
        </div>

        {showConsultationModal && (
        <ConsultationModal
          showModal={showConsultationModal}
          setShowModal={setShowConsultationModal}
        />
          )}
    </div>
  )
}

export default ServicesPage