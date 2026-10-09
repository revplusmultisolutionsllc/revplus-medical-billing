// import type { Metadata } from "next";
// import { PageHero } from "@/components/blocks/page-hero";
// import { Section } from "@/components/ui/section";
// import { routes, site } from "@/content/site";
// import { pageMetadata } from "@/lib/seo";

// export const metadata: Metadata = pageMetadata({
//   title: "Website Terms",
//   description: "Terms for using the Revplus Multisolutions public website and its educational content.",
//   path: routes.terms,
// });

// const sections = [
//   {
//     title: "Informational purpose",
//     body: "This website provides general information about Revplus Multisolutions and medical revenue cycle services. It is not medical, coding, legal, tax or reimbursement advice, and it should not replace guidance based on the facts of a particular organization or claim.",
//   },
//   {
//     title: "No service relationship from website use",
//     body: "Browsing the site, using the planning calculator or sending an inquiry does not create a client relationship. Services, responsibilities, pricing, security arrangements and any performance expectations must be defined in a separate written agreement.",
//   },
//   {
//     title: "Planning calculator",
//     body: "Calculator results use only the assumptions entered by the visitor. They are illustrative scenarios, not forecasts, reimbursement advice or guarantees of collections, savings or financial results.",
//   },
//   {
//     title: "Payers, specialties and third parties",
//     body: "References to payer environments and healthcare specialties are descriptive. They do not represent endorsements, formal payer partnerships, universal coverage of every workflow or a promise that a particular claim will be paid.",
//   },
//   {
//     title: "Site availability and updates",
//     body: "Revplus may revise this public information as its services and website change. The site may occasionally be unavailable for maintenance or hosting-related reasons. Contact Revplus directly before relying on the site for a time-sensitive decision.",
//   },
// ];

// export default function TermsPage() {
//   return (
//     <>
//       <PageHero
//         breadcrumb={[{ label: "Home", href: routes.home }]}
//         title={["Website Terms"]}
//         lead="Terms for the use of this public website, its educational material and planning tools."
//       />
//       <Section size="narrow">
//         <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-700">Last updated September 19, 2026</p>
//         <div className="mt-8 grid gap-10">
//           {sections.map((section) => (
//             <section key={section.title} aria-labelledby={section.title.replaceAll(" ", "-").toLowerCase()}>
//               <h2 id={section.title.replaceAll(" ", "-").toLowerCase()} className="font-display text-2xl text-navy-900 sm:text-3xl">
//                 {section.title}
//               </h2>
//               <p className="mt-4 text-[1rem] leading-relaxed text-slate-600">{section.body}</p>
//             </section>
//           ))}
//         </div>
//         <p className="mt-12 rounded-xl border border-line bg-surface p-5 text-[0.95rem] leading-relaxed text-slate-600">
//           Questions about these website terms may be directed to Revplus at{" "}
//           <a className="font-semibold text-brand-700 underline-offset-4 hover:underline" href={site.phone.href}>{site.phone.display}</a>{" "}
//           or by mail at {site.address.display}.
//         </p>
//       </Section>
//     </>
//   );
// }






import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/blocks/page-hero";
import { Section } from "@/components/ui/section";
import { routes } from "@/content/site";

export const metadata: Metadata = {
  title: "Terms of Service | Revplus Medical Solutions",
  description:
    "Terms of Service and Mobile Messaging Terms for Revplus Multisolutions.",
};

const headingClass =
  "font-display text-2xl text-navy-900 sm:text-3xl";

const contentClass =
  "mt-4 grid gap-4 text-[1rem] leading-relaxed text-slate-600";

const listClass =
  "mt-4 list-disc space-y-3 pl-6 text-[1rem] leading-relaxed text-slate-600";

const linkClass =
  "font-medium text-brand-700 underline-offset-4 hover:underline";

