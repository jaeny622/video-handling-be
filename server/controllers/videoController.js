export const homeVideos = (req, res) => {
  // Video.find(); selectAll
  return res.send("home");
};
export const search = (req, res) => res.send("Search");
export const watch = (req, res) => {
  // const { id } = req.params;
  // Video.findById();
  return res.send("Watch");
};
export const editVideo = (req, res) => {
  // exist true or false 판단 : Video.exsists({_id:id});
  // Video.findByIdAndUpdate();
  return res.send("Edit Video");
};
export const deleteVideo = (req, res) => {
  // exist true or false 판단 : Video.exsists({_id:id});
  // Video.findByIdAndDelete();
  return res.send("Delete Video");
};
export const uploadVideo = (req, res) => {
  // video.save(); post
  // Video.create(); create new db
  return res.send("Upload Video");
};
