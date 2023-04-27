const counters = document.querySelectorAll(".advantages__counter");
const speed = 200;

const updateCounter = () => {
  for (let counter of counters) {
    const endNum = +counter.getAttribute("data-target");
    const startNum = +counter.textContent;

    const inc = endNum / speed;

    if (startNum < endNum) {
      counter.textContent = Math.ceil(startNum + inc);
      setTimeout(updateCounter, 200);
    } else {
      startNum.textContent = endNum;
    }
  }
};

updateCounter();