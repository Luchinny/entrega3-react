import axios from "axios"
import { useState } from "react"

const useFetch = (url) => {

    const [infoaPI, setInfoaPI] = useState()
    const [hasError, setHasError] = useState(false)
    

    const getApi = ( ) => {

        axios.get(url)
        .then(res => {
            setInfoaPI(res.data)
            setHasError(false)
        })
        .catch(err => {
            console.log(err)
            setHasError(true)
            })
    }
 
    return [ infoaPI, getApi, hasError ]
}

export default useFetch
