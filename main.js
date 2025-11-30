(function(){
  const pages = Array.from(document.querySelectorAll(".page"));
  const book = document.getElementById("book");

  let current = 0; // 0-based

  function updateBookPosition(){
    // 第 0 頁 = 封面 → 偏左
    if (current === 0){
      book.classList.remove("opened");
    } else {
      // 其他頁 → 攤開置中
      book.classList.add("opened");
    }
  }

  function goNext(){
    if(current >= pages.length - 1) return;
    pages[current].classList.add("flipped");
    current++;
    updateBookPosition();
  }

  function goPrev(){
    if(current <= 0) return;
    current--;
    pages[current].classList.remove("flipped");
    updateBookPosition();
  }

  // 點擊左半部／右半部翻頁（手機友善）
  book.addEventListener("click", function(e){
    const rect = book.getBoundingClientRect();
    const x = e.clientX - rect.left;

    if(x > rect.width / 2){
      goNext();
    }else{
      goPrev();
    }
  });

  // 鍵盤左右鍵翻頁（桌機）
  document.addEventListener("keydown", function(e){
    if(e.key === "ArrowRight"){
      goNext();
    }else if(e.key === "ArrowLeft"){
      goPrev();
    }
  });

  // 一開始先依照 current=0 設定位置
  updateBookPosition();
})();
