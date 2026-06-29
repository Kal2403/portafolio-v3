import { about } from "../../../../data/about";

export const AboutHighlights = () => {
    return (
        <div className="grid gap-6 sm:grid-cols-2">
            {about.highlights.map((highlight) => (
                <article
                    key={highlight.title}
                    className="rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                    <h3 className="text-lg font-semibold text-text-primary">
                        {highlight.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-text-secondary">
                        {highlight.description}
                    </p>
                </article>
            ))}
        </div>
    );
};
