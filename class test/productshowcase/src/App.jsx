// import React from 'react';
// import './App.css';

// const { use } = require("react");

// // Product data array with specific theme colors to match your image
// const products = [
//   {
//     id: 1,
//     name: 'Wireless Mouse',
//     price: '₹799',
//     category: 'Electronics',
//     theme: {
//       bg: '#add8e6',     // Light Blue
//       border: '#0000cc', // Blue
//       title: '#000080'   // Dark Blue
//     }
//   },
//   {
//     id: 2,
//     name: 'Running Shoes',
//     price: '₹2499',
//     category: 'Footwear',
//     theme: {
//       bg: '#90ee90',     // Light Green
//       border: '#008000', // Green
//       title: '#006400'   // Dark Green
//     }
//   },
//   {
//     id: 3,
//     name: 'Smart Watch',
//     price: '₹3999',
//     category: 'Gadgets',
//     theme: {
//       bg: '#ffb6c1',     // Light Pink
//       border: '#cc0000', // Red
//       title: '#8b0000'   // Dark Red
//     }
//   }
// ];

// // Reusable Card Component
// const ProductCard = ({ product }) => {
//   return (
//     <div 
//       className="product-card" 
//       style={{ 
//         backgroundColor: product.theme.bg, 
//         borderColor: product.theme.border 
//       }}
//     >
//       <h2 style={{ color: product.theme.title }}>{product.name}</h2>
//       <p><strong>Price:</strong> {product.price}</p>
//       <p><strong>Category:</strong> {product.category}</p>
//     </div>
//   );
// };

// // Main App Component
// export default function App() {
//   return (
//     <div className="showcase-container">
//       <h1 className="showcase-title">Product Showcase</h1>
      
//       <div className="cards-wrapper">
//         {products.map(product => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// }
import React, { useEffect } from "react";
// function App() {
//   useEffect(() => {
//     document.title = "Welcome Students";
//   }, []);

//   return (
//     <div>
//       <h1> Hello Students </h1>

//     </div>
//   );
// }
function App() {
  useEffect(() => {
    
    setInterval(() => {
      console.log("Timer running...");
    }, 1);
  }, []);

  return (
    <div>
      <h1> check console</h1>
    </div>
  );
}

export default App;

