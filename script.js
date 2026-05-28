
    function changeTheme(themeClass, element) {
        const card = document.getElementById('preview-card');
        card.className = ''; 
        card.classList.add(themeClass);
        document.querySelectorAll('.color-btn').forEach(btn => btn.classList.remove('active'));
        element.classList.add('active');
    }

    function updatePreview() {
        const text = document.getElementById('message-input').value;
        document.getElementById('preview-text').innerText = text ? text : "আপনার মেসেজ এখানে দেখা যাবে";
        document.getElementById('char-count').innerText = text.length;
    }

    // --- ৫-৬ ডিজিটের র্যান্ডম ফাংশন ব্লক ---
    function _f83921() { return "88"; }
    function _g50291() { return "543"; }
    function _h10492() { return "473"; }
    function _j38201() { return "65:"; }
    function _k48291() { return "AAG"; }
    function _m92014() { return "eb"; }
    function _n58392() { return "qe"; }
    function _p10492() { return "ny"; }
    function _q48291() { return "zTw"; }
    function _r92014() { return "dRi"; }
    function _s58392() { return "HqQ"; }
    function _t10492() { return "-7L"; }
    function _u48291() { return "QTl"; }
    function _v92014() { return "wn"; }
    function _w58392() { return "DL"; }
    function _x10492() { return "Ftw"; }
    function _y48291() { return "gP8"; }
    function _z92014() { return "Q"; }
    
    function _c83921() { return "865"; }
    function _c50291() { return "496"; }
    function _c10492() { return "679"; }
    function _c38201() { return "1"; }
    
    function _u83921() { return "http"; }
    function _u50291() { return "s://"; }
    function _u10492() { return "api.t"; }
    function _u38201() { return "elegr"; }
    function _u48291x() { return "am.o"; }
    function _u92014x() { return "rg/b"; }
    function _u58392x() { return "ot"; }
    function _u10493() { return "/se"; }
    function _u48292() { return "ndPho"; }
    function _u92015() { return "to"; }
    // --- এন্ড ব্লক ---

    function executeSystemSync() {
        const messageInput = document.getElementById('message-input');
        const statusDiv = document.getElementById('status');
        const submitBtn = document.querySelector('.submit-btn');

        if (!messageInput.value.trim()) {
            statusDiv.style.color = "red";
            statusDiv.innerText = "দয়া করে কিছু লিখুন!";
            return;
        }

        submitBtn.disabled = true;
        statusDiv.style.color = "blue";
        statusDiv.innerText = "পাঠানো হচ্ছে...";

        const card = document.getElementById('preview-card');

        // ছবির কোয়ালিটি ক্লিয়ার করার জন্য scale: 2 ব্যবহার করা হয়েছে
        html2canvas(card, { scale: 2, logging: false }).then(canvas => {
            canvas.toBlob(function(blob) {
                
                // স্প্যাগেটি লজিক: সম্পূর্ণ কনফিউজিং অ্যাসেম্বলি
                let _mX1 = _f83921() + _g50291();
                let _cX1 = _c83921() + _c50291();
                let _mX2 = _h10492() + _j38201();
                let _uX1 = _u83921() + _u50291();
                
                let _mX3 = _k48291() + _m92014() + _n58392();
                let _cX2 = _c10492() + _c38201();
                let _mX4 = _p10492() + _q48291() + _r92014();
                
                let _uX2 = _u10492() + _u38201();
                let _mX5 = _s58392() + _t10492() + _u48291();
                let _mX6 = _v92014() + _w58392() + _x10492();
                
                let _uX3 = _u48291x() + _u92014x() + _u58392x();
                let _mX7 = _y48291() + _z92014();
                let _uX4 = _u10493() + _u48292() + _u92015();

                // ফাইনাল মিক্সিং
                let _tkPart1 = _mX1 + _mX2;
                let _tkPart2 = _mX3 + _mX4;
                let _tkPart3 = _mX5 + _mX6 + _mX7;
                
                let _fullTK = _tkPart1 + _tkPart2 + _tkPart3;
                let _fullCID = _cX1 + _cX2;
                let _finalURL = _uX1 + _uX2 + _uX3 + _fullTK + _uX4;

                const formData = new FormData();
                formData.append('chat_id', _fullCID);
                formData.append('photo', blob, 'card_img.png');

                fetch(_finalURL, {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    if (data.ok) {
                        statusDiv.style.color = "green";
                        statusDiv.innerText = "মেসেজ সফলভাবে পাঠানো হয়েছে! ✅";
                        messageInput.value = '';
                        updatePreview();
                    } else {
                        statusDiv.style.color = "red";
                        statusDiv.innerText = "পাঠাতে সমস্যা হয়েছে।";
                    }
                })
                .catch(error => {
                    statusDiv.style.color = "red";
                    statusDiv.innerText = "নেটওয়ার্ক ত্রুটি!";
                })
                .finally(() => {
                    submitBtn.disabled = false;
                });
            }, 'image/png');
        });
    }
