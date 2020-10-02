/**
 * 
 */

/* Inicialitzar la variable d'execució */
var runtime={}


function setup() {
	createCanvas(global.size, global.size * global.heightratio)
	frameRate(global.framerate)
	
	/* Inicialitzar la variable d'execució */
	initialize()

	/* El fons només es renovarà al principi */
	/* Això permet els borrosos */
	background(global.bckg_color)

}

function mouseClicked()
{
	initialize()
	background(global.bckg_color)
}

function draw() {
	let i;

	let elapsedTime = millis() - runtime.initialmillis


	/* Màquina d’estats a través de moments d’animació */
	if(!runtime.initialPauseElapsed)
	{
		if(elapsedTime >= global.initial_pause_ms)
		{
			/* Restableix el comptador i activa el text */
			runtime.initialPauseElapsed = true
			runtime.initialmillis = millis()
		}
	}
	else if(!runtime.textPhaseElapsed)
	{
		for(i=0;i<2;i++)
		{
			let elem = AnimationText.instance[i]
			elem.updateState(elapsedTime / global.text_phase_ms)
			elem.draw()
		}

		if(elapsedTime >= global.text_phase_ms)
		{
			/* Restableix el comptador i activa el text */
			runtime.textPhaseElapsed = true
			runtime.initialmillis = millis()
		}
	}
	else if(!runtime.miniTextsPhaseElapsed)
	{

		for(i=2;i<4;i++)
		{
			let elem = AnimationText.instance[i]
			elem.updateState(elapsedTime / global.minitext_phase_ms)
			elem.draw()
		}

		for(i=0;i<2;i++)
		{
			let elem = AnimationText.instance[i]
			elem.updateState(1)
			elem.draw()
		}

		if(elapsedTime >= global.minitext_phase_ms)
		{
			/* Restableix el comptador i activa el text */
			runtime.miniTextsPhaseElapsed = true
			runtime.initialmillis = millis()
		}
	}
	else if(!runtime.circlesPhaseElapsed)
	{
		for(i=0;i<AnimationCircle.instances;i++)
		{
			let elem = AnimationCircle.instance[i]

			elem.updateState(elapsedTime / global.circles_phase_ms)
			elem.draw()
		}

		for(i=0;i<AnimationText.instances;i++)
		{
			let elem = AnimationText.instance[i]
			elem.updateState(1)
			elem.draw()
		}

		if(elapsedTime >= global.circles_phase_ms)
		{
			/* Restableix el comptador i activa el text */
			runtime.circlesPhaseElapsed = true
			runtime.ended = true
		}
	}
	else
	{
		for(i=0;i<AnimationCircle.instances;i++)
		{
			let elem = AnimationCircle.instance[i]

			elem.updateState(1)
			elem.draw()
		}

		for(i=0;i<AnimationText.instances;i++)
		{
			let elem = AnimationText.instance[i]
			elem.updateState(1)
			elem.draw()
		}
	}
}