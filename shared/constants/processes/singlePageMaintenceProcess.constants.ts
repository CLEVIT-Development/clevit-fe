import { lazy } from "react";

const InitialWebsiteAuditIcon = lazy(
  () => import("../../../assets/vectors/processes/InitialWebsiteAudit.svg")
);
const PerformanceSecurityIcon = lazy(
  () => import("../../../assets/vectors/processes/PerformanceSecurity.svg")
);
const RegularUpdatesIcon = lazy(
  () => import("../../../assets/vectors/processes/RegularUpdates.svg")
);
const BugFixingIcon = lazy(() => import("../../../assets/vectors/processes/BugFixing.svg"));
const BackupRecoveryIcon = lazy(
  () => import("../../../assets/vectors/processes/BackupRecovery.svg")
);
const OngoingSupporMaintencetIcon = lazy(
  () => import("../../../assets/vectors/processes/OngoingSupportMaintence.svg")
);

export const singlePageMaintenceProcessesConstants = [
  {
    id: 1,
    Icon: InitialWebsiteAuditIcon,
    title: "Initial Website Audit",
    description: "",
  },
  {
    id: 2,
    Icon: PerformanceSecurityIcon,
    title: "Performance & Security Monitoring",
    description: "",
  },
  {
    id: 3,
    Icon: RegularUpdatesIcon,
    title: "Regular Updates & Patching",
    description: "",
  },
  {
    id: 4,
    Icon: BugFixingIcon,
    title: "Bug Fixing & Error Resolution",
    description: "",
  },
  {
    id: 5,
    Icon: BackupRecoveryIcon,
    title: "Backup & Recovery Planning",
    description: "",
  },
  {
    id: 6,
    Icon: OngoingSupporMaintencetIcon,
    title: "Ongoing Support & Maintenance",
    description: "",
  },
];
