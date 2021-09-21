async function fetchLaunches(query) {

  let data = await fetch('https://api.spacex.land/graphql/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query
    })
  })
  
  const json = await data.json()

  return json.data.launchesPast
}


function getLaunches(limit) {
  //will create a query with a limit and convert the response data to this object:
  // {image, name, details, date, ref_link}
  // the result is a array with this objects
}

export {fetchLaunches, getLaunches}