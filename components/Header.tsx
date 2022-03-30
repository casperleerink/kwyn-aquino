import Link from "next/link";
import { motion } from "framer-motion";
import { sideAppear } from "../lib/variants";
interface Props {
  className?: string;
}

const Header: React.FC<Props> = ({ className = "" }) => {
  return (
    <header className="p-9 md:px-28 md:py-16 lg:px-40 lg:py-24 max-w-screen-2xl mx-auto">
      <motion.div
        variants={sideAppear}
        initial="hide"
        whileInView="show"
        transition={{ duration: 0.6 }}
      >
        <Link href="/">
          <a className="text-xl md:text-3xl font-semibold uppercase">
            Kwyn Aquino
          </a>
        </Link>
      </motion.div>
      <motion.h5
        variants={sideAppear}
        initial="hide"
        whileInView="show"
        transition={{ delay: 0.05, duration: 0.6 }}
        className="text-xs md:text-base lg:text-xl"
      >
        Writer & Editor
      </motion.h5>
    </header>
  );
};

export default Header;
