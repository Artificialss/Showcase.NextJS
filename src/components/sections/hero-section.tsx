import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";

export function HeroSection() {
  return (
    <section className="relative py-24 md:py-40" id="home">
      <div
        className="absolute inset-0 -z-10 h-full w-full bg-background"
        style={{
          backgroundImage:
            "radial-gradient(circle at top left, hsl(var(--primary) / 0.1), transparent 40%), " +
            "radial-gradient(circle at bottom right, hsl(var(--primary) / 0.1), transparent 40%)",
        }}
      />
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-8">
          <Logo className="h-28 w-28 md:h-32 md:w-32" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 max-w-4xl mx-auto">
          From Idea to AI-Powered Prototype
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
          We help you build, launch, and scale your vision with expert software engineering and AI
          integration for early-stage ventures.
        </p>
        <ButtonLink href="#contact" size="lg">
          Explore Our Services
          <ArrowRight className="ml-2 h-5 w-5" />
        </ButtonLink>
      </div>
    </section>
  );
}
