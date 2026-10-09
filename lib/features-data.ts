export type FeaturePage = {
  slug: string;
  navLabel: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroSubhead: string;
  painIntro: string;
  painPoints: string[];
  capabilitiesIntro: string;
  capabilities: { title: string; desc: string }[];
  builtForTitle: string;
  builtForParagraphs: string[];
  comparisonIntro: string;
  comparisonRows: { capability: string; meagle: string; keka: string; greythr: string }[];
  faqs: { q: string; a: string }[];
  relatedBlogSlugs: string[];
  relatedFeatureSlug: string;
  relatedFeatureLabel: string;
  // Optional dedicated dashboard image for this feature, shown in the section
  // right under the hero. Falls back to the generic /hrms-image.png when
  // omitted. When set, expected to be a 1672x941 (16:9) webp, matching this
  // site's established feature/blog cover convention — update the width/height
  // on the <Image> in app/features/[slug]/page.tsx if a future image differs.
  heroImage?: string;
  // Optional second button in the hero, next to "Book a 15-min demo" —
  // used where a page has a specific, higher-intent page to send traffic
  // to instead of (or alongside) the demo CTA. Omitted on pages that don't need it.
  heroSecondaryCta?: { label: string; href: string };
  // Optional dedicated section rendered right after "Built for..." — used
  // where a page needs to target a specific audience (e.g. small business)
  // without disturbing the shared copy above it. Omitted on pages that
  // don't need it.
  extraSection?: {
    title: string;
    intro: string;
    bullets: string[];
    closingText?: string;
    closingLinkLabel?: string;
    closingLinkHref?: string;
  };
};

