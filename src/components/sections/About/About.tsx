import { Container } from "../../ui";
import { AboutContent } from "./components/AboutContent";
import { AboutHighlights } from "./components/Abouthighlights";
import { AboutProfileCard } from "./components/AboutProfileCard";

export const About = () => {
    return (
        <section id="about" className="py-24 lg:py-32">
            <Container>
                <div className="grid items-start gap-16 lg:grid-cols-[1.2fr_0.8fr]">
                    <div className="space-y-12">
                        <AboutContent />

                        <AboutHighlights />
                    </div>

                    <AboutProfileCard />
                </div>
            </Container>
        </section>
    );
};
