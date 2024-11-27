import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Save } from "lucide-react";
import { HomeScreen } from './home-screen';
import { NewCustomerForm } from './new-customer-form';
import { ChecklistSection } from './checklist-section';
import { sections } from '@/data/sections';
import type { ChecklistItem } from '@/lib/types';

export const QueticoOnboardingApp: React.FC = () => {
  const [screen, setScreen] = useState<'home' | 'new' | 'checklist'>('home');
  const [savedChecklists, setSavedChecklists] = useState<ChecklistItem[]>([]);
  const [currentChecklist, setCurrentChecklist] = useState<ChecklistItem | null>(null);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [timestamps, setTimestamps] = useState<Record<string, string>>({});
  const [overallProgress, setOverallProgress] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem('queticoChecklists');
    if (saved) {
      setSavedChecklists(JSON.parse(saved));
    }
  }, []);

  const handleNewChecklist = () => {
    setScreen('new');
  };

  const handleCreateChecklist = (customerName: string) => {
    const newChecklist: ChecklistItem = {
      id: Date.now().toString(),
      customerName,
      lastUpdated: new Date().toISOString(),
      checkedItems: {},
      timestamps: {}
    };

    setSavedChecklists(prev => {
      const updated = [...prev, newChecklist];
      localStorage.setItem('queticoChecklists', JSON.stringify(updated));
      return updated;
    });

    setCurrentChecklist(newChecklist);
    setCheckedItems({});
    setTimestamps({});
    setScreen('checklist');
  };

  const handleOpenChecklist = (id: string) => {
    const checklist = savedChecklists.find(c => c.id === id);
    if (checklist) {
      setCurrentChecklist(checklist);
      setCheckedItems(checklist.checkedItems || {});
      setTimestamps(checklist.timestamps || {});
      setScreen('checklist');
    }
  };

  const handleSaveChecklist = () => {
    if (currentChecklist) {
      const updatedChecklist = {
        ...currentChecklist,
        lastUpdated: new Date().toISOString(),
        checkedItems,
        timestamps
      };

      setSavedChecklists(prev => {
        const updated = prev.map(c => 
          c.id === currentChecklist.id ? updatedChecklist : c
        );
        localStorage.setItem('queticoChecklists', JSON.stringify(updated));
        return updated;
      });
    }
  };

  const handleItemToggle = (item: string) => {
    setCheckedItems(prevState => {
      const newState = {
        ...prevState,
        [item]: !prevState[item]
      };
      
      if (newState[item]) {
        setTimestamps(prev => ({
          ...prev,
          [item]: new Date().toISOString()
        }));
      } else {
        setTimestamps(prev => {
          const newTimestamps = { ...prev };
          delete newTimestamps[item];
          return newTimestamps;
        });
      }
      
      return newState;
    });
  };

  useEffect(() => {
    if (screen === 'checklist') {
      const calculateOverallProgress = () => {
        let totalItems = 0;
        let completedItems = 0;

        const countItems = (items: (string | { title: string; items: any[] })[]) => {
          items.forEach(item => {
            if (typeof item === 'string') {
              totalItems++;
              if (checkedItems[item]) completedItems++;
            } else {
              if (item.items) countItems(item.items);
            }
          });
        };

        countItems(sections.flatMap(section => section.items));
        return totalItems ? (completedItems / totalItems) * 100 : 0;
      };

      setOverallProgress(calculateOverallProgress());
    }
  }, [checkedItems, screen]);

  if (screen === 'home') {
    return (
      <HomeScreen 
        onNewChecklist={handleNewChecklist}
        onOpenChecklist={handleOpenChecklist}
        savedChecklists={savedChecklists}
      />
    );
  }

  if (screen === 'new') {
    return (
      <NewCustomerForm 
        onSubmit={handleCreateChecklist}
        onBack={() => setScreen('home')}
      />
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-xl">
      <div className="flex justify-between items-center mb-6">
        <Button 
          onClick={() => setScreen('home')}
          variant="ghost" 
          className="text-[#001826] hover:text-[#00294d]"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>
        <Button 
          onClick={handleSaveChecklist}
          className="bg-[#001826] hover:bg-[#00294d] text-white"
        >
          <Save className="w-4 h-4 mr-2" />
          Save Progress
        </Button>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 text-[#001826]">
          {currentChecklist?.customerName} - Onboarding Checklist
        </h1>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-lg text-[#001826]">Overall Progress</span>
            <span className="text-[#00294d]">{Math.round(overallProgress)}%</span>
          </div>
          <Progress value={overallProgress} className="h-3" />
        </div>
      </div>

      {sections.map((section, index) => (
        <ChecklistSection
          key={index}
          title={section.title}
          items={section.items}
          checkedItems={checkedItems}
          onItemToggle={handleItemToggle}
          timestamps={timestamps}
        />
      ))}
    </div>
  );
};
