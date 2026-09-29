import Categories from "./atoms/NewArrivals/Categories";

function NewArrivals() {
    const categories = [
        {
            category: "Women",
            image: "/images/women-category.png"
        },
        {
            category: "Men",
            image: "/images/men-category.png"
        },
        {
            category: "Kids",
            image: "/images/kids-category.png"
        }
    ]
    return (
        <div className="max-w-6xl mx-auto px-10 py-10">
            <h2 className="text-3xl font-bold mb-6">New Arrivals</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-18">
                {categories.map((item) => (
                    <Categories
                        key={item.category}
                        category={item.category}
                        image={item.image}
                    />
                ))}
            </div>
        </div>
    )
}

export default NewArrivals;