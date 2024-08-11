import FeatureCard from './FeatureCard';
const features = [
    {
        icon: "/images/amz-nft/card-tick.jpg",
        title: "Fast Transaction",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet."
    },
    {
        icon: "/images/amz-nft/chart-square.jpg",
        title: "Growth Transaction",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus"
    }
];

export default function AmazeNFT() {
    return (
        <section className="flex flex-col justify-center items-center px-16 py-28 w-full bg-slate-200 bg-opacity-20 max-md:px-5 max-md:pt-24 max-md:max-w-full">
            <div className="w-full max-w-[1164px] max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                    <div className="flex flex-col max-md:ml-0 max-md:w-full">
                        <h2 className="text-3xl font-bold text-black max-md:mt-10">
                            The amazing NFT art of the world here
                        </h2>
                    </div>

                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );

}