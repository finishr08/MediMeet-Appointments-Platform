import {
  Calendar,
  Video,
  CreditCard,
  User,
  FileText,
  ShieldCheck,
} from "lucide-react";

export const features = [
  {
    icon: <User className="h-6 w-6 text-emerald-400" />,
    title: "Set Up Your Account",
    description:
      "Create your account and update basic information to start exploring digital healthcare solutions.",
  },
  {
    icon: <Calendar className="h-6 w-6 text-emerald-400" />,
    title: "Schedule Visits",
    description:
      "Check doctor schedules and pick the best time slot for in-person or virtual consultations.",
  },
  {
    icon: <Video className="h-6 w-6 text-emerald-400" />,
    title: "Online Doctor Calls",
    description:
      "Talk to certified professionals through private video calls for fast and secure medical help.",
  },
  {
    icon: <CreditCard className="h-6 w-6 text-emerald-400" />,
    title: "Flexible Credit Plans",
    description:
      "Choose from a variety of credit bundles to manage your appointments with ease and flexibility.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-emerald-400" />,
    title: "Trusted Specialists",
    description:
      "Every doctor is thoroughly reviewed and approved to maintain high standards of care.",
  },
  {
    icon: <FileText className="h-6 w-6 text-emerald-400" />,
    title: "Your Health Records",
    description:
      "Download and review past prescriptions, doctor summaries, and diagnostic suggestions anytime.",
  },
];

export const testimonials = [
  {
    initials: "AM",
    name: "Ayesha M.",
    role: "Patient",
    quote:
      "Booking a virtual appointment was smooth and quick. I got expert advice without leaving my house.",
  },
  {
    initials: "DK",
    name: "Dr. Kamran S.",
    role: "General Physician",
    quote:
      "I've been able to treat patients more efficiently through this platform—it truly streamlines everything.",
  },
  {
    initials: "HS",
    name: "Hamza S.",
    role: "Patient",
    quote:
      "Their credit package gave my entire family access to professional care whenever we needed it.",
  },
];

export const creditBenefits = [
  "Every session uses <strong class='text-emerald-400'>2 credits</strong>, no matter how long the consultation is",
  "Your credits <strong class='text-emerald-400'>won't expire</strong>, so you can save them for later",
  "Get <strong class='text-emerald-400'>new credits monthly</strong> with our flexible plans",
  "Pause or stop your subscription <strong class='text-emerald-400'>whenever you like</strong>—no questions asked",
];
