import { Container, FadeIn, SectionTitle } from '../../ui';
import { contact } from '../../../data/contact';
import { ContactForm } from './components/ContactForm';
import { ContactInfo } from './components/ContactInfo';

export const Contact = () => {
    return (
        <section id="contact" className="bg-background py-24 lg:py-32">
            <Container>
                <FadeIn direction="up">
                    <SectionTitle
                        eyebrow={contact.eyebrow}
                        title={contact.title}
                        subtitle={contact.description}
                    />
                </FadeIn>

                <div className="mt-16 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                    <FadeIn direction="right" delay={0.1}>
                        <ContactInfo
                            email={contact.email}
                            location={contact.location}
                            availability={contact.availability}
                            socialLinks={contact.socialLinks}
                        />
                    </FadeIn>

                    <FadeIn direction="left" delay={0.2}>
                        <ContactForm content={contact.form} />
                    </FadeIn>
                </div>
            </Container>
        </section>
    );
};
