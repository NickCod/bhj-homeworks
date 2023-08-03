let progress = document.getElementById("progress");
let form = document.getElementById("form");

let xhr = new XMLHttpRequest();

let formData = new FormData(form);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  xhr.upload.addEventListener("progress", (event) => {
    if (event.lengthComputable) {
      let percentComplete = (event.loaded / event.total) * 100;
      progress.value = percentComplete / 100;
    }
  });
  xhr.open("POST", " https://students.netoservices.ru/nestjs-backend/upload");
  xhr.send(formData);
});
