import anime from "animejs";

window.onload = () => {
  const textWrapper = document.querySelector(".ft");
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );

  anime.timeline({ loop: false }).add({
    targets: ".ft .letter",
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (_, i) => 200 * (i + 1),
  });
};
