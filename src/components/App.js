import React from "react";
import "../styles/App.css";
const App = () => {
  return (
    <div id="main">
      <div class="container">
        <div class="community">
          <h2 class="community-header">Join our community</h2>
          <h2>30-day hassle-free money back guarantee</h2>
          <h3>
            Gain access to our library of tutorials along with expert code
            reviews. Perfect for any developer who wants to learn.
          </h3>
        </div>
        <div class="card-details">
          <div class="card">
            <p class="card-header">Monthly Subscription</p>
            <span>$29</span>
            <span>Per Month</span>
            <div>Full access for less than $1 a day.</div>
            <button>Sign Up</button>
          </div>
          <div class="why-us">
            <h4 class="why-us-header">Why Us</h4>
            <div>
              Tutorials by industry experts Peer & expert code review Coding
              exercises Access yo our GitHub repos Community forum Flashcard
              decks
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
