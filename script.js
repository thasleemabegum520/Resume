function openTab(evt, tabName) {
    // Hide all tab content
    let content = document.getElementsByClassName("tab-content");
    for (let i = 0; i < content.length; i++) {
        content[i].classList.remove("active");
    }

    // Remove active class from all buttons
    let buttons = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }

    // Show selected tab and add active class to button
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}