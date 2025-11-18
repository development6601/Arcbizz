import teamMember1 from '@/assets/images/about-us/teamMambers/teamMember1.png'
import teamMember2 from '@/assets/images/about-us/teamMambers/teamMember2.png'
import teamMember3 from '@/assets/images/about-us/teamMambers/teamMember3.png'
import teamMember4 from '@/assets/images/about-us/teamMambers/teamMember4.png'
import teamMember5 from '@/assets/images/about-us/teamMambers/teamMember5.png'
import teamMember6 from '@/assets/images/about-us/teamMambers/teamMember6.png'
import teamMember7 from '@/assets/images/about-us/teamMambers/teamMember7.png'
import teamMember8 from '@/assets/images/about-us/teamMambers/teamMember8.png'

// Helper to get image URL from Next.js image import
const getImageUrl = (img: any): string => {
  if (typeof img === 'string') return img
  return img?.src || img?.default?.src || String(img)
}

export interface TeamMember {
    id: string
    name: string
    role: string
    bio: string
    image: string
    linkedin?: string
    github?: string
    email?: string
}

export const teamMembers: TeamMember[] = [
    {
        id: 'tm_a7b3c9d2e5f1g8h4i6j0',
        name: 'John Smith',
        role: 'Founder & CEO',
        bio: 'Visionary leader with 10+ years of experience in software development and business strategy.',
        image: getImageUrl(teamMember1),
        linkedin: '#',
        github: '#',
        email: 'jane@arcbizz.com',
    },
    {
        id: 'tm_k2l5m9n3o7p1q4r8s6t0',
        name: 'Jane Doe',
        role: 'CTO',
        bio: 'Tech enthusiast passionate about building scalable solutions and leading high-performing teams.',
        image: getImageUrl(teamMember2),
        linkedin: '#',
        github: '#',
        email: 'john@arcbizz.com',
    },
    {
        id: 'tm_u3v7w1x5y9z2a4b8c6d0',
        name: 'Sarah Miller',
        role: 'Lead Developer',
        bio: 'Full-stack developer with expertise in modern web technologies and cloud infrastructure.',
        image: getImageUrl(teamMember3),
        linkedin: '#',
        github: '#',
        email: 'sarah@arcbizz.com',
    },
    {
        id: 'tm_e1f5g9h3i7j2k4l8m6n0',
        name: 'Michelle Williams',
        role: 'UI/UX Designer',
        bio: 'Creative designer focused on creating intuitive and beautiful user experiences.',
        image: getImageUrl(teamMember4),
        linkedin: '#',
        github: '#',
        email: 'michelle@arcbizz.com',
    },
    {
        id: 'tm_o3p7q1r5s9t2u4v8w6x0',
        name: 'Oliver Brown',
        role: 'Senior Developer',
        bio: 'Backend specialist with deep knowledge of microservices architecture and DevOps practices.',
        image: getImageUrl(teamMember5),
        linkedin: '#',
        github: '#',
        email: 'oliver@arcbizz.com',
    },
    {
        id: 'tm_y1z5a9b3c7d2e4f8g6h0',
        name: 'Ethan Davis',
        role: 'Project Manager',
        bio: 'Agile expert ensuring smooth project delivery and exceptional client communication.',
        image: getImageUrl(teamMember6),
        linkedin: '#',
        github: '#',
        email: 'ethan@arcbizz.com',
    },
    {
        id: 'tm_i3j7k1l5m9n2o4p8q6r0',
        name: 'Diana Wilson',
        role: 'DevOps Engineer',
        bio: 'Infrastructure specialist dedicated to building robust CI/CD pipelines and cloud solutions.',
        image: getImageUrl(teamMember7),
        linkedin: '#',
        github: '#',
        email: 'diana@arcbizz.com',
    },
    {
        id: 'tm_s1t5u9v3w7x2y4z8a6b0',
        name: 'Lisa Anderson',
        role: 'Marketing Director',
        bio: 'Strategic marketer with expertise in digital campaigns and brand development.',
        image: getImageUrl(teamMember8),
        linkedin: '#',
        github: '#',
        email: 'lisa@arcbizz.com',
    },
]