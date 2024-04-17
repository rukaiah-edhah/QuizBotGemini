import { pgTable, timestamp, text, integer, index } from 'drizzle-orm/pg-core';

export const user = pgTable('user_table', {
    id: integer('id').primaryKey().notNull(),
    kindeAuthId: text('kinde_auth_id'),
    kindeAuthName: text('kinde_auth_name'),
    // feel free to add what ever else is necessary
})