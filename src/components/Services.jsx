// src/components/Services.jsx
import React from 'react';
import ServiceCard from './componentParts/ServicesCard';
import ButtonWithArrow from './buttonsComponents/ButtonWithArrow';
import SectionHeaders from './SectionHeaders';
import { servicesData } from './data/homePage/servicesData.js';

const Services = () => {
  return (
    <div className="text-center py-10 bg-white flex flex-col items-center gap-6 px-6 md:px-10 lg:px-20">
      <SectionHeaders
        header={servicesData.sectionHeader.header}
        paragraph={servicesData.sectionHeader.paragraph}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {servicesData.services.map(service => (
            <ServiceCard
                key={service.id}
                image={service.image}
                header={service.header}
                paragraph={service.paragraph}
                features={service.features}
            >
                <ButtonWithArrow
                    buttonText="დეტალები"
                    self='self-end'
                    to={service.link}
                />
            </ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;