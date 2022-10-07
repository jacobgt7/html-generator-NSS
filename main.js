const computer = {
	id: 1,
	manufacturer: "Apple",
	make: "Macbook",
	model: "Pro",
	specs: {
		memory: 32,
		hardDrive: "500 GB",
		processor: 2.4
	}
}

//define a function that takes a computer object as a parameter and outputs an html representation.
const makeIntoHTML = (computerObj) => {
    return `<section id="computer--${computerObj.id}">
        <h1>${computerObj.manufacturer} ${computerObj.make}</h1>
        <div>Model: ${computerObj.model}</div>
        <div>Memory: ${computerObj.specs.memory} GB</div>
        <div>Hard drive space: ${computerObj.specs.hardDrive}</div>
        <div>Processor speed: ${computerObj.specs.processor} Ghz</div>
</section>`
    
} 

const computerInHTML = makeIntoHTML(computer)
console.log(computerInHTML)