"use client";

import { motion } from "framer-motion";
import styles from "@/styles";
import { footerVariants } from "@/utils/motion";
import { socials } from "@/constants";

function Footer() {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.paddings} py-8 relative`}
    >
      <div className="footer-gradient" />
      <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
        <div className="flex justify-between items-center gap-5 flex-wrap">
          <h4 className="font-bold md:text-[64px] text-[44px] text-white">
            Enter the Metaverse{" "}
          </h4>
          <button
            type="button"
            className="flex items-center h-fit py-4 px-6 bg-[#25618b] rounded-[32px] gap-[12px]"
          >
            <img
              src="/headset.svg"
              alt="headset"
              className="w-6 h-6 object-contain"
            />
            <span className="font-normal text-base text-white">
              ENTER METAVERSUS
            </span>
          </button>
        </div>
        <div className="flex flex-col">
          <div className="mb-[50px] h-[2px] bg-white opacity-10" />
          <div className="flex justify-between items-center flex-wrap gap-4">
            <h4 className="font-extrabold text-2xl text-white">Metaversus</h4>
            <p className="font-normal text-[14px] text-white opacity-50">Copyright © 2021 - 2022 Metaversus. All rights reserved.</p>
            <div className='flex  gap-4'>
              {socials.map((social,i)=>(
                <img src={social.url} key={i}  alt={social.name}
                className='w-6 h-6 object-contain cursor-pointer'/>
              ))

              }
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
