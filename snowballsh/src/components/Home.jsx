import React from 'react';
import {Button} from "@material-ui/core";

export default function Homepage() {
  return (
    <div className="App-section">
      <div>
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
      </div>
    </div>
  )
}
