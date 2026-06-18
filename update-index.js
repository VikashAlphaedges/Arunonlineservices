const fs = require('fs');

const faqs = [
  {
    "question": "Do I really need a professional document writer, or can I just copy a format from the internet?",
    "answer": "We strongly advise against using free internet templates. An internet format doesn't know the specific rules of Tamil Nadu or the local requirements of the Coimbatore Sub-Registrar Offices. A small mistake—like missing a boundary direction or getting a survey number wrong—can force you to spend thousands of rupees later on 'Rectification Deeds' or court fees. Using a professional at arunonlineservices ensures your document is perfect, safe, and legally accepted by the government on the very first try."
  },
  {
    "question": "Will you explain the documents to me in a way I can actually understand?",
    "answer": "Yes, absolutely! This is what makes us different. We know that legal documents can look like a totally different language. Before you sign anything, we will sit with you and explain every single paragraph in plain, easy-to-understand terms. We can explain the rules and the conditions in Tamil so you are 100% comfortable and confident about what you are agreeing to. We believe you should never sign a paper you do not fully understand."
  },
  {
    "question": "How much do you charge, and are there any hidden fees?",
    "answer": "At arunonlineservices, we believe in complete honesty with our pricing. Our drafting and consulting fees are highly affordable and tailored for the common man in Coimbatore. The government charges depend strictly on your property's value or the type of service. Before we start any work, we will give you a clear, written breakdown showing exactly what goes to the government and what our service charge is. There are absolutely zero hidden fees or surprise demands."
  },
  {
    "question": "I want to buy a plot, but I am scared of getting cheated. How can you help?",
    "answer": "It is completely normal to feel scared when investing your life savings. We protect you by doing a full background check on the property. We will pull the Villangam (Encumbrance Certificate) for the last 30 years to check for hidden loans. We will compare the seller's documents with the government's Patta and Chitta records. Only if the land is 100% safe, clean, and legal will we advise you to go ahead and draft the Sale Agreement."
  },
  {
    "question": "Do I have to run around government offices if I hire you?",
    "answer": "Not at all. That is exactly what you are hiring us to prevent. We handle all the running around, form-filling, and online applications for you. Whether it is applying for an EC, drafting a deed, or booking an appointment slot, we do the heavy lifting. The only time you need to visit the Sub-Registrar Office is on the final day of registration to provide your signature, photo, and fingerprint. Even then, our team will be standing right next to you to make sure everything goes quickly and smoothly."
  },
  {
    "question": "What are the mandatory documents required for property registration in Tamil Nadu?",
    "answer": "To successfully register a property in Tamil Nadu, several crucial documents must be presented to the Sub-Registrar. These generally include the original title deed (Mother Deed) of the property, a current Encumbrance Certificate (EC) ideally spanning the last 15 to 30 years, and the Patta passbook to verify land revenue records. Additionally, you will need the newly drafted Sale Deed printed on appropriate stamp paper, identity proofs (Aadhaar and PAN cards) for both the buyer and seller, and passport-sized photographs. Depending on the property type, approved building plans or DTCP layout approvals may also be strictly required."
  },
  {
    "question": "Why is verifying the Layout Plan so important before buying a plot in Coimbatore?",
    "answer": "Purchasing a plot in an unapproved layout can lead to massive financial headaches. In Tamil Nadu, if a layout is not approved by the DTCP (Directorate of Town and Country Planning) or the LPA (Local Planning Authority), you will face severe restrictions. You cannot legally obtain building plan approvals to construct a house, and nationalized banks will absolutely refuse to provide home loans for unapproved plots. Furthermore, the government can refuse to provide basic amenities like water connections and electricity. Our documentation process inherently includes verifying these approvals to ensure your investment is safe and legally recognized."
  },
  {
    "question": "What is the difference between an Agreement of Sale and a Sale Deed?",
    "answer": "This is a very common source of confusion for property buyers. An Agreement of Sale is a preliminary contract. It outlines the terms, conditions, agreed-upon price, and a future date for the final transaction. It signifies a promise to transfer the property but does not actually transfer the ownership. A Sale Deed, on the other hand, is the final, legally binding document executed at the time of registration. Once the Sale Deed is signed, stamped, and registered at the Sub-Registrar's office, the actual legal ownership of the property shifts entirely from the seller to the buyer."
  },
  {
    "question": "How does arunonlineservices protect buyers against fraudulent property transactions?",
    "answer": "We utilize a multi-layered verification strategy before we even begin drafting your final documents. We meticulously trace the chain of title backward to ensure the current seller has the absolute legal right to sell the property. We scrutinize the Encumbrance Certificate to check for hidden mortgages, active court stays, or joint-family disputes that might not have been disclosed. By cross-referencing physical survey numbers with digital government records (Tamil Nilam), we build an ironclad legal profile of the property, entirely eliminating the risk of double-registrations or fraudulent sales."
  },
  {
    "question": "How long does the drafting and registration process take with your firm?",
    "answer": "The timeline can vary based on the complexity of the property's history, but efficiency is our hallmark. Typically, once we have all the required preliminary documents from the seller, we can prepare a flawless, customized draft within 2 to 3 business days for your review. Once both parties approve the draft, we assist in purchasing the e-stamp papers and scheduling an appointment at the respective Sub-Registrar Office. The actual registration process usually takes just a few hours on the appointed day, providing a streamlined and dignified experience for our clients."
  },
  {
    "question": "What exactly does an Encumbrance Certificate (Villangam) reveal about a property?",
    "answer": "An Encumbrance Certificate serves as the official, government-backed legal logbook of a property. It reveals every transaction that has been officially registered with the Sub-Registrar Office regarding that specific piece of land or building over a requested timeframe. This highly detailed record includes sale deeds, partition deeds among family members, gift settlements, registered leases, and most importantly, mortgages or financial loans taken against the property. It essentially tells you who legally owns the property right now, and whether anyone else (like a nationalized bank, a private lender, or a third-party creditor) has an active, legally binding financial claim to it."
  },
  {
    "question": "How many years back should I check the Encumbrance Certificate before purchasing a plot or house in Coimbatore?",
    "answer": "For complete legal safety and absolute peace of mind, it is the strict industry standard to obtain an EC covering a minimum of 15 to 30 years. Tracing the history back 30 years ensures that you have established a completely unbroken chain of title—meaning you can clearly see how the property passed from the original owner, through various buyers, down to the person currently trying to sell it to you. Furthermore, most major nationalized banks and housing finance companies strictly require at least a 13-to-15-year clear EC before they will even consider processing or approving a home loan or property mortgage."
  },
  {
    "question": "What is the fundamental difference between a Form 15 and a Form 16 Encumbrance Certificate?",
    "answer": "When you apply for an EC in Tamil Nadu, the Sub-Registrar will issue the official certificate in one of two formats based on the property's history during your requested dates. If there have been any registered transactions (like a sale, a settlement, or a mortgage) during that time, you will receive a Form 15, which explicitly lists the detailed particulars, document numbers, and parties involved in each transaction. However, if absolutely no transactions were registered during the period you requested, the government issues a Form 16. This is widely known as a Nil Encumbrance Certificate, proving the property's legal status remained entirely untouched and unburdened during that specific window of time."
  },
  {
    "question": "Can I just use the free online EC downloaded from the IGRS Tamil Nadu portal for my bank loan?",
    "answer": "While downloading a free, uncertified online EC from the Inspector General of Registration (IGRS) website is an excellent, fast way to do a preliminary background check, it is generally not sufficient for official, high-stakes legal purposes. Banks, financial institutions, and civil courts almost always require a certified EC. A certified EC is either digitally signed by the Sub-Registrar through the official portal (which requires the payment of standard government fees) or physically stamped and signed in ink at the local SRO. arunonlineservices handles the complete procurement of these official, legally binding certificates on your behalf so your loan processing is never delayed."
  },
  {
    "question": "My EC shows an old bank loan that was paid off years ago. How do I remove this encumbrance?",
    "answer": "This is an incredibly common issue that catches many property owners off guard. Simply paying off your loan at the bank does not automatically update the Tamil Nadu government's registration records. To clear this encumbrance from your property’s permanent history, you must first obtain a \\\"No Objection Certificate\\\" (NOC) and the original title deeds back from your bank. Then, you must draft and officially register a \\\"Receipt of Payment\\\" or \\\"Discharge of Mortgage\\\" deed at the exact Sub-Registrar Office where the loan was originally registered. Once this discharge deed is registered, the subsequent EC will reflect that the loan has been completely cleared. We highly recommend using arunonlineservices for this drafting to ensure the entry is cleared flawlessly without clerical errors."
  },
  {
    "question": "Is it legally mandatory to register a Rental Agreement in Tamil Nadu?",
    "answer": "Yes, it is absolutely mandatory. Under the Tamil Nadu Regulation of Rights and Responsibilities of Landlords and Tenants Act, 2017, every single rental agreement—regardless of whether the lease period is 11 months or 5 years—must be strictly registered with the Rent Authority. Failing to officially register your rental agreement means the document cannot be used as primary evidence in a court of law if a severe dispute arises regarding unpaid rent, catastrophic property damage, or unlawful eviction. arunonlineservices handles both the precise, compliant drafting and the official registration of these complex agreements."
  },
  {
    "question": "Why shouldn't I just use a free agreement template downloaded from the internet?",
    "answer": "Free online templates are generalized and incredibly dangerous to your financial health. They completely lack jurisdictional specificity—meaning a template designed for US or UK law, or even a different Indian state, will absolutely lack the specific clauses strictly required by Tamil Nadu civil courts. More importantly, pre-made templates cannot possibly account for the unique variables and nuances of your specific transaction. They often omit crucial indemnification clauses, specific local municipal rules, and precise default-penalty structures. A professionally drafted agreement is custom-fitted armor; an internet template is a fragile paper shield."
  },
  {
    "question": "Does a Last Will and Testament need to be registered at the Sub-Registrar Office?",
    "answer": "While the Indian Registration Act does not make the registration of a Will legally compulsory, we highly and strongly recommend it to all of our clients. A formally registered Will holds significantly more legal weight and irrefutable authenticity than an unregistered one. Because a Will comes into effect only after the testator's passing, proving the authenticity of an unregistered document can be a long, painfully expensive process for your grieving heirs. Registering the Will provides a permanent, government-backed record that proves the document was signed voluntarily by a person of sound mind, effectively blocking frivolous legal challenges."
  },
  {
    "question": "Can a registered Gift Deed be cancelled or revoked later?",
    "answer": "Generally speaking, once a Gift Deed is unconditionally accepted by the receiver and officially registered at the Sub-Registrar Office, it becomes absolute and irrevocable. You cannot simply change your mind and legally take the property back. However, there are highly specific, narrow legal exceptions. If the Gift Deed was executed under proven fraud, severe coercion, or undue influence, it can be successfully challenged in civil court. Additionally, if the deed contains a specific, legally valid \\\"revocation clause\\\" (e.g., \\\"This gift is permanently revoked if the receiver fails to maintain the donor in their old age\\\"), it can be legally cancelled. This highlights exactly why expert drafting by arunonlineservices is so profoundly critical."
  },
  {
    "question": "What is the exact difference between a Memorandum of Understanding (MoU) and a formal Contract?",
    "answer": "This is a vital legal distinction in both business and high-value real estate. A Memorandum of Understanding (MoU) is typically a preliminary, foundational document. It broadly outlines the mutual intentions, ultimate goals, and basic terms between two parties who are seriously planning to work together. In most cases, an MoU is not strictly legally binding and cannot be easily enforced in a court to demand performance. A formal Contract (like a comprehensive Sale Agreement or a Joint Venture Partnership Deed), however, contains specific offers, undeniable acceptances, and valid \\\"considerations\\\" (usually money). Once fully signed and stamped, a contract is strictly legally binding and fully enforceable by law."
  },
  {
    "question": "Is it legally mandatory to register my marriage in Tamil Nadu?",
    "answer": "Yes, it is absolutely mandatory. The Tamil Nadu Registration of Marriages Act, 2009, strictly dictates that all marriages solemnized in the state—regardless of the religion of the parties or the personal laws under which they were married—must be registered with the government. Failing to officially register your marriage within the prescribed 90-day window can result in government fines. More importantly, without this registration, you will be entirely unable to process joint visas, legally update your passport details, or claim essential spouse benefits in banking, real estate, and life insurance."
  },
  {
    "question": "What is the fundamental difference between the Hindu Marriage Act and the Special Marriage Act?",
    "answer": "The Hindu Marriage Act applies exclusively when both the bride and the groom are Hindus, Buddhists, Jains, or Sikhs, and the marriage has already been performed according to traditional rituals. The registration simply acts as a legal recording of an event that has already taken place. The Special Marriage Act, however, applies to inter-faith couples or those desiring a purely civil, non-religious marriage. It acts as both the solemnization (the actual marrying) and the registration. It critically requires a mandatory 30-day advance public notice before the marriage can be legally finalized by the marriage officer."
  },
  {
    "question": "What are the strict mandatory documents required for a standard marriage registration?",
    "answer": "While specific requirements can vary slightly depending on the local SRO in Coimbatore, the universally mandatory documents include: original wedding invitation cards, officially recognized proof of age for both parties (Birth Certificate, 10th Marksheet, or Passport), proof of residence (Aadhaar Card, Voter ID, or Passport), passport-sized photographs of the couple, and a minimum of three distinct photographs taken during the actual wedding ceremony showing the core rituals. Additionally, you must strictly bring three witnesses who physically attended the wedding, completely equipped with their own original ID and address proofs."
  },
  {
    "question": "Do my spouse and I need to be physically present at the Sub-Registrar Office?",
    "answer": "Yes, physical presence is an uncompromising, strict legal mandate. A marriage absolutely cannot be registered via proxy, through a legal power of attorney, or completely online in Tamil Nadu. Both the husband and the wife must be physically present before the Sub-Registrar to formally sign the official marriage registry and have their biometric fingerprints and live photographs captured directly by the government's digital system. Furthermore, your three official witnesses must also be physically present at the exact same time to sign the registry."
  },
  {
    "question": "Can Non-Resident Indians (NRIs) register their marriage in Coimbatore?",
    "answer": "Yes, NRIs can absolutely register their marriage in Coimbatore, provided the marriage was actually solemnized within the jurisdiction of the local Coimbatore Sub-Registrar, or if at least one of the partners has a valid, permanent residential address within that jurisdiction. However, the documentation for NRIs is scrutinized much more heavily by the authorities. You will typically be required to present your original passport, visa copies, and sometimes a Single Status Certificate or No Objection Certificate (NOC) directly from your respective embassy. arunonlineservices excels in structuring these complex NRI document profiles to prevent frustrating rejections."
  },
  {
    "question": "What exactly does a document consultant do?",
    "answer": "A document consultant acts as your personal guide through complex legal, administrative, and government paperwork. At arunonlineservices, we review your specific needs, advise you on the exact list of required documents, help draft legal paperwork (like deeds or affidavits) in the correct format, and guide you through the submission process to ensure your applications are accepted on the first try."
  },
  {
    "question": "How long does it usually take to process legal or government documents?",
    "answer": "Timelines vary significantly depending on the type of document. A simple affidavit can be drafted and notarized in a single day, while a property Patta transfer or a Gazette publication for a name change may take several weeks. During our initial consultation, we provide you with a realistic, transparent timeline based on the current processing speeds of the respective government departments in Coimbatore."
  },
  {
    "question": "I am an NRI living abroad. Can you help me manage my property and legal documents in Coimbatore?",
    "answer": "Absolutely. A large part of our document consulting service is dedicated to Non-Resident Indians. We assist with drafting and adjudicating Power of Attorney (PoA) documents, resolving property documentation issues, and securing necessary certificates (like Single Status Certificates or birth certificate corrections) so you don't have to make unnecessary international trips."
  },
  {
    "question": "Do I need to be physically present at the government office if I use your consulting services?",
    "answer": "This depends entirely on the legal requirement of the specific document. For processes like property registration or marriage registration, your physical presence (along with biometric verification and photos) is a strict legal mandate before the Sub-Registrar. However, for many other services—such as drafting agreements, applying for Encumbrance Certificates (ECs), or securing certain licenses—we can handle the backend documentation and process it on your behalf without you needing to step into an office."
  },
  {
    "question": "What happens if my application or document has already been rejected by a government office?",
    "answer": "Don't panic; rejections are common, usually due to minor formatting errors or missing annexures. Bring your rejected application and the official rejection note to us. Our consultants will thoroughly analyze the specific reasons for the rejection, rectify the errors, gather any missing proofs, and help you submit a flawless re-application."
  },
  {
    "question": "Are my personal details, IDs, and property documents safe with arunonlineservices?",
    "answer": "Yes, 100%. We take your privacy and data security incredibly seriously. We adhere to a strict confidentiality policy. Your personal identification, sensitive financial details, and property documents are used strictly for the purpose of your specific application and are never shared with unauthorized third parties."
  }
];

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
      "mainEntity": faqs.map(f => ({
        "@type": "Question",
        "name": f.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.answer
        }
      }))
    }
  ]
};

const jsonLd = `<script type="application/ld+json">\n${JSON.stringify(schema, null, 2)}\n    </script>`;

let html = fs.readFileSync('index.html', 'utf8');
const tagOpen = '<script type="application/ld+json">';
const tagClose = '</script>';

const startIndex = html.indexOf(tagOpen);
const endIndex = html.indexOf(tagClose, startIndex) + tagClose.length;

if (startIndex !== -1 && endIndex !== -1) {
  html = html.substring(0, startIndex) + jsonLd + html.substring(endIndex);
  fs.writeFileSync('index.html', html);
  console.log('Successfully updated index.html with new FAQ schema.');
} else {
  console.log('Could not find existing max script tag.');
}
