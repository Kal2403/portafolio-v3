import { ArrowRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Button, Container } from "../../ui";

export const Hero = () => {
    return (
        <section className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
            <Container>
                <div className='grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]'>
                    <div>
                        <p className='mt-5 text-sm font-semibold uppercase tracking-[0.25em] text-primary'>
                            Portfolio V3
                        </p>
                        <h1 className='max-w-4xl text-5xl font-bold tracking-tight text-text-primary sm:text-7xl'>
                            Full Stack Developer
                        </h1>
                        <p className='mt-6 max-w-2xl text-lg leading-8 text-text-secondary'>
                            Construyo aplicaciones web modernas, escalables y enfocadas en
                            experiencia de usuario usando React, Node.js y MongoDB.
                        </p>
                        <div className='mt-10 flex flex-col gap-4 sm:flex-row'>
                            <Button>
                                Ver proyectos
                                <ArrowRight className='ml-2 size-4' />
                            </Button>

                            <Button variant='outline'>Contactarme</Button>
                        </div>
                        <div className='mt-10 flex items-center gap-5'>
                            <a 
                                href="https://github.com/Kal2403"
                                target='_blank'
                                rel='noreferrer'
                                aria-label='GitHub'
                                className='text-text-muted transition-colors hover:text-primary'
                            >
                                <FaGithub className='size-5' />
                            </a>
                            <a 
                                href="#"
                                target='_blank'
                                rel='noreferrer'
                                aria-label='LinkedIn'
                                className='text-text-muted transition-colors hover:text-primary'
                            >
                                <FaLinkedin className='size-5' />
                            </a>
                        </div>
                    </div>
                    <div className='realtive hidden lg:block'>
                        <div className='absolute -inset-4 rounded-4xl bg-primary/10 blur-2xl' />
                        <div className='relative rounded-4xl border border-border bg-surface p-8 shadow-sm'>
                            <div className='mb-6 flex gap-2'>
                                <span className="size-3 rounded-full bg-red-400" ></span>
                                <span className="size-3 rounded-full bg-yellow-400" ></span>
                                <span className="size-3 rounded-full bg-green-400" ></span>
                            </div>
                            <div className='space-y-4 font-mono text-sm text-text-secondary'>
                                <p>
                                    <span className='text-primary'>const</span> developer = &#123;
                                </p>
                                <p className='pl-6'>name: 'Kal2403',</p>
                                <p className='pl-6'>stack: ['MongoDB', 'Express', 'React', 'Node' ],</p>
                                <p className='pl-6'>focus: 'Scalable Web Apps',</p>
                                <p>&#125;;</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
