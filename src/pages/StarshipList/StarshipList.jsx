import { useState, useEffect } from "react"
import { getAllStarships } from "../../services/sw-api"
import { Link } from "react-router-dom"

const StarshipList = () => {
  const [starships, setStarships] = useState([])

  useEffect(() => {
    const fetchStarshipData = async () => {
      const starshipData = await getAllStarships()
      setStarships(starshipData.results)
      console.log(starships)
    }
    fetchStarshipData()
  }, [])


  return (
    <>
      <div>
        <div >
      {starships.map(starship =>
      <div key={starship.name} className="starship-container">
        <Link 
          to='/starship'
          state={{ starship }}
        >
          {starship.name}
         </Link>
         </div>
        )}
        </div>
      </div>
    </>
  )
}

export default StarshipList;