import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

export const App = () => {
  return (
    <>
      <Navbar title="TextUtils"></Navbar>
      <div className="container">
        <TextForm heading="Enter the text"></TextForm>
      </div>
    </>
  );
};
export default App;
