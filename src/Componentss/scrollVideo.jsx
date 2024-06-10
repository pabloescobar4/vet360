// src/components/ScrollVideo.js
import React, { useRef } from 'react';
import useScrollVideo from './useScrollVideo';
import '../App.css';
const ScrollVideo = ({ src }) => {
    const videoRef = useRef(null);
    useScrollVideo(videoRef);

    return (
        <div className="video-wrapper" >
            <video ref={videoRef} width="100%" height="100%" >
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default ScrollVideo;

