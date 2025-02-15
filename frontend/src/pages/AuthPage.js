import React, { useState } from "react"; // Import React and useState hook
import "../styles/AuthPage.css"; // Import the CSS file for styling

const AuthPage = () => {
  // React: Use state to manage whether the sign-up form is active
  const [isSignUpActive, setIsSignUpActive] = useState(false);

  // React: Function to handle "Sign Up" button click
  const handleSignUpClick = () => {
    setIsSignUpActive(true); // Set state to true to activate the sign-up form
  };

  // React: Function to handle "Sign In" button click
  const handleSignInClick = () => {
    setIsSignUpActive(false); // Set state to false to activate the login form
  };

  return (
    <div
      // React: Dynamically add/remove the "right-panel-active" class based on state
      className={`container ${isSignUpActive ? "right-panel-active" : ""}`}
      id="container"
    >
      {/* Sign-Up Form */}
      <div className="form-container sign-up-container">
        <form action="#">
          <h1>Create Account</h1>
          <div className="social-container">
            <a href="#" className="social">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social">
              <i className="fab fa-google-plus-g"></i>
            </a>
            <a href="#" className="social">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
        </form>
      </div>

      {/* Login Form */}
      <div className="form-container sign-in-container">
        <form action="#">
          <h1>Sign in</h1>
          <div className="social-container">
            <a href="#" className="social">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social">
              <i className="fab fa-google-plus-g"></i>
            </a>
            <a href="#" className="social">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <span>or use your account</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forgot your password?</a>
          <button>Sign In</button>
        </form>
      </div>

      {/* Overlay Container */}
      <div className="overlay-container">
        <div className="overlay">
          {/* Left Overlay Panel */}
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>
              To keep connected with us please login with your personal info
            </p>
            {/* React: Use onClick to handle button click */}
            <button className="ghost" id="signIn" onClick={handleSignInClick}>
              Sign In
            </button>
          </div>

          {/* Right Overlay Panel */}
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            {/* React: Use onClick to handle button click */}
            <button className="ghost" id="signUp" onClick={handleSignUpClick}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
