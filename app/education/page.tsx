import Link from "next/link"
import { ArrowRight, BookOpen, FileText, Video, Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Education() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-green-700 mb-2">Eco-Drop Education</h1>
        <p className="text-center text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto text-sm md:text-base">
          Learn about the importance of proper eco-drop management and how you can make a difference.
        </p>

        <Tabs defaultValue="articles" className="mb-8 md:mb-12">
          <div className="flex justify-center mb-6 overflow-x-auto pb-2">
            <TabsList>
              <TabsTrigger value="articles" className="px-3 py-1.5 text-sm">
                Articles
              </TabsTrigger>
              <TabsTrigger value="videos" className="px-3 py-1.5 text-sm">
                Videos
              </TabsTrigger>
              <TabsTrigger value="resources" className="px-3 py-1.5 text-sm">
                Resources
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="articles" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>What is Eco-Drop and Why Should We Care?</CardTitle>
                <CardDescription>Published on April 10, 2023</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Electronic waste, or eco-drop, refers to discarded electronic devices and equipment. As technology
                  advances rapidly, the lifespan of electronic devices shortens, leading to an increasing amount of
                  e-waste globally.
                </p>
                <p className="mt-4">
                  Eco-Drop contains hazardous materials such as lead, mercury, and cadmium that can harm the environment
                  and human health if not disposed of properly. At the same time, eco-drop also contains valuable
                  materials like gold, silver, and copper that can be recovered and reused.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="text-green-600">
                  <Link href="/education/articles/what-is-e-waste">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>The Environmental Impact of Improper Eco-Drop Disposal</CardTitle>
                <CardDescription>Published on March 15, 2023</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  When eco-drop is improperly disposed of, it can lead to serious environmental consequences. Toxic
                  substances can leach into soil and water, contaminating ecosystems and affecting wildlife.
                </p>
                <p className="mt-4">
                  Additionally, improper eco-drop disposal contributes to air pollution when devices are incinerated,
                  releasing harmful chemicals into the atmosphere.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="text-green-600">
                  <Link href="/education/articles/environmental-impact">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>The Benefits of Eco-Drop Recycling</CardTitle>
                <CardDescription>Published on February 22, 2023</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Recycling eco-drop has numerous benefits for both the environment and the economy. It helps conserve
                  natural resources by recovering valuable materials that can be reused in manufacturing new products.
                </p>
                <p className="mt-4">
                 Eco-Drop recycling also creates jobs in the recycling and refurbishment industries, contributing to
                  economic growth while reducing the environmental impact of electronic devices.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="text-green-600">
                  <Link href="/education/articles/benefits-of-recycling">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="videos" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>The Eco-Drop Crisis Explained</CardTitle>
                  <CardDescription>Duration: 8:45</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-muted flex items-center justify-center rounded-md mb-4">
                    <Video className="h-12 w-12 text-muted-foreground" />
                  </div>
                  <p className="text-sm">
                    This video explains the global eco-drop crisis, its causes, and potential solutions.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="text-green-600">
                    <Link href="/education/videos/e-waste-crisis">
                      Watch Video <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>How Eco-Drop is Recycled</CardTitle>
                  <CardDescription>Duration: 12:20</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-muted flex items-center justify-center rounded-md mb-4">
                    <Video className="h-12 w-12 text-muted-foreground" />
                  </div>
                  <p className="text-sm">
                    Take a tour of an eco-drop recycling facility and see how electronic devices are processed and
                    recycled.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="text-green-600">
                    <Link href="/education/videos/recycling-process">
                      Watch Video <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Eco-Drop Management Best Practices</CardTitle>
                  <CardDescription>Duration: 15:30</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-muted flex items-center justify-center rounded-md mb-4">
                    <Video className="h-12 w-12 text-muted-foreground" />
                  </div>
                  <p className="text-sm">
                    Learn about the best practices for managing eco-drop at home, in the office, and in communities.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="text-green-600">
                    <Link href="/education/videos/best-practices">
                      Watch Video <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>The Future of Eco-Drop Management</CardTitle>
                  <CardDescription>Duration: 10:15</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-muted flex items-center justify-center rounded-md mb-4">
                    <Video className="h-12 w-12 text-muted-foreground" />
                  </div>
                  <p className="text-sm">
                    Explore innovative approaches and technologies that are shaping the future of eco-drop management.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="text-green-600">
                    <Link href="/education/videos/future-management">
                      Watch Video <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="resources" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-green-600" />
                    <CardTitle>Eco-Drop Management Guide</CardTitle>
                  </div>
                  <CardDescription>PDF, 2.5 MB</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    A comprehensive guide to managing eco-waste at home and in the workplace, including tips for reducing,
                    reusing, and recycling electronic devices.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/resources/e-waste-guide.pdf">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-green-600" />
                    <CardTitle>Eco-Drop Regulations Overview</CardTitle>
                  </div>
                  <CardDescription>PDF, 1.8 MB</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    An overview of eco-drop regulations and policies at the local, state, and federal levels, helping you
                    understand legal requirements for eco-drop disposal.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/resources/regulations.pdf">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-green-600" />
                    <CardTitle>Eco-Drop Infographic</CardTitle>
                  </div>
                  <CardDescription>PNG, 3.2 MB</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    A visual representation of eco-drop statistics, impacts, and solutions, perfect for educational
                    purposes and raising awareness.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/resources/infographic.png">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-green-600" />
                    <CardTitle>Eco-Drop Recycling Checklist</CardTitle>
                  </div>
                  <CardDescription>PDF, 1.2 MB</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    A handy checklist to help you prepare your electronic devices for recycling, ensuring data security
                    and proper handling.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/resources/checklist.pdf">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <div className="bg-green-50 p-4 md:p-6 rounded-lg border border-green-100">
          <h2 className="text-lg md:text-xl font-bold text-green-700 mb-3 md:mb-4">Want to Learn More?</h2>
          <p className="mb-4 text-sm md:text-base">
            Join our educational workshops and webinars to deepen your understanding of eco-drop management and
            sustainable practices.
          </p>
          <Button asChild className="bg-green-600 hover:bg-green-700 w-full sm:w-auto py-6 text-base">
            <Link href="/events">
              View Upcoming Events <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

