import CollectionCard from "./CollectionCard";

const collections = [
  {
    id: 1,
    mainImage:
      "/images/top-collections/unsplash_F56Y7dgrAkc.jpg",
    smallImages: [
      "/images/top-collections/unsplash-1.jpg",
      "/images/top-collections/unsplash-4.jpg",
      "/images/top-collections/unsplash-3.jpg",
    ],
    title: "Amazing Collection",
    creator: "Arkhan",
    creatorImage:
      "/images/top-collections/creator-img.png",
    totalItems: 54,
  },
  {
    id: 2,
    mainImage:
      "/images/top-collections/unsplash-6.jpg",
    smallImages: [
      "/images/top-collections/unsplash-4.jpg",
      "/images/top-collections/unsplash-1.jpg",
      "/images/top-collections/unsplash-5.jpg",
    ],
    title: "Amazing Collection",
    creator: "Arkhan",
    creatorImage:
      "/images/top-collections/creator-img.png",
    totalItems: 54,
  },
  {
    id: 3,
    mainImage:
      "/images/top-collections/big-unsplash-7.jpg",
    smallImages: [
      "/images/top-collections/unsplash-8.jpg",
      "/images/top-collections/unsplash-9.jpg",
      "/images/top-collections/unsplash-1.jpg",
    ],
    title: "Amazing Collection",
    creator: "Arkhan",
    creatorImage:
      "/images/top-collections/creator-img.png",
    totalItems: 54,
  },
];

export default function FeaturedCollection() {
  return (
    <section className="flex flex-col rounded-none">
      <div className="flex flex-col justify-center items-center px-20 py-20 w-full bg-slate-200 bg-opacity-20 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col w-full max-w-[1200px] max-md:max-w-full">
          <h2 className="self-start text-3xl font-bold text-black max-md:max-w-full">
            Collection Featured NFTs
          </h2>
          <div className="mt-14 w-full max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              {collections.map((collection) => (
                <CollectionCard key={collection.id} {...collection} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
