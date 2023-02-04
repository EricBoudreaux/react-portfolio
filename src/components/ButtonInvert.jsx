import React from 'react'

const Button = ({ text }) => {

  return (
    <>
        <button className="btn2 py-2 px-3 relative border-2 border-black font-semibold tracking-wider leading-none overflow-hidden hover:text-white" type="button">
            <span class="absolute inset-0 bg-black"></span>
            <span class="absolute inset-0 flex justify-center items-center font-light text-black hover:text-white hover:font-bold ease-in duration-200"> 
        {text}
            </span>
      {text}
        </button>
    </>
  )
}

export default Button