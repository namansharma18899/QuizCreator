var ProdArray=[];
var QuesID=0;
var currentId=0;
var temp=1;
var targetParent;
var editParent;
var divAddProduct = document.getElementById("divAddProduct");
var divListProducts = document.getElementById("divListProducts");
var aAddProduct = document.getElementById("aAddProduct");

aAddProduct.addEventListener("click",function(){
  createNewProductPanel();
  aAddProduct.setAttribute("style","visibility:hidden");
});

function createNewProductPanel()
{
  if(temp==1)
  {
  temp=0;
  var h2=document.createElement("h2");
  h2.setAttribute("id","h2");
  h2.innerHTML="Input Details";
  h2.setAttribute("style","text-decoration:underline");
/*
    prodname = question title
    prodesc =  marks
    prod price = option1
    quantity = optino 2
*/
  var div1=document.createElement("div");
  div1.setAttribute("id","div1");
  var Qtitle=document.createElement("input");
  Qtitle.setAttribute("id","Question Title");
  Qtitle.setAttribute("placeholder","QUES. TITLE");
 
  
  div1.appendChild(Qtitle);
  insertBlankLine(div1);
  insertBlankLine(div1);


  var div2=document.createElement("div");
  div2.setAttribute("id","div2");
  var Marks=document.createElement("textarea");
  Marks.setAttribute("id","");
  Marks.setAttribute("placeholder","MARKS");
  div2.appendChild(Marks);
  insertBlankLine(div2);
  insertBlankLine(div2);


  var div3=document.createElement("div");
  div3.setAttribute("id","div3");
  var Option1=document.createElement("input");
  Option1.setAttribute("type","number");
  Option1.setAttribute("id","Option1");
  Option1.setAttribute("placeholder","OPTION 1");
  div3.appendChild(Option1);
  insertBlankLine(div3);

  
  var div4=document.createElement("div");
  div4.setAttribute("id","div4");
  var Option2=document.createElement("input");
  Option2.setAttribute("type","number");
  Option2.setAttribute("id","Option2");
  Option2.setAttribute("placeholder","OPTION 2");
  div4.appendChild(Option2);
  insertBlankLine(div4);

  var div5=document.createElement("div");
  div5.setAttribute("id","div5");
  var Option3=document.createElement("input");
  Option3.setAttribute("type","number");
  Option3.setAttribute("id","Option3");
  Option3.setAttribute("placeholder","OPTION 3");
  div5.appendChild(Option3);
  insertBlankLine(div5);


  var div6=document.createElement("div");
  div6.setAttribute("id","div6");
  var Option4=document.createElement("input");
  Option4.setAttribute("type","number");
  Option4.setAttribute("id","Option4");
  Option4.setAttribute("placeholder","OPTION 4");
  div6.appendChild(Option4);
  insertBlankLine(div6);
  
  var div7=document.createElement("div");
  div7.setAttribute("id","div7");
  var Ans=document.createElement("input");
  Ans.setAttribute("type","number");
  Ans.setAttribute("id","Ans");
  Ans.setAttribute("placeholder","Answer");
  div7.appendChild(Ans);
  insertBlankLine(div7);

var div8=document.createElement("div"); 
div8.setAttribute("id","div8");
var submitButton=document.createElement("button");
submitButton.setAttribute("id","submitButton");
submitButton.setAttribute("style","margin-left:5px");
submitButton.innerHTML="Submit";
submitButton.addEventListener("click",function()
{
  var flag=validation();
  if(flag==true){
  addProducttoArray();
   }
   else
   alert("All fields required......");
});

var cancelButton=document.createElement("button");
cancelButton.setAttribute("id","cancelButton");
cancelButton.setAttribute("style","margin-left:20px");
cancelButton.innerHTML="Cancel";
cancelButton.addEventListener("click",function(){
removeFields();
});

var saveButton=document.createElement("button");
saveButton.setAttribute("id","saveButton");
saveButton.setAttribute("style","margin-left:20px");
saveButton.setAttribute("style","visibility:hidden");
saveButton.addEventListener("click",function(){
var newObject={
  QuesID:currentId,
  Qtitle:document.getElementById("Qtitle"),
  Marks:document.getElementById("Marks").value,
  Option1:document.getElementById("Option1").value,
  Option2:document.getElementById("Optoin2").value,
  Option3:document.getElementById("Option3").value,
  Option4:document.getElementById("Option4").value,
  Ans:document.getElementById("Ans").value
}
replaceInArray(newObject);
updateDom(newObject);
clearPannel();
});
saveButton.innerHTML="Save";
div8.append(submitButton);
div8.append(cancelButton);
div8.append(saveButton);

divAddProduct.append(h2);
divAddProduct.append(div1);
divAddProduct.append(div2);
divAddProduct.append(div3);
divAddProduct.append(div4);
divAddProduct.append(div5);
divAddProduct.append(div6);
divAddProduct.append(div7);
}
}

