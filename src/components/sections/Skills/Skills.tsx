import { Container, SectionTitle } from '../../ui'
import { skills } from '../../../data/skills';
import { SkillCard } from './components/SkillCard';

export const Skills = () => {
    return (
        <section id="skills" className="bg-surface py-24 lg:py-32">
            <Container>
                <SectionTitle eyebrow={skills.eyebrow} title={skills.title} />

                <div className="mt-12 grid gap-6 md:grid-cols-2">
                    {skills.categories.map((category) => (
                        <SkillCard
                            key={category.title}
                            title={category.title}
                            icon={category.icon}
                            technologies={category.technologies}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
};
