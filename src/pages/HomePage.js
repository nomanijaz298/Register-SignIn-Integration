import React from "react";
import Layout from "../components/Layout/Layout";
import { useAuth } from "../context/authContext";

const HomePage = () => {
  const [auth, setAuth] = useAuth();
  return (
    <Layout title={"Shop Now"}>
      <h1>HomePage</h1>
      <p>{JSON.stringify(auth, null, 4)}</p>
    </Layout>
  );
};

export default HomePage;
