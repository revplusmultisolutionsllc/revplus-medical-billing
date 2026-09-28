import type { ServicePage } from "@/content/types";
import { routes } from "@/content/site";

export const freestandingEmergencyRoomsIdr: ServicePage = {
  slug: "freestanding-emergency-rooms-idr",
  path: "/services/freestanding-emergency-rooms-idr",
  name: "Freestanding Emergency Rooms - IDR",
  navSub: "IDR support for emergency claims",
  icon: "ambulance",

  homeBlurb:
    "Support freestanding emergency room payment disputes with organized eligibility review, documentation, deadlines and IDR workflow tracking.",

  hubBlurb:
    "Help freestanding emergency facilities organize eligible payment disputes through a documented IDR workflow with clear ownership, evidence and next actions.",

  meta: {
    title: "Freestanding Emergency Room IDR Support Services",
    description:
      "IDR workflow support for freestanding emergency rooms, including dispute review, documentation organization, deadline tracking and case follow-up.",
  },

  hero: {
    breadcrumb: [
      { label: "Home", href: routes.home },
      { label: "Services", href: routes.services },
    ],
    title: [
      "Freestanding Emergency Rooms",
      "Independent Dispute Resolution Support",
    ],
    lead:
      "Revplus helps freestanding emergency facilities organize eligible payment disputes through a structured IDR workflow—from initial claim and payment review through documentation, deadline tracking and documented resolution.",
  },

  blocks: [
    {
      type: "intro",
      eyebrow: "IDR Workflow Support",
      title: "Keep Every Dispute Organized From Review to Resolution",
      lead:
        "Independent dispute resolution involves multiple steps, supporting records and time-sensitive actions. Revplus helps organize the operational workflow so each in-scope dispute has a clear status, supporting documentation and next action.",
      bullets: [
        "Claim and payer-response review",
        "Initial payment or denial review",
        "IDR eligibility and workflow screening",
        "Open-negotiation workflow support",
        "Supporting documentation organization",
        "Dispute and case information preparation",
        "Deadline and status tracking",
        "Payer and case communication documentation",
        "Case outcome and payment follow-up",
        "Recurring dispute-pattern reporting",
      ],
      aside: {
        kind: "blocks",
        items: [
          {
            title: "Review",
            body:
              "Organize the claim, payer response and available information to determine the appropriate next workflow step.",
          },
          {
            title: "Prepare",
            body:
              "Bring relevant case information and supporting documentation together for the applicable dispute process.",
          },
          {
            title: "Track",
            body:
              "Maintain deadlines, status, communications and next actions through documented resolution.",
          },
        ],
      },
    },

    {
      type: "steps",
      title: "A Clear Path Through the IDR Workflow",
      items: [
        {
          title: "Identify",
          body:
            "Review the claim, payer response, payment information and available case details for potential dispute handling.",
        },
        {
          title: "Validate",
          body:
            "Confirm the applicable workflow, required information and relevant timing requirements before proceeding.",
        },
        {
          title: "Organize",
          body:
            "Gather the supporting claim, clinical, payment and administrative information required for the case.",
        },
        {
          title: "Submit & Track",
          body:
            "Support the applicable submission process and maintain visibility into deadlines, communications and case status.",
        },
        {
          title: "Resolve",
          body:
            "Document the outcome and route remaining payment, follow-up or account actions to the appropriate workflow.",
        },
      ],
    },

    {
      type: "cards",
      title: "Where IDR Workflow Support Helps",
      columns: 3,
      items: [
        {
          icon: "clipboard-check",
          title: "Case Review",
          body:
            "Keep claim, payment and dispute information organized before the case moves forward.",
        },
        {
          icon: "file",
          title: "Documentation",
          body:
            "Coordinate the supporting records and case information needed for the applicable workflow.",
        },
        {
          icon: "timer",
          title: "Deadline Tracking",
          body:
            "Maintain visibility into time-sensitive actions and outstanding next steps.",
        },
        {
          icon: "send",
          title: "Submission Support",
          body:
            "Organize case information for the appropriate negotiation or dispute-resolution process.",
        },
        {
          icon: "message",
          title: "Communication Tracking",
          body:
            "Document payer, case and workflow communications so ownership remains clear.",
        },
        {
          icon: "bar-chart",
          title: "Dispute Trends",
          body:
            "Group recurring payer and dispute patterns for operational review.",
        },
      ],
    },
  ],

  cta: {
    title: "Bring More Structure to Your IDR Workflow",
    lead:
      "Discuss how your freestanding emergency facility currently identifies, prepares and tracks payment disputes.",
    button: {
      label: "Discuss IDR Support",
      href: routes.freeAudit,
    },
  },
};