"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronRight } from "lucide-react"

export default function TechnologyPage() {
  const [activeTab, setActiveTab] = useState("materials")

  return (
    <div className="min-h-screen bg-background">
      <div className="relative py-20 md:py-32">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Our <span className="text-green-500">Technology</span>
            </h1>
            <p className="mb-6 text-lg text-muted-foreground md:text-xl">
              Discover the innovative technologies behind our eco-friendly sports fields
            </p>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-100 via-background to-background dark:from-green-950/20"></div>
      </div>

      <div className="container py-12">
        <Tabs defaultValue="materials" onValueChange={setActiveTab} className="mx-auto max-w-4xl">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="materials">Recycled Materials</TabsTrigger>
            <TabsTrigger value="cooling">Cooling System</TabsTrigger>
            <TabsTrigger value="monitoring">Smart Monitoring</TabsTrigger>
          </TabsList>

          <TabsContent value="materials" className="mt-8">
            <div className="grid gap-8 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col justify-center"
              >
                <h2 className="mb-4 text-3xl font-bold">Recycled Plastic Tiles</h2>
                <p className="mb-4 text-muted-foreground">
                  Our modular field tiles are made from 100% recycled plastic waste, diverting thousands of tons of
                  plastic from landfills and oceans.
                </p>
                <ul className="mb-6 grid gap-3">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="mt-1 h-4 w-4 text-green-500" />
                    <span>Each tile contains the equivalent of 400 plastic bottles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="mt-1 h-4 w-4 text-green-500" />
                    <span>Modular design allows for easy installation and replacement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="mt-1 h-4 w-4 text-green-500" />
                    <span>Durable material withstands heavy use and extreme weather</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="mt-1 h-4 w-4 text-green-500" />
                    <span>100% recyclable at end of life (15+ year lifespan)</span>
                  </li>
                </ul>
                <Button className="w-fit gap-2">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center justify-center"
              >
                <div className="relative h-[300px] w-full max-w-[400px] overflow-hidden rounded-xl shadow-2xl">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Recycled plastic tiles"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>

            <div className="mt-12 rounded-xl border bg-muted/50 p-6">
              <h3 className="mb-4 text-xl font-bold">Manufacturing Process</h3>
              <div className="grid gap-6 md:grid-cols-4">
                <div className="rounded-lg bg-card p-4 shadow-sm">
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary">
                    1
                  </div>
                  <h4 className="mb-2 font-medium">Collection</h4>
                  <p className="text-sm text-muted-foreground">
                    Plastic waste is collected from recycling centers and ocean cleanup initiatives
                  </p>
                </div>
                <div className="rounded-lg bg-card p-4 shadow-sm">
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary">
                    2
                  </div>
                  <h4 className="mb-2 font-medium">Processing</h4>
                  <p className="text-sm text-muted-foreground">
                    Plastic is cleaned, sorted, and shredded into small flakes
                  </p>
                </div>
                <div className="rounded-lg bg-card p-4 shadow-sm">
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary">
                    3
                  </div>
                  <h4 className="mb-2 font-medium">Molding</h4>
                  <p className="text-sm text-muted-foreground">
                    Flakes are melted and injection-molded into our patented tile design
                  </p>
                </div>
                <div className="rounded-lg bg-card p-4 shadow-sm">
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary">
                    4
                  </div>
                  <h4 className="mb-2 font-medium">Installation</h4>
                  <p className="text-sm text-muted-foreground">
                    Tiles are transported and installed using our low-carbon logistics network
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="cooling" className="mt-8">
            <div className="grid gap-8 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col justify-center"
              >
                <h2 className="mb-4 text-3xl font-bold">Passive Cooling System</h2>
                <p className="mb-4 text-muted-foreground">
                  Our innovative passive cooling system uses micro-channels beneath the field surface to naturally
                  reduce temperatures without energy consumption.
                </p>
                <ul className="mb-6 grid gap-3">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="mt-1 h-4 w-4 text-green-500" />
                    <span>Reduces surface temperature by up to 8°C compared to traditional fields</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="mt-1 h-4 w-4 text-green-500" />
                    <span>Water circulates through micro-channels using natural convection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="mt-1 h-4 w-4 text-green-500" />
                    <span>Rainwater collection system provides sustainable water source</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="mt-1 h-4 w-4 text-green-500" />
                    <span>Zero energy consumption for cooling operation</span>
                  </li>
                </ul>
                <Button className="w-fit gap-2">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center justify-center"
              >
                <div className="relative h-[300px] w-full max-w-[400px] overflow-hidden rounded-xl shadow-2xl">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Passive cooling system"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>

            <div className="mt-12 rounded-xl border bg-muted/50 p-6">
              <h3 className="mb-4 text-xl font-bold">How It Works</h3>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-lg bg-card p-4 shadow-sm">
                  <h4 className="mb-2 font-medium">Water Collection</h4>
                  <p className="text-sm text-muted-foreground">
                    Rainwater is collected from the field surface and surrounding areas, filtered, and stored in
                    underground reservoirs.
                  </p>
                </div>
                <div className="rounded-lg bg-card p-4 shadow-sm">
                  <h4 className="mb-2 font-medium">Circulation System</h4>
                  <p className="text-sm text-muted-foreground">
                    A network of micro-channels beneath the field surface allows water to circulate using natural
                    temperature differentials.
                  </p>
                </div>
                <div className="rounded-lg bg-card p-4 shadow-sm">
                  <h4 className="mb-2 font-medium">Heat Exchange</h4>
                  <p className="text-sm text-muted-foreground">
                    As water flows through the channels, it absorbs heat from the surface and carries it away, cooling
                    the field naturally.
                  </p>
                </div>
              </div>
              <div className="mt-6 rounded-lg bg-card p-4 shadow-sm">
                <h4 className="mb-2 font-medium">Temperature Comparison</h4>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h5 className="text-sm font-medium">Traditional Field</h5>
                    <div className="mt-2 h-8 w-full rounded-lg bg-gradient-to-r from-orange-300 to-red-500 p-1">
                      <div className="flex h-full items-center justify-end pr-2 text-xs font-bold text-white">35°C</div>
                    </div>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium">EcoField with Cooling</h5>
                    <div className="mt-2 h-8 w-full rounded-lg bg-gradient-to-r from-green-300 to-blue-500 p-1">
                      <div className="flex h-full items-center justify-end pr-2 text-xs font-bold text-white">27°C</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="monitoring" className="mt-8">
            <div className="grid gap-8 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col justify-center"
              >
                <h2 className="mb-4 text-3xl font-bold">Smart Monitoring System</h2>
                <p className="mb-4 text-muted-foreground">
                  Our fields are equipped with advanced sensors and IoT technology to monitor conditions and optimize
                  performance in real-time.
                </p>
                <ul className="mb-6 grid gap-3">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="mt-1 h-4 w-4 text-green-500" />
                    <span>Temperature sensors monitor surface and ambient conditions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="mt-1 h-4 w-4 text-green-500" />
                    <span>Moisture sensors optimize water usage and prevent waste</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="mt-1 h-4 w-4 text-green-500" />
                    <span>Usage tracking provides insights on field utilization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="mt-1 h-4 w-4 text-green-500" />
                    <span>Predictive maintenance alerts prevent costly repairs</span>
                  </li>
                </ul>
                <Button className="w-fit gap-2">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center justify-center"
              >
                <div className="relative h-[300px] w-full max-w-[400px] overflow-hidden rounded-xl shadow-2xl">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Smart monitoring system"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>

            <div className="mt-12 rounded-xl border bg-muted/50 p-6">
              <h3 className="mb-4 text-xl font-bold">Data Dashboard</h3>
              <div className="rounded-lg bg-card p-4 shadow-sm">
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-lg border p-3">
                    <h4 className="text-sm font-medium">Temperature Monitoring</h4>
                    <div className="mt-2 flex items-end justify-between">
                      <div className="text-2xl font-bold">27.5°C</div>
                      <div className="flex items-center text-sm text-green-500">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M7 17L17 7"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M7 7H17V17"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span>-4.2°C</span>
                      </div>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">Surface temperature</p>
                  </div>
                  <div className="rounded-lg border p-3">
                    <h4 className="text-sm font-medium">Moisture Level</h4>
                    <div className="mt-2 flex items-end justify-between">
                      <div className="text-2xl font-bold">42%</div>
                      <div className="flex items-center text-sm text-green-500">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M7 17L17 7"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M7 7H17V17"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span>Optimal</span>
                      </div>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">Field moisture content</p>
                  </div>
                  <div className="rounded-lg border p-3">
                    <h4 className="text-sm font-medium">Field Usage</h4>
                    <div className="mt-2 flex items-end justify-between">
                      <div className="text-2xl font-bold">12.5h</div>
                      <div className="flex items-center text-sm text-blue-500">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M17 7L7 17"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M17 17H7V7"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span>+2.3h</span>
                      </div>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">Weekly usage time</p>
                  </div>
                </div>
                <div className="mt-4 rounded-lg border p-3">
                  <h4 className="mb-2 text-sm font-medium">System Status</h4>
                  <div className="grid gap-2 md:grid-cols-4">
                    <div className="flex items-center gap-2 rounded-lg bg-green-100 p-2 dark:bg-green-900/30">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <span className="text-xs font-medium">Cooling System</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-lg bg-green-100 p-2 dark:bg-green-900/30">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <span className="text-xs font-medium">Water Circulation</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-lg bg-green-100 p-2 dark:bg-green-900/30">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <span className="text-xs font-medium">Sensor Network</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-lg bg-yellow-100 p-2 dark:bg-yellow-900/30">
                      <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                      <span className="text-xs font-medium">Maintenance Due</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mx-auto mt-16 max-w-4xl rounded-xl bg-muted p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold">Compare to Traditional Fields</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border p-2 text-left"></th>
                  <th className="border p-2 text-left">EcoField</th>
                  <th className="border p-2 text-left">Traditional Field</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2 font-medium">Materials</td>
                  <td className="border p-2">100% recycled plastic</td>
                  <td className="border p-2">Virgin synthetic materials</td>
                </tr>
                <tr>
                  <td className="border p-2 font-medium">Water Usage</td>
                  <td className="border p-2">70% less water</td>
                  <td className="border p-2">High water consumption</td>
                </tr>
                <tr>
                  <td className="border p-2 font-medium">Surface Temperature</td>
                  <td className="border p-2">Up to 8°C cooler</td>
                  <td className="border p-2">Can reach 60°C+ in summer</td>
                </tr>
                <tr>
                  <td className="border p-2 font-medium">Maintenance</td>
                  <td className="border p-2">Minimal, predictive</td>
                  <td className="border p-2">Regular, reactive</td>
                </tr>
                <tr>
                  <td className="border p-2 font-medium">Lifespan</td>
                  <td className="border p-2">15+ years</td>
                  <td className="border p-2">8-10 years</td>
                </tr>
                <tr>
                  <td className="border p-2 font-medium">End of Life</td>
                  <td className="border p-2">100% recyclable</td>
                  <td className="border p-2">Landfill waste</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="bg-muted/50 py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Ready to Experience the Future?</h2>
            <p className="mb-6 text-lg text-muted-foreground">
              Download our app to book eco-friendly sports fields, monitor environmental impact, and join our community.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="w-full sm:w-auto">
                Download the App
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

