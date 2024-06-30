import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { AuthContext } from "@/lib/context/AuthProvider"
import { useContext, useState } from "react"
  
  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
  ]
  
  export default function TablesOrders({tablescaption,tableHead1,tableHead2,tableHead3,tableHead4,data,total}) {
    console.log(data)
    console.log(total)
    
    return (
      <Table>
        <TableCaption>{tablescaption}</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>{tableHead1}</TableHead>
            <TableHead>{tableHead2}</TableHead>
            <TableHead className="text-right">{tableHead3}</TableHead>
            <TableHead className="text-right font-bold">Grand Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item,index) => (
            <>
            <TableRow key={item.id ? item.id : index}>
              <TableCell className="font-medium">INV{item.id ? item.id : index}</TableCell>
              <TableCell>{item.food_name}</TableCell>
              <TableCell>{'__.__'}</TableCell>
              <TableCell className="text-right">{item.food_price}</TableCell>
            <TableCell className="text-right">{item.total_price ? item.total_price : data.length}</TableCell>
            </TableRow>
           
            </>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
          
          </TableRow>
        </TableFooter>
      </Table>
    )
  }
  