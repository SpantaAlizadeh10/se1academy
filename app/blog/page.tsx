"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "Tips for Learning a New Language",
    excerpt:
      "Discover effective strategies for mastering a new language quickly and efficiently...",
    image:
      "https://images.unsplash.com/photo-1546410531-bb4caa7b6737?auto=format&fit=crop&w=800&q=80",
    date: "2024-03-20",
    category: "Learning Tips",
  },
  {
    id: 2,
    title: "The Benefits of Bilingualism",
    excerpt:
      "Learn about the cognitive advantages of speaking multiple languages and how it can enhance your career...",
    image:
      "https://images.unsplash.com/photo-1523050481-0236a1f53526?auto=format&fit=crop&w=800&q=80",
    date: "2024-03-18",
    category: "Research",
  },
  {
    id: 3,
    title: "Cultural Exchange Programs",
    excerpt:
      "Explore opportunities for immersive language learning through cultural exchange programs...",
    image:
      "https://images.unsplash.com/photo-1571260899358-610d146e735b?auto=format&fit=crop&w=800&q=80",
    date: "2024-03-15",
    category: "Programs",
  },
  {
    id: 4,
    title: "Language Learning Apps Review",
    excerpt:
      "A comprehensive comparison of popular language learning applications and their effectiveness...",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    date: "2024-03-12",
    category: "Technology",
  },
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>

      <div className="mb-8">
        <Input
          type="search"
          placeholder="Search posts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-md"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <Card key={post.id} className="overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-muted-foreground">
                  {post.date}
                </span>
                <span className="text-sm text-primary">{post.category}</span>
              </div>
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-muted-foreground mb-4">{post.excerpt}</p>
              <Link
                href={`/blog/${post.id}`}
                className="text-primary hover:underline"
              >
                Read More →
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
