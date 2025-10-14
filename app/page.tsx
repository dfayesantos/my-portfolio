import Image from "next/image";
import styles from "./page.module.css";
import { Analytics } from "@vercel/analytics/next";
import TimelineItem from './components/TimelineItem';
import timeline from './data/timeline.json';
import UnderConstruction from './components/UnderConstruction';


export default function Home() {
  const showUnderConstruction = true; // your truthy variable here
  return (
    <>{showUnderConstruction ? <UnderConstruction /> : 

        /** Start of Main Page Code */
    <div className={styles.page}>
      <main className={styles.main}>
        <Analytics />
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[8.75rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
          {Array.isArray(timeline) && timeline.map((item, idx) => (
            <TimelineItem key={idx} item={item} />
          ))}

        </div>

      </main>
     
    </div>
}
    </>
    
  );
}
