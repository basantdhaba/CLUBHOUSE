function sharePage() {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
        alert("ওয়েবসাইট লিংক কপি হয়েছে! ক্লাবের সদস্যদের শেয়ার করুন।");
    });
}
