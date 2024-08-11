export default function FeatureCard({ icon, title, description }) {

    return (
        <div className="flex flex-col ml-5 max-md:ml-0 max-md:w-full">
            <div className="flex gap-4 items-start max-md:mt-10">
                <img loading="lazy" src={icon} alt="" className="object-contain shrink-0 w-9 aspect-square" />
                <div className="flex flex-col grow shrink-0 basis-0 w-fit">
                    <h3 className="self-start text-xl font-bold text-black">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-stone-500">{description}</p>
                </div>
            </div>
        </div>
    );
}