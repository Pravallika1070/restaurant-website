// import React from "react";
// import data from "../db.json";
// import CartButton from "./menucart";
// import GroceryItem from "./menuitem";

// import Sidebar from "./sidebar";

// const GroceryDetails = () => {
// //   console.log(data);

//   return (
//     <>
//       <Sidebar />
//       <h1  style={{ marginLeft:"400px", marginTop:"50px" }}   >TODAY SPECIALS</h1>
//       <div className="container">

    

//         {data.map((item) => (
//           <div>
//             <GroceryItem key={item.id} {...item} />
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };
// export default GroceryDetails;
// import React, { useEffect, useState } from "react";
// import CartButton from "./menucart";
// import GroceryItem from "./menuitem";
// import Sidebar from "./sidebar";

// const GroceryDetails = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/api/items"); // Replace with your actual API URL
//         if (!response.ok) {
//           throw new Error("Failed to fetch menu data");
//         }
//         const result = await response.json();
//         setData(result.data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <>
//       <Sidebar />
//       <h1 style={{ marginLeft: "400px", marginTop: "50px" }}>TODAY SPECIALS</h1>
//       <div className="container">
//         {Array.isArray(data) && data.map((item) => (
//           <div key={item._id || item.id}> {/* Use item._id or item.id as the unique key */}
//             <GroceryItem {...item} />
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default GroceryDetails;
// import React, { useEffect, useRef, useState } from "react";
// import CartButton from "./menucart";
// import GroceryItem from "./menuitem";
// import Sidebar from "./sidebar";
// import './GroceryDetails.css'; // Import the new CSS

// const GroceryDetails = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedCategory, setSelectedCategory] = useState(null);

//   // Create refs for each category
//   const categoryRefs = useRef({});

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/api/items");
//         if (!response.ok) {
//           throw new Error("Failed to fetch menu data");
//         }
//         const result = await response.json();
//         setData(result.data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   // Scroll to the selected category when it changes
//   useEffect(() => {
//     if (selectedCategory && categoryRefs.current[selectedCategory]) {
//       categoryRefs.current[selectedCategory].scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//   }, [selectedCategory]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   // Group data by category
//   const categorizedData = data.reduce((acc, item) => {
//     const category = item.category || "Others"; // Default to "Others" if no category is set
//     if (!acc[category]) acc[category] = [];
//     acc[category].push(item);
//     return acc;
//   }, {});

//   return (
//     <>
//       <Sidebar onCategorySelect={setSelectedCategory} className="side"/>
//       <h1 className="title">TODAY SPECIALS</h1>
//       <div className="container">
//         {Object.entries(categorizedData).map(([category, items]) => (
//           <div key={category} ref={(el) => (categoryRefs.current[category] = el)} className="category-section">
//             <h2>{category}</h2>
//             {items.map((item) => (
//               <div key={item._id || item.id} className="category-item">
//                 <GroceryItem {...item} />
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default GroceryDetails;
import React, { useEffect, useRef, useState } from "react";
import CartButton from "./menucart";
import GroceryItem from "./menuitem";
import Sidebar from "./sidebar";
import styles from './GroceryDetails.module.css'; // Import the new CSS

const GroceryDetails = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Create refs for each category
  const categoryRefs = useRef({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/items");
        if (!response.ok) {
          throw new Error("Failed to fetch menu data");
        }
        const result = await response.json();
        setData(result.data); // Expecting 'data' as an array of category groups
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Scroll to the selected category when it changes
  useEffect(() => {
    if (selectedCategory && categoryRefs.current[selectedCategory]) {
      categoryRefs.current[selectedCategory].scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [selectedCategory]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <Sidebar onCategorySelect={setSelectedCategory} className={styles.side} />
      <h1 className={styles.title}>TODAY SPECIALS</h1>
      <div className={styles.container}>
        {data.map((categoryGroup) => (
          <div key={categoryGroup._id} ref={(el) => (categoryRefs.current[categoryGroup._id] = el)} className={styles.categorySection}>
            <h2>{categoryGroup._id}</h2> {/* Category name */}
            {categoryGroup.items.map((item) => (
              <div key={item._id || item.id} className={styles.categoryItem}>
                <GroceryItem {...item} />
                
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default GroceryDetails;
