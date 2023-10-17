import React from 'react'

type ButtonProps = {
    text: string,
    primary?: boolean,
    secondary?: boolean,
    fit?: boolean,
    full?: boolean,
    clickHandler?: () => void,
    classes?: string,
    isLoading?: boolean
}

const Button = ({text, primary, secondary, fit, full, clickHandler, classes, isLoading}: ButtonProps) => {
  return (
    <button
        onClick={clickHandler}
        disabled={isLoading}
        className={`
            rounded-full flex justify-center items-center text-[#333e48] font-semibold text-[16px] transition duration-300 py-3 px-6
            ${primary && "bg-[var(--yellowColor)] hover:bg-[#333e48] hover:text-white"} 
            ${secondary && "bg-[#e6e6e6] hover:bg-[var(--yellowColor)] "} 
            ${full ? "w-full" : "w-fit"}
            ${classes}
            ${isLoading && "cursor-not-allowed"}
        `}
    >
        {isLoading && <div className="w-5 h-5 border-2 border-slate-400 border-t-[#333e48] rounded-full animate-spin mr-2"></div>}
        {text}
    </button>
  )
}

export default Button