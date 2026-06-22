type SectionTitleProps = {
    eyebrow?: string;
    title: string,
    subtitle?: string;
}

export const SectionTitle = ({
    eyebrow,
    title,
    subtitle,
}: SectionTitleProps) => {
    return (
        <div className="mx-auto max-w-3xl text-center">
            {eyebrow && (
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                    {eyebrow}
                </p>
            )}

            <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
                {title}
            </h2>

            {subtitle && (
                <p className="mt-4 text-lg leading-8 text-text-secondary">{subtitle}</p>
            )}
        </div>
    );
};
