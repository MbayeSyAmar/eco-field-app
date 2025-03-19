"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Check, ChevronRight, MapPin } from "lucide-react"

export default function ReservationPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [step, setStep] = useState(1)
  const [selectedField, setSelectedField] = useState("")
  const [selectedTime, setSelectedTime] = useState("")

  const handleNext = () => {
    setStep(step + 1)
  }

  const handleBack = () => {
    setStep(step - 1)
  }

  const handleFieldSelect = (field: string) => {
    setSelectedField(field)
  }

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time)
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="relative py-20 md:py-32">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Book a <span className="text-green-500">Field</span>
            </h1>
            <p className="mb-6 text-lg text-muted-foreground md:text-xl">
              Reserve your eco-friendly sports field in just a few simple steps
            </p>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-100 via-background to-background dark:from-green-950/20"></div>
      </div>

      <div className="container py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${step >= 1 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
                >
                  {step > 1 ? <Check className="h-4 w-4" /> : 1}
                </div>
                <span className={step >= 1 ? "font-medium" : "text-muted-foreground"}>Select Field</span>
              </div>
              <div className="h-px w-12 bg-muted"></div>
              <div className="flex items-center gap-2">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${step >= 2 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
                >
                  {step > 2 ? <Check className="h-4 w-4" /> : 2}
                </div>
                <span className={step >= 2 ? "font-medium" : "text-muted-foreground"}>Date & Time</span>
              </div>
              <div className="h-px w-12 bg-muted"></div>
              <div className="flex items-center gap-2">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${step >= 3 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
                >
                  {step > 3 ? <Check className="h-4 w-4" /> : 3}
                </div>
                <span className={step >= 3 ? "font-medium" : "text-muted-foreground"}>Confirm</span>
              </div>
            </div>
          </div>

          {step === 1 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="mb-6">
                <h2 className="text-2xl font-bold">Select a Field</h2>
                <p className="text-muted-foreground">Choose from our available eco-friendly sports fields</p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <Card
                  className={`cursor-pointer transition-all hover:shadow-md ${selectedField === "downtown" ? "border-primary" : ""}`}
                  onClick={() => handleFieldSelect("downtown")}
                >
                  <CardHeader className="pb-2">
                    <CardTitle>Downtown EcoField</CardTitle>
                    <CardDescription className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" /> 123 Main St, City Center
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="relative h-40 w-full overflow-hidden rounded-md">
                      <img
                        src="/placeholder.svg?height=300&width=500"
                        alt="Downtown EcoField"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-100">
                        Available
                      </div>
                      <div className="text-sm text-muted-foreground">4.8 ★</div>
                    </div>
                    <div className="text-sm font-medium">$40/hour</div>
                  </CardFooter>
                </Card>

                <Card
                  className={`cursor-pointer transition-all hover:shadow-md ${selectedField === "riverside" ? "border-primary" : ""}`}
                  onClick={() => handleFieldSelect("riverside")}
                >
                  <CardHeader className="pb-2">
                    <CardTitle>Riverside EcoField</CardTitle>
                    <CardDescription className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" /> 456 River Rd, Waterfront
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="relative h-40 w-full overflow-hidden rounded-md">
                      <img
                        src="/placeholder.svg?height=300&width=500"
                        alt="Riverside EcoField"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-100">
                        Available
                      </div>
                      <div className="text-sm text-muted-foreground">4.6 ★</div>
                    </div>
                    <div className="text-sm font-medium">$35/hour</div>
                  </CardFooter>
                </Card>
              </div>

              <div className="mt-8 flex justify-end">
                <Button onClick={handleNext} disabled={!selectedField}>
                  Continue <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="mb-6">
                <h2 className="text-2xl font-bold">Select Date & Time</h2>
                <p className="text-muted-foreground">Choose when you'd like to book the field</p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <Label className="mb-2 block">Select Date</Label>
                  <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
                </div>

                <div>
                  <Label className="mb-2 block">Select Time</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM", "7:00 PM"].map((time) => (
                      <div
                        key={time}
                        className={`flex cursor-pointer items-center justify-center rounded-md border p-3 text-sm transition-colors hover:bg-accent ${
                          selectedTime === time ? "border-primary bg-primary/10" : ""
                        }`}
                        onClick={() => handleTimeSelect(time)}
                      >
                        {time}
                      </div>
                    ))}
                  </div>

                  <div className="mt-6">
                    <Label className="mb-2 block">Duration</Label>
                    <Select defaultValue="1">
                      <SelectTrigger>
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 hour</SelectItem>
                        <SelectItem value="2">2 hours</SelectItem>
                        <SelectItem value="3">3 hours</SelectItem>
                        <SelectItem value="4">4 hours</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="mt-6">
                    <Label className="mb-2 block">Activity Type</Label>
                    <RadioGroup defaultValue="soccer">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="soccer" id="soccer" />
                        <Label htmlFor="soccer">Soccer</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="basketball" id="basketball" />
                        <Label htmlFor="basketball">Basketball</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="tennis" id="tennis" />
                        <Label htmlFor="tennis">Tennis</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="other" id="other" />
                        <Label htmlFor="other">Other</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-between">
                <Button variant="outline" onClick={handleBack}>
                  Back
                </Button>
                <Button onClick={handleNext} disabled={!selectedTime}>
                  Continue <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="mb-6">
                <h2 className="text-2xl font-bold">Confirm Booking</h2>
                <p className="text-muted-foreground">Review your booking details and confirm</p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Booking Summary</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Field</h3>
                      <p className="font-medium">
                        {selectedField === "downtown" ? "Downtown EcoField" : "Riverside EcoField"}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Location</h3>
                      <p className="font-medium">
                        {selectedField === "downtown" ? "123 Main St, City Center" : "456 River Rd, Waterfront"}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Date</h3>
                      <p className="font-medium">
                        {date?.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Time</h3>
                      <p className="font-medium">{selectedTime} (1 hour)</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Activity</h3>
                      <p className="font-medium">Soccer</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Price</h3>
                      <p className="font-medium">{selectedField === "downtown" ? "$40.00" : "$35.00"}</p>
                    </div>
                  </div>

                  <div className="mt-4 rounded-lg bg-muted p-4">
                    <h3 className="mb-2 font-medium">Environmental Impact</h3>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center gap-2">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-green-500"
                        >
                          <path
                            d="M12.0001 3V4M12.0001 20V21M4.22009 4.22L4.93009 4.93M19.0701 19.07L19.7801 19.78M3.00009 12H4.00009M20.0001 12H21.0001M4.93009 19.07L4.22009 19.78M19.7801 4.22L19.0701 4.93M17.6601 7C17.1213 5.35622 15.6079 4.21617 13.87 4.0387C12.1321 3.86123 10.4501 4.68788 9.55516 6.14151C8.66019 7.59513 8.66522 9.41524 9.56809 10.8643C10.471 12.3134 12.1576 13.1326 13.8951 12.95M12.0001 17C13.6569 17 15.0001 15.6569 15.0001 14C15.0001 12.3431 13.6569 11 12.0001 11C10.3432 11 9.00009 12.3431 9.00009 14C9.00009 15.6569 10.3432 17 12.0001 17Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span>2.5°C cooler field</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-green-500"
                        >
                          <path
                            d="M10.3009 13.6949L20.1021 3.89453M10.3009 13.6949L14.1524 17.5453C14.8808 18.2736 16.0641 18.2736 16.7924 17.5453L20.1021 14.2358C20.8304 13.5074 20.8304 12.3242 20.1021 11.5958L16.2516 7.74531M10.3009 13.6949L6.45042 9.84446C5.72208 9.11612 5.72208 7.93287 6.45042 7.20453L9.75989 3.89453C10.4882 3.16619 11.6715 3.16619 12.4 3.89453L16.2516 7.74531M3.89485 20.1016L7.20432 16.7927C7.93266 16.0644 7.93266 14.8811 7.20432 14.1528L3.89485 10.8433C3.16651 10.115 3.16651 8.93171 3.89485 8.20337L7.20432 4.89453"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span>15 kg plastic recycled</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-green-500"
                        >
                          <path
                            d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12 2V4"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12 20V22"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M4.93 4.93L6.34 6.34"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M17.66 17.66L19.07 19.07"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M2 12H4"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M20 12H22"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M6.34 17.66L4.93 19.07"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M19.07 4.93L17.66 6.34"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span>3.2 kg CO₂ reduction</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-green-500"
                        >
                          <path
                            d="M20 14.6667C20 17.5076 17.5076 20 14.6667 20C11.8257 20 9.33333 17.5076 9.33333 14.6667C9.33333 11.8257 11.8257 9.33333 14.6667 9.33333C17.5076 9.33333 20 11.8257 20 14.6667Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M14.6667 12V14.6667L16.4 16.4"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M4 7.33333H9.33333"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M4 14.6667H6.66667"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M6.66667 20H14.6667"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M14.6667 4V9.33333"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M4 4H9.33333"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span>50 L water saved</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <Label htmlFor="notes">Special Requests</Label>
                    <Input id="notes" placeholder="Any special requests or requirements?" className="mt-1" />
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-4">
                  <div className="flex w-full items-center justify-between rounded-lg bg-muted p-4">
                    <span className="font-medium">Total</span>
                    <span className="text-xl font-bold">{selectedField === "downtown" ? "$40.00" : "$35.00"}</span>
                  </div>
                  <div className="flex w-full flex-col gap-2">
                    <Button className="w-full" size="lg">
                      Confirm Booking
                    </Button>
                    <Button variant="outline" onClick={handleBack}>
                      Back
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}

