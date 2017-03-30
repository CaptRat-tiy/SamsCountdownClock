function countdown() {
  var now = new Date();
  var eventDate = new Date(2017, 11, 25);

  var currentTime = now.getTime();
  var eventTime = eventDate.getTime();

  var remTime = eventTime - currentTime;

  var s = Math.floor(remTime / 1000);
  var m = Math.floor( s / 60);
  var h = Math.floor( m / 60);
  var d = Math.floor( h / 24);

  h %= 24;
  m %= 60;
  s %= 60;

  h = (h < 10) ? "0" + h: h;
  m = (m < 10) ? "0" + m: m;
  s = (s < 10) ? "0" + s: s;

  document.getElementById("days").textContent = d;
  document.getElementById("days").innerText = d;
  document.getElementById("hours").textContent = h;
  document.getElementById("minutes").textContent = m;
  document.getElementById("seconds").textContent = s;

  setTimeout(countdown, 1000);
  }

countdown();

  function validateNumber(number) {
    var msg = '';
    if(number != null){
      if(isNaN(number)){
        msg = "The input is not a valid number";
      }else{
        msg = (number % 2 == 0) ? "Even number": "Odd number";
      }
    }else{
        msg = "You cancelled the action."
    }
    document.getElementById('result').textContent = msg
  }
  var CustomPrompt = new function(){

				this.dialogInputEl = document.getElementById('dialogInputEl');

				this.show = function(msg, callback){
					var dlg = document.getElementById('dialogCont');
					dlg.style.top = '30%';
					dlg.style.opacity = 1;
					var dlgMessage = dlg.querySelector('#dlgMessage');
					dlgMessage.textContent = msg;
					dialogInputEl.focus();
					dialogInputEl.value = '';
					this.callback = callback;
					document.getElementById('freezeLayer').style.display = '';
				};

				this.okay = function () {
					this.callback(dialogInputEl.value);
					this.close();
				}

				this.cancel = function  () {
					this.callback(null);
					this.close();
				}

				this.close = function  () {
					var dlg = document.getElementById('dialogCont');
					dlg.style.top = '-30%';
					dlg.style.opacity = 0;
					document.getElementById('freezeLayer').style.display = 'none';
				}
			}
