import React from 'react'
import SectionHeaders from '../components/SectionHeaders'
import NewsCard from '../components/componentParts/NewsCard'
import Button from '../components/buttonsComponents/Button'
import image from '../assets/news1.svg'

const NewsPage = () => {
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
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <NewsCard
          image={image}
          header={'FINCO იწყებს ახალ ფინანსურ  სერვისს'}
          paragraph={'ჩვენი გუნდი გთავაზობთ ინდივიდუალურ ფინანსურ კონსულტაციებს,  რომლებიც დაგეხმარებათ ბიუჯეტის დაგეგმვასა  და მართვაში.'}
        >
          <Button
                      title="რეგისტრაცია"
                      bgColor="bg-[#1b375d]"
                      textColor="text-white"
                      hoverText="text-[#1b375d]"
                      hoverBg="bg-white"
                      textStart='text-center'
                    />
        </NewsCard>
        <NewsCard
          image={image}
          header={'FINCO იწყებს ახალ ფინანსურ  სერვისს'}
          paragraph={'ჩვენი გუნდი გთავაზობთ ინდივიდუალურ ფინანსურ კონსულტაციებს,  რომლებიც დაგეხმარებათ ბიუჯეტის დაგეგმვასა  და მართვაში.'}
        >
          <Button
                      title="რეგისტრაცია"
                      bgColor="bg-[#1b375d]"
                      textColor="text-white"
                      hoverText="text-[#1b375d]"
                      hoverBg="bg-white"
                      textStart='text-center'
                    />
        </NewsCard>
        <NewsCard
          image={image}
          header={'FINCO იწყებს ახალ ფინანსურ  სერვისს'}
          paragraph={'ჩვენი გუნდი გთავაზობთ ინდივიდუალურ ფინანსურ კონსულტაციებს,  რომლებიც დაგეხმარებათ ბიუჯეტის დაგეგმვასა  და მართვაში.'}
        >
          <Button
                      title="რეგისტრაცია"
                      bgColor="bg-[#1b375d]"
                      textColor="text-white"
                      hoverText="text-[#1b375d]"
                      hoverBg="bg-white"
                      textStart='text-center'
                    />
        </NewsCard>
        <NewsCard
          image={image}
          header={'FINCO იწყებს ახალ ფინანსურ  სერვისს'}
          paragraph={'ჩვენი გუნდი გთავაზობთ ინდივიდუალურ ფინანსურ კონსულტაციებს,  რომლებიც დაგეხმარებათ ბიუჯეტის დაგეგმვასა  და მართვაში.'}
        >
          <Button
                      title="რეგისტრაცია"
                      bgColor="bg-[#1b375d]"
                      textColor="text-white"
                      hoverText="text-[#1b375d]"
                      hoverBg="bg-white"
                      textStart='text-center'
                    />
        </NewsCard>
        <NewsCard
          image={image}
          header={'FINCO იწყებს ახალ ფინანსურ  სერვისს'}
          paragraph={'ჩვენი გუნდი გთავაზობთ ინდივიდუალურ ფინანსურ კონსულტაციებს,  რომლებიც დაგეხმარებათ ბიუჯეტის დაგეგმვასა  და მართვაში.'}
        >
          <Button
                      title="რეგისტრაცია"
                      bgColor="bg-[#1b375d]"
                      textColor="text-white"
                      hoverText="text-[#1b375d]"
                      hoverBg="bg-white"
                      textStart='text-center'
                    />
        </NewsCard>
        <NewsCard
          image={image}
          header={'FINCO იწყებს ახალ ფინანსურ  სერვისს'}
          paragraph={'ჩვენი გუნდი გთავაზობთ ინდივიდუალურ ფინანსურ კონსულტაციებს,  რომლებიც დაგეხმარებათ ბიუჯეტის დაგეგმვასა  და მართვაში.'}
        >
          <Button
                      title="რეგისტრაცია"
                      bgColor="bg-[#1b375d]"
                      textColor="text-white"
                      hoverText="text-[#1b375d]"
                      hoverBg="bg-white"
                      textStart='text-center'
                    />
        </NewsCard>
      </div>
    </div>
  )
}

export default NewsPage