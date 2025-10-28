import { sql } from "drizzle-orm";
import { pgTable, text, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Participation form schema
export const participations = pgTable("participations", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  nombre: text("nombre").notNull(),
  curso: text("curso").notNull(),
  idea: text("idea").notNull(),
});

export const insertParticipationSchema = createInsertSchema(participations).omit({
  id: true,
}).extend({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  curso: z.string().min(1, "Por favor ingresa tu curso"),
  idea: z.string().min(10, "La idea debe tener al menos 10 caracteres"),
});

export type InsertParticipation = z.infer<typeof insertParticipationSchema>;
export type Participation = typeof participations.$inferSelect;
