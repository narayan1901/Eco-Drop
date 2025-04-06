import Link from "next/link"
import { ArrowRight, Recycle, MapPin, BookOpen } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-8 md:py-12 lg:py-24 bg-gradient-to-b from-green-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl text-green-800">
                  Responsible Eco-Drop Management Solutions
                </h1>
                <p className="max-w-[600px] text-gray-600 text-sm sm:text-base md:text-xl">
                  Helping you dispose of electronic waste safely and sustainably. Protect our environment for future
                  generations.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="w-full sm:w-auto bg-green-600 hover:bg-green-700 py-6 text-base">
                  <Link href="/request-pickup">
                    Request Pickup <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full sm:w-auto py-6 text-base">
                  <Link href="/recycling-centers">Find Recycling Centers</Link>
                </Button>
              </div>
            </div>
            <img
              alt="Eco-Drop recycling"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              src="/public/eco-drop.jpeg?height=550&width=800"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-8 md:py-12 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-green-700">
                Our Services
              </h2>
              <p className="max-w-[900px] text-gray-600 text-sm sm:text-base md:text-xl/relaxed">
                We provide comprehensive eco-drop management solutions to help you dispose of electronic waste
                responsibly.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            <Card className="border-green-100">
              <CardHeader className="pb-2">
                <Recycle className="h-10 w-10 text-green-600 mb-2" />
                <CardTitle>Eco-Drop Collection</CardTitle>
                <CardDescription>Schedule a pickup for your electronic waste from your home or office.</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild variant="ghost" className="text-green-600 w-full justify-center">
                  <Link href="/request-pickup">Schedule Now</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="border-green-100">
              <CardHeader className="pb-2">
                <MapPin className="h-12 w-12 text-green-600 mb-2" />
                <CardTitle>Recycling Centers</CardTitle>
                <CardDescription>Find the nearest eco-drop recycling centers and drop-off points.</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild variant="ghost" className="text-green-600">
                  <Link href="/recycling-centers">Find Centers</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="border-green-100">
              <CardHeader className="pb-2">
                <BookOpen className="h-12 w-12 text-green-600 mb-2" />
                <CardTitle>Education</CardTitle>
                <CardDescription>Learn about eco-drop management and its impact on the environment.</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild variant="ghost" className="text-green-600">
                  <Link href="/education">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-700">Our Impact</h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Together, we're making a difference in reducing eco-drop and protecting our environment.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 mt-8">
            <div className="flex flex-col items-center space-y-2">
              <h3 className="text-4xl font-bold text-green-600">5,000+</h3>
              <p className="text-xl font-medium">Devices Recycled</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <h3 className="text-4xl font-bold text-green-600">200+</h3>
              <p className="text-xl font-medium">Collection Points</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <h3 className="text-4xl font-bold text-green-600">10 tons</h3>
              <p className="text-xl font-medium">Eco-Drop Processed</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-8 md:py-12 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-green-700">
                Ready to Recycle?
              </h2>
              <p className="max-w-[900px] text-gray-600 text-sm sm:text-base md:text-xl/relaxed">
                Take the first step towards responsible eco-drop management today.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Button asChild className="w-full sm:w-auto bg-green-600 hover:bg-green-700 py-6 text-base">
                <Link href="/request-pickup">
                  Request Pickup <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full sm:w-auto py-6 text-base">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

