import type { ReactNode } from "react";
import { Footer, Navbar } from "../components/layout";

type MainLayoutProps = {
    children: ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <div className="min-h-screen bg-background text-text-primary">
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    )
}
