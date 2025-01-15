import express from 'express';
import { getLessonListData, getLessonListDetailsData, lessonList, } from '../../controller/showu/lessonController.js';
import teamRouter from './teamRouter.js';


const showuRouter = express.Router()

showuRouter.get("/lesson", getLessonListData)
showuRouter.get("/details/:id", getLessonListDetailsData)

showuRouter.use("/team", teamRouter)

export default showuRouter 