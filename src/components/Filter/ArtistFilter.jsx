import React, { useEffect, useState } from 'react';
import "./ArtistFilter.css";
import firstImage from '../../../public/Images/Filter/Rectangle 11533.png'

const ArtistFilter = () => {
    const [images, setImages] = useState([]);

    return (
        <div id="artist-container">
               <div className="top-section-text fs-18">
                    Artist
                </div>
            <div className="top-section">            
                    <div className="input-box">
                        <input className='input' type="text" placeholder='Search' />
                    </div>
                    <div className="top-section-text-box">
                        <div className="text fs-16"><div className='letter-A'>A</div>
                            B C D E F G H I J </div>
                        <div className="text opacity fs-16">K L M N O P Q R S</div>
                        <div className="text opacity fs-16">T U V W X Y Z</div>
                    </div>
            </div>
            <div className="main-section">
            <div className="main-section-row">
                    <div className="main-section-row-card">
<img className='img' src={firstImage} alt="" />
                    </div>
                    <div className="main-section-row-card">
<img className='img' src={firstImage} alt="" />
                    </div>
                    <div className="main-section-row-card">
<img className='img' src={firstImage} alt="" />
                    </div>
                    <div className="main-section-row-card">
<img className='img' src={firstImage} alt="" />
                    </div>
                </div>
                <div className="main-section-row">
                    <div className="main-section-row-card">
<img className='img' src={firstImage} alt="" />
                    </div>
                    <div className="main-section-row-card">
<img className='img' src={firstImage} alt="" />
                    </div>
                    <div className="main-section-row-card">
<img className='img' src={firstImage} alt="" />
                    </div>
                    <div className="main-section-row-card">
<img className='img' src={firstImage} alt="" />
                    </div>
                </div>
                <div className="main-section-row">
                    <div className="main-section-row-card">
<img className='img' src={firstImage} alt="" />
                    </div>
                    <div className="main-section-row-card">
<img className='img' src={firstImage} alt="" />
                    </div>
                    <div className="main-section-row-card">
<img className='img' src={firstImage} alt="" />
                    </div>
                    <div className="main-section-row-card">
<img className='img' src={firstImage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArtistFilter;






// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './ArtistFilter.css';

// const ArtistFilter = () => {
//   const [photos, setPhotos] = useState([]);
//   const yourApiKey = 'b9da2f9bff5cab1d64404ab5b8d12f24';

//   const data = {
//     method: 'flickr.photos.search',
//     api_key: yourApiKey,
//     text: 'cat', // Search Text
//     sort: 'interestingness-desc',
//     per_page: 12,
//     license: '4',
//     extras: 'owner_name,license',
//     format: 'json',
//     nojsoncallback: 1,
//   };

//   const parameters = new URLSearchParams(data);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`https://api.flickr.com/services/rest/?${parameters}`);
//         setPhotos(response.data.photos.photo);
//       } catch (error) {
//         console.error('Error fetching images:', error);
//       }
//     };

//     fetchData();
//   }, [parameters]);

//   return (
//     <div id="artist-container">
//       <div className="top-section">
//         <div className="top-section-text">Artist</div>
//         <div className="input-box">
//           <div className="input">
//             <input type="text" placeholder="Search" />
//           </div>
//           <div className="input-text-box">
//             <div className="text">
//               <div className="letter-A">A</div>B C D E F G H I J{' '}
//             </div>
//             <div className="text opacity">K L M N O P Q R S</div>
//             <div className="text opacity">T U V W X Y Z</div>
//           </div>
//         </div>
//       </div>
//       <div className="main-section">
//         {photos.reduce((rows, photo, index) => {
//           if (index % 4 === 0) {
//             rows.push([]);
//           }
//           rows[rows.length - 1].push(photo);
//           return rows;
//         }, []).map((row, rowIndex) => (
//           <div key={rowIndex} className="main-section-row image-container">
//             {row.map((photo) => (
//               <img
//                 key={photo.id}
//                 src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
//                 alt={photo.title}
//                 style={{ width: 'calc(25% - 1.5rem)', height: 'auto', marginBottom: '1.5rem', marginRight: '1.5rem' }}
//               />
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ArtistFilter;
