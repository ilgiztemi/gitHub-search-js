const img = document.querySelector('.img')
const username = document.querySelector('.username');
const geoLocation = document.querySelector('.location');
const repo = document.querySelector('.repo');
const uFollowers = document.querySelector('.followers');
const uFollowing = document.querySelector('.following');
const grid = document.querySelector('.grid-container');

const userName = window.location.search.split('=')[1]
const api = `https://api.github.com/users/${userName}`

async function fetchUser() {
    let res = await fetch(api);
    let data = await res.json();
    console.log(data)
    return data;
}
fetchUser().then(data => {
    const { avatar_url, name, location: loc, public_repos, followers, following } = data
    // img.src = data.avatar_url;
    // img.style.width = '200px'
    // username.innerHTML = data.name;
    // geoLocation.innerHTML = data.location;
    // repo.innerHTML = data.public_repos + ' repositories';
    // uFollowers.innerHTML = data.followers + ' followers';
    // uFollowing.innerHTML = data.following + ' following';
    img.src = avatar_url;
    img.style.width = '200px'
    username.innerHTML = name;
    geoLocation.innerHTML = loc;
    repo.innerHTML = public_repos + ' repositories';
    uFollowers.innerHTML = followers + ' followers';
    uFollowing.innerHTML = following + ' following';
});

const userNameRepo = window.location.search.split('=')[1] +'/repos';
const repoApi = 'https://api.github.com/users/' + userNameRepo;

async function fetchRepo() {
    let res = await fetch(repoApi);
    let data = await res.json();
    console.log(data)
    return data;
}
fetchRepo().then(data => {
    // for(let i in data) {
    //     let items = document.createElement('div');
    //     items.innerHTML += data[i].name;
    //     grid.appendChild(items);
    // }
    data.map(el => {
        let items = document.createElement('div');
        items.innerHTML += el.name;
        grid.appendChild(items);
    })
});








