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
        numberLabel: "📱 মোবাইল নম্বর (10 ডিজিট):",
        roleLabel: "🏅 ক্লাবে আপনার পদ:",
        clubNameLabel: "🏛️ ক্লাবের নাম:",
        pinCodeLabel: "📍 পিন কোড:",
        sendButton: "📢 তথ্য পাঠান"
    },
    hi: {
        pageTitle: "Rentease - क्लब सदस्य लाभ",
        title: "🏠 Rentease",
        subtitle: "🔹 अपने क्षेत्र की संपत्ति सुरक्षित रखें",
        benefitTitle: "क्लब के लाभ",
        benefit1: "🏡 क्षेत्र की संपत्ति सुरक्षित रहेगी",
        benefit2: "💰 दलाली की राशि क्लब के विकास में लगेगी",
        benefit3: "👥 नए किरायेदारों की जानकारी रिकॉर्ड होगी",
        benefit4: "📊 संपत्ति खरीदने-बेचने की सही जानकारी मिलेगी",
        benefit5: "🔐 सुरक्षा व्यवस्था बेहतर होगी",
        formTitle: "🔍 अपनी जानकारी दें",
        numberLabel: "📱 मोबाइल नंबर (10 अंक):",
        roleLabel: "🏅 क्लब में आपकी भूमिका:",
        clubNameLabel: "🏛️ क्लब का नाम:",
        pinCodeLabel: "📍 पिन कोड:",
        sendButton: "📢 जानकारी भेजें"
    },
    en: {
        pageTitle: "Rentease - Club Member Benefits",
        title: "🏠 Rentease",
        subtitle: "🔹 Secure Your Neighborhood Property",
        benefitTitle: "Club Benefits",
        benefit1: "🏡 Neighborhood properties will be secured",
        benefit2: "💰 Brokerage money will be used for club development",
        benefit3: "👥 New tenant information will be recorded",
        benefit4: "📊 Accurate details on buying & selling properties",
        benefit5: "🔐 Security measures will be improved",
        formTitle: "🔍 Provide Your Information",
        numberLabel: "📱 Mobile Number (10 Digits):",
        roleLabel: "🏅 Your Role in Club:",
        clubNameLabel: "🏛️ Club Name:",
        pinCodeLabel: "📍 PIN Code:",
        sendButton: "📢 Send Information"
    }
};

// Function to change language
function changeLanguage() {
    const lang = document.getElementById("language").value;
    document.title = languageData[lang].pageTitle;
    
    Object.keys(languageData[lang]).forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.innerText = languageData[lang][id];
        }
    });
}

// Function to send WhatsApp message
function sendWhatsAppData() {
    let phoneNumber = document.getElementById("whatsappNumber").value.trim();
    const clubRole = document.getElementById("clubRole").value;
    const clubName = document.getElementById("clubName").value.trim();
    const pinCode = document.getElementById("pinCode").value.trim();

    if (!/^\d{10}$/.test(phoneNumber)) {
        alert("⚠️ Please enter a valid 10-digit mobile number!");
        return;
    }

    phoneNumber = "+91" + phoneNumber;

    if (!/^\d{6}$/.test(pinCode)) {
        alert("⚠️ Please enter a valid 6-digit PIN code!");
        return;
    }

    const adminNumber = "919804122966"; 
    const message = `🏛️ Club Name: ${clubName}
📱 WhatsApp Number: ${phoneNumber}
🏅 Role: ${clubRole}
📍 PIN Code: ${pinCode}`;

    const whatsappLink = `https://wa.me/${adminNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
        }
        
