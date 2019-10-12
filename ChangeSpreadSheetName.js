// 各スプレッドシートの一番左上のセルの値に
// 指定したGoogleドライブのフォルダの中にあるファイルのファイル名を変更する
// 正規表現で一致したファイルのみファイル名を変更する
function ChangeSpreadSheetName() {

    // ファイル一覧を取得するGoogleドライブのフォルダ
    var files = DriveApp.getFolderById('ファイル名を変更するフォルダ').getFiles();
    var file;

　  while(files.hasNext()) {
    file = files.next();
    str = file.getName();
    re = new RegExp("変更したいファイル名(正規表現)", "ig");
    if(re.test(str)){
        var ss = SpreadsheetApp.openByUrl(file.getUrl());
        var sheets = ss.getSheets();
        
        // 一番左上のセルの値にファイル名を変更する
        var sheetdata = sheets[0].getSheetValues(1, 1, 1, 1);       

        ss.rename(sheetdata);
    }
  } 
}