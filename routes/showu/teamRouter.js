import express from 'express';
import { getTeamDetail, getTeamList } from '../../controller/showu/teamController.js';

const teamRouter = express.Router();

// 팀 매칭 메인 데이터 "/showu/team"
teamRouter.get("/", getTeamList)

// 팀 매칭 상세 페이지 '/showu/team/detail/:id
teamRouter.get("/detail/:id", getTeamDetail)

export default teamRouter;