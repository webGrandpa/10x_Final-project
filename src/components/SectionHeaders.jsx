import React, { children } from 'react'
import Hr from './Hr'

const SectionHeaders = ({ header, paragraph, bgcolor, hasDivider = true, textCenter = "center", padding = "py-20", rounded = 'none', children, size = "3xl", pSize = "lg", gap = "4" }) => {
  return (
    <div className={`text-${textCenter} ${padding} flex flex-col gap-${gap} ${bgcolor} rounded-${rounded} `}>
        <h2 className={`text-${size} font-bold text-[#1B365D]`}>{header}</h2>
        {hasDivider && <Hr width={"w-20"}/>}
        <p className={`text-${pSize} text-[#374151b9] max-w-[680px] text-${textCenter} self-center`}>{paragraph}</p>
        <div className={`flex flex-row gap-2.5`}>
            {children}
        </div>
    </div>
  )
}

export default SectionHeaders