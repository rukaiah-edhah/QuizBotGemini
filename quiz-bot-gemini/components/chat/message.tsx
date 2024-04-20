'use client';

import { FaUser } from "react-icons/fa";
import ChatAiImage from "./chat-ai-image";
import { cn } from '@/lib/utils';
import { MemoizedReact } from "./markdown";
import { StreamableValue } from "ai/rsc";
import { useStreamableText } from "@/lib/hooks/use-streamable-text";
import { spinner } from './spinner';

export function UserMessage({ children }: {children: React.ReactNode}){
    return(
        <div className="group relative flex items-start md:-ml-12">
            <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md shadow-sm">
                <FaUser className="w-4 h-4"/>
            </div>
            <div className="ml-4 flex-1 space-y-2 overflow-hidden px-1">
                {children}
            </div>
        </div>
    )
}

export function AIMessage({
    children,
    className
}: {
    children: React.ReactNode,
    className?: string
}) {
    return(
        <div className={cn(
            'group relative flex items-start md:-ml-12',
            className
        )}
        >
            <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md shadow-sm">
                <ChatAiImage />
            </div>
            <div className="ml-4 flex-1 space-y-2 overflow-hidden px-1">
                {children}
            </div>
        </div>
    )
}

export function AICard({
    children,
    showAvatar = true
}: {
    children: React.ReactNode,
    showAvatar?: boolean
}) {
    return(
        <div className="group relative flex items-start md:-ml-12">
            <div className={cn(
                'flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md shadow-sm',
                !showAvatar && 'invisible',
            )}
            >
                <ChatAiImage />
            </div>
            <div className="ml-4 flex-1 px-1">
                {children}
            </div>
        </div>
    )
}

export function SystemMessage({ children }: {children: React.ReactNode}){
    return(
        <div className="mt-2 flex items-center justify-center gap-2 text-xs">
            <div className="max-w-[600px] flex-initial p-2">
                {children}
            </div>
        </div>
    )
}

export function SpinnerMessage() {
    return(
        <div className="group relative flex items-start md:-ml-12">
            <div className="flex size-[25px] shrink-0 select-none items-center justify-center rounded-lg border shadow-sm">
                <ChatAiImage />
            </div>
            <div className="ml-4 h-[24px] flex flex-row items-center flex-1 space-y-2 overflow-hidden px-1">
                {spinner}
            </div>
        </div>
    )
}