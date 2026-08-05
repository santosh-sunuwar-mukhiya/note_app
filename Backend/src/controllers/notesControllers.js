export function getAllNotes(req, res) {
    res.status(200).send('You got all the notes from the database.');
}

export function createNote(req, res) {
    res.status(201).json({
        message: 'Note created successfully',
        note: req.body
    });
}

export function updateNote(req, res) {
    res.status(200).json({
        message: 'Note updated successfully',
        note: req.body
    });
}

export function deleteNote(req, res) {
    res.status(200).json({
        message: 'Note deleted successfully'
    });
}