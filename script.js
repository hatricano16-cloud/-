// فتح وإغلاق الشات
function toggleChat() {
    const chat = document.getElementById('chatWindow');
    chat.style.display = (chat.style.display === 'flex') ? 'none' : 'flex';
}

// الانتقال للـ Inventory
function openInventory() {
    document.getElementById('heroSection').style.display = 'none';
    document.getElementById('inventorySection').style.display = 'block';
}

// العودة للرئيسية
function closeInventory() {
    document.getElementById('inventorySection').style.display = 'none';
    document.getElementById('heroSection').style.display = 'flex';
}