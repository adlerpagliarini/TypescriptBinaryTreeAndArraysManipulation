class BTN {

    public Val: number;
    public Left: BTN;
    public Right: BTN;

    constructor(val: number) {
        this.Val = val;
        this.Left = null;
        this.Right = null;
    }

}

class BinaryTree {
    
    private rootNode: BTN;

    constructor() {}

    //private methods
    private insert(node:BTN, n: number) : BTN{
        if(!node)
            return new BTN(n);

        if(n < node.Val)
            node.Left = this.insert(node.Left, n);
        else if(n > node.Val)
            node.Right = this.insert(node.Right, n);
        else
            return node;
        
        return node;
    }

    private findSmallestValueToRemove(node: BTN) : number{
        return node.Left == null ? node.Val : this.findSmallestValueToRemove(node.Left);
    }

    private remove(node:BTN, n: number) : BTN{
        if(!node)
            return null;

        if(n == node.Val){
            if (node.Left == null && node.Right == null) { //node doesn't have childs
                return null;
            }
            if (node.Right == null) {
                return node.Left;
            }             
            if (node.Left == null) {
                return node.Right;
            }
            let smallestValue = this.findSmallestValueToRemove(node.Right);
            //swap smallestValue with the Parent Node and remove Parent
            node.Val = smallestValue;
            node.Right = this.remove(node.Right, smallestValue);
            return node;
        }
        
        if(n < node.Val){
            node.Left = this.remove(node.Left, n);
            return node;
        }

        node.Right = this.remove(node.Right, n);        
        return node;
    }

    private find(node: BTN, n: number) : boolean {
        if(!node)
            return false;

        if(node.Val == n)
            return true;

        return n < node.Val ? this.find(node.Left, n) : this.find(node.Right, n);
    }

    private printTree(node: BTN, spaces: number) {
        if(!node)
         return;
        
        spaces += 6;

        this.printTree(node.Right, spaces);

        let blankSpaces = "";
        for(let i = 6; i < spaces; i++){
            blankSpaces += " ";
        }
        console.log(`${blankSpaces} ${node.Val}`);

        this.printTree(node.Left, spaces);        
    }

    //public methods
    public add(numbers: number[]){
        numbers.forEach(n => {
            this.rootNode = this.insert(this.rootNode, n);
        });
    }

    public delete(number: number){
        this.rootNode = this.remove(this.rootNode, number);
    }

    public deleteByArray(numbers: number[]){
        numbers.forEach(n => {
            this.rootNode = this.remove(this.rootNode, n);
        });
    }

    public contains(number: number) : boolean {
        return this.find(this.rootNode, number);
    }

    public print(){
        console.log(this.rootNode);
        this.printTree(this.rootNode, 0);
    }

    public getRootElement() : BTN{
        return this.rootNode;
    }

    //static methods
    static compareTrees(nodeRootA: BTN, nodeRootB: BTN) : boolean{
        if (!nodeRootA && !nodeRootB)
            return true;
        
        if(nodeRootA && nodeRootB) //compare
            return (nodeRootA.Val === nodeRootB.Val 
                    && this.compareTrees(nodeRootA.Left, nodeRootB.Left)
                    && this.compareTrees(nodeRootA.Right, nodeRootB.Right)
                    ) ? true : false;

        return false;
    }
}
/***************************************/
console.log('Adler Pagliarini - 2018-07-16')
console.log('');
console.log('******************1-BTS*********************');
let binaryTreeA = new BinaryTree();
let binaryTreeB = new BinaryTree();

binaryTreeA.add([10,9,12,13,2,3,1]);
binaryTreeB.add([10,9,12,13,2,3,1]);

binaryTreeA.print();
binaryTreeB.print();

if(BinaryTree.compareTrees(binaryTreeA.getRootElement(), binaryTreeB.getRootElement()))
    console.log('BTreeA && BTreeB identical' )
else
    console.log(`BTreeA && BTreeB NOT identical`);
console.log('');


console.log('Removing element 2 from the tree!');
binaryTreeA.delete(2);
if(BinaryTree.compareTrees(binaryTreeA.getRootElement(), binaryTreeB.getRootElement()))
    console.log('BTreeA && BTreeB identical' )
else
    console.log(`BTreeA && BTreeB NOT identical`);

binaryTreeA.print();
binaryTreeB.print();
console.log('');



console.log('Removing all elements from the tree!');
binaryTreeA.deleteByArray([10,9,12,13,2,3,1]);
binaryTreeB.deleteByArray([10,9,12,13,2,3,1]);
binaryTreeA.print();
binaryTreeB.print();
console.log('');

console.log('******************1-BTS*********************');
console.log('');
/***************************************/