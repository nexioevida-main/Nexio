import { Router } from "express";
import getPublicProfile from "../Controllers/usersApis/getPublicProfile.js";
import searchProfiles from "../Controllers/usersApis/searchProfiles.js";

const router = Router();

router.get("/users/:username", getPublicProfile);
router.get("/search", searchProfiles);

export default router;
