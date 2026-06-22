import { Container } from "../../ui";

export const Navbar = () => {
    return (
        <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
            <Container>
                <div className="flex h-20 items-center justify-between">
                    <a 
                        href="/"
                        className="text-xl font-bold tracking-tight gap-8 md:flex"
                    >
                        Cristhian
                    </a>
                </div>

                <nav>
                    <ul className="hidden items-center gap-8 md:flex">
                        <li>
                            <a href="#" className="text-sm font-medium text-text-secondary transition-colors hover:text-primary">About</a>
                        </li>
                        <li>
                            <a href="" className="text-sm font-medium text-text-secondary transition-colors hover:text-primary">Projects</a>
                        </li>
                        <li>
                            <a href="" className="text-sm font-medium text-text-secondary transition-colors hover:text-primary">Contact</a>
                        </li>
                    </ul>
                </nav>
            </Container>
        </header>
    )
}
