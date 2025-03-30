import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Globe2, BookOpen, Users, Trophy } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Master New Languages, <br />
            Open New Doors
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join Se1a Language Academy and embark on a journey to fluency with our expert
            instructors and innovative learning methods.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Start Learning Now</Button>
            <Button size="lg" variant="outline">
              Explore Courses
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6">
              <Globe2 className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Multiple Languages</h3>
              <p className="text-muted-foreground">
                Choose from a wide range of languages taught by native speakers.
              </p>
            </Card>
            <Card className="p-6">
              <BookOpen className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Expert Instruction</h3>
              <p className="text-muted-foreground">
                Learn from qualified teachers with years of experience.
              </p>
            </Card>
            <Card className="p-6">
              <Users className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Small Classes</h3>
              <p className="text-muted-foreground">
                Personalized attention in small group settings.
              </p>
            </Card>
            <Card className="p-6">
              <Trophy className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Certification</h3>
              <p className="text-muted-foreground">
                Earn recognized certificates upon course completion.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Latest from Our Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden">
                <img
                  src={`https://images.unsplash.com/photo-${i === 1 ? '1546410531-bb4caa7b6737' : i === 2 ? '1523050481-0236a1f53526' : '1571260899358-610d146e735b'}?auto=format&fit=crop&w=800&q=80`}
                  alt="Blog post"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {i === 1
                      ? 'Tips for Learning a New Language'
                      : i === 2
                      ? 'The Benefits of Bilingualism'
                      : 'Cultural Exchange Programs'}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {i === 1
                      ? 'Discover effective strategies for mastering a new language...'
                      : i === 2
                      ? 'Learn about the cognitive advantages of speaking multiple languages...'
                      : 'Explore opportunities for immersive language learning...'}
                  </p>
                  <Link
                    href={`/blog/post-${i}`}
                    className="text-primary hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}