// script.js
document.addEventListener("DOMContentLoaded", function () {
  // Slack Name
  const slackNameElement = document.querySelector(
    "[data-testid='slackUserName']"
  );
  // slackNameElement.textContent = "Slack Name: Amanda Fredrick";

  // Current Day of the Week
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDate = new Date();
  const currentDayOfWeek = daysOfWeek[currentDate.getUTCDay()];
  const currentDayOfWeekElement = document.querySelector(
    "[data-testid='currentDayOfTheWeek']"
  );
  currentDayOfWeekElement.textContent = currentDayOfWeek;

  // Current UTC Time
  const currentUTCTimeElement = document.querySelector(
    "[data-testid='currentUTCTime']"
  );
  currentUTCTimeElement.textContent = Date.now();

  // Track
  const trackElement = document.querySelector("[data-testid='myTrack']");
  trackElement.textContent = "Frontend";
});
