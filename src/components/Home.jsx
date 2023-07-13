import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
// import { getAllProducts } from "../services/products/getAllProducts";
// import { setProducts } from "../state/products";
import FakeProducts from "../seeders/FakeProducts";

function Home() {
  return (
    <div style={{ paddingTop: "14vh" }}>
      <FakeProducts />;
    </div>
  );
}
//   const products = useSelector((state) => state.products);
//   useEffect(() => {
//     setProducts(getAllProducts());
//   }, []);

//   return (
//     <>
//       {users[0] ? (
//         <>
//           {products.map((product) => (
//             <div>{product.name}</div>
//           ))}
//         </>
//       ) : (
//         <div>No hay users</div>
//       )}
//     </>
//   );
// }

export default Home;
