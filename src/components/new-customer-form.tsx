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
