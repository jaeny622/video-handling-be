import Video from "../models/Video.js";

export const homeVideos = async (req, res) => {
  const videos = await Video.find({}).sort({ createdAt: "desc" });
  return res.json(videos);
};
export const search = (req, res) => {
  // req.query; 쿼리 파라미터 체크
  // regex 이용
  // Video.find({title:{$regex : new RegExp(keyword,"i")}})
  return res.send("Search");
};
export const getVideo = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  return res.send(video);
};
export const editVideo = async (req, res) => {
  const { id, video } = req.body;
  const flag = await Video.exists({ _id: id });
  console.log(flag);
  if (flag) await Video.findByIdAndUpdate(id, video);
  return res.send({ success: "Edit Video" });
};
export const deleteVideo = (req, res) => {
  // exist true or false 판단 : Video.exsists({_id:id});
  // Video.findByIdAndDelete();
  return res.send("Delete Video");
};
export const uploadVideo = async (req, res) => {
  // video.save(); post
  await Video.create(req.body.video);

  return res.send({ text: "Upload Video" });
};
