export default function NewsletterSubscription() {
  return (
    <section className="flex flex-col mt-1">
      <h3 className="self-start text-lg font-bold text-black">
        Stay in the loop
      </h3>
      <p className="mt-6 text-sm leading-6 text-neutral-700 max-md:mr-0.5">
        Join our mailing list to stay in the loop with our newest feature
        releases, NFT drops, and tips and tricks for navigating NFTs.
      </p>
      <form className="flex gap-10 py-2 pr-2 pl-7 mt-6 w-full text-xs bg-white border-2 border-solid border-zinc-100 rounded-[46px] shadow-[8px_15px_38px_rgba(0,0,0,0.15)] max-md:pl-5">
        <label htmlFor="emailInput" className="sr-only">
          Enter your email address
        </label>
        <input
          id="emailInput"
          type="email"
          placeholder="Enter your email address.."
          className="grow shrink my-auto text-neutral-400 w-[114px]"
          aria-label="Enter your email address"
        />
        <button
          type="submit"
          className="gap-2 self-stretch px-8 py-4 tracking-wider text-white bg-blue-700 border-white rounded-[46px] max-md:px-5"
        >
          Subscribe Now
        </button>
      </form>
    </section>
  );
}
