"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import ProductCardThree from "@/components/sections/product/ProductCardThree";
import TextAbout from "@/components/sections/about/TextAbout";
import FooterLogoEmphasis from "@/components/sections/footer/FooterLogoEmphasis";
import Link from "next/link";

export default function MenuPage() {
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

      <div id="menu-hero" data-section="menu-hero">
        <TextAbout
          tag="Our Full Menu"
          tagAnimation="slide-up"
          title="Explore Every Delicious Option from Yammy Food"
          useInvertedBackground={false}
          buttons={[{ text: "Place Order", href: "https://wa.me/212625240927" }]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="menu-products" data-section="menu-products">
        <ProductCardThree
          products={[
            {
              id: "1",
              name: "Classic Cheeseburger",
              price: "65 MAD",
              imageSrc: "http://img.b2bpic.net/free-photo/front-view-beef-burger-with-salad-bacon_23-2148784490.jpg?_wi=2",
              imageAlt: "Classic Cheeseburger",
            },
            {
              id: "2",
              name: "Crispy Fried Chicken Burger",
              price: "75 MAD",
              imageSrc: "http://img.b2bpic.net/free-photo/grill-chicken-burger_1339-1361.jpg?_wi=2",
              imageAlt: "Crispy Fried Chicken Burger",
            },
            {
              id: "3",
              name: "Double Beef Deluxe",
              price: "85 MAD",
              imageSrc: "http://img.b2bpic.net/free-photo/homemade-delicious-sandwiches-black-board-gray-blurred-surface_179666-42625.jpg?_wi=2",
              imageAlt: "Double Beef Deluxe",
            },
            {
              id: "4",
              name: "Spicy Chicken Tacos (3)",
              price: "55 MAD",
              imageSrc: "http://img.b2bpic.net/free-photo/mexican-food-concept-high-angle_23-2148629376.jpg?_wi=2",
              imageAlt: "Spicy Chicken Tacos",
            },
            {
              id: "5",
              name: "Beef Tacos (3)",
              price: "60 MAD",
              imageSrc: "http://img.b2bpic.net/free-photo/diet-healthy-tacos-with-pork-avocado-wooden-background-selective-focusgenerative-ai_1258-153035.jpg?_wi=2",
              imageAlt: "Beef Tacos",
            },
            {
              id: "6",
              name: "Crispy Golden Fries",
              price: "30 MAD",
              imageSrc: "http://img.b2bpic.net/free-photo/delicious-hot-french-fries-with-red-sauce-served-table_632805-37.jpg?_wi=2",
              imageAlt: "Crispy Golden Fries",
            },
            {
              id: "7",
              name: "Loaded Cheese Fries",
              price: "45 MAD",
              imageSrc: "http://img.b2bpic.net/free-photo/grilled-beef-fries-rustic-plate-generated-by-ai_188544-43099.jpg?_wi=2",
              imageAlt: "Loaded Cheese Fries",
            },
            {
              id: "8",
              name: "Fresh Orange Juice",
              price: "20 MAD",
              imageSrc: "http://img.b2bpic.net/free-photo/glass-orange-juice-placed-wood_1150-9666.jpg?_wi=2",
              imageAlt: "Fresh Orange Juice",
            },
          ]}
          title="Browse Our Complete Menu"
          description="All items are prepared fresh to order with premium ingredients. Choose dine-in, drive-through, or delivery."
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
        />
      </div>

      <div id="menu-cta" data-section="menu-cta">
        <TextAbout
          title="Ready to Order? Contact us via WhatsApp or call for quick service."
          useInvertedBackground={true}
          buttons={[
            { text: "Order on WhatsApp", href: "https://wa.me/212625240927" },
            { text: "Call Us", href: "tel:+212625240927" },
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