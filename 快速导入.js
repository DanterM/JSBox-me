$ui.render({
  views: [
    {
      type: "button",
      props: {
        title: "Button"
      },
      layout: function(make, view) {
        make.center.equalTo(view.super)
        make.width.equalTo(64)
      },
      events: {
        tapped: function(sender) {
          $ui.toast("Tapped")
        }
      }
    },
    {
	  type: "input",
  	  props: {
        type: $kbType.search,
        darkKeyboard: true,
  	  },
      layout: function(make, view) {
        make.center.equalTo(view.super)
        make.size.equalTo($size(100, 32))
      }
    }
  ]
})

var appName = "sync-index"
var = "jsbox://install?url=https://github.com/DanterM/JSBox-me/blob/master/" + +".js"

$app.openBrowser({
  type: 10000,
  url: "https://apple.com"
})