import { Button } from "@/components/ui/button";
import ActiveBox from "@/components/utils/ActiveBox";
import { EDUCATION } from "@/lib/data/content/education";
import { cn } from "@/lib/utils";
import { Icon, IconProps } from "@iconify/react/dist/iconify.js";
import React from "react";
export interface EducationItemPropsI {
  date: string;
  degree: string;
  icon?: IconProps;
  place: string;
  field: string;
  className?: string;
}
const EducationItem = ({
  date,
  degree,
  place,
  field,
  className,
  icon = {
    icon: "basil:university-outline",
  },
}: EducationItemPropsI) => {
  return (
    <ActiveBox
      light={{
        className: cn("bg-green-500"),
      }}
      className="w-full    "
    >
      <div className={cn(className, "border rounded-xl w-full ")}>
        <div className={cn(" p-2 flex pe-4  items-center justify-between ")}>
          <span className=" rounded-xl max-w-fit flex items-center   gap-x-2 bg-gray-400/20 backdrop-blur-sm py-2 px-3   ">
            <Icon
              {...icon}
              className={cn("  size-6  text-green-600  ", icon.className)}
            />
            <span>{degree}</span>
          </span>

          <span className="font-bold text-green-600">{date}</span>
        </div>

        <div className="px-3 pb-3">
          <b>{field}</b> <span>{place}</span>
        </div>
      </div>
    </ActiveBox>
  );
};

const Education = () => {
  return (
    <div
      className={cn(
        "w-full grid sm:grid-cols-2 grid-cols-1 transition-all gap-x-8 gap-y-5"
      )}
    >
      {EDUCATION.map((item, index) => {
        const isOOD = index % 2 == 0;
        return (
          <EducationItem
            key={index}
            {...item}
            className={
              isOOD ? "animated-container" : "animated-container-reverse"
            }
          />
        );
      })}
    </div>
  );
};

export default Education;
