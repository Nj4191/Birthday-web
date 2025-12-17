function openGift() {
  window.location.href = "gift.html";
}



function showMessage(message) {
alert(message);
}
function openModal(type) {
  const modal = document.getElementById("modal");
  const content = document.getElementById("modal-text");

  if (!modal || !content) {
    alert("Modal not found");
    return;
  }

  if (type === "love") {
    content.innerHTML = `
      <h2>💝 My Love Letter</h2>
      <p>You mean the world to me ❤️</p>
    `;
  }

  if (type === "music") {
    content.innerHTML = `
      <h2>🎵 A Song for You</h2>
      <audio controls autoplay>
        <source src="images/song.mp3" type="audio/mpeg">
      </audio>
    `;
  }

  if (type === "birthday") {
    content.innerHTML = `
      <h2>🎂 Happy Birthday</h2>
      <p>May all your dreams come true 💕</p>
    `;
  }

  modal.classList.remove("hidden");
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}

function testClick() {
  alert("Clicked!");
}
