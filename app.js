const containers = document.querySelectorAll('.map');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const closeModal = document.getElementById('close-modal');
const modalContent = document.querySelector('.modal-content');

// 創建一個函數來生成 URL
function generateUrl(number) {
    const baseUrl = 'https://dl.cdn.dartslive.com/dl3-digitalcontents/image_darts/imagedarts_';
    return `${baseUrl}${number}.jpg`;
}

// 縣市圖片數據
// 縣市圖片數據
const prefectureData = {
    '北海道': {
        big: generateUrl(50006),
        small: generateUrl(50007),
        videoBig: 'https://www.youtube.com/watch?v=wzzT98kCSK4', // 影片大
        videoSmall: 'https://www.youtube.com/watch?v=2Q-8ATL29qA' // 影片小
    },
    '青森': {
        big: generateUrl(50018),
        small: generateUrl(50019),
        videoBig: 'https://www.youtube.com/watch?v=kXOkKnJ2q8s', // 影片大
        videoSmall: 'https://www.youtube.com/watch?v=itjIRzBKa3Q' // 影片小
    },
    '岩手': {
        big: "",
        small: "",
        videoBig: '', // 影片大
        videoSmall: '' // 影片小
    },
    '宮城': {
        big: generateUrl(50010),
        small: generateUrl(50011),
        videoBig: 'https://www.youtube.com/watch?v=j8mC-fd1jjc', // 影片大
        videoSmall: 'https://www.youtube.com/watch?v=qLkPsKcryuI' // 影片小
    },
    '秋田': {
        big: generateUrl(50046),
        small: generateUrl(50047),
        videoBig: 'https://www.youtube.com/watch?v=s0R2aYiaM2I', // 影片大
        videoSmall: 'https://www.youtube.com/watch?v=CVQyz_Sfsd8' // 影片小
    },
    '山形': {
        big: generateUrl(50054),
        small: generateUrl(50055),
        videoBig: '', // 影片大
        videoSmall: '' // 影片小
    },
    '福島': {
        big: generateUrl(50034),
        small: generateUrl(50035),
        videoBig: 'https://www.youtube.com/watch?v=zA3OnYBTUZc', // 影片大
        videoSmall: 'https://www.youtube.com/watch?v=WwQ1ihmTKrg' // 影片小
    },
    '茨城': {
        big: generateUrl(50068),
        small: generateUrl(50069),
        videoBig: '', // 影片大
        videoSmall: '' // 影片小
    },
    '栃木': {
        big: generateUrl(50058),
        small: generateUrl(50059),
        videoBig: '', // 影片大
        videoSmall: '' // 影片小
    },
    '群馬': {
        big: generateUrl(50088),
        small: generateUrl(50089),
        videoBig: '', // 影片大
        videoSmall: '' // 影片小
    },
    '埼玉': {
        big: generateUrl(50028),
        small: generateUrl(50029),
        videoBig: 'https://www.youtube.com/watch?v=glhoijaoXDs', // 影片大
        videoSmall: 'https://www.youtube.com/watch?v=JJKS7EYBWNQ' // 影片小
    },
    '千葉': {
        big: generateUrl(50026),
        small: generateUrl(50027),
        videoBig: 'https://www.youtube.com/watch?v=JrBsweMlsWg', // 影片大
        videoSmall: 'https://www.youtube.com/watch?v=h55b37IvbpQ' // 影片小
    },
    '東京': {
        big: generateUrl(50004),
        small: generateUrl(50005),
        videoBig: 'https://www.youtube.com/watch?v=QisuAzGgF60', // 影片大
        videoSmall: 'https://www.youtube.com/watch?v=YvSyxOyTfN4' // 影片小
    },
    '神奈川': {
        big: generateUrl(50022),
        small: generateUrl(50023),
        videoBig: 'https://www.youtube.com/watch?v=lwW_o9X_FNQ', // 影片大
        videoSmall: 'https://www.youtube.com/watch?v=xrl5HoADb64' // 影片小
    },
    '新潟': {
        big: generateUrl(50062),
        small: generateUrl(50063),
        videoBig: 'https://www.youtube.com/watch?v=WN3WNXwhXPM', // 影片大
        videoSmall: 'https://www.youtube.com/watch?v=o1dLOp7988k' // 影片小
    },
    '富山': {
        big: "",
        small: "",
        videoBig: '', // 影片大
        videoSmall: '' // 影片小
    },
    '石川': {
        big: generateUrl(50044),
        small: generateUrl(50045),
        videoBig: '', // 影片大
        videoSmall: '' // 影片小
    },
    '福井': {
        big: "",
        small: "",
        videoBig: '', // 影片大
        videoSmall: '' // 影片小
    },
    '山梨': {
        big: "",
        small: "",
        videoBig: '', // 影片大
        videoSmall: '' // 影片小
    },
    '長野': {
        big: generateUrl(50048),
        small: generateUrl(50049),
        videoBig: '', // 影片大
        videoSmall: '' // 影片小
    },
    '岐阜': {
        big: generateUrl(50056),
        small: generateUrl(50057),
        videoBig: '', // 影片大
        videoSmall: '' // 影片小
    },
    '静岡': {
        big: generateUrl(50042),
        small: generateUrl(50043),
        videoBig: 'https://www.youtube.com/watch?v=SXZBuCVIX0U', // 影片大
        videoSmall: 'https://www.youtube.com/watch?v=aA2PGOdHb-A' // 影片小
    },
    '愛知': {
        big: generateUrl(50014),
        small: generateUrl(50015),
        videoBig: 'https://www.youtube.com/watch?v=1c2g5bH1tXU', // 影片大
        videoSmall: 'https://www.youtube.com/watch?v=agIEYRBXo4s' // 影片小
    },
    '三重': {
        big: "",
        small: "",
        videoBig: '', // 影片大
        videoSmall: '' // 影片小
    },
    '滋賀': {
        big: generateUrl(50066),
        small: generateUrl(50067),
        videoBig: '', // 影片大
        videoSmall: '' // 影片小
    },
    '京都': {
        big: generateUrl(50020),
        small: generateUrl(50021),
        videoBig: 'https://www.youtube.com/watch?v=Ydfahkrm-qc', // 影片大
        videoSmall: 'https://www.youtube.com/watch?v=Qh2un9FOshs' // 影片小
    },
    '大阪': {
        big: generateUrl(50000),
        small: generateUrl(50001),
        videoBig: 'https://www.youtube.com/watch?v=Y9lCGy2Q0tk', // 影片大
        videoSmall: 'https://www.youtube.com/watch?v=sixDOpJtXiE' // 影片小
    },
    '兵庫': {
        big: generateUrl(50024),
        small: generateUrl(50025),
        videoBig: 'https://www.youtube.com/watch?v=4M3Z6LTUuFw', // 影片大
        videoSmall: 'https://www.youtube.com/watch?v=KiZC3-KTe7g' // 影片小
    },
    '奈良': {
        big: generateUrl(50030),
        small: generateUrl(50031),
        videoBig: 'https://www.youtube.com/watch?v=sKzazmvv5_c', // 影片大
        videoSmall: 'https://www.youtube.com/watch?v=GMT_2TPgGSw' // 影片小
    },
    '和歌山': {
        big: generateUrl(50070),
        small: generateUrl(50071),
        videoBig: '', // 影片大
        videoSmall: '' // 影片小
    },
    '鳥取': {
        big: generateUrl(50032),
        small: generateUrl(50033),
        videoBig: 'https://www.youtube.com/watch?v=ZL4FC161cYI', // 影片大
        videoSmall: 'https://www.youtube.com/watch?v=eMd8jUDKfS0' // 影片小
    },
    '島根': {
        big: generateUrl(50076),
        small: generateUrl(50077),
        videoBig: '', // 影片大
        videoSmall: '' // 影片小
    },
    '岡山': {
        big: "",
        small: "",
        videoBig: '', // 影片大
        videoSmall: '' // 影片小
    },
    '広島': {
        big: generateUrl(50002),
        small: generateUrl(50003),
        videoBig: 'https://www.youtube.com/watch?v=nwSk8aCQzyc', // 影片大
        videoSmall: 'https://www.youtube.com/watch?v=WREmzzljg78' // 影片小
    },
    '山口': {
        big: generateUrl(50052),
        small: generateUrl(50053),
        videoBig: 'https://www.youtube.com/watch?v=clMgiqOhrwY', // 影片大
        videoSmall: 'https://www.youtube.com/watch?v=owKjqX2staA' // 影片小
    },
    '徳島': {
        big: "",
        small: "",
        videoBig: '', // 影片大
        videoSmall: '' // 影片小
    },
    '香川': {
        big: generateUrl(50036),
        small: generateUrl(50037),
        videoBig: 'https://www.youtube.com/watch?v=I5K09tzb7Vk', // 影片大
        videoSmall: 'https://www.youtube.com/watch?v=V5iHJK1hL04' // 影片小
    },
    '愛媛': {
        big: "",
        small: "",
        videoBig: '', // 影片大
        videoSmall: '' // 影片小
    },
    '高知': {
        big: generateUrl(50016),
        small: generateUrl(50017),
        videoBig: 'https://www.youtube.com/watch?v=3CerkDr2E1U', // 影片大
        videoSmall: 'https://www.youtube.com/watch?v=fIXOt4ikpgY' // 影片小
    },
    '福岡': {
        big: generateUrl(50008),
        small: generateUrl(50009),
        videoBig: 'https://www.youtube.com/watch?v=yNMMyWUtBZE', // 影片大
        videoSmall: 'https://www.youtube.com/watch?v=DPq-bJii5z4' // 影片小
    },
    '佐賀': {
        big: generateUrl(50038),
        small: generateUrl(50039),
        videoBig: 'https://www.youtube.com/watch?v=-PGM8Pq7IBc', // 影片大
        videoSmall: 'https://www.youtube.com/watch?v=Oh9X5tMD2jw' // 影片小
    },
    '長崎': {
        big: generateUrl(50072),
        small: generateUrl(50073),
        videoBig: '', // 影片大
        videoSmall: '' // 影片小
    },
    '熊本': {
        big: generateUrl(50012),
        small: generateUrl(50013),
        videoBig: 'https://www.youtube.com/watch?v=e2o315BfYOM', // 影片大
        videoSmall: 'https://www.youtube.com/watch?v=jGuWXTQJgR0' // 影片小
    },
    '大分': {
        big: "",
        small: "",
        videoBig: '', // 影片大
        videoSmall: '' // 影片小
    },
    '宮崎': {
        big: generateUrl(50074),
        small: generateUrl(50075),
        videoBig: '', // 影片大
        videoSmall: '' // 影片小
    },
    '鹿児島': {
        big: "",
        small: "",
        videoBig: '', // 影片大
        videoSmall: '' // 影片小
    },
    '沖縄': {
        big: generateUrl(50040),
        small: generateUrl(50041),
        videoBig: 'https://www.youtube.com/watch?v=PSYSzoZsmRw', // 影片大
        videoSmall: 'https://www.youtube.com/watch?v=XPKGudMe0MM' // 影片小
    }
};

