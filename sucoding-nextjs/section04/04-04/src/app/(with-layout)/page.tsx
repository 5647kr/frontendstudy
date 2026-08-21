import { ArrowRight, Zap, Shield, Globe } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <section className="text-center space-y-6 mb-20">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
          Welcome to <span className="text-blue-600">My App</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          A simple, beautiful, and powerful platform designed to make your life
          easier
        </p>
        <div className="flex justify-center gap-4 pt-4">
          <Link
            href="/login"
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <button className="inline-flex items-center px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors text-lg font-medium">
            Learn More
          </button>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="p-8 text-center space-y-4 border-2 border-gray-200 rounded-lg hover:border-blue-200 transition-colors bg-white shadow-sm">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
            <Zap className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">
            Fast & Efficient
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Built with performance in mind to deliver lightning-fast experiences
          </p>
        </div>

        <div className="p-8 text-center space-y-4 border-2 border-gray-200 rounded-lg hover:border-blue-200 transition-colors bg-white shadow-sm">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <Shield className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">
            Secure & Reliable
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Your data is protected with industry-leading security standards
          </p>
        </div>

        <div className="p-8 text-center space-y-4 border-2 border-gray-200 rounded-lg hover:border-blue-200 transition-colors bg-white shadow-sm">
          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
            <Globe className="h-8 w-8 text-orange-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">Global Access</h3>
          <p className="text-gray-600 leading-relaxed">
            Access your data from anywhere, anytime, on any device
          </p>
        </div>
      </section>
    </div>
  );
}
