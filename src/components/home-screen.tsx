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
