import request from 'superagent'

const serverURL = 'https://www.thecocktaildb.com/api/json/v1/1/'

export function getCocktailApi() {
  return request
    .get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic`)
    .then((response) => response.body)
}

export function getIngredientByName(name) {
  console.log('hi')
  return request
    .get(`${serverURL}search.php?i=${name}`)
    .then((response) => response.body)
}
