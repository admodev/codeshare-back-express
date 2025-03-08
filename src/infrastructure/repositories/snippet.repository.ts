import { Snippet } from "../../domain/snippet.entity";
import mongoose from "mongoose";

const SnippetSchema = new mongoose.Schema({
  code: { type: String, required: true },
  language: { type: String, required: true },
  description: String,
});

const SnippetModel = mongoose.model("Snippet", SnippetSchema);

export class SnippetRepository {
  async save(snippet: Snippet) {
    return await new SnippetModel(snippet).save();
  }

  async findById(id: string) {
    return await SnippetModel.findById(id);
  }

  async findAll() {
    return await SnippetModel.find();
  }

  async delete(id: string) {
    return await SnippetModel.findByIdAndDelete(id);
  }
}
