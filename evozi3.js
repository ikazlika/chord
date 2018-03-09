 var oldwrite = document.write;
		       var text = '';

		    function loadSecureStart() {
	             document.write = function(t) { text = t; }
		    }

		    function loadSecureEnd() {
			   document.write = oldwrite;
			   text = text.replace(/http:/g, 'https:');
			   document.write(text);
	        }

            function loadSecureImage() {
                document.write = oldwrite;
                try {
                    var results = /<img[^>]+src="([^">]+)/g.exec(text);
                    var source = results[1];
                    text = text.replace(/<img src=/gi, "<img src='https://external.evozi.com/image.php?url=" + encodeURIComponent(source) + "' tempSrc=");
                } catch(err) {
                    text = text.replace(/http%3A%2F%2F/g, 'https%3A%2F%2F');
                }
                document.write(text);
            }