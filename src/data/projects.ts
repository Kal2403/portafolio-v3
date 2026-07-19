export const projects = {
    eyebrow: 'Projects',

    title: 'Selected projects focused on real-world problems and scalable solutions.',

    description:
        'A collection of applications where I applied modern frontend, backend and database technologies with a strong focus on architecture, performance and user experience.',

    items: [
        {
            id: 'portfolio-v3',
            title: 'Portfolio V3',
            category: 'Frontend',
            description:
                'Professional developer portfolio built with a reusable design system, modular architecture and responsive sections.',
            image: '/images/projects/portfolio-v3.webp',
            technologies: [
                'React',
                'TypeScript',
                'Vite',
                'Tailwind CSS',
                'Framer Motion',
            ],
            repositoryUrl: 'https://github.com/Kal2403/portafolio-v3',
            liveUrl: '',
            featured: true,
        },
        {
            id: 'mern-task-manager',
            title: 'MERN Task Manager',
            category: 'Full Stack',
            description:
                'Task management application with authentication, protected routes, persistent data and REST API integration.',
            image: '/images/projects/task-manager.webp',
            technologies: [
                'React',
                'Node.js',
                'Express',
                'MongoDB',
                'JWT',
            ],
            repositoryUrl: '',
            liveUrl: '',
            featured: true,
        },
        {
            id: 'ecommerce-dashboard',
            title: 'E-commerce Dashboard',
            category: 'Full Stack',
            description:
                'Administrative dashboard for managing products, inventory, customers and sales through a responsive interface.',
            image: '/images/projects/ecommerce-dashboard.webp',
            technologies: [
                'React',
                'TypeScript',
                'Node.js',
                'MongoDB',
                'Tailwind CSS',
            ],
            repositoryUrl: '',
            liveUrl: '',
            featured: false,
        },
    ],
} as const;
