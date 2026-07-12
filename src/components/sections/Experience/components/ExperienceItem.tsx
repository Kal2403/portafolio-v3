import { BriefcaseBusiness, Code2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type ExperienceType = 'freelance' | 'project';

type ExperienceItemProps = {
    type: ExperienceType;
    role: string;
    company: string;
    period: string;
    location: string;
    description: string;
    achievements: readonly string[];
    technologies: readonly string[];
};

const experienceIcons: Record<ExperienceType, LucideIcon> = {
    freelance: BriefcaseBusiness,
    project: Code2,
};

export const ExperienceItem = ({
    type,
    role,
    company,
    period,
    location,
    description,
    achievements,
    technologies,
}: ExperienceItemProps) => {
    const Icon = experienceIcons[type];

    return (
        <article className="relative border-l border-border pl-8 sm:pl-10">
            <span
                aria-hidden="true"
                className="absolute -left-2 top-2 size-4 rounded-full border-4 border-background bg-primary"
            />

            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Icon aria-hidden="true" className="size-5" />
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold text-text-primary">{role}</h3>
                        <p className="mt-1 font-medium text-primary">{company}</p>
                    </div>
                </div>

                <div className="text-sm text-text-muted sm:text-right">
                    <p>{period}</p>
                    <p className="mt-1">{location}</p>
                </div>
            </div>

            <p className="mt-6 max-w-3xl leading-7 text-text-secondary">
                {description}
            </p>

            <ul className="mt-6 space-y-3">
                {achievements.map((achievement) => (
                    <li
                        key={achievement}
                        className="flex gap-3 text-sm leading-6 text-text-secondary"
                    >
                        <span
                            aria-hidden="true"
                            className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                        />
                        <span>{achievement}</span>
                    </li>
                ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
                {technologies.map((technology) => (
                    <span
                        key={technology}
                        className="rounded-full border border-border bg-surface px-3 py-1 text-sm font-medium text-text-secondary"
                    >
                        {technology}
                    </span>
                ))}
            </div>
        </article>
    );
};
