function shareWithMembers() {
    const url = window.location.href;
    const message = "🏠 Rentease আপনার পাড়ার নিরাপত্তা ও উন্নয়নের জন্য! ক্লাব সদস্যদের সুবিধা সম্পর্কে জানতে এখানে ক্লিক করুন: " + url;
    const whatsappLink = "https://wa.me/?text=" + encodeURIComponent(message);
    window.open(whatsappLink, "_blank");
}

function shareWithPropertyOwners() {
    const futurePageUrl = "https://yourwebsite.com/property-owners"; // ভবিষ্যতে তৈরি করা পেজের লিংক
    const message = "🏡 বাড়ির মালিকদের জন্য Rentease! আপনার সম্পত্তি ভাড়ার সেরা উপায় জানতে এখানে ক্লিক করুন: " + futurePageUrl;
    const whatsappLink = "https://wa.me/?text=" + encodeURIComponent(message);
    window.open(whatsappLink, "_blank");
}
