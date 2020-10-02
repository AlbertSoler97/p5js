/**
 * 
 */

/* Iniciar constants globals */
const global=
{
		'size' : 400,										/* Size is size reference, it also matches with width */
		'heightratio' : 571/400,

		'framerate' : 60,
		'bckg_color' : [0,0,0,255],

		'circle_diameter' : 0.12,				  			/* Fracció de l'amplada total orig 9/50 */
		'circle_color' : [255,0,0,255],
		'circle_initial_alpha' : 0,
		'circle_final_alpha' : 255,



		'initial_pause_ms' : 500,							/* Pausa inicial en millis */
		'text_phase_ms' : 4000,								/* Text en millis */
		'minitext_phase_ms' : 2000,							/* Mini text en millis */
		'circles_phase_ms' : 2000,							/* Cercles en millis */

		'text' : [
			{
				'str': 'R\n\nS\n\nN\n\nN\n\nE',
				'size' : 45,
				'initial_color' : [0,0,0,0],
				'final_color' : [255,255,255,255],
				'align' : 0,
				'x' : 3.25,
				'y' : 1
			},
			{
				'str': 'É\n\nO\n\nA\n\nC\n\nS',
				'size' : 45,
				'initial_color' : [0,0,0,0],
				'final_color' : [255,255,255,255],
				'align' : 0,
				'x' : 4,
				'y' : 2
			},
			{
				'str': 'ELECTRONIC\nMUSIC\nFESTIVAL\n#7',
				'size' : 10,
				'initial_color' : [0,0,0,0],
				'final_color' : [255,0,0,255],
				'align' : 0,
				'x' : 0.25,
				'y' : 0.5
			},
			{
				'str': 'DIJON\nDU O7 AU IO\nNOVEMBRE\n2013',
				'size' : 10,
				'initial_color' : [0,0,0,0],
				'final_color' : [255,0,0,255],
				'align' : 2,
				'x' : 8,
				'y' : 10.75
			},
			],

			'ball' : [

				/* 3 primers a l'esquerra */
				/* Ball 1 */
				{
					'init_x' : 2.5,								/* Distancies de diametre */
					'init_y' : 2,

					'final_x' : 1,
					'final_y' : 3.5,

					'init_color' : [0,0,0,255],
					'final_color' : [255,0,0,255]
				},
				/* Ball 2 */
				{
					'init_x' : 2.5,								/* Distancies en diametre */
					'init_y' : 5,

					'final_x' : 1,
					'final_y' : 6.5,

					'init_color' : [0,0,0,255],
					'final_color' : [255,0,0,255]
				},
				/* Ball 3 */
				{
					'init_x' : 6.5,								/* Distancies en diametre */
					'init_y' : 4,

					'final_x' : 1,
					'final_y' : 9.5,

					'init_color' : [0,0,0,255],
					'final_color' : [255,0,0,255]
				},


				/* Els 3 de la dreta */
				/* Ball 4 */
				{
					'init_x' : 2,								/* Distancies en diametre */
					'init_y' : 4,

					'final_x' : 4.25,
					'final_y' : 1.75,

					'init_color' : [0,0,0,255],
					'final_color' : [255,0,0,255]
				},
				/* Ball 5 */
				{
					'init_x' : 1.5,								/* Distancies en diametre */
					'init_y' : 7.5,

					'final_x' : 3,
					'final_y' : 6,

					'init_color' : [0,0,0,255],
					'final_color' : [255,0,0,255]
				},
				/* Ball 6 */
				{
					'init_x' : 1.5,								/* Distancies en diametre */
					'init_y' : 10.5,

					'final_x' : 3,
					'final_y' : 9,

					'init_color' : [0,0,0,255],
					'final_color' : [255,0,0,255]
				},

				/* Mig esquerra */
				/* Ball 7 */
				{
					'init_x' : 5.5,								/* Distancies en diametre */
					'init_y' : 2,

					'final_x' : 3.5,
					'final_y' : 4,

					'init_color' : [0,0,0,255],
					'final_color' : [255,0,0,255]
				},
				/* Ball 8 */
				{
					'init_x' : 4,								/* Distancies en diametre */
					'init_y' : 5,

					'final_x' : 4.8,
					'final_y' : 4.2,

					'init_color' : [0,0,0,255],
					'final_color' : [255,0,0,255]
				},
				/* Ball 9 */
				{
					'init_x' : 4,								/* Distancies en diametre */
					'init_y' : 8,

					'final_x' : 4.8,
					'final_y' : 7.2,

					'init_color' : [0,0,0,255],
					'final_color' : [255,0,0,255]
				},

				/* Balls esquerra abaix */
				/* Ball 10 */
				{
					'init_x' : 7.25,								/* Distancies en diametre */
					'init_y' : 6.25,

					'final_x' : 5.25,
					'final_y' : 8.25,

					'init_color' : [0,0,0,255],
					'final_color' : [255,0,0,255]
				},
				/* Ball 11 */
				{
					'init_x' : 4.75,								/* Distancies en diametre */
					'init_y' : 8.75,

					'final_x' : 2.75,
					'final_y' : 10.75,

					'init_color' : [0,0,0,255],
					'final_color' : [255,0,0,255]
				},
				/* Ball 12 */
				{
					'init_x' : 7.25,								/* Distancies en diametre */
					'init_y' : 9.25,

					'final_x' : 5.75,
					'final_y' : 10.75,

					'init_color' : [0,0,0,255],
					'final_color' : [255,0,0,255]
				},


				/* Balls adalt dreta */
				/* Ball A */
				{
					'init_x' : 5.5,								/* Distancies en diametre */
					'init_y' : 3.5,

					'final_x' : 7.25,
					'final_y' : 1.75,

					'init_color' : [0,0,0,255],
					'final_color' : [255,0,0,255]
				},
				/* Ball B */
				{
					'init_x' : 5.5,								/* Distancies en diametre */
					'init_y' : 6.5,

					'final_x' : 7.25,
					'final_y' : 4.75,

					'init_color' : [0,0,0,255],
					'final_color' : [255,0,0,255]
				},
				/* Ball C */
				{
					'init_x' : 4.5,								/* Distancies en diametre */
					'init_y' : 10.5,

					'final_x' : 7.25,
					'final_y' : 7.75,

					'init_color' : [0,0,0,255],
					'final_color' : [255,0,0,255]
				},




				]
}


