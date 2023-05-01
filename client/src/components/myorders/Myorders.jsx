// import React, { useState, useEffect } from "react";
// import { fetchDataFromApi } from "../../utils/api";
// function OrdersPage() {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     fetchDataFromApi("/api/products?populate=*").then((res) => {
//         setOrders(res);
//         console.log(res);
// //         console.log(typeof(res));
// //     });
// //   }, []);
// //   console.log(orders);

// //   return (
// //    <>
// //    </>
// //   );
// // }

// // export default OrdersPage;

// import React, { useState, useEffect } from "react";
// import { fetchDataFromApi } from "../../utils/api";

// function OrdersPage() {
//   const [products, setProducts] = useState({});

//   useEffect(() => {
//     fetchDataFromApi("/api/products?populate=*").then((res) => {
//       setProducts(res);
//     });
//   }, []);

//   return (
//     <div className="products-page">
//       <h1>Products</h1>
//       <table className="products-table">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Title</th>
//             <th>Description</th>
//             <th>Price</th>
//           </tr>
//         </thead>
//         <tbody>
//           {Object.keys(products).map((key) => (
//             <tr key={key}>
//               <td>{products[key].id}</td>
//               <td>{products[key].attributes.title}</td>
//               <td>{products[key].attributes.desc}</td>
//               <td>{products[key].attributes.price}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default OrdersPage;
