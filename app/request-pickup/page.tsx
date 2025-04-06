"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Calendar, MapPin, Package, Info } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"

export default function RequestPickup() {
  const router = useRouter()
  const { toast } = useToast()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    pickupDate: "",
    pickupTime: "",
    itemType: "",
    itemQuantity: "",
    itemDescription: "",
    termsAccepted: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, termsAccepted: checked }))
  }

  const nextStep = () => {
    setStep((prev) => prev + 1)
    window.scrollTo(0, 0)
  }

  const prevStep = () => {
    setStep((prev) => prev - 1)
    window.scrollTo(0, 0)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log(formData)

    toast({
      title: "Pickup Request Submitted",
      description: "We'll contact you shortly to confirm your pickup details.",
    })

    // Redirect to confirmation page
    setTimeout(() => {
      router.push("/request-pickup/confirmation")
    }, 1500)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-green-700 mb-8">Request Eco-Drop Pickup</h1>

        <div className="flex justify-between mb-8">
          <div className={`flex flex-col items-center ${step >= 1 ? "text-green-600" : "text-gray-400"}`}>
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${step >= 1 ? "border-green-600 bg-green-50" : "border-gray-300"}`}
            >
              <MapPin className="h-5 w-5" />
            </div>
            <span className="text-xs sm:text-sm mt-2">Location</span>
          </div>
          <div className="flex-1 flex items-center">
            <div className={`h-1 w-full ${step >= 2 ? "bg-green-600" : "bg-gray-300"}`}></div>
          </div>
          <div className={`flex flex-col items-center ${step >= 2 ? "text-green-600" : "text-gray-400"}`}>
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${step >= 2 ? "border-green-600 bg-green-50" : "border-gray-300"}`}
            >
              <Calendar className="h-5 w-5" />
            </div>
            <span className="text-xs sm:text-sm mt-2">Schedule</span>
          </div>
          <div className="flex-1 flex items-center">
            <div className={`h-1 w-full ${step >= 3 ? "bg-green-600" : "bg-gray-300"}`}></div>
          </div>
          <div className={`flex flex-col items-center ${step >= 3 ? "text-green-600" : "text-gray-400"}`}>
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${step >= 3 ? "border-green-600 bg-green-50" : "border-gray-300"}`}
            >
              <Package className="h-5 w-5" />
            </div>
            <span className="text-xs sm:text-sm mt-2">Items</span>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>
              {step === 1 && "Your Location"}
              {step === 2 && "Pickup Schedule"}
              {step === 3 && "Item Details"}
            </CardTitle>
            <CardDescription>
              {step === 1 && "Please provide your contact and address information"}
              {step === 2 && "Select your preferred pickup date and time"}
              {step === 3 && "Tell us about the e-waste items you want to recycle"}
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              {step === 1 && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Street Address</Label>
                    <Input id="address" name="address" value={formData.address} onChange={handleChange} required />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" name="city" value={formData.city} onChange={handleChange} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State</Label>
                      <Input id="state" name="state" value={formData.state} onChange={handleChange} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="zip">ZIP Code</Label>
                      <Input id="zip" name="zip" value={formData.zip} onChange={handleChange} required />
                    </div>
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="pickupDate">Preferred Pickup Date</Label>
                    <Input
                      id="pickupDate"
                      name="pickupDate"
                      type="date"
                      value={formData.pickupDate}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pickupTime">Preferred Pickup Time</Label>
                    <Select
                      onValueChange={(value) => handleSelectChange("pickupTime", value)}
                      value={formData.pickupTime}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a time slot" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Morning (8:00 AM - 12:00 PM)</SelectItem>
                        <SelectItem value="afternoon">Afternoon (12:00 PM - 4:00 PM)</SelectItem>
                        <SelectItem value="evening">Evening (4:00 PM - 8:00 PM)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-100 flex items-start gap-3 mt-4">
                    <Info className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="text-sm text-green-800 font-medium">Pickup Information</p>
                      <p className="text-sm text-green-700 mt-1">
                        Our team will contact you to confirm the exact pickup time within your selected time slot.
                        Please ensure someone is available to hand over the eco-drop items.
                      </p>
                    </div>
                  </div>
                </>
              )}

              {step === 3 && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="itemType">Type of Eco-Drop</Label>
                    <RadioGroup
                      onValueChange={(value) => handleSelectChange("itemType", value)}
                      value={formData.itemType}
                      className="grid grid-cols-1 md:grid-cols-2 gap-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="computers" id="computers" />
                        <Label htmlFor="computers">Computers & Laptops</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="phones" id="phones" />
                        <Label htmlFor="phones">Phones & Tablets</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="appliances" id="appliances" />
                        <Label htmlFor="appliances">Home Appliances</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="other" id="other" />
                        <Label htmlFor="other">Other Electronics</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="itemQuantity">Approximate Quantity</Label>
                    <Select
                      onValueChange={(value) => handleSelectChange("itemQuantity", value)}
                      value={formData.itemQuantity}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select quantity" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-2">1-2 items</SelectItem>
                        <SelectItem value="3-5">3-5 items</SelectItem>
                        <SelectItem value="6-10">6-10 items</SelectItem>
                        <SelectItem value="10+">More than 10 items</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="itemDescription">Description of Items</Label>
                    <Textarea
                      id="itemDescription"
                      name="itemDescription"
                      placeholder="Please provide details about the items you want to recycle"
                      value={formData.itemDescription}
                      onChange={handleChange}
                      rows={4}
                    />
                  </div>
                  <div className="flex items-start space-x-2 pt-4">
                    <Checkbox
                      id="termsAccepted"
                      checked={formData.termsAccepted}
                      onCheckedChange={handleCheckboxChange}
                    />
                    <div className="grid gap-1.5 leading-none">
                      <Label
                        htmlFor="termsAccepted"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        I agree to the terms and conditions
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        I confirm that the eco-waste items do not contain any hazardous materials and I authorize Eco-Drop
                        Management to collect and recycle these items.
                      </p>
                    </div>
                  </div>
                </>
              )}
            </CardContent>
            <CardFooter className="flex justify-between">
              {step > 1 ? (
                <Button type="button" variant="outline" onClick={prevStep} className="py-6 px-6 text-base">
                  Previous
                </Button>
              ) : (
                <div></div>
              )}
              {step < 3 ? (
                <Button
                  type="button"
                  onClick={nextStep}
                  className="bg-green-600 hover:bg-green-700 py-6 px-6 text-base"
                >
                  Next
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 py-6 px-6 text-base"
                  disabled={!formData.termsAccepted}
                >
                  Submit Request
                </Button>
              )}
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  )
}

