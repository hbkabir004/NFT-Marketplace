export default function ContentSection() {
  return (
    <div className="flex flex-col ml-5 w-[46%] max-md:ml-0 max-md:w-full">
      <article className="flex z-10 flex-col items-start self-stretch my-auto w-full max-md:mt-10 max-md:max-w-full">
        <h2 className="w-80 text-3xl font-bold text-black">
          Create and sell your NFTs
        </h2>
        <p className="self-stretch mt-10 text-lg leading-7 text-zinc-600 max-md:max-w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac
          phasellus placerat a pellentesque tellus sed egestas. Et tristique
          dictum sit tristique sed non. Lacinia lorem id consectetur pretium
          diam ut. Pellentesque eu sit blandit fringilla risus faucibus.
        </p>
        <button className="gap-2.5 px-10 py-5 mt-8 text-xl tracking-widest text-white bg-violet-800 border border-white border-solid rounded-[50px] max-md:px-5 dm-sans-font">
          Sign Up Now
        </button>
      </article>
    </div>
  );
}
