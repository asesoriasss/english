import { type User, type InsertUser, type Participation, type InsertParticipation } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createParticipation(participation: InsertParticipation): Promise<Participation>;
  getAllParticipations(): Promise<Participation[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private participations: Map<string, Participation>;

  constructor() {
    this.users = new Map();
    this.participations = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createParticipation(insertParticipation: InsertParticipation): Promise<Participation> {
    const id = randomUUID();
    const participation: Participation = { ...insertParticipation, id };
    this.participations.set(id, participation);
    return participation;
  }

  async getAllParticipations(): Promise<Participation[]> {
    return Array.from(this.participations.values());
  }
}

export const storage = new MemStorage();
