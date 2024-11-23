export const homeVideos = (req, res) => {
  // Video.find({}).sort({createdAt:"desc"}); selectAll and sort 가능
  return res.send([]);
};
export const search = (req, res) => {
  // req.query; 쿼리 파라미터 체크
  // regex 이용
  // Video.find({title:{$regex : new RegExp(keyword,"i")}})
  return res.send("Search");
};
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
  console.log(req.body.video);
  // video.save(); post
  // Video.create(); create new db
  return res.send({ text: "Upload Video" });
};
