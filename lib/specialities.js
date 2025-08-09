import {
  HeartPulse,
  Stethoscope,
  Bone,
  Eye,
  Baby,
  Brain,
  Target,
  Milestone,
  Microscope,
  Timer,
  Activity,
  CircleDot,
  Ambulance,
  FlaskConical,
  Dumbbell,
  SyringeIcon,
  DropletIcon,
  ScissorsIcon,
} from "lucide-react";

export const SPECIALTIES = [
  {
    name: "General Medicine",
    icon: <Stethoscope className="h-5 w-5" />,
  },
  {
    name: "Emergency Medicine",
    icon: <Ambulance className="h-5 w-5" />,
  },
  {
    name: "Cardiology",
    icon: <HeartPulse className="h-5 w-5" />,
  },
  {
    name: "Dermatology",
    icon: <CircleDot className="h-5 w-5" />,
  },
  {
    name: "Endocrinology",
    icon: <Timer className="h-5 w-5" />,
  },
  {
    name: "Neurology",
    icon: <Brain className="h-5 w-5" />,
  },
  {
    name: "Oncology",
    icon: <Target className="h-5 w-5" />,
  },
  {
    name: "Ophthalmology",
    icon: <Eye className="h-5 w-5" />,
  },
  {
    name: "Orthopedics",
    icon: <Bone className="h-5 w-5" />,
  },
  {
    name: "Pediatrics",
    icon: <Baby className="h-5 w-5" />,
  },
  {
    name: "Psychiatry",
    icon: <Brain className="h-5 w-5" />,
  },
  {
    name: "Pulmonology",
    icon: <Activity className="h-5 w-5" />,
  },
  {
    name: "Radiology",
    icon: <CircleDot className="h-5 w-5" />,
  },
  {
    name: "Urology",
    icon: <Milestone className="h-5 w-5" />,
  },
  {
    name: "Anesthesiology",
    icon: <SyringeIcon className="h-5 w-5" />,
  },

  {
    name: "Nephrology",
    icon: <DropletIcon className="h-5 w-5" />,
  },
  {
    name: "Pathology",
    icon: <FlaskConical className="h-5 w-5" />,
  },
  {
    name: "Sports Medicine",
    icon: <Dumbbell className="h-5 w-5" />,
  },
  {
    name: "Plastic Surgery",
    icon: <ScissorsIcon className="h-5 w-5" />,
  },
    {
    name: "Other",
    icon: <Microscope className="h-5 w-5" />,
  },
];
