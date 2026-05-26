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

    if (!text.includes("fahim")) return;

    // 🎬 Video list
    const videos = [
      "https://files.catbox.moe/fxre5k.mp4",
      "https://files.catbox.moe/zkfe54.mp4",
      "https://files.catbox.moe/rbpxmu.mp4",
      "https://files.catbox.moe/zah3gd.mp4",
      "https://files.catbox.moe/dnuqtb.mp4",
      "https://files.catbox.moe/euhh1j.mp4",
      "https://files.catbox.moe/28zdh0.mp4",
      "https://files.catbox.moe/u6uhih.mp4",
      "https://files.catbox.moe/kjuygx.mp4",
      "https://files.catbox.moe/agbbr7.mp4",
      "https://files.catbox.moe/v0c93q.mp4",
      "https://files.catbox.moe/vn4iiv.mp4",
      "https://files.catbox.moe/lw4gip.mp4",
      "https://files.catbox.moe/7dhh65.mp4",
      "https://files.catbox.moe/t1o8nu.mp4",
      "https://files.catbox.moe/53ki3x.mp4",
      "https://files.catbox.moe/2riyds.mp4",
      "https://files.catbox.moe/u2inzy.mp4",
      "https://files.catbox.moe/zabqtx.mp4",
      "https://files.catbox.moe/lvat8q.mp4",
      "https://files.catbox.moe/8iohbn.mp4",
      "https://files.catbox.moe/zs1v3i.mp4",
      "https://files.catbox.moe/sdcjc6.mp4",
      "https://files.catbox.moe/2rjsbf.mp4",
      "https://files.catbox.moe/545cye.mp4",
      "https://files.catbox.moe/4o50lr.mp4",
      "https://files.catbox.moe/2xzljw.mp4",
      "https://files.catbox.moe/t005nq.mp4",
      "https://files.catbox.moe/hkuu1g.mp4",
      "https://files.catbox.moe/s462pk.mp4",
      "https://files.catbox.moe/esuxkr.mp4",
      "https://files.catbox.moe/f8xkp2.mp4",
      "https://files.catbox.moe/7ng9cb.mp4",
      "https://files.catbox.moe/mhi9ty.mp4",
      "https://files.catbox.moe/91pi11.mp4"
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