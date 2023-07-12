import React, { useEffect, useState } from "react";
import { getAllUsers } from "../services/admin/getAllUsers";
import { useSelector } from "react-redux";

function Home() {
  const products = useSelector((state) => state.products);
  console.log("products", products);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setUsers(getAllUsers());
  }, []);

  return (
    <>
      {users[0] ? (
        <>
          {users.map((user) => (
            <div>{user.name}</div>
          ))}
        </>
      ) : (
        <div>No hay users</div>
      )}
    </>
  );
}

export default Home;
