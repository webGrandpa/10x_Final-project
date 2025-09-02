import React from 'react'
import wu1 from '../assets/wu1.svg'
import wu2 from '../assets/wu2.svg'
import wu3 from '../assets/wu3.svg'
import part1 from '../assets/part1.svg'
import part2 from '../assets/part2.svg'
import ServiceCard from './ServicesCard'
import SectionHeaders from './SectionHeaders'
import Figure from './Figure'

const WhyUs = () => {
  return (
    <div className='text-center pb-10 bg-[#1B365D0D] flex flex-col items-center gap-6 px-30'>
        <SectionHeaders
          header="რატომ უნდა აგვირჩიოთ"
          paragraph="ჩვენ გთავაზობთ უმაღლესი ხარისხის მომსახურებას, რომელიც მორგებულია თქვენი
          ბიზნესის უნიკალურ საჭიროებებზე."
          padding="pt-20 pb-4"
        />
        <div className="service-cards flex items-center justify-between h-[80%] ">
            <ServiceCard
                image={wu1}
                header="პროფესიონალიზმი"
                paragraph="ჩვენი გუნდი შედგება
                სპეციალისტებისგან, რომლებსაც აქვთ
                მრავალწლიანი გამოცდილება ფინანსურ სფეროში."
            />
            <ServiceCard
                image={wu2}
                header="პერსონალიზებული მიდგომა"
                paragraph="ვითვალისწინებთ თქვენი ბიზნესის სპეციფიკას და
                გთავაზობთ ინდივიდუალურად მორგებულ
                გადაწყვეტილებებს."
            />
            <ServiceCard
                image={wu3}
                header="საიმედოობა"
                paragraph="ვუზრუნველყოფთ თქვენი ფინანსური ინფორმაციის
                კონფიდენციალურობას და ვიცავთ ყველა
                საკანონმდებლო მოთხოვნას."
            />
        </div>
        <div className=' flex justify-between bg-white px-8 py-10 rounded-lg shadow-md w-full'>
            <div className='flex flex-col gap-5 justify-start'>
                <SectionHeaders
                  header="გრძელვადიანი პარტნიორობა"
                  paragraph="ჩვენ ვზრუნავთ თქვენი ბიზნესის წარმატებაზე და ვცდილობთ შევქმნათ
                    გრძელვადიანი ურთიერთობები ჩვენს კლიენტებთან.
                    ჩვენი მიზანია დაგეხმაროთ ფინანსური სტაბილურობის მიღწევაში და ბიზნესის
                    განვითარებაში."
                hasDivider={false}
                textCenter='start'
                padding='pb-0'
                />
                <div className='flex items-center justify-start gap-5'>
                    <Figure image={part1} caption="24/7 მხარდაჭერა" />
                    <Figure image={part2} caption="უსაფრთხოება" />
                </div>
            </div>
            <div className='grid grid-cols-2 gap-2'>
                <SectionHeaders
                  header="13"
                  paragraph="წლიანი გამოცდილება"
                  hasDivider={false}
                  bgcolor="bg-[#E6F3FF4D]"
                  padding="py-2"
                  rounded='xl'
                />
                <SectionHeaders
                  header="200+"
                  paragraph="კმაყოფილი კლიენტი"
                  hasDivider={false}
                  bgcolor="bg-[#E6F3FF4D]"
                  padding="py-2"
                  rounded='xl'
                />
                <SectionHeaders
                  header="170"
                  paragraph="წარმატებული სტუდენტი"
                  hasDivider={false}
                  bgcolor="bg-[#E6F3FF4D]"
                  padding="py-2"
                  rounded='xl'
                />
                <SectionHeaders
                  header="15+"
                  paragraph="პროფესიონალი"
                  hasDivider={false}
                  bgcolor="bg-[#E6F3FF4D]"
                  padding="py-2"
                  rounded='xl'
                />
            </div>
        </div>
    </div>
  )
}

export default WhyUs