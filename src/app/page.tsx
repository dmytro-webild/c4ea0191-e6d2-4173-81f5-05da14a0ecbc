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
      title="Effortless grooming, happy cats."
      description="Introducing the world's first automated grooming suite. Using advanced foam-delivery and quiet-dry technology, PurrPod provides a spa-grade cleaning experience that feline biology actually loves—all without the stress of water."
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
        { text: "Secure Early Access", href: "#contact" },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BXuGbYiBPJwGZpnezbrTF9xIQt/uploaded-1774648078170-nqhj3qna.jpg"
      imageAlt="PurrPod Grooming System"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="problem" data-section="problem">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="The Problem"
      title="Bathing cats is a struggle for a reason."
      description="Cat skin and behavior aren't built for full submersion. Traditional bathing forces cats into a state of panic, leading to scratches, hair matting, and long-term anxiety toward grooming."
      subdescription="We replaced the bathtub with a gentle, sensory-tuned pod environment, turning a traumatic chore into a calm, voluntary spa routine."
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
          title: "Advanced Foam-Tech",          description: "Our dry-clean cleansing foam lifts dander and dirt instantly, keeping the coat pristine without water immersion.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BXuGbYiBPJwGZpnezbrTF9xIQt/futuristic-close-up-shot-of-a-high-tech--1774648103812-21556c21.png?_wi=1"},
        {
          id: 2,
          title: "Soft-Silicone Massage",          description: "Custom-molded rotating brushes mimic natural feline social grooming, soothing nerves while removing loose fur.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BXuGbYiBPJwGZpnezbrTF9xIQt/futuristic-close-up-shot-of-soft-rotatin-1774648103700-522712ff.png?_wi=1"},
        {
          id: 3,
          title: "Whisper-Quiet Airflow",          description: "Engineered airflow dries and fluffs the coat at low decibels, ensuring your cat feels relaxed rather than startled.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BXuGbYiBPJwGZpnezbrTF9xIQt/futuristic-shot-of-air-drying-system-noz-1774648103279-8244ec5d.png?_wi=1"},
      ]}
      title="Science-backed care."
      description="Our proprietary 'Low-Moisture Grooming' system maintains coat health and hygiene, perfectly matching your cat's natural grooming instincts."
    />
  </div>

  <div id="how-it-works" data-section="how-it-works">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="The Grooming Cycle"
      tag="Simple Automation"
      metrics={[
        {
          id: "step1",          value: "1",          description: "Voluntary Entry - Entry through a secure, scent-friendly gate."},
        {
          id: "step2",          value: "2",          description: "Deep Foam Clean - Moisturizing foam targets dander and dirt."},
        {
          id: "step3",          value: "3",          description: "Gentle Mist - Rinses away residue with minimal dampness."},
        {
          id: "step4",          value: "4",          description: "Soft Air Dry - Final fluff-dry leaves the coat salon-ready."},
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
          title: "Calming Enclosure",          description: "Designed with clear, non-restrictive materials to prevent claustrophobia while maintaining pet safety.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BXuGbYiBPJwGZpnezbrTF9xIQt/futuristic-close-up-shot-of-a-high-tech--1774648103812-21556c21.png?_wi=2"},
        {
          id: 5,
          title: "Positive Reinforcement",          description: "Integrated treat portal provides immediate rewards, building confidence and positive association with every cycle.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BXuGbYiBPJwGZpnezbrTF9xIQt/futuristic-close-up-shot-of-soft-rotatin-1774648103700-522712ff.png?_wi=2"},
        {
          id: 6,
          title: "Noise-Canceling Tech",          description: "Acoustic housing ensures the system operates in the background, making it perfect for sensitive feline ears.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BXuGbYiBPJwGZpnezbrTF9xIQt/futuristic-shot-of-air-drying-system-noz-1774648103279-8244ec5d.png?_wi=2"},
      ]}
      title="Precision engineered."
      description="We prioritized a fear-free experience, incorporating features that reinforce calm behaviors and comfort."
    />
  </div>

  <div id="why-us" data-section="why-us">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="The PurrPod Standard"
      title="Expertly built for feline biology."
      description="Our development team consulted with leading veterinarians to map every touchpoint of feline comfort. PurrPod isn't just a gadget—it's a holistic grooming health solution."
      subdescription="We emphasize non-invasive cleaning methods that protect skin oils and reduce allergens, keeping your cat healthy and your home hair-free."
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
          text: "Get Early Access",          href: "#"},
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