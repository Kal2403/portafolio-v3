import { Container, SectionTitle } from '../../ui';
import { projects } from '../../../data/projects';
import { ProjectCard } from './components/ProjectCard';

export const Projects = () => {
    return (
        <section id="projects" className="bg-surface py-24 lg:py-32">
            <Container>
                <SectionTitle
                    eyebrow={projects.eyebrow}
                    title={projects.title}
                    subtitle={projects.description}
                />

                <div className="mt-16 grid gap-8 lg:grid-cols-2">
                    {projects.items.map((project) => (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            category={project.category}
                            description={project.description}
                            image={project.image}
                            technologies={project.technologies}
                            repositoryUrl={project.repositoryUrl}
                            liveUrl={project.liveUrl}
                            featured={project.featured}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
};
