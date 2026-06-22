import { Container, Card, Button, SectionTitle } from "./components/ui";

const App = () => {
    return (
        <main className="min-h-screen bg-background py-24 text-text-primary">
            <Container>
                <SectionTitle
                    eyebrow="Design System"
                    title="Base visual del portafolio"
                    subtitle="Componentes reutilizables preparados para construir una interfaz profesional, consistente y escalable."
                />

                <div className="mt-12 grid gap-6 md:grid-cols-3">
                    <Card>
                        <h3 className="text-xl font-semibold">Button</h3>
                        <p className="mt-3 text-text-secondary">
                            Variantes reutilizables para acciones principales y secundarias.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-3">
                            <Button>Primary</Button>
                            <Button variant="outline">Outline</Button>
                        </div>
                    </Card>

                    <Card>
                        <h3 className="text-xl font-semibold">Card</h3>
                        <p className="mt-3 text-text-secondary">
                            Contenedor base para proyectos, tecnologías y experiencia.
                        </p>
                    </Card>

                    <Card>
                        <h3 className="text-xl font-semibold">Container</h3>
                        <p className="mt-3 text-text-secondary">
                            Controla el ancho máximo y padding lateral del layout.
                        </p>
                    </Card>
                </div>
            </Container>
        </main>
    );
}

export default App
