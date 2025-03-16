import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  rating: number
}

export default function TestimonialCard({ quote, author, role, rating }: TestimonialCardProps) {
  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex space-x-1 mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 dark:text-gray-300 mb-4 italic">&quot;{quote}&quot;</p>
        <div>
          <p className="font-semibold">{author}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
        </div>
      </CardContent>
    </Card>
  )
}

