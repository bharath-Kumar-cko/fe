import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/user').then(data => {
        setUser(data.data.msg);
    });
  },[]);

  return <div>user : {user}</div>;
};

export default User;
