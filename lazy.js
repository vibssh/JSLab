var utilities = {
  loadMore: function (btn, list, link, createElementFunction) {

    //  var btn = $('button');
    //  var list = $('li:last');
    //  var link = btn.attr('href');
    var loaded = false;
    var myData;
    var displayIndex = 0;

    var showMore = function (myData, displayIndex) {
      if (displayIndex > myData.length) {
        return;
      }
      $('#loading').remove();
      for (var i = displayIndex; i < displayIndex + 3; i++) {

        var returnedData = myData[i];
        if (returnedData === undefined) {
          $('button').prop('disabled', true);
          return;
        }

        list.append(createElementFunction(returnedData));
      }
      displayIndex += 3;
      return displayIndex;
    };
    
    $(function () {
      btn.on('click', function (e) {
        e.preventDefault();
        list.append('<li id="loading">' + 'loading....' + '</li>');
        if (!loaded) {
          $.ajax({
            url: link,
            dataType: 'json',
            success: function (data) {
              myData = data;
              displayIndex = showMore(myData, displayIndex);
            }
          });
        } else {
          displayIndex = showMore(myData, displayIndex);
        }
        return false;
      });
    });
  }
};

$(function () {
  var btn = $('button');
  var list = $('li:last');
  var link = btn.attr('href');

  var createElementFunction = function (data) {
    return '<li style="color:red">' + data["login"] + '</li>';
  }
  
  utilities.loadMore(btn, list, link, createElementFunction);

});