containers.forEach(container => {
    const prefs = container.querySelectorAll('.prefecture');

    prefs.forEach(pref => {
        // 點擊事件
        pref.addEventListener('click', event => {
            const regionName = event.currentTarget.getAttribute('data-name');

            // 設置標題
            modalTitle.textContent = `${regionName}的FUN DARTS`;

            // 設置圖片
            const setImage = (imageElement, imageUrl, altText) => {
                if (imageUrl && imageUrl.trim() !== "") {
                    imageElement.src = imageUrl;
                    imageElement.alt = altText;
                } else {
                    imageElement.src = 'https://i.imgur.com/yqAMN1Q_d.webp?maxwidth=760&fidelity=grand'; // 預設圖片
                    imageElement.alt = '預設圖片';
                }
            };

            if (prefectureData[regionName]) {
                setImage(image1, prefectureData[regionName].big, `${regionName}大的`);
                setImage(image2, prefectureData[regionName].small, `${regionName}小的`);

                // 設置影片連結為文字超連結
                const link1 = document.getElementById('link1');
                const link2 = document.getElementById('link2');
                const caption1 = link1.querySelector('.image-caption');
                const caption2 = link2.querySelector('.image-caption');

                // 檢查是否有影片連結，若無則禁用連結
                if (prefectureData[regionName].videoBig) {
                    link1.href = prefectureData[regionName].videoBig;
                    caption1.textContent = '大的影片連結';
                    link1.setAttribute('target', '_blank');
                    link1.style.pointerEvents = 'auto'; // 使連結可點擊
                } else {
                    link1.removeAttribute('href');
                    caption1.textContent = '還沒公開';
                    link1.style.pointerEvents = 'none'; // 禁用點擊
                }

                if (prefectureData[regionName].videoSmall) {
                    link2.href = prefectureData[regionName].videoSmall;
                    caption2.textContent = '小的影片連結';
                    link2.setAttribute('target', '_blank');
                    link2.style.pointerEvents = 'auto'; // 使連結可點擊
                } else {
                    link2.removeAttribute('href');
                    caption2.textContent = '還沒公開';
                    link2.style.pointerEvents = 'none'; // 禁用點擊
                }
            } else {
                // 使用預設圖片
                setImage(image1, '', '預設大的圖片');
                setImage(image2, '', '預設小的圖片');

                // 設置影片連結
                const link1 = document.getElementById('link1');
                const link2 = document.getElementById('link2');
                const caption1 = link1.querySelector('.image-caption');
                const caption2 = link2.querySelector('.image-caption');

                link1.removeAttribute('href');
                caption1.textContent = '沒有影片連結';
                link1.style.pointerEvents = 'none'; // 禁用點擊

                link2.removeAttribute('href');
                caption2.textContent = '沒有影片連結';
                link2.style.pointerEvents = 'none'; // 禁用點擊
            }

            modal.style.display = 'flex';
        });

        // 滑鼠懸停效果
        pref.addEventListener('mouseover', event => {
            event.currentTarget.style.fill = "#ff0000";
        });

        pref.addEventListener('mouseleave', event => {
            event.currentTarget.style.fill = "";
        });
    });
});



