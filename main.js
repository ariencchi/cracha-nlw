const linksSocialMedia = {
  github: 'ariencchi',
  youtube: 'alessandraasato',
  facebook: 'alessandraasato',
  instagram: 'ariencchi',
  twitter: 'ariencchi'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userAvatar.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGitHubProfileInfos()
changeSocialMediaLinks()
