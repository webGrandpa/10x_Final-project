// src/components/News.jsx
import React from 'react';
import SectionHeaders from './SectionHeaders';
import ServiceCard from './componentParts/ServicesCard';
import ButtonWithArrow from './buttonsComponents/ButtonWithArrow';
import Button from './buttonsComponents/Button';
import { newsData } from './data/homePage/newsData.js';

const News = () => {
  return (
    <div className='bg-[#1B365D0D] flex flex-col items-center px-6 md:px-10 lg:px-20 py-10'>
      <SectionHeaders
        header={newsData.sectionHeader.header}
        paragraph={newsData.sectionHeader.paragraph}
        textCenter='center'
      />
      <div className='flex flex-col md:flex-row justify-center items-stretch gap-8 my-8 w-full'>
        {newsData.articles.map(article => (
            <ServiceCard
                key={article.id}
                image={article.image}
                header={article.header}
                paragraph={article.paragraph}
                direction={'flex-col'}
                height='h-full'
            >
                <ButtonWithArrow buttonText="დაწვრილებით" />
            </ServiceCard>
        ))}
      </div>
      <div className="max-md:w-full text-center"> 
        <Button
          title="ყველა სიახლე"
          bgColor="bg-white"
          textColor="text-[#1b375d]"
          hoverText="text-white"
          hoverBg="bg-[#1b375d]"
        />
      </div>
    </div>
  );
};

export default News;