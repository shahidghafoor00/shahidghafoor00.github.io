export const GRADIENTS: Record<string, string> = {
  "orange-rose": "from-orange-500 to-rose-500",
  "sky-emerald": "from-sky-500 to-emerald-500",
  "violet-fuchsia": "from-violet-500 to-fuchsia-500",
  "amber-orange": "from-amber-500 to-orange-500",
  "blue-cyan": "from-blue-500 to-cyan-500",
  "emerald-teal": "from-emerald-500 to-teal-500",
  "pink-rose": "from-pink-500 to-rose-500",
  "indigo-blue": "from-indigo-500 to-blue-500",
};

export function getGradient(key: string): string {
  return GRADIENTS[key] ?? GRADIENTS["blue-cyan"];
}
