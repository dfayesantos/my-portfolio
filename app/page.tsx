import Image from "next/image";
import styles from "./page.module.css";
import { Analytics } from "@vercel/analytics/next";
import TimelineItem from './components/TimelineItem';
import timeline from './data/timeline.json';
import Resume from './components/Resume';
import Home from './components/Home';
import Nav from './components/Nav';
import UnderConstruction from './components/UnderConstruction';
import Contact from './components/Contact';


export default function Portfolio() {
  const showUnderConstruction = false;
  return (
    <>{showUnderConstruction ? <UnderConstruction /> : 

     /** Start of Main Page Code */
    <div className={styles.page}>
      <main className={styles.main}>
        {/* Vercel Analytics Added */}
        <Analytics />
        <Nav />
        <Home />
        <section id="resume" className="mt-8">
          <Resume timeline={timeline} />
        </section>
        <Contact />
      </main>
     
    </div>
    }
    </> 
  );
}
