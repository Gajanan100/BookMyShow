
import React from 'react'

export const Button = ({title,isRounded=false, btnType="solid"}) => {
  switch (btnType) {
    case "outline":
        return <button className={`border rounded-2 py-2  w-100 ${isRounded ? "rounded-pill px-3" : ""} bg-white g_card_text .g_font_12 px-2 py-1 `}>{title}</button>
    default:
        return (
            <button className={`border ${isRounded ? "rounded-pill px-3" : ""} bg-white g_card_text  g_font_12 px-2 py-1 `}>{title}</button>
        )
}
}
