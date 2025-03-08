export class Snippet {
  constructor(
    public readonly id: string,
    public code: string,
    public language: string,
    public description?: string
  ) {}
}
