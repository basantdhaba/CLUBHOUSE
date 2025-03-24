function sharePage() {
    const url = window.location.href;
    const message = "🚀 পাড়ার নিরাপদ ও নিয়ন্ত্রিত ভাড়া ব্যবস্থার জন্য Rentease ব্যবহার করুন! বিস্তারিত জানতে এখানে ক্লিক করুন: " + url;
    const whatsappLink = "https://wa.me/?text=" + encodeURIComponent(message);
    window.open(whatsappLink, "_blank");
}
