import { Skeleton } from "@/components/ui/skeleton"
import { CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"

export default function QuizResultSkeleton() {
  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <Skeleton className="h-6 w-32 rounded" />
      </CardHeader>
      <CardContent className="flex flex-col items-center space-y-4">
        <Skeleton className="h-12 w-20 rounded" />
        <Skeleton className="h-4 w-64 rounded" />
        <Skeleton className="h-6 w-80 rounded" />
      </CardContent>
      <CardFooter className="flex justify-center">
        <Skeleton className="h-10 w-32 rounded" />
      </CardFooter>
    </Card>
  )
}