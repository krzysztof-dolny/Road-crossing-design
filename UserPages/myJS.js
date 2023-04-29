		// call onse the DOM / HTML Code is loaded
		$(document).ready(function(){
			// prevent to read data back from browser cach
			$.ajaxSetup({ cache: false });
			// call oncee the read function
			read();
		});
		
		function read(){
			$.post("readWritePlcTags.json", 'no-data')
				.done(function(readData){				// eventhandler in case of successfull read
					var data = $.parseJSON(readData);	// parse recived DATA into JSON Object
					deploy(data);						// call the deploy function
					setTimeout(read, 1000);				// call setTimout for cyclyc operation
				});
		}
		
		function deploy(data){
			if (data.sw_auto_1z === 0) {
				$('#circle1z').css('background-color', 'gray');
			} else if (data.sw_auto_1z === 1) {
				$('#circle1z').css('background-color', 'green');
			}

			if (data.sw_auto_1p === 0) {
				$('#circle1p').css('background-color', 'gray');
			} else if (data.sw_auto_1p === 1) {
				$('#circle1p').css('background-color', 'yellow');
			}

			if (data.sw_auto_1c === 0) {
				$('#circle1c').css('background-color', 'gray');
			} else if (data.sw_auto_1c === 1) {
				$('#circle1c').css('background-color', 'red');
			}
		
			if (data.sw_auto_2z === 0) {
				$('#circle2z').css('background-color', 'gray');
			} else if (data.sw_auto_2z === 1) {
				$('#circle2z').css('background-color', 'green');
			}

			if (data.sw_auto_2p === 0) {
				$('#circle2p').css('background-color', 'gray');
			} else if (data.sw_auto_2p === 1) {
				$('#circle2p').css('background-color', 'yellow');
			}

			if (data.sw_auto_2c === 0) {
				$('#circle2c').css('background-color', 'gray');
			} else if (data.sw_auto_2c === 1) {
				$('#circle2c').css('background-color', 'red');
			}
		}