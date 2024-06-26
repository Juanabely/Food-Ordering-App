import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

const DropDown = ({trigger,label,dropDowns}) => {

  return (
    <DropdownMenu>
        <DropdownMenuTrigger>{trigger}</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>{label}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {dropDowns}
        </DropdownMenuContent>
      </DropdownMenu>
  )
}

export default DropDown