import React from "react";
import { Jumbotron } from "react-bootstrap";

export default function HomePage() {
  return (
    <div>
      <Jumbotron>
        <h1>WereldWijde Weetjes</h1>
      </Jumbotron>

      <iframe
        title="prezi"
        src="https://prezi.com/p/kr9wclafgov5/embed/"
        id="iframe_container"
        frameborder="0"
        webkitallowfullscreen=""
        mozallowfullscreen=""
        allowfullscreen=""
        allow="autoplay; fullscreen"
        height="auto"
        width="100%"
      ></iframe>
    </div>
  );
}
