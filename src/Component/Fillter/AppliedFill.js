
import React from 'react'
import { Button } from '../Button/Button'

export const AppliedFill = ({title,buttons}) => {
  return (
    <div>
        <h5>{title}</h5>
        <div className='d-flex flex-wrap gap-2 mt-2  '>
            {buttons.map((eve,index)=>{
                return <Button isRounded={true}  key={index} title={eve}/>
            })}

        </div>
    </div>
  )
}
