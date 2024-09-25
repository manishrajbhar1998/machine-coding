window.addEventListener("load", () => {
  const table = document.querySelector("#table");

  const rn = 8;
  const cn = 8;
  const hoverCell = "yellow";
  const colorPath = "colorPath";

  for (let ri = 0; ri < rn; ri++) {
    const tr = document.createElement("tr");
    for (let ci = 0; ci < cn; ci++) {
      const td = document.createElement("td");
      td.setAttribute("class", "box");
      td.setAttribute("data-index", `${ri}-${ci}`);
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }

  table.addEventListener("mouseover", (e) => {
    removePreStyle();
    const selectEle = e.target;
    selectEle.classList.add(hoverCell);
    const [ri, ci] = selectEle.dataset.index.split("-");
    console.log(ri, ci);

    const TL = getTopLeft(ri, ci);
    const BL = getBottomLeft(ri, ci);
    const TR = getTopRight(ri,ci);
    const BR = getBottomRight(ri,ci);

    const allArea = { ...TL,...BL,...TR,...BR};

    colorPathFun(allArea);
  });

  const allBox = document.querySelectorAll(".box");

  const removePreStyle = () => {
    allBox.forEach((box) => {
      box.classList.remove(hoverCell);
      box.classList.remove(colorPath);
    });
  };

  const colorPathFun = (paths) => {
    allBox.forEach((box) => {
      if (paths[box.getAttribute("data-index")]) {
        box.classList.add(colorPath);
      }
    });
  };

  const getTopLeft = (ri, ci) => {
    ri--;
    ci++;
    const currStatus = {};
    while (ri >= 0 && ci < cn) {
      currStatus[`${ri}-${ci}`] = true;
      ri--;
      ci++;
    }
    return currStatus;
  };

  const getBottomLeft = (ri, ci) => {
    ri++;
    ci++;
    const currStatus = {};
    while (ri < rn && ci < cn) {
      currStatus[`${ri}-${ci}`] = true;
      ri++;
      ci++;
    }
    return currStatus;
  };

  const getTopRight = (ri, ci) => {
    ri--;
    ci--;
    const currStatus = {};
    while (ri >= 0 && ci >=0) {
      currStatus[`${ri}-${ci}`] = true;
      ri--;
      ci--;
    }
    return currStatus;
  };

  const getBottomRight = (ri, ci) => {
    ri++;
    ci--;
    const currStatus = {};
    while (ri < rn && ci >= 0) {
      currStatus[`${ri}-${ci}`] = true;
      ri++;
      ci--;
    }
    return currStatus;
  };
});
