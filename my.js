function initTabs() {
  var tabs = $("#tabs a");
  var panes = $(".panes div");

  setSelectedTab(tabs.eq(0));
  setSelectedPane(panes.eq(0));

  tabs.on("click", changeTab);
}

function changeTab(eventData) {
  var link = $(eventData.target);
  var pane = link.attr('href');

  setSelectedTab(link);
  setSelectedPane(pane);
}

function setSelectedTab(link) {
  $("#tabs").find(".selected").removeClass("selected");
  link.addClass("selected");
}

function setSelectedPane(pane) {
  $('.panes').find(".current").removeClass("current");
  $(pane).addClass("current");
}

initTabs();