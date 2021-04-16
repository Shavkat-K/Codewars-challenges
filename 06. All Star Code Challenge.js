function toTime(seconds) {
//code here
  let hours = 0;
  let minutes = 0;
  if (seconds >= 3600) {
    hours = Math.floor(seconds / 3600)
    minutes = Math.floor((seconds -(hours * 3600)) / 60)
  } else {
    minutes = Math.floor(seconds / 60)
  }
  return `${hours} hour(s) and ${minutes} minute(s)`
}