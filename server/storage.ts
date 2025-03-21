import { 
  users, type User, type InsertUser,
  type ContactSubmission, type InsertContactSubmission,
  type Donation, type InsertDonation
} from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact submission methods
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  
  // Donation methods
  createDonation(donation: InsertDonation): Promise<Donation>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactSubmissions: Map<number, ContactSubmission>;
  private donations: Map<number, Donation>;
  
  private userCurrentId: number;
  private contactSubmissionCurrentId: number;
  private donationCurrentId: number;

  constructor() {
    this.users = new Map();
    this.contactSubmissions = new Map();
    this.donations = new Map();
    
    this.userCurrentId = 1;
    this.contactSubmissionCurrentId = 1;
    this.donationCurrentId = 1;
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Contact submission methods
  async createContactSubmission(insertSubmission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = this.contactSubmissionCurrentId++;
    const now = new Date();
    const submission: ContactSubmission = { 
      ...insertSubmission, 
      id,
      createdAt: now,
      responded: false 
    };
    this.contactSubmissions.set(id, submission);
    return submission;
  }
  
  // Donation methods
  async createDonation(insertDonation: InsertDonation): Promise<Donation> {
    const id = this.donationCurrentId++;
    const now = new Date();
    const donation: Donation = {
      ...insertDonation,
      id,
      createdAt: now,
      updatedAt: now,
      paymentId: null,
      paymentStatus: "pending",
      // Ensure donorPhone is never undefined
      donorPhone: insertDonation.donorPhone ?? null
    };
    this.donations.set(id, donation);
    return donation;
  }
}

export const storage = new MemStorage();
