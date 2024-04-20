import { Button } from "@/components/ui/button";
import ActiveBox from "@/components/utils/ActiveBox";
import { LANGUAGES } from "@/lib/data/content/languages";
import { cn } from "@/lib/utils";
import { strasua } from "@/lib/utils/fonts";
import { Icon, IconProps } from "@iconify/react/dist/iconify.js";
import React from "react";
export interface LanguageItemPropsI {
  description: string;
  symbol: string;
  icon?: IconProps;
  title: string;
  className?: string;
}
const LanguageItem = ({
  description,
  symbol,
  icon,
  title,
  className,
}: LanguageItemPropsI) => {
  return (
    <ActiveBox
      light={{
        className: cn("bg-primary rounded-xl"),
      }}
      className="w-full    "
    >
      <div className={cn(className, "border rounded-xl w-full  ")}>
        <div className={cn(" p-2 flex pe-4  items-center justify-between ")}>
          <span className=" rounded-xl max-w-fit flex items-center   gap-x-2  backdrop-blur-sm   px-3   ">
            <span className={cn("  text-3xl", strasua.className)}>
              {symbol}
            </span>
            <span className="text-lg">{title}</span>
          </span>

          <span className="font-bold text-green-600">
            {icon && (
              <Icon
                {...icon}
                className={cn("  size-6  text-green-600  ", icon.className)}
              />
            )}
          </span>
        </div>

        <div className="ps-5 pe-3 pb-3">{description}</div>
      </div>
    </ActiveBox>
  );
};

const Languages = () => {
  return (
    <div
      className={cn(
        "w-full grid sm:grid-cols-4 grid-cols-1 transition-all gap-x-8 gap-y-5"
      )}
    >
      {LANGUAGES.map((item, index) => {
        const isOOD = index % 2 == 0;
        return (
          <LanguageItem
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

export default Languages;
