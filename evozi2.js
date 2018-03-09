var windowOpen = 0;

    if(top != self) {
        $("body").click(function() {
            if(windowOpen == 0){
                var a = document.createElement("a");
                a.href = location.href;
                var evt = document.createEvent("MouseEvents");
                evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, true, false, false, false, 0, null);
                a.dispatchEvent(evt);
                windowOpen = 1;
            }
        });
    }

    /** COPYRIGHT EVOZI - DO NOT USE EVOZI API WITHOUT PERMISSION ELSE WE WILL START LIMITING IP, DON"T OVERLOAD OUR SERVER **/

    var generateCount = 0;
    $("#ppTYVRMr").keypress(function (e) {
        if(e.which == 13) {
            download_apk();
        }
    });
    $('#cARNcddsXbnOOFPPX').click(function(){
        download_apk();
    });
    function download_apk(){
        $('#apk_info').html('');
        $("#SypyX").hide();
        $("#notify-danger").hide();

        var arndB = $('#ppTYVRMr').val().replace(/((http|https):\/\/)?play.google.com\/store\/apps\/details\?id=/i, '');
       arndB = arndB.replace('market://details?id=', '').trim();
         var validUrlDesc = '<br>It should be something like this <br>https://play.google.com/store/apps/details?id=com.evozi.deviceid';
      var packageguide = '<a href="assets/img/guide/googleplay_packagename.png" target="_blank"><img src="assets/img/guide/googleplay_packagename.png" width="100%" height="100%"></a>';

             var DaMGtKIHyxmnmkp = 'IFDGQp';       var version_desc = '';
             var FyVnDZrmm = 'NsHNjmpt8-1w6KWfqySuRA';
  var fetched_desc = '';

        if(arndB.indexOf("&") != -1){
            var splited_string = arndB.split("&");
            arndB = splited_string[0];
        }

        if(!arndB || (arndB.length < 6) || (arndB.indexOf('.') === -1) ){
            $('#apk_info').html('<p class="text-danger">Please make sure package name or URL is valid</p>'+packageguide);
            return false;
        } else if (/\s/.test(arndB)) {
            $('#apk_info').html('<p class="text-danger">Whitespace (empty space) found. Please make sure package name or URL is valid</p>'+packageguide);
            return false;
        }

        if(generateCount >= 4){
            $('#apk_info').html('<a href="//apps.evozi.com/apk-downloader/?id='+arndB+'" class="btn btn-block btn-warning" onclick="_gaq.push([\'_trackEvent\', \'apk_file\', \'continue\']);"><span class="glyphicon glyphicon-asterisk"></span> Click here to continue generate download link</a>');
            return false;
        }

        try{
            $('#cARNcddsXbnOOFPPX').button('loading');
        } catch(err) {}
        $('#apk_info').html('<span class="android android_holder"></span> Searching and downloading APK...<br>It may take up to 3 minutes, depending on file size');

		   var  LBldNxRQ  = "";
        var bsUzkKx = 'oxGURqDyOaLcmVsrEXV';         LBldNxRQ  =   {t: 1520613405, cdbfbbabfcfcfe: arndB,   fffeafcffaddb:       FyVnDZrmm,   fetch: $('#forceRefetch').is(':checked')};

        $.ajax({
              type: "POST",
              //crossDomain: true,
                            dataType: "json",

              data: LBldNxRQ,
              cache: false, url: "//api-apk.evozi.com/download",

            success: function(response) {
                if(response.status == "success"){
                    if(response.fetched_at != null){
                        fetched_desc = '<br><strong>Last Fetched: </strong>' + response.fetched_at;
                    }

                    if(response.version != null){
                        version_desc = '<br><strong>Version: </strong>' + response.version + ' ('+response.version_code+')';
                    }

                    $('#apk_info').html('<div class="row"><div class="col-md-10"><p class="text-success"><strong>Package Name:</strong> '+response.packagename+' <a href="https://play.google.com/store/apps/details?id='+response.packagename+'" target="_blank">[Play Store]</a><br><strong>File Size:</strong> '+response.filesize+'<br><strong>QR Code:</strong> <a href="http://chart.apis.google.com/chart?cht=qr&chs=300x300&chl=https:'+encodeURIComponent(response.url)+'" target="_blank"> <span class="glyphicon glyphicon-qrcode"></span> View</a><br><strong>MD5 File Hash:</strong> '+response.md5 + fetched_desc+version_desc+'</p></div><div class="col-md-2"><img class="app-icon" src="//d2lh3rxs7crswz.cloudfront.net/'+response.packagename+'.png" onerror="if (this.src != \'//apps.evozi.com/apk-downloader/assets/img/mini_icon.png\') this.src = \'//apps.evozi.com/apk-downloader/assets/img/mini_icon.png\';"></div></div>');
                    $("#SypyX").show().prop("href", response.url);
                    $('#SypyX').html('<span class="glyphicon glyphicon-save"></span> Click here to download <strong>'+response.packagename+'</strong> now');
                    addClicker("//apps.evozi.com/apk-downloader/?id="+response.packagename);
                    generateCount += 1;
                } else if (response.status == "error"){
                    $('#apk_info').html('<p class="text-danger">'+response.data);
                    $("#SypyX").hide();
                    _gaq.push(['_trackEvent', 'error', arndB]);
                }
            },
            statusCode: {
              404: function() {
                alert( "Requested page not found" );
              },
              429: function() {
                alert( "You are being rate limited" );
              },
              500: function() {
                alert( "Internal Server Error" );
              },
            },
            error: function (xhr, ajaxOptions, thrownError) {
                var msg = xhr.status + " No connection - OR - You are being rate limited, please try again later";
                $('#apk_info').html('<p class="text-danger">Ops! Unable to download (Please try again or contact us)<br>'+msg+'</p>');
                _gaq.push(['_trackEvent', 'ajax_error - ', msg + navigator.userAgent]);
            },
            complete: function() {
                $("#forceRefetch").attr('checked', false);
                $('#cARNcddsXbnOOFPPX').button('reset');
            }
    });

    function addClicker(link) {
        if (history.pushState) {
            history.pushState(null, null, link);
        }
    }
    }