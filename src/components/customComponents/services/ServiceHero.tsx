'use client'

import React from 'react'
import { Settings, Sparkles, Rocket, Users, ArrowRight, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

const ServiceHero = () => {
    const router = useRouter();
    return (
        <section id="service-hero" className="relative flex items-center justify-center min-h-[80vh] pt-24 pb-16 px-4 overflow-hidden bg-background animate-fade-in-up">
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

            {/* Central Content */}
            <div className="relative z-10 flex flex-col items-center justify-center gap-6 max-w-5xl mx-auto text-center">
                {/* Top Badge */}
                <div className="relative animate-fade-in-down">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/20 rounded-full blur-xs" />
                    <div className="relative border border-primary/30 text-primary bg-card/70 rounded-full px-6 py-2.5 flex items-center justify-center gap-2">
                        <Settings className="w-5 h-5 text-primary" />
                        <span className="font-semibold uppercase text-xs lg:text-sm">Our Services</span>
                    </div>
                </div>

                {/* Main Heading */}
                <div className="flex flex-col gap-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-foreground leading-tight tracking-tight">
                        Building Future-Ready{" "}
                        <span className="relative inline-block group">
                            <span className="relative bg-gradient-to-r from-chart-2 via-primary to-chart-2 bg-clip-text text-transparent animate-gradient-flow">
                                Digital Products
                            </span>
                        </span>
                    </h1>
                    <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-muted-foreground font-normal mt-2 max-w-3xl mx-auto leading-relaxed">
                        Accelerate your business growth with cutting-edge software development, powerful web & mobile applications, and next-gen cloud architecture. Trusted by startups, SMEs, and enterprises worldwide.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-10 w-full max-w-4xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-4 md:p-6 hover:border-primary/30 transition-all duration-300">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3 mx-auto">
                            <Rocket className="w-6 h-6 text-primary" />
                        </div>
                        <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">100+</div>
                        <div className="text-xs md:text-sm text-muted-foreground">Projects Delivered</div>
                    </div>
                    <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-4 md:p-6 hover:border-primary/30 transition-all duration-300">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3 mx-auto">
                            <Users className="w-6 h-6 text-primary" />
                        </div>
                        <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">10+</div>
                        <div className="text-xs md:text-sm text-muted-foreground">Industries Served</div>
                    </div>
                    <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-4 md:p-6 hover:border-primary/30 transition-all duration-300">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3 mx-auto">
                            <Sparkles className="w-6 h-6 text-primary" />
                        </div>
                        <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">24/7</div>
                        <div className="text-xs md:text-sm text-muted-foreground">Support Available</div>
                    </div>
                    <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-4 md:p-6 hover:border-primary/30 transition-all duration-300">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3 mx-auto">
                            <Settings className="w-6 h-6 text-primary" />
                        </div>
                        <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">50+</div>
                        <div className="text-xs md:text-sm text-muted-foreground">Happy Clients</div>
                    </div>
                </div>

                {/* Call-to-Action Buttons */}
                <div className="flex items-center justify-center gap-4 mt-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    <Button
                        variant="outline"
                        size="lg"
                        className="xl:h-12 xl:!px-6 xl:text-base"
                        onClick={() => {
                            router.push('/contact-us#contact-form');
                        }}
                    >
                        <Phone className="!w-5 !h-5" />
                        Get in Touch
                    </Button>
                    <Button
                        size="lg"
                        className="xl:h-12 xl:!px-6 xl:text-base"
                        onClick={() => {
                            const element = document.getElementById('services-list');
                            element?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        Explore Services
                        <ArrowRight className="!w-5 !h-5" />
                    </Button>
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
                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                @keyframes fade-in-down {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                @keyframes gradient-flow {
                    0%, 100% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
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
                .animate-fade-in {
                    animation: fade-in 0.8s ease-out forwards;
                }
                .animate-fade-in-down {
                    animation: fade-in-down 0.8s ease-out forwards;
                }
                .animate-fade-in-up {
                    animation: fade-in-up 0.8s ease-out forwards;
                }
                .animate-gradient-flow {
                    background-size: 200% 200%;
                    animation: gradient-flow 3s ease infinite;
                }
            `}</style>
        </section>
    )
}

export default ServiceHero

