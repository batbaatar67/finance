// Дэлгэцтэй ажиллах контроллер
var uiController=(function(){


})();
      // Convert List to Array
      // Орлого зарлагын элементийг агуулсан html-ийг бэлтгэнэ.
      // Тэр HTML дотроо орлого зарлагын утгуудыг REPLACE ашиглаж өөрчилж

// Санхүүтэй ажиллах контроллер

var financeController=(function(){
  
})();



  // private data

  // private data

  // private data
      // Нийт орлогын нийлбэрийг тооцоолно

      // Нийт зарлагын нийлбэрийг тооцоолно

      // Төсвийг шинээр тооцоолно
      // Орлого зарлагын хувийг тооцоолно

// Програмын холбогч контроллер
var appController=(function(uiController,financeController){
  
  document.addEventListener('keypress',function(event){
  
    if(event.keyCode===13||event.vhich===13){
     ctrlAddItem() ;
   } ;
    
  });
  document.querySelector(".add__btn").addEventListener("click",function(){
    ctrlAddItem();
  });

  var  ctrlAddItem=function(){
  // 1. Оруулах өгөгдлийг дэлгэцээс олж авна.
  console.log("ajilaj bn aaa")
      // 2. Олж авсан өгөгдлүүдээ санхүүгийн контроллерт дамжуулж тэнд хадгална.
      // 3. Олж авсан өгөгдлүүдээ вэб дээрээ тохирох хэсэгт нь гаргана
      // 4. Төсвийг тооцоолно
      // 5. Эцсийн үлдэгдэл,

   };

 })(uiController,financeController);
  


      // 6. Төсвийн тооцоог дэлгэцэнд гаргана.
