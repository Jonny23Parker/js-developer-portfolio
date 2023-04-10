
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/Jonny23Parker/js-developer-portfolio/main/data/Jonnyprofile.json';sercontent.com/digit
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
