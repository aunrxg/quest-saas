import { FeatureCard, PricingCard, TestimonialCard } from "@/components/index";
import { Button } from "@/components/ui/button";
import { CheckCircle, Headphones, ListMusic, Music, Radio, Users } from "lucide-react";
import Image from "next/image";


export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative flex justify-center items-center py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-violet-700/5 -z-10" />
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Everyone&apos;s a DJ with <span className="text-violet-600">MixQueue</span>
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Create a music room, invite friends, and let everyone vote on what plays next. No more fighting over
                  the playlist at your next party.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="font-medium bg-violet-600 hover:bg-violet-700 cursor-pointer">
                  Create Your Room
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="font-medium border-violet-600 text-violet-600 hover:bg-violet-50 cursor-pointer"
                >
                  How It Works
                </Button>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-violet-600" />
                <span>No account required to join</span>
                <CheckCircle className="h-4 w-4 text-violet-600 ml-2" />
                <span>Works with Spotify & Apple Music</span>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[500px] aspect-video rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=500&width=800"
                  alt="MixQueue App Interface showing a collaborative playlist"
                  width={800}
                  height={500}
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 flex justify-center items-center bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Music Democracy in Action</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Let your guests choose what plays next, without the chaos
              </p>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<ListMusic className="h-10 w-10 text-violet-600" />}
              title="Collaborative Queues"
              description="Everyone can add songs to the queue and vote on what plays next, creating the perfect democratic playlist."
            />
            <FeatureCard
              icon={<Users className="h-10 w-10 text-violet-600" />}
              title="Easy Room Sharing"
              description="Create a room in seconds and share a simple link or QR code. No apps to download for your guests."
            />
            <FeatureCard
              icon={<Headphones className="h-10 w-10 text-violet-600" />}
              title="Music Service Integration"
              description="Seamlessly connects with popular music services like Spotify, Apple Music, and YouTube Music."
            />
          </div>
        </div>
      </section>


      {/* How It Works Section */}
      <section className="py-16 flex justify-center items-center md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How MixQueue Works</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Three simple steps to music harmony at your next gathering
              </p>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-100 mb-4">
                <span className="text-2xl font-bold text-violet-600">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Create a Room</h3>
              <p className="text-gray-500">
                Sign up and create a music room in seconds. Connect your preferred music service.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-100 mb-4">
                <span className="text-2xl font-bold text-violet-600">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Share with Guests</h3>
              <p className="text-gray-500">
                Share your unique room link or QR code with friends. They can join instantly without creating an
                account.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-100 mb-4">
                <span className="text-2xl font-bold text-violet-600">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Vote & Enjoy</h3>
              <p className="text-gray-500">
                Everyone adds songs and votes on what plays next. The most popular tracks rise to the top automatically.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Testimonials Section */}
      <section className="py-16 flex justify-center items-center md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Users Say</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                From house parties to office gatherings, MixQueue is changing how people experience music together
              </p>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <TestimonialCard
              quote="Used MixQueue at my housewarming party and it was a hit! Everyone got to add their favorite songs and there were no arguments about what to play next."
              author="Alex Chen"
              role="Party Host"
              rating={5}
            />
            <TestimonialCard
              quote="As a small streamer, I've been testing the beta for audience song requests. My viewers love being able to influence the stream music!"
              author="StreamerGirl92"
              role="Twitch Streamer"
              rating={5}
            />
            <TestimonialCard
              quote="We use MixQueue for our office Friday happy hours. It's become a fun way for the team to discover each other's music tastes."
              author="Marcus Johnson"
              role="Office Manager"
              rating={4}
            />
          </div>
        </div>
      </section>

      {/* Future Features Section */}
      <section className="py-16 flex justify-center items-center md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Coming Soon for Streamers</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                We&apos;re expanding MixQueue to help content creators engage with their audience
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-violet-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Radio className="h-8 w-8 text-violet-600 mr-3" />
                <h3 className="text-xl font-bold">Audience Song Requests</h3>
              </div>
              <p className="text-gray-600">
                Let your viewers request songs during your stream. Set custom rules for request limits, song filtering,
                and more.
              </p>
            </div>
            <div className="bg-violet-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Music className="h-8 w-8 text-violet-600 mr-3" />
                <h3 className="text-xl font-bold">Challenge Voting</h3>
              </div>
              <p className="text-gray-600">
                Allow your audience to suggest and vote on challenges for you to complete during your stream, creating
                interactive entertainment.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Pricing Section */}
      <section className="py-16 md:py-24 flex justify-center items-center bg-gray-50 dark:bg-gray-900 w-full">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Simple Pricing</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Choose the plan that fits your music sharing needs
              </p>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <PricingCard
              title="Free"
              price="$0"
              description="Perfect for occasional gatherings"
              features={[
                "Create up to 3 rooms per month",
                "Up to 25 songs in queue",
                "Basic voting features",
                "Connect to Spotify",
              ]}
              buttonText="Get Started"
              popular={false}
            />
            <PricingCard
              title="Party Host"
              price="$9"
              description="For regular party throwers and music lovers"
              features={[
                "Unlimited rooms",
                "Unlimited queue length",
                "Advanced voting features",
                "Connect to all music services",
                "Room customization",
                "Priority support",
              ]}
              buttonText="Start Free Trial"
              popular={true}
            />
            <PricingCard
              title="Streamer"
              price="$19"
              description="For content creators and streamers"
              features={[
                "All Party Host features",
                "Audience challenge voting",
                "Stream overlay integration",
                "Moderation tools",
                "API access",
                "Dedicated support",
              ]}
              buttonText="Coming Soon"
              popular={false}
              comingSoon={true}
            />
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-16 flex justify-center items-center md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2 max-w-[800px]">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to End the Music Arguments?
              </h2>
              <p className="text-gray-500 md:text-xl dark:text-gray-400">
                Create your first MixQueue room and let democracy decide what plays next.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="font-medium bg-violet-600 hover:bg-violet-700 cursor-pointer">
                Create Your First Room
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-medium border-violet-600 text-violet-600 hover:bg-violet-50 curosr-pointer"
              >
                See a Demo
              </Button>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              No credit card required. Free plan available forever.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
