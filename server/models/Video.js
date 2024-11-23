import mongoose from "mongoose";

// 비디오 형태 정하는 부분
// trim : 앞뒤 space 제거
const videoSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true, maxLength: 80 },
  fileUrl: { type: String, required: true },
  thumbUrl: { type: String, required: true },
  description: { type: String, required: true, trim: true, minLength: 2 },
  createdAt: { type: Date, required: true, default: Date.now },
  hashtags: [{ type: String, trim: true }],
  meta: {
    views: { type: Number, default: 0, required: true },
  },
  comment: [
    { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Comment" },
  ],
  owner: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
});

// mongoose middleware
// videoSchema.pre("save", async function () {
// this : 저장하려는 video obj
//   console.log(this);
// });

// static : modle의 static function 생성
videoSchema.static("formatHashtags", function (hashtags) {
  return hashtags
    .split(",")
    .map((tag) => (tag.startsWith("#") ? tag : `#${tag}`));
});

const Video = mongoose.model("Video", videoSchema);

export default Video;
