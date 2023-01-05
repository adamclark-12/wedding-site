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
            name="name"
            required
          ></textarea>
          <ValidationError prefix="Names" field="names" errors={state.errors} />

          <div className="respond-div">
            <label className="bold-span underline-span">RSVP</label>

            <br />
            <label htmlFor="form-reply">
              <span className="">Would love to attend!</span>
            </label>
            <input id="form-reply" type="radio" name="answer"></input>

            <br />

            <label htmlFor="form-reply">
              <span className="">Sadly can't make it</span>
            </label>
            <input id="form-reply" type="radio" name="answer"></input>
          </div>
          <ValidationError
            prefix="Response"
            field="response"
            errors={state.errors}
          />

          <label htmlFor="form-diet">
            <span className="bold-span underline-span">
              Dietary Requirements
            </span>
          </label>
          <textarea
            id="form-diet"
            type="text"
            placeholder="Anything dietary requirements we should know?  "
            required
          ></textarea>
          <ValidationError
            prefix="DietaryReq"
            field="dietaryReq"
            errors={state.errors}
          />

          <label htmlFor="form-song">
            <span className="bold-span underline-span">Song?</span>
          </label>
          <textarea
            id="form-name"
            type="text"
            placeholder="Favourite song you want to hear?"
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          {/* <div className="form-btn-div"> */}
          <br />
          <button
            className=" btn-backg  btn"
            type="submit"
            disabled={state.submitting}
          >
            Send
          </button>
          {/* </div> */}

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
