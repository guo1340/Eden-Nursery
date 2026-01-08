import "../styles/SeamlessLoopVideo.css";
import React, { useEffect, useRef, useState } from "react";

type Props = {
    src: string;
    className?: string;
    crossfadeSeconds?: number; // how early to start fade before end
    fadeMs?: number; // fade duration
};

export default function SeamlessLoopVideo({
    src,
    className,
    crossfadeSeconds = 0.8,
    fadeMs = 800,
}: Props) {
    const aRef = useRef<HTMLVideoElement | null>(null);
    const bRef = useRef<HTMLVideoElement | null>(null);

    // purely for rendering classes
    const [top, setTop] = useState<"a" | "b">("a");
    const [fading, setFading] = useState(false);

    // stable refs for logic (avoid effect re-init issues)
    const topRef = useRef<"a" | "b">("a");
    const fadingRef = useRef(false);

    useEffect(() => {
        const a = aRef.current;
        const b = bRef.current;
        if (!a || !b) return;

        a.muted = true;
        b.muted = true;
        a.playsInline = true;
        b.playsInline = true;

        // We manage looping manually
        a.loop = false;
        b.loop = false;

        // Start A; keep B ready
        b.pause();
        b.currentTime = 0;

        a.play().catch(() => {
            // autoplay can be blocked until user interacts
        });

        let raf = 0;

        const tick = () => {
            const topIsA = topRef.current === "a";
            const topEl = topIsA ? a : b;
            const nextEl = topIsA ? b : a;

            // only trigger if not already fading and duration is known
            if (!fadingRef.current && isFinite(topEl.duration) && topEl.duration > 0) {
                const remaining = topEl.duration - topEl.currentTime;

                if (remaining <= crossfadeSeconds) {
                    fadingRef.current = true;
                    setFading(true);

                    // start next from beginning
                    nextEl.pause();
                    nextEl.currentTime = 0;

                    nextEl.play().catch(() => {
                        // If autoplay blocked, you may need a user click somewhere on page
                    });

                    window.setTimeout(() => {
                        // swap which one is "top"
                        topRef.current = topIsA ? "b" : "a";
                        setTop(topRef.current);

                        // stop/reset the old one
                        topEl.pause();
                        topEl.currentTime = 0;

                        fadingRef.current = false;
                        setFading(false);
                    }, fadeMs);
                }
            }

            raf = requestAnimationFrame(tick);
        };

        raf = requestAnimationFrame(tick);

        return () => cancelAnimationFrame(raf);
    }, [crossfadeSeconds, fadeMs]);

    const aOnTop = top === "a";

    return (
        <div className={`seamless-video ${className ?? ""}`} style={{ ["--fadeMs" as any]: `${fadeMs}ms` }}>
            <video
                ref={aRef}
                className={`seamless-video__vid ${aOnTop ? "is-top" : "is-bottom"} ${fading && aOnTop ? "is-fading-out" : ""
                    } ${fading && !aOnTop ? "is-fading-in" : ""}`}
                src={src}
                autoPlay
                muted
                playsInline
                preload="auto"
            />
            <video
                ref={bRef}
                className={`seamless-video__vid ${!aOnTop ? "is-top" : "is-bottom"} ${fading && !aOnTop ? "is-fading-out" : ""
                    } ${fading && aOnTop ? "is-fading-in" : ""}`}
                src={src}
                autoPlay
                muted
                playsInline
                preload="auto"
            />
        </div>
    );
}
