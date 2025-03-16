import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Check } from "lucide-react"

interface PricingCardProps {
  title: string
  price: string
  description: string
  features: string[]
  buttonText: string
  popular?: boolean
  comingSoon?: boolean
}

export default function PricingCard({
  title,
  price,
  description,
  features,
  buttonText,
  popular = false,
  comingSoon = false,
}: PricingCardProps) {
  return (
    <Card className={`border ${popular ? "border-violet-600 shadow-lg relative" : "shadow-md"} h-full flex flex-col`}>
      {popular && (
        <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
          <span className="bg-violet-600 text-white text-xs font-semibold px-3 py-1 rounded-full">Popular</span>
        </div>
      )}
      {comingSoon && (
        <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
          <span className="bg-gray-600 text-white text-xs font-semibold px-3 py-1 rounded-full">Coming Soon</span>
        </div>
      )}
      <CardHeader>
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="flex items-baseline mt-2">
          <span className="text-3xl font-bold">{price}</span>
          <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">/month</span>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{description}</p>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-violet-600 shrink-0 mr-2" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          className={`w-full ${popular ? "bg-violet-600 hover:bg-violet-700" : ""} ${comingSoon ? "bg-gray-400 hover:bg-gray-500 cursor-not-allowed" : ""}`}
          variant={popular ? "default" : comingSoon ? "default" : "outline"}
          disabled={comingSoon}
        >
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  )
}

