// Base64 encoded password for 'aibisgoat'
const encodedPassword = "YWliaXNnb2F0"; // base64 encoding of 'aibisgoat'

function unlockEpisode8() {
    const userPassword = prompt("Enter the password to unlock Episode 8:");

    // Check if the entered password matches the base64 encoded password
    if (btoa(userPassword) === encodedPassword) {
        // Redirect to Episode 8 link if the password is correct
        window.open("https://drive.google.com/u/0/uc?id=1QIesBZ_7-99ahulDw7lLwdMrgAwtGWoi&export=download", "_blank");
    } else {
        alert("Incorrect password. Please try again.");
    }
}
