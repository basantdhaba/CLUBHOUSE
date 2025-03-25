function sharePage() {
    const url = window.location.href;
    const message = "🚀 আপনার বাড়িভাড়া যেন কখনও ফাঁকা না থাকে! সঠিক সময়ে নির্ভরযোগ্য ভাড়াটিয়া পেতে এখনই Rentease-এ রেজিস্টার করুন। বিস্তারিত জানতে এখানে ক্লিক করুন: " + url;
    const whatsappLink = "https://wa.me/?text=" + encodeURIComponent(message);
    window.open(whatsappLink, "_blank");
}
