function createMatrixText() {
    const matrixText = document.createElement("div");
    matrixText.textContent = getRandomChar(); // Chọn ngẫu nhiên một ký tự
    matrixText.style.left = Math.random() * 100 + "vw"; // Vị trí ngang ngẫu nhiên
    matrixText.style.animationDuration = Math.random() * 5 + 2 + "s"; // Tốc độ rơi ngẫu nhiên
    document.querySelector(".matrix-container").appendChild(matrixText);

    setTimeout(() => {
        matrixText.remove();
    }, 5000); // Xóa ký tự sau khi rơi xong
}

function getRandomChar() {
    const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    return characters[Math.floor(Math.random() * characters.length)];
}

setInterval(createMatrixText, 100); // Tạo ký tự mới liên tục
