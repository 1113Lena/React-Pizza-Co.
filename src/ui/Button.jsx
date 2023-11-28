import React from 'react'
import { Link } from 'react-router-dom'

export default function Button({children,disabled,to,type,onClick}) {
   

  const base="text-sm bg-yellow-400 uppercase font-semibold text-stone-800  inline-block tracking-wide rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300  focus:bg-yellow-300 focus:ring-offset-2 active:bg-slate-400 disabled:cursor-not-allowed ";
  const styles={
   
    primary:base+" px-4 py-3 md:px-6 md:py-4",
    small:base+" px-4 py-2 sm:px-5 sm:py-2.5 text-xs",
    round:base+" px-2.5 py-1 sm:px-3.5 sm:py-2 text-sm",
    secondary:" text-sm px-4 py-2.5 md:px-6 md:py-3.5 border-2 border-stone-300 bg-tranparent uppercase font-semibold text-stone-400  inline-block tracking-wide rounded-full hover:bg-stone-300 hover:text-stone-800 transition-colors duration-300 focus:outline-none focus:ring focus:ring-stone-200  focus:bg-yellow-300 focus:ring-offset-2 focus:text-stone-800 active:bg-slate-400 disabled:cursor-not-allowed"

  } 
  if(to) 
    return (
        <Link to={to} className={styles[type]}>{children}</Link>
    )
  if(onClick)
  return (
    <button onClick={onClick} disabled={disabled} className={styles[type]}>
      {children}
    </button>
  )


  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  )
}
