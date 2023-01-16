const scriptURL = "https://script.google.com/macros/s/AKfycbxajCOjv1gMCZguI0HFT9VVrhqMQJV_MOWRSNsxSkGPRqlBXjR6WXrXLbn3MdjI5nRU/exec";
const form = document.forms["form-contact-pbu"];
const btnKirim = document.querySelector('.btn-kirim')
const btnLoading = document.querySelector('.btn-loading')
const myAlert = document.querySelector('.btn-alert')

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // Menghilakan Tombol Kirim
  btnLoading.classList.toggle('d-none');
  btnKirim.classList.toggle('d-none'); 
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      console.log("Success!", response)
      myAlert.classList.toggle('d-none')
      btnLoading.classList.toggle('d-none')
      btnKirim.classList.toggle('d-none')
      window.addEventListener('click', function(){
        myAlert.classList.add('d-none')
      })
     
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
