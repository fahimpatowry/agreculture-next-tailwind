import Head from 'next/head';
import CatOn from '../components/home-page/CrtOn';
import Foooter from '../components/foooter';
import Navigarion from '../components/navigation';
import Heros from '../components/home-page/heros';
import OverView from '../components/home-page/overview';
import Services from '../components/home-page/service';
import TotalCounter from '../components/home-page/totalcounter';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/loader.png" />
      </Head>

      <main>
        <Navigarion />
        <Heros />
        <OverView />
        <Services />
        <TotalCounter />
        <CatOn />
      </main>

      <Foooter />
    </div>
  )
}
