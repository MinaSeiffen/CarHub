"use client";

import { CustomButtonProps } from "@/types";
import Image from "next/image";

const CustomButton = ({title , containerStyles , handleClick , btnType , rightIcon , textStyles}: CustomButtonProps) => {
  return (
    <button onClick={handleClick} disabled={false} type={btnType ||"button"} className={`custom-btn ${containerStyles}`} >
        <span className={`flex-1 ${textStyles}`}>
            {title}
        </span>
        {rightIcon && (
          <div className="relative w-6 h-6 ">
            <Image src={rightIcon} fill alt="Right Icon" className="object-contain" />
          </div>
        )}
    </button>
  )
}

export default CustomButton