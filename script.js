function pietStatusUpdate(toClose) {
  let x = document.getElementById("piet-application-update");

  if (toClose) {
    x.style.display = "none";
    return;
  }

  if (x.style.display === "none" || !x.style.display) {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  contactSinterklaas(true);
}

function contactSinterklaas(toClose) {
  let y = document.getElementById("contact-Sinterklaas");

  if (toClose) {
    y.style.display = "none";
    return;
  }
  if (y.style.display === "none" || !y.style.display) {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
  pietStatusUpdate(true);
}
