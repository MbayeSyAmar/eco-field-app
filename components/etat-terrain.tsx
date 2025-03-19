"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts"

// Données simulées pour les graphiques
const donneesTemperature = [
  { heure: "9h", valeur: 26 },
  { heure: "10h", valeur: 27 },
  { heure: "11h", valeur: 28 },
  { heure: "12h", valeur: 30 },
  { heure: "13h", valeur: 31 },
  { heure: "14h", valeur: 30 },
  { heure: "15h", valeur: 29 },
]

const donneesConsommation = [
  { jour: "Lun", eau: 120, energie: 80 },
  { jour: "Mar", eau: 100, energie: 70 },
  { jour: "Mer", eau: 140, energie: 90 },
  { jour: "Jeu", eau: 110, energie: 85 },
  { jour: "Ven", eau: 130, energie: 75 },
  { jour: "Sam", eau: 180, energie: 100 },
  { jour: "Dim", eau: 90, energie: 60 },
]

type DonneesTerrain = {
  temperature: number
  niveauEau: number
  consommationEnergie: number
  dureeUtilisation: number
  refroidissementActif: boolean
  eclairageActif: boolean
  intensiteEclairage: number
  alertes: any[]
}

interface EtatTerrainProps {
  donnees: DonneesTerrain
}

export function EtatTerrain({ donnees }: EtatTerrainProps) {
  // Formater la durée d'utilisation en heures et minutes
  const formaterDuree = (minutes: number) => {
    const heures = Math.floor(minutes / 60)
    const mins = minutes % 60
    return `${heures}h ${mins}min`
  }

  return (
    <Card>
      <CardContent className="p-4">
        <Tabs defaultValue="temperature" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="temperature">Température</TabsTrigger>
            <TabsTrigger value="consommation">Consommation</TabsTrigger>
          </TabsList>

          <TabsContent value="temperature">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium">Température actuelle</p>
                  <p className="text-2xl font-bold">{donnees.temperature.toFixed(1)}°C</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">Durée d'utilisation</p>
                  <p className="text-lg">{formaterDuree(donnees.dureeUtilisation)}</p>
                </div>
              </div>

              <div className="h-40 w-full mt-2">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={donneesTemperature} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                    <XAxis dataKey="heure" tick={{ fontSize: 10 }} />
                    <YAxis tick={{ fontSize: 10 }} domain={[20, 35]} />
                    <Tooltip contentStyle={{ fontSize: "12px" }} formatter={(value) => [`${value}°C`, "Température"]} />
                    <Line
                      type="monotone"
                      dataKey="valeur"
                      stroke="#10b981"
                      strokeWidth={2}
                      dot={{ r: 3 }}
                      activeDot={{ r: 5 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="text-xs text-center text-muted-foreground">
                Évolution de la température sur les dernières heures
              </div>
            </div>
          </TabsContent>

          <TabsContent value="consommation">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium">Consommation d'eau</p>
                  <p className="text-lg font-bold">{donnees.niveauEau * 2} L</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">Consommation d'énergie</p>
                  <p className="text-lg font-bold">{donnees.consommationEnergie} kWh</p>
                </div>
              </div>

              <div className="h-40 w-full mt-2">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={donneesConsommation} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                    <XAxis dataKey="jour" tick={{ fontSize: 10 }} />
                    <YAxis tick={{ fontSize: 10 }} />
                    <Tooltip contentStyle={{ fontSize: "12px" }} />
                    <Bar dataKey="eau" fill="#3b82f6" name="Eau (L)" />
                    <Bar dataKey="energie" fill="#10b981" name="Énergie (kWh)" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="text-xs text-center text-muted-foreground">
                Consommation hebdomadaire d'eau et d'énergie
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

