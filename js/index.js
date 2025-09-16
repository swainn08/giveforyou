const title = document.querySelector('.title')
const words = ["I Have Something", "For You"]

title.innerHTML = "" // reset dulu
title.style.display = "flex"
title.style.flexDirection = "column" // bikin kolom
title.style.alignItems = "center"
title.style.gap = "1rem"

words.forEach(line => {
  const lineDiv = document.createElement("div")
  lineDiv.style.display = "flex"
  lineDiv.style.gap = "0.5rem"
  line.split("").forEach(char => {
    if (char !== " ") {
      lineDiv.innerHTML += `<span>${char}</span>`
    } else {
      lineDiv.innerHTML += `<span style="width: 1rem"></span>`
    }
  })
  title.appendChild(lineDiv)
})

const textElements = document.querySelectorAll('.title span')
textElements.forEach((element) => {
  const randomDelay = Math.random() * 3
  element.style.animationDelay = `${randomDelay}s`
})
