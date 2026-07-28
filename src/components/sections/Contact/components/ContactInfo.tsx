import { Mail, MapPin, Radio } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

type SocialLink = {
    id: string;
    label: string;
    url: string;
};

type ContactInfoProps = {
    email: string;
    location: string;
    availability: string;
    socialLinks: readonly SocialLink[];
};

const socialIcons = {
    github: FaGithub,
    linkedin: FaLinkedin,
};

export const ContactInfo = ({
    email,
    location,
    availability,
    socialLinks,
}: ContactInfoProps) => {
    return (
        <div className="space-y-8">
            <div>
                <h3 className="text-2xl font-semibold text-text-primary">
                    Contact information
                </h3>

                <p className="mt-3 max-w-xl leading-7 text-text-secondary">
                    Feel free to reach out through email or connect with me on my
                    professional networks.
                </p>
            </div>

            <div className="space-y-5">
                <a
                    href={`mailto:${email}`}
                    className="group flex items-center gap-4 rounded-2xl border border-border bg-background p-5 transition-colors hover:border-primary/40"
                >
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Mail aria-hidden="true" className="size-5" />
                    </span>

                    <span>
                        <span className="block text-sm text-text-muted">Email</span>
                        <span className="font-semibold text-text-primary transition-colors group-hover:text-primary">
                            {email}
                        </span>
                    </span>
                </a>

                <div className="flex items-center gap-4 rounded-2xl border border-border bg-background p-5">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <MapPin aria-hidden="true" className="size-5" />
                    </span>

                    <span>
                        <span className="block text-sm text-text-muted">Location</span>
                        <span className="font-semibold text-text-primary">
                            {location}
                        </span>
                    </span>
                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-border bg-background p-5">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Radio aria-hidden="true" className="size-5" />
                    </span>

                    <span>
                        <span className="block text-sm text-text-muted">Availability</span>
                        <span className="font-semibold text-text-primary">
                            {availability}
                        </span>
                    </span>
                </div>
            </div>

            <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-text-muted">
                    Social profiles
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                    {socialLinks.map((socialLink) => {
                        const Icon =
                            socialIcons[socialLink.id as keyof typeof socialIcons];

                        if (!Icon) {
                            return null;
                        }

                        return (
                            <a
                                key={socialLink.id}
                                href={socialLink.url}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={`Visit my ${socialLink.label} profile`}
                                className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-4 py-3 font-semibold text-text-primary transition-colors hover:border-primary/40 hover:text-primary"
                            >
                                <Icon aria-hidden="true" className="size-5" />
                                {socialLink.label}
                            </a>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
