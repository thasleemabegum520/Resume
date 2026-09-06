/**
 * Handles the tab switching logic
 */
function openTab(evt, tabName) {
    // Hide all panels
    const tabPanels = document.getElementsByClassName("tab-panel");
    for (let i = 0; i < tabPanels.length; i++) {
        tabPanels[i].classList.remove("active");
    }

    // Deactivate all buttons
    const tabButtons = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }

    // Show the selected panel and highlight the button
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}
