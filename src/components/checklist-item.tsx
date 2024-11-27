"use client";
import React from 'react';
import { Checkbox } from "@/components/ui/checkbox";
import { Clock } from "lucide-react";

interface ChecklistItemProps {
  label: string;
  checked: boolean;
  onToggle: () => void;
  timestamp?: string;
  level?: number;
}

export const ChecklistItem: React.FC<ChecklistItemProps> = ({
  label,
  checked,
  onToggle,
  timestamp,
  level = 0
}) => (
  <div className={`flex items-center space-x-2 mb-2 ml-${level * 4}`}>
    <Checkbox 
      id={label} 
      checked={checked} 
      onCheckedChange={onToggle}
      className="border-2 border-[#001826] data-[state=checked]:bg-[#001826] data-[state=checked]:border-[#001826]"
    />
    <div className="flex flex-col">
      <label htmlFor={label} className="text-sm font-medium leading-none text-[#001826]">
        {label}
      </label>
      {timestamp && (
        <span className="text-xs text-[#00294d] flex items-center mt-1">
          <Clock className="w-3 h-3 mr-1" />
          {new Date(timestamp).toLocaleString()}
        </span>
      )}
    </div>
  </div>
);
