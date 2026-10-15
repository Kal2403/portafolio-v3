import {
    Container,
    FadeIn,
    FadeInStagger,
    FadeInStaggerItem,
    SectionTitle,
} from '../../ui';
import { experience } from '../../../data/experience';
import { ExperienceItem } from './components/ExperienceItem';

export const Experience = () => {
    return (
        <section id="experience" className="py-24 lg:py-32">
            <Container>
                <FadeIn direction="up">
                    <SectionTitle
                        eyebrow={experience.eyebrow}
                        title={experience.title}
                        subtitle={experience.description}
                    />
                </FadeIn>

                <FadeInStagger className="mx-auto mt-16 max-w-4xl space-y-14">
                    {experience.items.map((item) => (
                        <FadeInStaggerItem
                            key={`${item.company}-${item.role}-${item.period}`}
                        >
                            <ExperienceItem
                                type={item.type}
                                role={item.role}
                                company={item.company}
                                period={item.period}
                                location={item.location}
                                description={item.description}
                                achievements={item.achievements}
                                technologies={item.technologies}
                            />
                        </FadeInStaggerItem>
                    ))}
                </FadeInStagger>
            </Container>
        </section>
    );
};
