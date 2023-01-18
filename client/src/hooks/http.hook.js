import {useState, useCallback} from 'react'
//To work with the server using fetch
export const useHttp = () => {
    //There are 2 stays - loading and error
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    //useCallback - to prevent the react from entering the recursion/\
    //Initial parameters for fetch
    const request = useCallback( async (url, method = 'GET', body = null, headers = {}) => {
        setLoading(true)
        try {
            if(body) {
                //if there is a body, change it into json format because the server 
                //understands only with json
                body = JSON.stringify(body)
                //headers type
                headers['Content-Type'] = 'application/json'
            }
            //asyncronus fetch function
            const response = await fetch(url, { method, body, headers })
            
            const data = await response.json()
           
            //If it was not possible to make a response throw new error. 
            //If don't have a error message from server create message "Something went wrong"
            if(!response.ok) {
                throw new Error(data.message || "Something went wrong")
            }
            //If response ok, return data replaces loading
            setLoading(false)
            return data
        } catch(error) {
            setLoading(false)
            setError(error.message)
            throw error
        }
    }, [])
    //After showing the error, we clear it
    const clearError = useCallback(() => {
        setError(null)
    }, [])
    return { loading, request, error, clearError }
}

