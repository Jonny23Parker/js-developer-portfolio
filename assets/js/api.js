
async function fetchProfileData() {
    const url = 'https://raw.githubualinnovationone/js-developer-portfolio/main/data/profile.json';sercontent.com/digit
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
