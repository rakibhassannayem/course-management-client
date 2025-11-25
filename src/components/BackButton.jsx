"use client";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

export default function BackButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push('/courses')}
      className="group flex items-center text-primary hover:text-white mb-8 transition"
    >
      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center mr-3 group-hover:bg-primary transition duration-1000 cursor-pointer">
        <FaArrowLeft />
      </div>
      Back to collection
    </button>
  );
}
