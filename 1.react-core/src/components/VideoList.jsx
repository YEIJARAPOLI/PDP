import VideoItem from "./VideoItem";
import style from "./VideoList.module.css"

/* eslint-disable react/prop-types */
const VideoList = ( props ) => {
    return (
        <div className={ style.container }>
            <h1>{ props.title }</h1>
            {/* { props.children } */}
            { props.playList.map( ( item, index ) => (
                <VideoItem key={ index }
                    { ...item }
                    // title={ item.title }
                    // duration={ item.duration }
                    // date={ item.date }
                    // description={ item.description }
                />
            ) ) };
        </div>
    )
}

export default VideoList;