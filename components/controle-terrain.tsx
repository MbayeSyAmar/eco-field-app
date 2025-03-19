"use client"



import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Droplets, Sun, Power } from "lucide-react"

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

interface ControlTerrainProps {
  donnees: DonneesTerrain
  setDonnees: React.Dispatch<React.SetStateAction<DonneesTerrain>>
}

export function ControleTerrain({ donnees, setDonnees }: ControlTerrainProps) {
  const [couleurSelectionnee, setCouleurSelectionnee] = useState("#4ade80")
  const [ongletControle, setOngletControle] = useState("couleur")

  const basculerRefroidissement = () => {
    setDonnees((prev) => ({
      ...prev,
      refroidissementActif: !prev.refroidissementActif,
    }))
    // Simuler l'envoi de la commande au terrain
    console.log(`Système de refroidissement ${!donnees.refroidissementActif ? "activé" : "désactivé"}`)
  }

  const basculerEclairage = () => {
    setDonnees((prev) => ({
      ...prev,
      eclairageActif: !prev.eclairageActif,
    }))
    // Simuler l'envoi de la commande au terrain
    console.log(`Éclairage ${!donnees.eclairageActif ? "activé" : "désactivé"}`)
  }

  const ajusterIntensiteEclairage = (valeur: number[]) => {
    setDonnees((prev) => ({
      ...prev,
      intensiteEclairage: valeur[0],
    }))
    // Simuler l'envoi de la commande au terrain
    console.log(`Intensité d'éclairage ajustée à ${valeur[0]}%`)
  }

  const changerCouleurTerrain = (couleur: string) => {
    setCouleurSelectionnee(couleur)
    // Simuler l'envoi de la commande au terrain
    console.log(`Couleur du terrain changée à ${couleur}`)
  }

  return (
    <div className="space-y-4">
      <Tabs defaultValue="couleur" value={ongletControle} onValueChange={setOngletControle} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="couleur">Couleur</TabsTrigger>
          <TabsTrigger value="systemes">Systèmes</TabsTrigger>
          <TabsTrigger value="eclairage">Éclairage</TabsTrigger>
        </TabsList>

        <TabsContent value="couleur" className="mt-4">
          <Card>
            <CardContent className="p-4">
              <h2 className="font-medium mb-3">Couleur du terrain</h2>

              <div
                className="relative h-36 w-full rounded-lg border mb-4"
                style={{ backgroundColor: couleurSelectionnee }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid h-full w-full grid-cols-4 grid-rows-4 gap-px">
                    {Array.from({ length: 16 }).map((_, i) => (
                      <div key={i} className="opacity-80"></div>
                    ))}
                  </div>
                </div>

                <div className="absolute bottom-2 right-2 text-xs bg-white dark:bg-gray-800 rounded-full px-2 py-1 shadow-md">
                  Aperçu en temps réel
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <Label htmlFor="couleur-terrain" className="text-sm">
                    Sélecteur de couleur
                  </Label>
                  <div className="mt-2 flex">
                    <input
                      type="color"
                      id="couleur-terrain"
                      value={couleurSelectionnee}
                      onChange={(e) => changerCouleurTerrain(e.target.value)}
                      className="h-10 w-full rounded-md cursor-pointer"
                    />
                  </div>
                </div>

                <div>
                  <Label className="text-sm mb-2 block">Couleurs prédéfinies</Label>
                  <div className="grid grid-cols-5 gap-2">
                    {["#4ade80", "#2563eb", "#d946ef", "#f59e0b", "#ef4444"].map((couleur) => (
                      <button
                        key={couleur}
                        className="h-8 w-full rounded-md border-2"
                        style={{
                          backgroundColor: couleur,
                          borderColor: couleurSelectionnee === couleur ? "white" : couleur,
                        }}
                        onClick={() => changerCouleurTerrain(couleur)}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <Button className="w-full mt-4">Appliquer au terrain</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="systemes" className="mt-4">
          <Card>
            <CardContent className="p-4">
              <h2 className="font-medium mb-3">Systèmes du terrain</h2>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Système de refroidissement</p>
                    <p className="text-xs text-muted-foreground">
                      {donnees.refroidissementActif ? "Actif - Circulation d'eau en cours" : "Inactif - En veille"}
                    </p>
                  </div>
                  <Switch checked={donnees.refroidissementActif} onCheckedChange={basculerRefroidissement} />
                </div>

                <div className="pt-2 pb-2 border-t border-b">
                  <div className="flex items-center justify-between mb-1">
                    <Label htmlFor="debit-eau" className="text-xs">
                      Débit d'eau
                    </Label>
                    <div className="flex items-center gap-1 text-xs">
                      <Droplets className="h-3 w-3 text-blue-500" />
                      {donnees.niveauEau}%
                    </div>
                  </div>
                  <Slider
                    id="debit-eau"
                    value={[donnees.niveauEau]}
                    max={100}
                    min={10}
                    step={5}
                    disabled={!donnees.refroidissementActif}
                    onValueChange={(val) => setDonnees((prev) => ({ ...prev, niveauEau: val[0] }))}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Mode automatique</p>
                    <p className="text-xs text-muted-foreground">Ajuste le refroidissement selon la température</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Système d'arrosage</p>
                    <p className="text-xs text-muted-foreground">Maintient l'humidité optimale du terrain</p>
                  </div>
                  <Switch />
                </div>
              </div>

              <div className="mt-4 flex justify-between">
                <Button variant="outline" size="sm">
                  Réinitialiser
                </Button>
                <Button size="sm">Appliquer</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="eclairage" className="mt-4">
          <Card>
            <CardContent className="p-4">
              <h2 className="font-medium mb-3">Contrôle de l'éclairage</h2>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Éclairage principal</p>
                    <p className="text-xs text-muted-foreground">
                      {donnees.eclairageActif ? `Allumé - Intensité: ${donnees.intensiteEclairage}%` : "Éteint"}
                    </p>
                  </div>
                  <Switch checked={donnees.eclairageActif} onCheckedChange={basculerEclairage} />
                </div>

                <div className="pt-2 pb-2 border-t border-b">
                  <div className="flex items-center justify-between mb-1">
                    <Label htmlFor="intensite-principale" className="text-xs">
                      Intensité
                    </Label>
                    <div className="flex items-center gap-1 text-xs">
                      <Sun className="h-3 w-3 text-yellow-500" />
                      {donnees.intensiteEclairage}%
                    </div>
                  </div>
                  <Slider
                    id="intensite-principale"
                    value={[donnees.intensiteEclairage]}
                    max={100}
                    min={10}
                    step={5}
                    disabled={!donnees.eclairageActif}
                    onValueChange={ajusterIntensiteEclairage}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Éclairage d'ambiance</p>
                    <p className="text-xs text-muted-foreground">Lumières LED autour du terrain</p>
                  </div>
                  <Switch defaultChecked={donnees.eclairageActif} />
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <Button variant="outline" size="sm" className="w-full" disabled={!donnees.eclairageActif}>
                    Blanc
                  </Button>
                  <Button variant="outline" size="sm" className="w-full" disabled={!donnees.eclairageActif}>
                    Bleu
                  </Button>
                  <Button variant="outline" size="sm" className="w-full" disabled={!donnees.eclairageActif}>
                    Vert
                  </Button>
                </div>
              </div>

              <div className="mt-4 flex justify-between">
                <Button variant="outline" size="sm" disabled={!donnees.eclairageActif}>
                  Mode Éco
                </Button>
                <Button size="sm" disabled={!donnees.eclairageActif}>
                  Pleine puissance
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardContent className="p-4">
          <h2 className="font-medium mb-3">Contrôle d'urgence</h2>
          <div className="flex justify-between">
            <Button variant="outline" className="w-[48%]">
              Réinitialiser
            </Button>
            <Button variant="destructive" className="w-[48%]">
              <Power className="h-4 w-4 mr-2" />
              Arrêt d'urgence
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

