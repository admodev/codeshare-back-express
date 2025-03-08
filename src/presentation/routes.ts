import { Router } from "express";
import { createSnippetHandler, getSnippetHandler } from "./snippet.controller";

const router = Router();

router.post("/snippets", createSnippetHandler);
router.get("/snippets/:id", getSnippetHandler);
// TODO: Implement the get all snippets route

export default router;
