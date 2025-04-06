"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Phone, Clock, ExternalLink, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock data for recycling centers
const recyclingCenters = [
  {
    id: 1,
    name: "EcoTech Recycling Center",
    address: "123 Green Street, Eco City, EC 12345",
    phone: "+1 (123) 456-7890",
    hours: "Mon-Fri: 9AM-6PM, Sat: 10AM-4PM",
    acceptedItems: ["Computers", "Phones", "Batteries", "Printers"],
    distance: "2.3 miles",
    coordinates: { lat: 40.7128, lng: -74.006 },
  },
  {
    id: 2,
    name: "GreenCycle Eco-Drop Facility",
    address: "456 Recycle Avenue, Green Valley, GV 23456",
    phone: "+1 (234) 567-8901",
    hours: "Mon-Sat: 8AM-7PM",
    acceptedItems: ["TVs", "Computers", "Appliances", "Phones"],
    distance: "4.7 miles",
    coordinates: { lat: 40.7308, lng: -73.9973 },
  },
  {
    id: 3,
    name: "TechDisposal Center",
    address: "789 Electronic Lane, Tech City, TC 34567",
    phone: "+1 (345) 678-9012",
    hours: "Mon-Fri: 10AM-8PM, Sat-Sun: 11AM-5PM",
    acceptedItems: ["Computers", "Phones", "Cables", "Batteries"],
    distance: "6.2 miles",
    coordinates: { lat: 40.7023, lng: -74.0186 },
  },
  {
    id: 4,
    name: "Urban Eco-Drop Solutions",
    address: "101 Circuit Road, Metro City, MC 45678",
    phone: "+1 (456) 789-0123",
    hours: "Mon-Sun: 9AM-9PM",
    acceptedItems: ["All Electronics", "Batteries", "Appliances"],
    distance: "8.5 miles",
    coordinates: { lat: 40.7589, lng: -73.9851 },
  },
]

export default function RecyclingCenters() {
  const [searchZip, setSearchZip] = useState("")
  const [itemType, setItemType] = useState("all")
  const [filteredCenters, setFilteredCenters] = useState(recyclingCenters)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would fetch centers based on zip and item type
    // For this demo, we'll just filter the mock data
    let filtered = recyclingCenters

    if (itemType !== "all") {
      filtered = filtered.filter((center) =>
        center.acceptedItems.some((item) => item.toLowerCase() === itemType.toLowerCase()),
      )
    }

    setFilteredCenters(filtered)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-8">Find E-Waste Recycling Centers</h1>

      <div className="max-w-4xl mx-auto mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Search Recycling Centers</CardTitle>
            <CardDescription>Find the nearest e-waste recycling centers in your area</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSearch} className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              <div className="space-y-2">
                <Label htmlFor="zipCode">ZIP Code</Label>
                <Input
                  id="zipCode"
                  placeholder="Enter ZIP code"
                  value={searchZip}
                  onChange={(e) => setSearchZip(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="itemType">Item Type</Label>
                <Select value={itemType} onValueChange={setItemType}>
                  <SelectTrigger id="itemType">
                    <SelectValue placeholder="Select item type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Items</SelectItem>
                    <SelectItem value="computers">Computers & Laptops</SelectItem>
                    <SelectItem value="phones">Phones & Tablets</SelectItem>
                    <SelectItem value="tvs">TVs & Monitors</SelectItem>
                    <SelectItem value="appliances">Home Appliances</SelectItem>
                    <SelectItem value="batteries">Batteries</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-end">
                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 py-6 text-base">
                  <Search className="mr-2 h-4 w-4" />
                  Search
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>

      <div className="max-w-4xl mx-auto">
        <Tabs defaultValue="list">
          <div className="flex justify-center mb-6">
            <TabsList>
              <TabsTrigger value="list">List View</TabsTrigger>
              <TabsTrigger value="map">Map View</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="list" className="space-y-6">
            {filteredCenters.map((center) => (
              <Card key={center.id}>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                    <div>
                      <CardTitle>{center.name}</CardTitle>
                      <CardDescription className="flex items-center mt-1">
                        <MapPin className="h-4 w-4 mr-1" />
                        {center.distance} away
                      </CardDescription>
                    </div>
                    <Button variant="outline" size="sm" className="w-full sm:w-auto py-5 text-base">
                      Get Directions
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="grid gap-4 md:grid-cols-2">
                  <div>
                    <div className="flex items-start gap-2 mb-2">
                      <MapPin className="h-5 w-5 text-green-600 mt-0.5" />
                      <span className="text-sm sm:text-base">{center.address}</span>
                    </div>
                    <div className="flex items-start gap-2 mb-2">
                      <Phone className="h-5 w-5 text-green-600 mt-0.5" />
                      <span className="text-sm sm:text-base">{center.phone}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Clock className="h-5 w-5 text-green-600 mt-0.5" />
                      <span className="text-sm sm:text-base">{center.hours}</span>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium mb-2">Accepted Items:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      {center.acceptedItems.map((item, index) => (
                        <li key={index} className="text-sm sm:text-base">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="text-green-600 py-5 text-base">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visit Website
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="map">
            <Card>
              <CardContent className="p-0">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <p className="text-muted-foreground">Interactive map would be displayed here</p>
                  {/* In a real application, you would integrate with a mapping API like Google Maps */}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

