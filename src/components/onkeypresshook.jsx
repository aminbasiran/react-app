import { useEffect } from "react";

const useKeypress = (callback,targetkey)=>{
    useEffect(()=>{
        const keypress =(event)=>{
            if (event.key === targetkey){
                callback()
            }

        }

        window.addEventListener('keydown',keypress)

    },[callback,targetkey])
}

export default useKeypress

