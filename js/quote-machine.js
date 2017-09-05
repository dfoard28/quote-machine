
$(document).ready(function(){
    $('#btnOne').on('click', function(){
        $.ajax({
            url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=mycallback',
            dataType:'jsonp'
        })
    });
});
function mycallback(json){
  $('#quote-title').html(json[0].title);
  $('#quote-content').html(json[0].content);
 
var author = json[0].title;
var quote = json[0].content;
var cleanQuote = $(quote).text();
var content = cleanQuote + " - " + author;

$('iframe').remove();
    
twttr.widgets.createShareButton(
    "",
    document.getElementById("container"),
    {
        size: "large",
        text: content
    }
);
};