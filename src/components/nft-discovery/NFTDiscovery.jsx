import CategoryButton from "./CategoryButton";
import NFTGrid from "./NFTGrid";

const categories = [
  { name: "All Categories", active: true },
  { name: "Art", active: false },
  { name: "Celebrities", active: false },
  { name: "Gaming", active: false },
  { name: "Sport", active: false },
  { name: "Music", active: false },
  { name: "Crypto", active: false },
];

const nftImages = [
  "https://cdn.builder.io/api/v1/image/assets/TEMP/f9aeb957a94e6db5b7255995dc134b00563328da685d22295e16fdf0077a8908?placeholderIfAbsent=true&apiKey=6f7f910cbdf84b78b772e5e78e5609e6",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/cea3765cf11fb087bcde9e6f93a8c0d9bf5b99def2b019eb9226e476ff95791a?placeholderIfAbsent=true&apiKey=6f7f910cbdf84b78b772e5e78e5609e6",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/7a037d6e6f117664ec653be36c44a41fb11afbb9a146eb6e00648d53956b8760?placeholderIfAbsent=true&apiKey=6f7f910cbdf84b78b772e5e78e5609e6",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/ef3c429e26ee015ec31457aff143a283218ce68fae1df4c14584aa19e0b6ab7c?placeholderIfAbsent=true&apiKey=6f7f910cbdf84b78b772e5e78e5609e6",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/7932c975459dc01346c2506662b402dcde8b8183abea388ee3659601191c0cd2?placeholderIfAbsent=true&apiKey=6f7f910cbdf84b78b772e5e78e5609e6",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/c1831269e3d89cf647de8c2a23e26adf6240c23f1ac1dd4cef0d0570c6123b92?placeholderIfAbsent=true&apiKey=6f7f910cbdf84b78b772e5e78e5609e6",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/be0ae86895fb62444d160d7930b709b1ef8655b148e3c9bb3c3a52ab7271003d?placeholderIfAbsent=true&apiKey=6f7f910cbdf84b78b772e5e78e5609e6",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/f683013074980453f1dbc0bc98874e5598266067773efae6a9cc996842eafafa?placeholderIfAbsent=true&apiKey=6f7f910cbdf84b78b772e5e78e5609e6",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/9aee10d5f08acb2b3df27d4a7ecb3f72503f00524035d2d14fa261cb3e510f76?placeholderIfAbsent=true&apiKey=6f7f910cbdf84b78b772e5e78e5609e6",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/13c7ec2b950b93831bcd91afd9d9295b00f86a3361d692036b49963961ba6b8d?placeholderIfAbsent=true&apiKey=6f7f910cbdf84b78b772e5e78e5609e6",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/554f8a1ea8883742cd0dca62f0a3106aec4e5cb2ad7dd541d4a021fe1f500302?placeholderIfAbsent=true&apiKey=6f7f910cbdf84b78b772e5e78e5609e6",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/cde8a4425d3a7b287e13d60d22f8c5ccfbef52f21959b609f0068446cda17a3a?placeholderIfAbsent=true&apiKey=6f7f910cbdf84b78b772e5e78e5609e6",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/17004122c890685da6c73f0b628a4d8b88366e25c98e6ac394f78059225930f6?placeholderIfAbsent=true&apiKey=6f7f910cbdf84b78b772e5e78e5609e6",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/824086a0a11962e2d330822dd1716702fd9022a96e5089b4f682544e001aa976?placeholderIfAbsent=true&apiKey=6f7f910cbdf84b78b772e5e78e5609e6",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/ca53454e2c436911fa8c26d9db131b6be1cda28b9544ffb49064c530fdd61bdc?placeholderIfAbsent=true&apiKey=6f7f910cbdf84b78b772e5e78e5609e6",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/d29bc8488707bcff3c77b376ac2c0fc7bacab1385f7b1eaff46d6953d15f2270?placeholderIfAbsent=true&apiKey=6f7f910cbdf84b78b772e5e78e5609e6",
];

export default function NFTDiscovery() {
  return (
    <section className="flex flex-col rounded-none">
      <div className="flex flex-col justify-center items-center px-20 py-14 w-full bg-slate-200 bg-opacity-20 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col w-full max-w-[1200px] max-md:max-w-full">
          <h1 className="self-start text-4xl font-bold text-black">
            Discover more NFTs
          </h1>
          <div className="flex flex-wrap gap-5 justify-between mt-9 w-full text-sm leading-none max-md:mr-1.5 max-md:max-w-full">
            <div className="flex flex-wrap gap-3 items-start my-auto text-black max-md:max-w-full">
              {categories.map((category, index) => (
                <CategoryButton
                  key={index}
                  name={category.name}
                  active={category.active}
                />
              ))}
            </div>
            <button className="flex gap-2.5 justify-center items-center px-5 py-2.5 text-indigo-900 bg-zinc-300 bg-opacity-20 rounded-[100px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d072c1deef48d0e3eb5a4d197c6f6a440a71514cd5e51982c72bcfb2ee9a38e6?placeholderIfAbsent=true&apiKey=6f7f910cbdf84b78b772e5e78e5609e6"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
              />
              <span className="self-stretch my-auto">All Filters</span>
            </button>
          </div>
          <NFTGrid images={nftImages} />
          <button className="gap-2.5 self-center px-10 py-5 mt-14 text-xl text-indigo-800 border-2 border-violet-800 border-solid rounded-[50px] max-md:px-5 max-md:mt-10">
            More NFTs
          </button>
        </div>
      </div>
    </section>
  );
}