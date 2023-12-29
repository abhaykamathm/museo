import React, { useState } from 'react'
import './Help.css';
import search from "../Home/Images/search.svg";
import help_data from '../../assets/help';

export const Help = () => {
    const [helpData,setHelpData]=useState(help_data);
    const [selectedCategory, setSelectedCategory] = useState(0);
    const [selectedCardIndex, setSelectedCardIndex] = useState(null);

  const handleCategoryClick = (index) => {
    setSelectedCategory(index);
    setSelectedCardIndex(null);
  };
  const handleCardClick = (index) => {
    setSelectedCardIndex(index);
  };
  return (
    <div id='Help-container'>
        <div className='image-div'>
             <div className='image-div-text'>How can we help you today?</div>
             <div className='search-div'>
                <img src={search} alt="" id='search-image' />
                <input placeholder='Find Help Here'id='placeholder-text'/>
             </div>
        </div>
        <div className='btns-container'>
            <div className='btn-types'  onClick={() => handleCategoryClick(0)}>FAQs</div>
            <div className='btn-types'  onClick={() => handleCategoryClick(1)}>Contact Us</div>
        </div>
        <div className='footer-header'>Buying Related</div>
         {selectedCategory !== null && (
        <div className='Buying-cards-container'>
          {/* Render content based on the selected category */}
          {helpData[selectedCategory].map((item, index) => (
          <div
            key={index}
            className={`data-card ${selectedCardIndex === index ? 'selected-data-card' : ''}`}
            onClick={() => handleCardClick(index)}
          >
            {/* Render your card content here */}
            {Object.values(item).map((value, i) => (
              <div key={i} className={selectedCardIndex === index ? 'selected-data-card-text' : ''}>
                {value}
              </div>
            ))}
          </div>
        ))}
        </div>
      )}
    </div>
  )
}
