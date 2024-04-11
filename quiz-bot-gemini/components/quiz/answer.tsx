'use client'

import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { CheckCircleIcon, XCircleIcon } from "./icons";

import {  useActions, useUIState } from 'ai/rsc';

import type { AI } from '@/lib/chat/actions'
import { UserMessage } from "@/components/chat/message";
import { Button } from "../ui/button";

export function Answer({ icon = 'check', text = 'Correct Answer'}){

    const { submitUserMessage } = useActions()
    const [, setMessages] = useUIState<typeof AI>()

    const IconSelector = ({ iconName }: { iconName: string}) => {
        const icons: any = {
            check: CheckCircleIcon,
            exclamation: XCircleIcon
        };

        const SelectedIcon = icons[iconName] || CheckCircleIcon
        return <SelectedIcon className="w-8 h-8"/>
    }

    return(
        <Card className="w-full">
            <CardHeader className="flex items-center gap-4">
                <IconSelector iconName={icon}/>
                <CardTitle>Correct Answer</CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
                <div className="mt-6">
                    <p className="mt-1">{text}</p>
                </div>

                <Button
                    className="ml-1 text-center bg-violet-200 px-7 py-1 hover:text-white"
                    onClick={async (e) => {
                        e.preventDefault()

                        setMessages((currentMessages: any) => [
                            ...currentMessages,
                            {
                                id: Date.now(),
                                display: <UserMessage>{`Next Question`}</UserMessage>
                            }
                        ]);

                        const res = await submitUserMessage('Next Question');
                        setMessages((currentMessages: any) => [
                            ...currentMessages,
                            res
                        ])
                    }}
                >
                    Next
                </Button>
            </CardContent>
        </Card>
    )
}