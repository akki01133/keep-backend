import { Router } from "express";
import { getNotes,createNote, getNoteById , updateNote, deleteNote} from "../controllers/apiController.js";
import { protect } from "../utils/middleware.js";

const router = Router({ mergeParams: true });
router.route('/').get(protect,getNotes);
router.route('/create').post(protect, createNote)
router.route('/:id')
    .get(protect, getNoteById)
    .patch(protect, updateNote)
    .delete(protect,deleteNote)

export default router;