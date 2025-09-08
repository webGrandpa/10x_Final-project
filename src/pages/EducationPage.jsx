import React, { useState } from 'react';
import SectionHeaders from '../components/SectionHeaders'
import ServicesPageCard from '../components/componentParts/ServicesPageCard'
import Button from '../components/buttonsComponents/Button'
import edu1 from '../assets/edu1.svg'
import edu2 from '../assets/edu2.svg'
import edu3 from '../assets/edu3.svg'
import RegistrationModal from '../components/ModalComponents/RegistrationModal';


const EducationPage = () => {
    const [showRegistrationModal, setShowRegistrationModal] = useState(false);

  return (
    <div
          className='about-us-section flex items-center 
          justify-center flex-col gap-8 py-10   
          px-6 md:px-10 lg:px-20 bg-[#e6f3ff9f] mt-20'
    >
      <SectionHeaders
        header="პროფესიული განათლება"
        paragraph="ფინკო გთავაზობთ სასწავლო პროგრამებს, რომლებიც შექმნილია პრაქტიკულ ცოდნაზე და თანამედროვე ბიზნესის მოთხოვნებზე მორგებით"
        hasDivider={true}
        padding='pb-1'
        gap='2'
        maxWidth='width-full'
              />
        <div className='flex flex-col gap-10 md:px-20'>
          <ServicesPageCard
            header='ბუღალტრული კურსები'
            paragraph=' ბუღალტრული აღრიცხვა და ფინანსური სტანდარტების პრაქტიკული შესწავლა.  '
            image={edu1}
            imageWidth={'w-[584px]'}
            features={[
              "საბაზისო ბუღალტერია",
              "საგადასახადო სისტემა",
              "ფინანსური ანგარიშგება",
              "ბუღალტერიის საფუძვლები"
            ]}
          >
            <Button 
                title="დარეგისტრირდი კურსზე"
                bgColor="bg-[#1b375d]"
                textColor="text-white"
                hoverText="text-[#1b375d]"
                hoverBg="bg-white"
                onClick={() => setShowRegistrationModal(true)}
                />
            </ServicesPageCard>
            <ServicesPageCard
            header='ფინანსური ანალიზი'
            paragraph='ბიზნესის ფინანსური მონაცემების გაანალიზება და ეფექტური მართვა. '
            image={edu2}
            imageWidth={'w-[584px]'}
            features={[
              "ფინანსური ანალიზის საფუძვლები",
              "ბიუჯეტირება",
              "რისკების შეფასება",
              "პრობლემების აღმოფხვრა"
            ]}
          >
            <Button 
                title="დარეგისტრირდი კურსზე"
                bgColor="bg-[#1b375d]"
                textColor="text-white"
                hoverText="text-[#1b375d]"
                hoverBg="bg-white"
                onClick={() => setShowRegistrationModal(true)}
                />
            </ServicesPageCard>
            <ServicesPageCard
            header='სამართალის საფუძვლები'
            paragraph='იურიდიული ცოდნა ბინეს პროცესებისთვის'
            image={edu3}
            imageWidth={'w-[584px]'}
            features={[
              "ბიზნესის რეგისტრაცია",
              "ხელშეკრულების შედგენა",
              "სამართლებრივი რისკების მართვა",
              "იურიდიული სამართალი"
            ]}
          >
            <Button 
                title="დარეგისტრირდი კურსზე"
                bgColor="bg-[#1b375d]"
                textColor="text-white"
                hoverText="text-[#1b375d]"
                hoverBg="bg-white"
                onClick={() => setShowRegistrationModal(true)}
                />
            </ServicesPageCard>
        </div>
           

        {showRegistrationModal && (
        <RegistrationModal
          showModal={showRegistrationModal}
          setShowModal={setShowRegistrationModal}
        />
          )}
    </div>
  )
}

export default EducationPage