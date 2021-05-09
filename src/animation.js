import anime from "animejs";

function listrec() {
  var ml4 = {};
  ml4.opacityIn = [0, 1];
  ml4.scaleIn = [0.2, 1];
  ml4.scaleOut = 3;
  ml4.durationIn = 800;
  ml4.durationOut = 600;
  ml4.delay = 500;

  let animation = anime.timeline({ loop: true });

  for (let i = 1; i < 5; i++) {
    animation = animation
      .add({
        targets: ".listrec .letters-" + i,
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: ml4.durationIn,
      })
      .add({
        targets: ".listrec .letters-" + i,
        opacity: 0,
        scale: ml4.scaleOut,
        duration: ml4.durationOut,
        easing: "easeInExpo",
        delay: ml4.delay,
      });
  }

  animation.add({
    targets: ".listrec",
    opacity: 0,
    duration: 500,
    delay: 500,
  });
}

function ft() {
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
}

window.onload = () => {
  ft();
  listrec();
};
