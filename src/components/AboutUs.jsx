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
    className='about-us-section flex items-center justify-center flex-col gap-8 pb-10 px-20  bg-[#e6f3ff9f]'
    >
        <SectionHeaders
          header="ჩვენს შესახებ"
          paragraph="ჩვენი გუნდი შედგება გამოცდილი პროფესიონალებისგან, რომლებიც მზად არიან
          დაგეხმარონ ფინანსური გამოწვევების გადალახვაში."
          padding='py-10'
        />
        <div className='about-us-content flex flex-row items-center gap-8'>
            <div className='about-us-text w-[50%]'>
                <h3 className='text-xl font-semibold mb-5'>ვინ ვართ ჩვენ</h3>
                <p className='text-[#374151bf] mb-5'>
                    2010 წლიდან ვეხმარებით მცირე და საშუალო ბიზნესებს ფინანსური სტაბილურობის მიღწევაში. ჩვენი მიზანია შევქმნათ გამჭვირვალე და ეფექტური ფინანსური სისტემები, რომლებიც უზრუნველყოფენ თქვენი ბიზნესის წარმატებას.
                </p>
                <p className='text-[#374151bf]'>
                    ჩვენი გუნდი შედგება სერტიფიცირებული ბუღალტრების, იურისტებისა და ფინანსური
                    მრჩევლებისგან, რომლებსაც აქვთ მრავალწლიანი გამოცდილება სხვადასხვა
                    ინდუსტრიაში.
                </p>
                <div className='hero-cards-container flex pt-3 items-start gap-4'>
                    <HeroCards
                        cardImage={AbUs1}
                        numTitle="15+ პროფესიონალი"
                        textTitle="გამოცდილი გუნდი"
                        fontSize="base"
                    />
                    <HeroCards
                        cardImage={AbUs2}
                        numTitle="200+ კმაყოფილი კლიენტი+"
                        textTitle="ნდობა და რეპუტაცია"
                        fontSize="base"
                    />
                </div>
            </div>
            <img
            className='w-[620px]'
            src={teamImage} alt="Our Team" />
        </div>

    </div>
  )
}

export default AboutUs