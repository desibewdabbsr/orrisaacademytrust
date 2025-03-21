import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Users table (from original file)
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Contact form submissions table
export const contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  responded: boolean("responded").default(false),
});

export const contactFormSchema = createInsertSchema(contactSubmissions).pick({
  name: true,
  email: true,
  subject: true,
  message: true,
});

export const insertContactSubmissionSchema = contactFormSchema;

export type InsertContactSubmission = z.infer<typeof insertContactSubmissionSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;

// Donations table (for future implementation with Cashfree)
export const donations = pgTable("donations", {
  id: serial("id").primaryKey(),
  donorName: text("donor_name").notNull(),
  donorEmail: text("donor_email").notNull(),
  donorPhone: text("donor_phone"), // Make nullable
  amount: integer("amount").notNull(),
  paymentId: text("payment_id"),
  paymentStatus: text("payment_status").default("pending"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const donationSchema = createInsertSchema(donations).pick({
  donorName: true,
  donorEmail: true,
  donorPhone: true,
  amount: true,
});

export const insertDonationSchema = donationSchema;

export type InsertDonation = z.infer<typeof insertDonationSchema>;
export type Donation = typeof donations.$inferSelect;
