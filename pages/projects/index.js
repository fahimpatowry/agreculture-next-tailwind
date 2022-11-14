import Head from "next/head";
import Heros from "../../components/common/heros";
import Foooter from "../../components/foooter";
import Navigarion from "../../components/navigation";
import AllProjects from "../../components/project/allprojects";
import HerosImg from "/public/backgrounds/main-slider-1-1.jpg";

const HerosText = "Projects";

export default function Projects(){

    return(
        <div>
            <Head>
                <title>Services</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/loader.png" />
            </Head>

            <main>
                <Navigarion />
                <Heros 
                        herosimag = {HerosImg}
                        text = {HerosText}
                />
                
                <AllProjects />
            </main>

            <Foooter />
        </div>
    )
}