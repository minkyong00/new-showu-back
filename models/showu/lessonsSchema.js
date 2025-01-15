import { Schema, model } from "mongoose";
import { getCurrentTime } from "../../utils/utils.js";

const lessonsSchema = new Schema({
  createdUser : { type : Schema.Types.ObjectId, ref : 'User' },
  lessonTitle : { tyep : String },
  lessonIntro : { type : String },
  lessonPhoto : [{ type : String }],
  recommend : [{ type : String }], // 추천 대상(이 강의가 필요하신 분)
  lessonVodUrl : { type : String },
  portfilo : { type : Schema.Types.ObjectId, ref : 'Upgrade' },
  category : { type : Schema.Types.ObjectId, ref : 'Upgrade' },
  career : { type : Schema.Types.ObjectId, ref : 'Upgrade' }, 
  likeCount: { type: Number, default: 0 },
  likedUsers: [{type: Schema.Types.ObjectId, ref : 'User'}],
  createdAt: { type: String, default: getCurrentTime },
  updatedAt: { type: String, default: getCurrentTime }
})

export default model("Lessons", lessonsSchema, "lesson")