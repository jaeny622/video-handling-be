import Video from "../models/Video.js";

export const homeVideos = async (req, res) => {
  const { keyword } = req.query;
  let videos = [];
  if (!keyword) videos = await Video.find({}).sort({ createdAt: "desc" });
  else
    videos = await Video.find({
      title: { $regex: new RegExp(keyword, "i") },
    });
  return res.json(videos);
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
  return res.send({ status: flag ? "success" : "not found" });
};
export const deleteVideo = async (req, res) => {
  const { id } = req.body;
  const flag = await Video.exists({ _id: id });
  if (flag) await Video.findByIdAndDelete(id);
  return res.send({ status: flag ? "success" : "not found" });
};
export const uploadVideo = async (req, res) => {
  // video.save(); post
  await Video.create(req.body.video);

  return res.send({ text: "Upload Video" });
};
