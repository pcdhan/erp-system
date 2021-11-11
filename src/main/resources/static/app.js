$(document).ready(function(){
    $.ajax({
          url: "/employee",
          type: 'GET',
          dataType: 'json',
           success: function(res) {
              if(res.length>0){
                 var records="";
                 for (let i = 0; i < res.length; i++) {
                   var employee = res[i];
                   records += "<tr><th scope='row'>"+employee.empNo+"</th><td>"+employee.firstName+"</td><td>"+employee.lastName+"</td><td>"+employee.email+"</td><td>"+employee.mobNo+"</td><td>"+employee.salary+"</td><td>"+employee.country+"</td><td>"+employee.state+"</td></tr>";
                 }
                 $("#employees-record-table").empty().append(records);
              }else{
              console.log("No employees found!");
              }
           }
        });

});

// Home tab
$(document).ready(function(){
   $("#home-tab").click(function(event){
    $.ajax({
          url: "/employee",
          type: 'GET',
          dataType: 'json',
          success: function(res) {
           console.log(res);
               if(res.length>0){
                   var records="";
                   for (let i = 0; i < res.length; i++) {
                     var employee = res[i];
                     records += "<tr><th scope='row'>"+employee.empNo+"</th><td>"+employee.firstName+"</td><td>"+employee.lastName+"</td><td>"+employee.email+"</td><td>"+employee.mobNo+"</td><td>"+employee.salary+"</td><td>"+employee.country+"</td><td>"+employee.state+"</td></tr>";
                   }
                   $("#employees-record-table").empty().append(records);
               }
           }
        });
  });

});

 //registration
$(document).ready(function(){
  $("#register-btn").click(function(event){
    var formData = $("#registration-form").serialize();
    $.ajax({
       type:"post",
       data: formData,
       url :"/employee",
       success: function(response) {
         console.log(response);
         $("#registration-status").html("<div class='alert alert-success' role='alert'>"+response+"</div>");
       },
       error:function(jqXHR,textStatus,errorThrown ){
          $("#registration-status").html("<div class='alert alert-danger' role='alert'>Error - Registration failed, Please try later</div>");
       }
    });

    event.preventDefault();
  });
});

// Home tab
$(document).ready(function(){
   $("#home-tab").click(function(event){
    $.ajax({
          url: "/employee",
          type: 'GET',
          dataType: 'json',
          success: function(res) {
           console.log(res);
               if(res.length>0){
                   var records="";
                   for (let i = 0; i < res.length; i++) {
                     var employee = res[i];
                     records += "<tr><th scope='row'>"+employee.empNo+"</th><td>"+employee.firstName+"</td><td>"+employee.lastName+"</td><td>"+employee.email+"</td><td>"+employee.mobNo+"</td><td>"+employee.salary+"</td><td>"+employee.country+"</td><td>"+employee.state+"</td></tr>";
                   }
                   $("#employees-record-table").empty().append(records);
               }
           }
        });
  });
  });



  // Search
  $(document).ready(function(){
     $("#search-btn").click(function(event){

      var empIdStr =$("#emp-search-form").serialize();
      if(empIdStr.includes("=")){
          var empId = empIdStr.split("=")[1];

          $.ajax({
              url: "/employee/"+empId,
              type: 'GET',
              dataType: 'json',
              success: function(res) {
               console.log(res);
               if(res !== undefined && res !== null){
                  var record = "<table class='table'><tbody>";
                  record += "<tr><td>Employee ID</td><td>"+res.empNo+"</td></tr>";
                  record += "<tr><td>Name</td><td>"+res.firstName+" "+res.lastName+"</td></tr>";
                  record += "<tr><td>Email</td><td>"+res.email+"</td></tr>";
                  record += "<tr><td>Mobile Number</td><td>"+res.mobNo+"</td></tr>";
                  record += "<tr><td>Salary</td><td>"+res.salary+"</td></tr>";
                  record += "<tr><td>State</td><td>"+res.state+"</td></tr>";
                  record += "<tr><td>Country</td><td>"+res.country+"</td></tr>";
                  record +="</tbody></table><br>";
                  $("#search-result").empty().append(record);
               }else{
                alert("Invalid record");
               }
              }
          });

      }else{
         alert("Invalid entry");
      }





      event.preventDefault();
  });
  });
