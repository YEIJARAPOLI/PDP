/* eslint-disable react/prop-types */
import style from "./BotonYG.module.css"

function BotonYG({ answer, setAnswerSelected }) {
    return (
        <div className={style.container}>
            <button className={style.boton} onClick={() => setAnswerSelected(answer)}>{answer.text}</button>
        </div>
    )
}

export default BotonYG