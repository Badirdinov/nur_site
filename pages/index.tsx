import KinoZal from '@/components/KinoZal'
import Main from '@/components/Main'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ГЛАВНАЯ</title>
      </Head>
      <Main />
      <KinoZal />
    </>
  )
}
