//To prevent a bug in IE where the global use of the 'viz' variable
//  interferes with the div id 'viz' (in the html), the following line is needed:
//  Note: this line does not appear in the tutorial videos but should still be used
//    and is in all of the included js files. 
var viz, workbook;

window.onload= function() {
	var vizDiv = document.getElementById('viz');
	var vizURL = "https://public.tableau.com/profile/arthur.wanderley#!/vizhome/ComparativoFastFoods/Painel1";
	var options = {
		width: '1000px',
		height: '1000px',
		hideToolbar: true,
		hideTabs: true,
		onFirstInteractive: function () {
			workbook = viz.getWorkbook();
			document.getElementById('sheetName').innerHTML = viz.getWorkbook().getActiveSheet().getName();
		}
	};
	viz = new tableauSoftware.Viz(vizDiv, vizURL, options);
	viz.addEventListener('tabswitch', function(event) {
		document.getElementById('sheetName').innerHTML = event.getNewSheetName();
	});
};
