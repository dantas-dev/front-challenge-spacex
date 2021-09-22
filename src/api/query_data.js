const DEFAULT_IMAGE = 'https://i.imgur.com/6Cv9SoC.jpg'

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
  if (limit <= 0) return []

  const query = `
  query {
  launchesPast(limit: ${limit}) {
    mission_name
    launch_date_local
    links {
      article_link
      video_link
      flickr_images
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
    let image = DEFAULT_IMAGE
    const ref_link = launch.links.article_link || launch.links.video_link
    const images = launch.links.flickr_images.filter(img => img)
    if (images.length > 0) {
      image = images.sort(() => 0.5 - Math.random())[0]
    }

    return {
      details: launch.details || 'no details yet',
      name: launch.mission_name,
      image,
      ref_link,
      date: new Date(launch.launch_date_local).toDateString()
    }
  })
}

export { fetchLaunches, getLaunches }
