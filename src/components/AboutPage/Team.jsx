import TeamMember from "./atoms/TeamMember";

function Team() {
    const members = [
        {
            id: 1,
            image: "/images/emily.png",
            name: "Emily Johnson",
            position: "Chief Executive Officer (CEO)",
            description:
                "Emily leads our team with vision and a passion for innovation. With over 10 years of experience in the e-commerce industry, her mission is to ensure every customer has the best possible experience.",
        },
        {
            id: 2,
            image: "/images/sarah.png",
            name: "Sarah Smith",
            position: "Head of Product Development",
            description:
                "Sarah oversees product development and selection. Her expertise in market trends and product quality ensures that our offerings meet the highest standards.",
        },
        {
            id: 3,
            image: "/images/michael.png",
            name: "Michael Smith",
            position: "Marketing & Community Manager",
            description:
                "Michael manages all marketing campaigns and community engagement. He ensures that every customer receives clear information and feels connected to our brand.",
        },
    ];
    return (
        <div className="mx-6 lg:mx-24">
            <h1 className="text-2xl font-bold py-6">Meet the Team</h1>
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-20 py-12">
                    {members.map((member) => (
                        <TeamMember 
                        key={member.id}
                        image={member.image}
                        name={member.name}
                        position={member.position}
                        description={member.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Team;