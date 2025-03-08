import { Snippet } from "./snippet.entity";
import { v4 as uuidv4 } from "uuid";

export class SnippetFactory {
  static create(code: string, language: string, description?: string): Snippet {
    return new Snippet(uuidv4(), code, language, description);
  }
}
