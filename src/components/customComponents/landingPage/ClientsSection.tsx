'use client'

import React from 'react'
import Image from 'next/image'
import { Building2 } from 'lucide-react'
import client1 from '@/assets/images/landing/client/client-01.png'
import client2 from '@/assets/images/landing/client/client-02.png'
import client3 from '@/assets/images/landing/client/client-03.png'
import client4 from '@/assets/images/landing/client/client-04.png'
import client5 from '@/assets/images/landing/client/client-05.png'
import client6 from '@/assets/images/landing/client/client-06.png'
import client7 from '@/assets/images/landing/client/client-07.png'
import client8 from '@/assets/images/landing/client/client-08.png'
import client9 from '@/assets/images/landing/client/client-09.png'

// Client data with staggered grid positioning
// The grid layout creates a staggered/non-uniform arrangement similar to the design
const clients = [
    {
        id: 1,
        name: 'Client 1',
        logo: client1,
        description: 'Trusted client partner',
        colSpan: 'col-span-1',
        rowSpan: 'row-span-1',
    },
    {
        id: 2,
        name: 'Client 2',
        logo: client2,
        description: 'Trusted client partner',
        colSpan: 'col-span-1',
        rowSpan: 'row-span-1',
    },
    {
        id: 3,
        name: 'Client 3',
        logo: client3,
        description: 'Trusted client partner',
        colSpan: 'col-span-1',
        rowSpan: 'row-span-1',
    },
    {
        id: 4,
        name: 'Client 4',
        logo: client4,
        description: 'Trusted client partner',
        colSpan: 'col-span-1',
        rowSpan: 'row-span-1',
    },
    {
        id: 5,
        name: 'Client 5',
        logo: client5,
        description: 'Trusted client partner',
        colSpan: 'col-span-1',
        rowSpan: 'row-span-1',
    },
    {
        id: 6,
        name: 'Client 6',
        logo: client6,
        description: 'Trusted client partner',
        colSpan: 'col-span-1',
        rowSpan: 'row-span-1',
    },
    {
        id: 7,
        name: 'Client 7',
        logo: client7,
        description: 'Trusted client partner',
        colSpan: 'col-span-1',
        rowSpan: 'row-span-1',
    },
    {
        id: 8,
        name: 'Client 8',
        logo: client8,
        description: 'Trusted client partner',
        colSpan: 'col-span-1',
        rowSpan: 'row-span-1',
    },
    {
        id: 9,
        name: 'Client 9',
        logo: client9,
        description: 'Trusted client partner',
        colSpan: 'col-span-1',
        rowSpan: 'row-span-1',
    },
]

/**
 * ClientCard Component
 * 
 * Reusable component for displaying a single client logo card.
 * 
 * @param {Object} props - Component props
 * @param {Object} props.client - Client data object
 * @returns {JSX.Element} Client card component
 */
interface ClientCardProps {
    client: {
        id: number
        name: string
        logo: any
        description: string
    }
}

const ClientCard: React.FC<ClientCardProps> = ({ client }) => {
    return (
        <div
            className="group relative bg-white dark:bg-gray-800 rounded-lg p-4 md:p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex items-center justify-center min-h-[140px] md:min-h-[160px] border border-gray-200 dark:border-gray-700 animate-fade-in-up"
            itemScope
            itemType="https://schema.org/Organization"
        >
            <meta itemProp="name" content={client.name} />
            <meta itemProp="description" content={client.description} />
            <div
                className="w-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
                aria-label={`${client.name} - ${client.description}`}
            >
                <Image
                    src={client.logo}
                    alt={`${client.name} logo - ${client.description}`}
                    width={200}
                    height={100}
                    className="object-contain max-w-full max-h-[80px] md:max-h-[100px] lg:max-h-[120px] w-auto h-auto transition-all duration-300 hover:scale-105"
                    loading="lazy"
                    itemProp="logo"
                />
            </div>
        </div>
    )
}

/**
 * ClientsSection Component
 * 
 * Displays a grid of client logos in white cards on a light grey background.
 * Fully responsive with SEO optimization including structured data.
 * 
 * @returns {JSX.Element} Clients section component
 */
const ClientsSection = () => {
    // Generate structured data for SEO
    const generateClientsSchema = () => {
        const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://arcbizz.com'

        return {
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Our Clients',
            description: 'Trusted partners and clients of Arcbizz',
            itemListElement: clients.map((client, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                item: {
                    '@type': 'Organization',
                    name: client.name,
                    description: client.description,
                },
            })),
        }
    }

    const clientsSchema = generateClientsSchema()

    return (
        <>
            {/* Structured Data for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(clientsSchema) }}
            />

            <section
                id="clients"
                className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-gray-100 dark:bg-gray-900 animate-fade-in-up"
                aria-labelledby="clients-heading"
            >
                <div className="container mx-auto max-w-7xl animate-fade-in-up">
                    {/* Section Header */}
                    <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                            <Building2 className="w-4 h-4" />
                            <span>Our Clients</span>
                        </div>
                        <h2
                            id="clients-heading"
                            className="text-3xl md:text-4xl xl:text-5xl font-bold mb-4 text-foreground"
                        >
                            Our Valued Clients
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            We&apos;re proud to partner with industry leaders and innovative companies worldwide
                        </p>
                    </div>

                    {/* Clients Grid - Staggered Layout */}
                    {/* Mobile: 1 column, Tablet: 3 columns, Desktop: 5 columns with staggered layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-6 block md:hidden lg:flex animate-fade-in-up">
                        {/* Client Card Component */}
                        {(() => {
                            // Staggered layout configuration: [column1, column2, column3, column4, column5]
                            const staggeredLayout = [
                                [0],      // Column 1: 1 item
                                [1, 2],   // Column 2: 2 items
                                [3, 4, 5], // Column 3: 3 items
                                [6, 7],   // Column 4: 2 items
                                [8],      // Column 5: 1 item
                            ]

                            return staggeredLayout.map((columnIndices, columnIndex) => (
                                <div
                                    key={columnIndex}
                                    className="flex flex-col gap-4 sm:gap-6 justify-center"
                                >
                                    {columnIndices.map((clientIndex) => {
                                        const client = clients[clientIndex]
                                        if (!client) return null

                                        return (
                                            <ClientCard key={client.id} client={client} />
                                        )
                                    })}
                                </div>
                            ))
                        })()}
                    </div>
                    <div className="hidden md:grid lg:hidden grid-cols-2 gap-4 sm:gap-6 animate-fade-in-up">
                        {clients.map((client) => (
                            <ClientCard key={client.id} client={client} />

                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default ClientsSection

