import { useEffect, useRef } from "react";

const SnowAmount = 1500;

const SYMBOLS = ",".split("");

const a = "FA";
const colors = [
    "#662505"+a,
    "#91220c"+a,
    "#544d4c"+a,
];

const fonts = [
    "Times",
    "Arial",
    "Verdana",
];

/* interface Snowflake {
    font: number,
    color: number,
    initialX: number,
    x: number,
    y: number,
    size: number,
    sinkSpeed: number,
    sway: number,
    mass: number,
    momentum: number,
    life: number,
} */

const randParticle = (ctx) => {
    let x = Math.floor(Math.random() * ctx.canvas.width);

    return {
        font: Math.floor(Math.random() * fonts.length),
        color: Math.floor(Math.random() * colors.length),
        initialX: x,
        x,
        y: ctx.canvas.height,
        sinkSpeed: Math.random() * 10,
        size: Math.random() * 25,
        sway: Math.random() * 15,
        mass: 0.03 + (Math.random() / 10),
        momentum: 500,
        sym: Math.floor(Math.random() * SYMBOLS.length)
    };
};

const moveSnowflake = (flake, ctx) => {
    if(flake.y < 0)
        return randParticle(ctx);

    let momentum = flake.momentum - flake.mass;

    return {
        ...flake,
        y: (flake.y - flake.sinkSpeed),
        momentum,
        x: flake.initialX + (Math.sin(momentum) * flake.sway),
    }
}

const applyDelta = (flake, delta) => ({
    ...flake,
    y: flake.y + delta,
});

export const Ashes = () => {
    let ref = useRef();

    useEffect(() => {
        if(ref.current) {
            ref.current.width = ref.current.clientWidth;
            ref.current.height = ref.current.clientHeight;

            let frame;
            let ctx = ref.current.getContext("2d");
            let flakes = new Array(SnowAmount).fill(1).map(
                () => randParticle(ctx)
            );

            new Array(SnowAmount * 10).fill(1).forEach(() => {
                // premove
                flakes = flakes.map((f) => moveSnowflake(f, ctx))
            });

            let lastScrollY = 0;
            const onScroll = () => {
                flakes = flakes.map(f => applyDelta(f, (lastScrollY - window.scrollY) / 5))
                lastScrollY = window.scrollY;
            }

            //window.addEventListener("scroll", onScroll);

            const render = () => {
                ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                flakes = flakes.map((f) => moveSnowflake(f, ctx));

                if(!ctx) console.log("!ctx");

                for(let flake of flakes) {
                    ctx.fillStyle = colors[flake.color];
                    ctx.font = `${flake.size}px ${fonts[flake.font]}`;
                    ctx?.fillText(SYMBOLS[flake.sym], flake.x, flake.y);
                }

                frame = requestAnimationFrame(render);
            }

            requestAnimationFrame(render);

            return () => {
                cancelAnimationFrame(frame);
                //window.removeEventListener("scroll", onScroll)
            };
        }
    }, [ref]);
    
    return <canvas
        className='snow'
        ref={ref}
    />;
}
