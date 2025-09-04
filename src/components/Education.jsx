import React from 'react'
import SectionHeaders from './SectionHeaders'
import students from '../assets/students.svg'
import Figure from './Figure'
import fig1 from '../assets/fig1.svg'
import fig2 from '../assets/fig2.svg'
import Button from './Button'
import { Link } from 'react-router-dom'



const Education = () => {
  return (
    <div className='text-center p-10 bg-[#ffffffd4] flex flex-col justify-between gap-6 px-6 md:px-10 lg:px-20 py-10'>
      <SectionHeaders
        header="ბუღალტრული განათლება"
        paragraph="გთავაზობთ პროფესიულ ტრენინგებს და კურსებს ბუღალტერიაში, რომლებიც
        დაგეხმარებათ თქვენი ცოდნის გაღრმავებაში."
        padding='pt-10'
      />
      <div className='flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20'>
          <img
          className='w-full h-auto md:max-w-xl lg:max-w-3xl rounded-2xl'
          src={students} alt="Students" />
          <div className='flex flex-col items-start w-full md:w-1/2'>
              <SectionHeaders
                header="პროფესიული კურსები ბუღალტერიაში"
                paragraph="ჩვენი კურსები შექმნილია როგორც დამწყების, ასევე გამოცდილი ბუღალტერისთვის.
                გთავაზობთ პრაქტიკულ ცოდნას, რომელიც დაგეხმარებათ კარიერულ წინსვლაში."
                hasDivider={false}
                size='2'
                pSize='sm'
                padding='pb-1'
                gap='2'
                textCenter='start'
              />
              <SectionHeaders
                header="საბაზისო ბუღალტერია"
                hasDivider={false}
                size='base'
                pSize='sm'
                padding='pb-1'
                gap='2'
                textCenter='start'
                paragraph="იდეალური კურსი დამწყებთათვის, რომლებსაც სურთ ბუღალტერიის საფუძვლების შესწავლა."
              >
                <div className='flex flex-row justify-start gap-2 items-center 
                w-full md:px-0 pb-2'>
                  <Figure
                    image={fig1}
                    caption="3 თვე"
                    direction='row'
                  />
                  <Figure
                    image={fig2}
                    caption="12 ადგილი"
                    direction='row'
                  />
                </div>
              </SectionHeaders>
              <SectionHeaders
                header="პრაქტიკული ბუღალტერია"
                hasDivider={false}
                size='base'
                pSize='sm'
                padding='pb-1'
                gap='2'
                textCenter='start'
                paragraph="კურსი მათთვის, ვინც უკვე ფლობს საბაზისო ცოდნას და სურს პრაქტიკული გამოცდილების მიღება."
              >
                <div className='flex flex-row justify-start gap-2 items-center 
                w-full md:px-0 pb-2'>
                  <Figure
                    image={fig1}
                    caption="5 თვე"
                    direction='row'
                  />
                  <Figure
                    image={fig2}
                    caption="12 ადგილი"
                    direction='row'
                  />
                </div>
              </SectionHeaders>
              <SectionHeaders
                header="საგადასახადო აღრიცხვა"
                hasDivider={false}
                size='base'
                pSize='sm'
                padding='pb-1'
                gap='2'
                textCenter='start'
                paragraph="შეისწავლეთ საგადასახადო კანონმდებლობა და მისი პრაქტიკული გამოყენება ბიზნესში."
              >
                <div className='flex flex-row justify-start gap-2 items-center 
                w-full md:px-0 pb-2'>
                  <Figure
                    image={fig1}
                    caption="1.5 თვე"
                    direction='row'
                  />
                  <Figure
                    image={fig2}
                    caption="15 ადგილი"
                    direction='row'
                  />
                </div>
              </SectionHeaders>
              <div className="w-full self-start text-start mt-8">
                <Link to="/education">
                  <Button title="კურსზე რეგისტრაცია"
                    bgColor="bg-[#1b375d]"
                    textColor="text-white"
                    hoverText="text-[#1b375d]"
                    hoverBg="bg-white"
                  />
                </Link>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Education