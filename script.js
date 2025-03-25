const languageData = {
    bn: {
        pageTitle: "Rentease - ক্লাব সদস্যদের সুবিধা",
        title: "🏠 Rentease",
        subtitle: "🔹 আপনার পাড়ার সম্পত্তি সুরক্ষিত রাখুন",
        benefitTitle: "ক্লাবের উপকারিতা",
        benefit1: "🏡 পাড়ার সম্পত্তি সুরক্ষিত থাকবে",
        benefit2: "💰 ব্রোকারেজের টাকা ক্লাবের উন্নতিতে লাগবে",
        benefit3: "👥 নতুন ভাড়াটেদের তথ্য রেকর্ড থাকবে",
        benefit4: "📊 সম্পত্তি কেনা-বেচার সঠিক তথ্য থাকবে",
        benefit5: "🔐 নিরাপত্তা ব্যবস্থা উন্নত হবে",
        formTitle: "🔍 আপনার তথ্য দিন",
    }
};

// ভাষা পরিবর্তনের ফাংশন
function changeLanguage() {
    const lang = document.getElementById("language").value;
    Object.keys(languageData[lang]).forEach(id => {
        document.getElementById(id).innerText = languageData[lang][id];
    });
}

// WhatsApp নম্বর পাঠানোর ফাংশন
function sendWhatsAppData() {
    let phoneNumber = document.getElementById("whatsappNumber").value.trim();
    const clubRole = document.getElementById("clubRole").value;
    const clubName = document.getElementById("clubName").value.trim();
    const pinCode = document.getElementById("pinCode").value.trim();

    if (!/^\d{10}$/.test(phoneNumber)) {
        alert("⚠️ অনুগ্রহ করে সঠিক ১০ ডিজিটের মোবাইল নম্বর লিখুন!");
        return;
    }

    phoneNumber = "+91" + phoneNumber;
    
    if (!/^\d{6}$/.test(pinCode)) {
        alert("⚠️ অনুগ্রহ করে সঠিক ৬ ডিজিটের পিন কোড লিখুন!");
        return;
    }

    const adminNumber = "919804122966"; 
    const message = `🏛️ ক্লাবের নাম: ${clubName}
📱 WhatsApp নম্বর: ${phoneNumber}
🏅 পদ: ${clubRole}
📍 পিন কোড: ${pinCode}`;

    const whatsappLink = `https://wa.me/${adminNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
}
