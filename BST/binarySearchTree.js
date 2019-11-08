/* eslint-disable require-jsdoc */
"use strict";

// eslint-disable-next-line no-redeclare
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    readIntoArray(){
       // debugger
        if(this.left!==null){
            this.left.readIntoArray()
        }
        return this.value
       // console.log( this.value)
        if(this.right!==null){
             this.right.readIntoArray()
        }
       
    }

    max() {
        if (this.right !== null) {
            return this.right.max();
        }
        else {
            return this.value;
        }
    }
    add(element) {
        if (element > this.value) {
            if (this.right === null) {
                this.right = new Node(element);
            }
            else {
                this.right.add(element);
            }
        }
        else {
            if (this.left === null) {
                this.left = new Node(element);
            }
            else {
                this.left.add(element);
            }
        }
    }
    contains(element) {
        if (element === this.value) {
            return true;
        }
        if (element > this.value) {
            if (this.right === null) {
                return false;
            }
            else {
                return this.right.contains(element);
            }
        }
        else {
            if (this.left === null) {
                return false;
            }
            else {
                return this.left.contains(element);
            }
        }
    }
    remove(parent, element) {
        if (element < this.value) {
            if (this.left === null) {
                return false;
            }
            else {
                return this.left.remove(this, element);
            }
        }
        else if (element > this.value) {
            if (this.right === null) {
                return false;
            }
            else {
                return this.right.remove(this, element);
            }
        }
        else { //if (element === this.value) {
            // simply remove this node if it doesn't have children 
            if (this.left === null && this.right === null) {
                if (parent.left === this) {
                    parent.left = null;
                }
                else if (parent.right === this) {
                    parent.right = null;
                }
            }
            // if there is one child, put it in our place
            else if (this.left !== null && this.right === null) {
                    this.value = this.left.value;
                    this.right = this.left.right;
                    this.left = this.left.left;
                    return true;
            } else if (this.right !== null && this.left === null) {
                    this.value = this.right.value;
                    this.left = this.right.left;
                    this.right = this.right.right;
                    return true;
            } else if (this.left !== null && this.right !== null) {
                // if there are two children copy the largest of the small and prune that
                let largest = this.left.max();
                this.value = largest;
                this.left.remove(this, largest);
            }
            return true;
        } // end of "if this is the value to remove"
    } 
    // end of remove method
   
} // end of Node class

class RootNode extends Node {
    constructor() {
        super(null);
    }
    add(element) {
        if (this.value === null) {
            this.value = element;
            return;
        }
        return super.add(element);
    }
    remove(element) {
        if (this.value === element && this.left === null && this.right === null) {
            this.value = null;
            return true;
        }
        else {
            return super.remove(this, element);
        }
    }
}

// eslint-disable-next-line no-unused-vars
class BinarySearchTree {
    constructor() {
        this.root = new RootNode();
    }
    add(element) {
        this.root.add(element);
    }
    contains(element) {
        return this.root.contains(element);
    }
    remove(element) {
        return this.root.remove(element);
    }

   min(){//**try with recursion ??? */
       let node=this.root
       while(node.left!==null){
           node=node.left
       }
       return node.value
}
readIntoArray(){
    return this.root.readIntoArray()
}
insertAll(arr){
    for(let i=0;i<arr.length;i++){
        this.root.add(arr[i])
    }
}
updateAdd(arr){
arr.sort(comparator)
for(let i=0;i<arr.length;i++){
    this.root.add(arr[i])
}
    
}

    }

    class Employee {
        /**
        *
        * @param {String} name name of employee
        * @param {Number} salary monthly salary
        * @param {Number} year hired on year
        * @param {Number} month hired on month
        * @param {Number} day hired on day
        */
        constructor(name, salary, year, month, day) {
        this.name = name;
        this.salary = salary;
        this.hireDate = new Date(year, month - 1, day);
        }
        comparator (A,b){
            if(A.name>b.name){
                return 1;

            }
            else if(A.name<b.name){
                return-1;
            }
        }
        }
        let employees = [
        new Employee("George", 40000, 1996, 11, 5),
        new Employee("Dave", 50000, 2000, 1, 3),
        new Employee("Richard", 45000, 2001, 2, 7)
        ];

 


