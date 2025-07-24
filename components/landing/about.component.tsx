import React from "react";
import {
  Users,
  Target,
  BookOpen,
  Palette,
  TrendingUp,
  Award,
} from "lucide-react";

const About = () => {
const features = [
    {
        icon: Users,
        title: "Who This Platform Is For",
        description:
            "Tailored for aspiring filmmakers, content creators, and editors who want to master colour grading workflows using DaVinci Resolve's node tree editor. Whether you're a beginner or an experienced professional, ChromaIQ offers the ideal environment to elevate your skills.",
        highlights: [
            "Content creators & filmmakers",
            "Aspiring and experienced Colourists",
            "Students & professionals",
        ],
    },
    {
        icon: Target,
        title: "Why ChromaIQ Is Effective",
        description:
            "Our platform focuses on the node tree editor, combining interactive tutorials, real-time feedback, and hands-on practice to accelerate your learning. We simplify complex workflows, enabling you to create professional-grade colour grades with confidence.",
        highlights: [
            "Node-based workflow mastery",
            "Interactive learning modules",
            "Real-time feedback system",
            "Progressive skill building",
            "Industry-standard techniques",
        ],
    },
    {
        icon: BookOpen,
        title: "Comprehensive Learning Path",
        description:
            "From understanding the basics of the node tree editor to mastering advanced grading workflows, our structured curriculum guides you through every step. Practice with real footage and receive instant analysis of your node-based colour grading decisions.",
        highlights: [
            "Node tree editor focus",
            "Structured curriculum",
            "Real footage practice",
            "Instant analysis & feedback",
            "Professional workflow training",
        ],
    },
];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-6">
            <Palette className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-medium text-purple-700 dark:text-purple-300">
              About ChromaIQ
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Learn Colour Grading with
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
              {" "}
              Confidence
            </span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Colour grading using the node editor in DaVinci Resolve can be quite
            intimidating, especially for beginners. ChromaIQ transforms the way
            you learn and practice colour grading. Our intelligent platform
            provides personalised guidance, making professional colour grading
            skills accessible to everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;

            return (
              <div
                key={index}
                className="group relative p-8 bg-card border border-border rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-7 w-7 text-purple-600 dark:text-purple-400" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2">
                  {feature.highlights.map((highlight, highlightIndex) => (
                    <li
                      key={highlightIndex}
                      className="flex items-center gap-3 text-sm"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex-shrink-0" />
                      <span className="text-muted-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Decorative Element */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
