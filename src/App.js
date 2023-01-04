import {useState} from 'react'
import {nanoid} from 'nanoid'
import Notelist from './components/notelist';
import Search from './components/Search'
import Header from './components/Header'

function App() {
  const [notes,setNotes] = useState([])


  // PREFILLED NOTES

  // const [notes,setNotes] = useState([{
  //   text: "syam",
  //   date: "5/12/222",
  //   id: nanoid()
  // },{
  //   text: "amin",
  //   date: "5/12/222",
  //   id: nanoid()
  // },{
  //   text: "this is my note",
  //   date: "5/12/222",
  //   id: nanoid()
  // }])


  const addnote=(text)=>{
    const date = new Date();
    const newNote = {
      text:text,
      date:date.toLocaleDateString(),
      id:nanoid()
    }

    const newNotes = [...notes,newNote]
    setNotes(newNotes)

  }

  const deletenode=(id)=>{
    const newNotes = notes.filter((note)=>{ return note.id !== id})
    setNotes(newNotes)
  }

  const [search,setSearch] = useState('')

  const searchname=(e)=>{
      setSearch(e.target.value)

  }

  return (
    <div className="App">
      <Header/>
      <Search notes={notes} handleChange={searchname} search={search}/>
      <Notelist notes={notes} handleaddnote={addnote} handledeletenote={deletenode} search={search}/>
      
    </div>
  );
}

export default App;
