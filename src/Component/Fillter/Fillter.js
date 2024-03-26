
import React, { useState } from 'react'
// import { FaAngleDown } from "react-icons/fa6";
// import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion'
// import { Button } from '../Button/Button'
import { GoChevronDown } from "react-icons/go";
import { GoChevronUp } from "react-icons/go";
import { Button } from '../Button/Button';


export const Fillter = ({title,buttons}) => {
  const [open,useOpen]=useState(true)
   function ToggleState()
   {
     useOpen(!open)
   }

  return (
    <div>
      <div className='bg-white p-2 rounded my-2 py-3 '>
        <div onClick={ToggleState} className='d-flex justify-content-between align-item-center'>
          <div className='d-flex align-item-center gap-2 '>
            {open? <GoChevronDown/>:<GoChevronUp/>}
            <p className={`${open ? "g_text_light_red":"g_text_light_black "}`}> {title}</p>
             </div>
          <div>
            <p className='text-secondary'>Clear</p>
          </div>
        </div>
        {open &&<div className='mt-3 d-flex flex-wrap gap-2 '>
        {buttons.map((value) => {
        return <Button key={value} title={value} />
        })}
     </div>}

      </div>
    </div>
  )
}
