const links = document.querySelectorAll(".links ul li a ")
console.log(links)
links.forEach((link) => {
  link.addEventListener("click", function (event) {
    // Remove 'active' class from all links
    links.forEach((l) => l.classList.remove("active"))
    // Add 'active' class to the clicked link
    this.classList.add("active")
    // Prevent default link behavior (optional)
    event.preventDefault()
  })
})
