'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Check } from 'lucide-react';

export default function GetStartedPage() {
  const languages = [
    'English',
    'Spanish',
    'French',
    'German',
    'Italian',
    'Chinese',
    'Japanese',
    'Korean',
  ];

  const levels = [
    'Beginner (A1)',
    'Elementary (A2)',
    'Intermediate (B1)',
    'Upper Intermediate (B2)',
    'Advanced (C1)',
    'Mastery (C2)',
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Start Your Language Journey</h1>
          <p className="text-lg text-muted-foreground">
            Fill out the form below to begin your path to fluency with Se1a Language Academy.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="p-8">
            <form className="space-y-8">
              {/* Personal Information */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold">Personal Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                </div>
              </div>

              {/* Course Preferences */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold">Course Preferences</h2>
                <div>
                  <Label htmlFor="language">Preferred Language</Label>
                  <select
                    id="language"
                    className="w-full px-3 py-2 border rounded-md"
                  >
                    <option value="">Select a language</option>
                    {languages.map((lang) => (
                      <option key={lang} value={lang.toLowerCase()}>
                        {lang}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <Label htmlFor="level">Current Level</Label>
                  <select
                    id="level"
                    className="w-full px-3 py-2 border rounded-md"
                  >
                    <option value="">Select your level</option>
                    {levels.map((level) => (
                      <option key={level} value={level.toLowerCase()}>
                        {level}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <Label>Class Format</Label>
                  <RadioGroup defaultValue="group" className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="group" id="group" />
                      <Label htmlFor="group">Group Classes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="private" id="private" />
                      <Label htmlFor="private">Private Lessons</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="online" id="online" />
                      <Label htmlFor="online">Online Learning</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              {/* Schedule Preferences */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold">Schedule Preferences</h2>
                <div>
                  <Label>Preferred Time</Label>
                  <RadioGroup defaultValue="morning" className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="morning" id="morning" />
                      <Label htmlFor="morning">Morning</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="afternoon" id="afternoon" />
                      <Label htmlFor="afternoon">Afternoon</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="evening" id="evening" />
                      <Label htmlFor="evening">Evening</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              <Button className="w-full" size="lg">
                Submit Application
              </Button>
            </form>
          </Card>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12"
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">Why Choose Se1a?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Experienced native speakers as instructors',
              'Flexible scheduling options',
              'Personalized learning paths',
              'Modern teaching methods',
              'Small class sizes for better attention',
              'Regular progress assessments',
            ].map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-primary" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}