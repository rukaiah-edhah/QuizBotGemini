'use client'
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"

import { useEffect, useRef, useState } from "react"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { useChat } from "ai/react"

interface QuizPrompt {
    subjects: string
    numberOfQuestions: number
    questionLevel: string
    questionType: string
}

export function QuizStart({ subjects = "reactjs", numberOfQuestions = 3, questionLevel = "Beginner", questionType = "Multiple Choice" }: any) {
    const [subject, setSubject] = useState(subjects);
    const [totalQuestions, setTotalQuestions] = useState(numberOfQuestions);
    const [question_level, setQuestionLevel] = useState(questionLevel);
    const [question_type, setQuestionType] = useState(questionType);
    const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
    const [initialInput, setInitialInput] = useState("");

    const { messages, handleSubmit } = useChat()


    useEffect(() => {
        if (messages.length === 0){
            const prompt = `Start a quiz on ${subject} with ${totalQuestions} questions. The questions are ${question_type} and the difficulty is ${question_level}.`;
            setInitialInput(prompt)
        }
    }, [messages.length]);
    
        
    return (
        <Card
            className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md"
        >
            <CardHeader>
                <CardTitle className="text-center text-2xl font-bold text-black">
                    Personalize your Quiz
                </CardTitle>
                <CardDescription className="text-center text-black">
                    Enter your preferences
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form className="space-y-4"
                    onSubmit={handleSubmit}
                >
                    <div className="space-y-1">
                        <Label
                            htmlFor="subject"
                            className="text-black"
                        >What subject would you like to challenge yourself with?</Label>
                        <input 
                            type="text"
                            id="subject"
                            className="w-full border border-violet-200 focus:outline-none focus:border-black/40 p-2 rounded-xl mt-2"
                            placeholder="e.g. React, Python, Calculus I"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />
                    </div>
                    <div className="space-y-1">
                        <Label
                            htmlFor="total-questions"
                            className="text-black"
                        >Provide the preferred number of questions</Label>
                        <input 
                            type="number"
                            id="total-questions"
                            min={1}
                            max={50}
                            className="w-full border border-violet-200 focus:outline-none focus:border-black/40 p-2 rounded-xl mt-2"
                            placeholder="Enter your desired number"
                            value={totalQuestions}
                            onChange={(e) => setTotalQuestions(parseInt(e.target.value, 10))}
                        />
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="question-level" className="text-black">Question Level</Label>
                        <Select 
                            defaultValue={question_level}
                            onValueChange={(value) => setQuestionLevel(value)}
                        >
                            <SelectTrigger className="w-full bg-white focus:outline-none focus:border-violet-200">
                                <SelectValue placeholder="Select question level"/>
                            </SelectTrigger>
                            <SelectContent>
                                {["Beginner", "Intermediate", "Advanced"].map((value) => (
                                    <SelectItem key={value} value={value} className="classify">
                                        {value}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Label htmlFor="question-type" className="text-black">Question Type</Label>
                        <Select 
                            defaultValue={question_type}
                            onValueChange={(value) => setQuestionType(value)}
                        >
                            <SelectTrigger className="w-full bg-white focus:outline-none focus:border-violet-200">
                                <SelectValue placeholder="Select question type"/>
                            </SelectTrigger>
                            <SelectContent>
                                {["Multiple Choice", "True/False"].map((value) => (
                                    <SelectItem key={value} value={value} className="classify">
                                        {value}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Switch 
                            aria-label="show correct answer"
                            className="rounded-md  focus:outline-none focus:border-violet-200 [data-state=checked]:bg-violet-200"
                            checked={showCorrectAnswer}
                            onCheckedChange={setShowCorrectAnswer}
                            id="show-correct-answer"
                        />
                        <Label htmlFor="show-correct-answer" className="text-black">Show Correct Answer</Label>
                    </div>

                    <Button
                        className="bg-violet-200 px-7 py-2 flex items-center justfiy-center text-black hover:text-white transition-all"
                        type='submit'
                
                    >
                        Start Quiz
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}