// Import the Metadata type from Next.js for defining page metadata.
import type { Metadata } from "next";

// Import the Inter font from Google Fonts through Next.js.
import { Inter } from "next/font/google";

// Import global CSS styles.
import "./globals.css";

// Import the Navbar component (assumed to be created in the components directory).
import Navbar from "@/app/components/Navbar";

// Load the Inter font with the Latin subset.
const inter = Inter({ subsets: ["latin"] });

// Define the metadata for the application, including title, description, and Open Graph metadata.
export const metadata: Metadata = {
  title: "Dan Surveys", // Title of the application.
  description: "Survey everything", // Description of the application.
  openGraph: { // Open Graph metadata for better SEO and social media integration.
    title: 'Dan Surveys', // Title for social media cards.
    description: 'Survey everything', // Description for social media cards.
    type: 'website', // Type of content.
    url: 'https://survey-next-v-3.vercel.app/', // URL of the website.
    // images: [ // Images for social media cards.
    //   {
    //     url: 'https://your-website-url.com/og-image.jpg', // URL of the image.
    //     width: 800, // Width of the image.
    //     height: 600, // Height of the image.
    //     alt: 'Og Image Alt', // Alt text for the image.
    //   },
    // ],
  },
};

// Define the RootLayout component which wraps the entire application.
export default function RootLayout({
  children, // Children components to be rendered inside the layout.
}: Readonly<{
  children: React.ReactNode; // Type definition for children.
}>) {
  return (
    <html lang="en"> {/* Set the language attribute for the HTML document. */}
      <head> {/* Head section for meta tags and links. */}
        <link rel="icon" href="/favicon.ico" /> {/* Link to the favicon. */}
        <meta name="viewport" content="width=device-width, initial-scale=1" /> {/* Meta tag for responsive design. */}
      </head>
      <body className={inter.className}> {/* Body of the document with the Inter font class applied. */}
        <Navbar /> {/* Render the Navbar component. */}
        {children} {/* Render the children components inside the body. */}
      </body>
    </html>
  );
};