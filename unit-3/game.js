fortuneBank = ["รู้ว่าเหนื่อย พักบ้างก็ได้นะ",
"สู้ๆนะกับเรื่องที่ทำอยู่ มันจะต้องประสบความสำเร็จแน่ๆ",
"ใจแลกใจยังใช้ได้เสมอนะ ลองดูสิ",
"ไม่ต้องคิดมากนะ ทุกคนยังอยู่ข้างๆเสมอ",
"ถ้าเรื่องที่กำลังเจออยู่มันยากจริงๆ ลองไปเที่ยวผ่อนคลายดูมั้ยล่ะ"];

function play() {
	cookie1.classList.add("cookie-hide");
	cookie2.classList.add("cookie-show");

	setTimeout(function(){
		getFortune();
	},3000);

}

function getFortune() {
	rand = Math.floor(Math.random()*fortuneBank.length);
	fortune.innerText = fortuneBank[rand];
	fortune.style.opacity = 1;
	fortune.style.top = "96px";
}
