// src/pages/NewsPage.jsx

import React, { useState, useEffect } from 'react';
import SectionHeaders from '../components/SectionHeaders';
import NewsCard from '../components/componentParts/NewsCard';
import Button from '../components/buttonsComponents/Button';
import Parser from 'rss-parser/dist/rss-parser.min.js';

const NewsPage = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const CORS_PROXY = "https://api.allorigins.win/raw?url=";
        // const RSS_FEED_URL = 'https://www.interpressnews.ge/rss.xml';
        const RSS_FEED_URL = 'https://on.ge/rss';
        const parser = new Parser();

        const fetchGeorgianNews = async () => {
            setLoading(true);
            setError(null);
            try {
                const feed = await parser.parseURL(CORS_PROXY + RSS_FEED_URL);
                setArticles(feed.items.slice(0, 10));
            } catch (err) {
                setError('სიახლეების ჩატვირთვისას მოხდა შეცდომა.');
                console.error("Error fetching or parsing RSS feed:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchGeorgianNews();
    }, []);

    return (
        <div className='flex flex-col items-center gap-8 py-10 px-6 md:px-10 lg:px-20 bg-[#e6f3ff9f] mt-20 min-h-screen'>
            <SectionHeaders
                header="სიახლეები და სტატიები"
                paragraph="უახლესი ინფორმაცია On.ge-დან"
                hasDivider={true}
                padding='py-0'
            />

            {loading && <p className="text-lg">იტვირთება სიახლეები...</p>}
            {error && <p className="text-lg text-red-500">{error}</p>}

            {!loading && !error && (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full'>
                    {articles.map((item, index) => (
                        <NewsCard
                            key={index}
                            image={item.enclosure?.url || 'https://via.placeholder.com/400x200.png?text=No+Image'}
                            header={item.title}
                            paragraph={item.contentSnippet}
                            date={new Date(item.isoDate).toLocaleDateString('ka-GE')}
                        >
                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                <Button
                                    title="სრულად ნახვა"
                                    bgColor="bg-[#1b375d]"
                                    textColor="text-white"
                                    hoverText="text-[#1b375d]"
                                    hoverBg="bg-white"
                                />
                            </a>
                        </NewsCard>
                    ))}
                </div>
            )}
        </div>
    );
};

export default NewsPage;