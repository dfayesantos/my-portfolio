import Image from "next/image";
import styles from "./page.module.css";
import { Analytics } from "@vercel/analytics/next";
import TimelineItem from './components/TimelineItem';
import timeline from './data/timeline.json';
import Resume from './components/Resume';
import Home from './components/Home';
import Nav from './components/Nav';
import UnderConstruction from './components/UnderConstruction';


export default function Portfolio() {
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
  <Nav />
  <Home />
        <section id="resume" className="mt-8">
          <Resume timeline={timeline} />
        </section>
        <section id="contact" className="mt-8 max-w-4xl mx-auto px-4">
          <h2 className="text-xl font-semibold">Contact</h2>
          <p className="text-slate-600">You can reach me at <a href="mailto:dfayesantos@gmail.com" className="text-[#4C6AC4]">dfayesantos@gmail.com</a></p>
        </section>
      </main>
     
    </div>
    }
    </> 
  );
}
