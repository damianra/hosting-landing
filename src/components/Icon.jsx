import {
  Gauge,
  HardDrive,
  ShieldCheck,
  Database,
  Headphones,
  Rocket,
  Server,
  Cpu,
  Globe,
  Zap,
  Sparkles,
} from 'lucide-react';

const MAP = {
  gauge: Gauge,
  'hard-drive': HardDrive,
  'shield-check': ShieldCheck,
  database: Database,
  headphones: Headphones,
  rocket: Rocket,
  server: Server,
  cpu: Cpu,
  globe: Globe,
  zap: Zap,
};

export default function Icon({ name, ...props }) {
  const Cmp = MAP[name] || Sparkles;
  return <Cmp {...props} />;
}
