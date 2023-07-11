import React, { useEffect, useState } from "react";
import { getAllUsers } from "../services/admin/getAllUsers";

function Home() {
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
