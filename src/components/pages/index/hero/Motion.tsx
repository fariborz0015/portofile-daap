/* eslint-disable @next/next/no-img-element */

import { gsap } from "gsap";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import React, { useEffect } from "react";

const Motion = () => {
  useEffect(() => {
    // The start and end positions in terms of the page scroll
    const offsetFromTop = innerHeight * 1;
    //@ts-ignore
    const pathBB = document.querySelector("#path").getBoundingClientRect();
    const startY = pathBB.top - innerHeight + offsetFromTop;
    const finishDistance = startY + pathBB.height - offsetFromTop;
    let requestId: any = null;
    // the animation to use
    var tween = gsap
      .to("#fazanavard", {
        duration: 5,
        paused: true,
        ease: "none",
        motionPath: {
          path: "#path",
          align: "#path",
          autoRotate: true,
          alignOrigin: [0.5, 0.5],
        },
      })
      .pause(0.001);

    // Listen to the scroll event
    document.addEventListener("scroll", function () {
      // Prevent the update from happening too often (throttle the scroll event)
      //@ts-ignore
      if (!requestId) {
        //@ts-ignore
        requestId = requestAnimationFrame(update);
      }
    });

    update();

    function update() {
      // Update our animation
      tween.progress((scrollY - startY) / finishDistance);

      // Let the scroll event fire again
      //@ts-ignore
      requestId = null;
    }

    return () => {
      update();
    };
  }, []);

  return (
    <>
      <img
        id="fazanavard"
        alt=""
        className=" absolute sm:w-[450px] w-[150px] sm:h-[300px] h-[100px] "
        src={"/assets/images/fazanavard.svg"}
      />
      <div className="h-1 overflow-hidden relative">
        <svg
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          height={"6000px"}
          width="100%"
          viewBox="0 0 1300 6000"
          className="absolute  "
        >
          <path
            id="path"
            d="M64.4,1.5C160.2,219.3,270.7,301,358,333.8c132.3,49.7,206.3-14.8,349.8,47.9
          c126,55,270.3,192.7,252,300.4c-23.8,139.6-296.2,87.1-565.1,311C251,1112.8,55.2,1355.5,88.9,1570
          c40.2,256.4,409.5,480,910.1,454.6c15.1,14.8,135.5,135.3,109.8,271c-22.4,118.5-221.9,91.7-477,230c-124.6,67.5-371.3,230-345,331
          c40.9,156.9,700.8,12.5,789,234c40.8,102.4-50,259.7-161,331c-170.4,109.5-313.7-31.8-569,51c-152.4,49.5-338.3,176.7-342,306
          c-5.9,204.6,392.1,473.5,709,424c108-16.9,193.9-68.8,266-20c75.5,51.1,113.1,197.2,61,281c-131.7,211.6-754.4-106.1-906,111
          c-75.9,108.7-18.4,329.2,107,408c224.7,141.2,580.9-227.5,728-103c91.3,77.3,74.9,321.8-50,444c-221.6,216.8-663.5-69.7-800,107
          c-99.1,128.2,3.2,448,206,601c262,197.6,570.8,25.4,697,212c75.2,111.2,53.7,302.9-43,390c-183.4,165.2-540.1-133.1-698,10
          c-153.7,139.3-44.8,629.7,192,723c183.1,72.1,348.6-130.1,475-43c119.9,82.6,131.8,375.6,0,497c-186.6,171.8-554.8-98.2-687,53
          c-94.5,108.1-48.8,408.7,169,528c153.9,84.3,352.7,55.7,486-74"
            stroke="black"
            strokeWidth="8"
          />
        </svg>
      </div>
    </>
  );
};

export default Motion;
