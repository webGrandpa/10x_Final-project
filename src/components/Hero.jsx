import React from 'react';
import heroImg from '../assets/heroImg.svg';
import Button from './Button';
import HeroCards from './HeroCards';
import card1 from '../assets/card1.svg';
import card2 from '../assets/card2.svg';
import card3 from '../assets/card3.svg';

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      <img
        src={heroImg}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative flex flex-col gap-5 items-start justify-center text-start h-full px-20">
        <h1 className="text-4xl md:text-6xl font-extrabold w-3xl text-[#1b375d]">
          ბუღალტრული მომსახურება თქვენი ბიზნესისთვის
        </h1>
        <p className="mt-4 text-lg md:text-xl text-[#374151d1] w-2xl mb-8">
            ჩვენ გთავაზობთ პროფესიონალურ ბუღალტრულ, იურიდიულ და
            საკონსულტაციო მომსახურებას, რომელიც დაგეხმარებათ
            ბიზნესის განვითარებაში.
        </p>
        <div className="flex space-x-4 gap-3">
            <Button title="კონსულტაციის მოთხოვნა"
            bgColor="bg-[#1b375d]"
            textColor="text-white"
            hoverText="text-[#1b375d]"
            hoverBg="bg-white"
            />
            <Button title="ჩვენი სერვისები"
            bgColor="bg-white"
            textColor="text-[#1b375d]"
            hoverText="text-white"
            hoverBg="bg-[#1b375d]"
            />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
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