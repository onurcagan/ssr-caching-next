import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

export default function Index({ time }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <main>
      <h1>SSR Caching with Next.js</h1>
      <time dateTime={time}>{time}</time>
      <p>Refresh the page, s-maxage=10s, stale-while-revalidate=60s.</p>
    </main>
  )
}

export const getServerSideProps: GetServerSideProps<{ time: string }> = async ({ res }) => {
  res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=60')
  return {
    props: {
      time: new Date().toISOString(),
    },
  }
}
