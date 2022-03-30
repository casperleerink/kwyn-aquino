import PolkMobile from "../assets/polk-mobile-min.png";
import PolkTablet from "../assets/polk-tablet-min.jpg";
import PolkDesktop from "../assets/polk-desktop-min.png";
import CameraMobile from "../assets/camera-mobile-min.png";
import CameraTablet from "../assets/camera-tablet-min.jpg";
import CameraDesktop from "../assets/camera-desktop-min.png";
import EternalsMobile from "../assets/eternals-mobile-min.png";
import EternalsTablet from "../assets/eternals-tablet-min.jpg";
import EternalsDesktop from "../assets/eternals-desktop-min.png";
import Image from "next/image";
import { useWindowSize } from "usehooks-ts";
import { motion } from "framer-motion";
import { appear } from "../lib/variants";
import { useEffect, useState } from "react";
interface Props {
  className?: string;
}

const Showcase: React.FC<Props> = ({ className = "" }) => {
  const [lg, setLg] = useState(false);
  const [md, setMd] = useState(false);
  const { width } = useWindowSize();
  useEffect(() => {
    if (width >= 768) {
      setMd(true);
    } else {
      setMd(false);
    }
    if (width >= 1024) {
      setLg(true);
    } else {
      setLg(false);
    }
  }, [width]);
  if (width === 0) return null;
  return (
    <div className="w-full pt-10 space-y-16">
      <motion.div
        variants={appear}
        initial="hide"
        whileInView="show"
        transition={{ duration: 0.4 }}
        className="rounded"
      >
        {lg ? (
          <Image
            src={PolkDesktop}
            width={2844}
            height={896}
            className="rounded"
            alt="Polk"
            priority
          />
        ) : md ? (
          <Image
            src={PolkTablet}
            width={2031}
            height={880}
            className="rounded"
            alt="Polk"
            priority
          />
        ) : (
          <Image
            src={PolkMobile}
            width={750}
            height={768}
            className="rounded"
            alt="Polk"
            priority
          />
        )}
      </motion.div>
      <motion.div
        variants={appear}
        initial="hide"
        whileInView="show"
        transition={{ duration: 0.4 }}
        className="rounded"
      >
        {lg ? (
          <Image src={CameraDesktop} className="rounded" alt="Camera" />
        ) : md ? (
          <Image src={CameraTablet} className="rounded" alt="Camera" />
        ) : (
          <Image
            src={CameraMobile}
            width={750}
            height={741}
            className="rounded"
            alt="Camera"
          />
        )}
      </motion.div>
      <motion.div
        variants={appear}
        initial="hide"
        whileInView="show"
        transition={{ duration: 0.4 }}
        className="rounded"
      >
        {lg ? (
          <Image
            src={EternalsDesktop}
            className="rounded"
            alt="Eternals Screen Capture"
          />
        ) : md ? (
          <Image
            src={EternalsTablet}
            className="rounded"
            alt="Eternals Screen Capture"
          />
        ) : (
          <Image
            src={EternalsMobile}
            className="rounded"
            alt="Eternals Screen Capture"
          />
        )}
      </motion.div>
    </div>
  );
};

export default Showcase;
