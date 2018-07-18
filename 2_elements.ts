interface Element {
    Num: number;
    Name: string;
    Age: number;
}
class Elements {

    public Elements : Array<Element>;

    constructor(){
        this.Elements = new Array<Element>();
    }

    public add(elements: Element[]){
        elements.forEach(e => {
            this.Elements.push(e);
        });
    }

    public print(){
        console.log(this.Elements);
    }

    public getElementsWhereAgeGreaterThanTwenty() : Array<Element>{
        return this.Elements.filter(e => e.Age > 20).reduce((allSaved, e) => {
                                                            if (!allSaved.find(({Num}) => Num === e.Num)) {
                                                                allSaved.push(e);
                                                            }
                                                            return allSaved;
                                                            }, []);
    }
    
}
/***************************************/
console.log('******************2-Element*********************');

let elementsToAdd = [
         <Element> {Num: 1, Name: "Element1", Age: 1},
         <Element> {Num: 2, Name: "Element2", Age: 2},
         <Element> {Num: 3, Name: "Element3", Age: 3},
         <Element> {Num: 4, Name: "Element4", Age: 4},
         <Element> {Num: 5, Name: "Element5", Age: 5},
         <Element> {Num: 10, Name: "Element10", Age: 10},
         <Element> {Num: 20, Name: "Element20", Age: 20},
         <Element> {Num: 21, Name: "Element21", Age: 21},
         <Element> {Num: 30, Name: "Element30", Age: 30},
         <Element> {Num: 30, Name: "Element30-2", Age: 30},
         <Element> {Num: 40, Name: "Element40", Age: 40},
         <Element> {Num: 50, Name: "Element50", Age: 50},
         <Element> {Num: 50, Name: "Element50", Age: 50},
         <Element> {Num: 50, Name: "Element50-2", Age: 50}
        ];

let elements = new Elements();
elements.add(elementsToAdd);

elements.print();

console.log("getElementsWhereAgeGreaterThanTwenty => ()");
elements.getElementsWhereAgeGreaterThanTwenty().forEach(e => console.log(`Num: ${e.Num}, Name: ${e.Name}, Age: ${e.Age}`));

console.log('******************2-Element*********************');
/***************************************/