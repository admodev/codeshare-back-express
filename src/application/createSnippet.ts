import { SnippetFactory } from "../domain/snippet.factory";
import { SnippetRepository } from "../infrastructure/repositories/snippet.repository";

export class CreateSnippet {
  constructor(private repository: SnippetRepository) {}

  async execute(code: string, language: string, description?: string) {
    const snippet = SnippetFactory.create(code, language, description);
    return await this.repository.save(snippet);
  }
}
