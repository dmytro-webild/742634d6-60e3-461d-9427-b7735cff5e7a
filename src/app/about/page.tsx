"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import TextAbout from "@/components/sections/about/TextAbout";
import FeatureCardTwentyThree from "@/components/sections/feature/FeatureCardTwentyThree";
import FooterLogoEmphasis from "@/components/sections/footer/FooterLogoEmphasis";
import Link from "next/link";

export default function AboutPage() {
  const navItems = [
    { name: "Home", id: "/" },
    { name: "Menu", id: "/menu" },
    { name: "About", id: "/about" },
    { name: "Reviews", id: "/reviews" },
    { name: "Contact", id: "/contact" },
  ];

  const footerColumns = [
    {
      items: [
        { label: "About Us", href: "/about" },
        { label: "Menu", href: "/menu" },
        { label: "Reviews", href: "/reviews" },
      ],
    },
    {
      items: [
        { label: "Delivery", href: "/menu" },
        { label: "Drive-Through", href: "/menu" },
        { label: "Dine-In", href: "/menu" },
      ],
    },
    {
      items: [
        { label: "Phone", href: "tel:+212625240927" },
        { label: "WhatsApp", href: "https://wa.me/212625240927" },
        { label: "Location", href: "https://maps.google.com/?q=337+Rue+Palestine+Salé+Morocco" },
      ],
    },
    {
      items: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Contact", href: "/contact" },
      ],
    },
  ];

  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="mediumSmall"
      sizing="largeSmallSizeMediumTitles"
      background="noiseDiagonalGradient"
      cardStyle="layered-gradient"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple brandName="Yammy Food" navItems={navItems} />
      </div>

      <div id="about-intro" data-section="about-intro">
        <TextAbout
          tag="Our Story"
          tagAnimation="slide-up"
          title="Yammy Food: Where Fresh Ingredients Meet Fast Service in Salé, Morocco"
          useInvertedBackground={false}
        />
      </div>

      <div id="about-values" data-section="about-values">
        <FeatureCardTwentyThree
          features={[
            {
              id: "1",
              title: "Fresh Quality Ingredients",
              tags: ["Premium sourcing", "Daily delivery"],
              imageSrc: "http://img.b2bpic.net/free-photo/front-view-beef-burger-with-salad-bacon_23-2148784490.jpg?_wi=3",
              imageAlt: "Fresh Quality Ingredients",
            },
            {
              id: "2",
              title: "Fast & Reliable Service",
              tags: ["Quick preparation", "Open until 3:30 AM"],
              imageSrc: "http://img.b2bpic.net/free-photo/event-hall-wooden-table-with-rustic-chairs_114579-2233.jpg?_wi=2",
              imageAlt: "Fast Service",
            },
            {
              id: "3",
              title: "Community Focused",
              tags: ["Local favorite", "Affordable pricing"],
              imageSrc: "http://img.b2bpic.net/free-photo/grill-chicken-burger_1339-1361.jpg?_wi=3",
              imageAlt: "Community Values",
            },
          ]}
          animationType="slide-up"
          title="Our Core Values"
          description="Founded in Salé, Yammy Food is committed to delivering delicious fast food with integrity, quality, and exceptional service."
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="about-mission" data-section="about-mission">
        <TextAbout
          title="Located at 337 Rue Palestine, Salé – We're your neighborhood fast food destination that doesn't compromise on quality or taste."
          useInvertedBackground={true}
          buttons={[
            { text: "Visit Us", href: "https://maps.google.com/?q=337+Rue+Palestine+Salé+Morocco" },
            { text: "Back to Home", href: "/" },
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis columns={footerColumns} logoText="Yammy Food" />
      </div>
    </ThemeProvider>
  );
}