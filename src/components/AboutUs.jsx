import React from 'react'
import HeroCards from './HeroCards'
import teamImage from '../assets/teamImage.svg';
import AbUs1 from '../assets/AbUs1.svg';
import AbUs2 from '../assets/AbUs2.svg';
import Hr from './Hr';
import SectionHeaders from './SectionHeaders';

const AboutUs = () => {
  return (
    <div id="about-us"
    className='about-us-section flex items-center justify-center flex-col gap-8 py-10 px-6 md:px-10 lg:px-20 bg-[#e6f3ff9f]'
    >
        <SectionHeaders
          header="ჩვენს შესახებ"
          paragraph="ჩვენი გუნდი შედგება გამოცდილი პროფესიონალებისგან, რომლებიც მზად არიან
          დაგეხმარონ ფინანსური გამოწვევების გადალახვაში."
          padding='py-0 md:py-10'
          dividerScale={10}
        />
        <div className='about-us-content flex flex-col md:flex-row items-center
         justify-between gap-8 md:gap-20'>
            <div className='about-us-text w-full md:w-1/2 order-2 md:order-1'>
                <h3 className='text-xl font-semibold mb-5'>ვინ ვართ ჩვენ</h3>
                <p className='text-[#374151bf] mb-5'>
                    2010 წლიდან ვეხმარებით მცირე და საშუალო ბიზნესებს ფინანსური სტაბილურობის მიღწევაში. ჩვენი მიზანია შევქმნათ გამძლე და ეფექტური ფინანსური სისტემები, რომლებიც უზრუნველყოფენ თქვენი ბიზნესის წარმატებას.
                </p>
                <p className='text-[#374151bf]'>
                    ჩვენი გუნდი შედგება სერტიფიცირებული ბუღალტრების, იურისტებისა და ფინანსური
                    მრჩევლებისგან, რომლებსაც აქვთ მრავალწლიანი გამოცდილება სხვადასხვა
                    ინდუსტრიაში.
                </p>
                <div className='hero-cards-container flex flex-col sm:flex-row pt-3 items-start gap-4'>
                    <HeroCards
                        cardImage={AbUs1}
                        numTitle="15+ პროფესიონალი"
                        textTitle="გამოცდილი გუნდი"
                        fontSize="base"
                    />
                    <HeroCards
                        cardImage={AbUs2}
                        numTitle="200+ კმაყოფილი კლიენტი"
                        textTitle="ნდობა და რეპუტაცია"
                        fontSize="base"
                    />
                </div>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
                <img
                className='w-full h-auto rounded-lg shadow-lg'
                src={teamImage} alt="Our Team" />
            </div>
        </div>
    </div>
  )
}

export default AboutUs