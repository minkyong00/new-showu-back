import express from 'express';
import passport from 'passport';
import { getMyLesson, getMyTeamMatching, getlessonreservation, getTeamMatchingManagment, getManagmentDetail, requestStatusApprove, requestStatusReject,  } from '../../controller/mypage/myShowuController.js';

const myShowuRouter = express.Router()

// 팀매칭 목록 내역 '/my/showu/matching'
myShowuRouter.get("/matching", passport.authenticate('jwt', { session: false }), getMyTeamMatching)

// 개설한 레슨 목록 내역 '/my/showu/lesson'
myShowuRouter.get("/lesson", passport.authenticate('jwt', { session : false}), getMyLesson)

// 레슨 상담 내역 '/my/showu/reservation'
myShowuRouter.get("/reservation", passport.authenticate('jwt', { session : false}), getlessonreservation)

// 팀원 관리 내역 '/my/showu/managment'
myShowuRouter.get("/managment", passport.authenticate('jwt', { session : false}), getTeamMatchingManagment)

// 팀원 관리 상세 페이지 '/my/showu/managment/:id'
myShowuRouter.get("/managment/:id", getManagmentDetail)

// 팀원 승인 '/my/showu/request-status/approve'
myShowuRouter.put("/request-status/approve", requestStatusApprove)

// 팀원 거절 '/my/showu/request-status/reject'
myShowuRouter.put('/my/showu/request-status/reject', requestStatusReject)

export default myShowuRouter