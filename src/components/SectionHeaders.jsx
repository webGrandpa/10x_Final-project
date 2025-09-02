import React from 'react'
import Hr from './Hr'

const SectionHeaders = ({ header, paragraph, bgcolor, hasDivider = true, 
  textCenter = "center", padding = "py-20", rounded = 'none', 
  children, size = "text-3xl", pSize = "lg", gap = "4" }) => {
  return (
    <div className={`text-${textCenter} ${padding} 
    flex flex-col gap-${gap} ${bgcolor} rounded-${rounded} w-full`}>
        <h2 className={`${size} font-bold text-[#1B365D]`}>{header}</h2>
        {hasDivider && <Hr width={"w-20"}/>}
        <p className={`text-${pSize} text-[#374151b9] max-w-full md:max-w-[680px] text-${textCenter} self-center px-4 md:px-0`}>{paragraph}</p>
        
        <div className={`flex flex-col sm:flex-row gap-2.5 items-center justify-center`}>
            {children}
        </div>
    </div>
  )
}

export default SectionHeaders