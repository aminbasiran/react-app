import React,{useState} from 'react'
import useKeypress from './onkeypresshook'

function Addnote(props) {

    const [notetext,setNotetext] = useState('')
    const wordsleft = 200

    const handlechange=(e)=>{
        setNotetext(e.target.value)
    }

    const handlesave=()=>{
        if(notetext.trim().length>0){
            props.handleaddnote(notetext)
            setNotetext("")
        }
        
    }

    useKeypress(handlesave,"Enter")

    return (
        <div className='eachlist new'>
            <textarea className="text-area new" placeholder='Type here to add text...' value={notetext} onChange={handlechange} maxLength ={wordsleft}></textarea>
            <div className='note-footer'>
                <small>{wordsleft - notetext.length} remaining</small>
                <button className='save-button' onClick={handlesave} >Save</button>

            </div>
        </div>
    )
}

export default Addnote
