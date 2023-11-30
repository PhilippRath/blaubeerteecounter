import { useState, useEffect } from 'react'
import './App.css'
import blaubeerteelogo from './assets/blaubeertee_schmackhaft.png'
import InfoCard from './components/infocard.jsx'

function App() {
  const [count, setCount] = useState(0) // liefert Array zurück
  const [wetter, setWetter] = useState("snow")

  let {id, name, Fahrzeug} = {id: 1, name: "Max", Fahrzeug: "Auto"} // Objektdestrukturierung

  // [count, setCount] destrukturiert das Array,
  // count = Wert, setCount = Funktion, die den Wert ändert 

  const wetterApiUrl = 'https://api.sfz-cowerk.de/wetter/'
  const edekaLink = 'https://www.edeka.de/eh/nordbayern-sachsen-th%C3%BCringen/edeka-r%C3%BCbsam-flemmingstra%C3%9Fe-59/angebote.jsp'
  
  useEffect(() => {
    fetch(wetterApiUrl)
      .then((res) => res.json())
      .then((data) => {
        setWetter(data.Headline.Category)
        console.log(data.Headline.Category)
      })
      console.log('useEffect')
  }, [])

  const blueberryFly = () => {
    console.log('Herzlichen Glückwunsch die Blaubeere fliegt.')
    return true 
  }
  
  const countHandler = () => {
    if( (count + 1) % 10 === 0) { 
      blueberryFly() 
    }

    return setCount((count) => count + 1)
  }

  return (
    <>
      <div>
        <a href={edekaLink} target="_blank">
          <img src={blaubeerteelogo} className="logo react" alt="Lecker Schmecker Blaubeertee (JETZT BEI EDEKA KAUFEN)" />
        </a>
      </div>
      <h1>Getrunkene Blaubeerteetassen</h1>
      <InfoCard link={edekaLink} wetter={wetter}/>
      <div className="card">
        <button onClick={countHandler}>
          Du hast { count <= 5 ? `erst ${count} Tassen` : `schon ${count} Tassen`} getrunken.
        </button>
        <p>
          made with 🫐🫖
        </p>
      </div>
    </>
  )
}

export default App
