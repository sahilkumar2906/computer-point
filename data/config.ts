import {
  ClipboardList,
  GraduationCap,
  Landmark,
  CreditCard,
  Fingerprint,
  Printer,
  Copy,
  FileText,
  Building2,
  PencilLine,
  FileCheck,
  Monitor,
  Wifi,
  UploadCloud,
  Camera,
  Sparkles,
  Users,
  Zap,
  Clock,
  ShieldCheck,
  UserCheck,
  Wallet,
  Layers,
  BadgeCheck,
  BookOpen,
  Award,
} from "lucide-react";
import type {
  NavLink,
  Service,
  Testimonial,
  StatItem,
  FeatureItem,
  FAQItem,
  ProcessStep,
  OpeningHour,
} from "@/types";

/**
 * ------------------------------------------------------------------------
 *  BUSINESS CONFIGURATION
 *  This is the ONLY file you need to edit to rebrand this website.
 *  Replace every [BRACKETED] placeholder with your real business details.
 * ------------------------------------------------------------------------
 */
export const siteConfig = {
  businessName: "KHUSHI COMPUTER POINT",
  tagline: "Your Trusted Digital & Computer Service Center",
  description:
    "We provide computer, online, documentation, scholarship, and everyday digital services for students, families, and local businesses — fast, accurate, and affordable.",
  address: "GALI NO.12, NEAR BAKERY SHOP GOPAL NAGAR, NAJFGARH, DELHI-110043",
  phone: "9958261028,9718181620,9718737644,9540886384",
  whatsapp: "9958261028",
  email: "khushirani1983@gmail.com",
  mapsEmbedUrl: "https://maps.app.goo.gl/z8G41C6KrNDi5RGS9",
  mapsLink: "https://maps.app.goo.gl/z8G41C6KrNDi5RGS9",
  // Used for SEO metadata (sitemap, Open Graph). Update before deploying.
  siteUrl: "https://www.yourcomputerpoint.example",
};

export const openingHours: OpeningHour[] = [
  { day: "Monday – Saturday", hours: "9:30 AM – 8:30 PM" },
  { day: "Sunday", hours: "10:00 AM – 2:00 PM" },
];

