import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Showcase from "../components/Showcase";
import { motion } from "framer-motion";
import { sideAppear, appear } from "../lib/variants";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Kwyn Aquino</title>
        <meta
          name="description"
          content="Hello. I am Kwyn Aquino, a UX writer at Best Buy Canada."
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#fefefe" />
        <meta name="theme-color" content="#fefefe" />
      </Head>
      <Header />
      <main className="px-9 md:px-28 lg:px-40 max-w-screen-2xl mx-auto pb-20">
        <div className="pb-8 lg:pt-8 md:pb-16">
          <motion.h1
            variants={sideAppear}
            initial="hide"
            whileInView="show"
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-extrabold text-2xl md:text-4xl lg:text-6xl max-w-sm lg:max-w-2xl bg-gradient-to-r from-neutral-900 via-indigo-900 to-black text-transparent bg-clip-text"
          >
            Hello. I am Kwyn Aquino, a UX writer at Best Buy Canada.
          </motion.h1>
        </div>
        <Showcase />
        <div className="pt-10 md:pt-20">
          <motion.h5
            variants={sideAppear}
            initial="hide"
            whileInView="show"
            className="uppercase text-xs md:text-base py-4"
          >
            UX Writing
          </motion.h5>
          <motion.ul
            variants={appear}
            initial="hide"
            whileInView="show"
            className="font-light text-xl md:text-2xl"
          >
            <li>Touchpoint copy</li>
            <li>Facet labels</li>
            <li>Category labels</li>
            <li>CTAs</li>
            <li>Onsite ads</li>
            <li>Step-by-step guides</li>
            <li>Instruction emails</li>
            <li>Incident emails</li>
            <li>Research documentation</li>
          </motion.ul>
        </div>
        <div className="pt-10 md:pt-20">
          <motion.h5
            variants={sideAppear}
            initial="hide"
            whileInView="show"
            className="uppercase text-xs md:text-base py-4"
          >
            Experience
          </motion.h5>
          <motion.p
            variants={appear}
            initial="hide"
            whileInView="show"
            className="font-light text-xl md:text-2xl"
          >
            I write brief and brisk content for the boxes of web interfaces. At
            Best Buy Canada, I help users journey through dense product
            categories with ease. Before switching to UX writing, I created
            user-friendly online content as an editor at Lomography and
            international editions of Town&Country and Cosmopolitan.
          </motion.p>
        </div>
        <div className="pt-10 md:pt-20">
          <motion.h5
            variants={sideAppear}
            initial="hide"
            whileInView="show"
            className="uppercase text-xs md:text-base py-4"
          >
            Location
          </motion.h5>
          <motion.div
            variants={appear}
            initial="hide"
            whileInView="show"
            className="font-light text-xl md:text-2xl"
          >
            <h6>Vancouver BC</h6>
            <h6>Canada</h6>
          </motion.div>
        </div>
        <div className="pt-10 md:pt-20">
          <motion.h5
            variants={sideAppear}
            initial="hide"
            whileInView="show"
            className="uppercase text-xs md:text-base py-4"
          >
            Email
          </motion.h5>
          <motion.div
            variants={appear}
            initial="hide"
            whileInView="show"
            className="font-light text-xl md:text-2xl"
          >
            <a
              href="mailto:kwynaquino@gmail.com"
              className="transition-colors duration-300 hover:text-indigo-700"
            >
              kwynaquino@gmail.com
            </a>
            <p>Full UX portfolio upon request</p>
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default Home;
