/* ============================================================
   Batagor site config — the only place to edit when things change.

   Batu is live on the App Store; its link is set in
   batu.appStoreUrl below. Every "In review" label across the site
   flips to the live state and the download badge appears. Nothing
   else needs touching.
============================================================ */
(function () {
  var C = window.BATAGOR = {
    aDay: {
      appStoreUrl: "https://apps.apple.com/id/app/a-day-temporary-camera/id6754833335?l=id",
      rating: "5.0"
    },
    batu: {
      appStoreUrl: "https://apps.apple.com/app/batu/id6825723999"
    }
  };

  // Runs in <head>, so the live/review state is set before first paint.
  if (C.batu.appStoreUrl) document.documentElement.setAttribute("data-batu-live", "");

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-appstore]").forEach(function (el) {
      var url = el.getAttribute("data-appstore") === "batu" ? C.batu.appStoreUrl : C.aDay.appStoreUrl;
      if (url) el.href = url;
    });
    document.querySelectorAll("[data-rating]").forEach(function (el) {
      el.textContent = C.aDay.rating + " on the App Store";
    });
  });
})();
