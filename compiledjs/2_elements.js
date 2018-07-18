class Elements {
    constructor() {
        this.Elements = new Array();
    }
    add(elements) {
        elements.forEach(e => {
            this.Elements.push(e);
        });
    }
    print() {
        console.log(this.Elements);
    }
    getElementsWhereAgeGreaterThanTwenty() {
        return this.Elements.filter(e => e.Age > 20).reduce((allSaved, e) => {
            if (!allSaved.find(({ Num }) => Num === e.Num)) {
                allSaved.push(e);
            }
            return allSaved;
        }, []);
    }
}
/***************************************/
console.log('******************2-Element*********************');
let elementsToAdd = [
    { Num: 1, Name: "Element1", Age: 1 },
    { Num: 2, Name: "Element2", Age: 2 },
    { Num: 3, Name: "Element3", Age: 3 },
    { Num: 4, Name: "Element4", Age: 4 },
    { Num: 5, Name: "Element5", Age: 5 },
    { Num: 10, Name: "Element10", Age: 10 },
    { Num: 20, Name: "Element20", Age: 20 },
    { Num: 21, Name: "Element21", Age: 21 },
    { Num: 30, Name: "Element30", Age: 30 },
    { Num: 30, Name: "Element30-2", Age: 30 },
    { Num: 40, Name: "Element40", Age: 40 },
    { Num: 50, Name: "Element50", Age: 50 },
    { Num: 50, Name: "Element50", Age: 50 },
    { Num: 50, Name: "Element50-2", Age: 50 }
];
let elements = new Elements();
elements.add(elementsToAdd);
elements.print();
console.log("getElementsWhereAgeGreaterThanTwenty => ()");
elements.getElementsWhereAgeGreaterThanTwenty().forEach(e => console.log(`Num: ${e.Num}, Name: ${e.Name}, Age: ${e.Age}`));
console.log('******************2-Element*********************');
/***************************************/ 
//# sourceMappingURL=2_elements.js.map