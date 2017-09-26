//month declaration for get request
var $january = $("#january");
var $february = $("#february");
var $march = $("#march");
var $april = $("#april");
var $may = $("#may");
var $june = $("#june");
var $july = $("#july");
var $august = $("#august");
var $september = $("#september");
var $october = $("#october");
var $november = $("#november");
var $december = $("#december");
//add button declaration for post request
var $january= $('.january');
var $february = $(".february");
var $march = $(".march");
var $april = $(".april");
var $may = $(".may");
var $june = $(".june");
var $july = $(".july");
var $august = $(".august");
var $september = $(".september");
var $october = $(".october");
var $november = $(".november");
var $december = $(".december");
//other variable declaration
var $id= $('#id');
var $productName= $('#productName');
var $date= $('#date');
var $quantity= $('#quantity');
var $cost= $('#cost');
var $table= $('#table');
var $total_cost= $('.total_cost');
var sum=0;   
var refresh = $("#refresh");
var showForm = $(".showForm");
var form = $("#form");
var month= $("#month");
var list = $(".list");

//===========================================================================
//refresh page
$("#refresh").on("click",function(){
    window.location.reload(true)
});

//show function
function show(){
    $("#month").show();
    $("#form").show(); 
    $(".list").hide(); 
}

//sumCalculation
function sumCalculation(data)
{   
    var total= 0;
    for (var i = 0; i < data.length; i++) 
    {
        sum = parseInt(data[i].quantity)* parseFloat(data[i].cost);
        total+= sum; 
        var totalCost= total.toFixed(2);
        $('.total_cost').text("Total_Cost= $"+ totalCost);
        $table.append('<tr><td>' + data[i].id + '</td>' + '<td>' + data[i].productName + '</td>' + '<td>' +
               data[i].date + '</td>' + '<td>'+ data[i].quantity+'</td>' + '<td>'+ data[i].cost +'</td>'+'<td>'+ sum +'</td></tr>');
    }
}

//get request
//january
$("#january").click(function(){
    $.get("http://localhost:3000/january", function (data) {
        sumCalculation(data);
    });
    show(); 
    $(".january").show();
});

//february
$("#february").click(function(){
    $.get("http://localhost:3000/february", function (data) {
        sumCalculation(data);
    });
    show();    
    $(".february").show(); 
});

//march
$("#march").click(function(){
    $.get("http://localhost:3000/march", function (data) {
        sumCalculation(data);
    });
    show(); 
    $(".march").show(); 
});

//april
$("#april").click(function(){
    $.get("http://localhost:3000/april", function (data) {
        sumCalculation(data);
    });
    show(); 
    $(".april").show();
});

//may
$("#may").click(function(){
    $.get("http://localhost:3000/may", function (data) {
        sumCalculation(data);
    });
    show(); 
    $(".may").show();
});

//june
$("#june").click(function(){
    $.get("http://localhost:3000/june", function (data) {
        sumCalculation(data);
    });
    show(); 
    $(".june").show();
});

//july
$("#july").click(function(){
    $.get("http://localhost:3000/july", function (data) {
        sumCalculation(data);
    });
    show(); 
    $(".july").show();
});

//august
$("#august").click(function(){
    $.get("http://localhost:3000/august", function (data) {
        sumCalculation(data);
    });
    show(); 
    $(".august").show();
});

//september
$("#september").click(function(){
    $.get("http://localhost:3000/september", function (data) {
        sumCalculation(data);
    });
    show(); 
    $(".september").show();
});

//october
$("#october").click(function(){
    $.get("http://localhost:3000/october", function (data) {
        sumCalculation(data);
    });
    show(); 
    $(".october").show();
});

//november
$("#november").click(function(){
    $.get("http://localhost:3000/november", function (data) {
        sumCalculation(data);
    });
    show(); 
    $(".november").show();
});

