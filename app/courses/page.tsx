'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, BookOpen, Clock, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const courses = [
  {
    level: 'Basic (A1-A2)',
    title: 'Foundation English',
    description: 'Perfect for beginners looking to build a strong foundation in English.',
    duration: '3 months',
    classSize: '8-10 students',
    price: '$299',
    features: [
      'Basic grammar and vocabulary',
      'Essential conversation skills',
      'Reading comprehension basics',
      'Introduction to writing',
      'Pronunciation fundamentals',
      'Basic listening skills'
    ],
    color: 'bg-blue-50 dark:bg-blue-950',
    badge: 'Popular Choice',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80'
  },
  {
    level: 'Intermediate (B1-B2)',
    title: 'Progressive English',
    description: 'Advance your English skills and gain confidence in more complex situations.',
    duration: '4 months',
    classSize: '6-8 students',
    price: '$399',
    features: [
      'Advanced grammar structures',
      'Business English introduction',
      'Academic writing skills',
      'Public speaking practice',
      'Complex listening exercises',
      'Cultural context studies'
    ],
    color: 'bg-green-50 dark:bg-green-950',
    badge: 'Most Popular',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80'
  },
  {
    level: 'Advanced (C1-C2)',
    title: 'Mastery English',
    description: 'Achieve native-like fluency and master complex aspects of English.',
    duration: '6 months',
    classSize: '4-6 students',
    price: '$599',
    features: [
      'Native-level vocabulary',
      'Advanced business communication',
      'Academic research writing',
      'Debate and presentation skills',
      'Literature analysis',
      'Professional content creation'
    ],
    color: 'bg-purple-50 dark:bg-purple-950',
    badge: 'Expert Level',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80'
  }
];

export default function CoursesPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">English Language Courses</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect course for your English learning journey. From basics to advanced mastery,
            we have the right program to help you achieve your language goals.
          </p>
        </motion.div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.level}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className={`overflow-hidden h-full ${course.color}`}>
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 right-4 bg-primary">
                    {course.badge}
                  </Badge>
                </div>
                
                <div className="p-6">
                  <h3 className="text-sm font-semibold text-primary mb-2">
                    {course.level}
                  </h3>
                  <h2 className="text-2xl font-bold mb-4">{course.title}</h2>
                  <p className="text-muted-foreground mb-6">
                    {course.description}
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-primary" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-primary" />
                      <span>{course.classSize}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <BookOpen className="w-5 h-5 text-primary" />
                      <span>Certified Program</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    {course.features.map((feature, i) => (
                      <div key={i} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-1" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <div className="text-3xl font-bold text-center">
                      {course.price}
                      <span className="text-base font-normal text-muted-foreground">
                        /course
                      </span>
                    </div>
                    <Link href="/get-started" className="block">
                      <Button className="w-full group">
                        Enroll Now
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Learn English with Se1a?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Expert Teachers',
                description: 'Learn from certified native speakers with years of experience.',
                icon: Users
              },
              {
                title: 'Small Classes',
                description: 'Personalized attention in small groups for better learning.',
                icon: BookOpen
              },
              {
                title: 'Flexible Schedule',
                description: 'Choose from multiple time slots that fit your schedule.',
                icon: Clock
              },
              {
                title: 'Proven Method',
                description: 'Our teaching methodology ensures fast and effective learning.',
                icon: CheckCircle
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center h-full">
                  <feature.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <Card className="p-12 bg-primary text-primary-foreground">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your English Journey?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of successful students who have transformed their lives
              through our English courses.
            </p>
            <Link href="/get-started">
              <Button size="lg" variant="secondary">
                Get Started Today
              </Button>
            </Link>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}