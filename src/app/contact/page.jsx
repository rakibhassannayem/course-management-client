import React from "react";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneFlip } from "react-icons/fa6";
import { TbClockHour4 } from "react-icons/tb";

export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-primary mb-2">
          Contact Us
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Questions about courses or billing? Drop a message — we usually reply
          within 24 hours.
        </p>
      </header>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Left - Info cards */}
        <div className="space-y-6">
          <div className="rounded-lg bg-linear-to-r from-white/60 to-gray-50 p-6 shadow-md border border-base-300">
            <h2 className="text-lg font-semibold mb-2">Get in touch</h2>
            <p className="text-sm text-gray-600 mb-4">
              Prefer email or phone? Use the details below or send us a message
              using the form.
            </p>

            <ul className="space-y-3">
              <li className="flex items-start gap-4">
                <span className="p-2 rounded-md bg-primary/10 text-primary">
                  <HiOutlineOfficeBuilding />
                </span>
                <div>
                  <div className="text-sm font-medium">Head Office</div>
                  <address className="not-italic text-sm text-gray-600">
                    Mirpur-2
                    <br />
                    Dhaka
                  </address>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="p-2 rounded-md bg-emerald-50 text-emerald-600">
                  <MdOutlineEmail />
                </span>
                <div>
                  <div className="text-sm font-medium">Email</div>
                  <a
                    href="mailto:support@example.com"
                    className="text-sm text-primary hover:underline"
                  >
                    support@example.com
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="p-2 rounded-md bg-blue-50 text-blue-600">
                  <FaPhoneFlip />
                </span>
                <div>
                  <div className="text-sm font-medium">Phone</div>
                  <a
                    href="tel:+1234567890"
                    className="text-sm text-primary hover:underline"
                  >
                    +880 1832567890
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="p-2 rounded-md bg-yellow-50 text-yellow-700">
                  <TbClockHour4 />
                </span>
                <div>
                  <div className="text-sm font-medium">Business Hours</div>
                  <div className="text-sm text-gray-600">
                    Mon–Fri: 9:00 AM–6:00 PM
                    <br />
                    Sat: 10:00 AM–2:00 PM
                    <br />
                    Sun: Closed
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Right - Form */}
        <div className="rounded-lg bg-white p-6 shadow-lg border border-base-300">
          <h3 className="text-lg font-semibold mb-3">Send us a message</h3>
          <p className="text-sm text-gray-600 mb-4">
            Fill out the form and we will get back to you shortly.
          </p>

          <form
            action="mailto:support@example.com"
            method="post"
            encType="text/plain"
            className="space-y-4"
          >
            <div>
              <label className="block text-sm font-medium mb-1">
                Full name
              </label>
              <input
                name="Name"
                type="text"
                required
                className="w-full rounded-md border-gray-200 shadow-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                name="Email"
                type="email"
                required
                className="w-full rounded-md border-gray-200 shadow-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                name="Message"
                rows="2"
                required
                className="w-full rounded-md border-gray-200 shadow-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Tell us how we can help..."
              />
            </div>

            <div className="flex items-center justify-between gap-4">
              <button className="btn btn-primary text-white">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
