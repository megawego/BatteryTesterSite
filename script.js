function startListener() {
  
  document.getElementById('fileInput').addEventListener('change', handleFileSelect, false);
}

function handleFileSelect(event) {
  var reader = new FileReader();
  reader.onload = handleFileLoad;
  reader.readAsText(event.target.files[0]);
}

function csvStringToArray(inputString){
  var csvArray=inputString.replace(/(\r)/gm, '').split("\n");
  var csvHeader=csvArray[0].split(",");
  var csvObjectArray=[];
  var csvTempObject={};
for(var i=1;i<csvArray.length;i+=1){
  csvTempObject={};
  csvTempValue="";
  for(var j=0;j<csvHeader.length;j+=1){
    csvTempValue=csvArray[i].split(",")[j];
    if(parseFloat(csvTempValue)!==NaN){
      csvTempValue=parseFloat(csvTempValue);
    }
    csvTempObject[csvHeader[j]]=csvTempValue;
  }
  csvObjectArray[i-1]=csvTempObject;
}
return csvObjectArray;
}

function handleFileLoad(event) {
  var csvFileData=event.target.result;
  OutputArray=csvStringToArray(csvFileData);
  document.getElementById('fileContent').textContent = JSON.stringify(OutputArray);
}
