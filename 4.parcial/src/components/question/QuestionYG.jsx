import BotonYG from "../boton/BotonYG"
import style from "./QuestionYG.module.css"

/* eslint-disable react/prop-types */
function QuestionYG({ question, setAnswerSelected }) {
    return (
        <div>
            <div className={style.question}>{question.question}</div>
            <div className={style.container}>
                {
                    question.answers.map((answer) => (
                        <BotonYG key={answer.key} answer={answer} setAnswerSelected={setAnswerSelected} />
                    ))
                }
            </div>
        </div>
    )
}

export default QuestionYG