import Image from "next/image";

export default function FeatureCard({
  title,
  description,
  illustration,
  delay = "0"
}) {
  return (
    <div className="flex flex-col items-center text-center group">
      <div className={`bg-[url('/shared/desktop/bg-pattern-small-circle.svg')] bg-no-repeat bg-center relative mb-8 transition-all duration-500 transform group-hover:scale-105 ${delay}`}
        style={{
          animationDelay: `${delay}s`
        }}
      >
        <Image
          src={illustration}
          alt={title}
          width={202}
          height={202}
          className="transition-all duration-500 group-hover:opacity-90"
        />
      </div>
      <h3 className="text-xl font-medium uppercase tracking-[0.3rem] mb-4 transition-colors duration-500 group-hover:text-peach">
        {title}
      </h3>
      <p className="text-dark-grey transition-colors duration-500 group-hover:text-dark-grey/80">
        {description}
      </p>
    </div>
  );
}
