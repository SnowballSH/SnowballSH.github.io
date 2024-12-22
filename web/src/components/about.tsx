import "../styles/about.scss";
import { h } from "preact";

import SBSH_IMG from "../SnowballSH.png";

export function About() {
    return (
        <div class={"about"}>
            <h1 class={"about-head"}>About</h1>
            <div class={"me"}>
                <h2>
                    Hey! I am SnowballSH, a software developer in love with board game algorithms and parsing.
                </h2>
                <img src={SBSH_IMG} alt={""} />
                <h2>
                    I usually program stuff in <a href={"https://rust-lang.org/"} target={"_blank"}
                        rel="noopener">Rust</a> and <a
                            href={"https://python.org/"} target={"_blank"} rel="noopener">Python</a>,
                    then showcase them on the web with <a href={"https://typescriptlang.org/"}
                        target={"_blank"} rel="noopener">TypeScript</a> and <a
                            href={"https://reactjs.org/"} target={"_blank"} rel="noopener">ReactJS</a>.
                </h2>
                <h2>
                    I also <strong>love</strong> designing programming languages -- you can have a look at some examples
                    below.
                </h2>
                <h2>
                    I post 99% of my projects on my Github! <a href={"https://github.com/SnowballSH"} target={"_blank"}
                        rel="noopener">github.com/SnowballSH</a>
                </h2>
                <h2>
                    CALICO Fall '24 Gold Medalist
                </h2>
                <h2>
                    USACO Platinum
                </h2>
            </div>
        </div>
    );
}
