"use client"
import { BarChart4, Icon, MonitorPlay } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Sidebar = () => {

  const pathname= usePathname()

    const sidebarRoutes=[
        {Icon: <MonitorPlay/>, label: "Corsos", path: "/instructor/courses"},
        {Icon: <BarChart4/>, label: "Desempenho", path: "/instructor/performance"}
    ]
  return (
    <div className="max-sm:hidden flex flex-col w-64 border-r shadow-md px-3 my-4 gap-4 text-sm font-medium">
       {sidebarRoutes.map((route) => (
        <Link href={route.path} key={route.path} className={`flex items-center gap-4 p-3 rounded hover:bg-[#FFF8EB]
          ${pathname .startsWith (route.path) && "bg-[#6cad6c] hover:bg-[#4c644c]/80"}
          `}>
          {route.Icon} {route.label}
        </Link>
       ))}
        </div>
  )
}

export default Sidebar