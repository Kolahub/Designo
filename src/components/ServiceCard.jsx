import Image from "next/image";
import Link from "next/link";

export default function ServiceCard({
  href,
  title,
  smallImage,
  largeImage,
  className = "",
  colStart = "",
  rowSpan = ""
}) {
  return (
<Link
  href={href}
  className={`relative overflow-hidden group rounded-2xl ${className} ${rowSpan} ${colStart} lg:h-full md:h-[12.5rem] h-[15.7rem]`}
>
  {/* Pseudo-element background */}
  <div
    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 scale-100 group-hover:scale-110"
    style={{
      backgroundImage: `url('${largeImage}')`
    }}
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50 group-hover:bg-peach/75 transition-all duration-300 flex flex-col gap-6 items-center justify-center z-10">
    <h3 className="text-white text-[1.75rem] sm:text-[2.5rem] font-medium uppercase tracking-wide">
      {title}
    </h3>
    <p className="text-white font-medium flex items-center gap-4 uppercase tracking-[0.3rem]">
      <span>View Projects</span>
      <Image
        src="/shared/desktop/icon-right-arrow.svg"
        alt="arrow"
        width={16}
        height={16}
      />
    </p>
  </div>
</Link>

  );
}
