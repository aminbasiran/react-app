import {MdDeleteForever} from "react-icons/md";
import {BsEyedropper} from 'react-icons/bs'
import {useState} from "react"


let init = 0

function Eachnote(props) {

const [bgColor,setBgColor] = useState('')
const [colorList, setColorList] = useState(['red','blue','yellow','green'])



 const setBackgroundColor=()=>{
  setBgColor(colorList[init])
  init++

  if (init >= colorList.length){
    init = 0
  }
  }

  return (
    <div className='eachlist' style={{backgroundColor:`${bgColor}`}}>
        <div>{props.text}</div>
        <div className='note-footer' >
            <small>{props.date}</small>
            <BsEyedropper className='color-icon' onClick={setBackgroundColor}/>
            <MdDeleteForever className='delete-icon' onClick={()=>props.handledeletenote(props.id)}/>

        </div>
    </div>
  )
}

export default Eachnote
