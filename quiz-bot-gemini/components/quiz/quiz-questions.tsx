import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function QuizQuestions({ question, options }: any) {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>{question.text}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-2">
          {options.map((option: any, index: any) => (
            <Button
              className="justify-start bg-slate-50 [&.correct]:bg-green-500 [&.correct]:text-white [&.incorrect]:bg-red-500 [&.incorrect]:text-white"
              variant="outline"
              key={index}
            >
              {option}
            </Button>
          ))}
          
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button>Next</Button>
      </CardFooter>
    </Card>
  )
}