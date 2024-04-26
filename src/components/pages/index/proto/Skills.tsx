// Importing necessary modules from their respective locations
import { Button } from "@/components/ui/button";
import ActiveBox from "@/components/utils/ActiveBox";
import { MY_SKILLS } from "@/lib/data/content/my-skills";
import { useLenis } from "@/lib/lenis";
import useGsapUpdate from "@/lib/storage/useGsapUpdate";
import { cn } from "@/lib/utils";
import { Icon, type IconProps } from "@iconify/react/dist/iconify.js";

import { useState } from "react";

// Defining the interface for the SkillItemProps
export interface SkillItemPropsI {
  icon: IconProps;
  title: string;
  /**
   * @example
   * "bg-purple-500  "
   */
  colorClassName?: string;
  groupIcon: IconProps;
  className?: string;
}

// Defining the functional component SkilItem using destructuring
const SkilItem = ({
  groupIcon,
  icon,
  title,
  colorClassName,
  className,
}: SkillItemPropsI) => (
  <ActiveBox
    light={{
      lightColor: colorClassName,
      lightSize: 200,
      className: "blur-3xl",
    }}
    className={"col-span-1 w-full min-h-16 "}
  >
    <div
      className={cn(
        "w-full p-5 border rounded-xl flex justify-between items-center",
        className
      )}
    >
      <div className="flex h-full gap-x-4 items-center ">
        <Icon {...icon} className={cn("size-8", icon.className)} />
        <span className="font-bold text-sm">{title}</span>
      </div>
      <Icon {...groupIcon} className={cn("size-6", groupIcon.className)} />
    </div>
  </ActiveBox>
);

// Defining the functional component Skills
const Skills = () => {
  const [limit, setLimit] = useState<boolean>(true);
  const { lenis } = useLenis();
  const {update}=useGsapUpdate()

  // Handler to toggle the limit and trigger resize after 500ms
  const showMoreHandler = () => {
    setLimit((prev) => !prev);

    // make sure that the items loaded in dom and scroll increased
    setTimeout(() => {
      lenis?.resize?.();
      update()
    }, 500);
  };

  return (
    <>
      <div
        className={cn(
          "w-full grid sm:grid-cols-4 grid-cols-1 transition-all gap-x-8 gap-y-4",
          limit ? "max-h-[400px] overflow-hidden" : ""
        )}
      >
        {/* Mapping through MY_SKILLS and rendering each skill item */}
        {MY_SKILLS.map((group, index) => {
          return group.children.map((skill, index) => (
            <SkilItem
              key={skill.title}
              {...skill}
              // Adding conditional classNames based on group type
              className={cn(
                index % 2 == 0
                  ? "animated-container"
                  : "animated-container-reverse",
                group.group == "TOOLS" && "border-purple-500/30",
                group.group == "SKILLS" && "border-primary/40",
                group.group == "EXPERIENCE" && "border-green-600/30"
              )}
            />
          ));
        })}
      </div>
      <div className="col-span-full flex justify-center">
        {/* Button to show more or less based on the limit state */}
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

// Exporting the Skills component as default
export default Skills;
