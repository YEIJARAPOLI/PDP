/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react"
import axios from "axios"

const ArticlesContext = createContext()

const ArticlesProvider = ({ children }) => {

    const [category, setCategory] = useState("general")
    const [articles, setArticles] = useState([])

    useEffect(() => {
        const queryAPI = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=co&category=${category}&apiKey=c105012511a84a1897f5b95b3840de26`
            const { data } = await axios(url)

            setArticles(data.articles)
        }

        queryAPI()
    }, [category])

    const changeCategory = (e) => {
        setCategory(e.target.value)
    }

    return (
        <ArticlesContext.Provider value={{ category, articles, changeCategory }}>
            {children}
        </ArticlesContext.Provider>
    )
}

export { ArticlesContext }
export default ArticlesProvider