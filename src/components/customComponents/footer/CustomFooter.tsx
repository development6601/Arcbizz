'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from "@/assets/images/fullWhiteLogo.png"
import { Linkedin, Instagram, Github, Mail, MessageCircleMore, Phone, MapPin, ArrowRight, Sparkles } from 'lucide-react'

const footerLinks = {
    services: [
        { title: 'Custom Software Development', href: '/services?category=Software Development' },
        { title: 'Website Development', href: '/services?category=Web Development' },
        { title: 'Mobile Application Development', href: '/services?category=Mobile Development' },
        { title: 'UI/UX Design & Prototyping', href: '/services?category=Design' },
        { title: 'DevOps & CI/CD Automation', href: '/services?category=CloudDevOps' },
        { title: 'API Development', href: '/services?category=API Development' },
        { title: 'SEO Optimization', href: '/services?category=SEO Optimization' },
        { title: 'Dedicated Resource Placement', href: '/hire-developers' },
        { title: 'Data Science & AI Solutions', href: '/services' },
    ],
    company: [
        { title: 'About Us', href: '/about-us' },
        { title: 'Success Stories', href: '/case-study' },
        { title: 'Our Team', href: '/our-team' },
        { title: 'Hire Developers', href: '/hire-developers' },
        { title: 'Careers', href: '/careers' },
        { title: 'Apply for Job', href: '/apply-for-job' },
        { title: 'Why Arcbizz?', href: '/why-arcbizz' },
        { title: 'Contact Us', href: '/contact-us' },
    ],
    resources: [
        { title: 'Blog', href: '/blog' },
        { title: 'Case Studies', href: '/case-study' },
        { title: 'Technologies', href: '/technologies' },
        { title: 'Industries', href: '/industries' },
        { title: 'Privacy Policy', href: '/privacy-policy' },
        { title: 'Terms of Service', href: '/terms-of-service' },
        { title: 'Cookie Policy', href: '/cookie-policy' },
    ],
}

const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/arcbizz-technologies/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/arcbizz_technologies/', label: 'Instagram' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: MessageCircleMore, href: 'https://wa.me/918758027188?text=Hello%20Arcbizz%20Technologies!', label: 'message us' },
]

