import TeamApply from "../../models/showu/teamApplySchema.js";
import TeamMatching from "../../models/showu/teamMatchingSchema.js";
import Upgrade from "../../models/users/upgradeSchema.js";
import path from 'path';

const applyCreate = async (req, res) => {
  const userId = req.user._id;
  const { id } = req.params;
  console.log("id", id)
  const { intro, portfilo } = req.body;

  const foundTeam = await TeamMatching.findOne({ _id : id }).lean();
  const foundUpgrade = await Upgrade.findOne({ exportName : userId }).lean();

  // console.log("foundUser", foundUser)
  console.log("foundTeam", foundTeam)
  console.log("foundUpgrade", foundUpgrade)

  const uploadFolder = "uploads/showu/apply";
  console.log("req.files", req.file)
  const relativePath = path.join(uploadFolder, req.file.filename).replaceAll("\\", "/");
  console.log("relativePath", relativePath)

  const createApply = await TeamApply.create({
    teamId : id,
    applyId : userId,
    teamName : foundTeam.teamName,
    intro : intro,
    career : foundUpgrade.career,
    portfilo : relativePath
  })

  console.log("createApply", createApply)

  res.status(200).json({
    createApplySuccess : true,
    message : "팀 지원이 완료되었습니다",
    createApplyList : createApply,
    filePath : relativePath
  })
}

export { applyCreate }