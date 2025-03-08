import { SnippetRepository } from "../infrastructure/repositories/snippet.repository";

export class GetSnippet {
  constructor(private repository: SnippetRepository) {}

  async execute(id: string) {
    return await this.repository.findById(id);
  }
}
