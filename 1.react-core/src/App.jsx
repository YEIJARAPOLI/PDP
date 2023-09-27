import VideoList from "./components/VideoList";
import { playListP, playListM } from "./data/data";
import style from "./App.module.css"
import FormControlado from "./components/FormControlado";
import LifeCycle from "./components/LifeCycle";
import { useState } from "react";

// const playListP = [
//     { title: "Java", duration: "60", date: "", description: "" },
//     { title: "Node", duration: "20", date:"Diciembre", description:"" }
// ];

// const playListM = [
//     { title: "Rock", duration: "10", date: "", description: "" },
//     { title: "Salsa", duration: "25", date:"Diciembre", description:"" }
// ];

const App = () => {

    const [showLifeCycle, setshowLifeCycle] = useState(false)

    return (
        <div className={ style.container }>
            <button onClick={ () => setshowLifeCycle( !showLifeCycle ) }>{ showLifeCycle ? "Ocultar" : "Mostrar" }</button>
            { showLifeCycle && <LifeCycle></LifeCycle> }
            <FormControlado></FormControlado>
            <VideoList title="Programación" playList={playListP}>
                {/*<VideoItem title="Java" duration="60" date="" description=""></VideoItem>
                <VideoItem title="Node" duration="20" date="Diciembre" description=""></VideoItem>*/}
            </VideoList>
            <VideoList title="Música" playList = {playListM}>
                {/* <VideoItem title="Rock" duration="10" date="Septiembre" description=""></VideoItem>
                <VideoItem title="Salsa" duration="25" date="" description=""></VideoItem> */}
            </VideoList>
        </div>
    )
}

export default App;