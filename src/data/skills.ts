export const skills = {
    eyebrow: 'Skills',

    title: 'Technologies and tools I use to build modern web applications.',

    categories: [
        {
            title: 'Frontend',
            icon: 'frontend',
            technologies: [
                'React',
                'TypeScript',
                'JavaScript',
                'Vite',
                'Tailwind CSS',
            ],
        },
        {
            title: 'Backend',
            icon: 'backend',
            technologies: ['Node.js', 'Express', 'REST API', 'JWT'],
        },
        {
            title: 'Database',
            icon: 'database',
            technologies: ['MongoDB', 'Mongoose'],
        },
        {
            title: 'Tools',
            icon: 'tools',
            technologies: ['Git', 'GitHub', 'Docker', 'Figma', 'VS Code'],
        },
    ],
} as const;
