$(document).ready(function() {
  $('#generate').on('click', generateNumbers);
});

function generateNumbers() {
  // 기존 애니메이션 클래스 제거
  $('.number, .powerball').removeClass('animate');

  // 메인 번호 생성 (1-69)
  var mainNumbers = [];
  while (mainNumbers.length < 5) {
    var num = Math.floor(Math.random() * 69) + 1;
    if ($.inArray(num, mainNumbers) === -1) {
      mainNumbers.push(num);
    }
  }
  mainNumbers.sort(function(a, b) { return a - b; });

  // 파워볼 번호 생성 (1-26)
  var powerballNumber = Math.floor(Math.random() * 26) + 1;

  // 애니메이션과 함께 화면 업데이트
  $('.number').each(function(index, element) {
    // 애니메이션 초기화
    $(element).css('animation', 'none');
    element.offsetHeight; // 리플로우 트리거
    $(element).css('animation', '');

    // 지연 시간을 두고 애니메이션 클래스 추가
    setTimeout(function() {
      $(element).text(mainNumbers[index]);
      $(element).addClass('animate');
    }, index * 200);
  });

  var $powerballElement = $('.powerball');
  setTimeout(function() {
    // 애니메이션 초기화
    $powerballElement.css('animation', 'none');
    $powerballElement[0].offsetHeight; // 리플로우 트리거
    $powerballElement.css('animation', '');

    $powerballElement.text(powerballNumber);
    $powerballElement.addClass('animate');
  }, 1000); // 모든 메인 번호 이후 시작
}
