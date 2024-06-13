/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "16px",
      screens: {
        "16px": "1920px",
      },
    },
    extend: {
      boxShadow: {
        auth_shadow: "inset 0 0 30px #5D5146",
        auth_shadow2: "0 0 30px #5D5146",
      },
      maxHeight: {
        60: "60px",
      },
      fontSize: {
        c1: ["10px", "12px"],
        body4: ["13px", "15.6px"],
        body3: ["16px", "19.2px"],
        body2: ["20px", "24px"],
        body1: ["25px", "30px"],
        h4: ["31px", "37.2px"],
        h3: ["39px", "46.8px"],
        h2: ["49px", "48.8px"],
        h1: ["61px", "73.2px"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "var(--dark-button-hover)",
        background_hero: "var(--background-hero)",
        background_section: "var(--background-section)",
        black_text: "var(--black-text)",
        grayish: "var(--grayish)",
        border_brown: "var(--border-custom)",
        gray_text: "var(--gray-text)",
        light_text: "var(--light-text)",
        auth_bg: "var(--login-bg)",
        gray_border: "var(--gray-border)",
        badge: "var(--badge)",
        button: "var(--dark-button)",
        "button-hover": "var(--dark-button-hover)",
        "reg-button": "var(--register)",
        "light-border": "var(--border-custom)",
        "blue-text": "var(--blue-text)",

        // Admin styles
        "admin-blue": "var(--admin-blue)",
        "admin-blue-hover": "var(--admin-blue-hover)",
        "admin-red": "var(--admin-red)",
        "admin-red-hover": "var(--admin-red-hover)",
        "admin-grey": "var(--admin-grey)",
        "admin-grey-hover": "var(--admin-grey-hover)",
        "admin-cancel": "var(--admin-cancel)",
        "custom-grey": "var(--admin-custom-grey)",
        "admin-green": "var(--admin-green)",
        breadCrumbs: "var(--admin-breadCrumbs)",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        expandWidth: {
          "0%": { width: "0", opacity: "0" },
          "100%": { width: "384px", opacity: "1" },
        },
        collapseWidth: {
          "0%": { width: "384px", opacity: "1" },
          "100%": { width: "0px", opacity: "0", visible: "hidden" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        expandWidth: "expandWidth 0.8s ease-out",
        collapseWidth: "collapseWidth 0.8s ease-in-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
