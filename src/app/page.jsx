import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Home() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Header />

      {/* Hero section */}
      <section className="lg:container mx-auto sm:px-10 ">
        {/* Background pattern */}
        <div className="relative bg-peach overflow-hidden sm:rounded-2xl lg:py-32">
        <div className="absolute right-0 top-0 h-full w-full overflow-hidden z-0">
          <Image
            src="/home/desktop/bg-pattern-hero-home.svg"
            alt=""
            width={640}
            height={640}
            className="absolute top-0 right-0 md:-right-[100px] lg:-top-[180px] lg:-right-[180px]"
            aria-hidden="true"
          />
        </div>

        {/* Content for all screen sizes */}
        <div className="relative z-10 text-center md:text-center lg:text-left px-6 pt-20 md:pt-16 lg:pt-0 lg:h-full lg:flex lg:items-center">
          <div className="lg:w-1/2 flex flex-col lg:pl-16 lg:pr-0">
            <h1 className="text-white text-3xl md:text-5xl font-medium leading-tight mb-6 max-w-md md:max-w-xl mx-auto lg:mx-0">
              Award-winning custom designs and digital branding solutions
            </h1>
            <p className="text-white text-base md:text-lg mb-8 max-w-md md:max-w-lg mx-auto lg:mx-0">
              With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.
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
        </div>

        {/* Phone image for all screen sizes with proper positioning */}
        <div className="absolute right-0 top-0 h-full w-full lg:w-1/2 flex items-end md:items-end lg:items-center justify-center lg:justify-end overflow-visible">
          {/* For mobile - positioned at bottom */}
          <div className="block md:hidden relative w-[284px] h-[573px]">
            <Image
              src="/home/desktop/image-hero-phone.png"
              alt="Phone showcase"
              fill
              className="object-contain absolute -bottom-6"
              priority
            />
          </div>
          
          {/* For tablet - positioned at bottom */}
          <div className="hidden md:block lg:hidden relative w-[400px] h-[720px]">
            <Image
              src="/home/desktop/image-hero-phone.png"
              alt="Phone showcase"
              fill
              className="object-contain absolute -bottom-32"
              priority
            />
          </div>
          
          {/* For desktop - positioned to overlap right edge */}
          <div className="hidden lg:block relative w-[600px] h-[913px] overflow-visible">
            <Image
              src="/home/desktop/image-hero-phone.png"
              alt="Phone showcase"
              fill
              className="object-contain absolute -right-16 -top-12"
              priority
            />
          </div>
        </div>
        </div>
     
      </section>

      {/* Services section */}
      <section className="lg:container mx-auto sm:px-10 py-16 lg:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[640px]">
          {/* Web Design Card */}
          <Link
            href="/web-design"
            className="relative bg-black rounded-2xl overflow-hidden group h-full"
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-peach/80 transition-colors duration-300 flex flex-col items-center justify-center text-center z-10">
              <h2 className="text-white text-3xl md:text-4xl font-medium uppercase mb-3">
                Web Design
              </h2>
              <p className="text-white flex items-center uppercase tracking-widest font-medium">
                View Projects <span className="ml-4">&rarr;</span>
              </p>
            </div>
            <Image
              src="/home/desktop/image-web-design-large.jpg"
              alt="Web Design"
              fill
              className="object-cover"
            />
          </Link>

          <div className="flex flex-col gap-6">
            {/* App Design Card */}
            <Link
              href="/app-design"
              className="relative bg-black rounded-2xl overflow-hidden group h-full"
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-peach/80 transition-colors duration-300 flex flex-col items-center justify-center text-center z-10">
                <h2 className="text-white text-3xl md:text-4xl font-medium uppercase mb-3">
                  App Design
                </h2>
                <p className="text-white flex items-center uppercase tracking-widest font-medium">
                  View Projects <span className="ml-4">&rarr;</span>
                </p>
              </div>
              <Image
                src="/home/desktop/image-app-design.jpg"
                alt="App Design"
                fill
                className="object-cover"
              />
            </Link>

            {/* Graphic Design Card */}
            <Link
              href="/graphic-design"
              className="relative bg-black rounded-2xl overflow-hidden group h-full"
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-peach/80 transition-colors duration-300 flex flex-col items-center justify-center text-center z-10">
                <h2 className="text-white text-3xl md:text-4xl font-medium uppercase mb-3">
                  Graphic Design
                </h2>
                <p className="text-white flex items-center uppercase tracking-widest font-medium">
                  View Projects <span className="ml-4">&rarr;</span>
                </p>
              </div>
              <Image
                src="/home/desktop/image-graphic-design.jpg"
                alt="Graphic Design"
                fill
                className="object-cover"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="lg:container mx-auto sm:px-10 pb-16 lg:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Passionate */}
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-8">
              <Image
                src="/home/desktop/illustration-passionate.svg"
                alt="Passionate"
                width={202}
                height={202}
              />
            </div>
            <h3 className="text-xl font-medium uppercase tracking-wide mb-4">
              Passionate
            </h3>
            <p className="text-dark-grey">
              Each project starts with an in-depth brand research to ensure we
              only create products that serve a purpose. We merge art, design,
              and technology into exciting new solutions.
            </p>
          </div>

          {/* Resourceful */}
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-8">
              <Image
                src="/home/desktop/illustration-resourceful.svg"
                alt="Resourceful"
                width={202}
                height={202}
              />
            </div>
            <h3 className="text-xl font-medium uppercase tracking-wide mb-4">
              Resourceful
            </h3>
            <p className="text-dark-grey">
              Everything that we do has a strategic purpose. We use an agile
              approach in all of our projects and value customer collaboration.
              It guarantees superior results that fulfill our clients' needs.
            </p>
          </div>

          {/* Friendly */}
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-8">
              <Image
                src="/home/desktop/illustration-friendly.svg"
                alt="Friendly"
                width={202}
                height={202}
              />
            </div>
            <h3 className="text-xl font-medium uppercase tracking-wide mb-4">
              Friendly
            </h3>
            <p className="text-dark-grey">
              We are a group of enthusiastic folks who know how important it is
              to have a happy feel to any project. Our clients are our top
              priority, and we go the extra mile to ensure great results.
            </p>
          </div>
        </div>
      </section>

      <Footer />

      <div className="absolute top-[475px] left-0 z-[-1] hidden md:block">
        <Image src="/shared/desktop/bg-pattern-leaf.svg" alt="leaf" width={1006} height={594} />
      </div>

      <div className="absolute bottom-[475px] right-0 z-[-1] hidden md:block">
        <Image src="/shared/desktop/bg-pattern-leaf.svg" alt="leaf" width={1006} height={594} />
      </div>
    </div>
  );
}

export default Home;
