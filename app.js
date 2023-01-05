// grabbing all the necessary stuffs
// essentials
const output = document.getElementById('output')
const cpBtn = document.getElementById('cpBtn')
// input fields
const id = document.getElementById("id")
const videoLink = document.getElementById("videoLink")
const title = document.getElementById("title")
const month = document.getElementById("month")
const date = document.getElementById("date")
const year = document.getElementById("year")
// stupid month && year buttons
// month buttons
const jan = document.getElementById("jan")
const feb = document.getElementById("feb")
const mar = document.getElementById("mar")
const apr = document.getElementById("apr")
const may = document.getElementById("may")
const jun = document.getElementById("jun")
const jul = document.getElementById("jul")
const aug = document.getElementById("aug")
const sep = document.getElementById("sep")
const oct = document.getElementById("oct")
const nov = document.getElementById("nov")
const dec = document.getElementById("dec")
// year buttons
const tk19 = document.getElementById("tk19")
const tk20 = document.getElementById("tk20")
const tk21 = document.getElementById("tk21")
const tk22 = document.getElementById("tk22")
const tk23 = document.getElementById("tk23")




// month && year btn onclick
// month btn onclick
jan.onclick = () => month.value = "Jan"
feb.onclick = () => month.value = "Feb"
mar.onclick = () => month.value = "Mar"
apr.onclick = () => month.value = "Apr"
may.onclick = () => month.value = "May"
jun.onclick = () => month.value = "Jun"
jul.onclick = () => month.value = "Jul"
aug.onclick = () => month.value = "Aug"
sep.onclick = () => month.value = "Sep"
oct.onclick = () => month.value = "Oct"
nov.onclick = () => month.value = "Nov"
dec.onclick = () => month.value = "Dec"
// month btn onclick
tk19.onclick = () => year.value = "2019"
tk20.onclick = () => year.value = "2020"
tk21.onclick = () => year.value = "2021"
tk22.onclick = () => year.value = "2022"
tk23.onclick = () => year.value = "2023"





// generate function ...
const generate = () => {
  output.innerHTML = 
  `<span class="key" >"id"</span>: ${id.value},<br>
  <span class="key" >"link"</span>: <span class="value" >"${videoLink.value}"</span>,<br>
  <span class="key" >"title"</span>: <span class="value" >"${title.value}"</span>,<br>
  <span class="key" >"published"</span>: <span class="value" >"${month.value} ${date.value}, ${year.value}"</span>,<br>
  <span class="key" >"games"</span>: <span class="value" >[]</span>
  `
}


// reset function ...
const reset = () => {
  id.value = ""
  videoLink.value = ""
  title.value = ""
  month.value = ""
  date.value = ""
  year.value = ""
  output.innerHTML = 
  `<span class="key" >"id"</span>: ,<br>
  <span class="key" >"link"</span>: <span class="value" >""</span>,<br>
  <span class="key" >"title"</span>: <span class="value" >""</span>,<br>
  <span class="key" >"published"</span>: <span class="value" >""</span>,<br>
  <span class="key" >"games"</span>: <span class="value" >[]</span>
  `
  
}

// copy function
const copyThat = () => {
	navigator.clipboard.writeText(output.innerText)
	alert(`${output.innerText}`)
}
cpBtn.onclick = () => copyThat()
