import { Container } from "../../ui";

const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
];

export const Navbar = () => {
    return (
        <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
            <Container>
                <div className="flex h-20 items-center justify-between">
                    <a href="/" className="text-xl font-bold tracking-tight">KalTechGroup</a>

                    <nav aria-label="Main navigation">
                        <ul className="hidden items-center gap-8 md:flex">
                            {navItems.map((item) => (
                                <li key={item.href}>
                                    <a 
                                        href={item.href}
                                        className="text-sm font-medium text-text-secondary transition-colors hover:text-primary"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </Container>
        </header>
    );
};