export const FEATURE_PAGES: FeaturePage[] = [
  {
    slug: "attendance-management-software",
    heroImage: "/attendance-management-workspace.webp",
    navLabel: "Attendance Management",
    metaTitle: "Attendance Management System with Payroll Integration",
    metaDescription:
      "A complete attendance management system with geo-location tracking, automated reports, and direct payroll integration. Flat ₹149/user/month, no setup fee.",
    h1: "Attendance Management System",
    heroSubhead:
      "Track attendance accurately across office, field and remote teams, with mobile check-ins that flow straight into payroll no registers, no spreadsheets, no manual reconciliation before every cycle.",
    painIntro:
      "Manual attendance tracking rarely looks expensive on paper. It hides its cost in wasted hours, quiet payroll errors, and the disputes that show up weeks after the fact long after anyone remembers what actually happened on a given day.",
    painPoints: [
      "HR teams running attendance through registers, spreadsheets or disconnected biometric exports routinely spend several hours every week just reconciling the numbers before payroll can run time that could go toward hiring, onboarding, or anything that isn't data entry.",
      "Every manually entered attendance record is a place for a mismatch to creep in a missed punch, a wrong date, a transposed employee ID and each one becomes a payroll correction later, often after the payslip has already gone out.",
      "When attendance data arrives after the payroll cut-off, the result is a manual override, a delayed correction, or an employee chasing HR about a short payslip and someone in HR has to stop what they're doing to fix it.",
      "Proving where a field employee actually was on a given day for a client dispute, a compliance question, or simple accountability is nearly impossible without a timestamped, location-tagged record to point to.",
    ],
    capabilitiesIntro:
      "Meagle 360 is attendance management software that replaces registers and disconnected exports with one system your team actually checks in through, and that payroll trusts automatically no export, no re-entry, no separate reconciliation step at month-end.",
    capabilities: [
      {
        title: "Geo-tagged mobile check-in",
        desc: "Employees check in and out from their phone, with the location captured at the moment of punch. Field staff, sales teams and multi-location businesses get a real record of where and when someone clocked in, without asking anyone to carry a separate device or fill in a manual log. Managers can see who's checked in and from where, in real time, instead of finding out at the end of the day.",
      },
      {
        title: "Biometric and device integration",
        desc: "Already run biometric devices at your office or factory gate? Meagle 360 is built to bring that attendance data into the same system as mobile and web check-ins, so you don't have to run two separate attendance processes for office and field staff. One record, one source of truth, regardless of how someone actually punched in.",
      },
      {
        title: "Regularisation and approval workflows",
        desc: "Forgotten punches and genuine exceptions happen. Employees raise a regularisation request with a reason, their manager approves or rejects it from the same dashboard, and the record updates automatically no email threads, no spreadsheet edits after the fact, and no ambiguity about who approved what and when.",
      },
      {
        title: "Attendance-to-payroll sync",
        desc: "This is what properly integrated attendance and payroll software looks like in practice: once attendance is finalised for a cycle, it flows directly into payroll present days, leave, late marks and overtime are all reflected without anyone re-entering the numbers or exporting a CSV between two different tools. Payroll runs from the same data attendance actually recorded, not a manually rebuilt summary of it.",
      },
      {
        title: "Late marks, overtime and shift rules",
        desc: "Late-arrival grace periods, overtime thresholds and shift-based rules are applied automatically as attendance is recorded, based on the policy you configure rather than someone manually checking each employee's timing against the rulebook at the end of the month.",
      },
      {
        title: "Attendance reports without a rebuild",
        desc: "As time and attendance software, present-day counts, late-arrival trends and overtime totals are available as reports pulled from live attendance data, so answering a question about a specific team's attendance pattern doesn't mean exporting and rebuilding a summary by hand.",
      },
      {
        title: "One policy, applied consistently everywhere",
        desc: "Grace periods, shift rules and regularisation policies are configured once and applied the same way across every location, so attendance rules don't quietly drift between an office, a factory and a field team.",
      },
    ],
    builtForTitle: "Built for field teams, factories and offices",
    builtForParagraphs: [
      "Not every team clocks in from the same desk every day. Meagle 360's employee attendance software is built to handle a factory floor with shift-based biometric check-ins, a field sales team checking in by phone from a client site, and an office team logging in from their laptop all inside one system, with one attendance record per employee.",
      "That matters most at exactly the moment it's hardest to manage manually: when your team grows past the point where one person can eyeball the register every morning, and attendance data has to be right the first time because payroll, leave balances and compliance reporting all depend on it.",
      "It also matters for the questions that come up after the fact a client asking whether your field engineer actually visited their site on a given date, or a compliance audit asking for proof of attendance for a specific team over a specific period. A geo-tagged, timestamped record answers that in seconds instead of a manual search through old logs.",
      "And it matters for HR itself, which no longer has to be the single point of contact for every attendance question. Managers can see their own team's attendance directly, and employees can check their own record, instead of everything routing through one person who has to look it up manually.",
    ],
    comparisonIntro:
      "Here's how attendance management on Meagle 360 compares on the things that actually affect a growing team's day-to-day operations pricing, what's included by default, and whether attendance data actually talks to payroll without manual work.",
    comparisonRows: [
      { capability: "Starting price", meagle: "₹149/user/month, flat", keka: "₹9,999/mo base (≈₹100/user/mo at 100 seats)", greythr: "₹2,495/mo base (≈₹50/user/mo at 50 seats)" },
      { capability: "Geo-tagged mobile check-in", meagle: "Included", keka: "Included (GPS + geofencing)", greythr: "Included (Geo Mark + geofencing)" },
      { capability: "Biometric device integration", meagle: "Included", keka: "Included (200+ device types)", greythr: "Included (biometric + face recognition)" },
      { capability: "Attendance-to-payroll sync", meagle: "Automatic, same platform", keka: "Included, same platform", greythr: "Included, same platform" },
      { capability: "Implementation fee", meagle: "₹0", keka: "≈₹20,000 (2× monthly fee)", greythr: "₹0 (none published)" },
      { capability: "Minimum seats", meagle: "None", keka: "Base fee bundles up to 100 employees", greythr: "Base fee bundles up to 50 employees" },
    ],
    faqs: [
      {
        q: "Does attendance sync automatically into payroll?",
        a: "Yes. Once an attendance cycle is finalised, present days, leave, late marks and overtime carry directly into payroll there's no separate export or manual re-entry step.",
      },
      {
        q: "Can field and remote employees check in without a biometric device?",
        a: "Yes. Employees can check in from the Meagle 360 mobile app, with the location captured at the time of punch no dedicated hardware required.",
      },
      {
        q: "What happens if an employee forgets to check in?",
        a: "They (or their manager) can raise a regularisation request with a reason. Once their manager approves it, the attendance record updates automatically.",
      },
      {
        q: "Can we still use our existing biometric devices?",
        a: "Yes. Biometric attendance data can be brought into the same system as mobile and web check-ins, so office and field attendance live in one place instead of two separate processes.",
      },
      {
        q: "Are overtime and late-arrival rules configurable?",
        a: "Yes. You set the grace periods, overtime thresholds and shift rules that match your policy, and they're applied automatically as attendance is recorded.",
      },
      {
        q: "Is attendance management included in the base price, or is it an add-on?",
        a: "It's included. Meagle 360 is a flat ₹149 per user per month for every module, including attendance there are no per-module add-on fees.",
      },
      {
        q: "How long does it take to set up attendance tracking for my team?",
        a: "Most teams are fully onboarded, including attendance setup, within 3 to 5 business days as part of our standard onboarding.",
      },
      {
        q: "Can I see attendance reports for a specific team or date range?",
        a: "Yes, attendance reports can be filtered by team, location or date range, pulled directly from live records rather than a rebuilt export.",
      },
      {
        q: "Is there a free trial before we commit to a paid plan?",
        a: "Yes, you can start a 14-day free trial with full access to attendance and every other module, with no credit card required.",
      },
      {
        q: "Does attendance policy have to be identical across every location?",
        a: "No, grace periods and rules can be configured per location or team, while still being applied consistently within each one rather than left to individual judgment.",
      },
      {
        q: "Can HR see attendance for the whole company, not just one team?",
        a: "Yes, HR has visibility across the full company, while managers typically see their own team, based on the access level configured for their role.",
      },
      {
        q: "What is an attendance management system?",
        a: "An attendance management system is software that records employee check-ins, check-outs, and absences automatically, then uses that data for reporting and payroll, replacing manual registers or standalone spreadsheets.",
      },
      {
        q: "What's the difference between an online attendance system and a traditional one?",
        a: "An online attendance management system captures attendance digitally, through mobile check-ins, geo-location, or biometric devices, and syncs it in real time, instead of relying on paper registers or offline machines that need manual data entry later.",
      },
      {
        q: "Can attendance management software work with payroll automatically?",
        a: "Yes, attendance and payroll software that's properly integrated applies attendance data, including late marks, absences, and overtime, directly into payroll calculations without manual re-entry, reducing both effort and the chance of mismatched records.",
      },
      {
        q: "What should I look for in an employee attendance management system?",
        a: "Real-time syncing, geo-location or biometric verification, direct payroll integration, and self-service access so employees can view their own attendance history without asking HR, are the features that matter most for day-to-day use.",
      },
      {
        q: "Is a cloud based attendance system better than an on-premise one?",
        a: "Generally yes, for most small and mid-sized teams, a cloud based attendance system needs no local server or hardware maintenance, updates automatically, and works for remote or multi-location teams, where an on-premise system would require separate setups per location.",
      },
      {
        q: "Does HR attendance software replace the need for biometric devices?",
        a: "Not necessarily, many HR attendance software platforms integrate with existing biometric devices rather than replacing them, combining device-level verification with cloud-based reporting and payroll integration.",
      },
    ],
    relatedBlogSlugs: [
      "ai-transforming-attendance-tracking",
      "best-all-in-one-hrms-software-for-growing-businesses-in-2026",
      "hrms-vs-excel",
    ],
    relatedFeatureSlug: "payroll-software",
    relatedFeatureLabel: "Payroll Software",
  },
  {
    slug: "payroll-software",
    navLabel: "Payroll",
    metaTitle: "Payroll Software for Small Business in India",
    metaDescription:
      "Payroll software for small business with automatic PF, ESI and TDS compliance. Flat ₹149/user/month, no setup fee. 14-day free trial, book a demo.",
    h1: "Payroll Software for Small Business That Runs Itself From Your Attendance Data",
    heroSubhead:
      "Payroll software built for small businesses that have outgrown spreadsheets but don't want enterprise pricing or a multi-week implementation. Runs on top of your actual attendance and leave records, with statutory deductions calculated automatically.",
    painIntro:
      "Payroll is usually the one process nobody wants to touch manually and, at most growing companies, the one still run partly by hand, stitched together from attendance, leave and reimbursement data that all live in different places.",
    painPoints: [
      "Rebuilding a payroll spreadsheet every cycle from separate attendance, leave and reimbursement sources takes real hours from whoever owns it, every single month, without exception and that time only grows as headcount does.",
      "Manually calculating PF, ESI, professional tax and TDS for every employee is exactly the kind of repetitive, rule-heavy work where a single formula error can quietly affect an entire cycle, and nobody notices until an employee or an auditor flags it.",
      "A payroll correction after payslips have gone out means reissuing a payslip, adjusting the next cycle, and explaining the discrepancy to the employee who noticed it first a conversation that erodes trust every time it happens.",
      "Whoever owns payroll manually is usually a single point of failure if they're out sick or leave the company, running payroll correctly that month becomes a genuine risk instead of a routine task.",
    ],
    capabilitiesIntro:
      "Meagle 360's payroll module starts from the attendance and leave data already inside the system, so payroll isn't a separate spreadsheet exercise rebuilt from scratch every month it's a run against data that's already accurate.",
    capabilities: [
      {
        title: "Automatic attendance and leave sync",
        desc: "Present days, approved leave, late marks and overtime flow directly from the attendance module into that cycle's payroll run, so payroll reflects what actually happened instead of a manually maintained copy of it that can drift out of sync.",
      },
      {
        title: "Statutory compliance built in",
        desc: "PF, ESI, professional tax and TDS deductions are calculated as part of the payroll run and kept up to date with current statutory rules, so compliance isn't a separate manual calculation layered on top of an already time-consuming process.",
      },
      {
        title: "Payslip generation and distribution",
        desc: "Once a payroll cycle is approved, payslips are generated automatically and made available to each employee through their own self-service login no manually created PDFs, no mass email, no one chasing HR for a copy weeks later.",
      },
      {
        title: "Reimbursements and one-off adjustments",
        desc: "Approved expense reimbursements and one-time adjustments a bonus, a deduction, a correction can be included directly in that cycle's payroll run instead of being tracked and applied separately through a different process entirely.",
      },
      {
        title: "Payroll reports and cost visibility",
        desc: "Every payroll run generates a clear record of what was paid, to whom, and why broken down by department or location if needed so finance doesn't have to reconstruct payroll cost separately for budgeting or reporting.",
      },
      {
        title: "Multi-cycle and correction handling",
        desc: "If a correction is needed after a cycle has closed, it can be applied to the next run with a clear record of why, instead of quietly editing a spreadsheet cell and hoping the change is remembered next time anyone asks.",
      },
      {
        title: "Consistent rules across every payroll cycle",
        desc: "Statutory rates and deduction rules are applied the same way every cycle, so payroll doesn't depend on someone remembering to update a rate manually before it changes.",
      },
    ],
    builtForTitle: "Built for teams that outgrew a payroll spreadsheet",
    builtForParagraphs: [
      "A payroll spreadsheet works fine for five people. It starts breaking down somewhere between 15 and 30, right around the point where attendance, leave, reimbursements and statutory rules all have to line up correctly, every month, without a formula quietly going stale.",
      "Meagle 360's payroll module is built for exactly that transition a team that has outgrown manual payroll but doesn't want to pay enterprise-HRMS pricing or commit to a multi-week implementation just to get statutory compliance handled correctly.",
      "It's also built for the parts of payroll that are easy to get wrong precisely because they're rare a mid-cycle salary revision, an employee who joined or exited partway through the month, a one-off bonus. Those cases are handled inside the same system instead of requiring a manual workaround in a spreadsheet formula that only one person fully understands.",
      "And it removes the single-point-of-failure risk that comes with payroll living in one person's head and one person's spreadsheet the process itself is documented and repeatable inside Meagle 360, not dependent on whoever happens to own it this month.",
    ],
    comparisonIntro:
      "A module-level look at how payroll on Meagle 360 compares to two of the more established Indian HRMS platforms on price, on what's actually included, and on whether payroll talks to attendance without manual work.",
    comparisonRows: [
      { capability: "Starting price", meagle: "₹149/user/month, flat", keka: "₹9,999/mo base (≈₹100/user/mo at 100 seats)", greythr: "₹2,495/mo base (≈₹50/user/mo at 50 seats)" },
      { capability: "PF / ESI / TDS compliance", meagle: "Included", keka: "Included (PF, ESI, PT, TDS, LWF)", greythr: "Included (PF, ESI, PT, TDS, LWF)" },
      { capability: "Attendance-linked payroll", meagle: "Automatic, same platform", keka: "Included, same platform", greythr: "Included, same platform" },
      { capability: "Implementation fee", meagle: "₹0", keka: "≈₹20,000 (2× monthly fee)", greythr: "₹0 (none published)" },
      { capability: "Payroll cost reporting", meagle: "Included", keka: "Included (Org/Analytics dashboard)", greythr: "Included (Advanced Analytics Hub)" },
      { capability: "Minimum seats", meagle: "None", keka: "Base fee bundles up to 100 employees", greythr: "Base fee bundles up to 50 employees" },
    ],
    faqs: [
      {
        q: "Does Meagle 360 calculate PF, ESI and TDS automatically?",
        a: "Yes. Statutory deductions are calculated as part of the payroll run and kept up to date with current regulations, so you're not maintaining those formulas yourself.",
      },
      {
        q: "Does payroll pull attendance and leave data automatically?",
        a: "Yes. Present days, approved leave and overtime from the attendance module carry directly into that cycle's payroll run.",
      },
      {
        q: "Can I include a one-off bonus or deduction in a payroll cycle?",
        a: "Yes, one-time adjustments and approved reimbursements can be added directly to a specific payroll cycle before it's finalised.",
      },
      {
        q: "How are payslips delivered to employees?",
        a: "Once a payroll cycle is approved, payslips are generated automatically and made available to each employee through their self-service login.",
      },
      {
        q: "How does payroll handle an employee who joined or exited mid-month?",
        a: "Pro-rated pay for partial months is calculated automatically based on the employee's actual attendance record for that cycle, rather than requiring a manual adjustment.",
      },
      {
        q: "Can I see payroll cost broken down by department?",
        a: "Yes, payroll reports can be viewed by department or location so finance has visibility without reconstructing the numbers separately.",
      },
      {
        q: "Is there a setup fee for payroll specifically?",
        a: "No. Meagle 360 has no implementation fee for any module, including payroll it's included in the flat ₹149 per user per month price.",
      },
      {
        q: "Can we run payroll for multiple locations with different statutory rules?",
        a: "Yes, payroll can be configured per location so location-specific statutory rules are applied correctly for each employee.",
      },
      {
        q: "Is there a free trial before we commit to a paid plan?",
        a: "Yes, you can start a 14-day free trial with full access to payroll and every other module, with no credit card required.",
      },
      {
        q: "Can payroll data be exported for our accountant or auditor?",
        a: "Yes, payroll records and reports can be exported when your accountant or an auditor needs a copy outside the platform.",
      },
      {
        q: "Can payroll handle employees with different salary structures?",
        a: "Yes, each employee's salary structure is configured individually, so a mix of fixed pay, variable components and allowances is handled correctly per person rather than assuming one structure fits everyone.",
      },
      {
        q: "Is Meagle 360's payroll software suitable for a small business with under 20 employees?",
        a: "Yes, there's no minimum seat count, so a small team pays the same flat ₹149/user/month rate as a larger company, without a bundled base fee sized for bigger organizations.",
      },
      {
        q: "Do I need a dedicated HR or payroll person to use this?",
        a: "No, statutory deductions (PF, ESI, TDS) are calculated automatically as part of the payroll run, so a business without a dedicated payroll specialist can still stay compliant.",
      },
      {
        q: "How is this different from payroll software built for large companies?",
        a: "Large-company payroll tools often come with a base fee bundling far more employees than a small business has, plus modules a small team doesn't need yet. Meagle 360's flat per-user pricing with no minimum seats is built specifically for teams that don't fit that mold.",
      },
    ],
    relatedBlogSlugs: [
      "streamline-payroll-process-2026",
      "best-all-in-one-hrms-software-for-growing-businesses-in-2026",
      "payroll-software-pricing-in-india",
      "hrms-vs-excel",
    ],
    relatedFeatureSlug: "attendance-management-software",
    relatedFeatureLabel: "Attendance Management Software",
    extraSection: {
      title: "Why Small Businesses Choose Meagle 360 for Payroll",
      intro:
        "Most payroll software is priced and built for companies with a dedicated HR or finance team. Small businesses usually don't have one they have someone wearing five hats, payroll being just one of them.",
      bullets: [
        "No minimum seat count, so a 10-person team pays the same flat rate as a 100-person team, no bundled base fee designed for a bigger company than yours",
        "No dedicated payroll admin required, statutory compliance runs automatically instead of needing someone who understands PF/ESI/TDS rules in depth",
        "Setup in 3-5 business days, not a multi-week enterprise onboarding project",
        "Flat ₹149/user/month with everything included, so a small business isn't paying for modules (recruitment suites, advanced analytics) it doesn't need yet",
      ],
      closingText: "Building a team from scratch instead? See how Meagle 360 works for",
      closingLinkLabel: "startups",
      closingLinkHref: "/solutions/hrms-for-startups",
    },
  },
  {
    slug: "leave-management-software",
    heroImage: "/leave-management-workspace.webp",
    navLabel: "Leave Management",
    metaTitle: "Leave Management System with Automated Approvals",
    metaDescription:
      "A complete leave management system with automated approvals, real-time balances, and direct payroll sync. Flat ₹149/user/month, no setup fee.",
    h1: "Leave Management System",
    heroSubhead:
      "Leave management software where employees apply, managers approve, and balances update automatically it doesn't live in someone's inbox, a shared spreadsheet, or a WhatsApp message to a manager who's out of office.",
    painIntro:
      "Leave looks like a small process to manage until you're running it over email and spreadsheets for more than a handful of people, across more than one team, with more than one type of leave policy to track.",
    painPoints: [
      "Leave requests scattered across email, chat and verbal approvals mean nobody has one reliable place to check who's actually out on a given day including HR, whose job it is to know.",
      "Manually maintained leave balances drift out of date the moment a request is approved somewhere other than the spreadsheet that's supposed to track it, and nobody notices until an employee's balance looks wrong.",
      "Disputed leave balances at year-end 'I thought I had two more days' turn into a manual audit through old emails and approval threads, which is a bad use of anyone's time and a worse way to resolve a disagreement.",
      "Without a shared calendar, too many people from the same team can end up approved for leave on the same day, and nobody notices the coverage gap until it's already a problem.",
    ],
    capabilitiesIntro:
      "Meagle 360 gives every employee one place to request leave, backed by a leave management system that gives managers and HR one accurate, always-current record of who's applied for what so leave stops being tracked in three different places at once.",
    capabilities: [
      {
        title: "Self-service leave requests",
        desc: "This is the employee leave management system in action: employees apply for leave from the same self-service portal they use for payslips and attendance, with their current balance shown before they submit no guessing, no separate form, no waiting for someone to confirm what's left.",
      },
      {
        title: "Configurable leave policies",
        desc: "Set up the leave types and policies that match how your company actually works casual, sick, earned, comp-off with accrual and eligibility rules that reflect your actual policy rather than a generic default everyone has to work around.",
      },
      {
        title: "Manager approval workflows",
        desc: "Requests route to the right approver automatically, with the option to approve or reject directly from the dashboard or mobile app, so a leave request doesn't sit unread in an inbox while an employee waits to hear back.",
      },
      {
        title: "Real-time balance tracking",
        desc: "As time off tracking software, leave balances update the moment a request is approved, so there's one number everyone employee, manager and HR can trust, instead of a spreadsheet someone has to remember to update after every approval.",
      },
      {
        title: "Team leave calendar",
        desc: "Managers and HR can see who's on leave across a team or the whole company at a glance, which makes it easier to plan around absences instead of finding out someone's out the morning they were needed.",
      },
      {
        title: "Public holiday and policy calendars",
        desc: "Company holidays and location-specific policy calendars are set up once and applied automatically, instead of every employee needing to be told separately which dates are already accounted for.",
      },
      {
        title: "Leave linked to attendance and payroll",
        desc: "Approved leave is reflected automatically in attendance records and that cycle's payroll run, so present days and paid leave don't have to be reconciled by hand between three separate systems.",
      },
    ],
    builtForTitle: "Built for teams tired of tracking leave by hand",
    builtForParagraphs: [
      "Leave management stops being a five-minute task the moment you have more than a couple of teams, each with slightly different policies, approval chains and balance rules to keep straight.",
      "Meagle 360 is built to hold all of that structure different leave types, different approval paths, different accrual rules without turning leave requests into a manual process that only one person in HR fully understands.",
      "It's also built for the moments leave policy actually gets tested: a busy season where too many people request the same week off, a manager who's on leave themselves and needs requests to route to someone else, or a policy change partway through the year. Those are configuration changes inside Meagle 360, not a rebuild of whatever spreadsheet or process was tracking leave before.",
      "That same structure gives HR a clear, defensible answer whenever a leave decision is questioned later, because the policy, the request and the approval are all recorded in one place rather than scattered across email threads from months ago.",
    ],
    comparisonIntro:
      "What separates the best leave management system from a basic leave tracker isn't whether leave requests exist it's whether the whole approval and balance-tracking loop is actually automatic. Here's how Meagle 360 stacks up against Keka and greytHR on exactly that.",
    comparisonRows: [
      { capability: "Starting price", meagle: "₹149/user/month, flat", keka: "₹9,999/mo base (≈₹100/user/mo at 100 seats)", greythr: "₹2,495/mo base (≈₹50/user/mo at 50 seats)" },
      { capability: "Configurable leave policies", meagle: "Included", keka: "Included", greythr: "Included" },
      { capability: "Mobile self-service", meagle: "Included", keka: "Included", greythr: "Included" },
      { capability: "Real-time balance updates", meagle: "Included", keka: "Included", greythr: "Included" },
      { capability: "Team leave calendar", meagle: "Included", keka: "Included", greythr: "Included" },
      { capability: "Minimum seats", meagle: "None", keka: "Base fee bundles up to 100 employees", greythr: "Base fee bundles up to 50 employees" },
    ],
    faqs: [
      {
        q: "Can employees see their leave balance before applying?",
        a: "Yes. The self-service portal shows an employee's current balance at the moment they apply, so there's no back-and-forth to check.",
      },
      {
        q: "Can we set up our own leave policy instead of a generic default?",
        a: "Yes. Leave types, accrual rules and approval chains are configurable to match your company's actual policy.",
      },
      {
        q: "Does the leave balance update automatically once a request is approved?",
        a: "Yes, balances update immediately on approval there's no separate manual step to reconcile them.",
      },
      {
        q: "Can managers approve leave from their phone?",
        a: "Yes, approvals can be done from the mobile app as well as the web dashboard.",
      },
      {
        q: "Can I see who's on leave across the whole team, not just my own requests?",
        a: "Yes, managers and HR have access to a team leave calendar showing who's out and when, across a team or the whole company.",
      },
      {
        q: "What happens if a manager is on leave and can't approve requests?",
        a: "Approval routing can be configured to fall back to another approver, so requests don't sit waiting for someone who's unavailable.",
      },
      {
        q: "Is leave management a separate paid add-on?",
        a: "No. It's included in Meagle 360's flat ₹149 per user per month price along with every other module.",
      },
      {
        q: "Can leave policies differ between departments or locations?",
        a: "Yes, leave types and accrual rules can be configured separately per department or location where your policy actually differs.",
      },
      {
        q: "Is there a free trial before we commit to a paid plan?",
        a: "Yes, you can start a 14-day free trial with full access to leave management and every other module, with no credit card required.",
      },
      {
        q: "Can we track different leave types with different rules, like sick leave versus earned leave?",
        a: "Yes, each leave type can have its own accrual rate, carry-forward rule and eligibility criteria, rather than one generic rule applied to all leave.",
      },
      {
        q: "Can HR override an approved or rejected leave request if needed?",
        a: "Yes, HR retains the ability to review and adjust leave records when a genuine exception requires it, alongside the standard manager approval flow.",
      },
      {
        q: "What is a leave management system?",
        a: "A leave management system is software that lets employees apply for leave, tracks balances automatically, and routes requests to managers for approval, replacing manual leave registers or spreadsheet-based tracking.",
      },
      {
        q: "How is an employee leave management system different from a basic leave tracker?",
        a: "An employee leave management system typically includes self-service access, so employees can check their own balance and apply directly, along with manager approval workflows and payroll integration, rather than just logging days off in a spreadsheet.",
      },
      {
        q: "What should I look for in an online leave management system?",
        a: "Real-time balance visibility, configurable leave policies by department or location, automated approval routing, and integration with payroll and attendance are the features that matter most for day-to-day use.",
      },
      {
        q: "Can an HR leave management system handle different leave types and policies?",
        a: "Yes, a proper HR leave management system should support multiple leave types such as casual, sick, and earned leave with separate balances and rules for each, since a single uniform policy rarely fits every leave category.",
      },
      {
        q: "What makes a leave management system worth switching to from spreadsheets?",
        a: "Automated balance tracking removes manual calculation errors, approval workflows remove the back-and-forth of email or chat-based requests, and payroll integration means approved leave reflects in salary calculations without manual re-entry.",
      },
    ],
    relatedBlogSlugs: [
      "how-to-build-a-modern-and-effective-hr-management-system",
      "best-all-in-one-hrms-software-for-growing-businesses-in-2026",
    ],
    relatedFeatureSlug: "attendance-management-software",
    relatedFeatureLabel: "Attendance Management Software",
  },
  {
    slug: "shift-management-software",
    navLabel: "Shift Management",
    metaTitle: "Shift Management Software for Multi-Shift Teams",
    metaDescription:
      "Plan, rotate and cover shifts without a whiteboard or a spreadsheet roster. Flat ₹149/user/month, no setup fee. Book a demo.",
    h1: "Shift Management Software Built for Multi-Shift Teams",
    heroSubhead:
      "Plan rosters, rotate shifts, and keep every location covered, without maintaining a separate spreadsheet roster that's already out of date by the time it's shared with the team.",
    painIntro:
      "Shift scheduling by spreadsheet or whiteboard works right up until someone calls in sick and the whole roster needs reshuffling by hand, under time pressure, with no easy way to tell everyone affected at once.",
    painPoints: [
      "Building a rotating roster manually across multiple shifts and locations takes hours every scheduling cycle, and has to be redone from scratch the moment anything changes a new hire, a resignation, a shift pattern update.",
      "A shift swap or last-minute absence handled over chat or phone rarely makes it back into the master roster, so the record and reality drift apart, and whoever's checking the roster later sees the wrong picture.",
      "Without shift data linked to attendance, reconciling who actually worked which shift for payroll or compliance becomes a manual cross-check against a separate system, done by someone who has to remember to do it every cycle.",
      "Publishing a roster as a static image or PDF means every subsequent change has to be re-shared separately, and there's no guarantee everyone actually saw the latest version before their shift started.",
    ],
    capabilitiesIntro:
      "Meagle 360's shift module is built so a schedule change updates one place, not three, and shift data flows straight into attendance and payroll without a manual handoff between systems.",
    capabilities: [
      {
        title: "Rotating and fixed shift patterns",
        desc: "Set up the shift patterns your business actually runs fixed, rotating, or split across locations and assign employees to them without rebuilding the schedule from scratch every cycle. Once a pattern is set, it repeats automatically until you change it.",
      },
      {
        title: "Shift swaps and coverage requests",
        desc: "Employees can request a swap or flag they need coverage directly in the app, with visibility for managers, instead of the request getting lost in a chat thread or relying on someone remembering to update the whiteboard.",
      },
      {
        title: "Roster visibility for every employee",
        desc: "Everyone can see their own upcoming shifts from the self-service app, cutting down the 'what shift am I on' questions that otherwise land in HR's inbox or a manager's phone outside working hours.",
      },
      {
        title: "Shift-to-attendance and payroll sync",
        desc: "Shift assignments feed directly into attendance tracking, so late marks, overtime and shift differentials are calculated against the schedule someone actually worked, not a static plan that may have changed since it was published.",
      },
      {
        title: "Coverage gaps at a glance",
        desc: "Managers can see where a shift is understaffed before it becomes a problem on the floor, rather than discovering the gap when the shift is already underway and short-handed.",
      },
      {
        title: "Shift-based pay differentials",
        desc: "If night shifts, weekend shifts or specific locations carry a different pay rate, that rule is applied automatically based on the shift someone was actually assigned to, rather than a manual lookup at payroll time.",
      },
      {
        title: "Advance notice built into the schedule",
        desc: "Rosters can be published ahead of time so employees know their upcoming shifts in advance, rather than finding out the day before while still allowing swaps and coverage requests when plans genuinely change.",
      },
    ],
    builtForTitle: "Built for factories, retail and multi-location teams",
    builtForParagraphs: [
      "Shift management matters most exactly where a spreadsheet struggles hardest a factory running three shifts, a retail chain staffing multiple stores, or a support team covering extended hours across time zones.",
      "Meagle 360 keeps rosters, swaps and attendance data in one connected system, so a shift change doesn't mean updating a spreadsheet, messaging the affected employees separately, and hoping payroll gets the memo too.",
      "It's also built to scale with the number of locations you run, not just the number of employees. Adding a second or third site doesn't mean maintaining a second or third scheduling process it's the same system, with rosters and coverage tracked per location inside one dashboard.",
      "For teams that run around the clock, it also means a shift change at 11pm doesn't require someone to be awake to update a spreadsheet and message the whole team the roster updates once and everyone sees the current version.",
    ],
    comparisonIntro:
      "A closer look at shift management on Meagle 360 versus Keka and greytHR on pricing, on whether shift swaps are actually self-service, and on whether shift data connects to payroll automatically.",
    comparisonRows: [
      { capability: "Starting price", meagle: "₹149/user/month, flat", keka: "₹9,999/mo base (≈₹100/user/mo at 100 seats)", greythr: "₹2,495/mo base (≈₹50/user/mo at 50 seats)" },
      { capability: "Rotating shift patterns", meagle: "Included", keka: "Included", greythr: "Included" },
      { capability: "Employee-initiated shift swaps", meagle: "Included", keka: "Included", greythr: "Included where enabled by admin" },
      { capability: "Shift-linked attendance", meagle: "Automatic, same platform", keka: "Included, same platform", greythr: "Included, same platform" },
      { capability: "Multi-location rosters", meagle: "Included", keka: "Included", greythr: "Included" },
      { capability: "Minimum seats", meagle: "None", keka: "Base fee bundles up to 100 employees", greythr: "Base fee bundles up to 50 employees" },
    ],
    faqs: [
      {
        q: "Can employees see their upcoming shifts on their phone?",
        a: "Yes, every employee can view their assigned shifts from the self-service app without asking HR or a manager.",
      },
      {
        q: "Can employees request a shift swap themselves?",
        a: "Yes, swap and coverage requests can be raised directly in the app, with visibility for the manager to approve.",
      },
      {
        q: "Does shift data affect payroll automatically?",
        a: "Yes, shift assignments feed into attendance, so overtime and shift differentials are calculated from what was actually scheduled and worked.",
      },
      {
        q: "Can we run different shift patterns at different locations?",
        a: "Yes, shift patterns are configurable per team or location rather than a single fixed schedule for the whole company.",
      },
      {
        q: "Can managers see if a shift is understaffed before it starts?",
        a: "Yes, coverage gaps are visible on the roster ahead of time, rather than being discovered once a shift is already underway.",
      },
      {
        q: "Does adding a new location mean setting up a separate system?",
        a: "No, additional locations are managed inside the same dashboard, with rosters and coverage tracked per site.",
      },
      {
        q: "Is shift management included in the base plan?",
        a: "Yes, it's part of the flat ₹149 per user per month price with every other module there's no separate add-on fee.",
      },
      {
        q: "Can we set different pay rates for night or weekend shifts?",
        a: "Yes, shift-based pay differentials can be configured and applied automatically based on the shift someone was assigned to.",
      },
      {
        q: "Is there a free trial before we commit to a paid plan?",
        a: "Yes, you can start a 14-day free trial with full access to shift management and every other module, with no credit card required.",
      },
      {
        q: "How far in advance can rosters be published?",
        a: "Rosters can be published as far ahead as your scheduling process allows, giving employees advance notice while still supporting swaps closer to the date.",
      },
      {
        q: "Can we track split shifts or split-location workdays?",
        a: "Yes, shift patterns can be configured to reflect split shifts or an employee splitting their day across locations, rather than assuming one continuous block per day.",
      },
      {
        q: "Who can create or edit the roster just HR, or also team managers?",
        a: "Roster creation and editing permissions can be assigned by role, so team managers can typically manage their own team's schedule without needing HR to do it for them.",
      },
    ],
    relatedBlogSlugs: [
      "ai-transforming-attendance-tracking",
      "best-all-in-one-hrms-software-for-growing-businesses-in-2026",
    ],
    relatedFeatureSlug: "attendance-management-software",
    relatedFeatureLabel: "Attendance Management Software",
  },
  {
    slug: "employee-self-service",
    navLabel: "Employee Self-Service",
    metaTitle: "Employee Self-Service Portal for Payslips, Leave & More",
    metaDescription:
      "One app for payslips, leave requests, attendance and profile updates fewer routine questions land in HR's inbox. Flat ₹149/user/month. Book a demo.",
    h1: "An Employee Self-Service Portal That Cuts Routine HR Requests",
    heroSubhead:
      "Payslips, leave balances, attendance and profile updates all in one app employees can check themselves, instead of asking HR every time they have a routine question.",
    painIntro:
      "A lot of what lands in HR's inbox every week isn't strategic work it's the same handful of routine questions, asked one employee at a time, that a self-service system could answer instantly.",
    painPoints: [
      "\"Can you resend my last payslip\" and \"what's my leave balance\" are two of the most common messages HR fields, and neither needs a human to answer if the data is self-serve and up to date.",
      "Updating a phone number, bank account or address usually means an email to HR and a manual update on their end, for something the employee could change themselves in two minutes if they had access to their own record.",
      "Without a shared self-service source of truth, employees and HR sometimes work from different versions of the same information an old leave balance, a stale contact number and nobody notices until it causes a problem.",
      "New employees in particular tend to ask the same onboarding questions repeatedly in their first few weeks, simply because there's no obvious self-serve place to find the answer themselves.",
    ],
    capabilitiesIntro:
      "Meagle 360 gives every employee a single login to check the things they'd otherwise have to ask HR for turning routine requests into something employees can resolve themselves in under a minute.",
    capabilities: [
      {
        title: "Payslip access anytime",
        desc: "Employees can view and download their own payslips the moment a payroll cycle is finalised, without waiting for HR to email them out individually or chasing down a copy from a previous month.",
      },
      {
        title: "Leave and attendance at a glance",
        desc: "Current leave balance, attendance history and pending requests are all visible from the same dashboard, so an employee doesn't have to ask what their own record shows they can just look.",
      },
      {
        title: "Profile and document updates",
        desc: "Employees can update their own contact details and access their documents directly, instead of routing every small change through HR for manual entry, freeing HR from being the single point of failure for basic data updates.",
      },
      {
        title: "Mobile-first experience",
        desc: "The self-service portal is built for the phone first, since most employees especially field and shift-based teams aren't sitting at a desk to log into a web dashboard during the workday.",
      },
      {
        title: "Notifications that keep employees informed",
        desc: "Leave approvals, payroll confirmations and other status updates are pushed to employees directly, so they find out from the app instead of having to check in with HR to know where things stand.",
      },
      {
        title: "One login for every module",
        desc: "Attendance, leave, payroll and profile data all sit behind the same self-service login, so employees aren't juggling separate logins or apps for different parts of their own HR record.",
      },
      {
        title: "Easy for non-technical employees",
        desc: "The portal is designed to be usable without training an employee's first login should be enough to find their payslip or apply for leave without needing a walkthrough from HR.",
      },
    ],
    builtForTitle: "Built to give HR its time back",
    builtForParagraphs: [
      "Self-service isn't about replacing HR it's about removing the repetitive, low-value part of the job so HR has time for the parts that actually need a person: a difficult conversation, a policy decision, an onboarding plan.",
      "Meagle 360's self-service portal is designed around the handful of things employees ask about most often pay, leave, attendance, their own details so those questions get answered without a message to HR in the first place.",
      "It's also built for the reality that most employees interact with HR systems in short bursts, on their phone, between other things checking a payslip on the way to lunch, applying for leave from home the night before. A portal that's slow, desktop-only or hard to navigate just pushes people back to asking HR directly, which defeats the point.",
      "For a growing company, that adds up fast the difference between HR spending its week on repetitive requests versus spending it on the hiring, onboarding and culture work that actually needs a person's judgment.",
    ],
    comparisonIntro:
      "How Meagle 360's self-service experience compares to Keka and greytHR on what's included by default, and on whether it's actually usable from a phone.",
    comparisonRows: [
      { capability: "Starting price", meagle: "₹149/user/month, flat", keka: "₹9,999/mo base (≈₹100/user/mo at 100 seats)", greythr: "₹2,495/mo base (≈₹50/user/mo at 50 seats)" },
      { capability: "Mobile app for employees", meagle: "Included", keka: "Included (iOS + Android)", greythr: "Included (iOS + Android)" },
      { capability: "Self-service payslip access", meagle: "Included", keka: "Included", greythr: "Included" },
      { capability: "Self-service profile updates", meagle: "Included", keka: "Included", greythr: "Included" },
      { capability: "Push notifications", meagle: "Included", keka: "Included", greythr: "Included" },
      { capability: "Minimum seats", meagle: "None", keka: "Base fee bundles up to 100 employees", greythr: "Base fee bundles up to 50 employees" },
    ],
    faqs: [
      {
        q: "Can employees download their own payslips?",
        a: "Yes, payslips are available to each employee the moment that payroll cycle is finalised, without HR needing to send them individually.",
      },
      {
        q: "Is the self-service portal available on mobile?",
        a: "Yes, it's built mobile-first, since most employees check it from their phone rather than a desktop.",
      },
      {
        q: "What can employees update themselves without contacting HR?",
        a: "Contact details and personal information can be updated directly by the employee, cutting down on manual data-entry requests to HR.",
      },
      {
        q: "Does self-service show real-time leave and attendance data?",
        a: "Yes, employees see their current leave balance and attendance history directly, using the same live data HR sees.",
      },
      {
        q: "Do employees get notified when a leave request is approved?",
        a: "Yes, status updates like leave approvals and payroll confirmations are pushed to the employee directly through the app.",
      },
      {
        q: "Does the self-service app require any special hardware?",
        a: "No, it runs on any employee's own smartphone or a web browser there's no dedicated device required.",
      },
      {
        q: "Is the self-service portal a separate cost?",
        a: "No, it's included for every employee at the flat ₹149 per user per month price, along with every other module.",
      },
      {
        q: "Do employees need a separate login for payslips versus leave?",
        a: "No, attendance, leave, payroll and profile data all sit behind the same self-service login.",
      },
      {
        q: "Is there a free trial before we commit to a paid plan?",
        a: "Yes, you can start a 14-day free trial with full self-service access for your whole team, with no credit card required.",
      },
      {
        q: "Can employees see past payslips, not just the most recent one?",
        a: "Yes, an employee's full payslip history is accessible from their self-service login, not just the latest cycle.",
      },
      {
        q: "Does the portal work for employees who don't use email regularly?",
        a: "Yes, the mobile app is the primary way most employees interact with self-service, so it doesn't depend on employees checking email.",
      },
      {
        q: "Can HR still access an employee's record if the employee needs help?",
        a: "Yes, HR retains full visibility and can assist directly when an employee needs help, alongside the employee's own self-service access.",
      },
      {
        q: "Does self-service reduce HR's workload measurably, or is it mostly convenience?",
        a: "It reduces the volume of routine, repetitive requests specifically payslip copies, balance checks, contact updates which are typically a meaningful share of what HR fields day to day.",
      },
    ],
    relatedBlogSlugs: [
      "complete-guide-employee-onboarding",
      "how-to-build-a-modern-and-effective-hr-management-system",
    ],
    relatedFeatureSlug: "employee-database-software",
    relatedFeatureLabel: "Employee Database Software",
  },
  {
    slug: "employee-database-software",
    navLabel: "Employee Database",
    metaTitle: "Employee Database Software & Org Chart",
    metaDescription:
      "One accurate employee directory and org chart, instead of scattered spreadsheets and outdated documents. Flat ₹149/user/month. Book a demo.",
    h1: "Employee Database Software That Replaces the HR Spreadsheet",
    heroSubhead:
      "An online employee database with one accurate directory for every employee's role, department, documents and reporting line, instead of a spreadsheet that's a version or two behind reality by the time anyone opens it.",
    heroSecondaryCta: { label: "Free employee database template →", href: "/blog/free-employee-database-template" },
    painIntro:
      "Most companies have employee data spread across a spreadsheet, an email folder of documents, and whatever the last person to update the org chart remembered to change.",
    painPoints: [
      "A spreadsheet-based employee record has no real access control, no history, and drifts out of date the moment someone forgets to update it after a role change, a promotion, or a department move.",
      "Finding a specific employee's documents offer letter, ID proof, past appraisal often means searching an email inbox or a shared drive folder by hand, hoping whoever filed it used a name you'd think to search for.",
      "An outdated org chart makes basic questions who reports to whom, who's covering for someone on leave harder to answer than they should be, especially for anyone who joined after the chart was last updated.",
      "A spreadsheet has no audit trail there's no reliable way to see who changed an employee's record, or when, if a detail turns out to be wrong later.",
    ],
    capabilitiesIntro:
      "Meagle 360 is employee database management software that keeps every employee's core record role, department, reporting line and documents in one place that updates as your organization changes, instead of a file someone has to remember to maintain separately.",
    capabilities: [
      {
        title: "Centralized employee directory",
        desc: "As employee record management software, every employee's role, department, contact details and employment status live in one searchable directory, instead of a spreadsheet only one or two people know how to maintain or where to find.",
      },
      {
        title: "Live organization chart",
        desc: "Reporting lines are reflected in an org chart that updates automatically as roles change, rather than a static diagram someone redraws every few months and forgets to circulate.",
      },
      {
        title: "Document management",
        desc: "Offer letters, ID documents and other employee records are stored against each employee's profile, so finding them doesn't mean searching an inbox or a shared drive folder for a file someone else named however they felt like.",
      },
      {
        title: "Role-based access control",
        desc: "Who can see what is controlled by role, so sensitive employee data isn't sitting in a spreadsheet that anyone with the link can open, and access can be scoped to exactly who needs it.",
      },
      {
        title: "Employee lifecycle tracking",
        desc: "Joining, role changes, promotions and exits are all reflected in the same record, so the employee database tells an accurate story of someone's history at the company instead of just their current snapshot.",
      },
      {
        title: "Searchable across the whole company",
        desc: "Finding a specific employee, or everyone in a specific department or role, is a search rather than a scroll through a spreadsheet sorted by whatever column someone last clicked.",
      },
      {
        title: "One record shared across every module",
        desc: "The same employee record feeds attendance, leave, payroll and self-service, so there's no separate directory to keep updated in parallel with the rest of the system.",
      },
    ],
    builtForTitle: "Built for the moment a spreadsheet stops being enough",
    builtForParagraphs: [
      "An employee spreadsheet works when there are ten people and one person maintaining it. It stops working the moment there's more than one department, more than one person updating records, or more than a handful of documents to keep track of per employee.",
      "Meagle 360 is software for employee database and org chart management, built to be the one place that record lives connected to attendance, leave and payroll, instead of a separate file someone has to remember to keep in sync with everything else.",
      "It's also built for the questions that come up unexpectedly an auditor asking for proof of when someone joined, a new manager trying to understand their team's structure, HR needing to pull every document for a specific employee quickly. Those are lookups inside Meagle 360, not a scramble through old files.",
      "As the company grows past the size where everyone knows everyone, an accurate directory and org chart stop being a nice-to-have and start being how new hires and new managers actually understand how the company is structured.",
    ],
    comparisonIntro:
      "How the employee database and org chart on Meagle 360 compares to Keka and greytHR on pricing, and on whether the directory actually stays current without manual upkeep.",
    comparisonRows: [
      { capability: "Starting price", meagle: "₹149/user/month, flat", keka: "₹9,999/mo base (≈₹100/user/mo at 100 seats)", greythr: "₹2,495/mo base (≈₹50/user/mo at 50 seats)" },
      { capability: "Live org chart", meagle: "Included", keka: "Included", greythr: "Directory-based; org chart visualization not confirmed" },
      { capability: "Document storage per employee", meagle: "Included", keka: "Included, with expiry tracking", greythr: "Not clearly documented publicly" },
      { capability: "Role-based access control", meagle: "Included", keka: "Included", greythr: "Included" },
      { capability: "Lifecycle history per employee", meagle: "Included", keka: "Included (full hire-to-exit)", greythr: "Not clearly documented publicly" },
      { capability: "Minimum seats", meagle: "None", keka: "Base fee bundles up to 100 employees", greythr: "Base fee bundles up to 50 employees" },
    ],
    faqs: [
      {
        q: "Does the org chart update automatically when someone changes roles?",
        a: "Yes, reporting lines reflect current role data, so the chart doesn't need to be manually redrawn after every change.",
      },
      {
        q: "Can we store employee documents like offer letters and ID proof?",
        a: "Yes, documents are stored against each employee's profile instead of scattered across email or shared drives.",
      },
      {
        q: "Who can see sensitive employee data?",
        a: "Access is controlled by role, so only the people who should see specific employee data can access it.",
      },
      {
        q: "Is the employee database connected to attendance and payroll?",
        a: "Yes, it's the same underlying employee record used across attendance, leave and payroll, so there's no separate file to keep in sync.",
      },
      {
        q: "Can we see an employee's full history at the company, not just their current role?",
        a: "Yes, joining date, role changes, promotions and exits are tracked as part of the employee's lifecycle record.",
      },
      {
        q: "How quickly can HR find a specific employee's documents?",
        a: "Documents are attached directly to the employee's profile, so they're a lookup away instead of a search through email or shared drives.",
      },
      {
        q: "Is the employee database a separate module I have to pay extra for?",
        a: "No, it's included in the flat ₹149 per user per month price along with every other module.",
      },
      {
        q: "Can I search for every employee in a specific department or role?",
        a: "Yes, the directory is searchable by department, role and other fields, rather than requiring a manual scroll through a spreadsheet.",
      },
      {
        q: "Is there a free trial before we commit to a paid plan?",
        a: "Yes, you can start a 14-day free trial with full access to the employee database and every other module, with no credit card required.",
      },
      {
        q: "Can we import our existing employee spreadsheet when we sign up?",
        a: "Yes, existing employee data can be migrated in as part of onboarding, rather than requiring every record to be re-entered manually.",
      },
      {
        q: "Can we track contractors or interns separately from full-time employees?",
        a: "Yes, employment type is part of each employee's record, so contractors, interns and full-time staff can be distinguished and reported on separately.",
      },
      {
        q: "Can managers see the org chart for their own team without seeing the whole company?",
        a: "Yes, org chart visibility can be scoped by role, so a manager can see their own team's structure without needing access to every department.",
      },
      {
        q: "Is there a limit on how many employee records we can store?",
        a: "The employee database is designed to grow with your headcount, without needing a separate plan or upgrade just to add more employee records.",
      },
    ],
    relatedBlogSlugs: [
      "7-must-have-hiring-processes-every-company-needs",
      "how-to-build-a-modern-and-effective-hr-management-system",
    ],
    relatedFeatureSlug: "employee-self-service",
    relatedFeatureLabel: "Employee Self-Service",
  },
  {
    slug: "expense-management",
    navLabel: "Expense Management",
    metaTitle: "Expense Management Software with Payroll Sync",
    metaDescription:
      "Submit, approve and reimburse expenses without paper receipts or spreadsheets synced directly with payroll. Flat ₹149/user/month. Book a demo.",
    h1: "Expense Management Software That Reimburses Without the Paperwork",
    heroSubhead:
      "Employees submit expenses from their phone, managers approve in a click, and approved reimbursements flow straight into the next payroll run no paper trail to lose.",
    painIntro:
      "Paper receipts and email-based expense claims cost more than they look like they do mostly in the time it takes to chase, check and reimburse them, and in the ones that quietly never get claimed at all.",
    painPoints: [
      "Physical receipts get lost, and email-submitted claims sit in an inbox until someone has time to review and approve them one by one, often long after the expense was actually incurred.",
      "Manually matching approved reimbursements to the right payroll cycle is an extra step that's easy to miss, leading to reimbursements that slip to the following month and an employee wondering where their money is.",
      "Without a clear approval trail, expense disputes 'I submitted that weeks ago' become a search through old emails instead of a quick status check that should take seconds.",
      "Employees who find the claims process tedious often just stop submitting smaller expenses altogether, which means the company's books quietly understate what people are actually spending on its behalf.",
    ],
    capabilitiesIntro:
      "Meagle 360 gives employees a simple way to submit expenses and gives finance and HR a clear, auditable approval trail connected directly to payroll no separate reimbursement process to manage on the side.",
    capabilities: [
      {
        title: "Mobile expense submission",
        desc: "Employees can submit an expense claim with a photo of the receipt directly from their phone, rather than holding on to paper receipts until they get to a desk or remember to file them at all.",
      },
      {
        title: "Configurable approval workflows",
        desc: "Expenses route to the right approver based on your policy by amount, category or department so claims don't sit waiting for the wrong person to notice them in an inbox they don't check often.",
      },
      {
        title: "Reimbursement-to-payroll sync",
        desc: "Once an expense is approved, it can be included directly in that employee's next payroll cycle, instead of being tracked and reimbursed through a separate process that finance has to run on its own schedule.",
      },
      {
        title: "Full audit trail",
        desc: "Every claim keeps a record of who submitted it, who approved it and when, so a status check doesn't require searching through an email thread or asking around to find out where a request stands.",
      },
      {
        title: "Spend visibility by category and team",
        desc: "Finance can see expense trends by category, department or time period as claims come in, instead of waiting for a month-end report to understand where reimbursement spend is actually going.",
      },
      {
        title: "Policy limits, applied automatically",
        desc: "Spending limits by category or role can be configured so a claim outside policy is flagged automatically, instead of relying on whoever's reviewing it to remember every rule and catch an exception manually.",
      },
      {
        title: "Reimbursement status, visible to employees",
        desc: "Employees can see where their claim stands submitted, approved, or reimbursed from the same app they used to file it, instead of having to ask finance for an update.",
      },
    ],
    builtForTitle: "Built for teams that reimburse employees regularly",
    builtForParagraphs: [
      "Travel, client visits, field work and day-to-day purchases all generate expenses that someone has to submit, someone has to approve, and someone has to reimburse and every manual step in that chain is a place for delay.",
      "Meagle 360's expense module is built to make that whole chain fast enough that employees actually use it properly, and connected enough that finance doesn't have to reconcile it against payroll separately.",
      "It's also built for teams where expenses aren't occasional field sales, service technicians, anyone regularly on the road where a slow or paper-based process doesn't just waste time, it actively discourages people from claiming what they're owed, or leads to claims bunched up and submitted all at once at the end of a quarter.",
      "For finance, it also means expense spend stops being a surprise at month-end trends by category and department are visible as claims happen, rather than arriving all at once in a report nobody had time to sanity-check.",
    ],
    comparisonIntro:
      "A look at how expense management on Meagle 360 compares to Keka and greytHR on pricing, and on whether reimbursement actually connects to payroll without a manual step.",
    comparisonRows: [
      { capability: "Starting price", meagle: "₹149/user/month, flat", keka: "₹9,999/mo base (≈₹100/user/mo at 100 seats)", greythr: "₹2,495/mo base (≈₹50/user/mo at 50 seats)" },
      { capability: "Mobile receipt capture", meagle: "Included", keka: "Included, with OCR", greythr: "Included, with AI-powered OCR" },
      { capability: "Configurable approval routing", meagle: "Included", keka: "Included, by team/region/department", greythr: "Included, rule-based policy engine" },
      { capability: "Reimbursement-to-payroll sync", meagle: "Automatic, same platform", keka: "Included, auto-sent to Keka Payroll", greythr: "Bank-ready export; direct payroll-cycle sync not confirmed" },
      { capability: "Spend reporting by category", meagle: "Included", keka: "Included", greythr: "Included, multi-category support" },
      { capability: "Minimum seats", meagle: "None", keka: "Base fee bundles up to 100 employees", greythr: "Base fee bundles up to 50 employees" },
    ],
    faqs: [
      {
        q: "Can employees submit expenses from their phone?",
        a: "Yes, employees can photograph a receipt and submit a claim directly from the mobile app.",
      },
      {
        q: "Do approved expenses get reimbursed through payroll automatically?",
        a: "Yes, approved reimbursements can be included directly in the employee's next payroll cycle without a separate manual step.",
      },
      {
        q: "Can we set our own approval rules for expenses?",
        a: "Yes, approval routing is configurable by amount, category or department to match your actual policy.",
      },
      {
        q: "Is there a record of who approved each expense claim?",
        a: "Yes, every claim keeps a full trail of submission, approval and reimbursement status.",
      },
      {
        q: "Can finance see expense trends without waiting for a monthly report?",
        a: "Yes, spend by category, department or period is visible as claims come in, not just in a rebuilt month-end summary.",
      },
      {
        q: "What happens if an employee loses a paper receipt?",
        a: "Since claims are submitted with a photo through the app at the time of the expense, there's no paper receipt to lose or file away.",
      },
      {
        q: "Is expense management included, or an extra cost?",
        a: "It's included in the flat ₹149 per user per month price, along with every other module there's no add-on fee.",
      },
      {
        q: "Can we set spending limits that flag claims automatically?",
        a: "Yes, policy limits by category or role can be configured so an out-of-policy claim is flagged automatically rather than relying on manual review.",
      },
      {
        q: "Is there a free trial before we commit to a paid plan?",
        a: "Yes, you can start a 14-day free trial with full access to expense management and every other module, with no credit card required.",
      },
      {
        q: "Can an expense claim include multiple receipts at once?",
        a: "Yes, a single claim can include multiple line items and receipts, rather than requiring a separate submission for each expense.",
      },
      {
        q: "Can approvers see spend history before approving a new claim?",
        a: "Yes, approvers can see an employee's recent claim history for context when reviewing a new request, rather than approving each claim in isolation.",
      },
      {
        q: "Can rejected claims be edited and resubmitted?",
        a: "Yes, an employee can revise a rejected claim and resubmit it rather than needing to start over from scratch.",
      },
      {
        q: "Are expense claims tied to a specific project or client, if we bill clients for expenses?",
        a: "Claims can be categorized in a way that supports tracking spend against a project or client, rather than treating every expense as a generic company cost.",
      },
    ],
    relatedBlogSlugs: [
      "streamline-payroll-process-2026",
      "best-all-in-one-hrms-software-for-growing-businesses-in-2026",
    ],
    relatedFeatureSlug: "payroll-software",
    relatedFeatureLabel: "Payroll Software",
  },
  {
    slug: "hr-reports-analytics",
    navLabel: "HR Reports & Analytics",
    metaTitle: "HR Reports & Analytics Software",
    metaDescription:
      "Attendance, leave, payroll and headcount reports generated from live data, not a manually rebuilt spreadsheet. Flat ₹149/user/month. Book a demo.",
    h1: "HR Reports & Analytics Built From Live Workforce Data",
    heroSubhead:
      "Attendance trends, leave patterns, payroll cost and headcount, reported straight from the data already inside Meagle 360 no manual spreadsheet rebuild before every review.",
    painIntro:
      "HR reporting usually means pulling numbers from three different places and rebuilding the same spreadsheet before every leadership review, hoping nothing changed between the export and the meeting.",
    painPoints: [
      "Compiling attendance, leave and payroll data from separate sources into one report can take hours every time leadership asks for an update, and that time comes directly out of work that actually needs a person's judgment.",
      "A report built by hand is out of date the moment it's exported the numbers behind it kept moving after the spreadsheet was built, so what's presented is already slightly wrong by the time anyone sees it.",
      "Without a consistent reporting source, two people can pull slightly different headcount or cost numbers for the same period, and nobody's sure which one is right which undermines confidence in the data generally.",
      "By the time a manually built report reaches leadership, the underlying situation may have already changed, which means decisions get made on numbers that were accurate a week or two ago rather than right now.",
    ],
    capabilitiesIntro:
      "Meagle 360 generates reports directly from the same attendance, leave, payroll and employee data already live in the system not a separate export someone rebuilds by hand every time a number is needed.",
    capabilities: [
      {
        title: "Attendance and leave trend reports",
        desc: "See attendance patterns, late marks and leave usage across teams and time periods, pulled from the same records used to run payroll not a separately maintained summary that can drift from what actually happened.",
      },
      {
        title: "Payroll cost reporting",
        desc: "Track payroll cost by department, location or period, using the same numbers that were actually paid out, instead of a projected estimate rebuilt every month from a separate source.",
      },
      {
        title: "Headcount and org reporting",
        desc: "Headcount, department distribution and hiring trends are reported from the live employee database, so the numbers reflect who's actually on the team right now, not who was on the team when someone last updated a slide.",
      },
      {
        title: "Exportable, shareable reports",
        desc: "Reports can be exported for a leadership review or board deck when you need a static version, without that being the only way to access the data the live dashboard is always there too.",
      },
      {
        title: "Filter and drill down by team",
        desc: "Reports can be filtered by department, location or time period, so a question like 'what's our leave usage in the Bengaluru office this quarter' has a direct answer instead of requiring a fresh manual pull.",
      },
      {
        title: "One dashboard for every metric",
        desc: "Attendance, leave, payroll and headcount reporting live in the same dashboard, so building a full picture of the business doesn't mean stitching together exports from several different tools.",
      },
      {
        title: "Numbers everyone can agree on",
        desc: "Because reports come from one live source instead of separately maintained files, two people asking the same question get the same answer, without a separate step to reconcile whose numbers are right.",
      },
    ],
    builtForTitle: "Built for HR teams that report on people, not just process them",
    builtForParagraphs: [
      "Once attendance, leave, payroll and employee records all live in one system, reporting on them stops being a separate project it's a query against data that's already accurate, because it's the same data the rest of the company is already relying on.",
      "Meagle 360's reporting is built around that idea: the numbers you show leadership should be the same numbers running payroll and tracking attendance, not a parallel spreadsheet someone reconciles by hand before every review.",
      "It's also built for the questions that come up between scheduled reviews a sudden question about attrition in one department, a quick check on overtime cost before a budget conversation. Those are answers you can pull in the moment, rather than requests that go into a queue for whoever normally builds the reports.",
      "That matters most for growing companies specifically, where headcount, cost and attendance patterns change quickly enough that a report built even a few weeks ago can already be misleading by the time it's used to make a decision.",
    ],
    comparisonIntro:
      "How HR reporting and analytics on Meagle 360 compares to Keka and greytHR on pricing, and on whether the reports are actually built from live data or a separate export.",
    comparisonRows: [
      { capability: "Starting price", meagle: "₹149/user/month, flat", keka: "₹9,999/mo base (≈₹100/user/mo at 100 seats)", greythr: "₹2,495/mo base (≈₹50/user/mo at 50 seats)" },
      { capability: "Live attendance & leave reports", meagle: "Included", keka: "Included", greythr: "Included" },
      { capability: "Payroll cost reporting", meagle: "Included", keka: "Included", greythr: "Included" },
      { capability: "Headcount & org reporting", meagle: "Included", keka: "Included, with demographics/attrition analytics", greythr: "Included, via Advanced Analytics Hub" },
      { capability: "Filter by team or location", meagle: "Included", keka: "Included", greythr: "Included" },
      { capability: "Minimum seats", meagle: "None", keka: "Base fee bundles up to 100 employees", greythr: "Base fee bundles up to 50 employees" },
    ],
    faqs: [
      {
        q: "Are reports generated from live data or a manual export?",
        a: "Reports are generated directly from the same attendance, leave, payroll and employee data live in the system not a separately maintained spreadsheet.",
      },
      {
        q: "Can I see payroll cost broken down by department or location?",
        a: "Yes, payroll cost reporting can be viewed by department, location or period.",
      },
      {
        q: "Can I export a report for a leadership review?",
        a: "Yes, reports can be exported when you need a static version to share, while the live data remains available in the dashboard.",
      },
      {
        q: "Does headcount reporting update automatically as people join or leave?",
        a: "Yes, headcount and org reporting reflect the current employee database in real time.",
      },
      {
        q: "Can I filter reports down to a specific team or location?",
        a: "Yes, reports can be filtered by department, location or time period to answer a specific question without a fresh manual pull.",
      },
      {
        q: "Do I need a separate BI tool to analyze HR data?",
        a: "No, attendance, leave, payroll and headcount reporting are built into Meagle 360 directly, without needing to export data into a separate analytics tool for basic reporting.",
      },
      {
        q: "Is reporting and analytics a separate paid module?",
        a: "No, it's included in the flat ₹149 per user per month price along with every other module.",
      },
      {
        q: "Can I see attendance, leave and payroll metrics in one dashboard?",
        a: "Yes, all of it lives in the same dashboard, so building a full picture doesn't mean stitching together exports from different tools.",
      },
      {
        q: "Is there a free trial before we commit to a paid plan?",
        a: "Yes, you can start a 14-day free trial with full access to reporting and every other module, with no credit card required.",
      },
      {
        q: "Can reports be scheduled to arrive automatically, instead of checked manually?",
        a: "Reports can be pulled on demand from the dashboard whenever you need them, giving you current data without waiting for a scheduled export.",
      },
      {
        q: "Can non-HR stakeholders, like finance or leadership, see reports too?",
        a: "Yes, report access can be extended to the relevant stakeholders based on role, so finance or leadership aren't dependent on HR to share numbers manually.",
      },
      {
        q: "Can reports compare data across different time periods, like this quarter versus last?",
        a: "Yes, reports can be pulled for different periods and compared side by side, rather than only ever showing a single snapshot in time.",
      },
    ],
    relatedBlogSlugs: [
      "how-to-build-a-modern-and-effective-hr-management-system",
      "best-all-in-one-hrms-software-for-growing-businesses-in-2026",
    ],
    relatedFeatureSlug: "employee-database-software",
    relatedFeatureLabel: "Employee Database Software",
  },
  {
    slug: "hiring-management-software",
    navLabel: "Hiring Management",
    metaTitle: "Hiring Management Software for Growing Teams",
    metaDescription:
      "Post jobs, track applicants through a clear pipeline, and onboard new hires without spreadsheets and email threads. Flat ₹149/user/month. Book a demo.",
    h1: "Hiring Management Software That Takes You From Job Post to Day One",
    heroSubhead:
      "Track every applicant through a clear hiring pipeline, and turn an accepted offer into a fully onboarded employee — without juggling spreadsheets, email threads, and an onboarding checklist nobody remembers to finish.",
    painIntro:
      "Hiring usually looks manageable right up until you're running three or four open roles at once, and nobody on the team can answer \"where did that candidate go?\" without digging back through email.",
    painPoints: [
      "Applications scattered across a shared inbox, personal email, and job-board notifications mean candidates get missed, forgotten, or contacted twice by two different people on the same team.",
      "Without a shared pipeline, nobody can say with confidence how many candidates are actually at interview stage for a role, or who's supposed to follow up with them next.",
      "A new hire's first week often depends on someone in HR remembering every onboarding step by hand — laptop request, account creation, document collection, induction — instead of a checklist that runs the same way every time.",
      "Offer letters, ID proofs, and joining documents collected over email are easy to lose track of, with no single record connecting a new hire back to their original application.",
    ],
    capabilitiesIntro:
      "Meagle 360 gives every open role a single pipeline the whole hiring team can see, and connects an accepted offer directly into onboarding — so a new hire's employee record exists before their first day, not sometime after someone gets around to entering it.",
    capabilities: [
      {
        title: "Job posting and candidate pipeline",
        desc: "Post an opening once and track every applicant through a clear pipeline — applied, screening, interview, offer — so anyone on the hiring team can see exactly where a candidate stands without having to ask.",
      },
      {
        title: "Resume and application tracking",
        desc: "Every candidate's resume, contact details, and notes from the team stay attached to their profile in one place, instead of scattered across inboxes and forwarded email threads.",
      },
      {
        title: "Interview scheduling and feedback",
        desc: "Schedule interviews and collect structured feedback from each interviewer in the same record, so a hiring decision doesn't depend on someone recalling a verbal conversation from two weeks earlier.",
      },
      {
        title: "Offer letter management",
        desc: "Generate and send offer letters directly from a candidate's record, with status tracking for sent, accepted, and declined offers, instead of hunting down the latest version in an email chain.",
      },
      {
        title: "Seamless hire-to-onboarding handoff",
        desc: "Once an offer is accepted, the candidate's details flow directly into onboarding — nobody has to re-enter the same name, contact details, and documents a second time.",
      },
      {
        title: "Onboarding checklists",
        desc: "Set up a standard onboarding checklist — documents, equipment, account access, induction — so a new hire's first week runs the same way every time, regardless of who happens to be managing it that week.",
      },
      {
        title: "Hiring reports and pipeline visibility",
        desc: "See how many candidates are at each stage, per open role, without sending a message asking a recruiter or hiring manager for a manual update.",
      },
    ],
    builtForTitle: "Built for teams hiring without a dedicated recruitment team",
    builtForParagraphs: [
      "Most growing companies don't have a dedicated recruiter running a full applicant-tracking system — hiring is something a founder, an HR generalist, or a hiring manager handles alongside their actual job. Meagle 360's hiring module is built for exactly that: enough structure to keep a pipeline organized, without the complexity of an enterprise ATS nobody has time to configure.",
      "It's also built for the handoff that usually breaks somewhere in the process: the moment between \"candidate accepted the offer\" and \"employee shows up ready to work.\" Instead of that information living in one recruiter's inbox, it flows directly into the same employee record system that already handles attendance, payroll, and documents.",
      "For a hiring manager, that means checking where a specific candidate stands without pinging HR for an update. For HR, it means not re-typing the same candidate's details three separate times across a spreadsheet, an offer letter template, and an onboarding form.",
      "And when hiring picks up — three open roles instead of one — the same system holds up, because the pipeline's structure doesn't depend on any single person's personal system for tracking who's where.",
    ],
    comparisonIntro:
      "A look at how hiring and onboarding on Meagle 360 compares to Keka and greytHR on pricing, and on whether a hire actually flows into onboarding without manual re-entry.",
    comparisonRows: [
      { capability: "Starting price", meagle: "₹149/user/month, flat", keka: "₹9,999/mo base (≈₹100/user/mo at 100 seats)", greythr: "₹2,495/mo base (≈₹50/user/mo at 50 seats)" },
      { capability: "Candidate pipeline tracking", meagle: "Included", keka: "Included", greythr: "Included (via greytHR Recruit, separate module)" },
      { capability: "Offer letter generation", meagle: "Included", keka: "Included", greythr: "Included" },
      { capability: "Hire-to-onboarding handoff", meagle: "Automatic, same platform", keka: "Included, same platform", greythr: "Data transfer between modules, not always automatic" },
      { capability: "Onboarding checklists", meagle: "Included", keka: "Included", greythr: "Included" },
      { capability: "Minimum seats", meagle: "None", keka: "Base fee bundles up to 100 employees", greythr: "Base fee bundles up to 50 employees" },
    ],
    faqs: [
      {
        q: "Does the hiring pipeline connect directly to onboarding?",
        a: "Yes. Once an offer is marked accepted, the candidate's details carry directly into onboarding and their employee record, without needing to be re-entered.",
      },
      {
        q: "Can multiple people on the team review the same candidate?",
        a: "Yes, interviewers can leave structured feedback on the same candidate record, so a hiring decision is based on everyone's input in one place rather than scattered messages.",
      },
      {
        q: "Can I send offer letters directly from the platform?",
        a: "Yes, offer letters can be generated and sent from a candidate's record, with status tracking for sent, accepted, and declined offers.",
      },
      {
        q: "Is hiring management included in the base price, or is it a separate add-on?",
        a: "It's included. Meagle 360 is a flat ₹149 per user per month for every module, including hiring management — there are no per-module add-on fees.",
      },
      {
        q: "How long does it take to set up a hiring pipeline for a new role?",
        a: "Setting up a pipeline for a new open role typically takes a few minutes — you're not configuring a complex enterprise ATS from scratch.",
      },
      {
        q: "Can I customize the onboarding checklist for different roles?",
        a: "Yes, onboarding checklists can be configured to match what a specific role or department actually needs, rather than one generic checklist for everyone.",
      },
      {
        q: "Can hiring managers see pipeline status without contacting HR?",
        a: "Yes, hiring managers can see where their own open roles' candidates stand directly, based on the access level configured for their role.",
      },
      {
        q: "Is there a free trial before we commit to a paid plan?",
        a: "Yes, you can start a 14-day free trial with full access to hiring management and every other module, with no credit card required.",
      },
      {
        q: "Can I track multiple open roles at the same time?",
        a: "Yes, each open role gets its own pipeline, so tracking three or four roles at once doesn't mean juggling separate spreadsheets for each.",
      },
      {
        q: "What happens to a candidate's information once they're hired?",
        a: "It carries directly into their employee profile — the same resume, contact details, and documents collected during hiring, without duplicate data entry.",
      },
      {
        q: "Can I see hiring reports across all open roles?",
        a: "Yes, you can see how many candidates are at each pipeline stage across every open role from one view, rather than requesting an update from each recruiter individually.",
      },
    ],
    relatedBlogSlugs: [
      "7-must-have-hiring-processes-every-company-needs",
      "complete-guide-employee-onboarding",
    ],
    relatedFeatureSlug: "employee-database-software",
    relatedFeatureLabel: "Employee Database Software",
  },
];

export function getFeaturePage(slug: string): FeaturePage | undefined {
  return FEATURE_PAGES.find((f) => f.slug === slug);
}
