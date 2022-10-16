import { useRef } from 'react';
import { ReactComponent as Play } from '../../assets/icons/play.svg';
import useVideo from '../../hooks/useVideo';

const Video = ({ video }) => {
    // const videoRef = useRef(null);
    // const { reset, play, isPlaying } = useVideo({ videoRef });

    return (
        <div className='h-[60vh] relative flex items-center justify-center hover:cursor-pointer' onClick={isPlaying ? reset : play}>
            <iframe src={video} className="absolute top-0 w-full h-full object-cover object-center" />
            {/* <div
                className='top-0 w-full h-full absolute'
                style={{ background: "linear-gradient(90deg, rgba(11, 44, 94, 0.3) 0%, rgba(65, 107, 172, 0.3) 100%)" }}
            />
            {!isPlaying && <Play className="z-0" />} */}
        </div >
    )
}

export default Video;