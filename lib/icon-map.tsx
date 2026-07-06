import {
  Smartphone,
  Server,
  Sparkles,
  Rocket,
  Layout,
  Database,
  Cloud,
  Container,
  type LucideIcon,
} from "lucide-react";

export const ICON_MAP: Record<string, LucideIcon> = {
  Smartphone,
  Server,
  Sparkles,
  Rocket,
  Layout,
  Database,
  Cloud,
  Container,
};

export function getIcon(name: string): LucideIcon {
  return ICON_MAP[name] ?? Sparkles;
}