const sections = [
  {
    title: "1. Agreement to Terms",
    paragraphs: [
      `By accessing or using the services provided by Revplus Multisolutions Tel. ("we," "us," or "our"), including enrolling in our mobile messaging program, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services or subscribe to our text messaging communications.`,
    ],
  },
  {
    title: "2. Program Description & SMS Communications",
    paragraphs: [
      "Revplus Multisolutions Tel. provides text messaging services to communicate with customers regarding:",
    ],
    bullets: [
      "Service inquiries, updates, and account notifications",
      "Appointment reminders and scheduling",
      "Customer support responses",
      "Promotional messages and special announcements (where explicitly consented)",
    ],
  },
  {
    title: "3. User Opt-In & Consent",
    paragraphs: [
      "By providing your mobile phone number to Revplus Multisolutions Tel. through an online web form, paper form, text message, or verbal request, you explicitly consent to receive automated or manual SMS communications from us.",
    ],
    bullets: [
      "Voluntary Participation: Joining our SMS program is completely voluntary and is not required as a condition of purchasing any goods or services.",
      "Accuracy: You certify that the phone number provided is your own and that you are authorized to enroll in the program.",
    ],
  },
  {
    title: "4. Message Frequency, Rates, & Charges",
    paragraphs: [],
    bullets: [
      "Message & Data Rates: Standard message and data rates may apply to any text messages sent or received, depending on your cell phone plan and carrier rates.",
      "Frequency: Message frequency varies based on your ongoing interactions with us and the nature of your service request.",
    ],
  },
  {
    title: "5. How to Opt-Out (STOP)",
    paragraphs: [
      "You can cancel or opt out of the Revplus Multisolutions Tel. text messaging service at any time.",
    ],
    bullets: [
      "Text STOP, END, CANCEL, UNSUBSCRIBE, or QUIT to (832) 365-3762.",
      "After sending STOP, you will receive one final confirmation text confirming that you have been unsubscribed. No further messages will be sent unless you re-subscribe.",
    ],
  },
  {
    title: "6. Customer Support & Assistance (HELP)",
    paragraphs: [
      "For help or questions regarding our text messaging program:",
    ],
    bullets: [
      "Text HELP or INFO to (832) 365-3762.",
      "Email customer support at revplus.multisolutions@gmail.com.",
      "Call us directly at (832) 365-3762.",
    ],
  },
  {
    title: "7. Carrier Liability Limitation",
    paragraphs: [
      "Carriers (e.g., AT&T, T-Mobile, Verizon) and Revplus Multisolutions Tel. are not liable for delayed, misdirected, or undelivered messages. Delivery is subject to effective transmission from your mobile network operator.",
    ],
  },
  {
    title: "8. Privacy & Data Protection",
    paragraphs: [
      "Your privacy is important to us. All personal data collected through our text messaging program is governed by our Privacy Policy.",
    ],
    notice:
      "Mobile Information Sharing: No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Text messaging originator opt-in data and consent will not be shared with any third parties.",
  },
  {
    title: "9. Modifications & Termination",
    paragraphs: [
      "We reserve the right to modify or terminate these Terms of Service or our mobile messaging program at any time without prior notice. Updated terms will take effect immediately upon posting to our website.",
    ],
  },
  {
    title: "10. Contact Information",
    paragraphs: [
      "If you have any questions or concerns regarding these Terms of Service, please contact us:",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      {/* Hero - Existing Website Design */}
      <PageHero
        breadcrumb={[
          {
            label: "Home",
            href: routes.home,
          },
        ]}
        title={["Terms of Service"]}
        lead="Terms for the use of our services and mobile messaging communications."
      />

      {/* Main Content - Existing Website Layout */}
      <Section size="narrow">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-700">
          Effective Date: October 7, 2026
        </p>

        <div className="mt-8 grid gap-10">
          {sections.map((section, index) => {
            const sectionId = `terms-section-${index + 1}`;

            return (
              <section
                key={section.title}
                aria-labelledby={sectionId}
              >
                <h2
                  id={sectionId}
                  className={headingClass}
                >
                  {section.title}
                </h2>

                <div className={contentClass}>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>
                      {index === 7 ? (
                        <>
                          Your privacy is important to us.
                          All personal data collected through
                          our text messaging program is
                          governed by our{" "}
                          <Link
                            href="/privacy"
                            className={linkClass}
                          >
                            Privacy Policy
                          </Link>
                          .
                        </>
                      ) : (
                        paragraph
                      )}
                    </p>
                  ))}
                </div>

                {/* Lists */}
                {section.bullets && (
                  <ul className={listClass}>
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}

                {/* Mobile Information Sharing Notice */}
                {section.notice && (
                  <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
                    <p className="text-[1rem] leading-relaxed text-slate-600">
                      <strong className="text-navy-900">
                        Mobile Information Sharing:
                      </strong>{" "}
                      {section.notice.replace(
                        "Mobile Information Sharing: ",
                        ""
                      )}
                    </p>
                  </div>
                )}

                {/* Contact Information */}
                {index === 9 && (
                  <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
                    <h3 className="font-display text-xl text-navy-900">
                      Revplus Multisolutions Tel.
                    </h3>

                    <div className="mt-4 grid gap-3 text-[1rem] leading-relaxed text-slate-600">
                      <p>
                        <strong className="text-navy-900">
                          Phone:{" "}
                        </strong>
                        <a
                          href="tel:+18323653762"
                          className={linkClass}
                        >
                          (832) 365-3762
                        </a>
                      </p>

                      <p>
                        <strong className="text-navy-900">
                          Email:{" "}
                        </strong>
                        <a
                          href="mailto:revplus.multisolutions@gmail.com"
                          className={`${linkClass} break-all`}
                        >
                          revplus.multisolutions@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                )}
              </section>
            );
          })}
        </div>
      </Section>
    </>
  );
}

