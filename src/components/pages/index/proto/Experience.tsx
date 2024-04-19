import { Button } from "@/components/ui/button";
import ActiveBox from "@/components/utils/ActiveBox";
import { MY_COMPANIES } from "@/lib/data/content/my-comapnies";
import { useLenis } from "@/lib/lenis";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import React, { useState } from "react";

export interface ExperienceItemI {
  title: string;
  logo: string;
  website: string;
  comments: string[];
}
const ExperienceItem = ({
  comments,
  logo,
  title,
  website,
}: ExperienceItemI) => {
  return (
    <div className="col-span-1 w-full space-y-4 ">
      <Button
        className="w-full !h-fit  animated-container rounded-xl flex justify-start items-center "
        variant={"glass"}
      >
        <Image
          width={60}
          height={60}
          alt=""
          src={logo}
          className=" rounded-xl relative"
        />
        <span className="text-xl">{title}</span>
      </Button>

      <>
        {comments.map((comment, index) => {
          let isLast = index + 1 == comments.length;
          let isOod = index % 2 == 0;
          return (
            <ActiveBox
              light={{
                className: cn("bg-green-500", isLast && "bg-primary"),
              }}
              key={comment}
              className="w-full    flex items-center"
            >
              <div
                className={cn(
                  isOod ? "animated-container" : "animated-container-reverse",
                  "w-full  px-4 pt-3 pb-2   h-fit border rounded-xl "
                )}
              >
                <span className="inline-block align-middle ">
                  <Icon
                    icon={isLast ? "tabler:code" : "tabler:checkbox"}
                    className={cn(
                      "mr-1 mb-2 size-6  text-green-600 align-middle",
                      isLast && "text-primary"
                    )}
                  />
                </span>
                <span className="line"> {comment}</span>
              </div>
            </ActiveBox>
          );
        })}
      </>
    </div>
  );
};

const Experience = () => {
  const [limit, setLimit] = useState<boolean>(true);
  const { update: updateLenis } = useLenis();
  const showMoreHandler = () => {
    setLimit((prev) => !prev);
    updateLenis();
  };
  return (
    <>
      <div
        className={cn(
          "w-full grid sm:grid-cols-2 grid-cols-1 transition-all gap-x-8 gap-y-5",

          limit ? "max-h-[400px] overflow-hidden" : ""
        )}
      >
        {MY_COMPANIES.map((company) => (
          <ExperienceItem {...company} key={company.title} />
        ))}
      </div>

      <div className="col-span-full flex justify-center">
        <Button
          onClick={showMoreHandler}
          variant={"glass"}
          className="w-96 h-14 mt-8"
          icon={{
            icon: limit
              ? "line-md:chevron-double-down"
              : "line-md:chevron-double-up",
          }}
        >
          {limit ? "See More" : "See Less"}
        </Button>
      </div>
    </>
  );
};

export default Experience;
