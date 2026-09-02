import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700', '800', '900'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://tiger365onlineid.co.in'),
  title: 'Tiger365 Official | Online ID & Account Information',
  description:
    'Explore Tiger365 information, online ID guidance, sports betting and gaming resources, login help, and frequently asked questions.',
  keywords: [
    'Tiger365 ID',
    'Tiger 365 ID',
    'cricket betting ID',
    'online betting ID India',
    'cricket ID provider',
    'Tiger365 WhatsApp',
    'online cricket ID',
    'sports betting India',
    'IPL betting ID',
    'T20 betting',
  ],
  applicationName: 'Tiger365',
  authors: [{ name: 'Tiger365' }],
  creator: 'Tiger365',
  publisher: 'Tiger365',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Tiger365 Official | Online ID & Account Information',
    description: 'Explore Tiger365 information, online ID guidance, sports betting and gaming resources, login help, and frequently asked questions.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://tiger365onlineid.co.in',
    siteName: 'Tiger365',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tiger365 Official | Online ID & Account Information',
    description: 'Explore Tiger365 information, online ID guidance, sports betting and gaming resources, login help, and frequently asked questions.',
  },
  icons: {
    icon: '/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "j9d1dOLzkZcyvT48PWGkT_pVC97vegFgZ33q8HBArZo",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://tiger365onlineid.co.in/#website",
                  "url": "https://tiger365onlineid.co.in/",
                  "name": "Tiger365",
                  "inLanguage": "en"
                },
                {
                  "@type": "Organization",
                  "@id": "https://tiger365onlineid.co.in/#organization",
                  "name": "Tiger365",
                  "url": "https://tiger365onlineid.co.in/"
                },
                {
                  "@type": "WebPage",
                  "@id": "https://tiger365onlineid.co.in/#webpage",
                  "url": "https://tiger365onlineid.co.in/",
                  "name": "Tiger365 Official | Online ID & Account Information",
                  "description": "Explore Tiger365 information, online ID guidance, sports betting and gaming resources, login help, and frequently asked questions.",
                  "isPartOf": {
                    "@id": "https://tiger365onlineid.co.in/#website"
                  }
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://tiger365onlineid.co.in/#faq",
                  "url": "https://tiger365onlineid.co.in/",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "What is Tiger365?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Tiger365 is the brand or website referenced on this domain. Check the site's current pages and terms for the latest information."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How does a Tiger365 ID work?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "An account ID is generally used to identify a user account. Refer to Tiger365's current account instructions and terms for the exact process."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How can I access Tiger365?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Use the site's current official URL and verify the domain before entering any account information. Follow the access instructions published on the site."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What sports are available on Tiger365?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Available sports can change. Check the current sports or betting section on the website for the latest list and availability."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Does Tiger365 provide live sports information?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Check the site's current sports section for any live-event information and the terms that apply to its use."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How can I get help with my Tiger365 account?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Use the contact or support details published on the website. Avoid relying on unofficial accounts or third-party contacts."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How do I find Tiger365 login information?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Use the official domain and follow the current login or access instructions. If access fails, use the site's published support channel."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What payment options are supported?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Use the contact or support details published on the website. Avoid relying on unofficial accounts or third-party contacts."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What should I do if I have trouble accessing my account?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Use the official domain and follow the current login or access instructions. If access fails, use the site's published support channel."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Where can I find the latest Tiger365 updates?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Refer to Tiger365's current website information and terms for the most accurate answer."
                      }
                    }
                  ]
                }
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} bg-[#0a0a0a] text-white antialiased`}>
        {children}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-ZQER71ZNPZ" strategy="afterInteractive" />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ZQER71ZNPZ');
            `
          }}
        />
      </body>
    </html>
  );
}
