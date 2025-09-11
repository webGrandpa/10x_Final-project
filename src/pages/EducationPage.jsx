// src/pages/EducationPage.jsx

import React, { useState } from 'react';

// Component Imports
import SectionHeaders from '../components/SectionHeaders';
import ServicesPageCard from '../components/componentParts/ServicesPageCard';
import Button from '../components/buttonsComponents/Button';
import RegistrationModal from '../components/ModalComponents/RegistrationModal';

// Data
import { educationHeader, educationCourses } from '../components/data/EducationData.js'; 

const EducationPage = () => {
    const [showRegistrationModal, setShowRegistrationModal] = useState(false);
    
    // Modal open function
    const openRegistrationModal = () => setShowRegistrationModal(true);

    return (
        <div className='flex flex-col items-center gap-8 py-10 px-6 md:px-10 lg:px-20 bg-[#e6f3ff9f] mt-20'>
            {/* Section Header */}
            <SectionHeaders
                header={educationHeader.header}
                paragraph={educationHeader.paragraph}
                hasDivider={true}
                maxWidth='w-full'
                padding='py-5'
            />
            
            {/* Dynamic rendering of course cards */}
            <div className='flex flex-col gap-10 md:px-20 w-full'>
                {educationCourses.map((course, index) => (
                    <ServicesPageCard
                        key={course.id}
                        header={course.header}
                        paragraph={course.paragraph}
                        image={course.image}
                        features={course.features}
                        imageWidth={'w-full max-w-lg'}
                        isReversed={index % 2 !== 0}
                    >
                        <Button 
                            title="დარეგისტრირდი კურსზე"
                            bgColor="bg-[#1b375d]"
                            textColor="text-white"
                            hoverText="text-[#1b375d]"
                            hoverBg="bg-white"
                            onClick={openRegistrationModal}
                        />
                    </ServicesPageCard>
                ))}
            </div>

            {/* Modal */}
            {showRegistrationModal && (
                <RegistrationModal
                    showModal={showRegistrationModal}
                    setShowModal={setShowRegistrationModal}
                />
            )}
        </div>
    );
};

export default EducationPage;