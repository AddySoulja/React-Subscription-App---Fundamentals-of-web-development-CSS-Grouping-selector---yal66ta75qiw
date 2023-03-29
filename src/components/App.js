import React from "react";
import "../styles/App.css";
const App = () => {
  return (
    <div id="main">
      <div class="container">
        <div class="community">
          <h2 class="community-header">Join our community</h2>
          <h2>30-day hassle-free monkey back gurarantee</h2>
          <div>
            Gain access to our full library of tutorials along with expert code
            reviews. Perfect for any developers who are serious about honing
            their skills.
          </div>
        </div>
        <div class="card-details">
          <div class="card">
            <p class="card-header">Monthly Subscription</p>
            <div>
              Monthly Subscription $29 Per Month Full access for less than $1 a
              day.
            </div>
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
