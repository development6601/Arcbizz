"use client";

import React from 'react'
import { useViewport } from "@/lib/hooks/useViewport"
import { Header } from "@/components/customComponents/layout/Header"
import CustomFooter from "@/components/customComponents/footer/CustomFooter"
import Logo from "@/assets/images/logo.png"
import Image from 'next/image'
type Props = {
    children: React.ReactNode
}

export default function CustomLayout({ children }: Props) {
    const { mounted } = useViewport();

    if (!mounted) {
        return (
            <div className="w-full h-screen bg-background flex items-center justify-center text-3xl font-bold animate-pulse" >
                <Image src={Logo} alt="Arcbizz Logo" className="w-1/3 sm:w-1/4 lg:w-1/8 xl:w-1/10 object-contain" />
            </div>
        );
    }

    return (
        <div>
            <Header />
            <main>
                {children}
            </main>
            <CustomFooter />
        </div >
    )
}