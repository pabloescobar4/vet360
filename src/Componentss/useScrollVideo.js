// src/hooks/useScrollVideo.js
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useScrollVideo = (videoRef) => {
    useEffect(() => {
        const video = videoRef.current;

        if (video) {
            gsap.to(video, {
                currentTime: video.duration || 6,  // use duration if available, else default to 1
                scrollTrigger: {
                    trigger: video,
                    toggleActions: 'restart none none none',
                    start: "top center", // start when the top of the video hits the center of the viewport
                    end: "bottom center", // end when the bottom of the video hits the center of the viewport
                    scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                    pin: true, // pin the video in place
                    // markers: true // show markers for debugging
                }
            });
        }

        // Cleanup function to kill ScrollTrigger instances on component unmount
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [videoRef]);
};

export default useScrollVideo;
