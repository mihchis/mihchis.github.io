function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")
  
    // pegar a tag img
    const img = document.querySelector("#profile img")
  
    // substituir a imagem
    if (html.classList.contains("light")) {
      // se tiver light mode, adicionar a imagem light
      img.setAttribute("src", "./assets/avatar.jpg")
    } else {
      // set tiver sem light mode, manter a imagem normal
      img.setAttribute("src", "./assets/avatar.jpg")
    }
  }
  // Lấy phần tử modal và liên kết WeChat
const wechatLink = document.getElementById('wechat-link');
const wechatCard = document.getElementById('wechat-card');
const closeWechatBtn = document.getElementById('close-wechat');

// Khi nhấp vào liên kết WeChat, hiển thị card mã QR
wechatLink.addEventListener('click', function() {
    wechatCard.style.display = 'flex';
});

// Khi nhấp vào nút đóng (x), ẩn card mã QR
closeWechatBtn.addEventListener('click', function() {
    wechatCard.style.display = 'none';
});

// Khi nhấp bên ngoài card mã QR, ẩn card
window.addEventListener('click', function(event) {
    if (event.target === wechatCard) {
        wechatCard.style.display = 'none';
    }
});
