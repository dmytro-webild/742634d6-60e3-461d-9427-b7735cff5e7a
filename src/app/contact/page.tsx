"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import TextAbout from "@/components/sections/about/TextAbout";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import FooterLogoEmphasis from "@/components/sections/footer/FooterLogoEmphasis";
import Link from "next/link";

export default function ContactPage() {
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

      <div id="contact-intro" data-section="contact-intro">
        <TextAbout
          tag="Get in Touch"
          tagAnimation="slide-up"
          title="Contact Yammy Food – Questions? Feedback? We'd Love to Hear From You!"
          useInvertedBackground={false}
        />
      </div>

      <div id="contact-form" data-section="contact-form">
        <ContactSplitForm
          title="Send us a Message"
          description="Have a question about our menu, services, or special requests? Fill out the form below and we'll get back to you as soon as possible."
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Your Email", required: true },
            { name: "phone", type: "tel", placeholder: "+212 6XX XXX XXX", required: false },
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us your order preferences or special requests...",
            rows: 5,
            required: true,
          }}
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-photo/male-pouring-ketchup-burger-buns_7502-9667.jpg"
          imageAlt="Yammy Food restaurant interior"
          mediaAnimation="blur-reveal"
          mediaPosition="right"
          buttonText="Send Message"
        />
      </div>

      <div id="contact-info" data-section="contact-info">
        <TextAbout
          title="📍 337 Rue Palestine, Av. Ibn Al Haytem, Salé 11000, Morocco | 📞 +212 6 25 24 09 27 | Open Daily Until 3:30 AM"
          useInvertedBackground={true}
          buttons={[
            { text: "Call Us", href: "tel:+212625240927" },
            { text: "Message on WhatsApp", href: "https://wa.me/212625240927" },
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