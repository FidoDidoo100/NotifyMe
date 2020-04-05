import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import CoursePage from "./CoursesPage";
import Layout from "./common/Layout";

function App() {
  function getPage() {
    const route = window.location.pathname;
    if (route === "/courses") return <CoursePage />;
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
