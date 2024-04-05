import { Skeleton } from "@/components/ui/skeleton"
import { CardHeader, CardContent, Card } from "@/components/ui/card"

export default function ShowAnswerSkeleton() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="flex items-center gap-4">
        <Skeleton className="w-8 h-8 rounded-full" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-4 w-3/4" />
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-[85%]" />
        <Skeleton className="h-4 w-[90%]" />
        <Skeleton className="h-4 w-[80%]" />
      </CardContent>
    </Card>
  )
}