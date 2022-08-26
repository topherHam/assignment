import { useEffect, useState } from "react"

export const Message = ({message, callback})=>{
    const [open, setOpen] = useState(false)

    useEffect(()=>{
        if(message){
            setOpen(true)
            setTimeout(()=>{
                setOpen(false)
                callback()
            },5000)
        }
    }, [message, callback])

    return(
        <>
        {open && <p style={{color:"red"}}>{message.text}</p>}
        </>
    )
}