import React from "react";
import { Button } from "@material-ui/core";
import Project from "./project";

export default function Homepage() {
  return (
    <div className="App-section">
      <div>
        <br />
        <img
          src="images/SnowballSH.png"
          className="App-logo"
          alt="SnowballSH"
        />
        <p>Hi there, this is SnowballSH!</p>

        <Button
          variant="contained"
          color="primary"
          target="_blank"
          href="https://github.com/SnowballSH"
          rel="noopener noreferrer"
          size={"large"}
        >
          View my projects on Github!
        </Button>

        <br />
        <br />
        <p>These are some of the web applications I made:</p>

        <Project
          url="http://snowballsh.me/JumpingGamePhaser/"
          img="https://i.imgur.com/Y9BunBO.png"
          alt="Jumping Game"
        />

        <Project
          url="https://repl.it/@SnowballSH/SimplePokemonGameCLI"
          img="https://i.imgur.com/ZuzPNTv.png"
          alt="Pokemon Game"
        />

        <Project
          url="https://repl.it/@SnowballSH/HumanScript"
          img="https://miro.medium.com/max/400/1*WjOx8btqYb5L1fIM_9cWnw.jpeg"
          alt="HumanScript"
        />
      </div>
    </div>
  );
}
