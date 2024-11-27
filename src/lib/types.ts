// src/lib/utils.ts
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// src/lib/types.ts (separate file)
export interface ChecklistItem {
  id: string;
  customerName: string;
  lastUpdated: string;
  checkedItems: Record<string, boolean>;
  timestamps: Record<string, string>;
}

export interface Section {
  title: string;
  items: (string | SubSection)[];
}

export interface SubSection {
  title: string;
  items: (string | SubSection)[];
}
