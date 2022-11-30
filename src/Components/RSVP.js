import React from "react";

export const RSVP = () => {
  return (
    <div className="contianer">
      <section>
        <h1 className="rsvp-title">RSVP</h1>

        <form>
          <label htmlFor="form-name">
            <span className="bold-span">Name/s:</span>
          </label>
          <input
            id="form-name"
            type="text"
            placeholder="Names:"
            required
          ></input>
          <div className="respond-div">
            <label htmlFor="form-reply">
              <span className="bold-span">Would love to attend!</span>
            </label>
            <input id="form-reply" type="radio" name="answer"></input>
            <label htmlFor="form-reply">
              <span className="bold-span">Sadly can't make it</span>
            </label>
            <input id="form-reply" type="radio" name="answer"></input>
          </div>

          <label htmlFor="form-name">
            <span className="bold-span">Dietry requirments</span>
          </label>
          <input
            id="form-name"
            type="text"
            placeholder="Anything we should know"
          ></input>

          <label htmlFor="form-name">
            <span className="bold-span">Song?</span>
          </label>
          <input
            id="form-name"
            type="text"
            placeholder="Favourite song you want to hear on our wedding"
          ></input>

          <button type="submit">Send</button>

          <p>
            If there is any issues just phone, message or e-mail us on <br />
            f.a_wedding@yahoo.com
          </p>
        </form>
      </section>
    </div>
  );
};
export default RSVP;
