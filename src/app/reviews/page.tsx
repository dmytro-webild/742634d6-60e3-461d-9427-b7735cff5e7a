"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import TextAbout from "@/components/sections/about/TextAbout";
import TestimonialCardTen from "@/components/sections/testimonial/TestimonialCardTen";
import FooterLogoEmphasis from "@/components/sections/footer/FooterLogoEmphasis";
import Link from "next/link";

export default function ReviewsPage() {
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

      <div id="reviews-intro" data-section="reviews-intro">
        <TextAbout
          tag="Customer Love"
          tagAnimation="slide-up"
          title="Discover Why Yammy Food Has a 4.6★ Rating from Thousands of Satisfied Customers"
          useInvertedBackground={false}
        />
      </div>

      <div id="reviews-testimonials" data-section="reviews-testimonials">
        <TestimonialCardTen
          testimonials={[
            {
              id: "1",
              title: "Best Burgers in Salé",
              quote: "I've tried many burger joints in Salé, but Yammy Food has the freshest ingredients and fastest service. Their burgers are absolutely delicious!",
              name: "Ahmed El Mansouri",
              role: "Regular Customer",
              imageSrc: "http://img.b2bpic.net/free-photo/smiling-young-handsome-guy-wearing-green-shirt_141793-122624.jpg?_wi=7",
              imageAlt: "Ahmed El Mansouri",
            },
            {
              id: "2",
              title: "Perfect for Late-Night Cravings",
              quote: "Open until 3:30 AM? Yes, please! After a long day, Yammy Food is my go-to spot. Quality food, reasonable prices, and friendly staff.",
              name: "Fatima Bennani",
              role: "Local Resident",
              imageSrc: "http://img.b2bpic.net/free-photo/smiling-young-handsome-guy-wearing-green-shirt_141793-122624.jpg?_wi=8",
              imageAlt: "Fatima Bennani",
            },
            {
              id: "3",
              title: "Exceptional Value for Money",
              quote: "The portion sizes are generous and the prices are fair. 50-100 MAD gives you amazing food. Their tacos are my favorite!",
              name: "Mohamed Karim",
              role: "Food Enthusiast",
              imageSrc: "http://img.b2bpic.net/free-photo/smiling-young-handsome-guy-wearing-green-shirt_141793-122624.jpg?_wi=9",
              imageAlt: "Mohamed Karim",
            },
            {
              id: "4",
              title: "Quick and Reliable Delivery",
              quote: "I ordered delivery during this rainy evening. Arrived hot, fresh, and right on time. No-contact delivery option was perfect. Highly recommend!",
              name: "Leila Chraibi",
              role: "Busy Professional",
              imageSrc: "http://img.b2bpic.net/free-photo/smiling-young-handsome-guy-wearing-green-shirt_141793-122624.jpg?_wi=10",
              imageAlt: "Leila Chraibi",
            },
            {
              id: "5",
              title: "Great Family Spot",
              quote: "Took my kids for burgers and tacos last weekend. Everyone loved it! Clean restaurant, fast service, and the staff was super friendly.",
              name: "Hassan Ouaida",
              role: "Family Customer",
              imageSrc: "http://img.b2bpic.net/free-photo/smiling-young-handsome-guy-wearing-green-shirt_141793-122624.jpg?_wi=11",
              imageAlt: "Hassan Ouaida",
            },
            {
              id: "6",
              title: "Consistently Delicious",
              quote: "Been coming here for months. Every time I order, the quality is consistent. That's what I appreciate most about Yammy Food.",
              name: "Yasmine Fiqhi",
              role: "Loyal Customer",
              imageSrc: "http://img.b2bpic.net/free-photo/smiling-young-handsome-guy-wearing-green-shirt_141793-122624.jpg?_wi=12",
              imageAlt: "Yasmine Fiqhi",
            },
          ]}
          title="What Our Customers Say"
          description="Join thousands of satisfied customers who love Yammy Food"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="reviews-cta" data-section="reviews-cta">
        <TextAbout
          title="Experience the Yammy Food difference today. Order now and join our community of happy customers!"
          useInvertedBackground={true}
          buttons={[
            { text: "View Menu & Order", href: "/menu" },
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