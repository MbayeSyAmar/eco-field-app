"use client"

import { useState } from "react"
import { Cloud, CloudRain, Sun, Thermometer, Droplets, Wind } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

// Mock weather data
const mockWeatherData = {
  current: {
    temp: 28,
    humidity: 65,
    windSpeed: 12,
    condition: "sunny", // sunny, cloudy, rainy
  },
  forecast: [
    { day: "Mon", temp: 28, condition: "sunny" },
    { day: "Tue", temp: 26, condition: "cloudy" },
    { day: "Wed", temp: 24, condition: "rainy" },
    { day: "Thu", temp: 25, condition: "cloudy" },
    { day: "Fri", temp: 27, condition: "sunny" },
  ],
  fieldCondition: "Good", // Good, Fair, Poor
  recommendedWaterLevel: "Medium", // Low, Medium, High
}

export default function WeatherWidget() {
  const [weather, setWeather] = useState(mockWeatherData)

  // Get weather condition icon
  const getWeatherIcon = (condition: string, size = 5) => {
    switch (condition) {
      case "sunny":
        return <Sun className={`h-${size} w-${size} text-yellow-500`} />
      case "cloudy":
        return <Cloud className={`h-${size} w-${size} text-gray-500`} />
      case "rainy":
        return <CloudRain className={`h-${size} w-${size} text-blue-500`} />
      default:
        return <Sun className={`h-${size} w-${size} text-yellow-500`} />
    }
  }

  // Get field condition color
  const getFieldConditionColor = (condition: string) => {
    switch (condition) {
      case "Good":
        return "bg-green-500"
      case "Fair":
        return "bg-yellow-500"
      case "Poor":
        return "bg-red-500"
      default:
        return "bg-green-500"
    }
  }

  return (
    <Tabs defaultValue="current">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="current">Current</TabsTrigger>
        <TabsTrigger value="forecast">Forecast</TabsTrigger>
      </TabsList>

      <TabsContent value="current" className="mt-2">
        <Card>
          <CardContent className="p-4">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="font-medium">Downtown EcoField</h3>
                <p className="text-xs text-muted-foreground">Current Conditions</p>
              </div>
              <div className="flex items-center gap-2">
                {getWeatherIcon(weather.current.condition, 6)}
                <span className="text-2xl font-bold">{weather.current.temp}°C</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div className="rounded-lg border p-2 text-center">
                <Thermometer className="mx-auto h-4 w-4 text-red-500" />
                <p className="mt-1 text-xs text-muted-foreground">Temp</p>
                <p className="text-sm font-medium">{weather.current.temp}°C</p>
              </div>
              <div className="rounded-lg border p-2 text-center">
                <Droplets className="mx-auto h-4 w-4 text-blue-500" />
                <p className="mt-1 text-xs text-muted-foreground">Humidity</p>
                <p className="text-sm font-medium">{weather.current.humidity}%</p>
              </div>
              <div className="rounded-lg border p-2 text-center">
                <Wind className="mx-auto h-4 w-4 text-gray-500" />
                <p className="mt-1 text-xs text-muted-foreground">Wind</p>
                <p className="text-sm font-medium">{weather.current.windSpeed} km/h</p>
              </div>
            </div>

            <div className="mt-3 rounded-lg border p-3">
              <div className="flex items-center gap-2 mb-1">
                <div className={`h-2 w-2 rounded-full ${getFieldConditionColor(weather.fieldCondition)}`}></div>
                <span className="text-sm font-medium">Field Condition: {weather.fieldCondition}</span>
              </div>
              <p className="text-xs text-muted-foreground">Recommended water level: {weather.recommendedWaterLevel}</p>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="forecast" className="mt-2">
        <Card>
          <CardContent className="p-4">
            <h3 className="font-medium mb-3">5-Day Forecast</h3>
            <div className="flex justify-between">
              {weather.forecast.map((day, index) => (
                <div key={index} className="flex flex-col items-center">
                  <p className="text-xs font-medium">{day.day}</p>
                  <div className="my-1">{getWeatherIcon(day.condition, 4)}</div>
                  <p className="text-xs">{day.temp}°C</p>
                </div>
              ))}
            </div>

            <div className="mt-3 rounded-lg border p-3">
              <h4 className="text-sm font-medium mb-1">Field Planning</h4>
              <p className="text-xs text-muted-foreground">Best days: Monday, Friday</p>
              <p className="text-xs text-muted-foreground mt-1">Maintenance: Wednesday</p>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}

