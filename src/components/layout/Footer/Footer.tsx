import { Container } from "../../ui";

export const Footer = () => {
    return (
        <footer className="border-t border-border py-8">
            <Container>
                <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row">
                    <p className="text-sm text-text-secondary">
                        © {new Date().getFullYear()} KalTechGroup. All rights reserved.
                    </p>
                    <p className="text-sm text-text-muted">
                        Built with React, TypeScript and Tailwind CSS.
                    </p>
                </div>
            </Container>
        </footer>
    );
};
