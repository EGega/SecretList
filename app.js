const ekleBtn = document.getElementById("ekle");
const ul = document.getElementById("my-ul")
const inputBar = document.getElementById("input");
const toDo = document.querySelector(".to-do")

const createValue = () => {
  const li = document.createElement("li");
  li.classList.add("list");
  li.innerHTML = `<a href="#" class="xa">${input.value}</a><i class="fa-solid x fa-circle-xmark"></i>`
  ul.appendChild(li)
  let xBtn = document.querySelectorAll(".x");
  xBtn.forEach((x)=> {
    x.addEventListener("click", () => {
      x.parentElement.classList.add("d-none")
    })
  })
 
  }
 

const createLi = () => {
  const input = document.getElementById("input");
  if(input.value) {
    createValue()
  }
  input.value = "";
}

ekleBtn.addEventListener("click", createLi)
inputBar.addEventListener("keyup", (e) => {
  if(e.code === "Enter") {
    ekleBtn.click()
  }
})






