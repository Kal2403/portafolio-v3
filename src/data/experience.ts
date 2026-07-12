export const experience = {
    eyebrow: 'Experience',
    title: 'Professional experience and projects that shaped my development.',
    description:
        'A selection of roles and projects where I applied modern technologies, clean architecture and collaborative development practices.',

    items: [
        {
            type: 'freelance',
            role: 'Full Stack Developer',
            company: 'Freelance',
            period: '2024 — Present',
            location: 'Remote',
            description:
                'Development of responsive web applications and REST APIs using React, TypeScript, Node.js, Express and MongoDB.',
            achievements: [
                'Built reusable and maintainable frontend components.',
                'Designed REST APIs with validation and centralized error handling.',
                'Implemented authentication and authorization using JWT.',
            ],
            technologies: [
                'React',
                'TypeScript',
                'Node.js',
                'Express',
                'MongoDB',
            ],
        },
        {
            type: 'project',
            role: 'Frontend Developer',
            company: 'Personal Projects',
            period: '2023 — Present',
            location: 'Remote',
            description:
                'Created modern user interfaces focused on responsiveness, accessibility and maintainable component architecture.',
            achievements: [
                'Developed responsive interfaces using mobile-first principles.',
                'Improved component reusability through consistent design patterns.',
                'Integrated external APIs and managed asynchronous application states.',
            ],
            technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Vite'],
        },
    ],
} as const;
