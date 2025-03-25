function sendWhatsAppData() {
    let phoneNumber = document.getElementById("whatsappNumber").value.trim();
    const clubRole = document.getElementById("clubRole").value;
    const pinCode = document.getElementById("pinCode").value.trim();
    
    // Ensure phone number is exactly 10 digits (Indian number format)
    if (!/^\d{10}$/.test(phoneNumber)) {
        alert("⚠️ অনুগ্রহ করে সঠিক ১০ ডিজিটের মোবাইল নম্বর লিখুন!");
        return;
    }

    // Automatically add +91 prefix for WhatsApp
    phoneNumber = "+91" + phoneNumber;

    // Ensure pin code is valid (6-digit India format)
    if (!/^\d{6}$/.test(pinCode)) {
        alert("⚠️ অনুগ্রহ করে সঠিক ৬ ডিজিটের পিন কোড লিখুন!");
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
