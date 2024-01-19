document.getElementById('files').addEventListener('change', handleFileSelect, false);


function handleFileSelect(evt) { 
	var files = evt.target.files; 
	var f = files[0]; 
	var reader = new FileReader();
	reader.onload = (
		function(theFile) { 
			return function(e) { 
				document.getElementById('uploadedImg').innerHTML = [
					'<img src="', e.target.result,'" title="', theFile.name, '" width="50" />'
					].join(""); 
			}; 
		}
	)(f);
	reader.readAsDataURL(f); 
}

function calculateRipeness() {
    const ripenessPercent = Math.floor(Math.random() * 100);
	const resultDiv = document.getElementById('result');
    resultDiv.innerText = `Ripeness : ${ripenessPercent}%`;

}