import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

export default function Index({ time }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <main>
      <h1>SSR Caching with Next.js</h1>
      <time dateTime={time}>{time}</time>
      <p>New Cache API test with revalidate:10</p>
      {/* <p>Refresh the page, s-maxage=10s, stale-while-revalidate=60s.</p> */}
    </main>
  )
}

export const getServerSideProps: GetServerSideProps<{ time: string }> = async ({ res }) => {
  res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=60')
  const timeResponse = await fetch('https://timeapi.io/api/Time/current/zone?timeZone=Europe/Amsterdam', {
    next: { revalidate: 30 },
  }).then((res) => res.json())

  return {
    props: {
      time: timeResponse.dateTime,
    },
  }
}
