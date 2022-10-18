import { useState, useEffect } from "react"
import { getAllStarships } from "../../services/sw-api"
import { Link } from "react-router-dom"

const StarshipList = () => {
  const [starships, setStarships] = useState([])

  useEffect(() => {
    const fetchStarshipData = async () => {
      const starshipData = await getAllStarships()
      setStarships(starshipData.results)
    }
    fetchStarshipData()
  }, [])


  return (
    <>
      <div>
        <div >
      {starships.map(starship =>
      <div key={starship.name}> 
        <Link 
          className="starship-container"
          to='/starship'
          state={{ starship }}
        >
          <button>
          {starship.name}
          </button>
         </Link>
         </div>
      )}
        </div>
      </div>
    </>
  )
}

export default StarshipList;