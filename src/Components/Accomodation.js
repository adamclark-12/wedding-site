import React from "react";
import { FaArrowDown } from "react-icons/fa";
import { MdLocalHotel } from "react-icons/md";

export const Accomodation = () => {
  return (
    <div className="contianer">
      <section>
        <h1>ACCOMODATION</h1>
        <p>
          There is plenty of hotels and BnB's around the venue. <br />
          Some places can be found in the links below <br />
          <FaArrowDown />
        </p>
        <ul>
          <li>
            <MdLocalHotel /> Aylesbury
          </li>
          <li>
            <MdLocalHotel /> Bicester
          </li>
          <li>
            <MdLocalHotel /> Buckingham
          </li>
        </ul>
      </section>
    </div>
  );
};
export default Accomodation;
