"use client";
import * as React from "react";
import { cn } from "/Users/home/TechNova/src/utils/cn.ts";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const radius = 100; // change this to increase the radius of the hover effect
    const [visible, setVisible] = React.useState(false);

    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: any) {
      let { left, top } = currentTarget.getBoundingClientRect();

      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }
    return (
      <motion.div
        style={{
          background: useMotionTemplate`
        radial-gradient(
          ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
          var(--tw-blue-500),
          transparent 80%
        )
      `,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="tw-p-[2px] tw-rounded-lg tw-transition tw-duration-300 tw-group/input"
      >
        <input
          type={type}
          className={cn(
            `tw-flex tw-h-10 tw-w-full tw-border-none tw-bg-gray-50 tw-dark:bg-zinc-800 tw-text-black tw-dark:text-white tw-shadow-input tw-rounded-md tw-px-3 tw-py-2 tw-text-sm tw-file:border-0 tw-file:bg-transparent 
          tw-file:text-sm tw-file:font-medium tw-placeholder:text-neutral-400 tw-dark:placeholder-text-neutral-600 
          tw-focus-visible:outline-none tw-focus-visible:ring-[2px]  tw-focus-visible:ring-neutral-400 tw-dark:focus-visible:ring-neutral-600
           tw-disabled:cursor-not-allowed tw-disabled:opacity-50
           tw-dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
           tw-group-hover/input:shadow-none tw-transition tw-duration-400
           `,
            className
          )}
          ref={ref}
          {...props}
        />
      </motion.div>
    );
  }
);
Input.displayName = "Input";

export { Input };
