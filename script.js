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
  document.addEventListener('DOMContentLoaded', function() {
    // Lấy nút chuyển đổi chế độ
    const switchButton = document.getElementById('switch');
    
    // Thêm sự kiện click cho nút chuyển đổi
    switchButton.addEventListener('click', function() {
        // Chuyển đổi class 'light' trên thẻ html
        document.body.classList.toggle('light');
    });

    // Thêm animation delay cho các mục danh sách
    const listItems = document.querySelectorAll('ul li');
    listItems.forEach((item, index) => {
        item.style.setProperty('--i', index + 1);
    });

    // Thêm animation delay cho các liên kết xã hội
    const socialLinks = document.querySelectorAll('#social-links a');
    socialLinks.forEach((link, index) => {
        link.style.setProperty('--i', index + 1);
    });

    // Hiển thị modal khi click vào link WeChat với animation
    const wechatLink = document.getElementById('wechat-link');
    const wechatModal = document.getElementById('wechat-card');
    const closeBtn = document.querySelector('.close-btn');

    wechatLink.addEventListener('click', function(e) {
        e.preventDefault(); // Ngăn chặn hành vi mặc định của link
        wechatModal.style.display = 'flex';
        // Thêm class show sau một khoảng thời gian ngắn để kích hoạt animation
        setTimeout(() => {
            wechatModal.classList.add('show');
        }, 10);
    });

    // Đóng modal khi click vào nút đóng hoặc bên ngoài modal
    closeBtn.addEventListener('click', function() {
        wechatModal.classList.remove('show');
        // Đợi animation hoàn thành trước khi ẩn modal
        setTimeout(() => {
            wechatModal.style.display = 'none';
        }, 300);
    });

    window.addEventListener('click', function(e) {
        if (e.target === wechatModal) {
            wechatModal.classList.remove('show');
            // Đợi animation hoàn thành trước khi ẩn modal
            setTimeout(() => {
                wechatModal.style.display = 'none';
            }, 300);
        }
    });

    // Thêm hiệu ứng khi cuộn trang
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const profileImg = document.querySelector('#profile img');
        
        // Thay đổi kích thước ảnh khi cuộn xuống
        if (scrollPosition > 50) {
            profileImg.style.width = '90px';
        } else {
            profileImg.style.width = '112px';
        }
    });
});
