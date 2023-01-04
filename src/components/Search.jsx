

function Search(props) {

    // const [search,setSearch] = useState('')

    const searchname=(e)=>{
        props.handleChange(e)
    }

    return (
    <div className="container-search">
        <input type="text" value={props.search} onChange={searchname} placeholder="Search here" className="searchbar"/>
    </div>
    )
}

export default Search
