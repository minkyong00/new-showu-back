import express from 'express';
import { getLessonList } from '../../controller/showu/lessonController.js';

const lessonRouter = express.Router();

// 레슨 메인 "/showu/lesson/"
lessonRouter.get("/", getLessonList)

export default lessonRouter;