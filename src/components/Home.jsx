import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
// import { getAllProducts } from "../services/products/getAllProducts";
// import { setProducts } from "../state/products";
import FakeProducts from "../seeders/FakeProducts";
import "./styles/home.css";
import { useSelector } from "react-redux";

function Home() {
  const user = useSelector((state) => state.user);
  console.log("loggedUser", user);
  return (
    <div className="home-body">
      <div className="home-container">
        <FakeProducts />
      </div>
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
