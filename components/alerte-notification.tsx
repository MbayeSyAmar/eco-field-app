"use client"

import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, Info, CheckCircle } from "lucide-react"

// Données simulées pour les alertes
const alertes = [
  {
    type: "avertissement",
    message: "Niveau d'eau bas - 25% restant",
    date: "Aujourd'hui, 14:30",
  },
  {
    type: "info",
    message: "Maintenance programmée demain",
    date: "Aujourd'hui, 10:15",
  },
  {
    type: "succès",
    message: "Mise à jour du système réussie",
    date: "Hier, 18:45",
  },
]

export function AlerteNotification() {
  // Fonction pour obtenir l'icône selon le type d'alerte
  const getIcone = (type: string) => {
    switch (type) {
      case "avertissement":
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />
      case "info":
        return <Info className="h-4 w-4 text-blue-500" />
      case "succès":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      default:
        return <Info className="h-4 w-4 text-blue-500" />
    }
  }

  // Fonction pour obtenir la classe de couleur selon le type d'alerte
  const getClasse = (type: string) => {
    switch (type) {
      case "avertissement":
        return "bg-yellow-50 dark:bg-yellow-900/20"
      case "info":
        return "bg-blue-50 dark:bg-blue-900/20"
      case "succès":
        return "bg-green-50 dark:bg-green-900/20"
      default:
        return "bg-blue-50 dark:bg-blue-900/20"
    }
  }

  return (
    <Card>
      <CardContent className="p-4">
        <div className="space-y-3">
          {alertes.map((alerte, index) => (
            <div key={index} className={`p-3 rounded-lg border flex items-start gap-3 ${getClasse(alerte.type)}`}>
              <div className="mt-0.5">{getIcone(alerte.type)}</div>
              <div>
                <p className="text-sm font-medium">{alerte.message}</p>
                <p className="text-xs text-muted-foreground">{alerte.date}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

