"use client";

import Link from "next/link";
import { Award, TrendingUp } from "lucide-react";

export default function Pricing() {
  const tiers = [
    {
      id: "basic",
      title: "Basic",
      price: 9,
      subtitle: "For casual learners",
      features: [
        "Access to core courses",
        "Community support",
        "No support after finishing",
        "Limited certificates",
      ],
    },
    {
      id: "pro",
      title: "Pro",
      price: 29,
      subtitle: "Most popular",
      features: [
        "Everything in Basic",
        "Premium courses",
        "Priority support",
        "Certificates",
      ],
    },
    {
      id: "enterprise",
      title: "Enterprise",
      price: 99,
      subtitle: "For teams & organizations",
      features: [
        "Team seats",
        "SAML / SSO (beta)",
        "Dedicated success manager",
        "Custom onboarding",
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold">
          Plans for every learner
        </h1>
        <p className="text-accent mt-3 max-w-2xl mx-auto">
          Choose a plan that fits your goals. Upgrade, downgrade or cancel
          anytime.
        </p>
      </header>

      <section className="grid gap-6 grid-cols-1 md:grid-cols-3">
        {tiers.map((tier) => (
          <div key={tier.id} className="card shadow-lg">
            <div className="card-body">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-semibold">{tier.title}</h2>
                  <p className="text-sm text-accent">{tier.subtitle}</p>
                </div>
              </div>

              <div className="my-6">
                <div className="text-4xl font-bold text-primary">
                  ${tier.price}
                </div>
              </div>

              <ul className="mb-6 space-y-2">
                {tier.features.map((f, idx) => (
                  <li key={idx} className="text-sm text-accent">
                    • {f}
                  </li>
                ))}
              </ul>

              <div className="card-actions">
                <button className="btn btn-primary w-full text-white">
                  Choose {tier.title}
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="mt-12 text-center">
        <div className="flex items-center justify-center gap-3 text-primary">
          <Award />
          <TrendingUp />
        </div>
        <p className="mt-3 text-accent">
          Need a custom quote for teams?{" "}
          <Link href="/contact" className="link">
            Contact sales
          </Link>
        </p>
      </section>
    </div>
  );
}
