import { about } from "../../../../data/about";

export const AboutContent = () => {
    return (
        <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                {about.eyebrow}
            </p>

            <h2 className="max-w-xl text-4xl font-bold tracking-tight sm:text-5xl">
                {about.title}
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-text-secondary">
                {about.description}
            </p>
        </div>
    );
};
