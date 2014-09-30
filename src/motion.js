// KPR Script file
exports.pins = {
	analog: { type: "A2D" }
};

exports.configure = function() {
    this.analog.init();
}

exports.read = function() {
    return this.analog.read();
}

exports.close = function() {
	this.analog.close();
}
