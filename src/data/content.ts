import {
  BookOpen,
  Building2,
  ClipboardCheck,
  FileText,
  GraduationCap,
  Landmark,
  Library,
  Network,
  Newspaper,
  ScrollText,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";

export const site = {
  name: "COBSE",
  fullName: "Council of Boards of School Education in India",
  positioning: "Council of Boards of School Education in India",
  message:
    "Supporting coordination, information sharing and collaboration in school education.",
  email: "info@cobse.org.in",
  altEmail: "cobseboards@gmail.com",
  officeHours: "Monday to Friday, 10:00 – 17:00 IST",
};

export interface QuickLink {
  title: string;
  description: string;
  to: string;
  icon: LucideIcon;
}

export const quickAccess: QuickLink[] = [
  {
    title: "About COBSE",
    description: "Learn what COBSE is, how it is positioned and what it does.",
    to: "/about",
    icon: Landmark,
  },
  {
    title: "Board Verification",
    description: "Use the verification guidance for board and certificate checks.",
    to: "/COBSE-Approval",
    icon: ShieldCheck,
  },
  {
    title: "Member Boards",
    description: "Explore board information and member-directory references.",
    to: "/members",
    icon: Users,
  },
  {
    title: "Educational Boards",
    description: "Review educational board directory information and reference sources.",
    to: "/recognized-educational-boards-list",
    icon: GraduationCap,
  },
  {
    title: "Latest Updates",
    description: "View institutional updates and reference information available on the site.",
    to: "/news",
    icon: Newspaper,
  },
];

export const keyFunctions = [
  {
    title: "Coordination",
    body: "Facilitating communication and cooperation among school education boards across the country.",
    icon: Network,
  },
  {
    title: "Information Sharing",
    body: "Serving as an information and communication platform for member boards and their stakeholders.",
    icon: Library,
  },
  {
    title: "Academic Development",
    body: "Supporting discussions around curriculum, syllabus and educational improvement.",
    icon: BookOpen,
  },
  {
    title: "Quality & Standards",
    body: "Encouraging quality improvement and better examination and assessment practices.",
    icon: ClipboardCheck,
  },
  {
    title: "Policy & Guidance",
    body: "Providing information and guidance related to school education systems and reforms.",
    icon: ScrollText,
  },
  {
    title: "Education Access",
    body: "Supporting initiatives intended to improve access to school education.",
    icon: Building2,
  },
];

export const glanceStats = [
  { value: "1979", label: "Established" },
  { value: "National", label: "Network of school education boards" },
  { value: "India & abroad", label: "Participating and associate boards" },
  { value: "Non-profit", label: "Voluntary institutional character" },
];

export const verificationSteps = [
  {
    step: "Step 1",
    title: "Identify the board",
    body: "Note the exact name of the board, the state or territory it operates in, and the examination or certificate concerned.",
  },
  {
    step: "Step 2",
    title: "Check available recognition or membership information",
    body: "Use the directory on this website for reference information, and check the board's own official website for its current status.",
  },
  {
    step: "Step 3",
    title: "Verify directly with the concerned authority",
    body: "Confirm recognition, affiliation and certificate authenticity with the board itself or the competent education authority of the state or union territory.",
  },
  {
    step: "Step 4",
    title: "Submit a request where applicable",
    body: "Where a board or authority offers a formal verification procedure, submit your request through that channel with the required documents.",
  },
];

export const programmes = [
  {
    title: "Primary School Education",
    body: "Foundational and preparatory stages of school education, generally administered by state school education authorities.",
  },
  {
    title: "Secondary Education",
    body: "Classes leading to the secondary school examination conducted by the relevant board of school education.",
  },
  {
    title: "Senior Secondary Education",
    body: "Higher secondary and intermediate stages leading to senior secondary certification across academic and vocational streams.",
  },
  {
    title: "Diploma Programmes",
    body: "Diploma and certificate programmes offered under the relevant board, council or statutory authority.",
  },
  {
    title: "Open & Distance School Education",
    body: "Open schooling routes for learners who study outside the regular school system.",
  },
  {
    title: "Vocational & Skill Programmes",
    body: "Skill-oriented programmes offered alongside school education by boards and partner institutions.",
  },
];

export const authorities = [
  {
    name: "Ministry of Education, Government of India",
    role: "Central ministry responsible for education policy and coordination.",
    url: "https://www.education.gov.in",
  },
  {
    name: "NCERT",
    role: "National Council of Educational Research and Training — curriculum, textbooks and school education research.",
    url: "https://ncert.nic.in",
  },
  {
    name: "UGC",
    role: "University Grants Commission — coordination and standards in higher education.",
    url: "https://www.ugc.gov.in",
  },
  {
    name: "AICTE",
    role: "All India Council for Technical Education — planning and standards for technical education.",
    url: "https://www.aicte-india.org",
  },
  {
    name: "NCTE",
    role: "National Council for Teacher Education — teacher education norms and standards.",
    url: "https://ncte.gov.in",
  },
  {
    name: "NMC",
    role: "National Medical Commission — regulator for medical education and practice.",
    url: "https://www.nmc.org.in",
  },
  {
    name: "PCI",
    role: "Pharmacy Council of India — regulator for pharmacy education.",
    url: "https://www.pci.nic.in",
  },
  {
    name: "BCI",
    role: "Bar Council of India — regulator for legal education and the legal profession.",
    url: "https://www.barcouncilofindia.org",
  },
  {
    name: "NNC",
    role: "National Nursing and Midwifery Commission — successor regulator for nursing and midwifery education in place of the former Indian Nursing Council.",
    url: "https://www.indiannursingcouncil.org",
  },
];

export interface NewsItem {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  body: string[];
}

/** SAMPLE CONTENT — replace with official COBSE announcements. */
export const news: NewsItem[] = [
  {
    slug: "annual-conference-of-member-boards",
    title: "Annual conference of member boards announced",
    date: "2026-09-12",
    category: "COBSE Updates",
    excerpt:
      "Member boards are invited to the annual conference on assessment reform and examination integrity.",
    body: [
      "The annual conference of member boards will bring together representatives of school education boards to discuss assessment reform, examination integrity and the sharing of good practice.",
      "Sessions will cover question-paper security, result processing, learner support and the use of technology in examinations. Member boards will receive the detailed programme and participation details through official correspondence.",
      "This is sample content included with the new website. Replace it with the official announcement text before publishing.",
    ],
  },
  {
    slug: "guidance-note-on-credential-verification",
    title: "Guidance note on credential verification for institutions",
    date: "2026-08-28",
    category: "Announcements",
    excerpt:
      "A short guidance note explaining how institutions and employers should approach board and certificate verification.",
    body: [
      "Institutions and employers frequently request confirmation of school certificates. Verification should always be completed with the board that issued the certificate, or with the competent education authority of the concerned state or union territory.",
      "The guidance note summarises the steps involved and the information required for a verification request.",
      "This is sample content included with the new website. Replace it with the official note before publishing.",
    ],
  },
  {
    slug: "workshop-on-curriculum-coordination",
    title: "Workshop on curriculum coordination across boards",
    date: "2026-08-05",
    category: "Education",
    excerpt:
      "A workshop for academic officers on curriculum alignment, learning outcomes and question design.",
    body: [
      "Academic officers from participating boards will discuss curriculum alignment, learning outcomes and competency-based question design.",
      "Outcomes of the workshop will be shared with member boards as a summary report.",
      "This is sample content included with the new website. Replace it with the official announcement before publishing.",
    ],
  },
  {
    slug: "updated-directory-of-member-boards",
    title: "Updated directory of member boards published",
    date: "2026-07-19",
    category: "Recognized Boards",
    excerpt:
      "The board directory has been reorganised with state, category and contact information for easier reference.",
    body: [
      "The directory of boards has been reorganised so that visitors can search by board name, state or location, and filter by category and type.",
      "Directory information is provided for reference. Users should confirm current details directly with the concerned board.",
      "This is sample content included with the new website. Replace it with the official update before publishing.",
    ],
  },
  {
    slug: "membership-enquiry-process-simplified",
    title: "Membership enquiry process simplified",
    date: "2026-06-30",
    category: "Membership",
    excerpt:
      "Boards and education bodies can now submit a membership enquiry through a single online form.",
    body: [
      "Boards and education bodies interested in participation can submit an enquiry through the membership form on this website.",
      "Enquiries are reviewed by the secretariat, which responds where appropriate with the applicable requirements.",
      "This is sample content included with the new website. Replace it with the official update before publishing.",
    ],
  },
  {
    slug: "advisory-on-unrecognised-boards",
    title: "Advisory: verify before enrolling with an unfamiliar board",
    date: "2026-06-11",
    category: "Notices",
    excerpt:
      "Students and parents are advised to confirm the status of an education board before enrolment.",
    body: [
      "Students and parents should confirm the status of an education board with the competent authority before enrolment, and should be cautious about claims of recognition that cannot be verified from an official source.",
      "The verification page on this website explains the steps involved.",
      "This is sample content included with the new website. Replace it with the official advisory before publishing.",
    ],
  },
];

export const newsCategories = Array.from(new Set(news.map((n) => n.category))).sort();

export interface NoticeItem {
  title: string;
  date: string;
  category: string;
  size: string;
  description: string;
}

/** SAMPLE CONTENT — replace with official circulars and notices. */
export const notices: NoticeItem[] = [
  {
    title: "Circular: Annual conference participation details",
    date: "2026-09-12",
    category: "Circulars",
    size: "210 KB",
    description: "Participation details and programme outline for member boards.",
  },
  {
    title: "Notice: Guidance on credential verification requests",
    date: "2026-08-28",
    category: "Notices",
    size: "168 KB",
    description:
      "Procedure and information required when requesting certificate verification.",
  },
  {
    title: "Circular: Curriculum coordination workshop",
    date: "2026-08-05",
    category: "Circulars",
    size: "142 KB",
    description: "Agenda and nomination details for academic officers.",
  },
  {
    title: "Guidelines: Membership enquiry and documentation",
    date: "2026-06-30",
    category: "Guidelines",
    size: "255 KB",
    description:
      "Information and documents generally required with a membership enquiry.",
  },
  {
    title: "Notice: Directory update and correction requests",
    date: "2026-07-19",
    category: "Notices",
    size: "120 KB",
    description:
      "How boards can request corrections to their directory information.",
  },
];

export const noticeCategories = Array.from(
  new Set(notices.map((n) => n.category)),
).sort();

export interface ResourceItem {
  title: string;
  category: string;
  description: string;
  icon: LucideIcon;
}

/** SAMPLE CONTENT — replace with the official resource library. */
export const resources: ResourceItem[] = [
  {
    title: "Membership enquiry guidelines",
    category: "Guidelines",
    description:
      "Eligibility information, documentation and the enquiry process for boards and education bodies.",
    icon: FileText,
  },
  {
    title: "Board verification guidance note",
    category: "Guidelines",
    description:
      "Steps for students, institutions and employers seeking to verify a board or certificate.",
    icon: ShieldCheck,
  },
  {
    title: "Directory correction form",
    category: "Forms",
    description:
      "Form for member boards requesting an update to their listed contact information.",
    icon: ClipboardCheck,
  },
  {
    title: "Annual conference summary",
    category: "Publications",
    description:
      "Summary of proceedings and recommendations from the annual conference of member boards.",
    icon: Library,
  },
  {
    title: "Curriculum coordination workshop report",
    category: "Education Resources",
    description:
      "Report on curriculum alignment, learning outcomes and assessment design discussions.",
    icon: BookOpen,
  },
  {
    title: "Frequently asked questions",
    category: "FAQs",
    description:
      "Common questions about COBSE, the board directory, verification and membership.",
    icon: Newspaper,
  },
];

export const resourceCategories = Array.from(
  new Set(resources.map((r) => r.category)),
).sort();

export const faqs = [
  {
    q: "What is COBSE?",
    a: "COBSE stands for the Council of Boards of School Education in India. It is an association of school education boards and related bodies supporting coordination, information sharing and cooperation in the school education ecosystem.",
  },
  {
    q: "Does COBSE regulate every school board in India?",
    a: "No. COBSE is not the statutory regulator of every education board. Recognition, affiliation and approval decisions are made by the relevant competent authority, board or government body as applicable.",
  },
  {
    q: "How do I verify whether a board or certificate is genuine?",
    a: "Check the board’s own official website, confirm the exact board name and certificate details, and verify the status directly with the board or the competent state or central education authority.",
  },
  {
    q: "Where can I find board information on this site?",
    a: "Use the member board information and educational board reference pages on this website. These pages are designed as reference resources and should be checked alongside the relevant official board or authority information.",
  },
  {
    q: "Can a board request correction of their listed information?",
    a: "Boards and institutions may contact the COBSE secretariat with accurate information and official details for review, but all recognition or affiliation status must still be confirmed with the relevant authority.",
  },
  {
    q: "Does COBSE conduct examinations or issue certificates?",
    a: "No. Examinations and certification are typically conducted by the individual school education boards or the competent authority. COBSE does not replace that responsibility.",
  },
];

export const importantLinks = authorities;

export const navItems = [
  { label: "Home", to: "/" },
  { label: "About COBSE", to: "/about" },
  { label: "Recognized Boards", to: "/recognized-boards" },
  { label: "Academic Programmes", to: "/academic-programmes" },
  { label: "Membership", to: "/membership" },
  { label: "Verification", to: "/verification" },
  { label: "Resources", to: "/resources" },
  { label: "News & Updates", to: "/news" },
  { label: "Contact", to: "/contact" },
] as const;
