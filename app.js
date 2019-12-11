// Дэлгэцтэй ажиллах контроллер
var uiController=(function(){
  var DOMstrings={
    inputType:".add__type",
    inputDescr:".add__description",
    inputValue:".add__value",
    addBtn:".add__btn"
  };
  return {
    getInput:function(){
      return {
        type:document.querySelector(DOMstrings.inputType).value,
        descr:document.querySelector(DOMstrings.inputDescr).value,
        value:document.querySelector(DOMstrings.inputValue).value
      }
    },
    getDOMstrings:function(){
      return DOMstrings;
    }
  }
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
 
  

  var  ctrlAddItem=function(){
  // 1. Оруулах өгөгдлийг дэлгэцээс олж авна.
  console.log( uiController.getInput());
      // 2. Олж авсан өгөгдлүүдээ санхүүгийн контроллерт дамжуулж тэнд хадгална.
      // 3. Олж авсан өгөгдлүүдээ вэб дээрээ тохирох хэсэгт нь гаргана
      // 4. Төсвийг тооцоолно
      // 5. Эцсийн үлдэгдэл,

   };
var setupEventListners=function(){
  var DOM=uiController.getDOMstrings();

   
  document.addEventListener('keypress',function(event){
      if(event.keyCode===13||event.vhich===13){
           ctrlAddItem() ;
      } ;
    
  });

  document.querySelector(DOM.addBtn).addEventListener("click",function(){
    ctrlAddItem();
  });
  
}

return {
  init: function(){
    console.log("..Ajillaj ehellee...");
    setupEventListners();
  }
}

 })(uiController,financeController);
  
appController.init();

      // 6. Төсвийн тооцоог дэлгэцэнд гаргана.