function insertBlankLine(divi)
{
  var br=document.createElement("br");
  divi.appendChild(br);
}

//******************************validation function*********************************** */
function validation()
{
  var qtitle=document.getElementById("Qtitle").value;
  var marks=document.getElementById("Marks").value;
  var option1=document.getElementById("Option1").value;
  var option2=document.getElementById("Option2").value;
  var option3 = document.getElementById("Option3").value;
  var optoin4 = document.getElementById("Optoin4").value;
  var ans  =  document.getElementById("Ans").value;
  if(qtitle == ""||marks == ""||option1 == ""||option2==""||option3==""||optoin4==""||ans==""){
  return false;}
  else
  return true;
}

//****************add to product array function*********************** */
function addProducttoArray()
{
  var QuesObject={// ProdObject={
  QuesID:ProdId,
  Qtitle:document.getElementById("Qtitle").value,
  Marks:document.getElementById("Marks").value,
  Option1:document.getElementById("Option1").value,
  Option2:document.getElementById("Option2").value,
  Option3 :document.getElementById("Option3").value,
  Optoin4:document.getElementById("Optoin4").value,
  Ans: document.getElementById("Ans").value,
  }
  QuesArray.push(QuesObject);
  storeProducts(ProdArray);

 addProducttoDOM(QuesObject,1);

  clearPannel();
  QuesID++;
  console.log(JSON.stringify(QuesArray));
}

//******clear pannel function*************** */
function clearPannel()
{
temp=1;
divAddProduct.removeChild(h2);
divAddProduct.removeChild(div1);
divAddProduct.removeChild(div2);
divAddProduct.removeChild(div3);
divAddProduct.removeChild(div4);
divAddProduct.removeChild(div5);
divAddProduct.removeChild(div6);
divAddProduct.removeChild(div7);
aAddProduct.setAttribute("style","visibility:visible; inline-size: 200px; margin-left: 40%;");
}

