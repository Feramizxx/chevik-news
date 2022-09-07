import { useState } from "react";

const useVideo = ({ videoRef }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const play = () => {
        videoRef.current.play();
        setIsPlaying(true);
    }

    const reset = () => {
        videoRef.current.pause();
        setIsPlaying(false);
    }

    return { play, isPlaying, reset }
}

export default useVideo;