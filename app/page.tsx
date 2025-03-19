"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Home, Leaf, Calendar, Settings, Bell, Sun, Moon, Thermometer, Droplets } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { ControleTerrain } from "@/components/controle-terrain"
import { EtatTerrain } from "@/components/etat-terrain"
import { AlerteNotification } from "@/components/alerte-notification"

// Simuler une connexion WebSocket
const simulerConnexionWebSocket = () => {
  console.log("Connexion WebSocket établie avec le terrain")
  return {
    envoyer: (message: string, donnees: any) => {
      console.log(`Message envoyé: ${message}`, donnees)
    },
    recevoir: (callback: (donnees: any) => void) => {
      // Simuler des données entrantes
      setTimeout(() => {
        callback({
          temperature: 28.5,
          niveauEau: 65,
          consommationEnergie: 120,
          dureeUtilisation: 240,
          refroidissementActif: false,
          eclairageActif: true,
          intensiteEclairage: 80,
          alertes: [{ type: "info", message: "Maintenance prévue demain" }],
        })
      }, 1000)
    },
  }
}

export default function HomePage() {
  const [ongletActif, setOngletActif] = useState("accueil")
  const [modeSombre, setModeSombre] = useState(false)
  const [donneesTerrain, setDonneesTerrain] = useState({
    temperature: 30,
    niveauEau: 50,
    consommationEnergie: 100,
    dureeUtilisation: 180,
    refroidissementActif: false,
    eclairageActif: true,
    intensiteEclairage: 70,
    alertes: [],
  })

  // Simuler la connexion au démarrage
  useEffect(() => {
    const connexion = simulerConnexionWebSocket()
    connexion.recevoir((donnees) => {
      setDonneesTerrain(donnees)
    })

    // Simuler des mises à jour périodiques
    const intervalle = setInterval(() => {
      setDonneesTerrain((prev) => ({
        ...prev,
        temperature: prev.refroidissementActif
          ? Math.max(prev.temperature - 0.1, 22)
          : Math.min(prev.temperature + 0.05, 32),
        niveauEau: prev.refroidissementActif ? Math.max(prev.niveauEau - 0.2, 0) : prev.niveauEau,
      }))
    }, 3000)

    return () => clearInterval(intervalle)
  }, [])

  const basculerModeSombre = () => {
    setModeSombre(!modeSombre)
    document.documentElement.classList.toggle("dark")
  }

  const basculerRefroidissement = () => {
    setDonneesTerrain((prev) => ({
      ...prev,
      refroidissementActif: !prev.refroidissementActif,
    }))
    // Simuler l'envoi de la commande au terrain
    console.log(`Système de refroidissement ${!donneesTerrain.refroidissementActif ? "activé" : "désactivé"}`)
  }

  const basculerEclairage = () => {
    setDonneesTerrain((prev) => ({
      ...prev,
      eclairageActif: !prev.eclairageActif,
    }))
    // Simuler l'envoi de la commande au terrain
    console.log(`Éclairage ${!donneesTerrain.eclairageActif ? "activé" : "désactivé"}`)
  }

  const ajusterIntensiteEclairage = (valeur: number[]) => {
    setDonneesTerrain((prev) => ({
      ...prev,
      intensiteEclairage: valeur[0],
    }))
    // Simuler l'envoi de la commande au terrain
    console.log(`Intensité d'éclairage ajustée à ${valeur[0]}%`)
  }

  return (
    <div className={cn("flex flex-col h-screen bg-background", modeSombre ? "dark" : "")}>
      {/* En-tête de l'application */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-14 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-green-500 p-1">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9 21V13.6C9 13.0399 9 12.7599 9.10899 12.546C9.20487 12.3578 9.35785 12.2049 9.54601 12.109C9.75992 12 10.0399 12 10.6 12H13.4C13.9601 12 14.2401 12 14.454 12.109C14.6422 12.2049 14.7951 12.3578 14.891 12.546C15 12.7599 15 13.0399 15 13.6V21M21.0001 21H3M5.00001 21V6.2C5.00001 5.0799 5.00001 4.51984 5.21799 4.09202C5.40973 3.71569 5.71572 3.40973 6.09205 3.21799C6.51986 3 7.07992 3 8.20001 3H15.8C16.9201 3 17.4802 3 17.908 3.21799C18.2843 3.40973 18.5903 3.71569 18.782 4.09202C19 4.51984 19 5.0799 19 6.2V21"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="font-bold">TerrainÉco</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="rounded-full" onClick={basculerModeSombre}>
              {modeSombre ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
            </Button>
          </div>
        </div>
      </header>

      {/* Zone de contenu principal - Défilable */}
      <main className="flex-1 overflow-y-auto pb-16">
        {ongletActif === "accueil" && (
          <div className="space-y-6 p-4">
            {/* Carte de bienvenue */}
            <Card className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
              <CardContent className="p-6">
                <h1 className="text-2xl font-bold mb-2">Bienvenue, Admin</h1>
                <p className="text-sm opacity-90 mb-4">Contrôlez votre terrain sportif écologique en temps réel</p>
                <div className="flex items-center gap-2 text-sm mt-2">
                  <div
                    className={`h-2 w-2 rounded-full ${donneesTerrain.refroidissementActif ? "bg-blue-300 animate-pulse" : "bg-yellow-300"}`}
                  ></div>
                  <span>
                    {donneesTerrain.refroidissementActif ? "Système de refroidissement actif" : "Système en veille"}
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Statistiques rapides */}
            <div className="grid grid-cols-2 gap-3">
              <Card>
                <CardContent className="p-4 flex flex-col items-center justify-center">
                  <div className="rounded-full bg-orange-100 p-2 mb-2">
                    <Thermometer className="h-5 w-5 text-orange-600" />
                  </div>
                  <span className="text-xl font-bold">{donneesTerrain.temperature.toFixed(1)}°C</span>
                  <span className="text-xs text-muted-foreground">Température du terrain</span>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 flex flex-col items-center justify-center">
                  <div className="rounded-full bg-blue-100 p-2 mb-2">
                    <Droplets className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="text-xl font-bold">{donneesTerrain.niveauEau.toFixed(1)}%</span>
                  <span className="text-xs text-muted-foreground">Niveau d'eau</span>
                </CardContent>
              </Card>
            </div>

            {/* Contrôle du système de refroidissement */}
            <Card>
              <CardContent className="p-4">
                <h2 className="font-medium mb-3">Système de refroidissement</h2>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm">
                      État actuel:{" "}
                      <span
                        className={donneesTerrain.refroidissementActif ? "text-green-500" : "text-muted-foreground"}
                      >
                        {donneesTerrain.refroidissementActif ? "Activé" : "Désactivé"}
                      </span>
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {donneesTerrain.refroidissementActif
                        ? "L'eau circule sous le terrain pour le refroidir"
                        : "Activez pour réduire la température du terrain"}
                    </p>
                  </div>
                  <Switch checked={donneesTerrain.refroidissementActif} onCheckedChange={basculerRefroidissement} />
                </div>

                <div className="relative h-20 w-full rounded-lg border bg-gradient-to-b from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30 mb-2">
                  {/* Surface du terrain */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="grid h-full w-full grid-cols-4 grid-rows-2 gap-px">
                      {Array.from({ length: 8 }).map((_, i) => (
                        <div key={i} className="bg-green-500/80 dark:bg-green-600/80"></div>
                      ))}
                    </div>
                  </div>

                  {/* Animation de circulation d'eau */}
                  {donneesTerrain.refroidissementActif && (
                    <div className="absolute inset-0">
                      <div className="relative h-full w-full overflow-hidden">
                        {Array.from({ length: 4 }).map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute h-1 w-6 rounded-full bg-blue-400"
                            style={{
                              top: `${25 + i * 15}%`,
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

                  {/* Indicateur de température */}
                  <div className="absolute bottom-2 right-2 rounded-full bg-white p-1.5 shadow-md dark:bg-gray-800">
                    <div className="flex items-center gap-1">
                      <Thermometer
                        className={`h-3 w-3 ${donneesTerrain.temperature > 28 ? "text-red-500" : "text-blue-500"}`}
                      />
                      <span className="text-xs font-bold">{donneesTerrain.temperature.toFixed(1)}°C</span>
                    </div>
                  </div>
                </div>

                <div className="text-xs text-center text-muted-foreground">
                  {donneesTerrain.refroidissementActif
                    ? `Refroidissement actif: réduction de ${(32 - donneesTerrain.temperature).toFixed(1)}°C`
                    : "Activez le système pour voir l'effet en temps réel"}
                </div>
              </CardContent>
            </Card>

            {/* Contrôle de l'éclairage */}
            <Card>
              <CardContent className="p-4">
                <h2 className="font-medium mb-3">Contrôle de l'éclairage</h2>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm">
                      Éclairage:{" "}
                      <span className={donneesTerrain.eclairageActif ? "text-green-500" : "text-muted-foreground"}>
                        {donneesTerrain.eclairageActif ? "Allumé" : "Éteint"}
                      </span>
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {donneesTerrain.eclairageActif
                        ? `Intensité actuelle: ${donneesTerrain.intensiteEclairage}%`
                        : "Activez l'éclairage pour les sessions nocturnes"}
                    </p>
                  </div>
                  <Switch checked={donneesTerrain.eclairageActif} onCheckedChange={basculerEclairage} />
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <Label htmlFor="intensite-eclairage" className="text-xs">
                        Intensité d'éclairage
                      </Label>
                      <div className="flex items-center gap-1 text-xs">
                        <Sun className="h-3 w-3 text-yellow-500" />
                        {donneesTerrain.intensiteEclairage}%
                      </div>
                    </div>
                    <Slider
                      id="intensite-eclairage"
                      value={[donneesTerrain.intensiteEclairage]}
                      max={100}
                      min={10}
                      step={5}
                      disabled={!donneesTerrain.eclairageActif}
                      onValueChange={ajusterIntensiteEclairage}
                    />
                  </div>
                </div>

                <div className="mt-3 flex justify-between">
                  <Button size="sm" variant="outline" disabled={!donneesTerrain.eclairageActif}>
                    Mode Économie
                  </Button>
                  <Button size="sm" variant="outline" disabled={!donneesTerrain.eclairageActif}>
                    Pleine Puissance
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* État du terrain */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold">État du terrain</h2>
                <Button variant="ghost" size="sm" className="text-xs">
                  Détails
                </Button>
              </div>
              <EtatTerrain donnees={donneesTerrain} />
            </div>

            {/* Alertes et notifications */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold">Alertes</h2>
                <Button variant="ghost" size="sm" className="text-xs">
                  Tout voir
                </Button>
              </div>
              <AlerteNotification />
            </div>
          </div>
        )}

        {ongletActif === "controle" && (
          <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Contrôle du Terrain</h1>
            <ControleTerrain donnees={donneesTerrain} setDonnees={setDonneesTerrain} />
          </div>
        )}

        {ongletActif === "calendrier" && (
          <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Réservations</h1>

            <Tabs defaultValue="jour" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-4">
                <TabsTrigger value="jour">Jour</TabsTrigger>
                <TabsTrigger value="semaine">Semaine</TabsTrigger>
                <TabsTrigger value="mois">Mois</TabsTrigger>
              </TabsList>

              <TabsContent value="jour">
                <Card>
                  <CardContent className="p-4">
                    <h2 className="font-medium mb-3">Aujourd'hui - 15 Juin 2025</h2>
                    <div className="space-y-2">
                      {[
                        { heure: "09:00 - 10:30", equipe: "FC Écolo", statut: "confirmé" },
                        { heure: "11:00 - 12:30", equipe: "Disponible", statut: "libre" },
                        { heure: "14:00 - 15:30", equipe: "Lycée Vert", statut: "confirmé" },
                        { heure: "16:00 - 17:30", equipe: "Maintenance", statut: "bloqué" },
                        { heure: "18:00 - 19:30", equipe: "Club Sportif Durable", statut: "confirmé" },
                      ].map((creneau, i) => (
                        <div
                          key={i}
                          className={cn(
                            "p-3 rounded-lg border flex justify-between items-center",
                            creneau.statut === "confirmé"
                              ? "bg-green-50 dark:bg-green-900/20"
                              : creneau.statut === "bloqué"
                                ? "bg-red-50 dark:bg-red-900/20"
                                : "",
                          )}
                        >
                          <div>
                            <p className="font-medium">{creneau.heure}</p>
                            <p className="text-xs text-muted-foreground">{creneau.equipe}</p>
                          </div>
                          <Button size="sm" variant={creneau.statut === "libre" ? "default" : "outline"}>
                            {creneau.statut === "libre" ? "Réserver" : "Détails"}
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="semaine">
                <Card>
                  <CardContent className="p-4">
                    <h2 className="font-medium mb-3">Semaine du 15 au 21 Juin</h2>
                    <div className="text-center text-muted-foreground text-sm">
                      Affichage hebdomadaire des réservations
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="mois">
                <Card>
                  <CardContent className="p-4">
                    <h2 className="font-medium mb-3">Juin 2025</h2>
                    <div className="text-center text-muted-foreground text-sm">Affichage mensuel des réservations</div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <div className="mt-4 flex justify-between">
              <Button variant="outline">Créer un événement</Button>
              <Button>Nouvelle réservation</Button>
            </div>
          </div>
        )}

        {ongletActif === "parametres" && (
          <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Paramètres</h1>

            <Card className="mb-4">
              <CardContent className="p-4">
                <h2 className="font-medium mb-3">Paramètres du terrain</h2>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="mode-eco" className="text-sm">
                      Mode Éco-Énergie
                    </Label>
                    <Switch id="mode-eco" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="maintenance-auto" className="text-sm">
                      Maintenance Automatique
                    </Label>
                    <Switch id="maintenance-auto" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="alertes-temp" className="text-sm">
                      Alertes de Température
                    </Label>
                    <Switch id="alertes-temp" defaultChecked />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-4">
              <CardContent className="p-4">
                <h2 className="font-medium mb-3">Paramètres de l'application</h2>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="notifications" className="text-sm">
                      Notifications Push
                    </Label>
                    <Switch id="notifications" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="theme-sombre" className="text-sm">
                      Thème Sombre
                    </Label>
                    <Switch id="theme-sombre" checked={modeSombre} onCheckedChange={basculerModeSombre} />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="langue" className="text-sm">
                      Langue
                    </Label>
                    <select id="langue" className="rounded-md border bg-transparent px-2 py-1 text-sm">
                      <option value="fr">Français</option>
                      <option value="en">English</option>
                      <option value="es">Español</option>
                    </select>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <h2 className="font-medium mb-3">Informations système</h2>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Version</span>
                    <span>2.4.1</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Dernière mise à jour</span>
                    <span>12/06/2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">État de connexion</span>
                    <span className="flex items-center gap-1">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      Connecté
                    </span>
                  </div>
                </div>

                <div className="mt-4">
                  <Button variant="outline" className="w-full">
                    Vérifier les mises à jour
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      {/* Navigation inférieure de l'application mobile */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t">
        <div className="flex h-16 items-center justify-around">
          <button
            onClick={() => setOngletActif("accueil")}
            className={cn(
              "flex flex-col items-center justify-center w-full h-full",
              ongletActif === "accueil" ? "text-primary" : "text-muted-foreground",
            )}
          >
            <Home className="h-5 w-5" />
            <span className="text-xs mt-1">Accueil</span>
          </button>

          <button
            onClick={() => setOngletActif("controle")}
            className={cn(
              "flex flex-col items-center justify-center w-full h-full",
              ongletActif === "controle" ? "text-primary" : "text-muted-foreground",
            )}
          >
            <Leaf className="h-5 w-5" />
            <span className="text-xs mt-1">Contrôle</span>
          </button>

          <button
            onClick={() => setOngletActif("calendrier")}
            className={cn(
              "flex flex-col items-center justify-center w-full h-full",
              ongletActif === "calendrier" ? "text-primary" : "text-muted-foreground",
            )}
          >
            <Calendar className="h-5 w-5" />
            <span className="text-xs mt-1">Réservations</span>
          </button>

          <button
            onClick={() => setOngletActif("parametres")}
            className={cn(
              "flex flex-col items-center justify-center w-full h-full",
              ongletActif === "parametres" ? "text-primary" : "text-muted-foreground",
            )}
          >
            <Settings className="h-5 w-5" />
            <span className="text-xs mt-1">Paramètres</span>
          </button>
        </div>
      </nav>
    </div>
  )
}

