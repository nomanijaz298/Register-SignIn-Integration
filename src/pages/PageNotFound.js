import React from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <Layout title={"Page Not found"}>
      <div className="Error text-center">
        <h1 style={{ color: "yellowGreen", paddingTop: "40px" }}>
          {" "}
          Can't find this page....
        </h1>
        <img src="/images/error.jpg" height="350px" alt="img-fluid" />
        <div className="back-home">
          {" "}
          <Link className="btn btn-primary" to="/">
            Back Home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default PageNotFound;
