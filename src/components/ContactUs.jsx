import React from 'react'
import SectionHeaders from './SectionHeaders'
import contact1 from '../assets/contact1.svg'
import Button from './Button'
import phone from '../assets/phone.svg'
import mail from '../assets/mail.svg'
import phone1 from '../assets/phone1.svg'
import mail1 from '../assets/mail1.svg'

const ContactUs = () => {
  return (
    <div className='px-20 w-full py-16'>
        <div className='bg-gray-100 rounded-3xl shadow-md'>
            <SectionHeaders
              header="დაგვიკავშირდით"
              padding='pt-10 '
            />
            <div className='flex flex-col md:flex-row justify-between px-10 pb-10 gap-10'>
                <div className='flex flex-col gap-5'>
                    <p className='text-[#1B365D] font-extrabold'>გაქვთ შეკითხვა სერვისზე? <br /> გინდათ კურსებზე რეგისტრაცია ან კონსულტაცია? <br /> Finco-ს გუნდი მზადაა უპასუხოს თქვენს ყოველ შეკითხვას</p>
                    <p className='text-[#1B365D] font-extrabold'>მისამართი: ქ. ბათუმი მელიქიშვილის 88</p>
                    <p className='text-[#1B365D] font-extrabold'>ტელ: +995 123 456 789</p>
                    <p className='text-[#1B365D] font-extrabold'>ელ.ფოსტა: info@finco.ge</p>
                    <div className='flex gap-4 pt-20'>
                        <Button title="+995 577 29 90 90"
                            bgColor="bg-[#1b375d]"
                            textColor="text-white"
                            hoverText="text-[#1b375d]"
                            hoverBg="bg-white"
                            leftIcon={<img src={phone} alt="Phone Icon" className='w-5 h-5'/>}
                            leftHoverIcon={<img src={phone1} alt="Phone Icon" className='w-5 h-5'/>}
                        />
                        <Button title="Fincotime@gmail.com"
                            bgColor="bg-[#1b375d]"
                            textColor="text-white"
                            hoverText="text-[#1b375d]"
                            hoverBg="bg-white"
                            leftIcon={<img src={mail} alt="Mail Icon" className='w-5 h-5'/>}
                            leftHoverIcon={<img src={mail1} alt="Phone Icon" className='w-5 h-5'/>}
                        />
                    </div>
                </div>
                <img
                className='rounded-lg shadow-md'
                 src={contact1} alt="" />
            </div>
        </div>
    </div>
  )
}

export default ContactUs