let weapons = [];
const weaponContainer = document.getElementById("weapons");
fetch("https://gun-armory-api.herokuapp.com/weapons")
  .then((res) => res.json())
  .then((data) => {
    weapons = data;
    console.log(data);
    showWeapons(data);
  });
function showWeapons(weapons) {
  //   usersContainer.innerHTML = "";
  weapons.forEach((weapon) => { 
    weaponContainer.innerHTML += `
    <div id="list" class="card mt-2 mb-2 ms-2 me-2 shadow-lg p-3 rounded d-flex" style="width: 26rem;">
    <img id="prodimg" src="${weapon.image}" class="card-img-top img-fluid" data-bs-toggle="modal" data-bs-target="#exampleModal" style="object-fit: cover;">
    <div class="card-body">
    <p id="name" class="text-light">${weapon.name}</p>
    <ul id="desc" class="list-group list-group-flush">
      <li class="list-group-item bg-black text-light"> ${weapon.description}</li> 
      </ul>
    <div class="card-footer d-flex mt-3 text-light"> 
    <h4>Price: R ${weapon.price}</h4><br>
  </div>
    </div>
    </div>
    </div>
    `;
  });
}