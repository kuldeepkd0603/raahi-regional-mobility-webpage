import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Raahi – Regional Mobility | Your City. Your Ride. Your Way.",
  description:
    "Discover Raahi, a regional mobility platform designed for local rides, intercity travel, and religious journeys. Coming soon to Ujjain, Indore and Dewas, Madhya Pradesh.",
  keywords: [
    "Raahi",
    "regional mobility",
    "ride hailing",
    "taxi Ujjain",
    "taxi Indore",
    "taxi Dewas",
    "intercity travel Madhya Pradesh",
    "religious tour Ujjain",
    "passenger app",
    "driver app",
  ],
  openGraph: {
    title: "Raahi – Regional Mobility | Your City. Your Ride. Your Way.",
    description:
      "A smarter way to move across Ujjain, Indore and Dewas. Raahi is a regional mobility platform for local rides, intercity journeys, and religious travel.",
    type: "website",
    locale: "en_IN",
    siteName: "Raahi Regional Mobility",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raahi – Regional Mobility",
    description:
      "Coming soon to Ujjain, Indore and Dewas. Your City. Your Ride. Your Way.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#071B43" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
