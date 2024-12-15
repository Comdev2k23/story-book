'use client'

import React from "react";
import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

import Image from "next/image";
import Link from "next/link";

const pages = [
  { title: "Barnaby Frog", content: "Welcome to Barnaby's World", image: "/cover.png" },
  { title: "Page 1", content: "Barnaby's journey begins here.", image: "/1.png" },
  { title: "Page 2", content: "A beautiful day by the farm.", image: "/2.png" },
  { title: "Page 3", content: "Sing like a bee.", image: "/3.png" },
  { title: "Page 4", content: "Scared from his weakness.", image: "/4.png" },
  { title: "Page 5", content: "Barnaby's courage grows.", image: "/5.png" },
  { title: "Page 6", content: "The waive of water.", image: "/6.png" },
  { title: "Page 7", content: "A challenge to overcome.", image: "/7.png" },
  { title: "Page 8", content: "Discovering hidden talent.", image: "/8.png" },
  { title: "Page 9", content: "Returning home.", image: "/9.png" },
  { title: "Page 10", content: "Sharing stories.", image: "/10.png" },
  { title: "The End", content: "The End of Barnaby's Journey.", image: "/11.png" },
];

function BarnabyFrog() {
  const [currentPage, setCurrentPage] = useState(0);

  const animationProps = useSpring({
    to: { opacity: 1, transform: "rotateY(0deg)" },
    from: { opacity: 0, transform: "rotateY(90deg)" },
    reset: true,
    delay: 300,
  });

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="h-screen bg-[#f9f4f0] flex items-center justify-center">
      <div className="max-w-2xl w-full shadow-xl bg-white rounded-lg p-6 relative">
        <h1 className="text-4xl font-carelia text-center text-[#605048]">
          {pages[currentPage].title}
        </h1>

        <animated.div
          style={animationProps}
          className="mt-6 flex justify-center items-center"
        >
          <Image
            src={pages[currentPage].image}
            alt={pages[currentPage].title}
            width={400}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </animated.div>

        <p className="mt-4 text-center text-lg text-[#7a6b63]">
          {pages[currentPage].content}
        </p>

        <div className="flex justify-between mt-6">
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            className={`px-4 py-2 rounded-md bg-[#d3c4b7] text-[#605048] hover:bg-[#c5b3a6] 
              ${currentPage === 0 && "opacity-50 cursor-not-allowed"}`}
          >
            Previous
          </button>
          <button
            onClick={nextPage}
            disabled={currentPage === pages.length - 1}
            className={`px-4 py-2 rounded-md bg-[#d3c4b7] text-[#605048] hover:bg-[#c5b3a6] 
              ${currentPage === pages.length - 1 && "opacity-50 cursor-not-allowed"}`}
          >
            Next
          </button>
        </div>
        <Link href='/'><p className="text-center underline text-[#605048]">back to home</p></Link>
      </div>
    </div>
  );
}

export default BarnabyFrog;
