import Image from "next/image";
import Link from "next/link";

export default function SocialIcon({ href, ariaLabel, iconPath, alt, width = 24, height = 24 }) {
  return (
    <Link href={href} aria-label={ariaLabel} className="hover:scale-110 active:scale-90 transition-transform duration-300">
      <Image
        src={iconPath}
        alt={alt}
        width={width}
        height={height}
      />
    </Link>
  );
}
