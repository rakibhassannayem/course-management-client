import Link from "next/link";
import {
  BookOpen,
  Users,
  Award,
  Clock,
  TrendingUp,
  Star,
  Check,
} from "lucide-react";
import { FaStar } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-hero py-20 md:py-32 bg-linear-to-b from-primary/10 to-white rounded-t-xl">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Transform Your Future with
            <span className="text-primary"> Expert-Led Courses</span>
          </h1>
          <p className="text-xl md:text-2xl text-accent mb-8 max-w-3xl mx-auto">
            Learn from industry professionals and master in-demand skills at
            your own pace
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="text-xl btn btn-primary text-white p-6">
              <Link href="/courses">Explore Courses</Link>
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, value: "50K+", label: "Active Students" },
              { icon: BookOpen, value: "500+", label: "Courses Available" },
              { icon: Award, value: "95%", label: "Success Rate" },
              { icon: Star, value: "4.9/5", label: "Average Rating" },
            ].map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <stat.icon className="h-8 w-8 mx-auto text-primary" />
                <div className="text-3xl font-bold">{stat.value}</div>
                <div className="text-sm text-accent">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose EduHub?
            </h2>
            <p className="text-xl text-accent max-w-2xl mx-auto">
              Everything you need to succeed in your learning journey
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-2 border-base-300 rounded-xl hover:scale-101 transition duration-300 hover:shadow-xl p-4 space-y-5">
              <Clock color={"#2463ec"} size={36} />
              <h2 className="text-2xl font-semibold">Learn at Your Pace</h2>
              <p className="text-accent">
                Access courses 24/7 and learn on your own schedule with lifetime
                access
              </p>
            </div>
            <div className="border-2 border-base-300 rounded-xl hover:scale-101 transition duration-300 hover:shadow-xl p-4 space-y-5">
              <Award color={"#2463ec"} size={36} />
              <h2 className="text-2xl font-semibold">Industry Experts</h2>
              <p className="text-accent">
                Learn from professionals with real-world experience in their
                fields
              </p>
            </div>
            <div className="border-2 border-base-300 rounded-xl hover:scale-101 transition duration-300 hover:shadow-xl p-4 space-y-5">
              <TrendingUp color={"#2463ec"} size={36} />
              <h2 className="text-2xl font-semibold">Career Growth</h2>
              <p className="text-accent">
                Gain skills that employers value and advance your career
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Popular Categories
            </h2>
            <p className="text-xl text-accent">
              Explore our most sought-after course categories
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Development",
              "Business",
              "Design",
              "Marketing",
              "Photography",
              "Music",
              "Health",
              "Lifestyle",
            ].map((category, index) => (
              <div
                key={index}
                className="border-2 border-base-300 rounded-xl hover:scale-101 transition duration-300 hover:shadow-xl p-4 space-y-5"
              >
                <h3 className="font-semibold">{category}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Student Success Stories
            </h2>
            <p className="text-xl text-accent">
              Hear from our community of learners
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Software Developer",
                content:
                  "EduHub helped me transition into tech. The courses are comprehensive and the instructors are amazing!",
              },
              {
                name: "Michael Chen",
                role: "UX Designer",
                content:
                  "The best investment in my career. Learned practical skills I use every day at work.",
              },
              {
                name: "Emily Rodriguez",
                role: "Marketing Manager",
                content:
                  "Flexible learning that fits my schedule. The quality of content is outstanding.",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="card card-border border-base-300 bg-base-100"
              >
                <div className="card-body">
                  <div className="text-primary flex gap-1">
                    <FaStar size={20} />
                    <FaStar size={20} />
                    <FaStar size={20} />
                    <FaStar size={20} />
                  </div>
                  <h2 className="card-title text-xl ">{testimonial.name}</h2>
                  <p className="text-accent">{testimonial.role}</p>
                  <div className="card-actions justify-end">
                    <p>{testimonial.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Learning?
          </h2>
          <p className="text-xl mb-8">
            Join thousands of students achieving their goals with EduHub
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/courses" className="btn btn-primary text-white">Browse Courses</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
