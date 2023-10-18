/* eslint-disable react/prop-types */
import style from './Filter.module.css'

const Filter = ({ filter, setFilter }) => {

    const changeSearch = (e) => {
        setFilter({ ...filter, search: e.target.value })
    }

    const changeRadio = (e) => {
        let all = false
        let income = false
        let spent = false

        if (e === "income") {
            income = true
        } else if (e === "spent") {
            spent = true
        } else {
            all = true
        }

        setFilter({ ...filter, all, income, spent })
    }

    return (
        <div className={style.container}>
            <div className={style.input_wrapper}>
                <input type="text" className={style.input} value={filter.search} onChange={changeSearch} />
                <div className={style.input_icon}>
                    <ion-icon name="search-sharp"></ion-icon>
                </div>
            </div>

            <div className={style.radioContainer}>
                <div style={{paddingLeft: '5px'}}>
                    <input type="radio" name="filter" id="all" value="all" checked={filter.all} onChange={(e) => changeRadio(e.target.value)} />
                    <label htmlFor="all">Todos</label>
                </div>
                <div style={{paddingLeft: '5px'}}>
                    <input type="radio" name="filter" id="income" value="income" checked={filter.income} onChange={(e) => changeRadio(e.target.value)} />
                    <label htmlFor="income">Ingreso</label>
                </div>
                <div style={{paddingLeft: '5px'}}>
                    <input type="radio" name="filter" id="spent" value="spent" checked={filter.spent} onChange={(e) => changeRadio(e.target.value)} />
                    <label htmlFor="spent">Gasto</label>
                </div>
            </div>
        </div>
    )
}

export default Filter