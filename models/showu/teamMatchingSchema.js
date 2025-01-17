import { Schema, model } from "mongoose";
import { getCurrentTime } from "../../utils/utils.js";

const teamMatchingSchema = new Schema({
    teamLeader : { type : Schema.Types.ObjectId, ref : 'User' }, // 팀 개설 유저
    members : [{ type : Schema.Types.ObjectId, ref : 'User' }], // 팀원
    teamName: { type: String, required: true },
    categoty : { type : String },
    teamProfilo : { type : String },
    teamTitle : { type : String },
    teamIntro : { type : String, required : true },
    portfilo : { type : Schema.Types.ObjectId, ref : 'Upgrade' },
    activityPeriod : {
      start : { type : String, required : true }, //팀 활동 시작일
      end : { type : String, required : true }, //팀 활동 종료일
    },
    career : { type : Schema.Types.ObjectId, ref : 'Upgrade' },
    status: { type: String, enum: ['매칭 완료', '매칭 대기'], default: '매칭 대기' }, //팀 매칭 승인 상태
    recruit : { type : Number }, // 모집 인원
    likeCount: { type: Number, default: 0 },
    likedUsers: [{type: Schema.Types.ObjectId, ref : 'User'}],
    createdAt: { type: String, default: getCurrentTime },
    updatedAt: { type: String, default: getCurrentTime },
});

export default model("TeamMatching", teamMatchingSchema, "teamMatching")
