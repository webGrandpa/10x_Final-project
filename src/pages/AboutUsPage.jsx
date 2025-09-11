// src/pages/AboutUsPage.jsx

import React, { useState } from 'react';
import SectionHeaders from '../components/SectionHeaders';
import ServiceCard from '../components/componentParts/ServicesCard';
import HeroCard from '../components/componentParts/HeroCards';
import Button from '../components/buttonsComponents/Button';
import ConsultationModal from '../components/ModalComponents/ConsultationModal';
import {
  aboutUsHeader,
  missionData,
  statisticsCards,
  valuesHeader,
  coreValues,
  teamHeader,
  teamMembers
} from '../components/datas/AboutUsData';

const AboutUsPage = () => {
  const [showConsultationModal, setShowConsultationModal] = useState(false);

  // modal open logic
  const openConsultationModal = () => setShowConsultationModal(true);

  return (
    <>
      {/*About Us section*/}
      <div id="about-us-page" className='flex flex-col items-center gap-8 py-10 px-6 md:px-10 lg:px-20 bg-[#e6f3ff9f]'>
        <SectionHeaders
          header={aboutUsHeader.header}
          paragraph={aboutUsHeader.paragraph}
          hasDivider={true}
          maxWidth='width-full'
          padding='pt-20'
        />

        {/*Our mission section*/}
        <div className='flex flex-col md:flex-row justify-between p-6 md:p-8 lg:p-10 w-full gap-8'>
          <div className='flex flex-col gap-5 justify-start text-start w-full md:w-1/2'>
            <SectionHeaders
              header={missionData.header}
              paragraph={missionData.paragraph}
              hasDivider={false}
              textCenter='text-center md:text-start'
              size='text-xl'
              padding='py-5'
            />
          </div>
          <div className='grid md:grid-cols-2 grid-cols-1 gap-4 w-full md:w-1/2 mt-4 md:mt-0'>
            {statisticsCards.map(card => (
              <HeroCard
                key={card.id}
                variant="statistic"
                cardImage={card.image}
                numTitle={card.numTitle}
                textTitle={card.textTitle}
              />
            ))}
          </div>
        </div>

        {/*Out Values section*/}
        <div className='flex flex-col justify-between items-center p-6 md:p-8 lg:p-10 w-full gap-8'>
          <SectionHeaders
            header={valuesHeader.header}
            paragraph={valuesHeader.paragraph}
            hasDivider={true}
            textCenter='center'
            size='text-2xl'
            padding='py5'
          />
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full'>
            {coreValues.map(value => (
              <ServiceCard
                key={value.id}
                image={value.image}
                header={value.header}
                paragraph={value.paragraph}
                direction='md:flex-col'
                textStart='justify-start md:justify-center'
              />
            ))}
          </div>
        </div>
      </div>
      
      {/*Our Team section*/}
      <div className='flex flex-col justify-between py-10 items-center px-6 md:px-10 lg:px-20 w-full gap-8 bg-white'>
        <SectionHeaders
          header={teamHeader.header}
          paragraph={teamHeader.paragraph}
          hasDivider={true}
          textCenter='center'
          maxWidth='width-full'
          size='text-2xl'
          padding='py-5'
        />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full'>
          {teamMembers.map(member => (
            <HeroCard
              key={member.id}
              variant="teamMember"
              cardImage={member.image}
              numTitle={member.name}
              textTitle={member.title}
              text={member.experience}
            />
          ))}
        </div>
        <Button
          title="კონსულტაციის დაგეგმვა"
          onClick={openConsultationModal}
          bgColor="bg-[#1b375d]"
          textColor="text-white"
          hoverText="text-[#1b375d]"
          hoverBg="bg-white"
        />
      </div>

      {/*Consultation modal*/}
      {showConsultationModal && (
        <ConsultationModal
          showModal={showConsultationModal}
          setShowModal={setShowConsultationModal}
        />
      )}
    </>
  );
};

export default AboutUsPage;