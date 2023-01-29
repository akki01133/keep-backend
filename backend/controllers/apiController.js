import expressAsyncHandler from "express-async-handler";
import Note from "../models/notesModel.js";

const getNotes = expressAsyncHandler(async (req,res,next)=>{
    const notes = await Note.find({user: req.user._id});
    res.json(notes);
});

const createNote = expressAsyncHandler(async (req,res,next)=>{
    const {title, content, color} = req.body;
    if(!title || !content){
        res.status(400)
        throw new Error('Please Pass all the fields');
    }else{
        const note = new Note({
            user: req.user._id,
            title,content,color
        })
        let createdNote = await note.save();
        const {_id} = createdNote;
        res.status(201).json({id:_id});
    }
});

const getNoteById = expressAsyncHandler(async (req, res) =>{
    const {id} = req.params;
    const note = await Note.findOne({_id: id, user: req.user._id}).exec();
    if(note){
        res.json(note);
    }else{
        res.status(404).json("Note not found!!");
    }
});

const updateNote = expressAsyncHandler(async (req, res) =>{
    const {id} = req.params;
    const {title,content,color} = req.body;
    const note = await Note.findOneAndUpdate({_id: id, user: req.user._id},{title,color,content},{returnOriginal:false} );
    if(note){
        res.json(note);
    }else{
        res.status(404).json("Note not found!!");
    }
});

const deleteNote = expressAsyncHandler(async (req, res) =>{
    const {id} = req.params;
    const data = await Note.deleteOne({_id: id, user: req.user._id});
    if(data["deletedCount"] == 1){
        res.send("deleted");
    }else{
        res.status(404).json("Note not found!!");
    }
});

export {getNotes, createNote, getNoteById, updateNote, deleteNote}