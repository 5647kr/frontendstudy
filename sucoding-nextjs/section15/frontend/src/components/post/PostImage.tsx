import Image from "next/image";

export default function PostImage() {
  return (
    <div className="relative mb-8 aspect-video overflow-hidden rounded-lg">
      {/* /placeholder.svg */}
      <Image
        src={"/images/blog-2.jpg"}
        alt=" Hown AI Is Revolutionizing Content Creation in 2026"
        fill
        className="object-cover"
      />
    </div>
  );
}
