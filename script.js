const titleText = "Done? Nope!";
const p1Bold = "Nothing's done until I'm dead.";
const p1Normal = " I made this site by myself.";
const p2Text = "Suasidable vibe makes me feel alive.";

function typeWriter(elementId, text, speed, callback) {
  let i = 0;
  const element = document.getElementById(elementId);

  function typing() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    } else if (callback) {
      callback();
    }
  }
  typing();
}

typeWriter("title", titleText, 100, function() {
  const p1 = document.getElementById("p1");
  p1.innerHTML = "<b id='p1-bold'></b>";

  typeWriter("p1-bold", p1Bold, 60, function() {
    typeWriter("p1", p1Normal, 60, function() {
      typeWriter("p2", p2Text, 60);
    });
  });
});
