import Image from "next/image";
import styles from "./page.module.css";
import { Analytics } from "@vercel/analytics/next";
import TimelineItem from './components/TimelineItem';
import timeline from './data/timeline.json';
import Resume from './components/Resume';
import UnderConstruction from './components/UnderConstruction';


export default function Home() {
  const showUnderConstruction = false;
  return (
    <>{showUnderConstruction ? <UnderConstruction /> : 

     /** Start of Main Page Code */
    <div className={styles.page}>
      <main className={styles.main}>
        {/* Vercel Analytics Added */}
        <Analytics />
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <Resume timeline={timeline} />
      </main>
     
    </div>
    }
    </> 
  );
}
