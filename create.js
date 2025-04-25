const inp = document.querySelector("#qrinput");
const genbtn = document.querySelector("#generatebtn");
const qrpopup = document.querySelector("#qrpopup");
const qrimg = document.querySelector("#qrimg");
const downloadbtn = document.querySelector("#downloadbtn");
const closebtn = document.querySelector("#closebtn");   
const maincontainer = document.querySelector("#maincontainer");

const url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

genbtn.addEventListener("click", () => {
   
    if (!inp.value) {
        alert("Enter url or text first!.");
    }
    else {
        const imgurl=url + inp.value;
        qrimg.setAttribute ('src', imgurl);
        setTimeout(() => {
            qrpopup.classList.add("show");
            maincontainer.classList.add("opacity");
        },1000);

    }
}
);
downloadbtn.addEventListener("click", () => {
    const imgurl = url + inp.value;
    fetch(imgurl)
        .then((response) => response.blob())
        .then((blob) => {
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
           link.download = 'qr.jpg';
           link.click();
           
        })
    });     
   
