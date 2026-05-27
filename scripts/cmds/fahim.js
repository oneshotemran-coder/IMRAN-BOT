const axios = require("axios");

let videoIndex = 0;

module.exports = {
  config: {
    name: "imran",
    version: "1.0.0",
    author: "Farhan-Khan",
    countDown: 0,
    role: 0,
    shortDescription: "Imran video reply",
    category: "media"
  },

  onStart: async function () {},

  onChat: async function ({ event, message }) {

    const text = (event.body || "").toLowerCase();

    if (!text.includes("imran")) return;

    // 🎬 Video list
    const videos = [
      "https://files.catbox.moe/tohxxe.mp4",
      "https://files.catbox.moe/7iunr8.mp4",
      "https://files.catbox.moe/988yxx.mp4",
      "https://files.catbox.moe/y3i1np.mp4",
      "https://files.catbox.moe/a36r4q.mp4",
      "https://files.catbox.moe/vmfxka.mp4",
      "https://files.catbox.moe/3zpm82.mp4",
      "https://files.catbox.moe/xe7ylb.mp4",
      "https://files.catbox.moe/jo77w4.mp4",
      "https://files.catbox.moe/pzo521.mp4",
      "https://files.catbox.moe/858ngn.mp4",
      "https://files.catbox.moe/yc1d9n.mp4",
      "https://files.catbox.moe/6ncvi8.mp4",
      "https://files.catbox.moe/5qijmn.mp4",
      "https://files.catbox.moe/2jd36v.mp4",
      "https://files.catbox.moe/7pka26.mp4",
      "https://files.catbox.moe/h5hqho.mp4",
      "https://files.catbox.moe/d6xs2g.mp4",
      "https://files.catbox.moe/kbcm3x.mp4",
      "https://files.catbox.moe/miv4ii.mp4",
      "https://files.catbox.moe/7pntx5.mp4",
      "https://files.catbox.moe/7ituuz.mp4",
      "https://files.catbox.moe/8ec66g.mp4"
    ];

    const videoUrl = videos[videoIndex];
    videoIndex = (videoIndex + 1) % videos.length;

    try {

      const videoStream = await axios({
        url: videoUrl,
        method: "GET",
        responseType: "stream",
        timeout: 5000,
        headers: { "User-Agent": "Mozilla/5.0" }
      });

      await message.reply({
        body: "🎬 Imran Video",
        attachment: videoStream.data
      });

    } catch (err) {
      console.log("❌ Video error:", err.message);
      await message.reply("😢 ভিডিও দিতে পারলাম না");
    }
  }
};