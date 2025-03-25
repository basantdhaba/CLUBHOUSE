const languageData = {
    bn: {
        title: "Rentease",
        subtitle: "পাড়ার ক্লাব কর্তৃক পরিচালিত নিরাপদ ভাড়া ব্যবস্থা",
        formTitle: "🔍 আপনার তথ্য দিন",
        numberLabel: "📱 মোবাইল নম্বর (10 ডিজিট):",
        roleLabel: "🏅 আপনি ক্লাবের কী পদে আছেন?",
        clubNameLabel: "🏛️ আপনার ক্লাবের নাম:",
        pinCodeLabel: "📍 পিন কোড:",
    },
    hi: {
        title: "Rentease",
        subtitle: "पड़ोस क्लब द्वारा संचालित सुरक्षित किराए की व्यवस्था",
        formTitle: "🔍 अपनी जानकारी दें",
        numberLabel: "📱 मोबाइल नंबर (10 अंकों का):",
        roleLabel: "🏅 आप क्लब में किस पद पर हैं?",
        clubNameLabel: "🏛️ आपके क्लब का नाम:",
        pinCodeLabel: "📍 पिन कोड:",
    },
    en: {
        title: "Rentease",
        subtitle: "Safe rental system operated by the neighborhood club",
        formTitle: "🔍 Enter Your Information",
        numberLabel: "📱 Mobile Number (10 Digits):",
        roleLabel: "🏅 What is your position in the club?",
        clubNameLabel: "🏛️ Your Club Name:",
        pinCodeLabel: "📍 Pin Code:",
    }
};

// ভাষা পরিবর্তনের ফাংশন
function changeLanguage() {
    const lang = document.getElementById("language").value;
    document.getElementById("title").innerText = languageData[lang].title;
    document.getElementById("subtitle").innerText = languageData[lang].subtitle;
    document.getElementById("formTitle").innerText = languageData[lang].formTitle;
    document.getElementById("numberLabel").innerText = languageData[lang].numberLabel;
    document.getElementById("roleLabel").innerText = languageData[lang].roleLabel;
    document.getElementById("clubNameLabel").innerText = languageData[lang].clubNameLabel;
    document.getElementById("pinCodeLabel").innerText = languageData[lang].pinCodeLabel;
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

    const adminNumber = "919804122966"; // সঠিক ফরম্যাটে WhatsApp নম্বর
    const message = `🌟 ক্লাব সদস্য তথ্য 🌟
    
🏛️ ক্লাবের নাম: ${clubName}
📱 WhatsApp নম্বর: ${phoneNumber}
🏅 পদ: ${clubRole}
📍 পিন কোড: ${pinCode}`;

    const whatsappLink = `https://wa.me/${adminNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
}

// কন্টাক্ট লিস্ট থেকে নম্বর নেওয়ার ফাংশন (সাপোর্টেড ব্রাউজারে কাজ করবে)
function pickContact() {
    if ("contacts" in navigator && "select" in navigator.contacts) {
        navigator.contacts.select(["name", "tel"]).then(contacts => {
            if (contacts.length > 0) {
                document.getElementById("whatsappNumber").value = contacts[0].tel[0];
            }
        }).catch(error => {
            alert("⚠️ কন্টাক্ট লিস্ট অ্যাক্সেস করা যায়নি: " + error);
        });
    } else {
        alert("⚠️ আপনার ব্রাউজারে কন্টাক্ট লিস্ট ফিচার সাপোর্ট করে না!");
    }
}
