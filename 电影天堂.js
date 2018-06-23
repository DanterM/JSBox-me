var http = require('http');

var cheerio = require('cheerio');
var iconv = require('iconv');
var url = 'http://www.dytt8.net/';

http.get(url,function(res){
	var html = '';
	res.on('data', function(data) {
		html += data;
		/* Act on the event */
	});
	res.on('end', function() {
		var courseData = filterChapters(html);
		// var change_data = iconv.decode(courseData,'gb2312');
		// console.log(change_data);
		console.log(courseData);
		
		/* Act on the event */
	});
}).on('error', function() {
	console.log('获取数据出错！');
	/* Act on the event */
});

function filterChapters(html) {
	var $ = cheerio.load(html);
	var chapters = $('.co_content2');
	var movieData = [];

	chapters.each(function(item) {
		var chapter= $(this);
		var chapterTitle = chapter.children('ul').children('a').text();
		var chapterData = {
			chapterTitle: chapterTitle,
			videos: []
		};	
		movieData.push(chapterData);
	});
	// console.log(movieData);
	return movieData;
	// movies.each(function(item) {
	// 	var movie = $(this).find()
	// });
}



