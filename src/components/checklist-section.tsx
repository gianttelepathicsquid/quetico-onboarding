import React from 'react';
import { Progress } from "@/components/ui/progress";
import { ChecklistItem } from './checklist-item';
import type { SubSection } from '@/lib/types';

interface ChecklistSectionProps {
  title: string;
  items: (string | SubSection)[];
  checkedItems: Record<string, boolean>;
  onItemToggle: (item: string) => void;
  timestamps: Record<string, string>;
  level?: number;
}

export const ChecklistSection: React.FC<ChecklistSectionProps> = ({
  title,
  items,
  checkedItems,
  onItemToggle,
  timestamps,
  level = 0
}) => {
  const calculateSectionProgress = () => {
    let totalItems = 0;
    let completedItems = 0;

    const countItems = (items: (string | SubSection)[]) => {
      items.forEach(item => {
        if (typeof item === 'string') {
          totalItems++;
          if (checkedItems[item]) completedItems++;
        } else {
          if (item.items) countItems(item.items);
        }
      });
    };

    countItems(items);
    return totalItems ? (completedItems / totalItems) * 100 : 0;
  };

  return (
    <div className={`mb-6 ml-${level * 4}`}>
      <div className="flex flex-col space-y-2 mb-4">
        <h3 className={`text-${level === 0 ? 'lg' : 'md'} font-semibold text-[#001826]`}>
          {title}
        </h3>
        <div className="flex items-center space-x-2">
          <Progress value={calculateSectionProgress()} className="h-2" />
          <span className="text-[#00294d] text-sm w-12">
            {Math.round(calculateSectionProgress())}%
          </span>
        </div>
      </div>
      {items.map((item, index) => (
        typeof item === 'string' ? (
          <ChecklistItem
            key={index}
            label={item}
            checked={checkedItems[item]}
            onToggle={() => onItemToggle(item)}
            timestamp={timestamps[item]}
            level={level + 1}
          />
        ) : (
          <ChecklistSection
            key={index}
            title={item.title}
            items={item.items}
            checkedItems={checkedItems}
            onItemToggle={onItemToggle}
            timestamps={timestamps}
            level={level + 1}
          />
        )
      ))}
    </div>
  );
};
