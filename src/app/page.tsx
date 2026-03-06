"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import HeroSplitKpi from "@/components/sections/hero/HeroSplitKpi";
import TextAbout from "@/components/sections/about/TextAbout";
import ProductCardThree from "@/components/sections/product/ProductCardThree";
import FeatureCardTwentyThree from "@/components/sections/feature/FeatureCardTwentyThree";
import TestimonialCardTen from "@/components/sections/testimonial/TestimonialCardTen";
import FooterLogoEmphasis from "@/components/sections/footer/FooterLogoEmphasis";
import Link from "next/link";

export default function HomePage() {
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

      <div id="hero" data-section="hero">
        <HeroSplitKpi
          title="Welcome to Yammy Food – Delicious Fast Food in Salé"
          description="Fresh, fast, and full of flavor. Experience mouthwatering burgers, crispy fries, and authentic tacos prepared with the finest ingredients. Order now and taste the difference!"
          background={{ variant: "glowing-orb" }}
          kpis={[
            { value: "4.6", label: "Star Rating" },
            { value: "24/7", label: "Open Until 3:30 AM" },
            { value: "3", label: "Delivery Options" },
          ]}
          enableKpiAnimation={true}
          tag="🍔 Fast Food Excellence"
          tagAnimation="slide-up"
          buttons={[
            { text: "View Menu", href: "/menu" },
            { text: "Order on WhatsApp", href: "https://wa.me/212625240927" },
          ]}
          buttonAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/attractive-young-woman-eating-french-fries-burger-restaurant_169016-21816.jpg"
          imageAlt="Delicious Yammy Food burger"
          mediaAnimation="blur-reveal"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          tag="About Us"
          tagAnimation="slide-up"
          title="Your Local Favorite for Fresh, Fast, and Affordable Delicious Food. Located in the Heart of Salé, Morocco – Where Every Bite Matters"
          useInvertedBackground={false}
          buttons={[{ text: "Explore Our Story", href: "/about" }]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="menu" data-section="menu">
        <ProductCardThree
          products={[
            {
              id: "1",              name: "Classic Cheeseburger",              price: "65 MAD",              imageSrc: "http://img.b2bpic.net/free-photo/front-view-beef-burger-with-salad-bacon_23-2148784490.jpg?_wi=1",              imageAlt: "Classic Cheeseburger"},
            {
              id: "2",              name: "Crispy Fried Chicken Burger",              price: "75 MAD",              imageSrc: "http://img.b2bpic.net/free-photo/grill-chicken-burger_1339-1361.jpg?_wi=1",              imageAlt: "Crispy Fried Chicken Burger"},
            {
              id: "3",              name: "Double Beef Deluxe",              price: "85 MAD",              imageSrc: "http://img.b2bpic.net/free-photo/homemade-delicious-sandwiches-black-board-gray-blurred-surface_179666-42625.jpg?_wi=1",              imageAlt: "Double Beef Deluxe"},
            {
              id: "4",              name: "Spicy Chicken Tacos (3)",              price: "55 MAD",              imageSrc: "http://img.b2bpic.net/free-photo/mexican-food-concept-high-angle_23-2148629376.jpg?_wi=1",              imageAlt: "Spicy Chicken Tacos"},
            {
              id: "5",              name: "Beef Tacos (3)",              price: "60 MAD",              imageSrc: "http://img.b2bpic.net/free-photo/diet-healthy-tacos-with-pork-avocado-wooden-background-selective-focusgenerative-ai_1258-153035.jpg?_wi=1",              imageAlt: "Beef Tacos"},
            {
              id: "6",              name: "Crispy Golden Fries",              price: "30 MAD",              imageSrc: "http://img.b2bpic.net/free-photo/delicious-hot-french-fries-with-red-sauce-served-table_632805-37.jpg?_wi=1",              imageAlt: "Crispy Golden Fries"},
            {
              id: "7",              name: "Loaded Cheese Fries",              price: "45 MAD",              imageSrc: "http://img.b2bpic.net/free-photo/grilled-beef-fries-rustic-plate-generated-by-ai_188544-43099.jpg?_wi=1",              imageAlt: "Loaded Cheese Fries"},
            {
              id: "8",              name: "Fresh Orange Juice",              price: "20 MAD",              imageSrc: "http://img.b2bpic.net/free-photo/glass-orange-juice-placed-wood_1150-9666.jpg?_wi=1",              imageAlt: "Fresh Orange Juice"},
          ]}
          title="Our Menu"
          description="Explore our delicious selection of burgers, sandwiches, tacos, and sides. Everything is prepared fresh to order with premium ingredients."
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          gridVariant="bento-grid"
          tag="Popular Items"
          tagAnimation="slide-up"
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardTwentyThree
          features={[
            {
              id: "1",              title: "Dine-In Experience",              tags: ["Comfortable seating", "Quick service"],
              imageSrc: "http://img.b2bpic.net/free-photo/event-hall-wooden-table-with-rustic-chairs_114579-2233.jpg?_wi=1",              imageAlt: "Restaurant Dine-In"},
            {
              id: "2",              title: "Drive-Through Convenience",              tags: ["Fast pickup", "No parking needed"],
              imageSrc: "http://img.b2bpic.net/free-photo/man-woman-enjoying-takeaway-food-street_23-2149025841.jpg",              imageAlt: "Drive-Through Service"},
            {
              id: "3",              title: "No-Contact Delivery",              tags: ["Safe delivery", "Contactless"],
              imageSrc: "http://img.b2bpic.net/free-photo/african-american-courier-riding-bike-while-delivering-takeaway-food-meal-client-checking-adreess-phone-takeout-app-standing-yellow-background-studio-take-out-service-concept_482257-68965.jpg",              imageAlt: "Food Delivery Service"},
          ]}
          animationType="slide-up"
          title="How We Serve You"
          description="Multiple convenient ways to enjoy Yammy Food – choose what works best for you"
          textboxLayout="default"
          useInvertedBackground={false}
          tag="Service Options"
          tagAnimation="slide-up"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTen
          testimonials={[
            {
              id: "1",              title: "Best Burgers in Salé",              quote: "I've tried many burger joints in Salé, but Yammy Food has the freshest ingredients and fastest service. Their burgers are absolutely delicious!",              name: "Ahmed El Mansouri",              role: "Regular Customer",              imageSrc: "http://img.b2bpic.net/free-photo/smiling-young-handsome-guy-wearing-green-shirt_141793-122624.jpg?_wi=1",              imageAlt: "Ahmed El Mansouri"},
            {
              id: "2",              title: "Perfect for Late-Night Cravings",              quote: "Open until 3:30 AM? Yes, please! After a long day, Yammy Food is my go-to spot. Quality food, reasonable prices, and friendly staff.",              name: "Fatima Bennani",              role: "Local Resident",              imageSrc: "http://img.b2bpic.net/free-photo/smiling-young-handsome-guy-wearing-green-shirt_141793-122624.jpg?_wi=2",              imageAlt: "Fatima Bennani"},
            {
              id: "3",              title: "Exceptional Value for Money",              quote: "The portion sizes are generous and the prices are fair. 50-100 MAD gives you amazing food. Their tacos are my favorite!",              name: "Mohamed Karim",              role: "Food Enthusiast",              imageSrc: "http://img.b2bpic.net/free-photo/smiling-young-handsome-guy-wearing-green-shirt_141793-122624.jpg?_wi=3",              imageAlt: "Mohamed Karim"},
            {
              id: "4",              title: "Quick and Reliable Delivery",              quote: "I ordered delivery during this rainy evening. Arrived hot, fresh, and right on time. No-contact delivery option was perfect. Highly recommend!",              name: "Leila Chraibi",              role: "Busy Professional",              imageSrc: "http://img.b2bpic.net/free-photo/smiling-young-handsome-guy-wearing-green-shirt_141793-122624.jpg?_wi=4",              imageAlt: "Leila Chraibi"},
            {
              id: "5",              title: "Great Family Spot",              quote: "Took my kids for burgers and tacos last weekend. Everyone loved it! Clean restaurant, fast service, and the staff was super friendly.",              name: "Hassan Ouaida",              role: "Family Customer",              imageSrc: "http://img.b2bpic.net/free-photo/smiling-young-handsome-guy-wearing-green-shirt_141793-122624.jpg?_wi=5",              imageAlt: "Hassan Ouaida"},
            {
              id: "6",              title: "Consistently Delicious",              quote: "Been coming here for months. Every time I order, the quality is consistent. That's what I appreciate most about Yammy Food.",              name: "Yasmine Fiqhi",              role: "Loyal Customer",              imageSrc: "http://img.b2bpic.net/free-photo/smiling-young-handsome-guy-wearing-green-shirt_141793-122624.jpg?_wi=6",              imageAlt: "Yasmine Fiqhi"},
          ]}
          title="What Our Customers Say"
          description="Join thousands of satisfied customers who love Yammy Food"
          textboxLayout="default"
          useInvertedBackground={false}
          tag="Reviews"
          tagAnimation="slide-up"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis columns={footerColumns} logoText="Yammy Food" />
      </div>
    </ThemeProvider>
  );
}
