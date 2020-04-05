import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Layout from "./common/Layout";

function App() {
  function getPage() {
    const route = window.location.pathname;
    if (route === "/about") return <AboutPage />;

    return <HomePage />;
  }

  return (
    <div className="container-fluid">
      <Layout />
      {getPage()}
    </div>
  );
}

export default App;
