
await loadScript("https://unpkg.com/total-serialism/build/ts.es5.min.js")

const Rand = TotalSerialism.Stochastic;

const rot = Rand.shuffle([  Math.PI / 2,0])
const tapeAmmount = Rand.shuffle([ 200, 90, 145])
const tapeAmmount2 = Rand.shuffle([90, 130, 50, 160, 100])
const rot2 = Rand.shuffle([  Math.PI / 2,0])
const ran = Rand.drunk(10, 5, 1, 4);
const distortion = Rand.shuffle([  0.01,0])
//.ease('easeInOutQuad').fast(0.1);

tape = () => osc(tapeAmmount, 0.05)
	.thresh(0.5, 0)
	.mult(osc(60, 0)
		.rotate(()=>Math.PI/2)
		.thresh(0.4)
		.color(0, 1, 1)
		.invert())
	.mask(osc(tapeAmmount, 0.05)
		.thresh(0.5, 0.09))

tape2 = () => osc(tapeAmmount2, 0.01)
	.thresh(0.5, 0)
	.mult(osc(60, 0)
		.rotate(()=>Math.PI/2)
		.thresh(0.4)
		.color(0, 1, 1)
		.invert())
	.mask(osc(tapeAmmount2, 0.01)
		.thresh(0.5, 0.09))

solid()
	.layer(tape2()
		.layer(tape2()
			.rotate(() => Math.PI / 2))
		.rotate(rot))
	.layer(tape())
	.layer(tape()
		.rotate(rot))
	.layer(tape()
		.rotate(rot2))
	.rotate(rot2)
.scale(ran)
//.modulateRotate(osc(10),0.1)
  .out()

src(o0).modulate(src(o1),distortion).out(o1)

render(o1)



setResolution(innerWidth,innerHeight)
