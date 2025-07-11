import Image from "next/image";
import Link from "next/link";
import React from "react";
import SocialIcon from "../SocialIcon";

function Footer({hideCta = false}) {
  return (
    <div className="">
      {/* CTA Section */}
      {!hideCta && (
      <section className="lg:container mx-auto px-6 sm:px-10 -mb-52 md:-mb-21.5 lg::-mb-18 relative">
        <div className="relative bg-peach rounded-2xl overflow-hidden py-16 md:py-14.25 lg:py-18.5 px-6 md:px-14.25 lg:px-24">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="relative z-20 lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
              <h2 className="text-white text-[2.5rem] leading-[1] font-medium mb-4">
                Let's talk about<br />your project
              </h2>
              <p className="text-white">
                Ready to take it to the next level? Contact us today and find out
                how our expertise can help your business grow.
              </p>
            </div>
            <div className="relative z-20">
              <Link
                href="/contact"
                className=" inline-block bg-white text-dark-grey hover:bg-light-peach hover:text-white active:scale-90 transition-all duration-300 uppercase font-medium tracking-wide px-6 py-4 rounded-lg"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          <div className="absolute -top-[50%] right-0 z-10">
            <Image src="/shared/desktop/bg-pattern-small-circle.svg" alt="cta-bg" width={292} height={292} />
          </div>

          
          <div className="absolute -top-[50%] right-[292px] z-10">
            <Image src="/shared/desktop/bg-pattern-small-circle.svg" alt="cta-bg" width={292} height={292} />
          </div>

          <div className="absolute -bottom-[50%] right-[584px] z-10">
            <Image src="/shared/desktop/bg-pattern-small-circle.svg" alt="cta-bg" width={292} height={292} />
          </div>

          <div className="absolute -bottom-[50%] right-[584px] z-10">
            <Image src="/shared/desktop/bg-pattern-small-circle.svg" alt="cta-bg" width={292} height={292} />
          </div>

          <div className="absolute -bottom-[50%] right-[292px] z-10">
            <Image src="/shared/desktop/bg-pattern-small-circle.svg" alt="cta-bg" width={292} height={292} />
          </div>

          <div className="absolute -bottom-[50%] right-0 z-10">
            <Image src="/shared/desktop/bg-pattern-small-circle.svg" alt="cta-bg" width={292} height={292} />
          </div>
        </div>
      </section>
      )}

      {/* Footer */}
      <footer className={`bg-black pb-16 md:pb-20 lg:pb-18 ${hideCta ? 'pt-16 md:pt-20 lg:pt-18' : 'pt-66 md:pt-41.5 lg:pt-36 '}`}>
        <div className="lg:container mx-auto px-6 sm:px-10">
          <div className="flex flex-col md:flex-row items-center justify-between sm:pb-12 sm:border-b sm:border-dark-grey">
            <div className="mb-8 md:mb-0">
              <Image
                src="/shared/desktop/logo-light.png"
                alt="Designo Logo"
                width={196}
                height={24}
              />
            </div>
            <div className="flex flex-col md:justify-end md:flex-row gap-8 md:gap-10 pt-8 sm:pt-0 border-t border-dark-grey sm:border-t-0 w-full">
              {[
                { label: "Our Company", href: "/our-company" },
                { label: "Locations", href: "/locations" },
                { label: "Contact", href: "/contact" },
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-white uppercase text-sm hover:underline active:scale-90 transition-all duration-300 text-center md:text-left"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="pt-10 sm:pt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="text-white opacity-50 text-center md:text-left">
                <p className="font-bold">Designo Central Office</p>
                <p>3886 Wellington Street</p>
                <p>Toronto, Ontario M9C 3J5</p>
              </div>
              <div className="text-white opacity-50 text-center md:text-left">
                <p className="font-bold">Contact Us (Central Office)</p>
                <p>P: +1 253-863-8967</p>
                <p>M: contact@designo.co</p>
              </div>
              <div className="flex justify-center md:justify-end gap-4 items-center">
                {[
                  { href: "#", ariaLabel: "Facebook", iconPath: "/shared/desktop/icon-facebook.svg", alt: "Facebook" },
                  { href: "#", ariaLabel: "YouTube", iconPath: "/shared/desktop/icon-youtube.svg", alt: "YouTube" },
                  { href: "#", ariaLabel: "Twitter", iconPath: "/shared/desktop/icon-twitter.svg", alt: "Twitter" },
                  { href: "#", ariaLabel: "Pinterest", iconPath: "/shared/desktop/icon-pinterest.svg", alt: "Pinterest" },
                  { href: "#", ariaLabel: "Instagram", iconPath: "/shared/desktop/icon-instagram.svg", alt: "Instagram" },
                ].map((icon, index) => (
                  <SocialIcon key={index} {...icon} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;