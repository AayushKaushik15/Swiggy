import { useState, useEffect } from "react"



const status = () => {
    const[status, setStatus] = useState(true);

    useEffect (() => {
        window.addEventListener("online", () => {
            setStatus(true)
        })
        window.addEventListener("offline", () => {
            setStatus(false)
        })
    }, [])

    return status;
}

export default status;