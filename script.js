function clockUpdate() {
  const d = new Date();

  const hours = d.getHours().toString().padStart(2,0);
  const minutes = d.getMinutes().toString().padStart(2,0);
  const seconds = d.getSeconds().toString().padStart(2,0);
  const timeNow = hours + ":" + minutes + ":" + seconds;

  const year = d.getFullYear().toString();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Agu",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = months[d.getMonth()];
  const day = d.getDate().toString();

  const dateNow = day + "-" + month + "-" + year;

  document.getElementById("time").textContent = timeNow;
  document.getElementById("date").textContent = dateNow;
}

clockUpdate();

setInterval(clockUpdate, 1000);
