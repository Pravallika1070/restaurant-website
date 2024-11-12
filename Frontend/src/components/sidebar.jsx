// import React from 'react';

// function Sidebar() {
//   return (
//     <div
//       className="sidebar"
//       style={{
//         display: 'flex',
//         flexDirection: 'column',
//         width: '300px',
//         textAlign: 'center',
//         position: 'absolute', // Fix sidebar on the left
//         height: '100vh', // Full viewport height
//         backgroundColor: '#f8f8f8', // Add background color for visibility
//         paddingTop: '20px',
//         paddingLeft: '10px',
//         boxShadow: '2px 0 5px rgba(0,0,0,0.1)', // Optional shadow effect
//       }}
//     >
//       <img
//         style={{ height: '30px', width: '50px', marginBottom: '-10px' }}
//         src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAeCAYAAAB5c901AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABNSURBVHgB7c9BDQAgAMPAgQ4c4F8KDvABFuBHSe+9LGmZ6SsXWkY52b3yW/M5A+kMpDOQzkA6A+kMpDOQzkA6A+kMpDOQzkA6A+kMpNu9MQhKmC+cDgAAAABJRU5ErkJggg=="
//         alt="TripleRedLine"
//       />
//       <h1 style={{ marginTop: '10px', marginBottom: '20px' }}>MENU</h1>
//       <p>Soups</p>
//       <p>Starters</p>
//       <p>Chinese</p>
//       <p>Sea Food</p>
//       <p>Tandoori</p>
//       <p>Curries</p>
//       <p>Main Courses</p>
//       <p>Desserts</p>
//       <p>Beverages</p>
//     </div>
//   );
// }

// export default Sidebar;
// import React, { useState } from 'react';

// function Sidebar() {
//   const [selectedCategory, setSelectedCategory] = useState(null);

//   // Define your categories and items
//   const categories = {
//     Soups: ['Tomato Soup', 'Mushroom Soup', 'Chicken Soup'],
//     Starters: ['Spring Rolls', 'Chicken Wings', 'Garlic Bread'],
//     Chinese: ['Fried Rice', 'Noodles', 'Sweet and Sour Chicken'],
//     'Sea Food': ['Grilled Salmon', 'Shrimp Cocktail', 'Lobster'],
//     Tandoori: ['Paneer Tikka', 'Chicken Tandoori', 'Tandoori Roti'],
//     Curries: ['Butter Chicken', 'Paneer Butter Masala', 'Dal Makhani'],
//     'Main Courses': ['Biryani', 'Fried Rice', 'Naan'],
//     Desserts: ['Ice Cream', 'Gulab Jamun', 'Brownie'],
//     Beverages: ['Soft Drink', 'Coffee', 'Tea'],
//   };

//   return (
//     <div
//       className="sidebar"
//       style={{
//         display: 'flex',
//         flexDirection: 'column',
//         width: '300px',
//         textAlign: 'center',
//         position: 'absolute',
//         height: '100vh',
//         backgroundColor: '#f8f8f8',
//         paddingTop: '20px',
//         paddingLeft: '10px',
//         boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
//       }}
//     >
//       <img
//         style={{ height: '30px', width: '50px', marginBottom: '-10px' }}
//         src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAeCAYAAAB5c901AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABNSURBVHgB7c9BDQAgAMPAgQ4c4F8KDvABFuBHSe+9LGmZ6SsXWkY52b3yW/M5A+kMpDOQzkA6A+kMpDOQzkA6A+kMpDOQzkA6A+kMpNu9MQhKmC+cDgAAAABJRU5ErkJggg=="
//         alt="TripleRedLine"
//       />
//       <h1 style={{ marginTop: '10px', marginBottom: '20px' }}>MENU</h1>

//       {/* Render category list */}
//       {Object.keys(categories).map((category) => (
//         <p
//           key={category}
//           onClick={() => setSelectedCategory(category)}
//           style={{
//             cursor: 'pointer',
//             fontWeight: selectedCategory === category ? 'bold' : 'normal',
//           }}
//         >
//           {category}
//         </p>
//       ))}

//       {/* Render items based on the selected category */}
//       <div style={{ marginTop: '20px', textAlign: 'left', paddingLeft: '20px' }}>
//         {selectedCategory && (
//           <>
//             <h2>{selectedCategory}</h2>
//             <ul>
//               {categories[selectedCategory].map((item, index) => (
//                 <li key={index}>{item}</li>
//               ))}
//             </ul>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Sidebar;
// Sidebar.js
import React, { useState } from 'react';

function Sidebar({ onCategorySelect }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = {
    Soups: ['Tomato Soup', 'Mushroom Soup', 'Chicken Soup'],
    Starters: ['Spring Rolls', 'Chicken Wings', 'Garlic Bread'],
    Chinese: ['Fried Rice', 'Noodles', 'Sweet and Sour Chicken'],
    'Sea Food': ['Grilled Salmon', 'Shrimp Cocktail', 'Lobster'],
    Tandoori: ['Paneer Tikka', 'Chicken Tandoori', 'Tandoori Roti'],
    Curries: ['Butter Chicken', 'Paneer Butter Masala', 'Dal Makhani'],
    'Main Courses': ['Biryani', 'Fried Rice', 'Naan'],
    Desserts: ['Ice Cream', 'Gulab Jamun', 'Brownie'],
    Beverages: ['Soft Drink', 'Coffee', 'Tea'],
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onCategorySelect(category); // Pass selected category to parent
  };

  return (
    <div className="sidebar" style={sidebarStyles}>
      <img
        style={{ height: '30px', width: '50px', marginBottom: '-20px' }}
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAeCAYAAAB5c901AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABNSURBVHgB7c9BDQAgAMPAgQ4c4F8KDvABFuBHSe+9LGmZ6SsXWkY52b3yW/M5A+kMpDOQzkA6A+kMpDOQzkA6A+kMpDOQzkA6A+kMpNu9MQhKmC+cDgAAAABJRU5ErkJggg=="
        alt="TripleRedLine"
      />
      <h5 style={{ marginTop: '10px', fontSize:'36px'}}>MENU</h5>
      {Object.keys(categories).map((category) => (
        <p
          key={category}
          onClick={() => handleCategoryClick(category)}
          style={{
            cursor: 'pointer',
            height:'60px',
            fontWeight: selectedCategory === category ? 'bold' : 'normal',
          }}
        >
          {category}
        </p>
      ))}
    </div>
  );
}

const sidebarStyles = {
  display: 'flex',
  flexDirection: 'column',
  width: '300px',
  textAlign: 'center',
  position: 'absolute',
  height: '100%',
  backgroundColor: '#f8f8f8',
  
  boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
};

export default Sidebar;
