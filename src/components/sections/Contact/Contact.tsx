import { Container, SectionTitle } from '../../ui'
import { contact } from '../../../data/contact';
import { ContactForm } from './components/ContactForm';
import { ContactInfo } from './components/ContactInfo';

export const Contact = () => {
  return (
    <section id="contact" className="bg-background py-24 lg:py-32">
      <Container>
        <SectionTitle
          eyebrow={contact.eyebrow}
          title={contact.title}
          subtitle={contact.description}
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <ContactInfo
            email={contact.email}
            location={contact.location}
            availability={contact.availability}
            socialLinks={contact.socialLinks}
          />

          <ContactForm content={contact.form} />
        </div>
      </Container>
    </section>
  );
};
