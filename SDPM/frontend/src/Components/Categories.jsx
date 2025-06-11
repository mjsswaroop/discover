// import React from 'react';
// import './Categories.css';
// import electronics from './img/samsung.jpg';
// import acc from './img/watch.webp'
// import doc from './img/Document.webp'
// import card from './img/cards.jpg'
// import other from './img/other.jpg'
// const Categories = () => {
//   return (
//     <div className="categories-container">
//       <div className="cards">
//         <img 
//           src={electronics} 
//           alt="Electronics"
//         />
//         <h1>Electronics</h1>
//       </div>
//       <div className="cards">
//         <img 
//           src={acc} 
//           alt="Accessories"
//         />
//         <h1>Accessories</h1>
//       </div>
//       <div className="cards">
//         <img 
//           src={doc} 
//           alt="Documents"
//         />
//         <h1>Documents</h1>
//       </div>
//       <div className="cards">
//         <img 
//           src={card} 
//           alt="Cards"
//         />
//         <h1>Cards</h1>
//       </div>
//       <div className="cards">
//         <img 
//           src={other} 
//           alt="Other"
//         />
//         <h1>Other</h1>
//       </div>
//     </div>
    
//   );
// };

// export default Categories;






import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Categories.css';
import electronics from './img/samsung.jpg';
import acc from './img/watch.webp';
import doc from './img/Document.webp';
import card from './img/cards.jpg';
import other from './img/other.jpg';

const categories = [
  { name: 'Electronics', image: electronics },
  { name: 'Accessories', image: acc },
  { name: 'Documents', image: doc },
  { name: 'Cards', image: card },
  { name: 'Other', image: other },
];

const Categories = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/category/${category}`);
  };

  return (
    <div className="categories-container">
      {categories.map((cat) => (
        <div key={cat.name} className="cards" onClick={() => handleCategoryClick(cat.name)}>
          <img src={cat.image} alt={cat.name} />
          <h1>{cat.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default Categories;
