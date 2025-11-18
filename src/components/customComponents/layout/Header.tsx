"use client"

import * as React from "react"
import Link from "next/link"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon, MenuIcon, XIcon } from "lucide-react"

import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import logo from "@/assets/images/fullLogo.png"
import { useEffect, useState } from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useRouter } from "next/navigation"
import { useViewport } from "@/lib/hooks/useViewport"

const services: { title: string; href: string; description: string }[] = [
    {
        title: "Custom Software Development",
        href: "/services?category=Software Development",
        description:
            "We develop custom software solutions that are tailored to your business needs.",
    },
    {
        title: "Website Development",
        href: "/services?category=Web Development",
        description:
            "We develop websites that are responsive, fast, and easy to use.",
    },
    {
        title: "Mobile Application Development",
        href: "/services?category=Mobile Development",
        description:
            "We develop mobile applications that are responsive, fast, and easy to use.",
    },
    {
        title: "UI/UX Design & Prototyping",
        href: "/services?category=Design",
        description: "We design and prototype UI/UX for websites and mobile applications.",
    },
    {
        title: "SEO Optimization",
        href: "/services?category=SEO Optimization",
        description:
            "We optimize websites for search engines to improve their visibility and ranking.",
    },
    {
        title: "DevOps & CI/CD Automation",
        href: "/services?category=CloudDevOps",
        description: "We automate your development process to improve your efficiency and productivity.",
    },
    {
        title: "API Development",
        href: "/services?category=API Development",
        description:
            "We develop APIs that are secure, scalable, and easy to use.",
    },
]