//december
$("#december").click(function(){
    $.get("http://localhost:3000/december", function (data) {
        sumCalculation(data);
    });
    show(); 
    $(".december").show();
});
//===================================================================================
//post request
//function for adding new data through post request
function newtable(neWdata)
{
    $table.append('<tr><td>'+ neWdata.id +'</td>'+'<td>'+ neWdata.productName+'</td>'+ '<td>'+ neWdata.date + '</td>' +'<td>'+ neWdata.quantity+'</td>' +'<td>'+neWdata.cost  + '</td>'+'<td>' + parseInt(neWdata.quantity)*parseFloat(neWdata.cost) +'</td></tr>');
        $( 'form' ).each(function()
        {
            this.reset();
        });

}
//get total cost after adding new data through post request
function getTotal(data)
{
    var total= 0;
    for (var i = 0; i < data.length; i++) 
    {
        total+= parseInt(data[i].quantity) * parseFloat(data[i].cost);
        var totalCost= total.toFixed(2);
    }
    $('.total_cost').text("Total_Cost= $"+ totalCost);
    if (totalCost>=600)
    {
        alert('Oh no!! You have exceeded monthly limit.');
    } 
}

//january
$('.january').on('click', function(){
    var expense =
    {
    id: $id.val(),
    productName: $productName.val(),
    date: $date.val(),
    quantity: $quantity.val(),
    cost: $cost.val()
    };
    if(expense.id!="" && expense.productName!="" && expense.date!="" && expense.cost!= "" && expense.quantity!="")
    {
        $.post("http://localhost:3000/january", expense ,function (neWdata) 
        {
            newtable(neWdata);
        });   
        $.get("http://localhost:3000/january",function (data) {   
            getTotal(data);
        });
    }
});

//february
$('.february').on('click', function(){
    var expense= 
    {
    id: $id.val(),
    productName: $productName.val(),
    date: $date.val(),
    quantity: $quantity.val(),
    cost: $cost.val()
    }; 
    if(expense.id!="" && expense.productName!="" && expense.date!="" && expense.cost!= "" && expense.quantity!="")
    {
        $.post("http://localhost:3000/february", expense ,function (neWdata) 
        {
            newtable(neWdata);
        });   
        $.get("http://localhost:3000/february",function (data) { 
            getTotal(data);
        });
    }
});

//march
$('.march').on('click', function(){
    var expense= 
    {
    id: $id.val(),
    productName: $productName.val(),
    date: $date.val(),
    quantity: $quantity.val(),
    cost: $cost.val()
    }; 
    if(expense.id!="" && expense.productName!="" && expense.date!="" && expense.cost!= "" && expense.quantity!="")
    {
        $.post("http://localhost:3000/march" , expense ,function (neWdata) 
        {
            newtable(neWdata);
        });   
        $.get("http://localhost:3000/march",function (data) {  
            getTotal(data);
        });
    }
});

//april
$('.april').on('click', function(){
    var expense= 
    {
    id: $id.val(),
    productName: $productName.val(),
    date: $date.val(),
    quantity: $quantity.val(),
    cost: $cost.val()
    }; 
    if(expense.id!="" && expense.productName!="" && expense.date!="" && expense.cost!= "" && expense.quantity!="")
    {
        $.post("http://localhost:3000/april" , expense ,function (neWdata) 
        {
            newtable(neWdata);
        });   
        $.get("http://localhost:3000/april",function (data) {  
            getTotal(data);
        });
    }
});

//may
$('.may').on('click', function(){
    var expense= 
    {
    id: $id.val(),
    productName: $productName.val(),
    date: $date.val(),
    quantity: $quantity.val(),
    cost: $cost.val()
    }; 
    if(expense.id!="" && expense.productName!="" && expense.date!="" && expense.cost!= "" && expense.quantity!="")
    {
        $.post("http://localhost:3000/may" , expense ,function (neWdata) 
        {
            newtable(neWdata);
        });   
        $.get("http://localhost:3000/may",function (data) { 
            getTotal(data);
        });
    }
});

