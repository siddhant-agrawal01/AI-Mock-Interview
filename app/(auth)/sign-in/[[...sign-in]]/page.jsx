import { SignIn } from "@clerk/nextjs";
import { ArrowRight, Shield, Users, Zap } from "lucide-react";

export default function Page() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden max-w-5xl w-full grid grid-cols-1 lg:grid-cols-5 border border-gray-100">
        {/* Left side - Branding Column */}
        <div className="relative lg:col-span-2 hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-blue-700 flex flex-col justify-between p-10">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-lg bg-white/20 flex items-center justify-center">
                <span className="text-white text-xl font-bold">AI</span>
              </div>
              <span className="ml-3 text-white font-medium">AI Mock Interview</span>
            </div>
            
            <div className="py-10">
              <h2 className="text-3xl font-bold text-white mb-4">
                Prepare to succeed in your interviews
              </h2>
              <p className="text-white/80 mb-8 text-lg">
                Practice with confidence using our AI-powered interview simulation platform
              </p>
              
              <div className="space-y-5 mt-8">
                <div className="flex items-center text-white">
                  <div className="bg-white/15 p-2 rounded-lg mr-4">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <span>AI-powered realistic scenarios</span>
                </div>
                <div className="flex items-center text-white">
                  <div className="bg-white/15 p-2 rounded-lg mr-4">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <span>Instant feedback and coaching</span>
                </div>
                <div className="flex items-center text-white">
                  <div className="bg-white/15 p-2 rounded-lg mr-4">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  <span>Track progress and improvements</span>
                </div>
              </div>
            </div>
            
            <div className="text-sm text-white/70">
              Trusted by thousands of job seekers worldwide
            </div>
          </div>
        </div>

        {/* Right side - Sign In Form */}
        <div className="p-8 md:p-12 flex flex-col justify-center lg:col-span-3">
          {/* Mobile branding */}
          <div className="flex items-center mb-8 lg:hidden">
            <div className="h-10 w-10 rounded-lg bg-indigo-600 flex items-center justify-center">
              <span className="text-white text-lg font-bold">AI</span>
            </div>
            <span className="ml-3 text-xl font-medium">AI Mock Interview</span>
          </div>

          <div className="max-w-md mx-auto w-full">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Welcome back
            </h1>
            <p className="text-gray-600 mb-8">
              Sign in to continue your interview preparation journey
            </p>

            <div className="w-full mb-8">
              <SignIn />
            </div>

            <div className="flex items-center justify-between">
              <p className="text-gray-600 text-sm">New to our platform?</p>
              
              <a href="/sign-up"
                className="flex items-center text-indigo-600 font-medium hover:text-indigo-700 transition group"
              >
                Create account
                <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <p className="text-xs text-center text-gray-500">
                By signing in, you agree to our <a href="/terms" className="text-indigo-600 hover:underline">Terms of Service</a> and <a href="/privacy" className="text-indigo-600 hover:underline">Privacy Policy</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}