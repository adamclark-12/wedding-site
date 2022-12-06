import React from "react";
import { useForm, ValidationError } from "@formspree/react";
//import { useNavigate } from "react-router";

const RSVP = () => {
  //const navigate = useNavigate();
  const [state, handleSubmit] = useForm("xwkzdolj");
  if (state.succeeded) {
    return (
      <p>
        Thank you for replying
        {/* <button onclick={() => navigate(-1)}>Home</button> */}
      </p>
    );
  }

  return (
    <div className="contianer">
      <section>
        <h1 className="rsvp-title">RSVP</h1>

        <form onSubmit={handleSubmit}>
          <label htmlFor="form-name">
            <span className="bold-span">Name/s:</span>
          </label>
          <input
            id="form-name"
            type="text"
            placeholder="Names:"
            required
          ></input>
          <ValidationError prefix="Names" field="names" errors={state.errors} />

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
          <ValidationError
            prefix="Response"
            field="response"
            errors={state.errors}
          />

          <label htmlFor="form-name">
            <span className="bold-span">Dietry requirments</span>
          </label>
          <input
            id="form-name"
            type="text"
            placeholder="Anything we should know"
          ></input>
          <ValidationError
            prefix="DietryReq"
            field="DietryReq"
            errors={state.errors}
          />

          <label htmlFor="form-name">
            <span className="bold-span">Song?</span>
          </label>
          <input
            id="form-name"
            type="text"
            placeholder="Favourite song you want to hear on our wedding"
          ></input>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <button type="submit" disabled={state.submitting}>
            Send
          </button>

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
