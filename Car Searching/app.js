

var cars ={
    honda:{
           city:{
               carName:"Honda city",
               model:"2024",
               fuelType:"Petrol",
               engine:"6000 RPM",
               seatCapacity:"5 seater",
               fuelTankCapacity:"40 L",
               image:"images/city.jpeg"
           },
           accord: {
               carName: "Honda Accord",
               model: "2023",
               fuelType: "Petrol",
               engine: "1.5L",
               seatCapacity: "5",
               fuelTankCapacity: "56 L",
               image:"images/accord.jpeg"
           },
            civic: {
               carName: "Honda Civic",
               model: "2023",
               fuelType: "Petrol",
               engine: "2.0L",
               seatCapacity: "5",
               fuelTankCapacity: "47 L",
               image:"images/civic.jpeg"
            },
   },
   
   
    suzuki:{
           
           swift: {
               carName: "Suzuki Swift",
               model:"2023",
               fuelType: "Petrol",
               engine: "1.2L",
               seatCapacity: "5",
               fuelTankCapacity: "37 L",
               image: "images/swift.jpeg"
                   
               },
           alto: {
               carName: "Suzuki Alto",
               model: "2023",
               fuelType: "Petrol",
               engine: "0.8L",
               seatCapacity: "4",
               fuelTankCapacity: "35 L",
               image: "images/alto.jpeg"
           },
       }, 
   
   toyota:{
       corolla: {
           carName: "Toyota Corolla",
           model: "2023",
           fuelType: "Petrol",
           engine: "1.8L",
           seatCapacity: "5",
           fuelTankCapacity: "50 L",
           image: "images/corolla.jpeg"
       },
       hilux: {
           carName: "Toyota Hilux",
           model: "2023",
           fuelType: "Diesel",
           engine: "2.8L",
           seatCapacity: "5",
           fuelTankCapacity: "80 L",
           image: "images/hillux.jpeg"
    
       },
       fortuner: {
           carName: "Toyota Fortuner",
           model: "2023",
           fuelType: "Diesel",
           engine: "2.8L",
           seatCapacity: "7",
           fuelTankCapacity: "80 L",
           image: "images/fortuner.jpeg"
       },
   }
           
               
       }
   



   

var company = document.getElementById("company");
var model = document.getElementById("model");


for (var key in cars) {
    company.innerHTML += `<option value='${key}'>${key}</option>`;
}

function selectCompany() {
    model.innerHTML = `<option value="">Select Model</option>`;
    for (var key in cars[company.value]) {
        model.innerHTML += `<option value='${key}'>${key}</option>`;
    }
    document.getElementById("details").style.display = 'none';
}

function selectModel() {
    var selectedCompany = company.value;
    var selectedModel = model.value;
    if (selectedCompany && selectedModel) {
        var carDetails = cars[selectedCompany][selectedModel];
        var detailsDiv = document.getElementById("details");
        detailsDiv.style.display = 'block';
        detailsDiv.innerHTML = `
            <img src="${carDetails.image}" alt="${carDetails.carName}">
            <div><span>Car Name:</span> ${carDetails.carName}</div>
            <div><span>Model:</span> ${carDetails.model}</div>
            <div><span>Fuel Type:</span> ${carDetails.fuelType}</div>
            <div><span>Engine:</span> ${carDetails.engine}</div>
            <div><span>Seat Capacity:</span> ${carDetails.seatCapacity}</div>
            <div><span>Fuel Tank Capacity:</span> ${carDetails.fuelTankCapacity}</div>
        `;
    }
}
