// src/components/componentParts/HeroCards.jsx

import clsx from 'clsx';

const HeroCards = ({
  cardImage,
  numTitle,
  textTitle,
  text,
  variant = 'statistic',
}) => {
  // object which contains all style classes inside
  const variants = {
    statistic: {
      container: 'flex-col justify-center items-center bg-white py-2 rounded-lg text-center',
      image: 'w-12 h-12 object-contain mb-2',
      title: 'text-lg font-bold',
      subtitle: 'text-sm text-gray-500 whitespace-nowrap',
      description: 'hidden',
    },
    teamMember: {
      container: 'flex-col justify-start items-center bg-white py-6 px-4 text-center shadow-lg rounded-lg h-full',
      image: 'w-24 h-24 object-cover rounded-full mb-4',
      title: 'text-lg font-bold',
      subtitle: 'text-sm text-gray-500',
      description: 'text-sm text-gray-600 mt-2',
    },
    // here we can add another variants whenever we want
  };

  // style using logic
  const styles = variants[variant] || variants.statistic;

  return (
    <div className={clsx('flex w-full gap-2', styles.container)}>
      {cardImage && (
        <img src={cardImage} alt={numTitle || textTitle} className={styles.image} />
      )}
      
      {/* we using this block for text controll*/}
      <div className="flex flex-col">
        <span className={styles.title}>{numTitle}</span>
        <span className={styles.subtitle}>{textTitle}</span>
      </div>

      {/* here is logic whihc tells if there is text it will be unhide if there no text this element is not added */}
      {text && (
        <p className={styles.description}>{text}</p>
      )}
    </div>
  );
};

export default HeroCards;