//*********add to DOM function******************* */
function addProducttoDOM(ProdObj,flag2)
{
var listdiv1=document.createElement("div");
var Qtitle=ProdObj.Qtitle;
var Marks=ProdObj.Marks;
var Option1 = ProdObj.Option1;
var Option2 = ProdObj.Option2;
var Option3 = ProdObj.Option3;
var Option4 = ProdObj.Option4;
var Ans = ProdObj.Ans;
var Qid=ProdObj.QuesID;
 if(flag2==1)
 Qid = Qid+1;

var qtitle=document.createElement("h2");
var marks=document.createElement("h4");
var option1=document.createElement("h4");
var option2=document.createElement("h4");
var option3 = document.createElement("h4");
var optoin4 = document.createElement("h4");
var ans  =  document.createElement("h4");

qtitle.innerHTML=Qid+"# Question: "+Qtitle;
marks.innerHTML="Marks : "+Marks;
option1.innerHTML="Option1: "+option1;
option2.innerHTML="o2: "+option2;
option3.innerHTML="o3: "+option3;
optoin4.innerHTML = "o4: "+optoin4;
ans.innerHTML = "Answer :"+ans;

var editButton=document.createElement("button");
editButton.setAttribute("id","editButton");
editButton.setAttribute("style","margin-left:3px");
editButton.setAttribute("style","margin-top:5px");
editButton.innerHTML="Edit";

var deleteButton=document.createElement("button");
deleteButton.setAttribute("id","deleteButton");
deleteButton.setAttribute("style","margin-top:5px");
deleteButton.setAttribute("style","margin-left:10px");
deleteButton.innerHTML="Delete";

listdiv1.append(qtitle);

listdiv1.append(marks);

listdiv1.append(option1);
listdiv1.append(option2);
listdiv1.append(option3);
listdiv1.append(optoin4);

listdiv1.append(ans);

insertBlankLine(listdiv1);

listdiv1.append(editButton);
listdiv1.append(deleteButton);



insertBlankLine(listdiv1);
insertBlankLine(listdiv1);
divListProducts.append(listdiv1);
console.log(QuesArray);

editButton.addEventListener("click",function(){
editFunction(prodName,prodDesc,prodprice,prodquan,ProdObj);
});

deleteButton.addEventListener("click",function(){
  
  deleteFunction(ProdObj);
 // deleteFromDataBase(ProdObj);

});
}

//************removing object from array*************** */
function removeFromProductsArray(id)
{
  ProdArray.splice(id,1);
  console.log(ProdArray);
 
}

//*******************insert into fields during edit function*********** */

function insertIntoFields(prodName,prodDesc,prodprice,prodquan)
{
  var name=document.getElementById("ProdName");
  var desc=document.getElementById("ProdDesc");
  var price=document.getElementById("ProdPrice");
  var quantity=document.getElementById("ProdQuan");
  name.value=prodName;
  desc.value=prodDesc;
  price.value=prodprice;
  quantity.value=prodquan;
}


function updateDom(ProdObj)
{
 var listdiv1=document.createElement("div");
var prodName=ProdObj.Prodname;
var prodDesc=ProdObj.Proddesc;
var prodprice=ProdObj.Prodprice;
var prodquan=ProdObj.Prodquan;
var prodid=ProdObj.Prodid;
//prodid=prodid+1;

var pname=document.createElement("h2");
var pdesc=document.createElement("h4");
var pprice=document.createElement("h4");
var pquan=document.createElement("h4");
pname.innerHTML=prodid+"# Product Name: "+prodName;
pdesc.innerHTML="Product Description: "+prodDesc;
pprice.innerHTML="Product Price: "+prodprice;
pquan.innerHTML="Product Quantity: "+prodquan;

var editButton=document.createElement("button");
editButton.setAttribute("id","editButton");
editButton.setAttribute("style","margin-left:3px");
editButton.setAttribute("style","margin-top:5px");
editButton.innerHTML="Edit";

var deleteButton=document.createElement("button");
deleteButton.setAttribute("id","deleteButton");
deleteButton.setAttribute("style","margin-top:5px");
deleteButton.setAttribute("style","margin-left:10px");
deleteButton.innerHTML="Delete";

listdiv1.append(pname);

listdiv1.append(pdesc);

listdiv1.append(pprice);

listdiv1.append(pquan);
insertBlankLine(listdiv1);

listdiv1.append(editButton);
listdiv1.append(deleteButton);



insertBlankLine(listdiv1);
insertBlankLine(listdiv1);
divListProducts.append(listdiv1);
 editParent.parentNode.replaceChild(listdiv1,editParent);
  editButton.addEventListener("click",function(){
  editFunction(prodName,prodDesc,prodprice,ProdObj);
  });
  deleteButton.addEventListener("click",function(){
  deleteFunction(ProdObj);
  
  });
}


function getProductIndex(id)
{
  for (var i = 0; i < ProdArray.length; i++)
	{
      if (ProdArray[i].Prodid == id)
			return i;
  }
}


