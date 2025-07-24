import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/davinci_colour.jpg"
          alt="Hero background"
          fill
          className="object-cover object-center "
          priority
        />
      </div>


      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-transparent to-black/20" />


      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="text-center lg:text-left">

            <div className="mb-4">
              <span className="inline-block px-4 py-2 text-sm font-medium text-white/90 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                Colour Grading Made Simple
              </span>
            </div>


            <h1 className="text-3xl md:text-5xl  font-bold text-white mb-6 leading-tight">
              Become an Expert in Colour Grading with
              <span className="pl-2 bg-gradient-to-r from-purple-200 via-blue-300 to-pink-300 bg-clip-text text-transparent">
                Visual Recipes
              </span>
            </h1>


            <p className="text-sm sm:text-xl  text-white/90 mb-8 max-w-2xl leading-relaxed">
              Discover step-by-step DaVinci Resolve node trees that transform
              ordinary footage into cinematic masterpieces. From beginner basics
              to advanced techniques.
            </p>


            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                //  onClick={() => {}}
              >
                Explore Recipes
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>


      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
