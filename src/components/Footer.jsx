import React from 'react';
import List from './List';
import footerLogo from '../assets/footerLogo.svg';
import SocialMediaIcons from './SocialMediaIcons';

const Footer = () => {
    const InstantLinks = [
    { id: 1, title: 'მთავარი', href: '/' },
    { id: 2, title: 'ჩვენს შესახებ', href: '/about' },
    { id: 3, title: 'სერვისები', href: '/services' },
    { id: 4, title: 'განათლება', href: '/education' },
    { id: 5, title: 'ხშირად დასმული კითხვები', href: '/faq' },
    { id: 6, title: 'სიახლეები', href: '/news' },
    { id: 7, title: 'კონტაქტი', href: '/contact' },
    ];
    const ServiceLinks = [
        { id: 1, title: 'ბუღალტრული მომსახურება', href: '/services/1' },
        { id: 2, title: 'იურიდიული მომსახურება', href: '/services/2' },
        { id: 3, title: 'ფინანსური კონსულტაცია', href: '/services/3' },
        { id: 4, title: 'ბიზნეს გეგმები', href: '/services/4' },
        { id: 5, title: 'საგადასახადო კონსულტაცია', href: '/services/5' },
        { id: 6, title: 'ბუღალტრული კურსები', href: '/services/6' },
        { id: 7, title: 'სხვა მომსახურებები', href: '/services/7' }
    ];
    const ContactLinks = [
        { id: 1, title: 'რუსთაველის გამზირი 42, თბილისი', href: '/location/1' },
        { id: 2, title: '+995 32 222 22 22', href: '/phone/2' },
        { id: 3, title: 'info@financepro.ge', href: '/email/3' },
        { id: 4, title: 'ორშაბათი - პარასკევი: 09:00 - 18:00', href: '/hours/4' }
    ];
  return (
    <div className='bg-[#1B365D] pt-8 pb-12 px-30 gap-8 text-white flex flex-row justify-between'>
      <div className='social-media'>
        <img src={footerLogo} alt="footer logo" />
        <p className='text-sm py-2'>
          პროფესიონალური ფინანსური მომსახურება <br /> თქვენი ბიზნესის წარმატებისთვის.
        </p>
          <SocialMediaIcons />
      </div>
      <List HeaderTitle="სწრაფი ბმულები" ListItems={InstantLinks} />
      <List HeaderTitle="სერვისები" ListItems={ServiceLinks} />
      <List HeaderTitle="საკონტაქტო ინფორმაცია" ListItems={ContactLinks} />
    </div>
  );
};

export default Footer;