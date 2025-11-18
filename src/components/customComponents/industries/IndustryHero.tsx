'use client'

import React from 'react'
import { Building2, Sparkles, TrendingUp, Target } from 'lucide-react'

const IndustryHero = () => {
  return (
    <section className="relative flex items-center justify-center min-h-[60vh] pt-24 pb-16 px-4 overflow-hidden bg-background animate-fade-in-up">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/10 opacity-60" />

      {/* Geometric Grid Lines */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f608_1px,transparent_1px),linear-gradient(to_bottom,#3b82f608_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Floating Gradient Orbs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/10 to-primary/10 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-32 right-1/4 w-96 h-96 bg-gradient-to-br from-primary/10 to-primary/10 rounded-full blur-3xl animate-blob animation-delay-2000" />

      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-background/90 [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black_100%)]" />

      {/* Central Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-6 max-w-5xl mx-auto text-center">
        {/* Top Badge */}
        <div className="relative animate-fade-in-down">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/20 rounded-full blur-xs" />
          <div className="relative border border-primary/30 text-primary bg-card/70 rounded-full !px-4 lg:!px-6 py-2.5 flex items-center justify-center gap-2">
            <Building2 className="!w-4 !h-4 lg:!w-5 lg:!h-5 text-primary" />
            <span className="font-semibold uppercase text-xs lg:text-sm">Industry Solutions</span>
          </div>
        </div>

        {/* Main Heading */}
        <div className="flex flex-col gap-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-foreground leading-tight tracking-tight">
            Industry{" "}
            <span className="relative inline-block group">
              <span className="relative bg-gradient-to-r from-chart-2 via-primary to-chart-2 bg-clip-text text-transparent animate-gradient-flow">
                Expertise
              </span>
            </span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-muted-foreground font-normal mt-2 max-w-3xl mx-auto leading-relaxed">
            Tailored technology solutions for every industry. We understand your unique challenges and deliver innovative solutions that drive growth and transformation.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 w-full max-w-3xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3 mx-auto">
              <Building2 className="w-6 h-6 text-primary" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">10+</div>
            <div className="text-xs md:text-sm text-muted-foreground">Industries Served</div>
          </div>
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3 mx-auto">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">100%</div>
            <div className="text-xs md:text-sm text-muted-foreground">Custom Solutions</div>
          </div>
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3 mx-auto">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">500+</div>
            <div className="text-xs md:text-sm text-muted-foreground">Projects Delivered</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes gradient-flow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-blob {
          animation: blob 20s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-gradient-flow {
          background-size: 200% 200%;
          animation: gradient-flow 3s ease infinite;
        }
      `}</style>
    </section>
  )
}

export default IndustryHero

