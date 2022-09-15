import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Layout from "../components/layout/Layout";
import TourCard from "../components/likeAndTourCard/TourCard";

function Tour() {
  return (
    <>
    <Layout>
      <Header />  
        <TourCard />
      <Footer />
    </Layout>
    </>
  );
}

export default Tour;
