import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "popper.js";
import "jquery";

import "./Component/css/qa.css";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Header from "./Component/Layout/Header";
import Footer from "./Component/Layout/Footer";
import Body from "./Component/Layout/Body";

function App() {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
}

export default App;
