import type { Testimonial } from '@/data/testimonials';

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex gap-0.5 text-accent" aria-label={`${rating} out of 5 stars`}>
            {Array.from({ length: 5 }).map((_, i) => (
                <svg
                    key={i}
                    className={`w-4 h-4 ${i < rating ? 'fill-current' : 'fill-border'}`}
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
}

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
    return (
        <div className="rounded-xl border border-border bg-white p-6 shadow-sm">
            <StarRating rating={testimonial.rating} />
            <blockquote className="mt-3 text-sm text-text-light leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
            </blockquote>
            <div className="mt-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent font-bold text-sm">
                    {testimonial.name.charAt(0)}
                </div>
                <div>
                    <div className="text-sm font-semibold text-primary">{testimonial.name}</div>
                    <div className="text-xs text-text-muted">{testimonial.route}</div>
                </div>
            </div>
        </div>
    );
}
