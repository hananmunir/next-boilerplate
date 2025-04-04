"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    address: "",
    city: "",
    country: "",
    state: "",
    zipCode: "",
    newsletter: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (checked) => {
    setFormData({
      ...formData,
      newsletter: checked,
    });
  };

  const handleSelectChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
  };

  return (
    <div className="p-3 bg-white">
      <div className="mb-4 flex justify-end">
        <img src="/logo.png" alt="TRACK TEC" className="h-14" />
      </div>

      <div className="mb-4">
        <p className="text-xs text-gray-600">
          Fill out the form below for a custom quote from your local dealer.
          After your dealer receives your configuration, they will contact you
          with a total purchase price.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="grid grid-cols-1 gap-3">
          <div className="space-y-1">
            <Label htmlFor="firstName" className="text-sm">
              First Name:
            </Label>
            <Input
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="h-8 text-sm"
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="lastName" className="text-sm">
              Last Name:
            </Label>
            <Input
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="h-8 text-sm"
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="email" className="text-sm">
              Email Address:
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="h-8 text-sm"
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="phone" className="text-sm">
              Phone Number:
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
              className="h-8 text-sm"
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="company" className="text-sm">
              Company:
            </Label>
            <Input
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="h-8 text-sm"
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="address" className="text-sm">
              Address:
            </Label>
            <Input
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="h-8 text-sm"
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="city" className="text-sm">
              City:
            </Label>
            <Input
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className="h-8 text-sm"
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="country" className="text-sm">
              Country:
            </Label>
            <Select
              value={formData.country}
              onValueChange={(value) => handleSelectChange("country", value)}
            >
              <SelectTrigger id="country" className="h-8 text-sm w-full">
                <SelectValue placeholder="-- Select --" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="ca">Canada</SelectItem>
                <SelectItem value="mx">Mexico</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1">
            <Label htmlFor="state" className="text-sm">
              State/Province:
            </Label>
            <Select
              value={formData.state}
              onValueChange={(value) => handleSelectChange("state", value)}
            >
              <SelectTrigger id="state" className="h-8 text-sm w-full">
                <SelectValue placeholder="-- Select --" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="al">Alabama</SelectItem>
                <SelectItem value="ak">Alaska</SelectItem>
                <SelectItem value="az">Arizona</SelectItem>
                <SelectItem value="ca">California</SelectItem>
                {/* Add more states as needed */}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1">
            <Label htmlFor="zipCode" className="text-sm">
              ZIP/Postal Code:
            </Label>
            <Input
              id="zipCode"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              required
              className="h-8 text-sm"
            />
          </div>

          <div className="flex items-center space-x-2 pt-1">
            <Checkbox
              id="newsletter"
              checked={formData.newsletter}
              onCheckedChange={handleCheckboxChange}
            />
            <Label htmlFor="newsletter" className="text-xs">
              Sign up for the latest products and special offers
            </Label>
          </div>

          <Button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-700 text-white mt-2 font-bold text-sm py-1"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