export function Header() {

    const { isMobile, isScrolled, mounted } = useViewport();
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const handleNavMenuClick = (page: string) => {
        router.push(page);
        setIsOpen(false);
    }

    const handleGetStartedClick = () => {
        router.push('/contact-us#contact-form');
        setIsOpen(false);
    }

    if (!mounted) {
        return (
            <header className="fixed top-0 left-0 right-0 bg-transparent py-2 px-4 sm:px-10">
                <div className="container mx-auto flex items-center justify-between">
                    <div className="w-32 h-8 bg-gray-200 rounded-md animate-pulse" />
                    <div className="w-20 h-8 bg-gray-200 rounded-md animate-pulse" />
                </div>
            </header>
        );
    }

    return (
        <div className={`fixed top-0 left-0 right-0 z-50 py-2 sm:py-3 px-4 sm:px-10 ${isScrolled ? 'bg-background/50 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
            <div className="container mx-auto flex items-center justify-between">
                <Link href="/"> <Image src={logo} alt="Logo" width={192} height={192} priority className="w-24 sm:w-32 lg:w-36 xl:w-40 2xl:w-48 object-contain" /></Link>
                {isMobile ? (
                    <Drawer open={isOpen} onOpenChange={setIsOpen} direction="right">
                        <DrawerTrigger asChild>
                            <Button variant="ghost" className="!p-1 h-fit">
                                {isOpen ? <XIcon aria-hidden="true" /> : <MenuIcon aria-hidden="true" />}
                            </Button>
                        </DrawerTrigger>
                        <DrawerContent>
                            <ScrollArea className="h-full">
                                <DrawerHeader>
                                    <DrawerTitle>Menu</DrawerTitle>
                                </DrawerHeader>
                                <div className="flex flex-col gap-4 p-4">
                                    <Link href="/" className="hover:text-primary transition-all duration-300" onClick={() => handleNavMenuClick('/')}>Home</Link>
                                    <Link href="/" className="hover:text-primary transition-all duration-300" onClick={() => handleNavMenuClick('services')}>Services</Link>
                                    <Link href="/technologies" className="hover:text-primary transition-all duration-300" onClick={() => handleNavMenuClick('/technologies')}>Technologies</Link>
                                    <Link href="/industries" className="hover:text-primary transition-all duration-300" onClick={() => handleNavMenuClick('/industries')}>Industries</Link>
                                    <Link href="/why-arcbizz" className="hover:text-primary transition-all duration-300" onClick={() => handleNavMenuClick('/why-arcbizz')}>Why Arcbizz?</Link>
                                    <Link href="/hire-developers" className="hover:text-primary transition-all duration-300" onClick={() => handleNavMenuClick('/hire-developers')}>Hire Developers</Link>
                                    <Link href="/apply-for-job" className="hover:text-primary transition-all duration-300" onClick={() => handleNavMenuClick('/apply-for-job')}>Apply for Job</Link>
                                    <Link href="/" className="hover:text-primary transition-all duration-300" onClick={() => handleNavMenuClick('company')}>Company</Link>
                                    <Link href="/blog" className="hover:text-primary transition-all duration-300" onClick={() => handleNavMenuClick('/blog')}>Blog</Link>
                                    <Button className="w-fit" onClick={handleGetStartedClick}>Get Started</Button>
                                </div>
                            </ScrollArea>
                        </DrawerContent>
                    </Drawer>
                ) :
                    <div className="flex items-center gap-2 lg:gap-4">
                        <NavigationMenu viewport={false} >
                            <NavigationMenuList className="flex-wrap">
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                        <Link href="/" className="!px-2 lg:px-4">Home</Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                            {services.map((service) => (
                                                <ListItem
                                                    key={service.title}
                                                    title={service.title}
                                                    href={service.href}
                                                    className="hover:text-primary hover:bg-accent transition-all duration-0"
                                                >
                                                    {service.description}
                                                </ListItem>
                                            ))}
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                        <Link href="/technologies" className="!px-2 lg:!px-4">Technologies</Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem className="hidden md:block">
                                    <NavigationMenuTrigger>Company</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid w-[300px] gap-4">
                                            <li>
                                                <NavigationMenuLink asChild className="hover:text-primary hover:bg-accent transition-all duration-300">
                                                    <Link href="/about-us">
                                                        <div className="font-medium">About Us</div>
                                                        <div className="text-muted-foreground">
                                                            Learn more about us and our team.
                                                        </div>
                                                    </Link>
                                                </NavigationMenuLink>
                                                <NavigationMenuLink asChild className="hover:text-primary hover:bg-accent transition-all duration-300">
                                                    <Link href="/industries">
                                                        <div className="font-medium">Industries</div>
                                                        <div className="text-muted-foreground">
                                                           Industries we serve across.
                                                        </div>
                                                    </Link>
                                                </NavigationMenuLink>
                                                <NavigationMenuLink asChild className="hover:text-primary hover:bg-accent transition-all duration-300">
                                                    <Link href="/case-study">
                                                        <div className="font-medium">Success Stories</div>
                                                        <div className="text-muted-foreground">
                                                            Browse our success stories of projects.
                                                        </div>
                                                    </Link>
                                                </NavigationMenuLink>
                                                <NavigationMenuLink asChild className="hover:text-primary hover:bg-accent transition-all duration-300">
                                                    <Link href="/our-team">
                                                        <div className="font-medium">Our Team</div>
                                                        <div className="text-muted-foreground">
                                                            Meet our team and learn more about us.
                                                        </div>
                                                    </Link>
                                                </NavigationMenuLink>
                                                <NavigationMenuLink asChild className="hover:text-primary hover:bg-accent transition-all duration-300">
                                                    <Link href="/hire-developers">
                                                        <div className="font-medium">Hire Developers</div>
                                                        <div className="text-muted-foreground">
                                                            Hire expert developers for your team.
                                                        </div>
                                                    </Link>
                                                </NavigationMenuLink>
                                                <NavigationMenuLink asChild className="hover:text-primary hover:bg-accent transition-all duration-300">
                                                    <Link href="/careers">
                                                        <div className="font-medium">Career <span className="text-primary font-bold text-xs ml-1 animate-pulse !duration-100 hover:animate-none cursor-pointer" onClick={() => {
                                                            const positionsSection = document.getElementById('open-positions');
                                                            positionsSection?.scrollIntoView({ behavior: 'smooth' });
                                                        }}>We are hiring!</span></div>
                                                        <div className="text-muted-foreground">
                                                            Join our team and help us build the future.
                                                        </div>
                                                    </Link>
                                                </NavigationMenuLink>
                                                <NavigationMenuLink asChild className="hover:text-primary hover:bg-accent transition-all duration-300">
                                                    <Link href="/apply-for-job">
                                                        <div className="font-medium">Apply for Job</div>
                                                        <div className="text-muted-foreground">
                                                            Submit your application to join our team.
                                                        </div>
                                                    </Link>
                                                </NavigationMenuLink>
                                                <NavigationMenuLink asChild className="hover:text-primary hover:bg-accent transition-all duration-300">
                                                    <Link href="/why-arcbizz">
                                                        <div className="font-medium">Why Arcbizz?</div>
                                                        <div className="text-muted-foreground">
                                                            Discover why businesses choose Arcbizz.
                                                        </div>
                                                    </Link>
                                                </NavigationMenuLink>
                                                <NavigationMenuLink asChild className="hover:text-primary hover:bg-accent transition-all duration-300">
                                                    <Link href="/contact-us">
                                                        <div className="font-medium">Contact Us</div>
                                                        <div className="text-muted-foreground">
                                                            Get in touch with us.
                                                        </div>
                                                    </Link>
                                                </NavigationMenuLink>
                                            </li>
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                        <Link href="/blog" className="!px-2 lg:!px-4">Blog</Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>

                        <Button onClick={handleGetStartedClick}>Get Started</Button>
                    </div>
                }

            </div>
        </div>
    )
}

function ListItem({
    title,
    children,
    href,
    ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <Link href={href}>
                    <div className="text-sm leading-none font-medium">{title}</div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}
