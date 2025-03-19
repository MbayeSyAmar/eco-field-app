"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Recycle, Droplet, Thermometer } from "lucide-react"
import EcoImpactStats from "@/components/eco-impact-stats"

export default function ImpactPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-background">
      <div className="relative py-20 md:py-32">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Environmental <span className="text-green-500">Impact</span>
            </h1>
            <p className="mb-6 text-lg text-muted-foreground md:text-xl">
              Track the positive environmental impact of our eco-friendly sports fields
            </p>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-100 via-background to-background dark:from-green-950/20"></div>
      </div>

      <div className="container py-12">
        <div className="mx-auto max-w-4xl">
          <Tabs defaultValue="overview" onValueChange={setActiveTab} className="mb-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Impact Overview</TabsTrigger>
              <TabsTrigger value="details">Detailed Metrics</TabsTrigger>
              <TabsTrigger value="goals">Sustainability Goals</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="mt-0">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold">Environmental Impact Overview</h2>
                  <p className="text-muted-foreground">
                    See how our eco-friendly sports fields are making a difference
                  </p>
                </div>

                <EcoImpactStats />

                <div className="mt-8 rounded-xl border bg-muted p-6">
                  <h3 className="mb-4 text-xl font-bold">Our Commitment to Sustainability</h3>
                  <p className="mb-4 text-muted-foreground">
                    At EcoField, we're committed to creating sports facilities that not only provide exceptional playing
                    experiences but also contribute positively to the environment. Our innovative approach combines
                    recycled materials, passive cooling technology, and smart resource management.
                  </p>
                  <div className="grid gap-6 md:grid-cols-3">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Recycle className="h-5 w-5 text-green-500" />
                          Circular Economy
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          We divert plastic waste from landfills and oceans by transforming it into durable,
                          high-performance sports surfaces that are fully recyclable at end of life.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Thermometer className="h-5 w-5 text-orange-500" />
                          Climate Action
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Our passive cooling technology reduces urban heat island effects, creating more comfortable
                          playing environments while reducing energy consumption.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Droplet className="h-5 w-5 text-blue-500" />
                          Water Conservation
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Our fields use up to 70% less water than traditional fields through rainwater harvesting and
                          efficient water circulation systems.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </motion.div>
            </TabsContent>
            <TabsContent value="details" className="mt-0">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold">Detailed Environmental Metrics</h2>
                  <p className="text-muted-foreground">
                    Explore the detailed environmental impact metrics of our eco-friendly sports fields
                  </p>
                </div>

                <div className="grid gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Plastic Waste Reduction</CardTitle>
                      <CardDescription>Detailed breakdown of plastic waste diverted from landfills</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <h3 className="mb-2 text-lg font-medium">Materials Used</h3>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm">PET Bottles</span>
                              <span className="font-medium">45%</span>
                            </div>
                            <div className="h-2 w-full rounded-full bg-muted">
                              <div className="h-2 rounded-full bg-blue-500" style={{ width: "45%" }}></div>
                            </div>

                            <div className="flex items-center justify-between">
                              <span className="text-sm">HDPE Containers</span>
                              <span className="font-medium">30%</span>
                            </div>
                            <div className="h-2 w-full rounded-full bg-muted">
                              <div className="h-2 rounded-full bg-green-500" style={{ width: "30%" }}></div>
                            </div>

                            <div className="flex items-center justify-between">
                              <span className="text-sm">Mixed Plastics</span>
                              <span className="font-medium">25%</span>
                            </div>
                            <div className="h-2 w-full rounded-full bg-muted">
                              <div className="h-2 rounded-full bg-orange-500" style={{ width: "25%" }}></div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h3 className="mb-2 text-lg font-medium">Source Locations</h3>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm">Local Recycling Centers</span>
                              <span className="font-medium">60%</span>
                            </div>
                            <div className="h-2 w-full rounded-full bg-muted">
                              <div className="h-2 rounded-full bg-primary" style={{ width: "60%" }}></div>
                            </div>

                            <div className="flex items-center justify-between">
                              <span className="text-sm">Ocean Cleanup</span>
                              <span className="font-medium">25%</span>
                            </div>
                            <div className="h-2 w-full rounded-full bg-muted">
                              <div className="h-2 rounded-full bg-blue-500" style={{ width: "25%" }}></div>
                            </div>

                            <div className="flex items-center justify-between">
                              <span className="text-sm">Industrial Waste</span>
                              <span className="font-medium">15%</span>
                            </div>
                            <div className="h-2 w-full rounded-full bg-muted">
                              <div className="h-2 rounded-full bg-gray-500" style={{ width: "15%" }}></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6">
                        <h3 className="mb-2 text-lg font-medium">Monthly Recycling Progress</h3>
                        <div className="h-64 w-full rounded-lg bg-muted p-4">
                          <div className="flex h-full flex-col justify-between">
                            <div className="grid h-full grid-cols-1 gap-4">
                              <div className="relative h-full">
                                {/* Placeholder for chart */}
                                <div className="absolute bottom-0 left-0 h-1/3 w-full border-t border-dashed border-muted-foreground/30"></div>
                                <div className="absolute bottom-0 left-0 h-2/3 w-full border-t border-dashed border-muted-foreground/30"></div>

                                {/* Bar chart */}
                                <div className="absolute bottom-0 left-0 flex h-full w-full items-end justify-between px-2">
                                  {[40, 65, 50, 75, 90, 60, 80, 95, 85, 70, 75, 100].map((value, i) => (
                                    <div
                                      key={i}
                                      className="w-6 rounded-t bg-primary transition-all hover:opacity-80"
                                      style={{ height: `${value}%` }}
                                    ></div>
                                  ))}
                                </div>
                              </div>
                            </div>

                            <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                              <span>Jan</span>
                              <span>Feb</span>
                              <span>Mar</span>
                              <span>Apr</span>
                              <span>May</span>
                              <span>Jun</span>
                              <span>Jul</span>
                              <span>Aug</span>
                              <span>Sep</span>
                              <span>Oct</span>
                              <span>Nov</span>
                              <span>Dec</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Water Conservation</CardTitle>
                      <CardDescription>
                        Detailed analysis of water savings compared to traditional fields
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-6 md:grid-cols-2">
                        <div>
                          <h3 className="mb-2 text-lg font-medium">Water Usage Comparison</h3>
                          <div className="space-y-4">
                            <div>
                              <div className="mb-1 flex items-center justify-between">
                                <span className="text-sm">Traditional Field</span>
                                <span className="font-medium">100,000 L/month</span>
                              </div>
                              <div className="h-4 w-full rounded-full bg-muted">
                                <div className="h-4 rounded-full bg-red-500" style={{ width: "100%" }}></div>
                              </div>
                            </div>

                            <div>
                              <div className="mb-1 flex items-center justify-between">
                                <span className="text-sm">EcoField</span>
                                <span className="font-medium">30,000 L/month</span>
                              </div>
                              <div className="h-4 w-full rounded-full bg-muted">
                                <div className="h-4 rounded-full bg-green-500" style={{ width: "30%" }}></div>
                              </div>
                            </div>

                            <div className="rounded-lg bg-muted p-3">
                              <p className="text-sm font-medium">70% Water Reduction</p>
                              <p className="text-xs text-muted-foreground">
                                Our eco-friendly fields use 70% less water than traditional fields, saving approximately
                                840,000 liters per year per field.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h3 className="mb-2 text-lg font-medium">Water Sources</h3>
                          <div className="rounded-lg border p-4">
                            <div className="mb-4 grid grid-cols-2 gap-4">
                              <div className="text-center">
                                <div className="text-3xl font-bold text-blue-500">65%</div>
                                <p className="text-sm">Rainwater Harvesting</p>
                              </div>
                              <div className="text-center">
                                <div className="text-3xl font-bold text-blue-500">25%</div>
                                <p className="text-sm">Recycled Greywater</p>
                              </div>
                              <div className="text-center">
                                <div className="text-3xl font-bold text-blue-500">10%</div>
                                <p className="text-sm">Municipal Supply</p>
                              </div>
                              <div className="text-center">
                                <div className="text-3xl font-bold text-green-500">90%</div>
                                <p className="text-sm">Sustainable Sources</p>
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Our water management system prioritizes sustainable sources, with 90% coming from
                              rainwater harvesting and recycled greywater.
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </TabsContent>
            <TabsContent value="goals" className="mt-0">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold">Sustainability Goals</h2>
                  <p className="text-muted-foreground">
                    Our commitment to environmental sustainability and future targets
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>2025 Targets</CardTitle>
                      <CardDescription>Short-term sustainability goals</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <div className="mb-1 flex items-center justify-between">
                          <span className="flex items-center gap-2">
                            <Recycle className="h-4 w-4 text-green-500" />
                            <span>Recycle 50,000 kg of plastic</span>
                          </span>
                          <span className="font-medium">35% Complete</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-muted">
                          <div className="h-2 rounded-full bg-green-500" style={{ width: "35%" }}></div>
                        </div>
                      </div>

                      <div>
                        <div className="mb-1 flex items-center justify-between">
                          <span className="flex items-center gap-2">
                            <Droplet className="h-4 w-4 text-blue-500" />
                            <span>Save 2 million liters of water</span>
                          </span>
                          <span className="font-medium">42% Complete</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-muted">
                          <div className="h-2 rounded-full bg-blue-500" style={{ width: "42%" }}></div>
                        </div>
                      </div>

                      <div>
                        <div className="mb-1 flex items-center justify-between">
                          <span className="flex items-center gap-2">
                            <Thermometer className="h-4 w-4 text-orange-500" />
                            <span>Deploy 20 cooling-enabled fields</span>
                          </span>
                          <span className="font-medium">25% Complete</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-muted">
                          <div className="h-2 rounded-full bg-orange-500" style={{ width: "25%" }}></div>
                        </div>
                      </div>

                      <div>
                        <div className="mb-1 flex items-center justify-between">
                          <span className="flex items-center gap-2">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="text-gray-500"
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
                            <span>Reduce CO₂ by 30,000 kg</span>
                          </span>
                          <span className="font-medium">38% Complete</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-muted">
                          <div className="h-2 rounded-full bg-gray-500" style={{ width: "38%" }}></div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>2030 Vision</CardTitle>
                      <CardDescription>Long-term sustainability goals</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-4">
                        <li className="flex items-start gap-2">
                          <div className="mt-1 rounded-full bg-primary/10 p-1">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="text-primary"
                            >
                              <path
                                d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium">Carbon Neutral Operations</h4>
                            <p className="text-sm text-muted-foreground">
                              Achieve carbon neutrality across all manufacturing, transportation, and installation
                              processes.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="mt-1 rounded-full bg-primary/10 p-1">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="text-primary"
                            >
                              <path
                                d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium">100% Recycled Materials</h4>
                            <p className="text-sm text-muted-foreground">
                              Use only recycled or bio-based materials in all field components and accessories.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="mt-1 rounded-full bg-primary/10 p-1">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="text-primary"
                            >
                              <path
                                d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium">Zero Water Waste</h4>
                            <p className="text-sm text-muted-foreground">
                              Implement closed-loop water systems that eliminate the need for external water sources.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="mt-1 rounded-full bg-primary/10 p-1">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="text-primary"
                            >
                              <path
                                d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium">Global Impact</h4>
                            <p className="text-sm text-muted-foreground">
                              Deploy 1,000+ eco-friendly fields worldwide, with a focus on regions most affected by
                              climate change.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-8 rounded-xl border bg-muted p-6">
                  <h3 className="mb-4 text-xl font-bold">UN Sustainable Development Goals</h3>
                  <p className="mb-4 text-muted-foreground">
                    Our work contributes to the following United Nations Sustainable Development Goals:
                  </p>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="rounded-lg bg-card p-4 text-center">
                      <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300">
                        <span className="text-lg font-bold">6</span>
                      </div>
                      <h4 className="font-medium">Clean Water and Sanitation</h4>
                    </div>
                    <div className="rounded-lg bg-card p-4 text-center">
                      <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-300">
                        <span className="text-lg font-bold">11</span>
                      </div>
                      <h4 className="font-medium">Sustainable Cities and Communities</h4>
                    </div>
                    <div className="rounded-lg bg-card p-4 text-center">
                      <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300">
                        <span className="text-lg font-bold">13</span>
                      </div>
                      <h4 className="font-medium">Climate Action</h4>
                    </div>
                  </div>
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <div className="bg-muted/50 py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Join Our Sustainability Mission</h2>
            <p className="mb-6 text-lg text-muted-foreground">
              Download our app to track your environmental impact when using our eco-friendly sports fields
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="w-full sm:w-auto">
                Download the App
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Book a Field
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

