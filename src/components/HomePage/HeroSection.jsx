function HeroSection() {
    return (
        <div className="bg-brand">
            <div className="hero-top grid grid-cols-1 md:grid-cols-10 items-center gap-6 max-w-6xl mx-auto px-6 md:px-10 py-10">
                <div className="discover-text md:col-span-7">
                    <h1 className="text-2xl md:text-3xl font-bold mb-6">Discover Brands</h1>
                    <p className="text-base md:text-xl leading-relaxed max-w-2xl">Discover a collection that blends style and comfort. Browse our carefully selected pieces of modern clothing that follow the latest trends while staying true to your unique style.</p>
                </div>
                <div className="md:col-span-3 flex justify-center">
                    <img src="/images/logo.png" alt="logo" className="w-48 md:w-96 opacity-20" />
                </div>
            </div>
            <div className="hero-bottom grid grid-cols-2 md:grid-cols-4 gap-6 items-center max-w-6xl mx-auto px-6 pb-8">
                <img src="/images/bershka.png" alt="bershka" className="w-32 md:w-45 mx-auto" />
                <img src="/images/hm.png" alt="h&m" className="w-32 md:w-45 mx-auto" />
                <img src="/images/zara.png" alt="zara" className="w-32 md:w-45 h-auto mx-auto" />
                <img src="/images/koton.png" alt="koton" className="w-32 md:w-45 mx-auto" />
            </div>
        </div>
    )
}

export default HeroSection;