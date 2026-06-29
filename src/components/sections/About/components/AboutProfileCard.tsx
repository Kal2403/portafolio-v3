import { about } from "../../../../data/about";

export const AboutProfileCard = () => {
    return (
        <aside className="rounded-3xl border border-border bg-surface p-8 shadow-sm">
            <div className="mb-8 flex items-center gap-4">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white">
                    K
                </div>

                <div>
                    <h3 className="text-2xl font-bold">
                        {about.profile.name}
                    </h3>

                    <p className="text-text-secondary">
                        {about.profile.role}
                    </p>
                </div>
            </div>

            <div className="space-y-5">
                <div>
                    <p className="text-sm text-text-muted">
                        Location
                    </p>

                    <p className="font-medium">
                        {about.profile.location}
                    </p>
                </div>

                <div>
                    <p className="text-sm text-text-muted">
                        Availability
                    </p>

                    <p className="font-medium text-primary">
                        {about.profile.availability}
                    </p>
                </div>

                <div>
                    <p className="text-sm text-text-muted">
                        Experience
                    </p>

                    <p className="font-medium">
                        {about.profile.experience}
                    </p>
                </div>

                <div>
                    <p className="mb-3 text-sm text-text-muted">
                        Main Stack
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {about.profile.stack.map((item) => (
                            <span
                                key={item}
                                className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </aside>
    );
};
