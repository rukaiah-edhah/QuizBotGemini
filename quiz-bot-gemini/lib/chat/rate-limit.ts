import { Ratelimit} from '@upstash/ratelimit'
import { kv } from '@vercel/kv'
import { redirect } from 'next/navigation'
import { headers } from 'next/headers'

const geminiRateLimit = new Ratelimit({
    redis: kv,
    limiter: Ratelimit.slidingWindow(60, '1 m'),
    analytics: true,
    prefix: 'gemini-rate-limit',
})

function getIP(){
    return headers().get('x-real-ip') ?? 'unknown'
}

export async function rateLimit() {
    const limit = await geminiRateLimit.limit(getIP())
    if (!limit.success){
        redirect('/')
    }
}