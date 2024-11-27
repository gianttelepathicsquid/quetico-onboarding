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
