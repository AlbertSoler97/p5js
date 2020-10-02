/**
 * 
 */

/* Utilitzarem aquesta funció per carregar els valors de la variable global */
function initialize()
{
	AnimationElement.instances = 0
	AnimationElement.instance=[]

	AnimationCircle.instances = 0
	AnimationCircle.instance=[]

	AnimationText.instances = 0
	AnimationText.instance=[]


	runtime.initialmillis = millis()
	runtime.initialPauseElapsed = false
	runtime.textPhaseElapsed = false
	runtime.miniTextsPhaseElapsed = false
	runtime.circlesPhaseElapsed = false
	runtime.ended = false

	let i
	for(i=0;i<global.ball.length;i++)
	{
		new AnimationCircle(global.ball[i].init_x,global.ball[i].init_y,
				global.ball[i].final_x,global.ball[i].final_y,
				global.ball[i].init_color,global.ball[i].final_color,global.circle_diameter)
	}

	for(i=0;i<global.text.length;i++)
	{
		new AnimationText(global.text[i].x,global.text[i].y,global.text[i].str,global.text[i].size,
				global.text[i].initial_color,global.text[i].final_color, global.text[i].align)
	}

}
