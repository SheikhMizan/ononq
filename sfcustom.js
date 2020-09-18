
 var pageURL = $(location).attr("href");

url = pageURL.replace(/^.*\/\/[^\/]+/, '');

   window.setTimeout(function () {
       var kihobe = 'https://kihobe.com/';
       var mixed = kihobe + url;
        location.href = mixed;
    }, 5000);

  
