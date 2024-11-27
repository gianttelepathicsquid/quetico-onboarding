import { Section } from '@/lib/types';

export const sections: Section[] = [
  {
    title: "1. CUSTOMER INFORMATION AND SETUP",
    items: [
      {
        title: "Gather Customer Information:",
        items: [
          "Customer Name",
          "Key Contacts",
          "Preferred Communication Channels",
          "Account Numbers"
        ]
      },
      {
        title: "Verify Contract and Terms",
        items: [
          "Review the customer's contract",
          "Review customer service agreement",
          "Understand services provided by Quetico",
          "Understand Timelines and Expectation"
        ]
      },
      {
        title: "Create Customer Profile:",
        items: [
          "Set up the new customer in the customer relationship management (CRM) system",
          "Communications Preferences",
          "Order History Tracking"
        ]
      }
    ]
  },
  {
    title: "2. SERVICE EXPECTATIONS AND COMMUNICATION",
    items: [
      {
        title: "Confirm Service Expectations:",
        items: [
          {
            title: "Review the scope of services to be used by customer",
            items: [
              "Distribution",
              "Fulfillment",
              "FTZ",
              "Pick & Pack",
              "Pallet Display Program",
              "Box In and Out"
            ]
          }
        ]
      },
      {
        title: "Point of Contact Assignment:",
        items: [
          "Assign a dedicated account manager or customer service representative who will act as the main point of contact for all inquiries and escalations."
        ]
      },
      {
        title: "Welcome Email/Call:",
        items: [
          "Send a welcome email or make an introductory phone call to greet the customer and confirm the onboarding timeline."
        ]
      }
    ]
  },
  {
    title: "3. ORDER MANAGEMENT AND FULFILLMENT",
    items: [
      {
        title: "Review Ordering Process:",
        items: [
          "Ensure that the customer service team is familiar with processes of receiving orders",
          "Ensure the customer is clear on how to place orders",
          {
            title: "Order placement methods:",
            items: [
              "Through a portal",
              "Email",
              "EDI"
            ]
          }
        ]
      },
      {
        title: "Order Fulfillment Timing:",
        items: [
          {
            title: "Set clear expectations for order fulfillment estimates",
            items: [
              "Times",
              "Processing",
              "Shipping",
              "Deliveries"
            ]
          }
        ]
      },
      {
        title: "Set Up Returns and Replacements Process:",
        items: [
          "Clarify the procedure for returns",
          "Clarify procedures for exchanges",
          "Order Issues",
          "Ensure CSR teams manageability of processes"
        ]
      }
    ]
  },
  {
    title: "4. PRODUCT AND SERVICE TRAINING",
    items: [
      {
        title: "Customer Product Familiarization:",
        items: [
          "Ensure the customer service teams knows the product",
          "Check specific handling instructions"
        ]
      },
      {
        title: "Internal Team Training:",
        items: [
          {
            title: "Provide training for internal customer service reps",
            items: [
              "Customer specific needs",
              "Customer specific preferences"
            ]
          }
        ]
      },
      {
        title: "Customer Training:",
        items: [
          {
            title: "Provide Quetico systems training to customer",
            items: [
              "How to use our system",
              "On order management",
              "Tracking",
              "Support"
            ]
          }
        ]
      }
    ]
  },
  {
    title: "5. DOCUMENTATION AND RESOURCES",
    items: [
      {
        title: "Create a Customer Welcome Packet:",
        items: [
          {
            title: "Prepare a digital or physical packet",
            items: [
              "Onboarding information",
              "Contact Points",
              "Service expectations",
              "Support resources"
            ]
          }
        ]
      },
      {
        title: "Service Level Agreement (SLA):",
        items: [
          {
            title: "Review and document agreed-upon SLAs",
            items: [
              "include response time for inquiries",
              "Delivery performance",
              "Issue resolutions"
            ]
          }
        ]
      },
      {
        title: "FAQ and Knowledge Base Setup:",
        items: [
          "Direct the customer to an FAQ page or knowledge base to help them troubleshoot basic issues or find common answers independently."
        ]
      }
    ]
  },
  {
    title: "6. REPORTING AND FEEDBACK MECHANISMS",
    items: [
      {
        title: "Set Up Reporting Tools",
        items: [
          {
            title: "Ensure customer is aware of report visibility through",
            items: [
              "Dashboards",
              "Scheduled email updates"
            ]
          },
          {
            title: "Report type availability for",
            items: [
              "Inventory Levels",
              "Order status",
              "performance metrics"
            ]
          }
        ]
      },
      {
        title: "Customer Feedback",
        items: [
          {
            title: "Create process to gather customer feedback during onboarding",
            items: [
              "Identify customer concerns",
              "Identify improvements"
            ]
          }
        ]
      },
      {
        title: "Service Review Meetings",
        items: [
          {
            title: "Schedule regular review meetings with customer",
            items: [
              "Monthly/Quarterly",
              "Assess performance",
              "Gather Feedback"
            ]
          }
        ]
      }
    ]
  },
  {
    title: "7. ISSUE RESOLUTION AND ESCALATION",
    items: [
      "Train CSR's on the process of escalating issues",
      "Create Escalation Contact List",
      "Create Escalation Situations",
      {
        title: "Define Escalation Paths",
        items: [
          "Internal escalation",
          "External escalation"
        ]
      },
      {
        title: "Set Response Time Goals:",
        items: [
          {
            title: "Establish internal goals to meet customer expectations",
            items: [
              "responding to Customers",
              "resolving issues"
            ]
          }
        ]
      },
      {
        title: "Track Support Requests:",
        items: [
          {
            title: "Ticketing System setup",
            items: [
              "Track all customer support requests",
              "Track all resolutions insuring timely follow-up"
            ]
          }
        ]
      }
    ]
  },
  {
    title: "8. FINAL REVIEW AND GO-LIVE",
    items: [
      {
        title: "Test Run:",
        items: [
          "Conduct test run of customer orders",
          "Request to ensure all processes are working as expected"
        ]
      },
      {
        title: "Go-Live Confirmation:",
        items: [
          "Communicate the official go-live date for full service and ensure everything is in place for a smooth start."
        ]
      },
      {
        title: "Follow-Up Check-In:",
        items: [
          "Schedule a check-in with the customer after a few weeks of service to ensure satisfaction and address any concerns."
        ]
      }
    ]
  }
];