export default function CustomFooter() {
    return (
        <footer className="relative w-full overflow-hidden bg-[oklch(0.12_0_0)] border-t border-[oklch(1_0_0/10%)]">
            {/* Background Decorations */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-primary/10" />

            {/* Grid Pattern */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f608_1px,transparent_1px),linear-gradient(to_bottom,#3b82f608_1px,transparent_1px)] bg-[size:4rem_4rem]" />
            </div>

            {/* Animated Gradient Orbs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full blur-3xl animate-blob pointer-events-none opacity-50" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-chart-3/10 to-chart-2/5 rounded-full blur-3xl animate-blob animation-delay-2000 pointer-events-none opacity-50" />

            {/* Radial Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.12_0_0)] via-transparent to-transparent [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black_70%)]" />

            <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="py-16 lg:py-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
                        {/* Brand Column */}
                        <div className="lg:col-span-2 pl-4">
                            <Link href="/" className="inline-block mb-6">
                                <Image
                                    src={logo}
                                    alt="Arcbizz Logo"
                                    className="w-48 lg:w-72 object-contain"
                                />
                            </Link>
                            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed text-sm sm:text-base">
                                Creating the next-gen digital experience with cutting-edge technology solutions. We deliver innovative web applications and digital transformation services.
                            </p>

                            {/* Social Links */}
                            <div className="flex items-center gap-4 mb-6">
                                {socialLinks.map((social) => {
                                    const Icon = social.icon
                                    return (
                                        <Link
                                            key={social.label}
                                            href={social.href}
                                            aria-label={social.label}
                                            className="group relative w-10 h-10 flex items-center justify-center rounded-lg bg-[oklch(1_0_0/5%)] border border-[oklch(1_0_0/10%)] hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
                                        >

                                            <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </Link>
                                    )
                                })}
                            </div>

                            {/* Contact Info */}
                            <div className="space-y-3">
                                <a
                                    href="mailto:info@arcbizz.com"
                                    className="flex items-center gap-3 text-muted-foreground transition-colors duration-300 text-sm group"
                                >
                                    <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-[oklch(1_0_0/5%)] border border-[oklch(1_0_0/10%)] transition-all duration-300">
                                        <Mail className="w-4 h-4" />
                                    </div>
                                    <span>info@arcbizz.com</span>
                                </a>
                                <a
                                    href="tel:+918758027188"
                                    className="flex items-center gap-3 text-muted-foreground transition-colors duration-300 text-sm group"
                                >
                                    <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-[oklch(1_0_0/5%)] border border-[oklch(1_0_0/10%)] transition-all duration-300">
                                        <Phone className="w-4 h-4" />
                                    </div>
                                    <span>+91 87580 27188</span>
                                </a>
                                <a href="https://maps.app.goo.gl/LUFNYCxzBCckVF1H8" target="_blank" className="flex gap-3 text-muted-foreground text-sm flex-shrink-0">
                                    <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-[oklch(1_0_0/5%)] border border-[oklch(1_0_0/10%)] mt-0.5 flex-shrink-0">
                                        <MapPin className="w-4 h-4" />
                                    </div>
                                    <span>C2 / 514-515, Pragati IT Park, <br />

                                        Opp. AR Mall, Mota Varachha,

                                        Surat, Gujarat 394105.  </span>
                                </a>
                            </div>
                        </div>

                        {/* Services Column */}
                        <div>
                            <h3 className="font-semibold text-background mb-2 sm:mb-6 flex items-center gap-2 pl-4">
                                <Sparkles className="w-4 h-4 text-primary" />
                                Services
                            </h3>
                            <ul className="space-y-3">
                                {footerLinks.services.map((link) => (
                                    <li key={link.title}>
                                        <Link
                                            href={link.href}
                                            className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-all duration-300"
                                        >
                                            <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                                            <span className="group-hover:translate-x-1 transition-transform duration-300">
                                                {link.title}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Company Column */}
                        <div>
                            <div className="flex flex-col items-start lg:items-center justify-between">
                                <h3 className="text-background font-semibold mb-2 sm:mb-6 flex items-center gap-2 pl-4">
                                    <Sparkles className="w-4 h-4 text-primary" />
                                    Company
                                </h3>
                                <ul className="space-y-3">
                                    {footerLinks.company.map((link) => (
                                        <li key={link.title}>
                                            <Link
                                                href={link.href}
                                                className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-all duration-300"
                                            >
                                                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                                                <span className="group-hover:translate-x-1 transition-transform duration-300">
                                                    {link.title}
                                                </span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Resources Column */}
                        <div>
                            <h3 className="text-background font-semibold mb-2 sm:mb-6 flex items-center gap-2 pl-4">
                                <Sparkles className="w-4 h-4 text-primary" />
                                Resources
                            </h3>
                            <ul className="space-y-3">
                                {footerLinks.resources.map((link) => (
                                    <li key={link.title}>
                                        <Link
                                            href={link.href}
                                            className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-all duration-300"
                                        >
                                            <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                                            <span className="group-hover:translate-x-1 transition-transform duration-300">
                                                {link.title}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-[oklch(1_0_0/10%)] py-8">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                        <div className="flex flex-col md:flex-row items-center gap-2 text-sm text-muted-foreground">
                            <span>© {new Date().getFullYear()} Arcbizz. All rights reserved.</span>
                            <span className="hidden md:inline">•</span>
                            <span>Technology Solutions & Innovation</span>
                        </div>

                        <div className="flex items-center gap-3 sm:gap-6 text-sm">
                            <Link
                                href="/privacy-policy"
                                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                href="/terms-of-service"
                                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                            >
                                Terms of Service
                            </Link>
                            <Link
                                href="/cookie-policy"
                                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                            >
                                Cookie Policy
                            </Link>
                        </div>
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
        .animate-blob {
          animation: blob 20s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
        </footer>
    )
}