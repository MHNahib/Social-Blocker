const socialMediaList = [
  "www.facebook.com",
  "web.telegram.org",

  "www.instagram.com",
  "www.tiktok.com",
  "www.qq.com",
  "www.reddit.com",
  "www.tumblr.com",
  "www.netflix.com",
  "www.primevideo.com",
  "www.hulu.com",
  "open.spotify.com",
  "www.pinterest.com",
  "twitter.com",
  "www.linkedin.com",
  "www.discord.com",
  "www.twitch.tv",
  "vimeo.com",
];

const addHtml = (website) => {
  return `<div class="container">
  <h3>THE WEBSITE IS BLOCKED FOR YOU</h3>
</div>`;
};

if (socialMediaList.includes(window.location.hostname)) {
  document.body.innerHTML = addHtml(window.location.hostname);
}
