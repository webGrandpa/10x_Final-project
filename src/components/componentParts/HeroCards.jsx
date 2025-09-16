// src/components/componentParts/HeroCards.jsx

import clsx from 'clsx';

const HeroCards = ({
  cardImage,
  numTitle,
  textTitle,
  text,
  variant = 'statistic',
  bgColor = '',
  textDirection = 'text-center',
}) => {
  const variants = {
    statistic: {
      container: 'justify-start items-start py-2 rounded-lg text-center',
      image: 'w-12 h-12 object-contain mb-2',
      title: `text-lg font-bold ${textDirection}`,
      subtitle: `text-sm text-gray-500 whitespace-nowrap ${textDirection}`,
      description: 'hidden',
    },
    teamMember: {
      container: 'flex-col justify-start items-center py-6 px-4 text-center shadow-lg rounded-lg h-full',
      image: 'w-24 h-24 object-cover rounded-full mb-4',
      title: 'text-lg font-bold',
      subtitle: 'text-sm text-gray-500',
      description: 'text-sm text-gray-600 mt-2',
    },
  };

  const styles = variants[variant] || variants.statistic;

  return (
    <div className={`${clsx('flex w-full gap-2', styles.container)} ${bgColor}`}>
      {cardImage && (
        <img src={cardImage} alt={numTitle || textTitle} className={styles.image} />
      )}
      
      <div className="flex flex-col">
        <span className={styles.title}>{numTitle}</span>
        <span className={styles.subtitle}>{textTitle}</span>
      </div>
      {text && (
        <p className={styles.description}>{text}</p>
      )}
    </div>
  );
};

export default HeroCards;