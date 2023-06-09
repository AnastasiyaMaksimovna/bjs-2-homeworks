function compareArrays(arr1, arr2) {
	return arr1.length === arr2.length && arr1.every((item, idx) => item === arr2[idx])
}

function getUsersNamesInAgeRange(users, gender) {
	let result = users.filter(people => people.gender === gender).map(people => people.age);
	if(result.length>0){
	result = result.reduce((acc, item) => {
		return (acc + item)
	}, 0)/ result.length
	return result
	} else {
		return 0;
	}

}