import express from 'express';
import { getTeamList } from '../../controller/showu/teamController.js';

const teamRouter = express.Router();

// 팀 매칭 메인 데이터 "/showu/team"
teamRouter.get("/", getTeamList)

export default teamRouter;