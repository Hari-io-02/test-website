/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: [
          "Outfit",
          "system-ui",
          "Avenir",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      colors: {
        "dark-blue": "#04152f",
        "light-blue": "#CCD9FF",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        border_primary: "var(--primary-border-color)",
        input_text: "var(--input-text-color)",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      fontSize: {
        subheading_text_md: [
          "19px",
          {
            lineHeight: "30.7px",
          },
        ],
        menu_text_md: [
          "16px",
          {
            lineHeight: "180%",
          },
        ],
        header_info_md: [
          "16px",
          {
            lineHeight: "180%",
          },
        ],
        paragraph_text_sm: [
          "15px",
          {
            lineHeight: "180%",
          },
        ],
        input_text_md: [
          "15px",
          {
            lineHeight: "24.6px",
          },
        ],
        info_text_sm: [
          "14px",
          {
            lineHeight: "auto",
          },
        ],
        button_text_md: [
          "21.33px",
          {
            lineHeight: "auto",
          },
        ],
        button_text_lg: [
          "23px",
          {
            lineHeight: "30px",
          },
        ],
      },
      letterSpacing: {
        "3pct": "3%",
        "1pct": "1%",
        "0pct": "0%",
        "5pct": "5%",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
    fontWeight: {
      semibold: 600,
      medium: 500,
      regular: 400,
    },
    maxWidth: {
      max_content_width: ["1440px"],
    },
  },
  plugins: [require("tailwindcss-animate")],
};