class AnimationElement{
	constructor(init_x,init_y,final_x,final_y,init_color,final_color)
	{

		this.init_x = init_x * global.circle_diameter * global.size
		this.init_y = init_y * global.circle_diameter * global.size
		this.final_x = final_x * global.circle_diameter * global.size
		this.final_y = final_y * global.circle_diameter * global.size
		this.x = this.init_x
		this.y = this.init_y
		this.init_color = color(init_color[0],init_color[1],init_color[2],init_color[3])
		this.final_color = color(final_color[0],final_color[1],final_color[2],final_color[3])
		this.color = this.init_color

		this.active = true

		this.customDraw = null

		AnimationElement.instance[AnimationElement.instances++] = this
	}

	/* funció per actualitzar la progressió (0-1) */
	updateState(progression)
	{
		/* Limitar la progressió entre 0-1 en cas que fora dels límits */
		progression = max(0,progression)
		progression = min(1,progression)

		/* Construeix una nova posició */
		this.x = lerp(this.init_x,this.final_x,progression)
		this.y = lerp(this.init_y,this.final_y,progression)

		/* Extraure els colors de l'init i del final i creeu un color nou */
		let r,g,b,a
		r = lerp(red(this.init_color),red(this.final_color),progression)
		g = lerp(green(this.init_color),green(this.final_color),progression)
		b = lerp(blue(this.init_color),blue(this.final_color),progression)
		a = lerp(alpha(this.init_color),alpha(this.final_color),progression)

		this.color = color(r,g,b,a)
	}

	draw()
	{
		if(this.active)
		{
			if(this.customDraw != null)
			{
				this.customDraw()
			}
		}
	}

	activate()
	{
		this.active = true
	}

	deactivate()
	{
		this.active = false
	}

}

class AnimationCircle extends AnimationElement{

	constructor(init_x,init_y,final_x,final_y,init_color,final_color,diameter)
	{
		super(init_x,init_y,final_x,final_y,init_color,final_color)
		this.diameter = diameter*global.size

		this.customDraw = this._drawCircle

		AnimationCircle.instance[AnimationCircle.instances++] = this

	}

	_drawCircle()
	{
		fill(this.color)
		noStroke()
		circle(this.x,this.y,this.diameter)
	}


}


class AnimationText extends AnimationElement{

	constructor(x,y,str,textsize,initial_textcolor,final_textcolor,align)
	{
		super(x,y,x,y,initial_textcolor,final_textcolor)
		this.str_text = str
		this.textsize = textsize

		if(align == 0)
		{
			this.align = LEFT
		}
		else if(align == 1)
		{
			this.align = CENTER
		}
		else
		{
			this.align = RIGHT
		}

		this.customDraw = this._drawText

		AnimationText.instance[AnimationText.instances++] = this

	}

	_drawText()
	{
		textSize(this.textsize)
		textAlign(this.align)
		fill(this.color)
		text(this.str_text,this.x,this.y)
	}


}