import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { getGlassType } from './apiClient'

function GlassCocktail(props) {
  const { name } = props
  const [details, setDetails] = useState({ loading: true })

  useEffect(() => {
    getGlassType('Cocktail_glass')
      .then((data) => {
        console.log(data.body.drinks)
        setDetails({ data: data.body.drinks })
      })
      .catch((err) => {
        setDetails({ error: err.message })
      })
  }, [])
  {
    console.log(details)
  }
  return (
    <>
      {console.log(details)}

      <ul>
        {details.loading ? (
          <p>Loading...</p>
        ) : (
          details.data.map((drinks) => (
            <div key={drinks.idDrink}>
              <li key={drinks.idDrink}>{drinks.strDrink}</li>
              <img src={drinks.strDrinkThumb} alt={`A "${drinks.strDrink}"`} />
            </div>
          ))
        )}
      </ul>
    </>
  )
}

export default GlassCocktail
