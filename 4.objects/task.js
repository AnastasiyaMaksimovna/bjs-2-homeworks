function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;

}

Student.prototype.addMarks = function(...marksToAdd) {
	if ("marks" in this) {
		for(let i = 0; i<marksToAdd.length; i++){
      		this.marks.push(marksToAdd[i])
		}
	}
}

Student.prototype.getAverage = function() {
	if ("marks" in this) {
		if(this.marks.length > 0){ 
			let sum = 0;
			for (let i = 0; i<this.marks.length; i++) {
				sum += this.marks[i];
			}
			return sum / this.marks.length;
		}
	} 
		return 0;
}

Student.prototype.exclude = function(reason) {
	delete this.subject;
	delete this.marks;
	this.excluded = reason;
}