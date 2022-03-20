// 导出页面为PDF格式
import html2Canvas from "html2canvas";
import JsPDF from "jspdf";

export default{
  install(Vue, options) {
    Vue.prototype.getPdf = function () {
      var title = this.htmlTitle;
      var dom = "#" + this.pdfdom;
      html2Canvas(document.querySelector(dom), {
        allowTaint: true
      })
        .then(function (canvas) {
          let contentWidth = canvas.width;
          let contentHeight = canvas.height;
          let pageHeight = contentWidth / 595 * 842;
          let leftHeight = contentHeight;
          let position = 0;
          let imgWidth = 595;
          let imgHeight = 595 / contentWidth * contentHeight;
          let pageData = canvas.toDataURL("image/jpeg", 1.0);
          let PDF = new JsPDF("", "pt", "a4");
          if (leftHeight < pageHeight) {
            PDF.addImage(pageData, "JPEG", 0, 0, imgWidth, imgHeight);
          } else {
            while (leftHeight > 0) {
              PDF.addImage(pageData, "JPEG", 0, position, imgWidth, imgHeight);
              leftHeight -= pageHeight;
              position -= 842;
              if (leftHeight > 0) {
                PDF.addPage();
              }
            }
          }
          PDF.save(title + ".pdf");
        });
    };
  }
};
