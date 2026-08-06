import express from "express";
import { getAllNotes } from "../controllers/notesControllers.js";
import { createNote } from "../controllers/notesControllers.js";
import { updateNote } from "../controllers/notesControllers.js";
import { deleteNote } from "../controllers/notesControllers.js";
import { getNoteById } from "../controllers/notesControllers.js";

const router = express.Router();

router.get('/', getAllNotes);

router.get('/:id', getNoteById);

router.post('/', createNote);

router.put('/:id', updateNote);

router.delete('/:id', deleteNote);

export default router;