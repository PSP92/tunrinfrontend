import AllSongs from "./pages/AllSongs"
import OneSong from "./pages/OneSong"
import Form from "./pages/Form"
import {useState, useEffect} from "react"
import {Route, Switch, Link} from "react-router-dom"


function App(props) {
  /////////////////
  // Style Objects
  /////////////////
  
  const header = {
    textAlign: "",
    margin: "6px 21px 12px 6px",
    fontFamily: "Oswald, sans-serif ",
    color:"black",
    fontWeight:"bold",
    textShadow:"2px 2px gray",
    width:"80%"
 
  };
  const h4 ={
    textAlign:"right",
    fontFamily: "Nixie One",
    color:"black",
    borderBottom:"4px solid #A93E55",
    // width:"80%"

  }
  const playlists = {
    color:"black",
    margin: "10px auto",
    fontWeight:"bold",
    fontFamily: "Oswald, sans-serif ",
  

  }
  const button = {
    backgroundColor: "#A93E55",
    display: "block",
    margin: "auto",
    borderRadius:"5px"
  }
  /////////////////////
  // State & Other Variables
  /////////////////////
  const url = "https://turnin3.herokuapp.com/tuneins/"

  const [posts, setPosts] = useState([])

  // emply table
  const nullTunein = {
    title: "",
    artist: "",
    time:""
  }
  // this is for updating so the app know what I want to update(target). then add a function to set this state gettargetTunein
  const [targetTunein, setTargetTunein] = useState(nullTunein)
  /////////////////
  // Functions
  /////////////////
  const getTuneins = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setPosts(data)
  }

  const addTuneins = async (newTunein) => {
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(newTunein)
    })
    getTuneins()
  }
  const getTargetTunein = (tunein) => {
    setTargetTunein(tunein)
    props.history.push("/edit")
  }
  const updateTunein = async (tunein) => {
    await fetch(url + tunein.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(tunein)
    })
    getTuneins()
  }
  
  const deleteTunein = async (tunein) => {
    await fetch(url + tunein.id, {
      method: "delete"
    })
    getTuneins()
    props.history.push("/")
  }
  /////////////////
  // useEffects
  /////////////////
  useEffect(() => {getTuneins()}, [])


  return (
    <div className="App">
      <h1 style={header}>TUNR.</h1><p style={h4}>FOR ALL YOUR PLAYLIST NEEDS</p>
      <h2 style={playlists}>PLAYLIST 1</h2>
      <Link to="/new"><button style={button}>New Song</button></Link>
      <Switch>
        <Route
          exact
          path="/"
          render={(rp) => <AllSongs {...rp} posts={posts} />}
         
        />
        
          <Route
          path="/post/:id"
          render={(rp) => <OneSong 
            {...rp} 
            posts={posts}
            edit={getTargetTunein} 
            deleteTunein={deleteTunein}
            />}
        />
       <Route path="/new" render={(rp) => <Form
         {...rp} 
         initialTunein={nullTunein}
         handleSubmit={addTuneins}
         buttonLabel="create song"
         />} />
         <Route path="/edit" render={(rp) => <Form 
        {...rp} 
        initialTunein={targetTunein}
        handleSubmit={updateTunein}
        buttonLabel="update song"
        />} />
      </Switch>
    </div>
  );
}


export default App;