import React from "react";
import "./styles.scss";
import Home from "./Components/Home";
import Travel from "./Components/Travel";
import Accomodation from "./Components/Accomodation";
import Gifts from "./Components/Gifts";
import RSVP from "./Components/RSVP";

function App() {
  return (
    <div className="App">
      <Home />
      <Travel />
      <Accomodation />
      <Gifts />
      <RSVP />
    </div>
  );
}
export default App;
