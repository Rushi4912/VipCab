import Image from 'next/image';
import SectionHeading from './SectionHeading';

const galleryImages = [
    { src: '/gallery/gallery1.jpeg', alt: 'VIP Cab Gallery Image 1' },
    { src: '/gallery/gallery2.jpeg', alt: 'VIP Cab Gallery Image 2' },
    { src: '/gallery/gallery3.jpeg', alt: 'VIP Cab Gallery Image 3' },
    { src: '/gallery/gallery4.jpeg', alt: 'VIP Cab Gallery Image 4' },
];

export default function Gallery() {
    return (
        <section className="py-16 px-4" id="gallery">
            <div className="mx-auto max-w-7xl">
                <SectionHeading
                    title="Our Gallery"
                    subtitle="Glimpses of our premium fleet and professional service in action."
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {galleryImages.map((image, index) => (
                        <div
                            key={index}
                            className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-md group transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            />
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                                    <svg
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
