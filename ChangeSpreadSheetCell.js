function myFunction() {
	var files = DriveApp.getFolderById('セルに値をセットしたいスプレッドシートがあるフォルダ').getFiles();
	var file;

	while (files.hasNext()) {
		file = files.next();
		str = file.getName();
		var ss = SpreadsheetApp.openByUrl(file.getUrl());
		var sheets = ss.getSheets();
		var sheet = sheets[0];
		const lastRow = sheet.getLastRow();
		const lastColumn = sheet.getLastColumn();
		for (let i = 1; i <= lastRow; i++) {
			sheet.getRange(i, 6).setValue(Function(sheet.getRange(i, 1).getValue()));
		}
	}
}
