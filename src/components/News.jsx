// src/components/News.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SectionHeaders from './SectionHeaders';
import ServiceCard from './componentParts/ServicesCard';
import ButtonWithArrow from './buttonsComponents/ButtonWithArrow';
import Button from './buttonsComponents/Button';
import Parser from 'rss-parser/dist/rss-parser.min.js';

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const CORS_PROXY = "https://api.allorigins.win/raw?url=";
    // const RSS_FEED_URL = 'https://www.interpressnews.ge/rss.xml';
    const RSS_FEED_URL = 'https://on.ge/rss';
    const parser = new Parser();

    const fetchNews = async () => {
      try {
        const feed = await parser.parseURL(CORS_PROXY + RSS_FEED_URL);
        setArticles(feed.items.slice(0, 3));
      } catch (err) {
        setError('სიახლეების ჩატვირთვა ვერ მოხერხდა.');
        console.error("Error fetching RSS feed:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className='bg-[#1B365D0D] flex flex-col items-center px-6 md:px-10 lg:px-20 py-10'>
      <SectionHeaders
        header="სიახლეები და სტატიები"
        paragraph="გაეცანით უახლეს ინფორმაციას ფინანსების, ბუღალტერიის და ბიზნესის სფეროში"
        textCenter='center'
      />
            {loading && <p className="my-8">იტვირთება...</p>}
      {error && <p className="my-8 text-red-500">{error}</p>}

      {!loading && !error && (
        <div className='flex flex-col md:flex-row
         justify-center items-stretch gap-8 my-8 w-full'>
          {articles.map((item, index) => (
            <ServiceCard
                key={index}
                image={item.enclosure?.url || 'https://via.placeholder.com/400x200.png?text=No+Image'}
                header={item.title}
                paragraph={item.contentSnippet}
                direction={'flex-col'}
                height='h-full'
                width='w-full'
            >
              <a 
              className='w-full'
              href={item.link} target="_blank" rel="noopener noreferrer">
                <ButtonWithArrow buttonText="დაწვრილებით" />
              </a>
            </ServiceCard>
          ))}
        </div>
      )}

      <div className="max-md:w-full text-center"> 
        <Link to="/news">
          <Button
            title="ყველა სიახლე"
            bgColor="bg-white"
            textColor="text-[#1b375d]"
            hoverText="text-white"
            hoverBg="bg-[#1b375d]"
          />
        </Link>
      </div>
    </div>
  );
};

export default News;