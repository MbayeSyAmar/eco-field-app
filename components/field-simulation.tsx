"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Thermometer, Droplets } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function FieldSimulation() {
  const [temperature, setTemperature] = useState(28)
  const [coolingActive, setCoolingActive] = useState(false)
  const [waterFlow, setWaterFlow] = useState(50)

  const handleTemperatureChange = (value: number[]) => {
    setTemperature(value[0])
  }

  const handleWaterFlowChange = (value: number[]) => {
    setWaterFlow(value[0])
  }

  const toggleCooling = () => {
    setCoolingActive(!coolingActive)
  }

  // Calculate field temperature based on cooling system and ambient temperature
  const fieldTemperature = coolingActive ? Math.max(temperature - waterFlow / 10, temperature - 8) : temperature

  return (
    <Card>
      <CardContent className="p-4">
        <div className="relative h-36 w-full rounded-lg border bg-gradient-to-b from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30 mb-4">
          {/* Field surface */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="grid h-full w-full grid-cols-4 grid-rows-4 gap-px">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="bg-green-500/80 dark:bg-green-600/80"></div>
              ))}
            </div>
          </div>

          {/* Water circulation animation */}
          {coolingActive && (
            <div className="absolute inset-0">
              <div className="relative h-full w-full overflow-hidden">
                {Array.from({ length: 8 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute h-1 w-6 rounded-full bg-blue-400"
                    style={{
                      top: `${15 + i * 10}%`,
                      left: "-10%",
                    }}
                    animate={{
                      left: ["0%", "100%"],
                      opacity: [0, 1, 1, 0],
                    }}
                    transition={{
                      duration: 3,
                      delay: i * 0.3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Temperature indicator */}
          <div className="absolute bottom-2 right-2 rounded-full bg-white p-2 shadow-md dark:bg-gray-800">
            <div className="flex items-center gap-1">
              <Thermometer className={`h-3 w-3 ${fieldTemperature > 25 ? "text-red-500" : "text-blue-500"}`} />
              <span className="text-xs font-bold">{fieldTemperature.toFixed(1)}°C</span>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div>
            <div className="flex items-center justify-between mb-1">
              <Label htmlFor="ambient-temp" className="text-xs">
                Ambient Temperature
              </Label>
              <div className="flex items-center gap-1 text-xs">
                <Thermometer className="h-3 w-3 text-orange-500" />
                {temperature}°C
              </div>
            </div>
            <Slider
              id="ambient-temp"
              defaultValue={[28]}
              max={40}
              min={15}
              step={1}
              onValueChange={handleTemperatureChange}
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <Label htmlFor="water-flow" className="text-xs">
                Water Flow Rate
              </Label>
              <div className="flex items-center gap-1 text-xs">
                <Droplets className="h-3 w-3 text-blue-500" />
                {waterFlow}%
              </div>
            </div>
            <Slider
              id="water-flow"
              defaultValue={[50]}
              max={100}
              min={0}
              step={5}
              disabled={!coolingActive}
              onValueChange={handleWaterFlowChange}
            />
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="cooling-system" className="text-xs">
              Cooling System
            </Label>
            <Switch id="cooling-system" checked={coolingActive} onCheckedChange={toggleCooling} />
          </div>

          <div className="text-center mt-2">
            <div className="flex items-center justify-center gap-2">
              <div
                className={`h-2 w-2 rounded-full ${fieldTemperature > 30 ? "bg-red-500" : fieldTemperature > 25 ? "bg-orange-500" : "bg-green-500"}`}
              ></div>
              <span className="text-xs">
                {fieldTemperature > 30 ? "Too Hot" : fieldTemperature > 25 ? "Warm" : "Optimal"}
              </span>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              {coolingActive
                ? `Cooling active: ${(temperature - fieldTemperature).toFixed(1)}°C reduction`
                : "Cooling system inactive"}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

