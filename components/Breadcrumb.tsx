import Link from 'next/link';

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
    const allItems: BreadcrumbItem[] = [{ label: 'Home', href: '/' }, ...items];

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: allItems.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.label,
            ...(item.href ? { item: item.href } : {}),
        })),
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <nav aria-label="Breadcrumb" className="py-3">
                <ol className="flex flex-wrap items-center gap-1.5 text-xs text-text-muted">
                    {allItems.map((item, index) => (
                        <li key={index} className="flex items-center gap-1.5">
                            {index > 0 && (
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            )}
                            {item.href ? (
                                <Link href={item.href} className="hover:text-accent transition-colors">
                                    {item.label}
                                </Link>
                            ) : (
                                <span className="text-text-light font-medium">{item.label}</span>
                            )}
                        </li>
                    ))}
                </ol>
            </nav>
        </>
    );
}
