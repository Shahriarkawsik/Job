import React from "react";
import { motion } from "motion/react";
import team1 from "../assets/team-1.jpg";
import team2 from "../assets/team-2.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-[550px]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img
            src={team1}
            animate={{
              y: [0, 50, 0],
            }}
            transition={{
              duration: 7,
              delay: 1,
              repeat: Infinity,
              bounce: 0.25,
            }}
            className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px]  shadow-2xl border-l-4 border-b-4 border-blue-400"
          />
          <motion.img
            src={team2}
            animate={{
              x: [100, 150, 100],
            }}
            transition={{
              duration: 7,
              delay: 1,
              repeat: Infinity,
              bounce: 0.25,
            }}
            className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px]  shadow-2xl border-l-4 border-b-4 border-blue-400"
          />
        </div>
        <div className="flex-1">
          <motion.h1
            animate={{ x: [0, 100, 0] }}
            transition={{
              duration: 5,
              delay: 1,
              ease: "linear",
              repeat: Infinity,
            }}
            className="text-5xl font-bold"
          >
            Latest{" "}
            <motion.span
              animate={{ color: ["#ecff33", "#33ffe3", "#ff6133"] }}
              transition={{
                duration: 5,
                delay: 1,
                ease: "linear",
                repeat: Infinity,
              }}
              className=""
            >
              jobs
            </motion.span>{" "}
            for you!
          </motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
