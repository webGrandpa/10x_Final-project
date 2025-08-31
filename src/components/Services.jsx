import React from 'react'
import Ser1 from '../assets/Ser1.svg'
import Ser2 from '../assets/Ser2.svg'
import Ser3 from '../assets/Ser3.svg'
import ServiceCard from './ServicesCard'
import ButtonWithArrow from './ButtonWithArrow'
import Hr from './Hr'
import SectionHeaders from './SectionHeaders'

const Services = () => {
  return (
    <div className="services-section text-center pb-10 bg-[#ffffffd4] flex flex-col items-center gap-6">
        <SectionHeaders
          header="ჩვენი სერვისები"
          paragraph="გთავაზობთ კომპლექსურ ფინანსურ მომსახურებას, რომელიც მორგებულია თქვენი
          ბიზნესის საჭიროებებზე."
          padding='py-10'
        />
        <div className="service-cards flex items-center justify-between px-20 ">
            <ServiceCard
                image={Ser1}
                header="ბუღალტრული მომსახურება"
                paragraph="სრული ბუღალტრული აღრიცხვა, საგადასახადო
                  დეკლარაციების მომზადება, ფინანსური
                  ანგარიშგება და ანალიზი."
                features={[
                  "ყოველდღიური ოპერაციების აღრიცხვა",
                  "საგადასახადო დეკლარაციები",
                  "ფინანსური ანგარიშგება"
                ]}>
                  <ButtonWithArrow
                    buttonText="დეტალები"
                  />
            </ServiceCard>
            <ServiceCard
                image={Ser2}
                header="იურიდიული მომსახურება"
                paragraph="სამართლებრივი კონსულტაცია,
                  ხელშეკრულებების მომზადება, საგადასახადო
                  დავები და ბიზნეს რეგისტრაცია."
                features={[
                  "ბიზნესის რეგისტრაცია",
                  "ხელშეკრულებების მომზადება",
                  "საგადასახადო დავები"
                ]}
            ><ButtonWithArrow
                buttonText="დეტალები"
              />
            </ServiceCard>
            <ServiceCard
                image={Ser3}
                header="ფინანსური კონსულტაცია"
                paragraph="ბიზნეს გეგმების შემუშავება, ფინანსური ანალიზი,
                  ინვესტიციების დაგეგმვა და ბიუჯეტირება."
                features={[
                  "ბიზნეს გეგმები",
                  "ფინანსური ანალიზი",
                  "ბიუჯეტირება"
                ]}>
              <ButtonWithArrow
                buttonText="დეტალები"
              >დეტალები</ButtonWithArrow>
            </ServiceCard>
        </div>
    </div>
  )
}

export default Services