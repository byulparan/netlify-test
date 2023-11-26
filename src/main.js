
let url = "/api/uc?id=1vWXyGXrZvO6W8vXiHLwVHbmdxEK6HIsp";

fetch(url)
  .then(data => data.blob())
  .then(blob => URL.createObjectURL(blob))
  .then(url =>  document.querySelector('#link').src = url)



