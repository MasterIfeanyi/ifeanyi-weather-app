import Header from "./components/Header"
import Card from "./components/Card"
import Footer from "./components/Footer"
import './App.css';
import { useState, useEffect } from "react"
import axios from "axios"


function App() {


  const [result, setResult] = useState({})
  const [city, setCity] = useState("")


  const getWeather = async () => {

    if (!city) return

    try {
      const apiKey = "41ade4ff907582d51d1618d3c47281e8"
      const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)

      setResult(data)
    } catch (err) {
      console.log(err.message)
    }
  }


  const cardStyle = {
    backgroundImage: `url(https://source.unsplash.com/1600x900/?${result.name})`,
    backgroundPosition: `center`,
    backgroundSize: `cover`
  }

  useEffect(() => {
    const getWeather = async (city) => {

      if (!city) return

      try {
        const apiKey = "41ade4ff907582d51d1618d3c47281e8"
        const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)

        setResult(data)
      } catch (err) {
        console.log(err.message)
      }
    }

    getWeather("denver")
  }, [])


  return (
    <main className="App">
      <Header />
      <section className="section" style={(typeof result !== "undefined") ? cardStyle : null}>
        <Card getWeather={getWeather} city={city} setCity={setCity} result={result} />
      </section>
      <Footer />
    </main>
  );
}

export default App;
