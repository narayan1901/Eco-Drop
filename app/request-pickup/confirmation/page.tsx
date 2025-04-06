import Link from "next/link"
import { CheckCircle, ArrowLeft, Calendar } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function PickupConfirmation() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-md mx-auto text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle className="h-16 w-16 text-green-600" />
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-green-700">Pickup Request Confirmed</CardTitle>
            <CardDescription>Thank you for choosing responsible e-waste disposal</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Your pickup request has been successfully submitted. Our team will review your request and contact you
              within 24 hours to confirm the pickup details.
            </p>
            <div className="bg-green-50 p-4 rounded-lg border border-green-100 mt-4">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="h-5 w-5 text-green-600" />
                <p className="font-medium text-green-800">What happens next?</p>
              </div>
              <ul className="text-sm text-green-700 text-left list-disc pl-5 space-y-1">
                <li>You'll receive a confirmation email with your request details</li>
                <li>Our team will call you to confirm the exact pickup time</li>
                <li>We'll arrive at your location during the scheduled time slot</li>
                <li>Your eco-waste will be collected and recycled responsibly</li>
              </ul>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-2">
            <Button asChild className="w-full bg-green-600 hover:bg-green-700">
              <Link href="/dashboard">Go to Dashboard</Link>
            </Button>
            <Button asChild variant="outline" className="w-full">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Return to Home
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

