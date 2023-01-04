
import Eachnote from './eachnote'
import Addnote from './addnote'

function Notelist(props) {
  return (
    <div className='notelist'>
        {props.notes.filter(note=>note.text.toLowerCase().includes(props.search.toLowerCase())).map(note=><Eachnote text={note.text} date={note.date} id={note.id} key={note.id} handledeletenote={props.handledeletenote}/>)}
        <Addnote handleaddnote={props.handleaddnote}/>


    </div>
  )
}

export default Notelist
