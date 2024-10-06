import { lazy } from "react";

const InitialConsultatioRequirmentIcon = lazy(
  () => import("@/assets/vectors/processes/InitialConsultationRequirment.svg?react")
);
const OnboardingTeamIcon = lazy(
  () => import("@/assets/vectors/processes/OnboardingTeam.svg?react")
);
const PerformanceTrackingICon = lazy(
  () => import("@/assets/vectors/processes/PerformanceTracking.svg?react")
);
const CandidateInterviewICon = lazy(
  () => import("@/assets/vectors/processes/CandidateInterview.svg?react")
);
const TalentSourcingIcon = lazy(
  () => import("@/assets/vectors/processes/TalentSourcing.svg?react")
);

export const singlePageItOutsidingProcessesConstants = [
  {
    id: 1,
    Icon: InitialConsultatioRequirmentIcon,
    title: "Initial Consultation & Requirement Gathering",
    description: "",
  },
  {
    id: 2,
    Icon: TalentSourcingIcon,
    title: "Talent Sourcing & Pre-screening",
    description: "",
  },
  {
    id: 3,
    Icon: CandidateInterviewICon,
    title: "Candidate Interview & Selection",
    description: "",
  },
  {
    id: 4,
    Icon: OnboardingTeamIcon,
    title: "Onboarding & Team Integration",
    description: "",
  },
  {
    id: 5,
    Icon: PerformanceTrackingICon,
    title: "Performance Tracking & Continuous Support",
    description: "",
  },
];
