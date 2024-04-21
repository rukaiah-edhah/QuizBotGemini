import { Card, CardContent } from '@/components/ui/card';

export function ChatAuthCard({ children}: {children: React.ReactNode}){
    return(
        <Card className='max-w-md mx-auto p-6 rounded-lg shadow-md'>
            <CardContent className='flex flex-col p-4 space-x-4 items-center justify-center'>
                {children}
            </CardContent>
        </Card>
    )
}