export default function MapEmbed() {
    const mapQuery = encodeURIComponent('New Sangvi, Pune, Maharashtra 411027');
    const mapUrl = `https://www.google.com/maps/embed/v1/place?key=REPLACE_WITH_YOUR_API_KEY&q=${mapQuery}`;

    // NOTE: Using a simple iframe embed without API key for demonstration if API key is not available
    const simpleEmbedUrl = `https://www.google.com/maps?q=${mapQuery}&output=embed`;

    return (
        <div className="mt-4 w-full h-32 rounded-lg overflow-hidden border border-white/5 shadow-inner group">
            <iframe
                title="VIP Cab Location"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                src={simpleEmbedUrl}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-90 group-hover:opacity-100 transition-all duration-500"
            ></iframe>
        </div>
    );
}
