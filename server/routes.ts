import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertParticipationSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Participation form endpoint
  app.post("/api/participations", async (req, res) => {
    try {
      const validatedData = insertParticipationSchema.parse(req.body);
      const participation = await storage.createParticipation(validatedData);
      res.json(participation);
    } catch (error: any) {
      res.status(400).json({ 
        error: "Validation failed", 
        details: error.errors || error.message 
      });
    }
  });

  // Get all participations (optional, for admin view)
  app.get("/api/participations", async (_req, res) => {
    try {
      const participations = await storage.getAllParticipations();
      res.json(participations);
    } catch (error: any) {
      res.status(500).json({ error: "Failed to retrieve participations" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
