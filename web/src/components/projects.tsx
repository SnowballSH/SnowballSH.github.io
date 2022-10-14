import "../styles/waves.scss";
import "../styles/grid.scss";
import { Fragment, h } from "preact";

import FigurifyPNG from "../figurify.png";

function get_languages(mobile: boolean) {
    return <Fragment>
        <section class={"gorilla"}>
            <h2>
                The Gorilla Programming Language
            </h2>
            <img src={"https://i.imgur.com/lX7Vzr0.png"} alt={""} />
            <h4>
                A <b>dynamic, interpreted programming language</b> focusing on simplicity and speed.
                <br />
                Although <a href={"https://github.com/SnowballSH/Gorilla#news"} target={"_blank"} rel="noopener">archived
                    and
                    unfinished</a>,
            </h4>
            <h4>
                From learning to make a parser, to interpreters, to compilations, to VM,
                <br />
                I learned a lot from
                this project!
            </h4>

            <h4><a href={"https://github.com/SnowballSH/Gorilla"} target={"_blank"} rel="noopener">Github</a></h4>
        </section>

        <section class={"glacier"}>
            {
                mobile ? "" : <div class="wave1">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                        preserveAspectRatio="none">
                        <path
                            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                            opacity=".25" class="shape-fill" />
                        <path
                            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                            opacity=".5" class="shape-fill" />
                        <path
                            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                            class="shape-fill" />
                    </svg>
                </div>
            }

            <h2>
                The Glacier Programming Language
            </h2>
            <h4>
                As successor to the Gorilla language, Glacier2 uses a more efficient memory management and VM system.
            </h4>
            <h4>
                It is currently in development. Beta version is expected to come out in late 2022.
            </h4>
            <h4><a href={"https://github.com/SnowballSH/RustGlacier"} target={"_blank"} rel="noopener">Github</a></h4>
        </section>
    </Fragment>;
}


export function Projects() {
    return (
        <div class={"projects"}>
            <h1 class={"project-head"}>Projects</h1>
            <div class={"grid-out"}>
                <section class={"avalanche"}>
                    <h2>
                        The Avalanche Chess Engine
                    </h2>
                    <h4>
                        Avalanche is the first ever and the strongest chess engine (computer chess player) written in the Zig Programming Language.
                        <br />
                        It implements the UCI protocol and plays in <a href="http://ccrl.chessdom.com/ccrl/4040/" target="_blank" rel="noopener">CCRL 40/15</a> tournaments
                    </h4>
                    <h4>
                        <b>Strength</b>
                        <br />The latest <a href="http://ccrl.chessdom.com/ccrl/4040/cgi/engine_details.cgi?print=Details&each_game=1&eng=Avalanche%201.2.0%2064-bit#Avalanche_1_2_0_64-bit" target="_blank" rel="noopener">Avalanche 1.2.0</a> has a CCRL ELO of <b>3042</b>.
                        <br />It is capable of defeating any human player consistently and is about the 86th strongest chess program in history.
                        <br />FIDE Master players have challenged it but all of them lost.
                        <br />
                        <br />
                        <b>Accuracy</b>
                        <br />Avalanche uses the <b>NNUE</b> technology on a <b>alpha-beta minimax</b> framework. It can detect most tactics while also being accurate in quiet positions.
                        <br />
                        <br />
                        <b>Speed</b>
                        <br />Avalanche has one of the fastest move generation in the world due to the optimizations of Zig and LLVM.
                    </h4>
                    <h4><a href="https://github.com/SnowballSH/Avalanche" target="_blank" rel="noopener">Github</a></h4>
                </section>

                {
                    window.innerWidth > 500 ?
                        <section class={"language"}>
                            {get_languages(false)}
                        </section> : get_languages(true)
                }

                <section class={"figurify"}>
                    <h2>
                        Figurify the algorithms, right in your browser!
                    </h2>
                    <img src={FigurifyPNG} alt={""} />

                    <h4>Toolbox website for visualizing everything.</h4>

                    <h4><a href={"https://github.com/SnowballSH/Figurify"} target={"_blank"} rel="noopener">Github</a>
                        <br />
                        <br />
                        <a href={"https://figurify.vercel.app"} target={"_blank"} rel="noopener">Website</a></h4>
                </section>

                <section class={"probox"}>
                    <h2>
                        Probox, the toolbox for Programmers
                    </h2>
                    <img
                        src={"https://camo.githubusercontent.com/a198ac493fd6e5ad8bc9036bfdebeba25ba449cc82fba2ceaeae1564307135bd/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f3739343336313235343838313532353831332f3830353135333937363834373639353932322f69636f6e2e706e67"}
                        alt={""} />
                    <h4>
                        Probox is a online toolbox providing <b>various features</b> for programmers,
                        including Code Compiler, Code Shortener, Stack Overflow searcher, Regex Templates, Ascii Table,
                        etc.
                    </h4>
                    <h4>The tools may sound trivial, but this was my first collaboration project ever.</h4>
                    <h4><a href={"https://github.com/TWT-Code-Jam-FAST/Probox"} target={"_blank"}
                        rel="noopener">Github</a>
                        <br />
                        <br />
                        <a href={"https://probox.vercel.app"} target={"_blank"} rel="noopener">Website</a></h4>
                </section>

                <section class={"goneuraou"}>
                    <h2>
                        GoneuraOu, an (incompleted) MiniShogi Engine
                    </h2>
                    <h4>
                        GoneuraOu is a MiniShogi Engine written in C# using Minimax search and distance-eval evaluation.
                    </h4>
                    <h4>Development is stopped at 2150 ELO, when I switched to focus on Chess Engine instead.</h4>
                    <h4>It is strong enough to defeat amateur human players easily.</h4>
                    <h4><a href={"https://github.com/SnowballSH/GoneuraOu"} target={"_blank"}
                        rel="noopener">Github</a></h4>
                </section>
            </div>
        </div >
    );
}
