import { Helmet } from 'react-helmet-async';
import { servicesData } from '../data/services';
import { homeFaqs } from '../data/homeFaqs';

export function SEO() {
  const serviceFaqs = servicesData.flatMap(s => s.detail.faqs || []);
  const allFaqs = [...homeFaqs, ...serviceFaqs];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LegalService",
        "name": "Arun Online Services",
        "@id": "https://arunonlineservices.com/#organization",
        "url": "https://arunonlineservices.com",
        "telephone": "0422 2200604",
        "description": "Your Trusted Legal Document Writers in Coimbatore: Simple, Safe, and Secure.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "103, First Floor, Aishwarya Complex, Gopalapuram First Street",
          "addressLocality": "Coimbatore",
          "addressRegion": "TN",
          "postalCode": "641018",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 11.0168,
          "longitude": 76.9558
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "18:00"
        },
        "serviceArea": {
          "@type": "City",
          "name": "Coimbatore"
        },
        "priceRange": "$$"
      },
      {
        "@type": "FAQPage",
        "mainEntity": allFaqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": typeof faq.answer === 'string' ? faq.answer : ''
          }
        }))
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
