import { Container, SectionTitle } from '../../ui';
import { experience } from '../../../data/experience';
import { ExperienceItem } from './components/ExperienceItem';

export const Experience = () => {
    return (
        <section id="experience" className="py-24 lg:py-32">
            <Container>
                <SectionTitle
                    eyebrow={experience.eyebrow}
                    title={experience.title}
                    subtitle={experience.description}
                />

                <div className="mx-auto mt-16 max-w-4xl space-y-14">
                    {experience.items.map((item) => (
                        <ExperienceItem
                            key={`${item.company}-${item.role}-${item.period}`}
                            type={item.type}
                            role={item.role}
                            company={item.company}
                            period={item.period}
                            location={item.location}
                            description={item.description}
                            achievements={item.achievements}
                            technologies={item.technologies}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
};
