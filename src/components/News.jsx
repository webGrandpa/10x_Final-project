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
    <div className='news-section bg-[#1B365D0D] 
    flex items-center flex-col mb-15 px-6 md:px-10 lg:px-20'>
        <SectionHeaders
          header="სიახლეები და სტატიები"
          paragraph="გაეცანით უახლეს ინფორმაციას ფინანსების, ბუღალტერიის და ბიზნესის სფეროში"
          margin="mb-0"
          padding='pt-10'
        />
        <div className='flex flex-col md:flex-row justify-center items-center gap-3 md:gap-8 mb-8'>
            <ServiceCard
                    image={news1}
                    width='w-full'
                    height='h-full'
                    header="2025 წლის საგადასახადო ცვლილებები ბიზნესისთვის"
                    direction={'flex-col'}
                    paragraph="გაეცანით 2025 წლის საგადასახადო კოდექსში შეტანილ ცვლილებებს და მათ გავლენას თქვენს..."
                >
                <ButtonWithArrow buttonText="დაწვრილებით" />
            </ServiceCard>
            <ServiceCard
                    image={news2}
                    width='w-full'
                    height='h-full'
                    header="ციფრული ბუღალტერიის უპირატესობების"
                    direction={'flex-col'}
                    paragraph="როგორ შეუძლია ციფრულ ბუღალტერიას გააუმჯობესოს თქვენი ბიზნესის ეფექტურობა და ..."
                >
                <ButtonWithArrow buttonText="დაწვრილებით" />
            </ServiceCard>
            <ServiceCard
                    image={news3}
                    width='w-full'
                    height='h-full'
                    header="როგორ შევადგინოთ ეფექტური ბიზნეს გეგმა"
                    direction={'flex-col'}
                    paragraph="ბიზნეს გეგმის შედგენის პრაქტიკული გზამკვლევი დამწყები მეწარმეებისთვის. გაეცანით ბიზნეს..."
                >
                <ButtonWithArrow buttonText="დაწვრილებით" />
            </ServiceCard>
        </div>
        <div className="mt-4">
          <Button title="ყველა სიახლე"
              bgColor="bg-white"
              textColor="text-[#1b375d]"
              hoverText="text-white"
              hoverBg="bg-[#1b375d]"
          />
        </div>
    </div>
  )
}

export default News