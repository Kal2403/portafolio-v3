import {
    type ChangeEvent,
    type FormEvent,
    useRef,
    useState,
} from 'react';
import {
    AlertCircle,
    CheckCircle2,
    LoaderCircle,
    Mail,
    RotateCcw,
    Send,
} from 'lucide-react';
import {
    buildContactMailtoUrl,
    sendContactMessage,
} from '../../../../services';

type ContactFormContent = {
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    subjectLabel: string;
    subjectPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitLabel: string;
};

type ContactFormProps = {
    content: ContactFormContent;
};

type FormValues = {
    name: string;
    email: string;
    subject: string;
    message: string;
    botcheck: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

type SubmitFeedback = {
    type: 'success' | 'error';
    message: string;
};

const initialValues: FormValues = {
    name: '',
    email: '',
    subject: '',
    message: '',
    botcheck: '',
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const ContactForm = ({ content }: ContactFormProps) => {
    const [values, setValues] = useState<FormValues>(initialValues);
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [feedback, setFeedback] = useState<SubmitFeedback | null>(null);

    const isSubmissionLocked = useRef(false);

    const validateForm = (): FormErrors => {
        const nextErrors: FormErrors = {};

        if (!values.name.trim()) {
            nextErrors.name = 'Please enter your name.';
        }

        if (!values.email.trim()) {
            nextErrors.email = 'Please enter your email address.';
        } else if (!emailPattern.test(values.email)) {
            nextErrors.email = 'Please enter a valid email address.';
        }

        if (!values.subject.trim()) {
            nextErrors.subject = 'Please enter a subject.';
        }

        if (!values.message.trim()) {
            nextErrors.message = 'Please enter your message.';
        } else if (values.message.trim().length < 20) {
            nextErrors.message =
                'Your message must contain at least 20 characters.';
        }

        return nextErrors;
    };

    const handleChange = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = event.target;
        const fieldName = name as keyof FormValues;

        setValues((currentValues) => ({
            ...currentValues,
            [fieldName]: value,
        }));

        setErrors((currentErrors) => ({
            ...currentErrors,
            [fieldName]: undefined,
        }));

        if (feedback?.type === 'error') {
            setFeedback(null);
        }
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (isSubmissionLocked.current) {
            return;
        }

        const validationErrors = validateForm();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        isSubmissionLocked.current = true;
        setIsSubmitting(true);
        setFeedback(null);

        try {
            const result = await sendContactMessage({
                name: values.name,
                email: values.email,
                subject: values.subject,
                message: values.message,
                botcheck: values.botcheck,
            });

            if (result.success) {
                setValues(initialValues);
                setErrors({});
                setIsSubmitted(true);
                setFeedback({
                    type: 'success',
                    message: result.message,
                });
            } else {
                setFeedback({
                    type: 'error',
                    message: result.message,
                });
            }
        } finally {
            isSubmissionLocked.current = false;
            setIsSubmitting(false);
        }
    };

    const handleReset = () => {
        setIsSubmitted(false);
        setFeedback(null);
        setValues(initialValues);
        setErrors({});
    };

    const mailtoFallbackUrl = buildContactMailtoUrl(values);

    if (isSubmitted && feedback?.type === 'success') {
        return (
            <div className="rounded-3xl border border-border bg-background p-8 text-center sm:p-12">
                <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-green-500/10 text-green-600 dark:text-green-400">
                    <CheckCircle2 className="size-8" aria-hidden="true" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-text-primary">
                    Message Sent Successfully!
                </h3>

                <p className="mx-auto mt-3 max-w-md text-text-secondary">
                    {feedback.message}
                </p>

                <div className="mt-8">
                    <button
                        type="button"
                        onClick={handleReset}
                        className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90"
                    >
                        <RotateCcw className="size-4" aria-hidden="true" />
                        Send another message
                    </button>
                </div>
            </div>
        );
    }

    return (
        <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-3xl border border-border bg-background p-6 sm:p-8"
        >
            {/* Honeypot field for anti-spam */}
            <input
                type="text"
                name="botcheck"
                value={values.botcheck}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
                style={{ display: 'none' }}
            />

            <div>
                <h3 className="text-2xl font-semibold text-text-primary">
                    Send a message
                </h3>

                <p className="mt-3 leading-7 text-text-secondary">
                    Share a few details about your project, opportunity or collaboration.
                </p>
            </div>

            {feedback?.type === 'error' && (
                <div
                    role="alert"
                    className="mt-6 rounded-2xl border border-red-500/20 bg-red-500/10 p-4 text-red-600 dark:text-red-400"
                >
                    <div className="flex items-start gap-3">
                        <AlertCircle className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
                        <div className="space-y-2 text-sm leading-6">
                            <p className="font-semibold">Unable to send message</p>
                            <p>{feedback.message}</p>
                            <a
                                href={mailtoFallbackUrl}
                                className="inline-flex items-center gap-1.5 font-semibold text-primary underline underline-offset-4 hover:opacity-80"
                            >
                                <Mail className="size-4" aria-hidden="true" />
                                Send directly via your email client
                            </a>
                        </div>
                    </div>
                </div>
            )}

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div>
                    <label
                        htmlFor="contact-name"
                        className="text-sm font-semibold text-text-primary"
                    >
                        {content.nameLabel}
                    </label>

                    <input
                        id="contact-name"
                        name="name"
                        type="text"
                        disabled={isSubmitting}
                        value={values.name}
                        onChange={handleChange}
                        placeholder={content.namePlaceholder}
                        autoComplete="name"
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? 'contact-name-error' : undefined}
                        className="mt-2 w-full rounded-xl border border-border bg-surface px-4 py-3 text-text-primary outline-none transition-colors placeholder:text-text-muted focus:border-primary disabled:opacity-60"
                    />

                    {errors.name && (
                        <p
                            id="contact-name-error"
                            className="mt-2 text-sm text-red-600 dark:text-red-400"
                        >
                            {errors.name}
                        </p>
                    )}
                </div>

                <div>
                    <label
                        htmlFor="contact-email"
                        className="text-sm font-semibold text-text-primary"
                    >
                        {content.emailLabel}
                    </label>

                    <input
                        id="contact-email"
                        name="email"
                        type="email"
                        disabled={isSubmitting}
                        value={values.email}
                        onChange={handleChange}
                        placeholder={content.emailPlaceholder}
                        autoComplete="email"
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? 'contact-email-error' : undefined}
                        className="mt-2 w-full rounded-xl border border-border bg-surface px-4 py-3 text-text-primary outline-none transition-colors placeholder:text-text-muted focus:border-primary disabled:opacity-60"
                    />

                    {errors.email && (
                        <p
                            id="contact-email-error"
                            className="mt-2 text-sm text-red-600 dark:text-red-400"
                        >
                            {errors.email}
                        </p>
                    )}
                </div>
            </div>

            <div className="mt-6">
                <label
                    htmlFor="contact-subject"
                    className="text-sm font-semibold text-text-primary"
                >
                    {content.subjectLabel}
                </label>

                <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    disabled={isSubmitting}
                    value={values.subject}
                    onChange={handleChange}
                    placeholder={content.subjectPlaceholder}
                    aria-invalid={Boolean(errors.subject)}
                    aria-describedby={
                        errors.subject ? 'contact-subject-error' : undefined
                    }
                    className="mt-2 w-full rounded-xl border border-border bg-surface px-4 py-3 text-text-primary outline-none transition-colors placeholder:text-text-muted focus:border-primary disabled:opacity-60"
                />

                {errors.subject && (
                    <p
                        id="contact-subject-error"
                        className="mt-2 text-sm text-red-600 dark:text-red-400"
                    >
                        {errors.subject}
                    </p>
                )}
            </div>

            <div className="mt-6">
                <label
                    htmlFor="contact-message"
                    className="text-sm font-semibold text-text-primary"
                >
                    {content.messageLabel}
                </label>

                <textarea
                    id="contact-message"
                    name="message"
                    rows={6}
                    disabled={isSubmitting}
                    value={values.message}
                    onChange={handleChange}
                    placeholder={content.messagePlaceholder}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={
                        errors.message ? 'contact-message-error' : undefined
                    }
                    className="mt-2 w-full resize-y rounded-xl border border-border bg-surface px-4 py-3 text-text-primary outline-none transition-colors placeholder:text-text-muted focus:border-primary disabled:opacity-60"
                />

                {errors.message && (
                    <p
                        id="contact-message-error"
                        className="mt-2 text-sm text-red-600 dark:text-red-400"
                    >
                        {errors.message}
                    </p>
                )}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    aria-busy={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                    {isSubmitting ? (
                        <>
                            <LoaderCircle
                                aria-hidden="true"
                                className="size-5 animate-spin"
                            />
                            Sending message...
                        </>
                    ) : (
                        <>
                            {content.submitLabel}
                            <Send aria-hidden="true" className="size-5" />
                        </>
                    )}
                </button>
            </div>
        </form>
    );
};
