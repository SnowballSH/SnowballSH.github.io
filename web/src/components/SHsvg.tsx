import "../index.scss";
import {h} from "preact";
import anime from "animejs";

const SHPATH = `
m40 21c-17-7-6-22 5-14m-5 14c15 7-2 25-10 10m25-25v30m16-30v30m-16-16h16m-55 1c-17-7-6-22 5-14m-5 14c15 7-2 25-10 10
`.trim().split("\n").join(" ");

export function SH() {
    return (
        <svg viewBox="0 0 80 40" class={"svg-single"}
             width={"24em"} height={"12em"}
             xmlns="http://www.w3.org/2000/svg"
        stroke-width={0.3}>
            <path stroke="hsl(197, 100%, 50%)" fill="transparent" d={SHPATH}/>
        </svg>
    )
}

export function SHCont() {
    return (
        <div class={"svg-container"}>
            <SH/>
            <SH/>
            <SH/>
            <SH/>
            <SH/>
            <SH/>
            <h1 class="svg-text" id="snowball">
                Snowball
            </h1>
            <h1 class="svg-text" id="sh">
                SH
            </h1>
        </div>
    )
}

export function SVGAnimate() {
    const Gap = 0.24;
    const Offset = 500;
    const Rotation = 90;
    const Duration = 1200;

    let tl = anime.timeline();

    /*
    tl.add(
        {
            targets: ".svg-single",
            translateY: ["-20em", "0em"],
            rotateX: Rotation,
            delay: anime.stagger(30, {easing: 'easeOutQuad', start: 400}),
            duration: Offset,
        }
    )
     */

    tl.add(
        {
            targets: ".svg-single:nth-child(6)",
            translateX: `${-3 * Gap}em`,
            translateY: `${3 * Gap}em`,
            rotateX: [Rotation, 10],
            easing: 'easeInOutSine',
            duration: Duration
        }, Offset
    )

    tl.add(
        {
            targets: ".svg-single:nth-child(5)",
            translateX: `${-2 * Gap}em`,
            translateY: `${2 * Gap}em`,
            rotateX: [Rotation, 10],
            easing: 'easeInOutSine',
            duration: Duration
        }, Offset
    )

    tl.add(
        {
            targets: ".svg-single:nth-child(4)",
            translateX: `${-Gap}em`,
            translateY: `${Gap}em`,
            rotateX: [Rotation, 10],
            easing: 'easeInOutSine',
            duration: Duration
        }, Offset
    )

    tl.add(
        {
            targets: ".svg-single:nth-child(1)",
            translateX: `0em`,
            translateY: `0em`,
            rotateX: [Rotation, 10],
            easing: 'easeInOutSine',
            duration: Duration
        }, Offset
    )

    tl.add(
        {
            targets: ".svg-single:nth-child(2)",
            translateX: `${Gap}em`,
            translateY: `${-Gap}em`,
            rotateX: [Rotation, 10],
            easing: 'easeInOutSine',
            duration: Duration
        }, Offset
    )

    tl.add(
        {
            targets: ".svg-single:nth-child(3)",
            translateX: `${2 * Gap}em`,
            translateY: `${-2 * Gap}em`,
            rotateX: [Rotation, 10],
            easing: 'easeInOutSine',
            duration: Duration
        }, Offset
    )

    tl.add(
        {
            targets: ".svg-text#snowball",
            rotateX: [Rotation, 0],
            easing: 'easeInOutQuad',
            duration: 700,
        }
    )

    tl.add(
        {
            targets: ".svg-text#sh",
            rotateX: [Rotation, 0],
            easing: 'easeInOutQuad',
            duration: 700,
        }
    )
}
