import{a as e,b as t,p as a,y as n,N as l}from"./vendor.a9a570c8.js";function s(){return e("svg",{viewBox:"0 0 80 40",class:"svg-single",width:"24em",height:"12em",xmlns:"http://www.w3.org/2000/svg","stroke-width":.3},e("path",{stroke:"hsl(197, 100%, 50%)",fill:"transparent",d:"\nm40 21c-17-7-6-22 5-14m-5 14c15 7-2 25-10 10m25-25v30m16-30v30m-16-16h16m-55 1c-17-7-6-22 5-14m-5 14c15 7-2 25-10 10\n"}))}function i(){return e("div",{class:"svg-outer"},e("div",{class:"svg-container"},e(s,null),e(s,null),e(s,null),e(s,null),e(s,null),e(s,null),e("h1",{class:"svg-text",id:"snowball"},"Snowball"),e("h1",{class:"svg-text",id:"sh"},"SH")),e("h4",{class:"what-i-do"},"I write software, produce music, and more."))}function r(){return e("div",null,e("h1",{class:"project-head"},"Projects"),e("div",{class:"grid-out"},e("div",{class:"gorilla"},e("h2",null,"The Gorilla Programming Language"),e("img",{src:"https://i.imgur.com/lX7Vzr0.png",alt:""}),e("h4",null,"A ",e("b",null,"dynamic, interpreted programming language")," focusing on simplicity and speed.",e("br",null),"Although ",e("a",{href:"https://github.com/SnowballSH/Gorilla#news",target:"_blank"},"archived and unfinished"),", Gorilla is my greatest project."),e("h4",null,"From learning to make a parser, to interpreters, to compilations, to VM,",e("br",null),"I learned a lot from this project, and it is better than I expected! It is also very cool!"),e("h4",null,e("a",{href:"https://github.com/SnowballSH/Gorilla",target:"_blank"},"Github"))),e("div",{class:"figurify"},e("h2",null,"Figurify the algorithms, right in your browser!"),e("img",{src:"https://github.com/SnowballSH/Figurify/raw/master/public/figurify_final.png",alt:""}),e("h4",null,"Toolbox website for visualizing everything."),e("h4",null,e("a",{href:"https://github.com/SnowballSH/Figurify",target:"_blank"},"Github"),e("br",null),e("a",{href:"https://figurify.vercel.app",target:"_blank"},"Website"))),e("div",{class:"glacier"},e("h2",null,"The Glacier Programming Language"),e("h4",null,"Continued from Gorilla, Glacier utilizes ",e("b",null,"stack + heap")," technique, by allocating objects in heap, it largely ",e("b",null,"increases speed and memory efficiency")," compared to Gorilla."),e("h4",null,"The concept is complete, now I only need to port all instructions back to the Glacier format."),e("h4",null,e("a",{href:"https://github.com/SnowballSH/RustGlacier",target:"_blank"},"Github"))),e("div",{class:"iceburn"},e("h2",null,"The Iceburn Chess Engine"),e("h4",null,"Iceburn is a simple chess engine written in ~800 lines of Rust code. It does not have much search pruning technique, but with the ",e("b",null,"NNUE evaluation and MTD(f) search"),", it plays at ~500knps with an ELO of ",e("a",{href:"https://lichess.org/@/IceBurnEngine",target:"_blank"},"~1600 Blitz and ~1700 Rapid"),". This project is for fun and is not a focus on engine performance :)"),e("h4",null,e("a",{href:"https://github.com/SnowballSH/iceburn",target:"_blank"},"Github"))),e("div",{class:"probox"},e("h2",null,"Probox, the toolbox for Programmers"),e("img",{src:"https://camo.githubusercontent.com/a198ac493fd6e5ad8bc9036bfdebeba25ba449cc82fba2ceaeae1564307135bd/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f3739343336313235343838313532353831332f3830353135333937363834373639353932322f69636f6e2e706e67",alt:""}),e("h4",null,"Probox is a online toolbox providing ",e("b",null,"various features")," for programmers, including Code Compiler, Code Shortener, Stack Overflow searcher, Regex Templates, Ascii Table, etc."),e("h4",null,"I know most of the tools sound stupid, they are, but this is my first successful project ",e("b",null,"collaborating with other guys"),"."),e("h4",null,e("a",{href:"https://github.com/TWT-Code-Jam-FAST/Probox",target:"_blank"},"Github"),e("br",null),e("a",{href:"https://probox.vercel.app",target:"_blank"},"Website"))),e("div",{class:"mini"},e("h2",null,"Minimal Chess"),e("h4",null,"Minimal Chess is a new chess-like board game created and developed by me. It is inspired by a Chinese show."),e("h4",null,"The game supports piece types for everyone: Traditional Chinese symbols or Universal Chess pieces"),e("h4",null,"I also made ",e("b",null,"a strong engine")," that can play the game with you. It also has 3 levels with different search times."),e("h4",null,e("a",{href:"https://github.com/SnowballSH/minimal-chess",target:"_blank"},"Github"),e("br",null),e("a",{href:"https://snowballsh.me/minimal-chess",target:"_blank"},"Website")))))}class o extends a{componentDidMount(){!function(){const e=500,a=90,n=1200;let l=t.timeline();l.add({targets:".svg-single:nth-child(6)",translateX:"-0.72em",translateY:"0.72em",rotateX:[a,10],easing:"easeInOutSine",duration:n},e),l.add({targets:".svg-single:nth-child(5)",translateX:"-0.48em",translateY:"0.48em",rotateX:[a,10],easing:"easeInOutSine",duration:n},e),l.add({targets:".svg-single:nth-child(4)",translateX:"-0.24em",translateY:"0.24em",rotateX:[a,10],easing:"easeInOutSine",duration:n},e),l.add({targets:".svg-single:nth-child(1)",translateX:"0em",translateY:"0em",rotateX:[a,10],easing:"easeInOutSine",duration:n},e),l.add({targets:".svg-single:nth-child(2)",translateX:"0.24em",translateY:"-0.24em",rotateX:[a,10],easing:"easeInOutSine",duration:n},e),l.add({targets:".svg-single:nth-child(3)",translateX:"0.48em",translateY:"-0.48em",rotateX:[a,10],easing:"easeInOutSine",duration:n},e),l.add({targets:".svg-text#snowball",rotateX:[a,0],easing:"easeInOutQuad",duration:600}),l.add({targets:".svg-text#sh",rotateX:[a,0],easing:"easeInOutQuad",duration:600}),l.add({targets:".what-i-do",opacity:[0,1],easing:"easeInOutQuad",duration:500},2500)}()}render(){return e(n,null,e(i,null),e(r,null))}}l(e(o,null),document.getElementById("app"));
