import React from 'react';
import heroImg from '../assets/heroImg.svg';
import Button from './Button';
import HeroCards from './HeroCards';
import card1 from '../assets/card1.svg';
import card2 from '../assets/card2.svg';
import card3 from '../assets/card3.svg';
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="relative w-[100%] h-screen">
      <div className="absolute inset-0 md:w-[100%] h-full overflow-hidden
      md:bg-cover md:bg-center">
        <img
          src={heroImg}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover lg:object-center"
        />
      </div>
      <div className="relative flex flex-col mt-20 md:gap-14 lg:gap-16 gap-6 items-start md:justify-center text-start h-full px-6 md:px-10 lg:px-20 py-10">
        <h1 className="text-3xl sm:text-2xl md:text-5xl lg:text-5xl 
        font-extrabold text-[#1b375d] leading-normal tracking-wide">
          ბუღალტრული <br /> მომსახურება  თქვენი <br /> ბიზნესისთვის
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-[#374151d1]">
            ჩვენ გთავაზობთ პროფესიონალურ ბუღალტრულ და იურიდიულ 
            მომსახურებას,<br /> რომელიც დაგეხმარებათ
            ბიზნესის განვითარებაში.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
            <Link to="/consultation">
              <Button title="კონსულტაციის მოთხოვნა"
              bgColor="bg-[#1b375d]"
              textColor="text-white"
              hoverText="text-[#1b375d]"
              hoverBg="bg-white"
              />
            </Link>
            <Link to="/services">
              <Button title="ჩვენი სერვისები"
              bgColor="bg-white"
              textColor="text-[#1b375d]"
              hoverText="text-white"
              hoverBg="bg-[#1b375d]"
              />
            </Link>
        </div>
        <div className="flex flex-col md:flex-row gap-8 pt-8">
          <HeroCards 
            cardImage={card1}
            numTitle="15+"
            textTitle="წლიანი გამოცდილება"
          />
          <HeroCards 
            cardImage={card2}
            numTitle="200+"
            textTitle="კმაყოფილი კლიენტი"
          />
          <HeroCards 
            cardImage={card3}
            numTitle="170+"
            textTitle="წარმატებული სტუდენტი"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;