import { data } from "./data/data"
import QuestionYG from "./components/question/QuestionYG"
import { useState } from "react"
import { useEffect } from "react"
import style from './App.module.css'

function AppYG() {

  const [question, setQuestion] = useState(data[0])
  const [answerSelected, setAnswerSelected] = useState(null)
  const [status, setStatus] = useState({
    msg: "",
    exito: false
  })

  useEffect(() => {
    //console.log(answerSelected);
    if (answerSelected) {
      if (answerSelected.correct) {
        if (question.id < (data.length)) {
          setQuestion(data[question.id])
        } else {
          setStatus({ msg: "Prueba superada", exito: true })
        }
      } else {
        setStatus({ msg: "Fallaste - Reiniciar", exito: false })
      }
    }

    setAnswerSelected(null)
  }, [answerSelected])

  const restart = () => {
    if (status) {
      setQuestion(data[0])
    }

    setStatus({
      msg: "",
      exito: false
    })
  }

  return (
    <div className={style.container}>
      <div className={style.appwrapper}>
        <div className={style.question}>
          <QuestionYG question={question} setQuestion={setQuestion} setAnswerSelected={setAnswerSelected} />
        </div>

        <div hidden={status.msg.length <= 0}>
          <button onClick={() => restart()} className={`${status.exito ? style.botonSuccess : style.botonFail}`}>
            {
              (status && status.msg.length > 0) ? status.msg : ""
            }
          </button>
        </div>
      </div>
    </div>
  )
}

export default AppYG