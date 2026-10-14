import { useEffect, useState } from 'react';
import { FileText, Menu, X } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { contact } from '../../../data/contact';
import { Button, Container, ThemeToggle } from '../../ui';

const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
];

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const githubLink =
        contact.socialLinks.find((link) => link.id === 'github')?.url ??
        'https://github.com/kal2403';
    const linkedinLink =
        contact.socialLinks.find((link) => link.id === 'linkedin')?.url ??
        'https://www.linkedin.com/in/cristhian-castillo-alfaro-5b1665395/';
    const resumeUrl = contact.resumeUrl ?? '/cv.pdf';

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsMobileMenuOpen(false);
            }
        };

        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
            <Container>
                <div className="flex h-20 items-center justify-between">
                    <a
                        href="/"
                        className="text-xl font-bold tracking-tight text-text-primary transition-colors hover:text-primary"
                    >
                        KalTechGroup
                    </a>

                    {/* Desktop Navigation */}
                    <div className="flex items-center gap-6">
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

                        <div className="hidden items-center gap-3 md:flex">
                            <Button
                                href={resumeUrl}
                                target="_blank"
                                rel="noreferrer"
                                variant="outline"
                                className="px-4 py-2 text-xs"
                            >
                                <FileText className="mr-1.5 size-3.5" />
                                CV
                            </Button>
                        </div>

                        <ThemeToggle />

                        {/* Mobile Hamburger Button */}
                        <button
                            type="button"
                            onClick={() => setIsMobileMenuOpen((open) => !open)}
                            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                            aria-expanded={isMobileMenuOpen}
                            aria-controls="mobile-menu"
                            className="inline-flex size-10 items-center justify-center rounded-xl border border-border bg-surface text-text-secondary transition-colors hover:border-primary/40 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 md:hidden"
                        >
                            {isMobileMenuOpen ? (
                                <X className="size-5" aria-hidden="true" />
                            ) : (
                                <Menu className="size-5" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </Container>

            {/* Mobile Navigation Drawer & Backdrop */}
            {isMobileMenuOpen && (
                <>
                    <div
                        className="fixed inset-0 top-20 z-40 bg-black/40 backdrop-blur-xs md:hidden"
                        onClick={closeMobileMenu}
                        aria-hidden="true"
                    />

                    <div
                        id="mobile-menu"
                        className="fixed inset-x-0 top-20 z-50 max-h-[calc(100vh-5rem)] overflow-y-auto border-b border-border bg-background p-6 shadow-2xl md:hidden"
                    >
                        <nav aria-label="Mobile navigation">
                            <ul className="flex flex-col space-y-1">
                                {navItems.map((item) => (
                                    <li key={item.href}>
                                        <a
                                            href={item.href}
                                            onClick={closeMobileMenu}
                                            className="block rounded-xl px-4 py-3 text-base font-medium text-text-secondary transition-colors hover:bg-surface hover:text-primary"
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-6 space-y-4 border-t border-border pt-6">
                                <Button
                                    href={resumeUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-full"
                                    onClick={closeMobileMenu}
                                >
                                    <FileText className="mr-2 size-4" />
                                    Descargar CV
                                </Button>

                                <div className="flex items-center justify-center gap-6 pt-2">
                                    <a
                                        href={githubLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label="GitHub"
                                        className="text-text-muted transition-colors hover:text-primary"
                                    >
                                        <FaGithub className="size-5" />
                                    </a>
                                    <a
                                        href={linkedinLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label="LinkedIn"
                                        className="text-text-muted transition-colors hover:text-primary"
                                    >
                                        <FaLinkedin className="size-5" />
                                    </a>
                                </div>
                            </div>
                        </nav>
                    </div>
                </>
            )}
        </header>
    );
};
