const linksSocialMedia = {
  github: 'Kelymelo',
  youtube: 'UCzR6wBlTsJZKWAl7RLZarHg',
  facebook: 'kely.d.oliveira',
  twitter: 'kelythi',
  instagram: 'kely.d.oliveira'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      infoBioUser.textContent = data.bio
      userProfile.href = data.html_url
      imageUser.src = data.avatar_url
      loginUser.textContent = data.login
    })
}

getGithubProfileInfos()
