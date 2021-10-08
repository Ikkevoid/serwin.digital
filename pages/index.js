import { useState } from "react"
import Head from 'next/head'
import Navbar from '../components/Navbar'
import { Layout } from "../components/Layout"


export default function Home() {
  const [active, setActive] = useState()

  return (
    <>
      <Head>
        <title>Serwin.digital - profesjonalne i skuteczne usługi WWW</title>
        <meta name="title" content="Serwin.digital - profesjonalne i skuteczne usługi WWW" />
        <meta name="description" content="Strony WWW i sklepy internetowe z certyfikatem SSL, pozycjonowanie i grafika komputerowa. Zajmiemy się Twoim wizerunkiem w internecie." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.serwin.digital/" />
        <meta property="og:title" content="Serwin.digital - profesjonalne i skuteczne usługi WWW" />
        <meta property="og:description" content="Strony WWW i sklepy internetowe z certyfikatem SSL, pozycjonowanie i grafika komputerowa. Zajmiemy się Twoim wizerunkiem w internecie." />
        <meta property="og:image" content="https://www.serwin.digital/previewImage.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.serwin.digital/" />
        <meta property="twitter:title" content="Serwin.digital - profesjonalne i skuteczne usługi WWW" />
        <meta property="twitter:description" content="Strony WWW i sklepy internetowe z certyfikatem SSL, pozycjonowanie i grafika komputerowa. Zajmiemy się Twoim wizerunkiem w internecie." />
        <meta property="twitter:image" content="https://www.serwin.digital/previewImage.png" />
      </Head>

      <Navbar active={active} />

      <Layout setActive={setActive} />
    </>
  )
}
