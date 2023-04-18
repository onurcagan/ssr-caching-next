import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

export default function Index({ time }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <main>
      <h1>SSR Caching with Next.js</h1>
      <time dateTime={time}>{time}</time>
    </main>
  )
}

export const getServerSideProps: GetServerSideProps<{ time: string }> = async () => {
  return {
    props: {
      time: new Date().toISOString(),
    },
  }
}
