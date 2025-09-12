// src/components/ContactUs.jsx
import React from 'react';
import SectionHeaders from './SectionHeaders';
import Button from './buttonsComponents/Button';
import { contactData } from './data/homePage/contactData.js';

const ContactUs = () => {
  return (
    <div className='px-6 md:px-10 lg:px-20 w-full py-10'>
        <div className='bg-gray-100 rounded-3xl shadow-md'>
            <SectionHeaders
              header={contactData.sectionHeader.header}
              padding='pt-10'
            />
            <div className='flex flex-col md:flex-row justify-center items-center p-10 gap-10'>
                <div className="w-full md:w-1/2 order-1 md:order-last">
                  <img
                  className='rounded-lg shadow-md max-w-full h-auto'
                  src={contactData.image} alt="Contact Us" />
                </div>
                <div className='flex flex-col gap-5 w-full md:w-1/2 order-1 md:order-first'>
                    <p 
                        className='text-[#1B365D] font-extrabold text-lg'
                        dangerouslySetInnerHTML={{ __html: contactData.title }}
                    />
                    <p className='text-[#1B365D] font-bold text-base pt-4'>{contactData.address}</p>
                    <p className='text-[#1B365D] font-bold text-base'>{contactData.phone}</p>
                    <p className='text-[#1B365D] font-bold text-base'>{contactData.email}</p>
                    <div className='flex flex-col sm:flex-row gap-4 pt-8'>
                        {contactData.buttons.map(button => (
                            <Button key={button.id} title={button.title}
                                bgColor="bg-[#1b375d]"
                                textColor="text-white"
                                hoverText="text-[#1b375d]"
                                hoverBg="bg-white"
                                leftIcon={<img src={button.icon} alt="" className='w-5 h-5'/>}
                                leftHoverIcon={<img src={button.hoverIcon} alt="" className='w-5 h-5'/>}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ContactUs;