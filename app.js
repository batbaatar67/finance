// Дэлгэцтэй ажиллах контроллер
var uiController=(function(){
  var DOMstrings={
    inputType:".add__type",
    inputDescr:".add__description",
    inputValue:".add__value",
    addBtn:".add__btn",
   incomList:  ".income__list",
   expenseList:".expenses__list",
   tusuvLabel:".budget__value",
   incomeLabel:".budget__income--value",
   expenseLabel:".budget__expenses--value",
   procentageLabel:".budget__expenses--percentage"
  };
  return {
    getInput:function(){
      return {
        type:document.querySelector(DOMstrings.inputType).value,
        descr:document.querySelector(DOMstrings.inputDescr).value,
        value:parseInt( document.querySelector(DOMstrings.inputValue).value)
      }
    },
    getDOMstrings:function(){
      return DOMstrings
    },
    clearFields:function(){
var fields=document.querySelectorAll(
  DOMstrings.inputDescr+","+DOMstrings.inputValue
);
var fieldsArr=Array.prototype.slice.call(fields);
fields.forEach(function(el,index,Array){
  el.value="";


    });
    fields[0].focus();
    
  },
  tusuvYzuuleh:function(tusuv){
    document.querySelector(DOMstrings.tusuvLabel).textContent=tusuv.tusuv;
    document.querySelector(DOMstrings.incomeLabel).textContent=tusuv.inc;
    document.querySelector(DOMstrings.expenseLabel).textContent=tusuv.exp;
    document.querySelector(DOMstrings.procentageLabel).textContent=tusuv.xuvi;


  },

    addListItem: function(item, type) {
      
      var html, list;
      if (type === "inc") {
        list = DOMstrings.incomList;
        html =
          '<div class="item clearfix" id="income-%id%"><div class="item__description">$$DESCRIPTION$$</div><div class="right clearfix"><div class="item__value">$$VALUE$$</div><div class="item__delete">            <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div>        </div></div>';
      } else {
        list =DOMstrings.expenseList ;
        html =
          '<div class="item clearfix" id="expense-%id%"><div class="item__description">$$DESCRIPTION$$</div>          <div class="right clearfix"><div class="item__value">$$VALUE$$</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn">                <i class="ion-ios-close-outline"></i></button></div></div></div>';
      }
     // html = html.replace("%id%", item.id);
      html = html.replace("$$DESCRIPTION$$", item.descr);
      html = html.replace("$$VALUE$$", item.value);

      
      document.querySelector(list).insertAdjacentHTML("beforeend", html);
    }
  
  };
})();
      // Convert List to Array
      // Орлого зарлагын элементийг агуулсан html-ийг бэлтгэнэ.
      // Тэр HTML дотроо орлого зарлагын утгуудыг REPLACE ашиглаж өөрчилж

// Санхүүтэй ажиллах контроллер

var financeController=(function(){
  
  var  Income=function(id,descr,value){
    this.id=id;
    this.descr=descr;
    this.value=value;
  };


  var Expence=function(id,descr,value){
    this.id=id;
    this.descr=descr;
    this.value=value;
  };

var data={
  items:{
    inc:[],
    exp:[]
  },
  totals:{
    inc:0,
    exp:0,
    tusuv:0,
    xuvi:0

  }
};

var calculateTotal=function(type){
  
    var sum=0
    data.items[type].forEach(function(el){
      sum=sum+el.value;
    })
    data.totals[type]=sum;
  
};  
// Нийт орлогын нийлбэрийг тооцоолно



return {addItem:function(type,descr,value){
  var item,id;

  if(data.items[type].length===0){
    id=1;
  } else {id=data.items[type][data.items[type].length-1].id+1;}

  if (type==='inc'){item=new Income(id,descr,value);

  } else {item=new Expence(id,descr,value);

  }

  data.items[type].push(item);

  return item;
},

 tusuvBodoh:function(){
  calculateTotal('inc');
  // Нийт зарлагын нийлбэрийг тооцоолно
    calculateTotal('exp');
  // Төсвийг шинээр тооцоолно
  data.totals.tusuv=data.totals.inc-data.totals.exp;
  
  // Орлого зарлагын хувийг тооцоолно
  data.totals.xuvi=Math.round( data.totals.exp/data.totals.inc*100);
  
},

tusuvAvah:function(){
  return data.totals
},

sendData:function(){
  return data;
}
}

})();



  // private data

  // private data

  // private data
      
// Програмын холбогч контроллер
var appController=(function(uiController,financeController){
 
  

  var  ctrlAddItem=function(){
  // 1. Оруулах өгөгдлийг дэлгэцээс олж авна.
  var input = uiController.getInput();
if(input.descr!=="" && input.value>0 ){

 
        // 2. Олж авсан өгөгдлүүдээ санхүүгийн контроллерт дамжуулж тэнд хадгална.
        var item = financeController.addItem(
          input.type,
          input.descr,
          input.value);
        // 3. Олж авсан өгөгдлүүдээ вэб дээрээ тохирох хэсэгт нь гаргана
   
  
        uiController.addListItem(item, input.type);
        uiController.clearFields();
        // 4. Төсвийг тооцоолно
       financeController.tusuvBodoh();
        // 5. Эцсийн үлдэгдэл,
          financeController.tusuvAvah();
        //6. Delgezend haruulna
       var tusuv=financeController.tusuvAvah();
uiController.tusuvYzuuleh(tusuv);

}

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
