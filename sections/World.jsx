"use client";

import { motion } from "framer-motion";
import styles from "@/styles";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { TitleText, TypingText } from "@/components";

function World() {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        className={`${styles.innerWidth} mx-auto flex flex-col`}
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <TypingText title="| People on the World" textStyles="text-center" />
        <TitleText
          title={
            <>
              Track friends around you and invite them to play together in the
              same world
            </>
          }
          textStyles="text-center"
        />

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="relative mt-[68px] flex h-[550px] w-full"
        >
          <img
            src="/map.png"
            alt="map"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-14 right-5 md:bottom-20 md:right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
            <img src="/people-01.png" alt="people1" className="w-full h-full" />
          </div>
          <div className="absolute top-5 left-5 md:top-10 md:left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
            <img src="/people-02.png" alt="people2" className="w-full h-full" />
          </div>
          <div className="absolute left-[40%] top-1/2 -translate-y-1/2 md:left-[44%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
            <img src="/people-03.png" alt="people3" className="w-full h-full" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default World;
