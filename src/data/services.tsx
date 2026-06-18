import { FileText, Building2, ScrollText, HeartHandshake, Briefcase } from "lucide-react";
import React from "react";

export interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  detail: {
    subtitle: string;
    overview: string;
    features: string[];
    process: { step: string; description: string }[];
    sections?: {
      title: string;
      content: string | React.ReactNode;
    }[];
    tableData?: {
      headers: string[];
      rows: string[][];
    };
    faqs?: {
      question: string;
      answer: string | React.ReactNode;
    }[];
  };
}

export const servicesData: Service[] = [
  {
    id: "real-estate-documentation",
    icon: <Building2 size={28} />,
    title: "Real Estate Documentation",
    description: "Buying, selling, or transferring property is a significant milestone. In Tamil Nadu, the landscape of property law can be complex. We engineer peace of mind by crossing-referencing Patta, Chitta, and surveying details, ensuring your property title is absolute, clear, and undisputed.",
    detail: {
      subtitle: "Expert Real Estate Documentation Services in Coimbatore: Secure Your Property Investment",
      overview: "Buying, selling, or transferring property is one of the most significant financial and emotional milestones in a person's life. Whether you are purchasing your very first dream home, acquiring a vacant site for future family planning, or developing a massive commercial layout, the foundation of your investment rests entirely on one critical element: legally sound, ironclad documentation.\n\nIn Tamil Nadu, the landscape of property law, registration protocols, and land revenue records can be incredibly complex. A single oversight—a misspelled name, an incorrect boundary description, or a missed clearance certificate—can lead to decades of legal battles, financial loss, or the inability to sell the property in the future. That is exactly where our elite real estate document writing services come in. Established to bring uncompromising precision to property registration and document validation in Coimbatore, arunonlineservices doesn't just write documents; we engineer peace of mind.",
      features: [],
      process: [],
      sections: [
        {
          title: "Why Bulletproof Property Registration Matters in Tamil Nadu",
          content: "When navigating the real estate market in Tamil Nadu, a handshake and a basic template are never enough. Property transactions require a deep dive into historical ownership (tracing the mother deed), encumbrance checks, and verifying local municipal compliance.\n\nWithout perfectly SEO-optimized, legally validated real estate documentation, buyers and sellers expose themselves to severe risks, including fraudulent double-sales, encroachment disputes, and rejected bank loans. Professional legal document drafting acts as your ultimate shield. At arunonlineservices, our document writers act as meticulous architects for your legal safety. We cross-reference every single detail—from the Patta and Chitta documents to the exact square footage and directional boundaries—ensuring that your property title is absolute, clear, and undisputed."
        },
        {
          title: "Understanding the Role of Patta and Chitta in Documentation",
          content: "In Tamil Nadu, the Patta is a crucial revenue record that proves lawful possession of the land, while the Chitta details the specific area, size, and ownership classification (such as Nanjai or Punjai). We ensure that these documents perfectly align with the parent deed before drafting the final sale documents.\n\nDiscrepancies between the Patta and the Sale Deed can result in the Sub-Registrar rejecting the registration entirely. Our team expertly handles these cross-verifications to prevent any last-minute administrative failures and ensure your transaction is flawless from start to finish."
        },
        {
          title: "Legal Vetting of Pre-existing Encumbrances",
          content: "A critical step in our documentation process involves securing and thoroughly analyzing the Encumbrance Certificate (EC), locally known as the Villangam certificate. By tracing the history of the property for at least 30 years, we ensure there are no hidden mortgages, ongoing civil disputes, or unrecorded lease agreements that could jeopardize your investment. arunonlineservices leaves no stone unturned, providing you with a clean, marketable title."
        },
        {
          title: "Our Comprehensive Real Estate Documentation Services",
          content: "We specialize in end-to-end legal drafting and validation for a wide variety of real estate transactions. Our core competencies include:\n\n• Vacant Place & Site Registration: Purchasing vacant land carries unique risks, particularly regarding boundary disputes and unauthorized occupations. Our team conducts rigorous background checks on the vacant site you intend to purchase. We draft precise sale agreements and sale deeds that explicitly define the property's dimensions, its survey numbers, and its legal standing within the local registrar's jurisdiction.\n\n• House and Residential Property Drafting: Buying a constructed home involves more than just land; it involves building approvals, property tax receipts, electricity board name transfers, and ensuring there are no outstanding mortgages tied to the structure. Our legal documentation for houses guarantees that every physical asset on the land is legally transferred to your name.\n\n• Layout Plans and Commercial Developments: For real estate developers and investors dealing with layout plans, compliance with the Directorate of Town and Country Planning (DTCP) or the Real Estate Regulatory Authority (RERA) is mandatory. Selling or buying plots in unapproved layouts can lead to severe legal penalties and a lack of basic civic amenities. arunonlineservices provides strategic oversight and drafting for layout promotions, ensuring that every individual plot deed aligns perfectly with the master layout plan."
        },
        {
          title: "The arunonlineservices Advantage in Coimbatore",
          content: "Choosing the right legal document writer in Coimbatore can make the difference between a smooth transaction and a stressful ordeal. Our comprehensive approach means we treat every client's property as if it were our own.\n\nOur team stays constantly updated on the latest amendments to the Tamil Nadu Registration Act and local stamp duty guidelines. We calculate the exact stamp duty and registration fees required, prepare the drafts for your review, and stand by your side during the actual registration process. With arunonlineservices, you are not just getting a typist; you are gaining a strategic legal partner dedicated to securing your assets and validating your future. Don't leave your most valuable assets to chance. Let our established experts handle the complexities of your real estate documentation."
        }
      ],
      tableData: {
        headers: ["Service Area", "Key Deliverables", "Primary Benefit"],
        rows: [
          ["Site Registration", "Sale Deeds, Boundary Verification", "Prevents Encroachment & Disputes"],
          ["Residential Properties", "Tax Transfers, Clearance Checks", "Ensures 100% Clear Title"],
          ["Commercial Layouts", "DTCP/RERA Compliance Docs", "Avoids Severe Legal Penalties"]
        ]
      },
      faqs: [
        {
          question: "What are the mandatory documents required for property registration in Tamil Nadu?",
          answer: "To successfully register a property in Tamil Nadu, several crucial documents must be presented to the Sub-Registrar. These generally include the original title deed (Mother Deed) of the property, a current Encumbrance Certificate (EC) ideally spanning the last 15 to 30 years, and the Patta passbook to verify land revenue records. Additionally, you will need the newly drafted Sale Deed printed on appropriate stamp paper, identity proofs (Aadhaar and PAN cards) for both the buyer and seller, and passport-sized photographs. Depending on the property type, approved building plans or DTCP layout approvals may also be strictly required."
        },
        {
          question: "Why is verifying the Layout Plan so important before buying a plot in Coimbatore?",
          answer: "Purchasing a plot in an unapproved layout can lead to massive financial headaches. In Tamil Nadu, if a layout is not approved by the DTCP (Directorate of Town and Country Planning) or the LPA (Local Planning Authority), you will face severe restrictions. You cannot legally obtain building plan approvals to construct a house, and nationalized banks will absolutely refuse to provide home loans for unapproved plots. Furthermore, the government can refuse to provide basic amenities like water connections and electricity. Our documentation process inherently includes verifying these approvals to ensure your investment is safe and legally recognized."
        },
        {
          question: "What is the difference between an Agreement of Sale and a Sale Deed?",
          answer: "This is a very common source of confusion for property buyers. An Agreement of Sale is a preliminary contract. It outlines the terms, conditions, agreed-upon price, and a future date for the final transaction. It signifies a promise to transfer the property but does not actually transfer the ownership. A Sale Deed, on the other hand, is the final, legally binding document executed at the time of registration. Once the Sale Deed is signed, stamped, and registered at the Sub-Registrar's office, the actual legal ownership of the property shifts entirely from the seller to the buyer."
        },
        {
          question: "How does arunonlineservices protect buyers against fraudulent property transactions?",
          answer: "We utilize a multi-layered verification strategy before we even begin drafting your final documents. We meticulously trace the chain of title backward to ensure the current seller has the absolute legal right to sell the property. We scrutinize the Encumbrance Certificate to check for hidden mortgages, active court stays, or joint-family disputes that might not have been disclosed. By cross-referencing physical survey numbers with digital government records (Tamil Nilam), we build an ironclad legal profile of the property, entirely eliminating the risk of double-registrations or fraudulent sales."
        },
        {
          question: "How long does the drafting and registration process take with your firm?",
          answer: "The timeline can vary based on the complexity of the property's history, but efficiency is our hallmark. Typically, once we have all the required preliminary documents from the seller, we can prepare a flawless, customized draft within 2 to 3 business days for your review. Once both parties approve the draft, we assist in purchasing the e-stamp papers and scheduling an appointment at the respective Sub-Registrar Office. The actual registration process usually takes just a few hours on the appointed day, providing a streamlined and dignified experience for our clients."
        }
      ]
    }
  },
  {
    id: "encumbrance-certificate",
    icon: <ScrollText size={28} />,
    title: "Encumbrance Certificate (EC / Villangam)",
    description: "What you cannot see can cost you everything. The only definitive way to prove a property has a clear, marketable title is through a meticulously verified Encumbrance Certificate (Villangam). We decode, analyze, and validate every entry to insulate your investment from hidden legal liabilities.",
    detail: {
      subtitle: "Elite Encumbrance Certificate (EC) Services in Coimbatore: Uncover Your Property’s True Legal History",
      overview: "In the fast-paced realm of Coimbatore real estate, what you cannot see can cost you everything. A beautiful piece of property in a prime location might look absolutely flawless on the surface, but its hidden legal history could be masking unresolved mortgages, third-party claims, or generational family disputes. The only definitive, legally recognized way to prove that a property has a clear, marketable title is through a meticulously verified Encumbrance Certificate (EC)—locally known in Tamil Nadu as a Villangam certificate.\n\nAt arunonlineservices, we understand that an Encumbrance Certificate is not just a piece of paper; it is the absolute financial heartbeat of your real estate transaction. Whether you are applying for a substantial bank loan, purchasing a new commercial plot, or preparing to sell your ancestral home, a spotless EC is non-negotiable. Our expert document writers and legal consultants do not merely procure these certificates; we decode, analyze, and thoroughly validate every single entry to ensure your investment is completely insulated from hidden legal liabilities.",
      features: [],
      process: [],
      sections: [
        {
          title: "Why Expert EC Verification is Critical in Tamil Nadu",
          content: "The Inspector General of Registration (IGRS) Tamil Nadu maintains vast digital and manual archives of property transactions across all local Sub-Registrar Offices (SRO). An Encumbrance Certificate acts as a historical mirror, reflecting every single registered transaction—including sales, mortgages, leases, family partitions, and gift settlements—that has occurred on a specific property over a requested period of time.\n\nHowever, accurately reading and interpreting an EC requires professional legal literacy. A common, devastating mistake buyers make is assuming that simply having the certificate in hand means the property is safe to purchase. Consider these hidden risks:\n\n• Unregistered Discharges: If a previous owner took out a bank loan and failed to officially register the discharge receipt upon repayment, that active encumbrance remains tightly bound to the property. If you purchase it, the bank’s financial claim transfers directly to you.\n\n• Clerical Errors: Spelling discrepancies in names, incorrect survey numbers, or missing boundary details across different decades can completely derail your registration process.\n\narunonlineservices entirely eliminates this risk by conducting deep-dive forensic audits of your property’s encumbrance history, ensuring that the \"chain of title\" is unbroken, perfectly transparent, and legally sound."
        },
        {
          title: "Our Comprehensive Encumbrance Certificate Services",
          content: "Navigating the various Sub-Registrar Offices and online government portals requires significant time, patience, and technical precision. We handle the entire spectrum of EC procurement and legal verification for our clients in Coimbatore, ensuring a frictionless experience:\n\n• 15-Year to 30-Year Deep History Retrieval: Financial institutions, banks, and discerning buyers typically demand an EC spanning at least 15 to 30 years to establish a clear connection to the original mother deed. We efficiently procure long-term Encumbrance Certificates, expertly bridging the gap between newer digital records (post-1975) and older manual archives stored at the SRO. We ensure that the historical timeline of the property is fully accounted for without a single gap.\n\n• Form 15 and Form 16 (Nil Encumbrance) Processing: Depending on the legal history of the property, the government issues either a Form 15 or a Form 16. We meticulously apply for and retrieve the exact correct forms, validating that the status is genuine and not the result of a clerical error or an incorrectly entered survey number during the application process.\n\n• Encumbrance Rectification and Discharge Drafting: If we discover an unresolved entry on your EC—such as an old, unpaid mortgage or an erroneous double-registration—we do not just hand you the bad news. arunonlineservices provides immediate, strategic legal action. We assist in drafting and registering the necessary Rectification Deeds, Discharge Receipts, or Cancellation Deeds strictly required to clear the encumbrance and restore your property's value."
        },
        {
          title: "The arunonlineservices Advantage for EC Procurement",
          content: "Obtaining a Villangam certificate shouldn't be a frustrating bureaucratic hurdle. With arunonlineservices, the process is streamlined, highly transparent, and completely hands-off for you.\n\nWe utilize advanced cross-referencing techniques, rigorously comparing the physical Patta documents, the FMB (Field Measurement Book) sketch, and the SRO encumbrance entries to ensure absolute alignment. Our deep familiarity with the jurisdictional boundaries of Coimbatore's various Sub-Registrar Offices means we know exactly where to look, who to speak with, and how to expedite the process. When you entrust us with your property's historical verification, you gain the ultimate confidence of knowing that seasoned legal professionals have audited every single line. We protect your wealth by uncovering the past, so you can confidently build your future."
        }
      ],
      tableData: {
        headers: ["EC Format Type", "What It Means", "Legal Implication"],
        rows: [
          ["Form 15", "Contains a record of registered transactions during the requested period.", "Details sales, mortgages, or leases. Requires expert review to ensure all loans are discharged."],
          ["Form 16", "A \"Nil Encumbrance\" certificate. No transactions occurred.", "Proves the title remained untouched and unchanged by the current owner during the period."],
          ["Manual EC", "Pre-1975 records searched physically in SRO ledgers.", "Crucial for tracing ancestral properties back to the original mother deed."]
        ]
      },
      faqs: [
        {
            question: "What exactly does an Encumbrance Certificate (Villangam) reveal about a property?",
            answer: "An Encumbrance Certificate serves as the official, government-backed legal logbook of a property. It reveals every transaction that has been officially registered with the Sub-Registrar Office regarding that specific piece of land or building over a requested timeframe. This highly detailed record includes sale deeds, partition deeds among family members, gift settlements, registered leases, and most importantly, mortgages or financial loans taken against the property. It essentially tells you who legally owns the property right now, and whether anyone else (like a nationalized bank, a private lender, or a third-party creditor) has an active, legally binding financial claim to it."
        },
        {
            question: "How many years back should I check the Encumbrance Certificate before purchasing a plot or house in Coimbatore?",
            answer: "For complete legal safety and absolute peace of mind, it is the strict industry standard to obtain an EC covering a minimum of 15 to 30 years. Tracing the history back 30 years ensures that you have established a completely unbroken \"chain of title\"—meaning you can clearly see how the property passed from the original owner, through various buyers, down to the person currently trying to sell it to you. Furthermore, most major nationalized banks and housing finance companies strictly require at least a 13-to-15-year clear EC before they will even consider processing or approving a home loan or property mortgage."
        },
        {
            question: "What is the fundamental difference between a Form 15 and a Form 16 Encumbrance Certificate?",
            answer: "When you apply for an EC in Tamil Nadu, the Sub-Registrar will issue the official certificate in one of two formats based on the property's history during your requested dates. If there have been any registered transactions (like a sale, a settlement, or a mortgage) during that time, you will receive a Form 15, which explicitly lists the detailed particulars, document numbers, and parties involved in each transaction. However, if absolutely no transactions were registered during the period you requested, the government issues a Form 16. This is widely known as a \"Nil Encumbrance Certificate,\" proving the property's legal status remained entirely untouched and unburdened during that specific window of time."
        },
        {
            question: "Can I just use the free online EC downloaded from the IGRS Tamil Nadu portal for my bank loan?",
            answer: "While downloading a free, uncertified online EC from the Inspector General of Registration (IGRS) website is an excellent, fast way to do a preliminary background check, it is generally not sufficient for official, high-stakes legal purposes. Banks, financial institutions, and civil courts almost always require a certified EC. A certified EC is either digitally signed by the Sub-Registrar through the official portal (which requires the payment of standard government fees) or physically stamped and signed in ink at the local SRO. arunonlineservices handles the complete procurement of these official, legally binding certificates on your behalf so your loan processing is never delayed."
        },
        {
            question: "My EC shows an old bank loan that was paid off years ago. How do I remove this encumbrance?",
            answer: "This is an incredibly common issue that catches many property owners off guard. Simply paying off your loan at the bank does not automatically update the Tamil Nadu government's registration records. To clear this encumbrance from your property’s permanent history, you must first obtain a \"No Objection Certificate\" (NOC) and the original title deeds back from your bank. Then, you must draft and officially register a \"Receipt of Payment\" or \"Discharge of Mortgage\" deed at the exact Sub-Registrar Office where the loan was originally registered. Once this discharge deed is registered, the subsequent EC will reflect that the loan has been completely cleared. We highly recommend using arunonlineservices for this drafting to ensure the entry is cleared flawlessly without clerical errors."
        }
      ]
    }
  },
  {
    id: "preparation-of-agreements",
    icon: <FileText size={28} />,
    title: "Preparation of Agreements",
    description: "In both personal and commercial spheres, contracts form the invisible architecture of successful relationships. A poorly worded contract is a financial liability waiting to unfold. We draft bespoke legal instruments to protect your exact interests and completely eliminate room for future litigation.",
    detail: {
      subtitle: "Expert Legal Agreement Drafting Services in Coimbatore: Watertight Contracts for Total Security",
      overview: "In both personal and commercial spheres, contracts and legal agreements form the invisible, yet impenetrable architecture that supports every successful relationship. Whether you are leasing out a high-value commercial property, formally defining the partition of ancestral land, or declaring your final wishes to protect your family's future, a verbal handshake simply does not hold up in a court of law. A poorly worded contract, or one relying on a generic, outdated internet template, is not just a piece of paper—it is an active financial liability waiting to unfold.\n\nAt arunonlineservices, we understand that true security lies in the fine print. We do not believe in cookie-cutter solutions. Every agreement we draft is a bespoke legal instrument, painstakingly engineered to protect your exact interests, clearly define mutual obligations, and completely eliminate any room for ambiguity or future litigation. From standard residential rental contracts to highly complex corporate lease deeds and sensitive family settlements, our expert document writers ensure your agreements are legally binding, precise, and impenetrable.",
      features: [],
      process: [],
      sections: [
        {
          title: "The Critical Need for Professional Agreement Preparation in Tamil Nadu",
          content: "The legal landscape governing civil contracts in India, particularly property and family law in Tamil Nadu, is incredibly nuanced. The enforceability of any agreement depends heavily on correct stamp duty calculations, proper witness attestations, and absolute adherence to the Indian Contract Act and the Registration Act.\n\nAn ambiguous clause regarding a lock-in period in a commercial lease can financially trap a landlord for years. A loosely defined directional boundary in a family partition deed can tear siblings apart across generations. An unregistered Will can plunge rightful heirs into decades of exhausting probate court battles. Professional legal drafting acts as your ultimate preemptive conflict resolution. By anticipating potential disputes, identifying legal loopholes, and addressing every conceivable \"what-if\" scenario, arunonlineservices drafts agreements that act as an absolute, unbreakable shield for your assets, rights, and legacy."
        },
        {
          title: "Our Specialized Legal Agreement Drafting Services",
          content: "Our elite document writing expertise covers a vast spectrum of personal, civil, and commercial contracts. We tailor every single clause to your specific mandates. To ensure absolute legal compliance and maximum security, our primary areas of expertise include:\n\n• Sale Deeds and Property Conveyance Agreements: The absolute, irrevocable transfer of property ownership demands flawless documentation. We draft rigorous Agreements of Sale that lock in highly favorable terms, advance payments, and strict timelines. When it is time for final registration, our meticulously drafted Sale Deeds ensure the seamless conveyance of title. We deeply incorporate ironclad indemnification clauses, protecting the buyer against any undisclosed historical liabilities, and clearly define the physical handover of possession to ensure a legally perfect transaction.\n\n• Rental and Commercial Lease Agreements: With the strict implementation of the new Tamil Nadu Regulation of Rights and Responsibilities of Landlords and Tenants Act (TNRRRLT Act), the rules surrounding renting properties have changed drastically. We draft highly customized residential and commercial lease agreements that strictly comply with these new government regulations. We precisely outline property maintenance responsibilities, security deposit refund conditions, annual escalation percentages, and stringent eviction clauses, ensuring both landlords and tenants are fully protected from day one.\n\n• Wills, Gift Deeds, and Family Settlements: Managing multi-generational family wealth requires deep sensitivity, strategic foresight, and absolute legal precision. We assist in drafting clear, unambiguous Last Wills and Testaments to ensure your legacy is distributed exactly according to your wishes, minimizing the critical risk of future family disputes. Additionally, we expertly draft Gift Deeds for the smooth transfer of property between blood relatives, and comprehensive Family Partition Deeds that legally separate joint-family assets with clear, undisputed demarcations."
        },
        {
          title: "The arunonlineservices Signature Approach",
          content: "When you choose arunonlineservices for your agreement drafting in Coimbatore, you are consciously opting for the highest standard of legal protection available in the market. We bring a premium level of extreme scrutiny to every single document.\n\nWe begin with a deep-dive consultation to understand the specific, unique nuances of your arrangement. We do not just blindly transcribe your terms; we legally optimize them. We accurately advise you on the exact required stamp duty for your specific agreement type and physically guide you through the mandatory registration processes at the Sub-Registrar Office when necessary. Our ultimate goal is not just to create a document, but to craft a strategic legal asset that guarantees your profound peace of mind and permanently secures your financial future."
        }
      ],
      tableData: {
        headers: ["Agreement Category", "Essential Clauses Included", "Key Legal Benefit"],
        rows: [
          ["Commercial Leases", "Escalation Rates, Lock-in Periods", "Prevents Unlawful Eviction & Rent Disputes"],
          ["Sale Agreements", "Indemnification, Default Penalties", "Secures Advance Payments & Outlines Timelines"],
          ["Family Partitions", "Exact Boundaries, Equal Valuation", "Eliminates Generational Court Battles"],
          ["Gift Deeds", "Absolute Transfer, Revocation Terms", "Facilitates Smooth, Tax-Compliant Wealth Transfer"]
        ]
      },
      faqs: [
        {
            question: "Is it legally mandatory to register a Rental Agreement in Tamil Nadu?",
            answer: "Yes, it is absolutely mandatory. Under the Tamil Nadu Regulation of Rights and Responsibilities of Landlords and Tenants Act, 2017, every single rental agreement—regardless of whether the lease period is 11 months or 5 years—must be strictly registered with the Rent Authority. Failing to officially register your rental agreement means the document cannot be used as primary evidence in a court of law if a severe dispute arises regarding unpaid rent, catastrophic property damage, or unlawful eviction. arunonlineservices handles both the precise, compliant drafting and the official registration of these complex agreements."
        },
        {
            question: "Why shouldn't I just use a free agreement template downloaded from the internet?",
            answer: "Free online templates are generalized and incredibly dangerous to your financial health. They completely lack jurisdictional specificity—meaning a template designed for US or UK law, or even a different Indian state, will absolutely lack the specific clauses strictly required by Tamil Nadu civil courts. More importantly, pre-made templates cannot possibly account for the unique variables and nuances of your specific transaction. They often omit crucial indemnification clauses, specific local municipal rules, and precise default-penalty structures. A professionally drafted agreement is custom-fitted armor; an internet template is a fragile paper shield."
        },
        {
            question: "Does a Last Will and Testament need to be registered at the Sub-Registrar Office?",
            answer: "While the Indian Registration Act does not make the registration of a Will legally compulsory, we highly and strongly recommend it to all of our clients. A formally registered Will holds significantly more legal weight and irrefutable authenticity than an unregistered one. Because a Will comes into effect only after the testator's passing, proving the authenticity of an unregistered document can be a long, painfully expensive process for your grieving heirs. Registering the Will provides a permanent, government-backed record that proves the document was signed voluntarily by a person of sound mind, effectively blocking frivolous legal challenges."
        },
        {
            question: "Can a registered Gift Deed be cancelled or revoked later?",
            answer: "Generally speaking, once a Gift Deed is unconditionally accepted by the receiver and officially registered at the Sub-Registrar Office, it becomes absolute and irrevocable. You cannot simply change your mind and legally take the property back. However, there are highly specific, narrow legal exceptions. If the Gift Deed was executed under proven fraud, severe coercion, or undue influence, it can be successfully challenged in civil court. Additionally, if the deed contains a specific, legally valid \"revocation clause\" (e.g., \"This gift is permanently revoked if the receiver fails to maintain the donor in their old age\"), it can be legally cancelled. This highlights exactly why expert drafting by arunonlineservices is so profoundly critical."
        },
        {
            question: "What is the exact difference between a Memorandum of Understanding (MoU) and a formal Contract?",
            answer: "This is a vital legal distinction in both business and high-value real estate. A Memorandum of Understanding (MoU) is typically a preliminary, foundational document. It broadly outlines the mutual intentions, ultimate goals, and basic terms between two parties who are seriously planning to work together. In most cases, an MoU is not strictly legally binding and cannot be easily enforced in a court to demand performance. A formal Contract (like a comprehensive Sale Agreement or a Joint Venture Partnership Deed), however, contains specific offers, undeniable acceptances, and valid \"considerations\" (usually money). Once fully signed and stamped, a contract is strictly legally binding and fully enforceable by law."
        }
      ]
    }
  },
  {
    id: "marriage-registration",
    icon: <HeartHandshake size={28} />,
    title: "Marriage Registration",
    description: "To permanently secure your civil rights and seamlessly navigate the modern administrative world, formalizing your union through a government-issued Marriage Certificate is non-negotiable. We act as your dedicated legal concierge to ensure a stress-free administrative process.",
    detail: {
      subtitle: "Flawless Marriage Registration Services in Coimbatore: Formalize Your Union with Dignity and Legal Precision",
      overview: "A wedding is a profound personal milestone, a beautiful celebration of union, and a lifelong commitment shared with family and friends. However, from a strictly legal and administrative perspective, the ceremonies, rituals, and celebrations are only the beginning. To permanently secure your civil rights, protect your future family, and seamlessly navigate the modern administrative world, formalizing your union through a government-issued Marriage Certificate is an absolute, non-negotiable necessity.\n\nAt arunonlineservices in Coimbatore, we recognize that dealing with rigid government bureaucracy is the absolute last thing any newlywed couple wants to face. The complex paperwork, stringent documentation requirements, and crowded Sub-Registrar Offices can quickly turn a joyous occasion into a stressful ordeal. Our elite marriage registration services are explicitly designed to absorb that administrative stress entirely. We act as your dedicated legal concierge, pre-verifying every document, drafting the necessary affidavits, and ensuring that your marriage registration is conducted with the utmost dignity, efficiency, and absolute legal precision.",
      features: [],
      process: [],
      sections: [
        {
          title: "The Crucial Importance of Legal Marriage Registration in Tamil Nadu",
          content: "In the State of Tamil Nadu, the legal landscape surrounding marriages underwent a massive shift with the introduction of the Tamil Nadu Registration of Marriages Act, 2009. Under this strict mandate, registering your marriage is no longer an optional formality; it is a compulsory legal requirement regardless of your religion, caste, or the specific customs under which the marriage was originally solemnized.\n\nOperating without a legally validated, government-issued Marriage Certificate creates immediate and severe roadblocks. Consider these common scenarios where an official certificate is mandatory:\n\n• International Travel & Visas: Applying for a dependent visa, a spouse visa, or processing joint immigration applications requires an officially registered certificate.\n\n• Banking & Finance: Opening joint bank accounts, securing a joint home loan, or adding a spouse as a nominee to life insurance policies.\n\n• Identity Documents: Changing a surname on a passport or updating marital status on an Aadhaar card.\n\narunonlineservices guarantees that your legal foundation is established flawlessly from day one, ensuring you never face bureaucratic rejections."
        },
        {
          title: "Our Specialized Marriage Registration and Documentation Services",
          content: "We provide highly tailored documentation and registration assistance across all applicable legal frameworks in India. Our document writers and legal consultants ensure your application is 100% perfect before it ever reaches the registrar's desk.\n\n• Registrations Under the Hindu Marriage Act, 1955: For couples where both partners are Hindu, Buddhist, Jain, or Sikh, and the marriage has already been solemnized according to customary rituals, we facilitate rapid registration. We meticulously compile the required proofs—such as the wedding invitation, the certificate from the priest or temple authorities, and photographic evidence of the Mangalsutra tying. We ensure your files are perfectly aligned for a swift, often same-day registration at your jurisdictional Sub-Registrar Office in Coimbatore.\n\n• The Special Marriage Act, 1954 (Inter-Faith & Civil Unions): When partners belong to different religions, or if a couple chooses to marry strictly without any religious ceremonies, the Special Marriage Act is invoked. This complex process involves a mandatory 30-day public notice period. We handle the delicate drafting of the \"Notice of Intended Marriage,\" file it accurately on your behalf, and track the statutory waiting period. We gracefully guide you and your three witnesses through the final solemnization.\n\n• Post-Facto and Delayed Marriage Registrations: Many couples who married years, or even decades ago, suddenly find themselves in urgent need of a certificate for visa processing or property transfers. Registering a marriage long after the fact requires a rigorous \"Condonation of Delay\" process. arunonlineservices specializes in drafting the highly specific legal affidavits required to clearly explain the delay to the District Registrar."
        },
        {
          title: "The arunonlineservices Signature Experience in Coimbatore",
          content: "Your time and peace of mind are invaluable. Our premium approach means we do not merely fill out forms; we orchestrate the entire legal event so you can focus on your life.\n\nBefore you ever step foot into the Sub-Registrar Office, our team has already cross-checked your age proofs, address documents, and witness credentials to ensure absolute zero discrepancies. We strategically schedule your appointment, prepare the exact denomination of necessary stamp papers, and physically accompany you to the office to facilitate a seamless, highly respectful interaction with the government authorities. With arunonlineservices by your side, you are guaranteed a VIP experience that respects the sanctity of your marriage while locking in your legal security."
        }
      ],
      tableData: {
        headers: ["Legal Framework", "Who It Applies To", "Standard Processing Time"],
        rows: [
          ["Hindu Marriage Act, 1955", "Hindus, Buddhists, Jains, Sikhs", "1 to 3 Days (Post-Ceremony)"],
          ["Special Marriage Act, 1954", "Inter-faith couples, Civil Unions", "30-Day Mandatory Notice Period"],
          ["TN Marriages Act, 2009", "Compulsory registration for all", "Must be filed within 90 days of the wedding"]
        ]
      },
      faqs: [
        {
            question: "Is it legally mandatory to register my marriage in Tamil Nadu?",
            answer: "Yes, it is absolutely mandatory. The Tamil Nadu Registration of Marriages Act, 2009, strictly dictates that all marriages solemnized in the state—regardless of the religion of the parties or the personal laws under which they were married—must be registered with the government. Failing to officially register your marriage within the prescribed 90-day window can result in government fines. More importantly, without this registration, you will be entirely unable to process joint visas, legally update your passport details, or claim essential spouse benefits in banking, real estate, and life insurance."
        },
        {
            question: "What is the fundamental difference between the Hindu Marriage Act and the Special Marriage Act?",
            answer: "The Hindu Marriage Act applies exclusively when both the bride and the groom are Hindus, Buddhists, Jains, or Sikhs, and the marriage has already been performed according to traditional rituals. The registration simply acts as a legal recording of an event that has already taken place. The Special Marriage Act, however, applies to inter-faith couples or those desiring a purely civil, non-religious marriage. It acts as both the solemnization (the actual marrying) and the registration. It critically requires a mandatory 30-day advance public notice before the marriage can be legally finalized by the marriage officer."
        },
        {
            question: "What are the strict mandatory documents required for a standard marriage registration?",
            answer: "While specific requirements can vary slightly depending on the local SRO in Coimbatore, the universally mandatory documents include: original wedding invitation cards, officially recognized proof of age for both parties (Birth Certificate, 10th Marksheet, or Passport), proof of residence (Aadhaar Card, Voter ID, or Passport), passport-sized photographs of the couple, and a minimum of three distinct photographs taken during the actual wedding ceremony showing the core rituals. Additionally, you must strictly bring three witnesses who physically attended the wedding, completely equipped with their own original ID and address proofs."
        },
        {
            question: "Do my spouse and I need to be physically present at the Sub-Registrar Office?",
            answer: "Yes, physical presence is an uncompromising, strict legal mandate. A marriage absolutely cannot be registered via proxy, through a legal power of attorney, or completely online in Tamil Nadu. Both the husband and the wife must be physically present before the Sub-Registrar to formally sign the official marriage registry and have their biometric fingerprints and live photographs captured directly by the government's digital system. Furthermore, your three official witnesses must also be physically present at the exact same time to sign the registry."
        },
        {
            question: "Can Non-Resident Indians (NRIs) register their marriage in Coimbatore?",
            answer: "Yes, NRIs can absolutely register their marriage in Coimbatore, provided the marriage was actually solemnized within the jurisdiction of the local Coimbatore Sub-Registrar, or if at least one of the partners has a valid, permanent residential address within that jurisdiction. However, the documentation for NRIs is scrutinized much more heavily by the authorities. You will typically be required to present your original passport, visa copies, and sometimes a Single Status Certificate or No Objection Certificate (NOC) directly from your respective embassy. arunonlineservices excels in structuring these complex NRI document profiles to prevent frustrating rejections."
        }
      ]
    }
  },
  {
    id: "document-consulting",
    icon: <Briefcase size={28} />,
    title: "Document Consulting",
    description: "Someone asked you to sign a legal document, and you aren't sure what it says? Bring it to us. We offer simple, honest document consulting. We will read through agreements drafted by builders, landlords, or partners, and explain the good and the bad. We make sure nobody takes advantage of you.",
    detail: {
      subtitle: "Expert Document Consulting Services in Coimbatore: Simplifying Your Legal & Government Paperwork",
      overview: "Let’s be completely honest: dealing with legal and administrative paperwork is rarely a pleasant experience. Whether you are finalizing the purchase of your dream home, registering your marriage, setting up a new business enterprise, or managing your ancestral property from abroad, document processing can quickly become an overwhelming and exhausting maze. A single missing signature, a minor formatting error, or an outdated proof of address can result in endless delays, frustrating rejections, and multiple time-consuming trips to government offices.\n\nAt arunonlineservices, we believe that complex legal and administrative procedures shouldn’t disrupt your daily life or cause unnecessary anxiety. Our specialized Document Consulting Services in Coimbatore are designed to take the stress, confusion, and red tape out of your paperwork. We act as your dedicated, knowledgeable guides, ensuring your documents are flawlessly drafted, perfectly organized, and fully compliant with all local Tamil Nadu regulations.",
      features: [],
      process: [],
      sections: [
        {
          title: "Why Do You Need Professional Document Consulting?",
          content: "The rules surrounding legal registries, municipal corporations, and government offices are constantly evolving. What worked perfectly five years ago might lead to an immediate application rejection today. Navigating the Sub-Registrar’s office, understanding complex legal jargon, and knowing exactly which supplementary documents are required demands specialized, up-to-date knowledge.\n\nWhen you partner with arunonlineservices for document consulting, you are investing in absolute peace of mind. We humanize the bureaucratic process. Instead of facing a cold, confusing government portal or waiting in endless queues, you get a dedicated local consultant who sits down with you, understands your unique situation, and creates a clear, actionable roadmap for your documentation needs."
        },
        {
          title: "Our Comprehensive Document Consulting Solutions",
          content: "We handle a vast spectrum of personal, educational, property, and business documentation. Our core consulting areas include:\n\n1. Personal & Family Documentation\nMajor life events come with a mountain of official paperwork. We ensure that your personal records are legally binding and officially recognized without the headache.\n• Marriage Registration Consulting: From advising on the mandatory documents (Birth Certificates, Aadhaar, photos) to ensuring your witnesses have the correct ID proofs, we guide you through the entire Hindu Marriage Act or Special Marriage Act registration process in Coimbatore.\n• Name Change & Gazette Publications: Step-by-step assistance in legally changing your name, drafting the necessary sworn affidavits, and publishing the change in the official Tamil Nadu government gazette.\n• Affidavits & Notary Services: Consulting on the correct legal phrasing for various affidavits, including address proofs, income declarations, and educational gap certificates, ensuring they are properly notarized.\n\n2. Property & Real Estate Paperwork\nReal estate transactions require meticulous attention to detail to prevent future legal disputes. We help you secure your most valuable assets with ironclad documentation.\n• Deed Drafting Advice: Consulting on the comprehensive drafting of Sale Deeds, Settlement Deeds, Gift Deeds, and Lease Agreements to ensure your financial and personal interests are completely protected.\n• Encumbrance Certificates (EC) & Patta Transfers: We guide you through the complex process of extracting online and manual ECs, verifying property titles, and smoothly transferring Patta and Chitta records without the usual bureaucratic runaround.\n\n3. NRI Document Consulting\nManaging legal affairs in Coimbatore while living thousands of miles away is incredibly challenging. We serve as your trusted, boots-on-the-ground local liaison.\n• Power of Attorney (PoA): Comprehensive consulting on drafting, adjudicating, and registering both General and Special Power of Attorney documents so your trusted family members can act legally on your behalf.\n• Single Status Certificates: Helping Non-Resident Indians procure necessary background checks and No Objection Certificates (NOCs) required by foreign embassies for marriages abroad.\n\n4. Business & Commercial Registrations\nStarting a business should be an exciting milestone, not a paperwork nightmare. We help local entrepreneurs hit the ground running.\n• Firm Registrations & Licensing: Expert guidance on drafting Partnership Deeds, securing MSME (Udyam) registrations, and basic commercial compliance.\n• Rental & Vendor Agreements: Consulting on creating fair, legally sound contracts for your office spaces, commercial leases, and business partnerships."
        },
        {
          title: "The arunonlineservices Advantage",
          content: "• Unmatched Local Expertise: We intimately know how the local Sub-Registrar offices, municipal bodies, and legal systems operate in Coimbatore. We anticipate roadblocks before they happen.\n• 100% Error-Free Guarantee: Our strict internal vetting process means your applications and drafts are double-checked for compliance, drastically reducing the chance of rejection.\n• Total Transparency: No hidden fees, no confusing legal jargon, and no false promises. We explain exactly what your documents mean in plain, everyday language.\n\nDon't let paperwork hold you back. Contact arunonlineservices today to schedule a consultation and experience a stress-free approach to document processing."
        }
      ],
      faqs: [
        {
            question: "What exactly does a document consultant do?",
            answer: "A document consultant acts as your personal guide through complex legal, administrative, and government paperwork. At arunonlineservices, we review your specific needs, advise you on the exact list of required documents, help draft legal paperwork (like deeds or affidavits) in the correct format, and guide you through the submission process to ensure your applications are accepted on the first try."
        },
        {
            question: "How long does it usually take to process legal or government documents?",
            answer: "Timelines vary significantly depending on the type of document. A simple affidavit can be drafted and notarized in a single day, while a property Patta transfer or a Gazette publication for a name change may take several weeks. During our initial consultation, we provide you with a realistic, transparent timeline based on the current processing speeds of the respective government departments in Coimbatore."
        },
        {
            question: "I am an NRI living abroad. Can you help me manage my property and legal documents in Coimbatore?",
            answer: "Absolutely. A large part of our document consulting service is dedicated to Non-Resident Indians. We assist with drafting and adjudicating Power of Attorney (PoA) documents, resolving property documentation issues, and securing necessary certificates (like Single Status Certificates or birth certificate corrections) so you don't have to make unnecessary international trips."
        },
        {
            question: "Do I need to be physically present at the government office if I use your consulting services?",
            answer: "This depends entirely on the legal requirement of the specific document. For processes like property registration or marriage registration, your physical presence (along with biometric verification and photos) is a strict legal mandate before the Sub-Registrar. However, for many other services—such as drafting agreements, applying for Encumbrance Certificates (ECs), or securing certain licenses—we can handle the backend documentation and process it on your behalf without you needing to step into an office."
        },
        {
            question: "What happens if my application or document has already been rejected by a government office?",
            answer: "Don't panic; rejections are common, usually due to minor formatting errors or missing annexures. Bring your rejected application and the official rejection note to us. Our consultants will thoroughly analyze the specific reasons for the rejection, rectify the errors, gather any missing proofs, and help you submit a flawless re-application."
        },
        {
            question: "Are my personal details, IDs, and property documents safe with arunonlineservices?",
            answer: "Yes, 100%. We take your privacy and data security incredibly seriously. We adhere to a strict confidentiality policy. Your personal identification, sensitive financial details, and property documents are used strictly for the purpose of your specific application and are never shared with unauthorized third parties."
        }
      ]
    }
  }
];
