export type SendContactMessageParams = {
    name: string;
    email: string;
    subject: string;
    message: string;
    botcheck?: string;
};

export type SendContactMessageResult = {
    success: boolean;
    message: string;
};

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
const DEFAULT_EMAIL = 'kal2403199255@gmail.com';

/**
 * Builds a mailto URI with prefilled subject and message as a fallback.
 */
export const buildContactMailtoUrl = (
    params: Partial<SendContactMessageParams>,
    recipientEmail: string = DEFAULT_EMAIL,
): string => {
    const subject = encodeURIComponent(
        params.subject
            ? `[Portfolio Contact] ${params.subject}`
            : '[Portfolio Contact] Inquiry',
    );

    const bodyText = [
        params.name ? `Name: ${params.name}` : '',
        params.email ? `Email: ${params.email}` : '',
        '',
        params.message ?? '',
    ]
        .filter(Boolean)
        .join('\n');

    const body = encodeURIComponent(bodyText);

    return `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
};

/**
 * Sends a contact message using Web3Forms or configured endpoint.
 */
export const sendContactMessage = async (
    params: SendContactMessageParams,
): Promise<SendContactMessageResult> => {
    // If botcheck field is filled by an automated bot, fail silently
    if (params.botcheck && params.botcheck.trim().length > 0) {
        return {
            success: true,
            message: 'Your message has been received.',
        };
    }

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
        return {
            success: false,
            message:
                'Email delivery service is not configured. Please use the direct email link below.',
        };
    }

    try {
        const response = await fetch(WEB3FORMS_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({
                access_key: accessKey,
                name: params.name.trim(),
                email: params.email.trim(),
                subject: params.subject.trim(),
                message: params.message.trim(),
                from_name: `${params.name.trim()} (Portfolio)`,
            }),
        });

        const data = (await response.json()) as {
            success?: boolean;
            message?: string;
        };

        if (response.ok && data.success) {
            return {
                success: true,
                message:
                    data.message ??
                    'Thank you! Your message has been sent successfully.',
            };
        }

        return {
            success: false,
            message:
                data.message ??
                'Failed to send message. Please try again or use direct email.',
        };
    } catch {
        return {
            success: false,
            message:
                'Network connection error. Please check your connection or contact me directly via email.',
        };
    }
};
