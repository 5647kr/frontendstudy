import Image from "next/image";
import Link from "next/link";

const navigationItems = [
  { label: "Blog", href: "#" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
];

const blogPostData = {
  category: "Food Theory",
  title: "What I Learned About Life and Food Backpacking Around Greece",
  date: `Dec 1, ${new Date().getFullYear()}`,
  readTime: "7 min read",
  thumbnailUrl: "/post-thumbnail.png",
  author: {
    name: "George Costanza",
    avatarUrl: "/image-3-1.png",
    initials: "GC",
  },
};

const tableOfContents = [
  { number: 1, text: "How to travel without spending a dime" },
  { number: 2, text: "Get the most out of your credit card reward points" },
  { number: 3, text: "Why you don't need more than 3 pieces of clothing" },
];

const sections = [
  {
    heading: "How to travel without spending a dime",
    paragraphs: [
      "Dignissim lacus sit congue lacus aliquam. Ut non fermentum vulputate donec enim sed ornare scelerisque. Sollicitudin orci leo egestas fermentum platea a imperdiet nisl. Velit placerat nibh nisl ut feugiat. Egestas id egestas nunc mattis. Sed mauris vitae commodo pharetra, vestibulum rhoncus natoque.",
      "Leo id aliquet potenti enim sed maecenas sed ornare. Risus nam mauris etiam nibh maecenas nibh interdum mauris suspendisse. Volutpat, enim interdum facilisi mauris vitae id. Vel malesuada sit etiam dolor. Ullamcorper habitant vitae, nec pretium ullamcorper viverra integer praesent tincidunt. At erat sagittis tellus ultricies in a.",
    ],
  },
  {
    heading: "Get the most out of your credit card reward points",
    paragraphs: [
      "Massa, libero morbi morbi sed non sed. In et neque lectus ultricies leo eros. Auctor in elementum accumsan malesuada gravida neque cursus pellentesque nunc. Dui nullam odio neque varius massa praesent. Neque, porta vel, morbi nulla at tincidunt. Neque, et ultrices duis fermentum, tincidunt sem sed. Erat accumsan dui enim nisl morbi feugiat.",
      "Ac eget lorem sit nulla sed fusce etiam. Elementum nibh in eu sed. Nibh non semper amet sit hac tristique orci. Quis velit vitae amet magnis nec in nunc. Amet vitae id cras nibh. Sed ipsum, lacinia in sit vitae. Duis luctus convallis risus purus sollicitudin purus id eu. Faucibus mattis eget ullamcorper eu suspendisse elit elit lacus purus. Tortor felis.",
    ],
  },
  {
    heading: "Why you don't need more than 3 pieces of clothing",
    paragraphs: [
      "Massa aenean cursus nulla urna dui, fermentum cursus in facilisis. Vulputate euismod vestibulum dolor in elementum quis quis. Erat proin in eget arcu tellus ut ultrices. Quis maecenas ullamcorper ante sit leo placerat. Quisque dictum laoreet eget quam leo tortor scelerisque sit nullam. Lacus, tortor, aenean mattis lobortis lacinia mauris. Viverra nulla.",
      "Sed pellentesque quam lorem urna. Mauris donec molestie eget massa pellentesque facilisis netus mauris. Magna eget eget sollicitudin at faucibus odio. At augue sit nisi et metus cras dignissim vel, tortor. Maecenas molestie consequat cursus posuere ultrices facilisis hac bibendum semper. Sed lorem vel donec proin. Volutpat aliquet rhoncus sit et.",
    ],
  },
];

export default function Home() {
  return (
    <div className="w-full flex flex-col bg-white">
      <header className="w-full max-w-360 mx-auto px-4 lg:px-42.5 py-8.75">
        <nav className="flex items-center justify-between">
          <h1 className="font-black text-[#000538] text-2xl tracking-[0] leading-normal">
            SU
          </h1>

          <div className="flex items-center gap-5">
            {navigationItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-[#5f5b58] text-lg tracking-[0] leading-normal whitespace-nowrap hover:text-[#000538]">
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </header>

      <main className="w-full flex flex-col">
        <article className="w-full max-w-201 mx-auto px-4 py-8">
          <header className="flex flex-col gap-6">
            <span className="bg-[#283a61] text-[#ffffffd9] w-fit px-4 py-1 rounded-[3px] font-medium text-sm">
              {blogPostData.category}
            </span>

            <h1 className="font-bold text-black md:text-[46px] text-[24px] leading-normal">
              {blogPostData.title}
            </h1>

            <div className="font-normal text-[#505050] text-sm leading-[22.4px]">
              {blogPostData.date} • {blogPostData.readTime}
            </div>

            {/* <Image
              className="w-full h-auto rounded-[5px] object-cover"
              alt="Post thumbnail"
              src={blogPostData.thumbnailUrl}
              width={772}
              height={514}
              loading="eager"
              preload={true}
            /> */}
            
            <Image
              className="w-full h-auto rounded-[5px] object-cover"
              alt="Post thumbnail"
              src="https://cdn.pixabay.com/photo/2012/10/26/01/35/aircraft-63032_1280.jpg"
              width={772}
              height={514}
              loading="eager"
              preload={true}
            />

            <div className="flex items-center gap-3.5">
              <div className="w-10.5 h-10.5 rounded-full overflow-hidden relative">
                <Image
                  width={42}
                  height={42}
                  src={blogPostData.author.avatarUrl}
                  alt={blogPostData.author.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <span className="font-bold text-black text-sm leading-[22.4px]">
                {blogPostData.author.name}
              </span>
            </div>
          </header>
        </article>

        <article className="font-roboto flex flex-col max-w-200 mx-auto px-4 mt-7.5">
          <p className="font-medium text-[#424242] text-[20px] md:text-[26px] tracking-[0] md:leading-[41.6px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices
            dui diam arcu pharetra at laoreet pellentesque. Imperdiet sit ut
            ornare nulla risus id fames nascetur urna. Eros in neque tincidunt.
          </p>

          <p className="mt-7.5 font-normal text-[#424242] text-lg md:text-xl tracking-[0] leading-7 md:leading-8">
            Vel leo proin facilisis metus sit ut cursus sagittis. Diam donec mus
            malesuada et ac vulputate. Aenean lacinia suspendisse et mattis
            adipiscing id dictum commodo nunc. Feugiat lorem cras ut cras enim
            neque, elit, facilisi habitasse. Facilisis faucibus nunc congue urna
            diam. Vitae, diam justo, massa, elit. In et nibh ut in diam tellus
            at tellus diam.
          </p>

          <div className="mt-10 bg-neutral-100 border border-[#dddddd] rounded-lg p-8">
            <h2 className="font-bold text-black text-2xl tracking-[0] md:leading-[38.4px] mb-5">
              In this article
            </h2>
            <nav>
              <ol className="flex flex-col gap-3.5">
                {tableOfContents.map((item) => (
                  <li
                    key={item.number}
                    className="font-normal text-[#2f2f2f] text-lg tracking-[0] md:leading-[28.8px]">
                    <a
                      href={`#section-${item.number}`}
                      className="hover:opacity-80">
                      <span>{item.number}. </span>
                      <span className="underline">{item.text}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </div>

          <p className="mt-10 font-normal text-[#424242] text-lg md:text-xl tracking-[0] leading-7 md:leading-8">
            Amet aliquet at a aliquam ac suspendisse euismod. Lectus sit in ut
            erat in. Et nulla a magna amet, amet. Sodales malesuada laoreet
            bibendum neque amet turpis non. Ac arcu lacus turpis elementum
            imperdiet. Euismod purus, libero scelerisque vitae, libero fermentum
            urna, nunc.
          </p>

          {sections.map((section, sectionIndex) => (
            <section key={sectionIndex} id={`section-${sectionIndex + 1}`}>
              <h2 className="mt-7.5 font-bold text-[#2f2f2f] text-xl md:text-2xl tracking-[0] md:leading-[38.4px]">
                {section.heading}
              </h2>
              {section.paragraphs.map((paragraph, paragraphIndex) => (
                <p
                  key={paragraphIndex}
                  className="mt-5 font-normal text-[#424242] text-lg md:text-xl tracking-[0] md:leading-8">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </article>

        <div className="w-full max-w-200 mx-auto mt-12 bg-neutral-100 border border-[#dddddd] rounded-lg p-8">
          <div className="flex gap-7">
            <div className="w-37.5 h-37.5 shrink-0 rounded-full overflow-hidden relative">
              <Image
                width={150}
                height={150}
                src="/image-3-1.png"
                alt="George Costanza"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col gap-3.25 flex-1">
              <h3 className="font-normal text-black text-xl md:text-2xl tracking-[0] md:leading-[38.4px]">
                Written by George Costanza
              </h3>

              <p className="font-roboto font-normal text-black text-base md:text-lg tracking-[0] md:leading-[28.8px]">
                Volutpat cursus id id tincidunt duis id. Urna curabitur ultrices
                molestie bibendum. Purus orci nisl, commodo ipsum, ut urna,
                elementum. Nunc potenti lectus in erat ligula cras. Eget.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full relative mt-36.75 bg-transparent">
        <div className="w-full bg-neutral-100 py-9">
          <p className="font-bold text-[#3d3d3d] text-sm text-center tracking-[0] md:leading-[22.4px]">
            Copyright © {new Date().getFullYear()} Food Ninja Blog. All Rights
            Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
