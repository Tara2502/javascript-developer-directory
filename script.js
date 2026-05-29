const developers = [
  {
    id: 1,
    name: "Tara",
    role: "Frontend Developer",
    skill: "React",
    experience: 2,
    city: "Mumbai"
  },
  {
    id: 2,
    name: "Aman",
    role: "Backend Developer",
    skill: "Java",
    experience: 3,
    city: "Pune"
  },
  {
    id: 3,
    name: "Priya",
    role: "Frontend Developer",
    skill: "Angular",
    experience: 4,
    city: "Delhi"
  },
  {
    id: 4,
    name: "Rohit",
    role: "Full Stack Developer",
    skill: "React",
    experience: 5,
    city: "Bangalore"
  },
  {
    id: 5,
    name: "Neha",
    role: "Backend Developer",
    skill: "Spring Boot",
    experience: 2,
    city: "Mumbai"
  },
  {
    id: 6,
    name: "Arjun",
    role: "Frontend Developer",
    skill: "Vue",
    experience: 1,
    city: "Hyderabad"
  },
  {
    id: 7,
    name: "Sneha",
    role: "Full Stack Developer",
    skill: "Java",
    experience: 6,
    city: "Chennai"
  },
  {
    id: 8,
    name: "Vikram",
    role: "Backend Developer",
    skill: "Node.js",
    experience: 4,
    city: "Pune"
  },
  {
    id: 9,
    name: "Anjali",
    role: "Frontend Developer",
    skill: "React",
    experience: 3,
    city: "Mumbai"
  },
  {
    id: 10,
    name: "Karan",
    role: "DevOps Engineer",
    skill: "AWS",
    experience: 5,
    city: "Bangalore"
  }
];




 const container=document.getElementById("developer-container");



function showMessage(){
    console.log("profile opened");
}

    
const filterReact=developers.filter(dev=>dev.skill==="React");
const experiencedReactDeveloper=developers.filter(dev=>dev.experience>=2 && dev.skill==="React");

developers.forEach(dev=>{
    const card=document.createElement("div");
    card.innerHTML=`<h2>${dev.name}</h2>
                    <p>${dev.role}</p>
                    <p>${dev.skill}</p>
                    <p>${dev.experience} years</p>
                    <button onclick=showMessage()> View Profile </button>
                    `;
                    container.appendChild(card);
})

const searchBtn=document.getElementById("searchButton");
searchBtn.addEventListener("click",()=>{
    const inputValue=document.getElementById("searchInput").value;
    const filteredDevelopers=developers.filter(dev=>dev.skill.toLowerCase()===inputValue.toLowerCase());
 container.innerHTML = "";

filteredDevelopers.map(dev => {

    const card = document.createElement("div");

    card.innerHTML = `
        <h2>${dev.name}</h2>
        <p>${dev.role}</p>
        <p>${dev.skill}</p>
        <p>${dev.experience} years</p>
    `;

    container.appendChild(card);

});
});