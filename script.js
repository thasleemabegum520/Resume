/**
 * Handles the tab switching logic
 * @param {Event} evt - The click event
 * @param {string} tabName - The ID of the tab to be displayed
 */
function openTab(evt, tabName) {
    // 1. Get all elements with class="tab-panel" and hide them
    const tabPanels = document.getElementsByClassName("tab-panel");
    for (let i = 0; i < tabPanels.length; i++) {
        tabPanels[i].classList.remove("active");
    }

    // 2. Get all elements with class="tab-btn" and remove the class "active"
    const tabButtons = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }

    // 3. Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}
