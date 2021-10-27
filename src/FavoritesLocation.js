import React from 'react'
import { useSelector } from 'react-redux'
import SearchLocation from './components/searchLocation'


export default function FavoritesLocation() {
    const locations = useSelector((state)=> state.locations.value)
   
   
    return (
      <div >
            <h1>Favorites places</h1>

              <SearchLocation/>
                


            <div>
        <h2>Locations</h2>
        <h2>{locations.city}</h2>
            <p>Temperature: {locations.temperature}%</p>
            <p>Wind: {locations.wind}km/h</p>
            <p>Humidity: {locations.humidity}%</p>
        <table>
          <thead>
          <tr>
            <th>Name</th>
          </tr>
          </thead>
          <tbody>
          <tr><td>Belfast</td></tr>
          <tr><td>New York</td></tr>
          </tbody>
        </table>
      </div>
    </div>

            

    )
}
