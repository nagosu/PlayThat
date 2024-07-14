// 종료하기 버튼 클릭 시 모달 띄우기
document.querySelector(".exit-button").addEventListener("click", function () {
  document.getElementById("feedbackModal").style.display = "block"; // 모달 띄우기
});

// 좋아요 버튼 클릭 시 모달 닫기
document.getElementById("thumbUpButton").addEventListener("click", function () {
  document.getElementById("feedbackModal").style.display = "none"; // 모달 닫기
});

// 싫어요 버튼 클릭 시 모달 닫기
document
  .getElementById("thumbDownButton")
  .addEventListener("click", function () {
    document.getElementById("feedbackModal").style.display = "none"; // 모달 닫기
  });
