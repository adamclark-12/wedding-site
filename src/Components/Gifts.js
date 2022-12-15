import React from "react";
import { FaArrowDown } from "react-icons/fa";

export const Gifts = () => {
  return (
    <div className="contianer">
      <section>
        <h1>GIFTS</h1>
        <p>
          It's a gift in iteself just having you at our "special" day <br />
          Buuuutttt <br /> if you want to slip us some monies for a
          honeymoon/family holiday
          <br />
          then that is very generous <br />
          <br />
          This link should do the job. <br />
          <FaArrowDown />
          <br />
          <a className="btn btn-backg" href="PayPal.Me/fionaandadamswedding">
            F & A wedding fund
          </a>
        </p>
      </section>
    </div>
  );
};
export default Gifts;
