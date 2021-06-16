import "../index.scss";
import {h} from "preact";
import anime from "animejs";

const SHPATH = `
M12 21C-5 14 6-1 17 7M12 21C27 28 10 46 2 31M27 6V36M43 6V36M27 20H43
`.trim().split("\n").join(" ");

export function SH() {
    return (
        <svg viewBox="0 0 50 40" class={"svg-single"}
             width={"15em"} height={"12em"}
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
        </div>
    )
}

export function SVGAnimate() {
    const Gap = 0.24;
    const Offset = 1700;

    let tl = anime.timeline();

    tl.add(
        {
            targets: ".svg-single",
            translateY: ["-20em", "0em"],
            delay: anime.stagger(30, {easing: 'easeOutQuad', start: 400}),
            duration: Offset,
        }
    )

    tl.add(
        {
            targets: ".svg-single:nth-child(6)",
            translateX: `${-3 * Gap}em`,
            translateY: `${3 * Gap}em`,
            easing: 'easeInOutSine',
        }, Offset
    )

    tl.add(
        {
            targets: ".svg-single:nth-child(5)",
            translateX: `${-2 * Gap}em`,
            translateY: `${2 * Gap}em`,
            easing: 'easeInOutSine',
        }, Offset
    )

    tl.add(
        {
            targets: ".svg-single:nth-child(4)",
            translateX: `${-Gap}em`,
            translateY: `${Gap}em`,
            easing: 'easeInOutSine',
        }, Offset
    )

    tl.add(
        {
            targets: ".svg-single:nth-child(1)",
            translateX: `0em`,
            translateY: `0em`,
            easing: 'easeInOutSine',
        }, Offset
    )

    tl.add(
        {
            targets: ".svg-single:nth-child(2)",
            translateX: `${Gap}em`,
            translateY: `${-Gap}em`,
            easing: 'easeInOutSine',
        }, Offset
    )

    tl.add(
        {
            targets: ".svg-single:nth-child(3)",
            translateX: `${2 * Gap}em`,
            translateY: `${-2 * Gap}em`,
            easing: 'easeInOutSine',
        }, Offset
    )
}
