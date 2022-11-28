const menuBtn = document.getElementById("menu-button")
const closeBtn = document.getElementById("close-button")
const mobileSidebar = document.getElementById("mobile-sidebar")
const services = document.getElementById("services")

menuBtn.addEventListener("click", () => {
    mobileSidebar.classList.toggle("hidden")
    closeBtn.classList.toggle("hidden")
    menuBtn.classList.toggle("hidden")
})
closeBtn.addEventListener("click", () => {
    mobileSidebar.classList.toggle("hidden")
    closeBtn.classList.toggle("hidden")
    menuBtn.classList.toggle("hidden")
})
