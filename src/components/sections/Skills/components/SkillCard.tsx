import {
    FaCode,
    FaDatabase,
    FaServer,
    FaToolbox,
} from 'react-icons/fa';
import type { IconType } from 'react-icons';

type SkillIcon = 'frontend' | 'backend' | 'database' | 'tools';

type SkillCardProps = {
    title: string;
    icon: SkillIcon;
    technologies: readonly string[];
};

const skillIcons: Record<SkillIcon, IconType> = {
    frontend: FaCode,
    backend: FaServer,
    database: FaDatabase,
    tools: FaToolbox,
};

export const SkillCard = ({
    title,
    icon,
    technologies,
}: SkillCardProps) => {
    const Icon = skillIcons[icon];

    return (
        <article className="group rounded-3xl border border-border bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <Icon aria-hidden="true" className="size-5" />
            </div>

            <h3 className="mt-6 text-xl font-semibold text-text-primary">
                {title}
            </h3>

            <div className="mt-6 flex flex-wrap gap-2">
                {technologies.map((technology) => (
                    <span
                        key={technology}
                        className="rounded-full border border-border bg-surface px-3 py-1 text-sm font-medium text-text-secondary transition-colors hover:border-primary/40 hover:text-primary"
                    >
                        {technology}
                    </span>
                ))}
            </div>
        </article>
    );
};
