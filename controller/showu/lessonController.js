import Lessons from "../../models/showu/lessonsSchema.js";
import Upgrade from "../../models/users/upgradeSchema.js";
import User from "../../models/users/userSchema.js";

const getLessonList = async (req, res) => {
    try {
        const foundLesson = await Lessons.find({}).lean();
        const foundUser = await Upgrade.find({}).lean();
        const foundUserName = await User.find({}).lean();
    
        // console.log("foundLesson", foundLesson);
        // console.log("foundUser", foundUser);
    
        // Lesson에 Upgrade 정보 추가
        const enrichedLessons = foundLesson.map(lesson => {
          const userInfo = foundUser.find(user => user.exportName.toString() === lesson.createdUser.toString());
          const userName = foundUserName.find(user => user._id.toString() === lesson.createdUser.toString());
          // 사용자 정보를 lesson에 추가
          return {
            ...lesson,
            userInfo: userInfo || null,
            userName: userName || null
          };
        });
    
        console.log("enrichedLessons", enrichedLessons)
    
        res.status(200).json({
          mainLessonSuccess: true,
          message: "성공적으로 lesson을 가져왔습니다",
          LessonList: enrichedLessons,
        });
      } catch (error) {
        console.error("getMainLesson error:", error);
    
        res.status(500).json({
          mainLessonSuccess: false,
          message: "lesson을 가져오는데 실패했습니다",
        });
      }
}

export { getLessonList }