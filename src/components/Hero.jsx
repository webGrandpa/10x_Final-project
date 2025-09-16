// src/components/Hero.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './buttonsComponents/Button';
import HeroCards from './componentParts/HeroCards';
import ConsultationModal from './ModalComponents/ConsultationModal';
import { heroData } from './data/homePage/heroData.js';

const Hero = () => {
    const [showConsultationModal, setShowConsultationModal] = useState(false);

    return (
        <div className="relative w-full">
            <div className="absolute inset-0 h-full overflow-hidden">
                <img src={heroData.image} alt="Hero Background" className="absolute inset-0 w-full h-full object-cover"/>
            </div>
            <div className="relative flex flex-col mt-10 md:gap-14 gap-6 items-start justify-center text-start h-full px-6 md:px-10 lg:px-20 py-10">
                <h1 
                    className="text-3xl md:text-5xl font-extrabold text-[#1b375d] leading-normal"
                    dangerouslySetInnerHTML={{ __html: heroData.title }} 
                />
                <p 
                    className="text-base md:text-xl text-[#374151d1]"
                    dangerouslySetInnerHTML={{ __html: heroData.subtitle }}
                />
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <Button
                        title="კონსულტაციის მოთხოვნა"
                        bgColor="bg-[#1b375d]"
                        textColor="text-white"
                        hoverText="text-[#1b375d]"
                        hoverBg="bg-white"
                        onClick={() => setShowConsultationModal(true)}
                    />
                    <Link to="/services">
                        <Button 
                            title="ჩვენი სერვისები"
                            bgColor="bg-white"
                            textColor="text-[#1b375d]"
                            hoverText="text-white"
                            hoverBg="bg-[#1b375d]"
                        />
                    </Link>
                </div>
                <div className="flex flex-col md:flex-row gap-8">
                    {heroData.stats.map(stat => (
                        <HeroCards
                            key={stat.id}
                            cardImage={stat.image}
                            numTitle={stat.numTitle}
                            textTitle={stat.textTitle}
                            variant="statistic"
                            textDirection='text-start'
                        />
                    ))}
                </div>
            </div>
            {showConsultationModal && (
                <ConsultationModal
                    showModal={showConsultationModal}
                    setShowModal={setShowConsultationModal}
                />
            )}
        </div>
    );
};

export default Hero;