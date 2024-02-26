'use client'
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";


// for using react hook to next js me wo directly allowed nahi hai to top me ek line likhni padti hai use client
function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (

    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
        <Menu setActive={setActive}>
            <Link href={"/"}>
            <MenuItem setActive={setActive} active={active} item="Home">
            </MenuItem>
            </Link>

            <MenuItem setActive={setActive} active={active} item="courses">
            <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
           </div>
            </MenuItem>

            <MenuItem setActive={setActive} active={active} item="Contact">
            </MenuItem>
            
        </Menu>
    </div>
    )
}

export default Navbar