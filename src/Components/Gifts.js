import React from "react";
import { FaArrowDown } from "react-icons/fa";

export const Gifts = () => {
  return (
    <div className="container">
      <section>
        <h1>GIFTS</h1>
        <p>It's a gift in iteself just having you at our "special" day</p>
        <p>Buuuutttt,</p>
        <p>
          if you want to slip us some monies for a honeymoon/family holiday then
          that is very generous.
        </p>
        <p>This link should do the job.</p>
        <FaArrowDown />
        <p>
          <a className="btn btn-backg" href="PayPal.Me/fionaandadamswedding">
            F & A wedding fund
          </a>
        </p>
      </section>
    </div>
  );
};
export default Gifts;
