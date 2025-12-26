/* MENU OPEN WITH TOP SCROLL + DELAY */
function openMenu() {
  window.scrollTo({ top: 0, behavior: "smooth" });

  setTimeout(() => {
    document.getElementById("slideMenu").classList.add("open");
  }, 400);
}

function closeMenu() {
  document.getElementById("slideMenu").classList.remove("open");
}

/* SCROLL BUTTONS */
function goToProjects() {
  const y = document.getElementById("projects").offsetTop - 60;
  window.scrollTo({ top: y, behavior: "smooth" });
}
function goToContact() {
  const y = document.getElementById("contact").offsetTop - 60;
  window.scrollTo({ top: y, behavior: "smooth" });
}

/* PROJECT TOGGLE */
function toggleProject(e) {
  e.stopPropagation();
  document.getElementById("projectMore").style.display = "block";
  document.getElementById("projectShort").style.display = "none";
  document.getElementById("viewMoreSpan").style.display = "none";
}
document.addEventListener("click", () => {
  document.getElementById("projectMore").style.display = "none";
  document.getElementById("projectShort").style.display = "block";
  document.getElementById("viewMoreSpan").style.display = "inline";
});

/* GITHUB */
function openProject(e){
  e.stopPropagation();
  window.open("https://github.com/AloneHacker-008/Bunny-AI","_blank");
}

/* TYPEWRITER */
const texts=["Ethical Hacker","Python Developer","Cybersecurity Learner"];
let i=0,j=0;
const el=document.getElementById("typing");
function type(){
  if(j<texts[i].length){
    el.textContent+=texts[i][j++];
    setTimeout(type,80);
  }else setTimeout(erase,1000);
}
function erase(){
  if(j>0){
    el.textContent=texts[i].substring(0,--j);
    setTimeout(erase,50);
  }else{
    i=(i+1)%texts.length;
    setTimeout(type,300);
  }
}
type();
