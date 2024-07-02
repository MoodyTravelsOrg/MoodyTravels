import React from "react";
import "./Login.css";

import { FaUserAstronaut } from "react-icons/fa";
// Imported this from react-icons/fa. (This is a free icon pack that includes a lot of icons. You can find it here: https://react-icons.github.io/react-icons/ )
import { GiDialPadlock } from "react-icons/gi";
// Just FYI: Can't add the additonal import as an enumeration within the first import statement since it's a separate section (gi instead of fa)

const Login = () => {
  return (
    <div className="wrapper">
      <form action="">
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder="Username" required />
          <FaUserAstronaut className="icon" />
          {/* I picked the Austronaut as a symbol for travelling... Maybe we can find something more fitting but I like it so far... */}
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required />
          <GiDialPadlock className="icon" />
        </div>

        <div className="remember-forgot">
          <label>
            <input type="checkbox" />
            Pray, keep my likeness in thy memory
            {/* Just joking around. This is early modern English, as it was used around the time of Shakespeare. Guess, it's funnier than the typical "Remember me"... */}
          </label>
          <a href="#">Hast thou misplaced thy secret code?</a>
          {/* Same as above - only for "Forgot password?" */}
        </div>

        <button type="submit">Login</button>

        <div className="registered-link">
            <p>Hast thou not yet a scroll of thine own? <a href="#">Inscribe thyself in our grand tome</a></p>
            {/* Translated: "Don't have an account?" and "Register"... well, kind of haha */}
        </div>
      </form>
    </div>
  );
};

export default Login;
