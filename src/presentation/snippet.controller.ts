import { Request, Response } from "express";
import { CreateSnippet } from "../application/createSnippet";
import { GetSnippet } from "../application/getSnippet";
import { SnippetRepository } from "../infrastructure/repositories/snippet.repository";

const repository = new SnippetRepository();

export const createSnippetHandler = async (req: Request, res: Response) => {
  const { code, language, description } = req.body;
  const useCase = new CreateSnippet(repository);
  const snippet = await useCase.execute(code, language, description);
  res.status(201).json(snippet);
};

export const getSnippetHandler = async (req: Request, res: Response) => {
  const { id } = req.params;
  const useCase = new GetSnippet(repository);
  const snippet = await useCase.execute(id);
  snippet ? res.json(snippet) : res.status(404).json({ message: "Not found" });
};
