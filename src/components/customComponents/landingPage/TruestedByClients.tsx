'use client'

import React from 'react'
import Image from 'next/image'
import CustomSlider from '../slider/Slider'
import acerLogo from '@/assets/images/landing/clients/acer.png'
import bitpayLogo from '@/assets/images/landing/clients/bitpay.png'
import canonLogo from '@/assets/images/landing/clients/canon.png'
import gpayLogo from '@/assets/images/landing/clients/gpay.png'
import stripeLogo from '@/assets/images/landing/clients/stripe.png'
import visaLogo from '@/assets/images/landing/clients/visa.png'
import { ShieldCheck } from 'lucide-react'

const TruestedByClients = () => {
    const clientLogos = [
        { id: 1, logo: acerLogo, name: 'Acer' },
        { id: 2, logo: bitpayLogo, name: 'BitPay' },
        { id: 3, logo: canonLogo, name: 'Canon' },
        { id: 4, logo: gpayLogo, name: 'Google Pay' },
        { id: 5, logo: stripeLogo, name: 'Stripe' },
        { id: 6, logo: visaLogo, name: 'Visa' },
    ]

    return (
        <section id="truested-by-clients" className="py-24 relative pb-0 bg-white dark:bg-gray-950 max-w-screen overflow-hidden animate-fade-in-up">

            {/* Section Header */}
            <div className="text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Trusted by Clients</span>
                </div>
                <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-4">
                    Trusted by Clients
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    We're proud to partner with industry leaders and innovative companies worldwide
                </p>
            </div>
            <div className="relative mt-8 flex items-center justify-center bg-gradient-to-tr from-primary/10 to-transparent">
                <div className="w-full">
                    <CustomSlider
                        slidesToShow={5}
                        slidesToScroll={1}
                        autoplay={true}
                        autoplaySpeed={2000}
                        infinite={true}
                        dots={false}
                        arrows={false}
                        speed={500}
                        pauseOnHover={true}
                        responsive={[
                            {
                                breakpoint: 1024,
                                settings: {
                                    slidesToShow: 4,
                                    slidesToScroll: 1,
                                },
                            },
                            {
                                breakpoint: 768,
                                settings: {
                                    slidesToShow: 3,
                                    slidesToScroll: 1,
                                },
                            },
                            {
                                breakpoint: 480,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 1,
                                },
                            },
                        ]}
                        className="client-slider"
                    >
                        {clientLogos.map((client) => (
                            <div key={client.id} className="px-4">
                                <div className="flex items-center justify-center h-24 w-full">
                                    <Image
                                        src={client.logo}
                                        alt={client.name}
                                        width={120}
                                        height={60}
                                        className="object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                                    />
                                </div>
                            </div>
                        ))}
                    </CustomSlider>
                </div>
            </div>
        </section>
    )
}

export default TruestedByClients