async function getTime() {
  const data = await fetch('https://timeapi.io/api/Time/current/zone?timeZone=Europe/Amsterdam', {
    next: { revalidate: 10 },
  })
  return data.json()
}

export default async function Index() {
  const { dateTime } = await getTime()
  return (
    <main>
      <h1>SSR Caching with Next.js</h1>
      <time>{dateTime}</time>
      <p>New Cache API test with revalidate:10</p>
    </main>
  )
}
