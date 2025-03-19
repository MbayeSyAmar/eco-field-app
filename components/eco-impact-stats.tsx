"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Recycle, Droplet, Thermometer } from "lucide-react"

export default function EcoImpactStats() {
  const [timeframe, setTimeframe] = useState("month")

  // Mock data for different timeframes
  const impactData = {
    week: {
      plasticRecycled: 250,
      waterSaved: 1200,
      temperatureReduction: 5.2,
      co2Reduced: 180,
    },
    month: {
      plasticRecycled: 1200,
      waterSaved: 5800,
      temperatureReduction: 6.5,
      co2Reduced: 850,
    },
    year: {
      plasticRecycled: 14500,
      waterSaved: 68000,
      temperatureReduction: 7.2,
      co2Reduced: 10200,
    },
  }

  // Get current data based on timeframe
  const currentData = impactData[timeframe as keyof typeof impactData]

  return (
    <Card>
      <CardContent className="p-4">
        <Tabs defaultValue="month" onValueChange={setTimeframe} className="mb-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="week">Week</TabsTrigger>
            <TabsTrigger value="month">Month</TabsTrigger>
            <TabsTrigger value="year">Year</TabsTrigger>
          </TabsList>
          <TabsContent value="week">{/* Week content is handled by the shared card layout below */}</TabsContent>
          <TabsContent value="month">{/* Month content is handled by the shared card layout below */}</TabsContent>
          <TabsContent value="year">{/* Year content is handled by the shared card layout below */}</TabsContent>
        </Tabs>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-green-100 p-2">
              <Recycle className="h-4 w-4 text-green-600" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between mb-1">
                <span className="text-xs text-muted-foreground">Plastic Recycled</span>
                <span className="text-xs font-medium">{currentData.plasticRecycled.toLocaleString()} kg</span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-muted">
                <div
                  className="h-1.5 rounded-full bg-green-500"
                  style={{ width: `${Math.min((currentData.plasticRecycled / 15000) * 100, 100)}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="rounded-full bg-blue-100 p-2">
              <Droplet className="h-4 w-4 text-blue-600" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between mb-1">
                <span className="text-xs text-muted-foreground">Water Saved</span>
                <span className="text-xs font-medium">{currentData.waterSaved.toLocaleString()} L</span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-muted">
                <div
                  className="h-1.5 rounded-full bg-blue-500"
                  style={{ width: `${Math.min((currentData.waterSaved / 70000) * 100, 100)}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="rounded-full bg-orange-100 p-2">
              <Thermometer className="h-4 w-4 text-orange-600" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between mb-1">
                <span className="text-xs text-muted-foreground">Temperature Reduction</span>
                <span className="text-xs font-medium">{currentData.temperatureReduction}°C</span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-muted">
                <div
                  className="h-1.5 rounded-full bg-orange-500"
                  style={{ width: `${Math.min((currentData.temperatureReduction / 8) * 100, 100)}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="rounded-full bg-gray-100 p-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-600"
              >
                <path
                  d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M12 2V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
                <path d="M2 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
            </div>
            <div className="flex-1">
              <div className="flex justify-between mb-1">
                <span className="text-xs text-muted-foreground">CO₂ Reduction</span>
                <span className="text-xs font-medium">{currentData.co2Reduced.toLocaleString()} kg</span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-muted">
                <div
                  className="h-1.5 rounded-full bg-gray-500"
                  style={{ width: `${Math.min((currentData.co2Reduced / 12000) * 100, 100)}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

