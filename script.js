const flodeskRoot = document.querySelector(".ff-6aa0af49fc192a9fd7fc4b6e");

const getThanksUrl = () => {
  if (window.location.protocol === "file:") {
    return "thanks/index.html";
  }

  return "/thanks";
};

const redirectAfterFlodeskSuccess = () => {
  window.setTimeout(() => {
    window.location.href = getThanksUrl();
  }, 1800);
};

if (flodeskRoot) {
  let hasRedirected = false;

  const isSuccessful = () =>
    flodeskRoot.getAttribute("data-ff-stage") === "success" ||
    flodeskRoot.classList.contains("fd-has-success") ||
    Boolean(flodeskRoot.querySelector(".fd-has-success, [data-ff-el='success']:not([hidden])"));

  const observer = new MutationObserver(() => {
    if (hasRedirected || !isSuccessful()) {
      return;
    }

    hasRedirected = true;
    redirectAfterFlodeskSuccess();
    observer.disconnect();
  });

  observer.observe(flodeskRoot, {
    attributes: true,
    attributeFilter: ["class", "data-ff-stage"],
    childList: true,
    subtree: true,
  });
}
