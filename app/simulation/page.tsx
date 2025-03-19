"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Thermometer, Droplets, Wind, Sun, Cloud, CloudRain } from "lucide-react"
import FieldSimulation from "@/components/field-simulation"
import React from "react";


export default function SimulationPage() {
  const [activeTab, setActiveTab] = useState("basic")
  const [weatherCondition, setWeatherCondition] = useState("sunny")

  return (
    <div className="min-h-screen bg-background">
      <div className="relative py-20 md:py-32">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Interactive <span className="text-green-500">Simulation</span>
            </h1>
            <p className="mb-6 text-lg text-muted-foreground md:text-xl">
              Experience how our eco-friendly field technology works in different conditions
            </p>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-100 via-background to-background dark:from-green-950/20"></div>
      </div>

      <div className="container py-12">
        <div className="mx-auto max-w-4xl">
          <Tabs defaultValue="basic" onValueChange={setActiveTab} className="mb-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="basic">Basic Simulation</TabsTrigger>
              <TabsTrigger value="advanced">Advanced Controls</TabsTrigger>
              <TabsTrigger value="comparison">Comparison View</TabsTrigger>
            </TabsList>
          </Tabs>

          <TabsContent value="basic" className="mt-0">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="mb-6">
                <h2 className="text-2xl font-bold">Basic Field Simulation</h2>
                <p className="text-muted-foreground">
                  Interact with our cooling system to see how it affects field temperature
                </p>
              </div>

              <FieldSimulation />

              <div className="mt-8 rounded-lg border bg-card p-6">
                <h3 className="mb-4 text-xl font-bold">How It Works</h3>
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="rounded-lg border p-4">
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary">
                      1
                    </div>
                    <h4 className="mb-2 font-medium">Temperature Sensing</h4>
                    <p className="text-sm text-muted-foreground">
                      Embedded sensors continuously monitor the field surface temperature
                    </p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary">
                      2
                    </div>
                    <h4 className="mb-2 font-medium">Water Circulation</h4>
                    <p className="text-sm text-muted-foreground">
                      When activated, water flows through micro-channels beneath the surface
                    </p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary">
                      3
                    </div>
                    <h4 className="mb-2 font-medium">Heat Dissipation</h4>
                    <p className="text-sm text-muted-foreground">
                      The circulating water absorbs heat from the surface, cooling it naturally
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="advanced" className="mt-0">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="mb-6">
                <h2 className="text-2xl font-bold">Advanced Simulation Controls</h2>
                <p className="text-muted-foreground">
                  Fine-tune environmental parameters to test field performance in various conditions
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle>Environmental Controls</CardTitle>
                      <CardDescription>Adjust weather conditions to test field performance</CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-6">
                      <div>
                        <div className="mb-2 flex items-center justify-between">
                          <Label htmlFor="ambient-temp">Ambient Temperature</Label>
                          <div className="flex items-center gap-1 text-sm font-medium">
                            <Thermometer className="h-4 w-4 text-orange-500" />
                            28°C
                          </div>
                        </div>
                        <Slider id="ambient-temp" defaultValue={[28]} max={40} min={15} step={1} />
                      </div>

                      <div>
                        <div className="mb-2 flex items-center justify-between">
                          <Label htmlFor="humidity">Humidity</Label>
                          <div className="flex items-center gap-1 text-sm font-medium">
                            <Droplets className="h-4 w-4 text-blue-500" />
                            65%
                          </div>
                        </Slider>
                      </div>

                      <div>
                        <div className="mb-2 flex items-center justify-between">
                          <Label htmlFor="wind-speed">Wind Speed</Label>
                          <div className="flex items-center gap-1 text-sm font-medium">
                            <Wind className="h-4 w-4 text-gray-500" />
                            12 km/h
                          </div>
                        </div>
                        <Slider id="wind-speed" defaultValue={[12]} max={30} min={0} step={1} />
                      </div>

                      <div>
                        <Label className="mb-2 block">Weather Condition</Label>
                        <div className="grid grid-cols-3 gap-2">
                          <div
                            className={`flex cursor-pointer flex-col items-center justify-center rounded-lg border p-3 transition-colors hover:bg-accent ${weatherCondition === "sunny" ? "border-primary bg-primary/10" : ""}`}
                            onClick={() => setWeatherCondition("sunny")}
                          >
                            <Sun className="mb-1 h-6 w-6 text-yellow-500" />
                            <span className="text-xs">Sunny</span>
                          </div>
                          <div
                            className={`flex cursor-pointer flex-col items-center justify-center rounded-lg border p-3 transition-colors hover:bg-accent ${weatherCondition === "cloudy" ? "border-primary bg-primary/10" : ""}`}
                            onClick={() => setWeatherCondition("cloudy")}
                          >
                            <Cloud className="mb-1 h-6 w-6 text-gray-500" />
                            <span className="text-xs">Cloudy</span>
                          </div>
                          <div
                            className={`flex cursor-pointer flex-col items-center justify-center rounded-lg border p-3 transition-colors hover:bg-accent ${weatherCondition === "rainy" ? "border-primary bg-primary/10" : ""}`}
                            onClick={() => setWeatherCondition("rainy")}
                          >
                            <CloudRain className="mb-1 h-6 w-6 text-blue-500" />
                            <span className="text-xs">Rainy</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <Label htmlFor="direct-sunlight">Direct Sunlight</Label>
                        <Switch id="direct-sunlight" defaultChecked />
                      </div>

                      <div className="flex items-center justify-between">
                        <Label htmlFor="cooling-system">Cooling System</Label>
                        <Switch id="cooling-system" defaultChecked />
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle>Simulation Results</CardTitle>
                      <CardDescription>Real-time field performance metrics</CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-6">
                      <div className="relative h-48 w-full rounded-lg border bg-gradient-to-b from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30">
                        {/* Field surface */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="grid h-full w-full grid-cols-4 grid-rows-4 gap-px">
                            {Array.from({ length: 16 }).map((_, i) => (
                              <div key={i} className="bg-green-500/80 dark:bg-green-600/80"></div>
                            ))}
                          </div>
                        </div>

                        {/* Water circulation animation */}
                        <div className="absolute inset-0">
                          <div className="relative h-full w-full overflow-hidden">
                            {Array.from({ length: 8 }).map((_, i) => (
                              <motion.div
                                key={i}
                                className="absolute h-1 w-8 rounded-full bg-blue-400"
                                style={{
                                  top: `${15 + i * 10}%`,
                                  left: "-10%",
                                }}
                                animate={{
                                  left: ["0%", "100%"],
                                  opacity: [0, 1, 1, 0],
                                }}
                                transition={{
                                  duration: 4,
                                  delay: i * 0.5,
                                  repeat: Number.POSITIVE_INFINITY,
                                  ease: "linear",
                                }}
                              />
                            ))}
                          </div>
                        </div>

                        {/* Temperature indicator */}
                        <div className="absolute bottom-2 right-2 rounded-full bg-white p-2 shadow-md dark:bg-gray-800">
                          <div className="flex items-center gap-1">
                            <Thermometer className="h-4 w-4 text-blue-500" />
                            <span className="text-xs font-bold">24.5°C</span>
                          </div>
                        </div>

                        {/* Weather indicator */}
                        <div className="absolute top-2 right-2 rounded-full bg-white p-2 shadow-md dark:bg-gray-800">
                          <Sun className="h-4 w-4 text-yellow-500" />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-lg border p-3">
                          <h4 className="text-sm font-medium">Surface Temperature</h4>
                          <div className="mt-2 flex items-end justify-between">
                            <div className="text-2xl font-bold">24.5°C</div>
                            <div className="flex items-center text-sm text-green-500">
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
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
                              <span>-3.5°C</span>
                            </div>
                          </div>
                        </div>
                        <div className="rounded-lg border p-3">
                          <h4 className="text-sm font-medium">Water Flow Rate</h4>
                          <div className="mt-2 flex items-end justify-between">
                            <div className="text-2xl font-bold">65%</div>
                            <div className="flex items-center text-sm text-green-500">
                              <span>Optimal</span>
                            </div>
                          </div>
                        </div>
                        <div className="rounded-lg border p-3">
                          <h4 className="text-sm font-medium">Cooling Efficiency</h4>
                          <div className="mt-2 flex items-end justify-between">
                            <div className="text-2xl font-bold">87%</div>
                            <div className="flex items-center text-sm text-green-500">
                              <span>High</span>
                            </div>
                          </div>
                        </div>
                        <div className="rounded-lg border p-3">
                          <h4 className="text-sm font-medium">Energy Savings</h4>
                          <div className="mt-2 flex items-end justify-between">
                            <div className="text-2xl font-bold">100%</div>
                            <div className="flex items-center text-sm text-green-500">
                              <span>Passive</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="comparison" className="mt-0">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="mb-6">
                <h2 className="text-2xl font-bold">Comparison View</h2>
                <p className="text-muted-foreground">
                  Compare our eco-friendly field with traditional fields under the same conditions
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>EcoField</CardTitle>
                    <CardDescription>With passive cooling technology</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="relative h-48 w-full rounded-lg border bg-gradient-to-b from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30">
                      {/* Field surface */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="grid h-full w-full grid-cols-4 grid-rows-4 gap-px">
                          {Array.from({ length: 16 }).map((_, i) => (
                            <div key={i} className="bg-green-500/80 dark:bg-green-600/80"></div>
                          ))}
                        </div>
                      </div>

                      {/* Water circulation animation */}
                      <div className="absolute inset-0">
                        <div className="relative h-full w-full overflow-hidden">
                          {Array.from({ length: 8 }).map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute h-1 w-8 rounded-full bg-blue-400"
                              style={{
                                top: `${15 + i * 10}%`,
                                left: "-10%",
                              }}
                              animate={{
                                left: ["0%", "100%"],
                                opacity: [0, 1, 1, 0],
                              }}
                              transition={{
                                duration: 4,
                                delay: i * 0.5,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "linear",
                              }}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Temperature indicator */}
                      <div className="absolute bottom-2 right-2 rounded-full bg-white p-2 shadow-md dark:bg-gray-800">
                        <div className="flex items-center gap-1">
                          <Thermometer className="h-4 w-4 text-blue-500" />
                          <span className="text-xs font-bold">24.5°C</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 grid gap-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Surface Temperature</span>
                        <span className="font-medium">24.5°C</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Material</span>
                        <span className="font-medium">Recycled Plastic</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Water Usage</span>
                        <span className="font-medium">Minimal (Recycled)</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Energy Consumption</span>
                        <span className="font-medium">None (Passive)</span>
                      </div>
                    </div>

                    <div className="mt-4 rounded-lg bg-green-100 p-3 dark:bg-green-900/30">
                      <h4 className="font-medium text-green-800 dark:text-green-300">Benefits</h4>
                      <ul className="mt-2 grid gap-1 text-sm text-green-800 dark:text-green-300">
                        <li className="flex items-start gap-2">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="mt-0.5"
                          >
                            <path
                              d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span>Cooler playing surface</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="mt-0.5"
                          >
                            <path
                              d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span>Made from recycled materials</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="mt-0.5"
                          >
                            <path
                              d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span>Zero energy consumption</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Traditional Field</CardTitle>
                    <CardDescription>Standard synthetic turf</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="relative h-48 w-full rounded-lg border bg-gradient-to-b from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30">
                      {/* Field surface */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="grid h-full w-full grid-cols-4 grid-rows-4 gap-px">
                          {Array.from({ length: 16 }).map((_, i) => (
                            <div key={i} className="bg-green-600/80 dark:bg-green-700/80"></div>
                          ))}
                        </div>
                      </div>

                      {/* Heat waves animation */}
                      <div className="absolute inset-0">
                        <div className="relative h-full w-full overflow-hidden">
                          {Array.from({ length: 8 }).map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute h-1 w-8 rounded-full bg-red-400/30"
                              style={{
                                top: `${15 + i * 10}%`,
                                left: "50%",
                              }}
                              animate={{
                                y: [0, -10, 0],
                                opacity: [0.3, 0.7, 0.3],
                                scale: [1, 1.2, 1],
                              }}
                              transition={{
                                duration: 2,
                                delay: i * 0.3,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                              }}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Temperature indicator */}
                      <div className="absolute bottom-2 right-2 rounded-full bg-white p-2 shadow-md dark:bg-gray-800">
                        <div className="flex items-center gap-1">
                          <Thermometer className="h-4 w-4 text-red-500" />
                          <span className="text-xs font-bold">35.2°C</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 grid gap-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Surface Temperature</span>
                        <span className="font-medium">35.2°C</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Material</span>
                        <span className="font-medium">Virgin Synthetic</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Water Usage</span>
                        <span className="font-medium">High (Irrigation)</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Energy Consumption</span>
                        <span className="font-medium">High (Cooling)</span>
                      </div>
                    </div>

                    <div className="mt-4 rounded-lg bg-red-100 p-3 dark:bg-red-900/30">
                      <h4 className="font-medium text-red-800 dark:text-red-300">Drawbacks</h4>
                      <ul className="mt-2 grid gap-1 text-sm text-red-800 dark:text-red-300">
                        <li className="flex items-start gap-2">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="mt-0.5"
                          >
                            <path
                              d="M12 8V12M12 16H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span>Excessive heat retention</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="mt-0.5"
                          >
                            <path
                              d="M12 8V12M12 16H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span>Non-renewable materials</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="mt-0.5"
                          >
                            <path
                              d="M12 8V12M12 16H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span>High water & energy usage</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 rounded-xl border bg-muted p-6">
                <h3 className="mb-4 text-xl font-bold">Temperature Comparison Over Time</h3>
                <div className="h-64 w-full rounded-lg bg-card p-4">
                  <div className="flex h-full flex-col justify-between">
                    <div className="grid h-full grid-cols-1 gap-4">
                      <div className="relative h-full">
                        {/* Temperature graph placeholder */}
                        <div className="absolute bottom-0 left-0 h-1/3 w-full border-t border-dashed border-muted-foreground/30"></div>
                        <div className="absolute bottom-0 left-0 h-2/3 w-full border-t border-dashed border-muted-foreground/30"></div>

                        {/* EcoField line */}
                        <div className="absolute bottom-0 left-0 h-full w-full">
                          <svg viewBox="0 0 100 100" className="h-full w-full overflow-visible">
                            <path
                              d="M0,70 C10,65 20,60 30,58 C40,56 50,55 60,54 C70,53 80,52 90,51 L100,50"
                              fill="none"
                              stroke="hsl(var(--primary))"
                              strokeWidth="2"
                            />
                          </svg>
                        </div>

                        {/* Traditional field line */}
                        <div className="absolute bottom-0 left-0 h-full w-full">
                          <svg viewBox="0 0 100 100" className="h-full w-full overflow-visible">
                            <path
                              d="M0,50 C10,40 20,30 30,25 C40,20 50,18 60,15 C70,12 80,10 90,8 L100,5"
                              fill="none"
                              stroke="hsl(var(--destructive))"
                              strokeWidth="2"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                      <span>9 AM</span>
                      <span>12 PM</span>
                      <span>3 PM</span>
                      <span>6 PM</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-center gap-8">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-primary"></div>
                    <span className="text-sm">EcoField</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-destructive"></div>
                    <span className="text-sm">Traditional Field</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </TabsContent>
        </div>
      </div>

      <div className="bg-muted/50 py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Experience It Yourself</h2>
            <p className="mb-6 text-lg text-muted-foreground">
              Book a field or download our app to experience the benefits of our eco-friendly sports fields
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="w-full sm:w-auto">
                Book a Field
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Download the App
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

