import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

const DropDown = ({trigger,label,onClick,item1,item2,item3,item4}) => {

  return (
    <DropdownMenu>
        <DropdownMenuTrigger>{trigger}</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>{label}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={()=>onClick}>{item1}</DropdownMenuItem>
          <DropdownMenuItem>{item2}</DropdownMenuItem>
          <DropdownMenuItem>{item3}</DropdownMenuItem>
          <DropdownMenuItem>{item4}</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
  )
}

export default DropDown