async function fetchUser() {
  const username = document.getElementById("username").value.trim();
  const userInfo = document.getElementById("user-info");


  userInfo.classList.remove("show");

  if (!username) {
    alert("Please enter a GitHub username");
    return;
  }

  try {
    const response = await fetch(`https://api.github.com/users/${username}`);

    if (!response.ok) {
      if (response.status === 404) {
        alert("User not found. Please check the username.");
      } else {
        alert(`Error ${response.status}: Unable to fetch data`);
      }
      return;
    }

    const data = await response.json();
    console.log(data);
    document.getElementById("avatar").src = data.avatar_url;
    document.getElementById("name").innerText = data.name || "No name provided";
    document.getElementById("bio").innerText = data.bio || "No bio available";
    document.getElementById("followers").innerText = data.followers;
    document.getElementById("following").innerText = data.following;
    document.getElementById("repos").innerText = data.public_repos;

    userInfo.style.display = "block";
    void userInfo.offsetWidth;
    userInfo.classList.add("show");
  } catch (error) {
    alert("Network error. Please try again.");
  }
}
