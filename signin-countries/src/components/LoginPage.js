import React from "react";
import linkedin from '../images/linkedin.png';
import google from '../images/google.png';
import twitter from '../images/twitter.png';
import facebook from '../images/fb.png';
import illustration from '../images/Illustration.png';

function LoginPage() {
  return (
    <div className="login-page">
      <h1>Sign In</h1>
      <div className="new-user">
        <h4>New user?</h4>
        <a href="abc">Create Account</a>
      </div>
      <div className="form-container">
        <input type="text" placeholder="Username or email" />
        <input type="password" placeholder="Password" />
        <label className="checkbox-container">
          <input type="checkbox" />
          <span className="checkmark"></span>
          Keep me signed in
        </label>
        <button>Sign In</button>
      </div>
        <div className={"alternate-signin"}>
            <h5>---------------- Or Sign In With ----------------</h5>
            <img src={google} alt={"Google"}/>
            <img src={facebook} alt={"Facebook"}/>
            <img src={linkedin} alt={"Linkedin"}/>
            <img src={twitter} alt={"Twitter"}/>
        </div>
        <img className={"illustration"}  src={illustration} alt={"Illustration"}/>
    </div>
  );
}

export default LoginPage;
