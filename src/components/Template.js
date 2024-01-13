import React from "react";
import frameImage from "../assets/frame.png";

function Template({ Title, desc1, desc2, image, formtype, SetIsLoggedIn }) {
  return (
    <div>
      <div>
        <h1>{Title}</h1>

        <p>
          <span>{desc1}</span>
          <span>{desc2}</span>
        </p>

        {formtype === "signup" ? <SignupForm /> : <LoginForm />}

        <div>
          <div></div>
          <p>Or</p>
          <div></div>
        </div>

        <button>Sign Up with Google</button>
      </div>

      <div>
        <img
          src={frameImage}
          alt="pattern"
          width={558}
          height={504}
          loading="lazy"
        />
        <img
          src={image}
          alt="student"
          width={558}
          height={490}
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default Template;
