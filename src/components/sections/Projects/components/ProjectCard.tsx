import { useState } from 'react';
import { ArrowUpRight, ImageIcon } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

type ProjectCardProps = {
    title: string;
    category: string;
    description: string;
    image: string;
    technologies: readonly string[];
    repositoryUrl: string;
    liveUrl: string;
    featured: boolean;
};

export const ProjectCard = ({
    title,
    category,
    description,
    image,
    technologies,
    repositoryUrl,
    liveUrl,
    featured,
}: ProjectCardProps) => {
    const [hasImageError, setHasImageError] = useState(false);

    return (
        <article className="group overflow-hidden rounded-3xl border border-border bg-background transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="relative aspect-16/10 overflow-hidden bg-surface">
                {!hasImageError ? (
                    <img
                        src={image}
                        alt={`Preview of ${title}`}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        onError={() => setHasImageError(true)}
                    />
                ) : (
                    <div className="flex h-full flex-col items-center justify-center gap-4 px-6 text-center">
                        <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                            <ImageIcon aria-hidden="true" className="size-6" />
                        </div>

                        <div>
                            <p className="font-semibold text-text-primary">{title}</p>
                            <p className="mt-1 text-sm text-text-muted">
                                Project preview coming soon
                            </p>
                        </div>
                    </div>
                )}

                {featured && (
                    <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                        Featured
                    </span>
                )}
            </div>

            <div className="p-6 sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                    {category}
                </p>

                <h3 className="mt-3 text-2xl font-semibold text-text-primary">
                    {title}
                </h3>

                <p className="mt-4 leading-7 text-text-secondary">{description}</p>

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

                {(repositoryUrl || liveUrl) && (
                    <div className="mt-8 flex flex-wrap gap-4">
                        {repositoryUrl && (
                            <a
                                href={repositoryUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-semibold text-text-primary transition-colors hover:text-primary"
                            >
                                <FaGithub aria-hidden="true" className="size-4" />
                                Repository
                            </a>
                        )}

                        {liveUrl && (
                            <a
                                href={liveUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-semibold text-text-primary transition-colors hover:text-primary"
                            >
                                Live demo
                                <ArrowUpRight aria-hidden="true" className="size-4" />
                            </a>
                        )}
                    </div>
                )}
            </div>
        </article>
    );
};
