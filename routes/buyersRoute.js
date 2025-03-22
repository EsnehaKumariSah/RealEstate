import express from 'express';
import { buyers, getAllAgent, getAgentById, updateAgent, deleteAgent } from "../controller/agentController.js";
const router = express.Router();
// import auth, { authorizeRole } from '../config/auth.js';

router.post("/buyers", buyers);
router.get("/getAllAgent", getAllAgent);
router.get("/getAgentById/:id", getAgentById);
router.put("/updateAgent/:id",  updateAgent);
router.delete("/deleteAgent/:id", deleteAgent);
export default router;