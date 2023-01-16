import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Chris Brown",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Chris_Brown_5%2C_2012.jpg/440px-Chris_Brown_5%2C_2012.jpg",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
