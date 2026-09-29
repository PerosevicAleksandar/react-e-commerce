function AboutUs() {
    return(
        <div className="mx-6 lg:mx-24 grid grid-cols-1 lg:grid-cols-2 items-stretch gap-8 lg:gap-4 border-b border-secondary pb-10">
            <div className="h-96 lg:h-180">
            <img src="./images/about-banner.png" alt="Team" className="h-full w-full object-cover"/>
            </div>
            <div className="max-w-xl">
                <h1 className="text-2xl lg:text-3xl font-bold mb-6">So, who are we?</h1>
                <div className="text-base lg:text-2xl leading-7 lg:leading-9 text-justify">
                    <p>Since our founding in 2015, our mission has always been to bring quality and convenience to our customers. We believe in transparency, sustainability, and delivering value in every product we offer.</p>
                    <p>Over the years, we’ve grown from a small local shop to a trusted e-commerce brand serving thousands of satisfied customers. Every product is carefully selected and tested to ensure it meets our high standards.</p>
                    <p>Our team is passionate about innovation and constantly works on improving the shopping experience, offering new products, and listening to our community’s feedback.</p>
                    <p>We are committed to giving back to the community and supporting local initiatives, because we believe a business should make a positive impact beyond its sales.</p>
                    <button className="w-40 lg:w-48 btn-dark mt-6">Get in Touch</button>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;