export const socialLinks = {
  facebook: "#",
  instagram: "#",
  youtube: "#",
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Scholarship", href: "/scholarship" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

/** Every service offered — shown in full on the Services page. */
export const services: Service[] = [
  {
    slug: "online-form-filling",
    icon: ClipboardList,
    title: "Online Form Filling",
    description:
      "Accurate filling and submission of all types of online forms — government, private, and institutional — completed correctly the first time.",
  },
  {
    slug: "scholarship-applications",
    icon: GraduationCap,
    title: "Scholarship Applications",
    description:
      "End-to-end help applying for pre-matric, post-matric, and government scholarship schemes, from document checks to final submission.",
  },
  {
    slug: "government-forms",
    icon: Landmark,
    title: "Government Forms",
    description:
      "Assistance with income certificates, caste certificates, ration card applications, and other essential government documentation.",
  },
  {
    slug: "pan-card-services",
    icon: CreditCard,
    title: "PAN Card Services",
    description:
      "New PAN card applications, corrections, and reprints handled with complete guidance on the required documents.",
  },
  {
    slug: "aadhaar-assistance",
    icon: Fingerprint,
    title: "Aadhaar-related Assistance",
    description:
      "Support with Aadhaar enrolment, updates to your address, mobile number, or date of birth, and downloading your e-Aadhaar.",
  },
  {
    slug: "printing-scanning",
    icon: Printer,
    title: "Printing & Scanning",
    description:
      "High-quality black & white and colour printing, plus fast document scanning in PDF or image format.",
  },
  {
    slug: "photocopy",
    icon: Copy,
    title: "Photocopy",
    description:
      "Quick, affordable photocopying for single pages or bulk documents, available while you wait.",
  },
  {
    slug: "resume-cv-creation",
    icon: FileText,
    title: "Resume/CV Creation",
    description:
      "Professionally formatted resumes and CVs designed to help you stand out for job applications and interviews.",
  },
  {
    slug: "college-university-applications",
    icon: Building2,
    title: "College/University Applications",
    description:
      "Guidance and form-filling support for college and university admission applications, both online and offline.",
  },
  {
    slug: "exam-form-filling",
    icon: PencilLine,
    title: "Exam Form Filling",
    description:
      "Timely, error-free filling of competitive and board exam application forms before the deadline.",
  },
  {
    slug: "admit-card-results",
    icon: FileCheck,
    title: "Admit Card & Result Services",
    description:
      "Download and printing of admit cards, hall tickets, and exam results directly from official portals.",
  },
  {
    slug: "computer-services",
    icon: Monitor,
    title: "Computer Services",
    description:
      "Basic computer troubleshooting, software installation, and system setup for individuals and small offices.",
  },
  {
    slug: "internet-services",
    icon: Wifi,
    title: "Internet Services",
    description:
      "High-speed internet access for browsing, downloads, online applications, and video calls.",
  },
  {
    slug: "document-upload",
    icon: UploadCloud,
    title: "Document Upload",
    description:
      "Secure scanning and uploading of certificates, photos, and signatures for online applications and portals.",
  },
  {
    slug: "passport-photos",
    icon: Camera,
    title: "Passport-size Photos",
    description:
      "Instant passport-size and application-specific photographs, printed on the spot in the correct format.",
  },
  {
    slug: "other-digital-services",
    icon: Sparkles,
    title: "Other Digital Services",
    description:
      "From email account setup to online bill payments, we help with everyday digital tasks big and small.",
  },
];

/** Slugs featured in the Home page services overview (subset of the full list). */
const featuredServiceSlugs = [
  "scholarship-applications",
  "pan-card-services",
  "aadhaar-assistance",
  "printing-scanning",
  "resume-cv-creation",
  "computer-services",
];

export const featuredServices = services.filter((s) =>
  featuredServiceSlugs.includes(s.slug)
);

export const stats: StatItem[] = [
  { icon: Users, value: "1000+", label: "Customers Served" },
  { icon: FileCheck, value: "500+", label: "Applications Completed" },
  { icon: Zap, value: "Fast & Reliable", label: "Service, Every Time" },
];

export const whyChooseUs: FeatureItem[] = [
  {
    icon: Clock,
    title: "Fast & Reliable Turnaround",
    description:
      "Most forms, prints, and documentation are completed the same day, so you're never left waiting.",
  },
  {
    icon: ShieldCheck,
    title: "Accurate & Verified Process",
    description:
      "Every application and document is double-checked before submission to avoid errors and rejections.",
  },
  {
    icon: UserCheck,
    title: "Experienced, Friendly Team",
    description:
      "Our trained staff explain every step clearly and are happy to help in both Hindi and English.",
  },
  {
    icon: Wallet,
    title: "Affordable, Transparent Pricing",
    description:
      "Clear, upfront charges for every service — no hidden costs or surprise fees.",
  },
  {
    icon: Layers,
    title: "One-Stop Digital Solution",
    description:
      "From scholarships to PAN cards to printing — handle all your documentation needs under one roof.",
  },
  {
    icon: BadgeCheck,
    title: "Trusted by the Local Community",
    description:
      "Over a thousand students and families rely on us for their everyday digital and documentation needs.",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Rohit Verma",
    role: "B.Com Student",
    quote:
      "I was confused about which scholarship to apply for and kept missing document requirements. The team here checked everything, filled my form correctly, and I had my acknowledgement the same day.",
    rating: 5,
  },
  {
    name: "Sunita Devi",
    role: "Local Resident",
    quote:
      "I needed my Aadhaar address updated and a new PAN card for my son. Both were done in one visit without any errors. Very patient staff — they explained everything clearly.",
    rating: 5,
  },
  {
    name: "Aman Kumar",
    role: "Job Seeker",
    quote:
      "Got a professional resume made here before my interviews. Clean formatting, no mistakes, and they even printed extra copies for me. Highly recommend for students and job seekers.",
    rating: 4,
  },
];

export const scholarshipCategories: FeatureItem[] = [
  {
    icon: GraduationCap,
    title: "Pre-Matric Scholarships",
    description:
      "Financial support for students studying before Class 10, helping ease the cost of school education.",
  },
  {
    icon: BookOpen,
    title: "Post-Matric Scholarships",
    description:
      "For students pursuing education after Class 10 — including college, diploma, and university courses.",
  },
  {
    icon: Award,
    title: "Merit-cum-Means Scholarships",
    description:
      "For meritorious students from economically weaker backgrounds who need financial support to continue studying.",
  },
  {
    icon: Users,
    title: "Minority Scholarships",
    description:
      "Scholarship schemes for students belonging to notified minority communities, at school and college level.",
  },
  {
    icon: Landmark,
    title: "State Government Scholarships",
    description:
      "State-specific scholarship schemes for residents, including category-based and merit-based options.",
  },
  {
    icon: Building2,
    title: "Central / NSP Schemes",
    description:
      "Central government scholarships processed through the National Scholarship Portal (NSP) for eligible students.",
  },
];

export const eligibilityCriteria: string[] = [
  "Indian citizen and resident of the applicable state or union territory",
  "Currently enrolled in a recognized school, college, or university",
  "Family annual income within the limit specified by the scheme",
  "Minimum academic percentage/marks as required by the scheme",
  "Valid category certificate where applicable (SC/ST/OBC/EWS/Minority)",
  "Not currently receiving another conflicting scholarship, as per scheme rules",
];

export const requiredDocuments: string[] = [
  "Aadhaar card",
  "Recent passport-size photograph",
  "Bank passbook (Aadhaar-linked, IFSC code visible)",
  "Previous year's mark sheet or result",
  "Bona-fide / admission certificate from your institution",
  "Income certificate issued by a competent authority",
  "Caste, EWS, or minority certificate (if applicable)",
];

export const applicationProcessSteps: ProcessStep[] = [
  {
    title: "Visit or Enquire",
    description:
      "Walk in or share your basic details with us so we can understand which scholarship scheme fits you.",
  },
  {
    title: "Document Check",
    description:
      "Our team reviews your documents and confirms your eligibility for the relevant scheme.",
  },
  {
    title: "Form Filling",
    description:
      "We accurately complete your application on the correct government or institutional portal.",
  },
  {
    title: "Submission & Receipt",
    description:
      "Your application is submitted and you receive an acknowledgement or reference number.",
  },
  {
    title: "Status Follow-Up",
    description:
      "We help you track your application status and resolve any portal queries until it's approved.",
  },
];

export const importantDatePhases: ProcessStep[] = [
  {
    title: "Portal Opens",
    description:
      "The scholarship portal is activated for new and renewal applications for the academic year.",
  },
  {
    title: "Application Window",
    description:
      "Students can submit applications along with required documents before the deadline.",
  },
  {
    title: "Verification Period",
    description:
      "Institutions and departments verify the submitted applications and documents.",
  },
  {
    title: "Disbursal",
    description:
      "Approved scholarship amounts are disbursed directly to the student's linked bank account.",
  },
];

export const scholarshipFAQs: FAQItem[] = [
  {
    question: "Which scholarships can you help me apply for?",
    answer:
      "We assist with pre-matric, post-matric, merit-based, minority, state government, and central government (NSP) scholarship schemes, based on your eligibility.",
  },
  {
    question: "Is there a charge for scholarship application assistance?",
    answer:
      "Charges depend on the scheme and documentation involved. Visit us or contact our team for current pricing before you apply.",
  },
  {
    question: "What if I'm missing some required documents?",
    answer:
      "Let us know what you have — our team will guide you on how and where to obtain any missing documents before submission.",
  },
  {
    question: "How long does the application process take?",
    answer:
      "Most applications are completed the same day, provided all required documents are ready at the time of your visit.",
  },
  {
    question: "Can you help me check my application status later?",
    answer:
      "Yes — bring your acknowledgement or reference number and we'll help you track the status or resolve any portal issues.",
  },
  {
    question: "Do I need to create my own account on the scholarship portal?",
    answer:
      "In most cases, we handle registration and submission for you. We'll explain what's needed on a case-by-case basis.",
  },
];

export const categoryOptions = ["General", "OBC", "SC", "ST", "EWS", "Minority", "Other"];

export const scholarshipTypeOptions = [
  "Pre-Matric Scholarship",
  "Post-Matric Scholarship",
  "Merit-cum-Means Scholarship",
  "Minority Scholarship",
  "State Government Scholarship",
  "Central Government / NSP Scheme",
  "Other",
];
