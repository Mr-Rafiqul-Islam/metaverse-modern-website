'use client';

import { motion } from "framer-motion";
import styles from "@/styles";
import { fadeIn } from "@/utils/motion";

function InsightCard({index, imgUrl, title, subtitle}) {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 1)} className="flex md:flex-row flex-col gap-4">
      <img src={imgUrl} alt="planet" className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"/>
      <div className="w-full flex justify-between items-center gap-8">
        <div className="flex-1 flex-col flex md:ml:[62px] max-w-[650px] text-[26px]">
          <h4 className="text-white font-normal lg:text-[42px]">{title}</h4>
          <p className='mt-4 font-normal lg:text-[20px] text-[14px] text-secondary-white'>{subtitle}</p>
        </div>
        <div className='lg:flex hidden items-center justify-center rounded-full border border-white w-[100px] h-[100px]'>
          <img src="/arrow.svg" alt="arrow" className="w-[40%] H-[40%] object-contain" />
        </div>
      </div>
    </motion.div>
  )
}

export default InsightCard