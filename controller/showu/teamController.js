import TeamMatching from "../../models/showu/teamMatchingSchema.js";
import User from "../../models/users/userSchema.js";

const getTeamList = async (req, res) => {
    try {
        const foundTeam = await TeamMatching.find({}).populate("portfilo").lean();
        const foundUserName = await User.find({}).lean();

        console.log("foundTeam", foundTeam);
        console.log("foundUserName", foundUserName);

        // team에 유저 정보 추가
        const enrichedTeams = foundTeam.map(team => {
        const userName = foundUserName.find(user => user._id.toString() === team.teamLeader.toString());
        // 사용자 정보를 lesson에 추가
        return {
            ...team,
            userName: userName || null
        };
        });

        console.log("enrichedTeams", enrichedTeams)

        res.status(200).json({
        mainTeamSuccess: true,
        message: "성공적으로 team을 가져왔습니다",
        teamList: enrichedTeams,
        });
    } catch (error) {
        console.error("getMainLesson error:", error);

        res.status(500).json({
        mainLessonSuccess: false,
        message: "lesson을 가져오는데 실패했습니다",
        });
    }
}

const getTeamDetail = async (req, res) => {
    const { id } = req.params;
    console.log("id", id)

    try {
        const teamList = await TeamMatching.find({ _id : id })
            .populate("teamLeader")
            .populate("portfilo")
            .lean();

        console.log("teamList : ", teamList)

        res.status(200).json({
            teamDetailSuccess : true,
            message : "팀매칭 상세 페이지를 성공적으로 가져왔습니다.",
            teamList : teamList
        })

    } catch (error) {
        res.status(400).json({
            teamDetailSuccess : false,
            message : "팀매칭 상세 페이지를 가져오는데 실패했습니다",
        })
    }
}

export { getTeamList, getTeamDetail }