function replaceInArray(newObj)
{
  for(var i=0;i<ProdArray.length;i++)
  {
    if(ProdArray[i].Prodid==newObj.Prodid)
    {
      ProdArray[i]=newObj;
    }
  }
  console.log(ProdArray);
  
  updateDatabase(newObj);
}

//*********local storage functions**************** */

function storeProducts(ProdArray)
{
/*console.log(ProdArray);
localStorage.adminproducts=JSON.stringify(ProdArray);*/

var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
   
    }
  };
  xhttp.open("POST", "/array", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("productList="+JSON.stringify(ProdArray));
}





function getStoredProducts()
{

  console.log("get stored product running");
  

var xhttp=new XMLHttpRequest();
   
    xhttp.onreadystatechange=()=>{
    if(xhttp.readyState == 4 && xhttp.status == 200){
       
      console.log("response text");
      console.log(xhttp.responseText);
      ProdArray = JSON.parse(xhttp.responseText);
     //console.log(ProdArray);
    ProdId = ProdArray[ProdArray.length-1].Prodid;

   
    
    console.log(ProdArray);
    console.log("-----------------------------")

    console.log("name "+ProdArray[0].name);
for(i=0;i<ProdArray.length;i++)
  {
  addProducttoDOM(ProdArray[i],0);
  }
    }
  }
  xhttp.open("GET", "/array", true);
  xhttp.send();  
 

     
 
}



function editFunction(prodName,prodDesc,prodprice,prodquan,ProdObj)
{
  editParent=event.target.parentNode;
  createNewProductPanel();
  aAddProduct.setAttribute("style","visibility:hidden");
  document.getElementById("submitButton").setAttribute("style","visibility:hidden");
  document.getElementById("cancelButton").setAttribute("style","visibility:hidden");
  document.getElementById("saveButton").setAttribute("style","visibility:visible");
  insertIntoFields(prodName,prodDesc,prodprice,prodquan);
  currentId=ProdObj.Prodid;
}


function deleteFunction(ProdObj)
{
  targetParent = event.target.parentNode;
  console.log(ProdObj.Prodid);
  removeFromProductsArray(getProductIndex(ProdObj.Prodid));
  deleteFromDataBase(ProdObj.Prodname);
  targetParent.parentNode.removeChild(targetParent);
  
  
}
//********************************************json******************************************
/*var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange=function()
{
    // readyState 4 means the request is done.
    // status 200 is a successful return.
    if (xhttp.readyState == 4 && xhttp.status == 200)
    {
      //document.getElementById("users").innerHTML = xhttp.responseText; // 'This is the output.'
      var ProdArray = JSON.parse( xhttp.responseText) ;
      for(var i=0;i<ProdArray.length;i++)
      {
          addProducttoDOM(ProdArray[i]);
      }
      }
    }
`
`

  function loadDoc()
{
  xhttp.open("GET", "/products");
  xhttp.send();
}*/

var userArray=[];
function checkLogin()
{
  if(sessionStorage.logarray)
   
  userArray=JSON.parse(sessionStorage.logarray);

  if(userArray.length!=0){
    loggedIn();
  }
  
}

var Name=document.getElementById("name");
var Logout=document.getElementById("logout");

function loggedIn()
{
  


  //************************************ */
  Name.innerHTML="Hello "+userArray[0].name+"";
  Name.setAttribute("href","#");
  //************************** */
 

  //***************************************** *
  Logout.innerHTML="Logout";
  



  Logout.addEventListener("click",function(){
  sessionStorage.logarray=JSON.stringify([]);
  });
 
}

function deleteFromDataBase(Prodname){
  console.log("product to be deleted is with id----"+Prodname)
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
   
  }
};
xhttp.open("POST", "/delete", true);
xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

xhttp.send("Prodname="+JSON.stringify(Prodname));
}

function updateDatabase(obj){
  var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     
    }
  };
  xhttp.open("POST", "/update", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  xhttp.send("obj="+JSON.stringify(obj));
}