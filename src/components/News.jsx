import React from 'react'
import SectionHeaders from './SectionHeaders'
import ServiceCard from './ServicesCard'
import ButtonWithArrow from './ButtonWithArrow'
import news1 from '../assets/news1.svg'
import news2 from '../assets/news2.svg'
import news3 from '../assets/news3.svg'
import Button from './Button'   


const News = () => {
  return (
    <div className='news-section flex items-center flex-col mb-15'>
        <SectionHeaders
          header="სიახლეები და სტატიები"
          paragraph="გაეცანით უახლეს ინფორმაციას ფინანსების, ბუღალტერიის და ბიზნესის სფეროში"
          margin="mb-0"
          padding='pt-10'
        />
        <div className='flex flex-row md:flex-row justify-center items-center gap-8 mb-8 px-30'>
            <ServiceCard
                    image={news1}
                    header="2025 წლის საგადასახადო ცვლილებები ბიზნესისთვის"
                    direction={'flex-col'}
                    paragraph="გაეცანით 2025 წლის საგადასახადო კოდექსში შეტანილ ცვლილებებს და მათ გავლენას თქვენს..."
                ><ButtonWithArrow
                    buttonText="დაწვრილებით"
                  />
            </ServiceCard>
            <ServiceCard
                    image={news2}
                    header="ციფრული ბუღალტერიის უპირატესობების"
                    direction={'flex-col'}
                    paragraph="როგორ შეუძლია ციფრულ ბუღალტერიას გააუმჯობესოს თქვენი ბიზნესის ეფექტურობა და ..."
                ><ButtonWithArrow
                    buttonText="დაწვრილებით"
                  />
            </ServiceCard>
            <ServiceCard
                    image={news3}
                    header="როგორ შევადგინოთ ეფექტური ბიზნეს გეგმა"
                    direction={'flex-col'}
                    paragraph="ბიზნეს გეგმის შედგენის პრაქტიკული გზამკვლევი დამწყები მეწარმეებისთვის. გაეცანით ბიზნეს..."
                ><ButtonWithArrow
                    buttonText="დაწვრილებით"
                  />
            </ServiceCard>
        </div>
        <Button title="ყველა სიახლე"
            bgColor="bg-white"
            textColor="text-[#1b375d]"
            hoverText="text-white"
            hoverBg="bg-[#1b375d]"
            />
    </div>
  )
}

export default News
