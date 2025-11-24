"use client";

import Link from "next/link";
import React from "react";

export default function About() {
  console.log("about");
  return (
    <div className="bg-linear-to-b from-primary/10 to-white rounded-t-xl">
      {/* hero */}
      <section className="gradient-hero py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Architects of the
            <span className="text-primary"> Digital Frontier.</span>
          </h1>
          <p className="text-xl md:text-2xl text-accent mb-8 max-w-3xl mx-auto">
            EJP course is not just a store. It is a curation of the hardware
            that will define the next decade of human progress.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="text-xl btn btn-primary text-white p-6">
              <Link href="/courses">Explore Courses</Link>
            </button>
          </div>
        </div>
      </section>

      {/* Manifesto / Story */}
      <section className="gradient-hero py-20">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-3">
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Our Manifesto
            </h1>
            <p className="text-xl md:text-2xl text-accent mb-8">
              In 2024, technology became indistinguishable from magic. Yet, the
              tools to wield this magic were scattered. Nexus was founded to
              centralize the most potent hardware on the planet.
            </p>

            <p className="text-xl md:text-2xl text-accent mb-8">
              We believe in design that disappears, performance that feels
              limitless, and aesthetics that inspire creation. Every item in our
              catalog is hand-picked not just for specs, but for soul.
            </p>
          </div>
          {/* stats */}

          <div className="flex-1 grid grid-cols-2 gap-3 w-full">
            <div className="text-center border border-base-300 w-full py-8 rounded-2xl bg-primary/10 hover:border-primary">
              <h2 className="text-2xl font-bold text-primary">120K</h2>
              <p className="text-accent font-bold">ACTIVE USERS</p>
            </div>

            <div className="text-center border border-base-300 py-8 rounded-2xl bg-primary/10 hover:border-primary">
              <h2 className="text-2xl font-bold text-primary">45</h2>
              <p className="text-accent font-bold">COUNTRIES</p>
            </div>

            <div className="text-center border border-base-300 py-8 rounded-2xl bg-primary/10 hover:border-primary">
              <h2 className="text-2xl font-bold text-primary">850+</h2>
              <p className="text-accent font-bold">PRODUCTS</p>
            </div>

            <div className="text-center border border-base-300 py-8 rounded-2xl bg-primary/10 hover:border-primary">
              <h2 className="text-2xl font-bold text-primary">24/7</h2>
              <p className="text-accent font-bold">SUPPORT</p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="py-20 bg-slate-900/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Our Manifesto
              </h2>
              <div className="space-y-6 text-slate-400 leading-relaxed text-lg">
                <p>
                  In 2024, technology became indistinguishable from magic. Yet,
                  the tools to wield this magic were scattered. Nexus was
                  founded to centralize the most potent hardware on the planet.
                </p>
                <p>
                  We believe in design that disappears, performance that feels
                  limitless, and aesthetics that inspire creation. Every item in
                  our catalog is hand-picked not just for specs, but for soul.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div label="Active Users" value="120K+" />
              <div label="Countries" value="45" />
              <div label="Products" value="850+" />
              <div label="Support" value="24/7" />
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
