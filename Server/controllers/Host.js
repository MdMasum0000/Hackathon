import Host from "../models/host.js";
import Router from "express";

const router = Router();

// Create a new hackathon
router.post("/create", async (req, res) => {
  try {
    const { name, date, location, description, prizes } = req.body;

    // Create a new hackathon in the database
    const hackathon = await Host.create({
      name,
      date,
      location,
      description,
      prizes: prizes.split(",").map((prize) => prize.trim()), // Convert comma-separated prizes into an array
    });

    res.status(201).json({
      success: true,
      message: "Hackathon created successfully",
      hackathon,
    });
  } catch (error) {
    console.error("Error creating hackathon:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const hackathons = await Host.find();
    res.status(200).json({
      success: true,
      hackathons,
    });
  } catch (error) {
    console.error("Error fetching hackathons:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

export default router;
