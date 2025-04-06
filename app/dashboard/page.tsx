"use client"

import { useState } from "react"
import Link from "next/link"
import { Calendar, Clock, FileText, MapPin, Package, Recycle, Settings, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

// Mock data for pickup requests
const pickupRequests = [
  {
    id: "PR-1234",
    date: "2023-05-15",
    time: "morning",
    status: "scheduled",
    items: "2 laptops, 1 printer",
    address: "123 Main St, Anytown, AT 12345",
  },
  {
    id: "PR-1235",
    date: "2023-05-22",
    time: "afternoon",
    status: "pending",
    items: "1 TV, 3 phones",
    address: "456 Oak Ave, Anytown, AT 12345",
  },
]

// Mock data for recycling history
const recyclingHistory = [
  {
    id: "RH-1001",
    date: "2023-04-10",
    items: "1 laptop, 2 phones",
    weight: "3.5 kg",
    points: 35,
  },
  {
    id: "RH-1002",
    date: "2023-03-22",
    items: "1 printer, 1 monitor",
    weight: "8.2 kg",
    points: 82,
  },
  {
    id: "RH-1003",
    date: "2023-02-15",
    items: "4 batteries, 1 keyboard",
    weight: "1.8 kg",
    points: 18,
  },
]

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="container mx-auto px-4 py-6 md:py-8">
      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
        {/* Sidebar - Make it horizontal on mobile */}
        <div className="md:w-64 md:shrink-0">
          <Card className="mb-6 md:mb-0">
            <CardHeader className="md:pb-2">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <User className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <CardTitle>user-name</CardTitle>
                  <CardDescription>xyz@example.com</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <nav className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-1 gap-1 px-2 py-2">
                <Button
                  variant={activeTab === "overview" ? "secondary" : "ghost"}
                  className="justify-start py-5"
                  onClick={() => setActiveTab("overview")}
                >
                  <FileText className="mr-2 h-4 w-4" />
                  <span className="text-sm md:text-base">Overview</span>
                </Button>
                <Button
                  variant={activeTab === "pickups" ? "secondary" : "ghost"}
                  className="justify-start py-5"
                  onClick={() => setActiveTab("pickups")}
                >
                  <Package className="mr-2 h-4 w-4" />
                  <span className="text-sm md:text-base">Pickups</span>
                </Button>
                <Button
                  variant={activeTab === "history" ? "secondary" : "ghost"}
                  className="justify-start py-5"
                  onClick={() => setActiveTab("history")}
                >
                  <Recycle className="mr-2 h-4 w-4" />
                  <span className="text-sm md:text-base">History</span>
                </Button>
                <Button
                  variant={activeTab === "rewards" ? "secondary" : "ghost"}
                  className="justify-start py-5"
                  onClick={() => setActiveTab("rewards")}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  <span className="text-sm md:text-base">Rewards</span>
                </Button>
                <Button
                  variant={activeTab === "settings" ? "secondary" : "ghost"}
                  className="justify-start py-5"
                  onClick={() => setActiveTab("settings")}
                >
                  <Settings className="mr-2 h-4 w-4" />
                  <span className="text-sm md:text-base">Settings</span>
                </Button>
              </nav>
            </CardContent>
            <CardFooter className="flex justify-center border-t p-4 md:block">
              <Button asChild variant="outline" size="sm" className="py-5 text-base">
                <Link href="/logout">Sign Out</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Main Content - Keep the Tabs component but adjust the content */}
        <div className="flex-1">
          <Tabs defaultValue={activeTab}>
            <TabsContent value="overview" className="mt-0">
              <h1 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Dashboard Overview</h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6 md:mb-8">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Total Recycled</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">13.5 kg</div>
                    <p className="text-xs text-muted-foreground">+2.5% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Reward Points</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">135</div>
                    <p className="text-xs text-muted-foreground">25 points until next reward</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">CO₂ Saved</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">27.2 kg</div>
                    <p className="text-xs text-muted-foreground">Equivalent to planting 2 trees</p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Pickup Requests</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {pickupRequests.length > 0 ? (
                      <div className="space-y-4">
                        {pickupRequests.map((request) => (
                          <div
                            key={request.id}
                            className="flex justify-between items-start border-b pb-4 last:border-0 last:pb-0"
                          >
                            <div>
                              <div className="font-medium">{request.id}</div>
                              <div className="text-sm text-muted-foreground flex items-center mt-1">
                                <Calendar className="h-3 w-3 mr-1" />
                                {new Date(request.date).toLocaleDateString()}
                                <Clock className="h-3 w-3 ml-3 mr-1" />
                                {request.time === "morning"
                                  ? "Morning"
                                  : request.time === "afternoon"
                                    ? "Afternoon"
                                    : "Evening"}
                              </div>
                            </div>
                            <Badge variant={request.status === "scheduled" ? "default" : "outline"}>
                              {request.status === "scheduled" ? "Scheduled" : "Pending"}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-muted-foreground">No pickup requests found.</p>
                    )}
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="ghost" size="sm" className="text-green-600">
                      <Link href="/request-pickup">Schedule New Pickup</Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Recycling Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[200px] flex items-center justify-center bg-muted rounded-md">
                      <p className="text-muted-foreground">Recycling activity chart would be displayed here</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="ghost" size="sm" className="text-green-600">
                      <Link href="/dashboard/history">View Full History</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="pickups" className="mt-0">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Pickup Requests</h1>
                <Button asChild className="bg-green-600 hover:bg-green-700">
                  <Link href="/request-pickup">New Pickup Request</Link>
                </Button>
              </div>

              {pickupRequests.length > 0 ? (
                <div className="space-y-4">
                  {pickupRequests.map((request) => (
                    <Card key={request.id}>
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle>{request.id}</CardTitle>
                            <CardDescription>
                              {new Date(request.date).toLocaleDateString()} -{" "}
                              {request.time === "morning"
                                ? "Morning"
                                : request.time === "afternoon"
                                  ? "Afternoon"
                                  : "Evening"}
                            </CardDescription>
                          </div>
                          <Badge variant={request.status === "scheduled" ? "default" : "outline"}>
                            {request.status === "scheduled" ? "Scheduled" : "Pending"}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="flex items-start gap-2">
                          <Package className="h-5 w-5 text-green-600 mt-0.5" />
                          <span>{request.items}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <MapPin className="h-5 w-5 text-green-600 mt-0.5" />
                          <span>{request.address}</span>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button variant="outline" size="sm">
                          Edit Request
                        </Button>
                        <Button variant="outline" size="sm" className="text-red-600">
                          Cancel Request
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card>
                  <CardContent className="flex flex-col items-center justify-center py-12">
                    <Package className="h-12 w-12 text-muted-foreground mb-4" />
                    <p className="text-muted-foreground mb-4">You don't have any pickup requests yet.</p>
                    <Button asChild className="bg-green-600 hover:bg-green-700">
                      <Link href="/request-pickup">Schedule Your First Pickup</Link>
                    </Button>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="history" className="mt-0">
              <h1 className="text-2xl font-bold mb-6">Recycling History</h1>

              {recyclingHistory.length > 0 ? (
                <div className="space-y-4">
                  {recyclingHistory.map((item) => (
                    <Card key={item.id}>
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle>{item.id}</CardTitle>
                            <CardDescription>{new Date(item.date).toLocaleDateString()}</CardDescription>
                          </div>
                          <div className="text-right">
                            <div className="font-medium">{item.weight}</div>
                            <div className="text-sm text-muted-foreground">Weight</div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-start gap-2">
                          <Recycle className="h-5 w-5 text-green-600 mt-0.5" />
                          <span>{item.items}</span>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <div>
                          <span className="text-sm text-muted-foreground">Reward Points Earned:</span>
                          <span className="ml-2 font-medium">{item.points}</span>
                        </div>
                        <Button variant="ghost" size="sm" className="text-green-600">
                          View Details
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card>
                  <CardContent className="flex flex-col items-center justify-center py-12">
                    <Recycle className="h-12 w-12 text-muted-foreground mb-4" />
                    <p className="text-muted-foreground mb-4">You don't have any recycling history yet.</p>
                    <Button asChild className="bg-green-600 hover:bg-green-700">
                      <Link href="/request-pickup">Start Recycling</Link>
                    </Button>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="rewards" className="mt-0">
              <h1 className="text-2xl font-bold mb-6">Rewards Program</h1>

              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Your Rewards</CardTitle>
                  <CardDescription>Earn points for every item you recycle</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col items-center">
                      <div className="text-4xl font-bold text-green-600">135</div>
                      <div className="text-sm text-muted-foreground">Current Points</div>
                    </div>
                    <div className="w-full md:w-2/3 bg-muted rounded-full h-4">
                      <div className="bg-green-600 h-4 rounded-full" style={{ width: "54%" }}></div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="text-lg font-medium">25 points to go</div>
                      <div className="text-sm text-muted-foreground">Next Reward at 160 points</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h2 className="text-xl font-bold mb-4">Available Rewards</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>$10 Gift Card</CardTitle>
                    <CardDescription>160 points</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      Redeem your points for a $10 gift card to your choice of eco-friendly stores.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" disabled>
                      Redeem (Need 25 more points)
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Plant a Tree</CardTitle>
                    <CardDescription>200 points</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      We'll plant a tree in your name through our partnership with reforestation organizations.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" disabled>
                      Redeem (Need 65 more points)
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Free Pickup Service</CardTitle>
                    <CardDescription>100 points</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">Get a free premium pickup service for your next e-waste collection.</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="bg-green-600 hover:bg-green-700">Redeem Now</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="settings" className="mt-0">
              <h1 className="text-2xl font-bold mb-6">Account Settings</h1>

              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>Update your account details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="settings-name">Full Name</Label>
                      <Input id="settings-name" defaultValue="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="settings-email">Email Address</Label>
                      <Input id="settings-email" defaultValue="john.doe@example.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="settings-phone">Phone Number</Label>
                    <Input id="settings-phone" defaultValue="+1 (123) 456-7890" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="settings-address">Address</Label>
                    <Input id="settings-address" defaultValue="123 Main St, Anytown, AT 12345" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="bg-green-600 hover:bg-green-700">Save Changes</Button>
                </CardFooter>
              </Card>

              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Password</CardTitle>
                  <CardDescription>Update your password</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input id="current-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-password">New Password</Label>
                    <Input id="new-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm New Password</Label>
                    <Input id="confirm-password" type="password" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="bg-green-600 hover:bg-green-700">Update Password</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                  <CardDescription>Manage your notification settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Email Notifications</p>
                      <p className="text-sm text-muted-foreground">Receive updates about your pickup requests</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        On
                      </Button>
                      <Button variant="ghost" size="sm">
                        Off
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">SMS Notifications</p>
                      <p className="text-sm text-muted-foreground">Receive text messages about your pickup requests</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        On
                      </Button>
                      <Button variant="ghost" size="sm">
                        Off
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Marketing Communications</p>
                      <p className="text-sm text-muted-foreground">Receive updates about promotions and events</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        On
                      </Button>
                      <Button variant="outline" size="sm">
                        Off
                      </Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="bg-green-600 hover:bg-green-700">Save Preferences</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

