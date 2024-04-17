import { sql } from 'drizzle-orm'
import { pgTable, timestamp, text, integer, index } from 'drizzle-orm/pg-core';

export const messages = pgTable('messages_table', {
    id: integer('id').primaryKey().notNull(),
    chatId: text('chat_id'),
    role: text('role', { enum: ["user", "assistant"]}).notNull(),
    content: text('content').notNull(),
    // feel free to add what ever else is necessary
    createdAt: timestamp('created_at').defaultNow().notNull(),
})

// id
// chatId
// role 'user' | 'assistant' | 'system'
// content
// createdAt