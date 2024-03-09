$(document).ready(function () {
  $(".collapse.show").each(function () {
    $(this)
      .prev(".qsalary-header")
      .find(".fa-solid")
      .addClass("fa-minus")
      .removeClass("fa-plus");
  });

  $(".collapse")
    .on("show.bs.collapse", function () {
      $(this)
        .prev(".qsalary-header")
        .find(".fa-solid")
        .removeClass("fa-plus")
        .addClass("fa-minus");
    })
    .on("hide.bs.collapse", function () {
      $(this)
        .prev(".qsalary-header")
        .find(".fa-solid")
        .removeClass("fa-minus")
        .addClass("fa-plus");
    });
  /////////////////////////////////////////////////////////////////////////////////////////////////////

});

function isElementVisible(element) {
  const elementTop = element.offsetTop;
  const elementBottom = elementTop + element.offsetHeight;
  const viewportTop = window.pageYOffset;
  const viewportBottom = viewportTop + window.innerHeight;

  return elementBottom > viewportTop && elementTop < viewportBottom;
}

const elementToCheck = document.getElementById("take");
let visibleFlag = false;
window.addEventListener("scroll", () => {
  if (isElementVisible(elementToCheck) && !visibleFlag) {
    visibleFlag = true;
    // document.addEventListener("scroll", () => {
    function counter(id, start, end, duration) {
      let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval(() => {
          current += increment;
          obj.textContent = current;
          if (current == end) {
            clearInterval(timer);
          }
        }, step);
    }
    counter("count1", 50, 72, 2500);
    counter("count2", 200, 300, 2500);
    counter("count3", 0, 20, 2500);
    // });
  } else {
    console.log("Element is not visible in viewport");
  }
});
