"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

export default function ServicePageClient({
  hero,
  projects,
  relatedServices,
  bgPattern,
}) {
  return (
    <div className="min-h-screen relative">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="lg:container mx-auto sm:px-10 mt-8">
          <div className="relative bg-peach overflow-hidden sm:rounded-2xl">
            <div className="relative z-10 py-26.25 md:py-16 px-6 md:px-16 text-center max-w-3xl mx-auto">
              <h1 className="text-white text-3xl md:text-5xl font-medium mb-6">
                {hero.title}
              </h1>
              <p className="text-white">{hero.description}</p>
            </div>
            {/* Background patterns */}
            <div className="absolute -top-[120px] lg:-top-[170px] left-0 rotate-180 lg:rotate-0 hidden md:block">
              <Image
                src={bgPattern}
                width={876}
                height={584}
                alt=""
                aria-hidden="true"
              />
            </div>

            {/* Mobile Background patterns */}
            <div className="absolute top-0 right-0 -rotate-90 block md:hidden">
              <Image
                src='/shared/desktop/bg-pattern-small-circle.svg'
                width={300}
                height={300}
                alt=""
                aria-hidden="true"
              />
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="lg:container mx-auto px-6 sm:px-10 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl flex flex-col md:flex-row lg:flex-col"
              >
                {/* Image container - adjust size based on viewport */}
                <div className="w-full md:w-1/2 lg:w-full aspect-[5/4] md:aspect-square lg:aspect-[5/4] relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Content container - horizontal for tablet, vertical for mobile/desktop */}
                <div className="bg-cream p-8 flex-1 flex flex-col justify-center md:text-left lg:text-center cursor-pointer hover:bg-peach group">
                  <h3 className="text-peach text-xl uppercase tracking-[0.3rem] font-medium mb-4 group-hover:text-white">
                    {project.title}
                  </h3>
                  <p className="text-dark-grey text-base group-hover:text-white">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Related Services Section */}
        <section className="lg:container mx-auto px-6 sm:px-10 pb-20 md:pb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7.5 lg:h-77">
            {relatedServices.map((service) => (
              <Link
                key={service.type}
                href={service.path}
                className="relative bg-black/50 hover:bg-peach/75 bg-cover rounded-2xl overflow-hidden group lg:h-full md:h-[12.5rem] h-[15.7rem]"
                style={{ backgroundImage: `url(${service.image})` }}
              >
                <div className="absolute bg-black/50 hover:bg-peach/75 inset-0 flex flex-col gap-6 items-center justify-center">
                  <h3 className="text-white text-[1.75rem] sm:text-[2.5rem] font-medium uppercase tracking-wide">
                    {service.name.toUpperCase()}
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
            ))}
          </div>
        </section>
      </main>
      <Footer />

      <div className="absolute top-[281px] left-0 z-[-1] hidden md:block">
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