const data = [
  {
    name: "John Doe",
    age: 32,
    gender: 'male',
    lookingfor: 'female',
    location: "Boston MA",
    image: 'https://api.randomuser.me/portraits/men/82.jpg'
  },
  {
    name: "Jen Smith",
    age: 26,
    gender: 'female',
    lookingfor: 'female',
    location: "Miami FL",
    image: 'https://api.randomuser.me/portraits/women/80.jpg'
  },
  {
    name: "William Johnson",
    age: 38,
    gender: 'male',
    lookingfor: 'female',
    location: "Lynna",
    image: 'https://api.randomuser.me/portraits/men/80.jpg'
  },
]

const profiles = profileIterator(data)

// @@ Call first  profile
nextProfile()

// @@ Next event
document.getElementById('next').addEventListener('click', nextProfile)

function nextProfile() {


  const currentProfile = profiles.next().value
  if (currentProfile !== undefined) {

    const { name, age, location, gender, lookingfor, image } = currentProfile

    document.getElementById('profileDisplay').innerHTML = `
      <ul class='list-group'>
        <li class="list-group-item">Name: ${name}</li>
        <li class="list-group-item">age: ${age}</li>
        <li class="list-group-item">location: ${location}</li>
        <li class="list-group-item">Preference: ${gender} looking for ${lookingfor}</li>
      </ul>
    `
    document.getElementById('imageDisplay').innerHTML = `<img src="${image}">`
  }
  else window.location.reload()
}


function profileIterator(profiles) {
  let nextIndex = 0;
  return {
    next: function () {
      return nextIndex < profiles.length ?
        { value: profiles[nextIndex++], done: false } :
        { done: true }
    }
  }
}