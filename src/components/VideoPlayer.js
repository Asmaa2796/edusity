import { useRef} from "react";
import { useDispatch, useSelector } from "react-redux";
import { onCloseVideo } from "../redux/action/action";

const VideoPlayer = () => {
    const playVid = useRef(null);
    const dispatch = useDispatch();
    const closeVideo = (e) => {
        if(e.target === playVid.current) {
            dispatch(onCloseVideo());
        }
    }
    const isPlaying = useSelector((state) => state.isPlaying);
    console.log(isPlaying);
    return (
        <div className={`video-player ${isPlaying ? '':'hide'}`} ref={playVid} onClick={closeVideo}>
            <video src={"../assets/video.mp4"} autoPlay muted controls>
            </video>
        </div>
    );
}

export default VideoPlayer;
