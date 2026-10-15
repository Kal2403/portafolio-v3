import {
    Container,
    FadeIn,
    FadeInStagger,
    FadeInStaggerItem,
    SectionTitle,
} from '../../ui';
import { skills } from '../../../data/skills';
import { SkillCard } from './components/SkillCard';

export const Skills = () => {
    return (
        <section id="skills" className="bg-surface py-24 lg:py-32">
            <Container>
                <FadeIn direction="up">
                    <SectionTitle eyebrow={skills.eyebrow} title={skills.title} />
                </FadeIn>

                <FadeInStagger className="mt-12 grid gap-6 md:grid-cols-2">
                    {skills.categories.map((category) => (
                        <FadeInStaggerItem key={category.title}>
                            <SkillCard
                                title={category.title}
                                icon={category.icon}
                                technologies={category.technologies}
                            />
                        </FadeInStaggerItem>
                    ))}
                </FadeInStagger>
            </Container>
        </section>
    );
};
