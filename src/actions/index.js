export function fetchCars(garage) {
  const promise = fetch(`https://wagon-garage-api.herokuapp.com/${garage}/cars`)
    .then((response) => response.json())
    .then((data) => data);

  return {
    type: "SET_CARS",
    payload: promise
  }
}

export function fetchCar(id) {
  const promise = fetch(`https://wagon-garage-api.herokuapp.com/cars/${id}`)
    .then((response) => response.json())
    .then((data) => data);

  return {
    type: "SET_CAR",
    payload: promise
  }
}

export function createCar(garage, body, callback) {
  const promise = fetch(`https://wagon-garage-api.herokuapp.com/${garage}/cars`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  }).then(response => response.json())
    .then(callback)

  return {
    type: "CAR_CREATED",
    payload: promise
  }
}

export function deleteCar(id, callback) {
  const promise = fetch(`https://wagon-garage-api.herokuapp.com/cars/${id}`, {
    method: 'DELETE'
  }).then(response => response.json())
    .then(callback)

  return {
    type: "CAR_DELETED",
    payload: promise
  }
}
