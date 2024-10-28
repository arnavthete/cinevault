// Base64 encoded password for 'aibisgoat'
const encodedPassword = "YWliaXNnb2F0"; // base64 encoding of 'aibisgoat'

function unlockEpisode8() {
    const userPassword = prompt("Enter the password to unlock Episode 8:");

    // Check if the entered password matches the base64 encoded password
    if (btoa(userPassword) === encodedPassword) {
        // Redirect to Episode 8 link if the password is correct
        window.open("https://drive.google.com/file/d/1g2-B_vx69Ip3kMykIcZhBRnvk1ynjB-P/view?usp=drive_link", "_blank");
    } else {
        alert("Incorrect password. Please try again.");
    }
}
