$(document).ready(function(){

	var workTime =$('#worktime').text();
	var breakTime=$('#breaktime').text();;
	workTime*=60;
	breakTime*=60;
	console.log(workTime);



var breakTimer = $('.breakTimer').FlipClock(breakTime,{
		clockFace: 'MinuteCounter',
		autoStart: false,
		countdown: true,
		callbacks: {
		start: function (){
				$('.break_text').addClass('activecolor');

			},
		stop: function(){
			$('.break_text').removeClass('activecolor');

		},
			interval: function(){
				var break_time = breakTimer.getTime().time;
				if(break_time==0){
					workTimer.setTime(parseInt($('#worktime').text()*60));
					workTimer.start();
					breakTimer.setTime(parseInt($('#breaktime').text()*60)+1);
					$('.break_text').removeClass('activecolor');
					breakTimer.stop();					
				}
			}
		}

});
var workTimer = $('.workTimer').FlipClock(workTime,{
	clockFace: 'MinuteCounter',
	autoStart: false,
	countdown: true,
	callbacks: {

		start: function (){
				$('.work_text').addClass('activecolor');

			},
		stop: function(){
			$('.work_text').removeClass('activecolor');

		},
		interval: function(){
			var time_work = workTimer.getTime().time;
			
			if(time_work==0){
				breakTimer.setTime(parseInt($('#breaktime').text()*60));
				$('.break_text').addClass('activecolor');
				breakTimer.start();
				workTimer.setTime(parseInt($('#worktime').text()*60)+1);
				workTimer.stop()			
							}
		}


	}
});

	$('#plusonework').click(function(){
		workTime = $('#worktime').text();
		workTime=parseInt(workTime);
		if(workTime!==25){
			workTime+=1;
			$('#worktime').text(workTime);
			workTimer.setTime(parseInt($('#worktime').text()*60));
		}


	});
	$('#minusonework').click(function(){
		workTime=$('#worktime').text();
		workTime=parseInt(workTime);
		if(workTime!==1){
			workTime-=1;
			$('#worktime').text(workTime);
			workTimer.setTime(parseInt($('#worktime').text()*60));
		}

	});
	$('#plusonebreak').click(function(){
		breakTime = $('#breaktime').text();
		breakTime=parseInt(breakTime);
		if(breakTime!==25){
			breakTime+=1;
			$('#breaktime').text(breakTime);
			breakTimer.setTime(parseInt($('#breaktime').text()*60));
		}


	});
	$('#minusonebreak').click(function(){
		breakTime=$('#breaktime').text();
		breakTime=parseInt(breakTime);
		if(breakTime!==1){
			breakTime-=1;
			$('#breaktime').text(breakTime);
			breakTimer.setTime(parseInt($('#breaktime').text()*60));
		}

	});

	$('#start').click(function(){
		console.log(parseInt($('#breaktime').text()*60));
		workTimer.start();
		breakTimer.setTime(parseInt($('#breaktime').text()*60));
		breakTimer.stop();
	

	});
	$('#stop').click(function(){
		workTimer.stop();
		breakTimer.stop();

	});
	$('#reset').click(function(){
		workTimer.setTime(parseInt($('#worktime').text()*60));		
		workTimer.stop();
		breakTimer.setTime(parseInt($('#breaktime').text()*60));
		breakTimer.stop();
	});
// var break = $('.workTimer').FlipClock(200,{
// 	clockFace: 'MinuteCounter',
// 	countdown: true
// });


});