import React from 'react'
import { FaSearch } from "react-icons/fa"

const Card = ({ city, setCity, result, getWeather }) => {

    // const { name } = result
    // const { temp, humidity } = result.main
    // const { speed } = result.wind
    // const { icon, description } = result.weather[0]

    const handleSubmit = async (e) => {
        e.preventDefault();
        await getWeather();
        setCity("")
        return
    }



    // const textStyle = {
    //     color: `white`,
    //     fontSize: `1rem`,
    //     display: `inline-flex`,
    //     alignItems: `center`,
    //     justifyContent: `center`,
    //     fontWeight: `500`
    // }

    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-lg-6">
                    <div className="cardStyle">
                        <form onSubmit={handleSubmit} className="row">
                            <div className="form-group col-12 d-flex mb-2">
                                <input placeholder="search for a city" value={city} onChange={(e) => setCity(e.target.value)} type="text" className="form-control search-bar me-2" />
                                <button className='btn btn-primary' type="submit">
                                    <FaSearch />
                                </button>
                            </div>
                        </form>
                        {/* <img src="https://openweathermap.org/img/wn/04n.png" alt="" class="icon" /> */}
                        {(typeof result.main !== "undefined") ? (
                            <>
                                <div className="weather loading">
                                    <h3 className="city">Weather in {result.name}</h3>
                                    <div className="temp"><label htmlFor="" className="label">Temperature:</label> {Math.round(result.main.temp)}°C</div>
                                    <div className="d-flex">

                                        <img src={`https://openweathermap.org/img/wn/${result.weather[0].icon}.png`} alt="" className="icon" />
                                        <span className="description">{result.weather[0].description}</span>
                                    </div>
                                    <div className="humidity"><label className="label">Humidity:</label> {result.main.humidity}%</div>
                                    <div className="wind"><label htmlFor="" className="label">Wind speed:</label> {result.wind.speed} km/hr</div>
                                </div>
                            </>
                        ) : ("")}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card