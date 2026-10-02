"use client";

import * as LucideIcons from "lucide-react";

/**
 * Renders a Lucide icon by string name.
 * Falls back to a dot if the icon name is not found.
 */
export default function Icon({ name, size = 18, className = "" }) {
  const LucideIcon = LucideIcons[name];
  if (!LucideIcon) {
    return <span className={`inline-block w-4 h-4 rounded-full bg-zinc-300 ${className}`} aria-hidden="true" />;
  }
  return <LucideIcon size={size} className={className} aria-hidden="true" />;
}
