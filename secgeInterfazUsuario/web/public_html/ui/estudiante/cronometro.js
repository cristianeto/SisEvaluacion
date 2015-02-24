// Tigra Calendar v5.2 (11/20/2011)
// http://www.softcomplex.com/products/tigra_calendar/
// License: Public Domain... You're welcome.

// default settins - this structure can be moved in separate file in multilangual applications
var cronometro;

	function detenerse()
	{
            
		clearInterval(cronometro);
            
	}

	function carga()
	{seconds=0;
		
		s = document.getElementById("segundos");
		m = document.getElementById("minutos");

		cronometro = setInterval(
			function(){
                            seconds++;
                            secs=seconds;
                            mins=0;
				while(secs==60)
				{
					mins++;
                                        secs-=60;
                                 }
                                 if(min<10)m.innerHTML="0"+mins;
				else
                            m.innerHTML = mins;
                            s.innerHTML =secs;
  
				Total_secs=secs;
                                Total_mins=mins;

			}
			,1000);

	}