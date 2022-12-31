import React from "react";
import { MdLocalTaxi } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa";

export const Travel = () => {
  return (
    <div className="container">
      <section>
        <h1>TRAVEL - TO</h1>
        <p className="travel-p">
          The venue address is:
          <a
            href="https://goo.gl/maps/5QmbBqsJ2ksWKtV26"
            className="travel-map"
          >
            {" "}
            <span className="bold-span">
              <br />
              <br /> Winters Tale Country Barn,
              <br />
              Old Blackmore Hill,
              <br /> Calvert Road,
              <br /> Buckingham MK18 2HA
            </span>
          </a>
          <p>
            There is plenty of on-site parking and you can leave your car there
            up to
          </p>
          <p>
            <span className="underline-span">11am</span>
          </p>
          on the sunday after.
        </p>
        <p className="travel-p">
          Below you will find a map to the venue.
          <br /> If you have what3words then <br />
          <a href="https://w3w.co/remind.stopwatch.arrive">
            {" "}
            <span className="underline-span">(///remind.stopwatch.arrive)</span>
          </a>
          <br />
          will get you right to the front door!
          <br />
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19685.804917315774!2d-0.9898341801784837!3d51.92071701904166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876e4a46413ab33%3A0x60fad75e2635f819!2sWinters%20Tale%20Country%20Barn!5e0!3m2!1sen!2suk!4v1668636950798!5m2!1sen!2suk"
          width="600"
          height="450"
          loading="lazy"
        ></iframe>
        <br />
        <h1>TRAVEL - FROM</h1>
        <p>
          Here are some local taxi companies and their contact info <br />
          Booking in advance might be best
          <br />
          <FaArrowDown />
        </p>
        <ul>
          <li>
            <a className="btn btn-backg" href="https://falcontaxis.co.uk/">
              <MdLocalTaxi /> Falcon Taxis
            </a>
          </li>
          <li>
            <a className="btn btn-backg" href="https://abctaxis247.co.uk/">
              <MdLocalTaxi /> ABC Taxis
            </a>
          </li>
          <li>
            <a className="btn btn-backg" href="https://jettaxis.co.uk/">
              <MdLocalTaxi /> Jet Taxis
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};
export default Travel;
