const submitBTN = document.querySelector("#submit-btn");
const file = document.querySelector("#file");
const container = document.querySelector(".show-container");

submitBTN.addEventListener("click", () => {
  let files = file.files;

  console.log("file :: ", files);

  let fragment = document.createDocumentFragment();
  for (let i = 0; i < files.length; i++) {
    let file = files[i];
    switch (file.type) {
      case "application/pdf":
        let iframe = document.createElement("iframe");
        let pdf_Attributes = {
          src: URL.createObjectURL(file),
          width: 500,
          height: 300,
          className: "responsive",
        };

        for (const key in pdf_Attributes) {
          iframe.setAttribute(key, pdf_Attributes[key]);
        }

        fragment.append(iframe);
        break;
      case "image/png":
        let img = document.createElement("img");
        let img_Attributes = {
          src: URL.createObjectURL(file),
          width: 500,
          height: 300,
          className: "responsive",
        };

        for (const key in img_Attributes) {
          img.setAttribute(key, img_Attributes[key]);
        }
        fragment.append(img);
        break;
      default:
    }
  }

  container.append(fragment);
});
