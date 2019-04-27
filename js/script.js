let sidebar = false;

function sidebarSwitch() {
  if (sidebar == true) {
    document
      .getElementById("sidebar")
      .setAttribute("style", "margin-left: -140px;");
    document
      .getElementById("arrow")
      .setAttribute("style", "transform: rotate(180deg);");
    sidebar = false;
  } else if (sidebar == false) {
    document
      .getElementById("sidebar")
      .setAttribute("style", "margin-left: 0px;");
    document
      .getElementById("arrow")
      .setAttribute("style", "transform: rotate(0deg);");
    sidebar = true;
  }
}
