import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function RSVP() {
  const [state, handleSubmit] = useForm("xwkzdolj");
  if (state.succeeded) {
    return <div className="container">Thank you for replying</div>;
  }

  return (
    <div className="container">
      <section>
        <h1 className="rsvp-title">RSVP</h1>

        <form onSubmit={handleSubmit}>
          <label htmlFor="form-name">
            <span className="bold-span underline-span">Name/s</span>
          </label>
          <textarea
            id="form-name"
            type="text"
            placeholder="Names"
            name="Names"
            required
          ></textarea>
          <ValidationError field="names" prefix="Names" errors={state.errors} />

          <div className="respond-div">
            <label className="bold-span underline-span">RSVP</label>

            <br />
            <label htmlFor="form-reply">
              <span className="">Would love to attend!</span>
            </label>
            <input
              id="form-reply-yes"
              type="radio"
              name="Answer"
              value="Can attend"
            ></input>

            <br />

            <label htmlFor="form-reply">
              <span className="">Sadly can't make it</span>
            </label>
            <input
              id="form-reply-no"
              type="radio"
              name="Answer"
              value="Cannot attend"
            ></input>
            <ValidationError
              field="response"
              prefix="Response"
              errors={state.errors}
            />
          </div>

          <label htmlFor="form-diet">
            <span className="bold-span underline-span">
              Dietary Requirements
            </span>
          </label>
          <textarea
            id="form-diet"
            type="text"
            placeholder="Anything dietary requirements we should know?"
            name="Dietary requirements"
            required
          ></textarea>
          <ValidationError
            field="dietaryReq"
            prefix="DietaryReq"
            errors={state.errors}
          />

          <label htmlFor="form-song">
            <span className="bold-span underline-span">Song?</span>
          </label>
          <textarea
            id="form-name"
            type="text"
            placeholder="Favourite song you want to hear?"
            name="Favourite song"
          ></textarea>
          <ValidationError
            field="message"
            prefix="Message"
            errors={state.errors}
          />

          <br />
          <button
            className=" btn-backg  btn"
            type="submit"
            disabled={state.submitting}
          >
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
}
export default RSVP;
