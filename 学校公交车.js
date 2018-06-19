var cars = [
    { "name": "317", "num": "317" }, { "name": "K161", "num": "K161" }
]

// $location.fetch({
//   handler: function(location) {
//     // var query = location.lat + "," + location.lng
//     // var url = "https://maps.apple.com/?q=" + query + "&ll=" + query
//     var lat = location.lat
//     var lng = location.lng
//   }
// })

$ui.menu({
    items: cars.map(function(item) {
        return item.name
    }),
    handler: function(title, idx) {

        var carName = cars[idx].name;
        var carNum = cars[idx].num;

        $location.fetch({
            handler: function(location) {
                var lat = location.lat
                var lng = location.lng

                var requestUrl = "https://api.chelaile.net.cn/bus/line!lineDetail.action?mac=&userId=&userAgent=Mozilla/5.0%20(iPhone;%20CPU%20iPhone%20OS%2012_0%20like%20Mac%20OS%20X)%20AppleWebKit/605.1.15%20(KHTML,%20like%20Gecko)%20Mobile/16A5288q&vc=10553&sv=12.0&geo_lat=36.680981&lineName=" +
                    carNum +
                    "&cityState=0&pushkey=&lineNo=" +
                    carNum +
                    "&screenWidth=1242&gpstype=wgs&geo_lac=1414.000000&gpsAccuracy=1414.000000&stats_act=enter&deviceType=iPhone10,2&lng=117.176294&idfa=74FA76F3-BFC0-41B9-A6F9-436C9666C95B&idfv=A9180444-B2E9-4768-B9FD-BB924A60E510&screenHeight=2208&wifi_open=1&stats_order=1-1&sign=XBtanbriLWsXyZngTg+mmA==&s=IOS&stats_referer=searchResult&dpi=3&lat=36.680981&cityId=041&push_open=0&v=5.50.3&geo_type=wgs&nw=4G&language=1&vendor=apple&lchsrc=icon&udid=fc14da02499d7d260db4f0820f63342193899d26&geo_lng=117.176294"

                var api = "https://api.chelaile.net.cn/bus/line!lineDetail.action?mac=&userId=&userAgent=Mozilla/5.0%20(iPhone;%20CPU%20iPhone%20OS%2012_0%20like%20Mac%20OS%20X)%20AppleWebKit/605.1.15%20(KHTML,%20like%20Gecko)%20Mobile/16A5288q&vc=10553&sv=12.0&geo_lat=" + lat + "&lineName=" + carNum + "&cityState=0&pushkey=&lineNo=" + carNum + "&screenWidth=1242&gpstype=wgs&geo_lac=1414.000000&gpsAccuracy=1414.000000&stats_act=enter&deviceType=iPhone10,2&lng=" + lng + "&idfa=74FA76F3-BFC0-41B9-A6F9-436C9666C95B&idfv=A9180444-B2E9-4768-B9FD-BB924A60E510&screenHeight=2208&wifi_open=1&stats_order=1-1&sign=XBtanbriLWsXyZngTg+mmA==&s=IOS&stats_referer=searchResult&dpi=3&lat=" + lat + "&cityId=041&push_open=0&v=5.50.3&geo_type=wgs&nw=4G&language=1&vendor=apple&lchsrc=icon&udid=fc14da02499d7d260db4f0820f63342193899d26&geo_lng=" + lng


                $http.request({
                    method: "GET",
                    url: api,
                    handler: function(resp) {
                        var data = resp.data.replace("**YGKJ", "").replace("YGKJ##", "");
                        var startMatchStr = "\"tip\":{\"desc\":\"";
                        var endMatchStr = "\",\"destType\"";
                        var start = data.indexOf(startMatchStr) + startMatchStr.length;
                        var end = data.indexOf(endMatchStr);
                        var desc = data.substring(start, end);

                        $ui.alert({
                            title: carName,
                            message: desc,
                        })
                    }
                })
            }
        })
    }
})