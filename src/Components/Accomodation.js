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
            <a
              className="btn btn-backg"
              href="https://goo.gl/maps/EF5eZLEjP55qiwvT9"
            >
              <MdLocalHotel /> Aylesbury
            </a>
          </li>
          <li>
            <a
              className="btn btn-backg"
              href="https://goo.gl/maps/vi24ppZtqZ6KNhc68"
            >
              <MdLocalHotel /> Bicester
            </a>
          </li>
          <li>
            <a
              className="btn btn-backg"
              href="https://goo.gl/maps/nERC92NjZ5yq9vZr9"
            >
              <MdLocalHotel /> Buckingham
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};
export default Accomodation;
