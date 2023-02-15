import mongoose from "mongoose";

const notesSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        default: "black"
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    createdAt:{
        type:Date,
        default:() =>new Date().toISOString()
    },
    updatedAt:{
        type:Date,
        default:() => new Date().toISOString()
    }
});

// Duplicate the ID field.
notesSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
notesSchema.set('toJSON', {
    virtuals: true,
    versionKey:false,
    transform: function (doc, ret) {   delete ret._id; delete ret.user }
});

const Note = mongoose.model("Note", notesSchema);

export default Note;