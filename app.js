import { renderLandingPage } from "./src/app/renderPages";
import { content, homeBtn, menuBtn, contactBtn } from "./src/app/utils/domElements";
import { removeAllChildNodes } from "./src/app/utils/functions"

homeBtn.addEventListener("click", function() {
    removeAllChildNodes(content);
    renderLandingPage();
});
menuBtn.addEventListener("click", function() {
    removeAllChildNodes(content);
    renderLandingPage();
});
contactBtn.addEventListener("click", function() {
    removeAllChildNodes(content);
    renderLandingPage();
});

export const run = () => {
    // renderLandingPage();
}