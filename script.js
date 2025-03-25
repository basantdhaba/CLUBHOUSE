function sendWhatsAppData() {
    const phoneNumber = document.getElementById("whatsappNumber").value.trim();
    const clubRole = document.getElementById("clubRole").value;
    const pinCode = document.getElementById("pinCode").value.trim();
    
    if (phoneNumber === "" || pinCode === "") {
        alert("অনুগ্রহ করে সঠিক তথ্য প্রদান করুন!");
        return;
    }

    const adminNumber = "+91XXXXXXXXXX"; // এখানে আপনার WhatsApp নম্বর দিন
    const shareUrl = "https://yourwebsite.com/share-link"; // শেয়ার করার URL

    const message = `🌟 ক্লাব সদস্য তথ্য 🌟
    
📱 WhatsApp নম্বর: ${phoneNumber}
🏅 পদ: ${clubRole}
📍 পিন কোড: ${pinCode}

✅ অনুগ্রহ করে নিশ্চিত করুন এবং তথ্য শেয়ার করুন: ${shareUrl}`;

    const whatsappLink = `https://wa.me/${adminNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
}
