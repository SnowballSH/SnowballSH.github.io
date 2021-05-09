import anime from "animejs";

function listrec() {
  var config = {};
  config.opacityIn = [0, 1];
  config.scaleIn = [0.2, 1];
  config.scaleOut = 3;
  config.durationIn = 800;
  config.durationOut = 600;
  config.delay = 500;

  let animation = anime.timeline({ loop: true });

  animation.add({
    targets: ".listrec",
    opacity: config.durationIn,
    duration: 700,
    delay: 700,
  });

  for (let i = 1; i < 7; i++) {
    animation = animation
      .add({
        targets: ".listrec .letters-" + i,
        opacity: config.opacityIn,
        scale: config.scaleIn,
        duration: config.durationIn,
      })
      .add({
        targets: ".listrec .letters-" + i,
        opacity: 0,
        scale: config.scaleOut,
        duration: config.durationOut,
        easing: "easeInExpo",
        delay: config.delay,
      });
  }
}

function and() {
  anime
    .timeline({ loop: false })
    .add({
      targets: ".and .line",
      opacity: [0.5, 1],
      scaleX: [0, 1],
      easing: "easeInOutExpo",
      duration: 700,
    })
    .add({
      targets: ".and .line",
      duration: 600,
      easing: "easeOutExpo",
      translateY: (_, i) => -0.625 + 0.625 * 2 * i + "em",
    })
    .add({
      targets: ".and .ampersand",
      opacity: [0, 1],
      scaleY: [0.5, 1],
      easing: "easeOutExpo",
      duration: 600,
      offset: "-=600",
    })
    .add({
      targets: ".and .letters-left",
      opacity: [0, 1],
      translateX: ["0.5em", 0],
      easing: "easeOutExpo",
      duration: 600,
      offset: "-=300",
    })
    .add({
      targets: ".and .letters-right",
      opacity: [0, 1],
      translateX: ["-0.5em", 0],
      easing: "easeOutExpo",
      duration: 600,
      offset: "-=600",
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
  and();

  particlesJS.load("particles-js", "assets/particles.json", function() {
    console.log("callback - particles.js config loaded");
  });
};
