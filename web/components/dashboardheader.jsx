import React from "react";

export default function Dashboardheader() {
  return (
    <>
      <div className="headerdash">
        <span className="headerdashcontent sports">
          <h1>Trois</h1>
        </span>
        <span className="headerdashcontent sports">
          <h3>Sports</h3>
        </span>
        <span className="headerdashcontent livescore">
          <h3>Livescore</h3>
        </span>
        <span className="headerdashcontent jackpot">
          <h3>Jackpot</h3>
        </span>
        <span className="headerdashcontent chat">
          <h3>Chat</h3>
        </span>
        <span className="headerdashcontent promotions">Promotions</span>
        <span className="headerdashcontent news">
          <h3>News</h3>
        </span>
        <span className="headerdashcontent statistics">Statistics</span>
        <div className="headerdashcontent squaretime"></div>
        <div className="headerdashcontent circle"></div>
      </div>
    </>
  );
}