// 關閉模態框 - 點擊 X 按鈕
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// 點擊模態框外部關閉
modal.addEventListener('click', event => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// 防止點擊模態框內容時關閉
modalContent.addEventListener('click', event => {
    event.stopPropagation();
});

// ESC 鍵關閉
document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
        modal.style.display = 'none';
    }
});


document.getElementById('search-input').addEventListener('input', function() {
    var query = this.value.trim().toLowerCase(); // 取得使用者輸入並轉換為小寫
    var regions = document.querySelectorAll('g[data-name]'); // 獲取所有帶有 data-name 屬性的 <g> 元素

    // 先清除所有的高亮效果
    regions.forEach(function(region) {
        region.classList.remove('highlight');
    });

    // 如果搜尋框為空則不進行任何操作
    if (query === '') return;

    // 遍歷所有區域，查看是否與搜尋框中的值匹配（模糊搜尋）
    regions.forEach(function(region) {
        var name = region.getAttribute('data-name').toLowerCase(); // 取得該區域的名稱並轉換為小寫
        var regex = new RegExp(query.split('').join('.*'), 'i'); // 建立正則表達式，用於模糊匹配
        if (regex.test(name)) {
            region.classList.add('highlight'); // 如果匹配，則添加高亮類
        }
    });
});


