interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    align?: 'left' | 'center';
    light?: boolean;
}

export default function SectionHeading({
    title,
    subtitle,
    align = 'center',
    light = false,
}: SectionHeadingProps) {
    return (
        <div className={`mb-10 ${align === 'center' ? 'text-center' : 'text-left'}`}>
            <h2
                className={`font-heading text-3xl font-bold md:text-4xl ${light ? 'text-white' : 'text-primary'
                    }`}
            >
                {title}
            </h2>
            {subtitle && (
                <p
                    className={`mt-3 text-base max-w-2xl ${align === 'center' ? 'mx-auto' : ''
                        } ${light ? 'text-white/70' : 'text-text-light'}`}
                >
                    {subtitle}
                </p>
            )}
            <div
                className={`mt-4 h-1 w-16 rounded-full gold-gradient ${align === 'center' ? 'mx-auto' : ''
                    }`}
            />
        </div>
    );
}
