(function(){
  const pages = Array.from(document.querySelectorAll(".page"));
  const book = document.getElementById("book");

  let current = 0; // 0-based

  function updateBookPosition(){
    if (current === 0){
      book.classList.remove("opened");
    } else {
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

  book.addEventListener("click", function(e){
    const rect = book.getBoundingClientRect();
    const x = e.clientX - rect.left;

    if(x > rect.width / 2){
      goNext();
    }else{
      goPrev();
    }
  });

  document.addEventListener("keydown", function(e){
    if(e.key === "ArrowRight"){
      goNext();
    }else if(e.key === "ArrowLeft"){
      goPrev();
    }
  });

  updateBookPosition();
})();

