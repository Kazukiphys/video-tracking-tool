function doGet() {
	var page = HtmlService.createHtmlOutputFromFile('index');
	page.setTitle('Video Tracking Tool');
	page.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
	return page;
}