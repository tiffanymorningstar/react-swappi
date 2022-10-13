import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { getStarshipDetails } from "../../services/sw-api"

const StarshipPage = () => {
  const [starshipPage, setStarshipPage] = useState([])

const location = useLocation()

useEffect(() => {
const fetchStarshipDetails = async () => {
   const starshipData = await getStarshipDetails(location.state.starship.url)
   setStarshipPage(starshipData)
}
   fetchStarshipDetails()
}, [location.state.starship.url])

  return ( 
    <>
   <div className="starship-details-container">
      <h2>Name:{starshipPage.name}</h2>
      <h2>Model:{starshipPage.model}</h2>
   </div>     
   </>
   );
}
 
export default StarshipPage;