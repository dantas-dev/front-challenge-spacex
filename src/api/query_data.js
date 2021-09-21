async function fetchLaunches (query) {
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

async function getLaunches (limit) {
  const query = `
  query {
  launchesPast(limit: ${limit}) {
    mission_name
    launch_date_local
    links {
      article_link
      video_link
    }
    ships {
      image
    }
    details
  }
}
`
  try {
    const launches = await fetchLaunches(query)
    return translateLaunchesObject(launches)
  } catch (err) {
    return []
  }
}

function translateLaunchesObject (launches) {
  return launches.map(launch => {
    let image = null
    let ref_link = launch.links.article_link || launch.links.video_link
    let ships = launch.ships
    if (ships.length > 0) {
      image = ships[Math.floor(Math.random() * ships.length)].image
    }

    return {
      details: launch.details,
      name: launch.mission_name,
      image,
      ref_link,
      date: new Date(launch.launch_date_local).toDateString()
    }
  })
}

export { fetchLaunches, getLaunches }
