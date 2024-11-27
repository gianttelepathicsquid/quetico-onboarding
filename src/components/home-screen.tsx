import React from 'react';
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import type { ChecklistItem } from "@/lib/types";

interface HomeScreenProps {
  onNewChecklist: () => void;
  onOpenChecklist: (id: string) => void;
  savedChecklists: ChecklistItem[];
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onNewChecklist,
  onOpenChecklist,
  savedChecklists
}) => (
  <div className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-xl">
    <h1 className="text-3xl font-bold mb-6 text-[#001826]">QUETICO CUSTOMER ONBOARDING</h1>
    
    <div className="space-y-6">
      <Button 
        onClick={onNewChecklist}
        className="w-full h-16 text-lg bg-[#001826] hover:bg-[#00294d] text-white flex items-center justify-center gap-2"
      >
        <Plus className="w-5 h-5" />
        Create New Onboarding Checklist
      </Button>

      {savedChecklists.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-4 text-[#001826]">Saved Checklists</h2>
          <div className="space-y-2">
            {savedChecklists.map(checklist => (
              <Button
                key={checklist.id}
                onClick={() => onOpenChecklist(checklist.id)}
                variant="outline"
                className="w-full h-12 justify-between text-[#001826] border-[#001826]"
              >
                <span>{checklist.customerName}</span>
                <span className="text-sm text-gray-500">
                  Last updated: {new Date(checklist.lastUpdated).toLocaleDateString()}
                </span>
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  </div>
);

// src/components/new-customer-form.tsx
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";

interface NewCustomerFormProps {
  onSubmit: (customerName: string) => void;
  onBack: () => void;
}

export const NewCustomerForm: React.FC<NewCustomerFormProps> = ({ onSubmit, onBack }) => {
  const [customerName, setCustomerName] = useState('');

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-xl">
      <Button 
        onClick={onBack}
        variant="ghost" 
        className="mb-4 text-[#001826] hover:text-[#00294d]"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back
      </Button>

      <h1 className="text-2xl font-bold mb-6 text-[#001826]">New Customer Onboarding</h1>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="customerName" className="block text-sm font-medium text-[#001826] mb-1">
            Customer Name
          </label>
          <Input
            id="customerName"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            className="border-[#001826]"
            placeholder="Enter customer name"
          />
        </div>
        
        <Button 
          onClick={() => onSubmit(customerName)}
          disabled={!customerName.trim()}
          className="w-full bg-[#001826] hover:bg-[#00294d] text-white"
        >
          Create Checklist
        </Button>
      </div>
    </div>
  );
};

// src/components/checklist-item.tsx
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
