'use client'


import { Button } from "@/components/ui/button"
import { Play, Phone, Sparkles, Code2, Zap, Globe } from "lucide-react"
import Image from "next/image"
import leftLaptop from "@/assets/images/landing/hero/leftLaptop.png"
import leftTablet from "@/assets/images/landing/hero/leftTablate.png"
import leftPhone from "@/assets/images/landing/hero/leftIphone.png"
import rightPC from "@/assets/images/landing/hero/rightPC.png"
import rightTablet from "@/assets/images/landing/hero/rightTablate.png"
import rightPhone from "@/assets/images/landing/hero/rightIphone.png"

type Props = {}

export default function Hero({ }: Props) {
    return (
        <section id="hero" className="relative flex items-center justify-center min-h-screen pt-14 sm:pt-24 pb-8 sm:pb-12 px-4 overflow-hidden bg-background animate-fade-in-up">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/10 opacity-60" />

            {/* Geometric Grid Lines */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f608_1px,transparent_1px),linear-gradient(to_bottom,#3b82f608_1px,transparent_1px)] bg-[size:4rem_4rem]" />
            </div>

            {/* Floating Gradient Orbs */}
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/10 to-primary/10 rounded-full blur-3xl animate-blob" />
            <div className="absolute bottom-32 right-1/4 w-96 h-96 bg-gradient-to-br from-primary/10 to-primary/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
            <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-gradient-to-br from-primary/10 to-primary/10 rounded-full blur-3xl animate-blob animation-delay-4000" />

            {/* Radial Gradient Overlay */}
            <div className="absolute inset-0 bg-background/90 [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black_100%)]" />

            {/* Subtle Particles */}
            <div className="absolute inset-0">
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1.5 h-1.5 bg-primary/20 rounded-full animate-float-slow"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 8}s`,
                            animationDuration: `${8 + Math.random() * 12}s`
                        }}
                    />
                ))}
            </div>

            {/* Left Side Device Mockups */}
            <div className="hidden lg:block absolute left-0 bottom-0 w-[35%] h-full z-0">
                <div className="relative h-full flex items-end justify-start">
                    <div className="absolute bottom-1/2 left-[20px] origin-bottom-left translate-y-1/2 hover:scale-105 transition-transform duration-700 group">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-chart-2/10 to-primary/10 blur-xl rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <Image
                            src={leftLaptop}
                            alt="Desktop Monitor"
                            width={300}
                            height={300}
                            className="object-contain relative z-10 drop-shadow-2xl"
                        />
                    </div>
                    <div className="absolute bottom-[calc(50%+150px)] left-16 transform rotate-[8deg] origin-bottom-left translate-y-1/2 z-10 hover:rotate-[4deg] transition-all duration-700">
                        <Image
                            src={leftTablet}
                            alt="Tablet"
                            width={180}
                            style={{
                                animationDuration: '15s',
                                animationDelay: '1s',
                            }}
                            className="object-contain animate-bounce h-[150px] drop-shadow-xl"
                        />
                    </div>
                    <div className="absolute bottom-[calc(50%-150px)] left-32 transform rotate-[-8deg] origin-bottom-left translate-y-1/2 z-20 hover:rotate-[-4deg] transition-all duration-700">
                        <Image
                            src={leftPhone}
                            alt="Smartphone"
                            width={120}
                            style={{
                                animationDuration: '15s',
                                animationDelay: '0.5s',
                            }}
                            className="object-contain animate-bounce drop-shadow-xl"
                        />
                    </div>
                </div>
            </div>

            {/* Right Side Device Mockups */}
            <div className="hidden lg:block absolute right-0 bottom-0 w-[35%] h-full z-0">
                <div className="relative h-full flex items-end justify-end">
                    <div className="absolute bottom-1/2 right-[20px] origin-bottom-right translate-y-1/2 hover:scale-105 transition-transform duration-700 group">
                        <div className="absolute inset-0 bg-gradient-to-br from-chart-3/10 via-primary/10 to-chart-3/10 blur-xl rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <Image
                            src={rightPC}
                            alt="Laptop"
                            width={300}
                            height={300}
                            className="object-contain relative z-10 drop-shadow-2xl"
                        />
                    </div>
                    <div className="absolute bottom-[calc(50%-150px)] right-24 transform rotate-[5deg] origin-bottom-right translate-y-1/2 z-10 hover:rotate-[2deg] transition-all duration-700">
                        <Image
                            src={rightTablet}
                            alt="Tablet"
                            width={150}
                            style={{
                                animationDuration: '15s',
                                animationDelay: '0.75s',
                            }}
                            className="object-contain animate-bounce drop-shadow-xl"
                        />
                    </div>
                    <div className="absolute bottom-[calc(50%+150px)] right-0 transform rotate-[-12deg] origin-bottom-right translate-y-1/2 z-20 hover:rotate-[-8deg] transition-all duration-700">
                        <Image
                            src={rightPhone}
                            alt="Smartphone"
                            width={120}
                            style={{
                                animationDuration: '15s',
                            }}
                            className="object-contain animate-bounce drop-shadow-xl"
                        />
                    </div>
                </div>
            </div>

            {/* Central Content */}
            <div className="relative z-10 flex flex-col items-center justify-center gap-2 sm:gap-4 lg:gap-6 max-w-4xl 2xl:max-w-5xl mx-auto text-center">
                {/* Top Tagline */}
                <div className="relative animate-fade-in-down">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/20 rounded-full blur-xs" />
                    <div className="relative border border-primary/30 text-primary bg-card/70 rounded-full px-6 py-2.5 flex items-center justify-center gap-2">
                        <Sparkles className="w-5 h-5 text-primary" />
                        <span className="font-semibold uppercase text-xs lg:text-sm">Let's build the future together</span>
                    </div>
                </div>

                {/* Main Heading */}
                <div className="flex flex-col gap-2 sm:gap-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                    <p className="text-sm sm:text-lg text-muted-foreground font-medium">
                        Best IT Company In Surat For Software Development Services
                    </p>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-8xl font-bold text-foreground leading-tight tracking-tight w-full sm:w-2xl mx-auto lg:w-3xl xl:w-5xl">
                        Creating the Next-Gen Digital Experience <br /> with{" "}
                        <span className="relative inline-block group">
                            <span className="relative bg-gradient-to-r from-chart-2 via-primary to-chart-2 bg-clip-text text-transparent animate-gradient-flow">
                                Arcbizz
                            </span>
                        </span>
                    </h1>
                    <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-muted-foreground font-normal mt-2 max-w-2xl mx-auto leading-relaxed">
                        Improvising the enterprise's marketing through meaningful innovation.
                    </p>
                </div>

                {/* Call-to-Action Buttons */}
                <div className="flex items-center justify-center gap-4 mt-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <Button
                        variant="outline"
                        size="lg"
                        className="xl:h-12 xl:!px-6 xl:text-base"
                    >
                        <Phone className="!w-5 !h-5" />
                        Contact us
                    </Button>

                    <Button
                        size="lg"
                        className="xl:h-12 xl:!px-6 xl:text-base"
                    >
                        <Play className="!w-5 !h-5" />
                        Get live demo
                    </Button>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-6 lg:gap-8 mt-10 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-2 h-2 bg-chart-4 rounded-full animate-pulse" />
                        <span className="text-sm font-medium">Proudly Serving Our Growing Client Base</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
                        <span className="text-sm font-medium">Committed to Quality & Client Success</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-2 h-2 bg-chart-3 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }} />
                        <span className="text-sm font-medium">Award-Winning Service</span>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes blob {
                    0%, 100% {
                        transform: translate(0, 0) scale(1);
                    }
                    33% {
                        transform: translate(30px, -50px) scale(1.1);
                    }
                    66% {
                        transform: translate(-20px, 20px) scale(0.9);
                    }
                }
                @keyframes float-slow {
                    0%, 100% {
                        transform: translateY(0px) translateX(0px);
                        opacity: 0.3;
                    }
                    50% {
                        transform: translateY(-30px) translateX(15px);
                        opacity: 0.6;
                    }
                }
                .animate-blob {
                    animation: blob 20s ease-in-out infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
                .animate-float-slow {
                    animation: float-slow 15s ease-in-out infinite;
                }
            `}</style>
        </section>
    )
}