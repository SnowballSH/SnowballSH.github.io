import React from 'react';
import {Button} from "@material-ui/core";

export default function Homepage() {
  return (
    <div className="App-section">
      <div>
        <br/>
        <img src="images/SnowballSH.png" className="App-logo" alt="SnowballSH"/>
        <p>
          Hi there, this is SnowballSH!
        </p>

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

        <br/>
        <p>
          These are some of the web applications I made:
        </p>

        <a
          target="_blank"
          href="http://snowballsh.me/JumpingGamePhaser/"
          rel="noopener noreferrer"
        >
          <div className="wrapper">
            <img src="https://i.imgur.com/Y9BunBO.png" alt="Jumping Game" className="project"/>
          </div>
        </a>

        <a
          target="_blank"
          href="https://repl.it/@SnowballSH/SimplePokemonGameCLI"
          rel="noopener noreferrer"
        >
          <div className="wrapper">
            <img src="https://i.imgur.com/ZuzPNTv.png" alt="Pokemon Game" className="project"/>
          </div>
        </a>
      </div>
    </div>
  );
}
