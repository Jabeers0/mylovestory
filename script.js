// ১. রিয়েল-টাইম ক্লক ফাংশন
function updateClock() {
    const now = new Date();
    // তারিখ, সময় এবং সেকেন্ড সহ ফরম্যাট
    const timeString = now.toLocaleTimeString('bn-BD', { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: true
    });
    
    document.getElementById('real-time-clock').textContent = timeString;
}

// প্রতি সেকেন্ডে ঘড়ি আপডেট করুন
setInterval(updateClock, 1000);
updateClock(); // পেজ লোড হওয়ার সাথে সাথে একবার কল করুন

// ২. কার্ডে ক্লিক করলে গ্লো টগল ফাংশন
function toggleGlow(element) {
    element.classList.toggle('glowing');
    
    // মেসেজ দেখানোর জন্য
    if (element.classList.contains('glowing')) {
        console.log("কার্ডে ক্লিক করা হয়েছে, গ্লো অন!");
    } else {
        console.log("কার্ডে ক্লিক করা হয়েছে, গ্লো অফ!");
    }
}

// ৩. বাটনে ক্লিক করার ফাংশন
function performAction() {
    // এখানে আপনার বাটনের কাঙ্খিত কাজটি লিখুন। 
    // যেমন, একটি অ্যালার্ট বা নতুন পেজে নেভিগেট করা
    alert("অভিনন্দন! আপনি গ্লোয়িং বাটনে ক্লিক করেছেন এবং এটি কাজ করেছে!");
    
    // বা বাটনের গ্লো পরিবর্তন করা
    const button = document.getElementById('action-button');
    button.style.backgroundColor = '#66cc66'; // গ্রিন কালার
    button.textContent = "কাজ সম্পন্ন!";
    
    setTimeout(() => {
        button.style.backgroundColor = '#ff3366'; // আগের কালারে ফিরিয়ে আনা
        button.textContent = "ক্লিক করুন!";
    }, 1500);
}
