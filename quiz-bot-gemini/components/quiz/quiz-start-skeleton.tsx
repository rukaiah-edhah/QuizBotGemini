import { Skeleton } from "@/components/ui/skeleton"
import { CardHeader, CardContent, Card } from "@/components/ui/card"

export default function QuizStartSkeleton() {

  return (
      <Card className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <CardHeader>
          <Skeleton className="h-6 w-48 rounded-md" />
          <Skeleton className="h-4 w-64 mt-2 rounded-md" />
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-1">
              <Skeleton className="h-4 w-20 rounded-md" />
              <Skeleton className="h-10 w-full rounded-md" />
            </div>
            <div className="space-y-1">ß
              <Skeleton className="h-4 w-48 rounded-md" />
              <Skeleton className="h-10 w-full rounded-md" />
            </div>
            <div className="flex items-center space-x-2">
              <Skeleton className="h-6 w-6 rounded-md" />
              <Skeleton className="h-4 w-36 rounded-md" />
            </div>
            <Skeleton className="h-10 w-full rounded-md" />
          </div>
        </CardContent>
      </Card>
  )
}