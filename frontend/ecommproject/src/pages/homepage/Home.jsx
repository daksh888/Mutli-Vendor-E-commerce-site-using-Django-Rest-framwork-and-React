import Navbar from "../../components/Navbar";
// import {  components  } from 'mdb-ui-kit'; 
import React from "react";
import HomeBody from "./HomeBody";

const Home = () => {
    return (
      <>
      <Navbar></Navbar>
      <HomeBody></HomeBody>
        {/* <h1 className="text-bg-primary">This is Home Page !!</h1>
        <div className="card" style={{ width: "18rem" }}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div> */}
      </>  
    );
  };
  
  export default Home;
  