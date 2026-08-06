import Note from "../models/Note.js";

export async function getAllNotes(req, res) {
    try {
        const notes = (await Note.find().sort({createdAt:-1})); // newest first
        res.status(200).json(notes);
    } catch(error){
        console.error('Error fetching notes:', error);
        res.status(500).json({ message: 'Internal server error fetching all notes' });
    }
}

export async function getNoteById(req, res){
    try{
        const note = await Note.findById(req.params.id)
        if(!note){
            return res.status(404).json({message:'Note not found'})
        }
        res.status(200).json(note);
    }catch(error){
        if (error.name === 'CastError') {
            return res.status(400).json({ message: 'Invalid Note ID format' });
        }
        console.error('Error Finding Note', error);
        res.status(500).json({message:'Internal Server Error!'})
    }
}
 
export async function createNote(req, res) {
    try{
        const {title, content} = req.body;
        const note = new Note({ title, content });
        const savedNote = await note.save();
        res.status(201).json(savedNote);
    }catch(error){
        console.error('Error creating note:', error);
        res.status(500).json({ message: 'Internal server error creating note' });
    }
}

export async function updateNote(req, res) {
    try{
        const {title, content} = req.body;
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, {title, content}, {new: true});
        if(!updatedNote){
            return res.status(404).json({ message: 'Note not found' });
        }
        res.status(200).json({message: 'Note updated successfully'});
    }catch(error){
        console.error('Error updating note:', error);
        res.status(500).json({ message: 'Internal server error updating note' });
    }
}

export async function deleteNote(req, res) {
    try{
        const deleteNote = await Note.findByIdAndDelete(req.params.id);
        if(!deleteNote){
            return res.status(404).json({message:'Note not found.'})
        }
    }catch(error){
        console.error('Error deleting note:', error)
        res.status(500).json({message: 'Interval server error deleting note'})
    }
}