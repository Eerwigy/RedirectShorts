const path = window.location.pathname;
if (path.startsWith("/shorts/")) {
  const vidId = path.slice(8);
  window.location.replace(`https://www.youtube.com/watch/${vidId}`);
}
