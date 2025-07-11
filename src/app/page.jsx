import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import Image from "next/image";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import FeatureCard from "@/components/FeatureCard";

// Define homepage metadata
export const metadata = {
  title:
    "Designo | Award-winning custom designs and digital branding solutions",
  description:
    "With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences.",
};

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <Header />

      {/* Hero section */}
      <section className="lg:container mx-auto sm:px-10">
        {/* Background pattern */}
        <div className="relative flex flex-col lg:flex-row items-center bg-peach overflow-hidden sm:rounded-2xl h-[843px] lg:h-[640px] py-20 md:py-15 px-6 md:px-14.5 lg:px-23.75 lg:py-0 ">
          <div className="absolute -right-30.25 lg:right-0 top-25.5 lg:top-0 overflow-hidden z-0">
            <Image
              src="/home/desktop/bg-pattern-hero-home.svg"
              alt=""
              width={640}
              height={640}
              aria-hidden="true"
            />
          </div>

          {/* Content for all screen sizes */}
          <div className="flex flex-col items-center lg:items-start relative z-10">
            <h1 className="text-white text-center lg:text-start text-3xl md:text-5xl font-medium leading-tight mb-2 lg:mb-6 max-w-md md:max-w-xl">
              Award-winning custom designs and digital branding solutions
            </h1>
            <p className="text-white text-center lg:text-start mb-4.75 lg:mb-8 max-w-md md:max-w-lg">
              With over 10 years in the industry, we are experienced in creating
              fully responsive websites, app design, and engaging brand
              experiences. Find out more about our services.
            </p>
            <div className="mb-8 lg:mb-0">
              <Link
                href="/about"
                className="inline-block bg-white text-dark-grey hover:bg-light-peach hover:text-white transition-colors duration-300 uppercase font-medium tracking-wider px-6 py-4 rounded-lg"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="absolute top-[300px] lg:-right-16 lg:top-0 hidden sm:block z-0">
            <Image
              src="/home/desktop/image-hero-phone.png"
              alt="Phone showcase"
              width={624}
              height={913}
              className=""
            />
          </div>

          <div className="absolute -bottom-100 lg:-right-16 lg:top-0 block sm:hidden h-250 w-450 z-0">
            <Image
              src="/home/desktop/image-hero-phone.png"
              alt="Phone showcase"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Services section */}
      <section className="lg:container mx-auto px-6 sm:px-10 py-16 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-2 gap-6 lg:h-[540px]">
          <ServiceCard
            href="/web-design"
            title="Web Design"
            smallImage="/home/desktop/image-web-design-small.jpg"
            largeImage="/home/desktop/image-web-design-large.jpg"
            rowSpan="lg:row-span-2"
          />
          <ServiceCard
            href="/app-design"
            title="App Design"
            smallImage="/home/desktop/image-app-design.jpg"
            largeImage="/home/desktop/image-app-design.jpg"
            colStart="lg:col-start-2"
          />
          <ServiceCard
            href="/graphic-design"
            title="Graphic Design"
            smallImage="/home/desktop/image-graphic-design.jpg"
            largeImage="/home/desktop/image-graphic-design.jpg"
            colStart="lg:col-start-2"
          />
        </div>
      </section>

      {/* Features section */}
      <section className="lg:container mx-auto px-6 sm:px-10 pb-16 lg:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <FeatureCard
            title="Passionate"
            illustration="/home/desktop/illustration-passionate.svg"
            description="Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions."
            delay="0.1"
          />
          <FeatureCard
            title="Resourceful"
            illustration="/home/desktop/illustration-resourceful.svg"
            description="Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients' needs."
            delay="0.2"
          />
          <FeatureCard
            title="Friendly"
            illustration="/home/desktop/illustration-friendly.svg"
            description="We are a group of enthusiastic folks who know how important it is to have a happy feel to any project. Our clients are our top priority, and we go the extra mile to ensure great results."
            delay="0.3"
          />
        </div>
      </section>

      <Footer />

      <div className="absolute top-[475px] left-0 z-[-1] hidden md:block">
        <Image
          src="/shared/desktop/bg-pattern-leaf.svg"
          alt="leaf"
          width={1006}
          height={594}
        />
      </div>

      <div className="absolute bottom-[475px] right-0 z-[-1] hidden md:block">
        <Image
          src="/shared/desktop/bg-pattern-leaf.svg"
          alt="leaf"
          width={1006}
          height={594}
        />
      </div>
    </div>
  );
}
