import "../index.scss";
import {h} from "preact";


export function Projects() {
    return (
        <div>
            <h1 class={"project-head"}>Projects</h1>
            <div class={"grid-out"}>
                <div class={"gorilla"}>
                    <h2>
                        The Gorilla Programming Language
                    </h2>
                    <img src={"https://i.imgur.com/lX7Vzr0.png"} alt={""}/>
                    <h4>
                        A <b>dynamic, interpreted programming language</b> focusing on simplicity and speed.
                        <br/>
                        Although <a href={"https://github.com/SnowballSH/Gorilla#news"} target={"_blank"}>archived and
                        unfinished</a>,
                        Gorilla is my greatest project.
                    </h4>
                    <h4>
                        From learning to make a parser, to interpreters, to compilations, to VM,
                        <br/>
                        I learned a lot from
                        this project, and it is better than I expected! It is also very cool!
                    </h4>

                    <h4><a href={"https://github.com/SnowballSH/Gorilla"} target={"_blank"}>Github</a></h4>
                </div>

                <div class={"figurify"}>
                    <h2>
                        Figurify the algorithms, right in your browser!
                    </h2>
                    <img src={"https://github.com/SnowballSH/Figurify/raw/master/public/figurify_final.png"} alt={""}/>

                    <h4>Toolbox website for visualizing everything.</h4>

                    <h3>
                        Features:
                    </h3>
                    <h4>
                        Data Visualization
                        <br/>
                        Sorting Visualization
                        <br/>
                        Minimax Visualization
                    </h4>

                    <h4><a href={"https://github.com/SnowballSH/Figurify"} target={"_blank"}>Github</a>
                        <br/>
                        <a href={"https://figurify.vercel.app"} target={"_blank"}>Website</a></h4>
                </div>

                <div class={"glacier"}>
                    <h2>
                        The Glacier Programming Language
                    </h2>
                    <h4>
                        Continued from Gorilla, Glacier utilizes <b>stack + heap</b> technique, by allocating objects in
                        heap,
                        it largely <b>increases speed and memory efficiency</b> compared to Gorilla.
                    </h4>
                    <h4>
                        The concept is complete, now I only need to port all instructions back to the Glacier
                        format.
                    </h4>
                    <h4><a href={"https://github.com/SnowballSH/RustGlacier"} target={"_blank"}>Github</a></h4>
                </div>

                <div class={"iceburn"}>
                    <h2>
                        The Iceburn Chess Engine
                    </h2>
                    <h4>
                        Iceburn is a simple chess engine written in ~800 lines of Rust code. It does not have much
                        search pruning
                        technique, but with the <b>NNUE evaluation and MTD(f) search</b>, it plays at ~500knps with an
                        ELO
                        of <a
                        href={"https://lichess.org/@/IceBurnEngine"} target={"_blank"}>~1600 Blitz and ~1700 Rapid</a>.
                        This project is
                        for fun and is not a focus on engine performance :)
                    </h4>
                    <h4><a href={"https://github.com/SnowballSH/iceburn"} target={"_blank"}>Github</a></h4>
                </div>

                <div class={"probox"}>
                    <h2>
                        Probox, the toolbox for Programmers
                    </h2>
                    <img
                        src={"https://camo.githubusercontent.com/a198ac493fd6e5ad8bc9036bfdebeba25ba449cc82fba2ceaeae1564307135bd/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f3739343336313235343838313532353831332f3830353135333937363834373639353932322f69636f6e2e706e67"}
                        alt={""}/>
                    <h4>
                        Probox is a online toolbox providing <b>various features</b> for programmers,
                        including Code Compiler, Code Shortener, Stack Overflow searcher, Regex Templates, Ascii Table,
                        etc.
                    </h4>
                    <h4>I know most of the tools sound stupid, they are, but this is my first successful project
                        <b>collaborating with other guys</b>.</h4>
                    <h4><a href={"https://github.com/TWT-Code-Jam-FAST/Probox"} target={"_blank"}>Github</a>
                        <br/>
                        <a href={"https://probox.vercel.app"} target={"_blank"}>Website</a></h4>
                </div>

                <div class={"mini"}>
                    <h2>
                        Minimal Chess
                    </h2>
                    <h4>
                        Minimal Chess is a new chess-like board game created and developed by me. It is inspired by a
                        Chinese show.
                    </h4>
                    <h4>The game supports piece types for everyone: Traditional Chinese symbols or Universal Chess
                        pieces</h4>
                    <h4>I also made <b>a strong engine</b> that can play the game with you. It also has 3 levels with
                        different
                        search times.</h4>
                    <h4><a href={"https://github.com/SnowballSH/minimal-chess"} target={"_blank"}>Github</a>
                        <br/>
                        <a href={"https://snowballsh.me/minimal-chess"} target={"_blank"}>Website</a></h4>
                </div>
            </div>
        </div>
    );
}