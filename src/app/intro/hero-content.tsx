"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRive } from "@rive-app/react-canvas";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/20/solid";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

import { Button } from "../../components/ui/button";
import Link from "next/link";
import { useUpdatePath } from "@/lib/providers/path-provider";
import { TextGenerateEffect } from "@/components/style/text-generator-effect";
import { Describe } from "@/lib/constant";
import { Simple } from "@/components/ui/rive-component";

const HeroContent = () => {
  const { setPath } = useUpdatePath();
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className={`flex flex-col md:flex-row items-center justify-center mt-20 px-20 w-full z-[20] md:max-w-[800px] lg:max-w-[1000px] xl:max-w-full`}
    >
      <div
        className={`h-full w-full flex flex-col gap-5 justify-center text-start m-auto`}
      >
        <motion.div
          variants={slideInFromTop(0.2)}
          className={`Welcome-box py-2 px-4 border border-green-500 opacity-[0.9]`}
        >
          <SparklesIcon
            className={`h-5 w-5 text-green-500 inline-block mr-2`}
          />
          <h1 className={`text-[14px] text-washed-blue-400`}>
            Front-End Developer
          </h1>
        </motion.div>
        {/* Name and the running text */}
        <motion.div
          variants={slideInFromLeft(0.2)}
          className={`flex flex-col gap-6 mt-6 text-6xl text-bold text-slate-100 max-w-[750px] w-auto h-auto`}
        >
          <span
            className={`font-bold text-[16px] md:text-[32px] lg:text-[48px]`}
          >
            Tran Phong
          </span>
          <span
            className={`bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent font-bold
            text-[16px] md:text-[32px] lg:text-[48px]`}
          >
            Front-End Developer
          </span>
        </motion.div>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className={`text-sm md:text-lg lg:text-2xl text-gray-400 my-5 max-w-[600px] text-justify`}
        >
          <TextGenerateEffect words={Describe} />
        </motion.div>
        <motion.div
          variants={slideInFromLeft(10)}
          className={`text-lg text-gray-400 my-5 max-w-[600px]`}
        >
          <Link href={`/about-me`} className={`group block`}>
            <Button
              onClick={() => setPath("/about-me")}
              className="
              relative h-[50px] w-56 overflow-hidden border border-green-500 bg-black px-3 text-green-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-green-500 before:transition-all before:duration-300 hover:text-white hover:shadow-green-500 hover:bg-black hover:before:left-0 hover:before:w-full"
            >
              <span
                className={`text-white group-hover:text-black relative z-10`}
              >
                Read Full My Bio
              </span>
              <LiaLongArrowAltRightSolid
                className={`text-white group-hover:text-black items-center justify-center relative z-10`}
              />
            </Button>
          </Link>
        </motion.div>
      </div>
      <motion.div
        variants={slideInFromRight(1)}
        className={`flex flex-col gap-5 justify-center items-center`}
      >
        <div className={`flex-1 flex justify-center items-center`}>
          <div
            className={`
              md:w-[300px]
              md:h-[300px]
              lg:w-[400px]
              lg:h-[400px]
              xl:w-[500px]
              xl:h-[500px]
              2xl:w-[600px]
              2xl:h-[600px]
              hidden md:flex justify-center items-center
            `}
            style={{ transform: "scale(1)" }}
          >
            <Simple />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
