"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import { AlertTriangle, Heart } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="mediumLarge"
        background="noise"
        cardStyle="solid"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="solid"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        { name: "Product", id: "#features" },
        { name: "Process", id: "#how-it-works" },
        { name: "The Science", id: "#why-us" },
      ]}
      brandName="PurrPod"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitTestimonial
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient"}}
      title="A new universe of cat care."
      description="The first stress-free grooming system designed for cats. Experience a spa-like cleaning process in the comfort of your home."
      testimonials={[
        {
          name: "Dr. Aris",          handle: "@vetpro",          testimonial: "Finally, a solution that respects feline behavior.",          rating: 5,
        },
        {
          name: "Sarah J.",          handle: "@catmom",          testimonial: "My Persian cat actually purrs during the grooming cycle now.",          rating: 5,
        },
        {
          name: "Mark D.",          handle: "@techpet",          testimonial: "Incredible engineering. The foam system is a game changer.",          rating: 4,
        },
        {
          name: "Elena R.",          handle: "@felinestylist",          testimonial: "Professional results without the stress of water. Highly recommended.",          rating: 5,
        },
        {
          name: "Liam K.",          handle: "@purepurr",          testimonial: "Clean, quiet, and my cat loves the treat dispenser feature.",          rating: 5,
        },
      ]}
      buttons={[
        {
          text: "Join Waitlist",          href: "#contact"},
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BXuGbYiBPJwGZpnezbrTF9xIQt/uploaded-1774648078170-nqhj3qna.jpg"
      imageAlt="PurrPod Grooming System"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="problem" data-section="problem">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="The Reality"
      title="Bathing shouldn't be a battle."
      description="Most cats find water terrifying. Traditional bathing is stressful for pets, messy for owners, and often physically draining."
      subdescription="We recognized that forcing cats into water ignores their nature, so we built something better."
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BXuGbYiBPJwGZpnezbrTF9xIQt/uploaded-1774648078171-ww76rqp4.png"
      mediaAnimation="blur-reveal"
      icon={AlertTriangle}
    />
  </div>

  <div id="solution" data-section="solution">
      <FeatureCardSeven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          id: 1,
          title: "Foam Cleaning",          description: "Gentle, moisturizing cleansing foam.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BXuGbYiBPJwGZpnezbrTF9xIQt/futuristic-close-up-shot-of-a-high-tech--1774648103812-21556c21.png?_wi=1"},
        {
          id: 2,
          title: "Rotating Brushes",          description: "Soft silicone brushes clear debris.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BXuGbYiBPJwGZpnezbrTF9xIQt/futuristic-close-up-shot-of-soft-rotatin-1774648103700-522712ff.png?_wi=1"},
        {
          id: 3,
          title: "Air Drying",          description: "Quiet airflow leaves coat fluffy.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BXuGbYiBPJwGZpnezbrTF9xIQt/futuristic-shot-of-air-drying-system-noz-1774648103279-8244ec5d.png?_wi=1"},
      ]}
      title="The Stress-Free Solution."
      description="Using low-moisture foam-based technology, the PurrPod cleans your cat without immersion."
    />
  </div>

  <div id="how-it-works" data-section="how-it-works">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="The Grooming Cycle"
      tag="Simple Automation"
      metrics={[
        {
          id: "step1",          value: "1",          description: "Voluntary Entry"},
        {
          id: "step2",          value: "2",          description: "Foam & Scrub"},
        {
          id: "step3",          value: "3",          description: "Gentle Mist"},
        {
          id: "step4",          value: "4",          description: "Air Dry"},
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardSeven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          id: 4,
          title: "Anxiety-Free",          description: "Transparent enclosure to keep them calm.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BXuGbYiBPJwGZpnezbrTF9xIQt/futuristic-close-up-shot-of-a-high-tech--1774648103812-21556c21.png?_wi=2"},
        {
          id: 5,
          title: "Treat Portal",          description: "Built-in treat station for positive reinforcement.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BXuGbYiBPJwGZpnezbrTF9xIQt/futuristic-close-up-shot-of-soft-rotatin-1774648103700-522712ff.png?_wi=2"},
        {
          id: 6,
          title: "Quiet Operation",          description: "Engineered for near-silent use.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BXuGbYiBPJwGZpnezbrTF9xIQt/futuristic-shot-of-air-drying-system-noz-1774648103279-8244ec5d.png?_wi=2"},
      ]}
      title="Designed for Comfort"
      description="Built from the ground up for our feline friends."
    />
  </div>

  <div id="why-us" data-section="why-us">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="Why PurrPod"
      title="Built for Cats"
      description="We didn't just shrink a dog washing station; we researched cat biology and behavioral cues."
      subdescription="No water immersion, no stress, total hygiene."
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BXuGbYiBPJwGZpnezbrTF9xIQt/uploaded-1774648078171-oy8ncso2.png"
      mediaAnimation="slide-up"
      icon={Heart}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient"}}
      text="Ready to revolutionize your grooming routine? Get early access to the future of feline hygiene."
      buttons={[
        {
          text: "Secure Your Early Access",          href: "#"},
      ]}
      className="bg-gradient-to-br from-blue-900/40 via-purple-900/20 to-black/80 backdrop-blur-md border border-white/10 shadow-[0_0_50px_-10px_rgba(59,130,246,0.3)]"
      buttonClassName="shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.8)] transition-all duration-300"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="PurrPod"
      copyrightText="© 2025 PurrPod Inc."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}