//june
$('.june').on('click', function(){
    var expense= 
    {
    id: $id.val(),
    productName: $productName.val(),
    date: $date.val(),
    quantity: $quantity.val(),
    cost: $cost.val()
    }; 
    if(expense.id!="" && expense.productName!="" && expense.date!="" && expense.cost!= "" && expense.quantity!="")
    {
        $.post("http://localhost:3000/june" , expense ,function (neWdata) 
        {
            newtable(neWdata);
        });   
        $.get("http://localhost:3000/june",function (data) { 
            getTotal(data);
        });
    }
});

//july
$('.july').on('click', function(){
    var expense= 
    {
    id: $id.val(),
    productName: $productName.val(),
    date: $date.val(),
    quantity: $quantity.val(),
    cost: $cost.val()
    }; 
    if(expense.id!="" && expense.productName!="" && expense.date!="" && expense.cost!= "" && expense.quantity!="")
    {
        $.post("http://localhost:3000/july" , expense ,function (neWdata) 
        {
            newtable(neWdata);
        });   
        $.get("http://localhost:3000/july",function (data) {   
            getTotal(data);
        });
    }
});

//august
$('.august').on('click', function(){
    var expense= 
    {
    id: $id.val(),
    productName: $productName.val(),
    date: $date.val(),
    quantity: $quantity.val(),
    cost: $cost.val()
    }; 
    if(expense.id!="" && expense.productName!="" && expense.date!="" && expense.cost!= "" && expense.quantity!="")
    {
        $.post("http://localhost:3000/august" , expense ,function (neWdata) 
        {
            newtable(neWdata);
        });   
        $.get("http://localhost:3000/august",function (data) {   
            getTotal(data);
        });
    }
});

//september
$('.september').on('click', function(){
    var expense= 
    {
    id: $id.val(),
    productName: $productName.val(),
    date: $date.val(),
    quantity: $quantity.val(),
    cost: $cost.val()
    }; 
    if(expense.id!="" && expense.productName!="" && expense.date!="" && expense.cost!= "" && expense.quantity!="")
    {
        $.post("http://localhost:3000/september" , expense ,function (neWdata) 
        {
            newtable(neWdata);
        });   
        $.get("http://localhost:3000/september",function (data) {   
            getTotal(data);
        });
    }
});

//october
$('.october').on('click', function(){
    var expense= 
    {
    id: $id.val(),
    productName: $productName.val(),
    date: $date.val(),
    quantity: $quantity.val(),
    cost: $cost.val()
    }; 
    if(expense.id!="" && expense.productName!="" && expense.date!="" && expense.cost!= "" && expense.quantity!="")
    {
        $.post("http://localhost:3000/october" , expense ,function (neWdata) 
        {
            newtable(neWdata);
        });   
        $.get("http://localhost:3000/october",function (data) {  
            getTotal(data);
        });
    }
});

//november
$('.november').on('click', function(){
    var expense= 
    {
    id: $id.val(),
    productName: $productName.val(),
    date: $date.val(),
    quantity: $quantity.val(),
    cost: $cost.val()
    }; 
    if(expense.id!="" && expense.productName!="" && expense.date!="" && expense.cost!= "" && expense.quantity!="")
    {
        $.post("http://localhost:3000/november" , expense ,function (neWdata) 
        {
            newtable(neWdata);
        });   
        $.get("http://localhost:3000/november",function (data) {   
            getTotal(data);
        });
    }
});

//december
$('.december').on('click', function(){
    var expense= 
    {
    id: $id.val(),
    productName: $productName.val(),
    date: $date.val(),
    quantity: $quantity.val(),
    cost: $cost.val()
    }; 
    if(expense.id!="" && expense.productName!="" && expense.date!="" && expense.cost!= "" && expense.quantity!="")
    {
        $.post("http://localhost:3000/december" , expense ,function (neWdata) 
        {
            newtable(neWdata);
        });   
        $.get("http://localhost:3000/december",function (data) {   
            getTotal(data); 
        });
    }
});



