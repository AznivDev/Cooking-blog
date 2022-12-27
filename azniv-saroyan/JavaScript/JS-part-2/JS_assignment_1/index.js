// Binary tree convert to object
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
let deep = []
let arrayToBinaryTree = function (arr) {
    if (arr.length === 0) return null
    if (arr.length === 1) return new TreeNode(arr[0])
    deep.push("deep")
    let middle = Math.floor(arr.length / 2)
    let root = new TreeNode(arr[middle])

    let leftSubtree = arr.slice(0, middle)
    root.left = arrayToBinaryTree(leftSubtree)

    let rightSubtree = arr.slice(middle + 1, arr.length)
    root.right = arrayToBinaryTree(rightSubtree)
    return deep.length
}
// console.log(arrayToBinaryTree([3, 9, 20, null, null, 15, 7]))
//compare objects
function isEqual(a, b) {
    if (typeof a !== typeof b) {
      return false
    }
    if (typeof a !== 'object'|| a === null || b === null ) {
      return a === b
    }
    if (Object.keys(a).length !== Object.keys(b).length) {
      return false
    }
    for (const key of Object.keys(a)) {
      if (!isEqual(a[key], b[key])) {
        return false
      }
    }
    return true
  }
let object1 = {
    a: 5,
    b: 6,
    j: null
}
let object2 = {
    a: 5,
    b: 6,
    j: "k"
}
console.log(isEqual(object1, object2))
//Convert integer to roman number
const convertToRoman = (num) => {
    let result = ""
    while(num) {
        if(num >= 1000) {
            result += "M"
            num -= 1000
        } else if(num >= 500) {
            if(num >= 900) {
                result += "CM"
                num -= 900
            } else {
                result += "D"
                num -= 500
            }
            } else if(num >= 100) {
                if(num >= 400) {
                result += "CD"
                num -= 400
                } else {
                result += "C"
                num -= 100
                }
            } else if(num >= 50) {
                if(num >= 90) {
                result += "XC"
                num -= 90
                } else {
                result += "L"
                num -= 50
                }
            } else if(num >= 10) {
                if(num >= 40) {
                result += "XL"
                num -= 40
                } else {
                result += "X"
                num -= 10; 
                }
            } else if(num >= 5) {
                if(num >= 9) {
                result += "IX"
                num -= 9
            } else { 
                result += "V"
                num -= 5
                }
            } else {
                if(num >= 4){
                result += "IV"
                num -= 4
            } else {
                result += "I"
                num -= 1
            }
        }
    }
    return result
}
console.log(convertToRoman(1523))
//** Devide/multiply number to/for 2 using bitwise operators Calculate area of circle
function multiplyBitwise(number) {
    return number << 1
}
function devideBitwise(number) {
    return number >> 1
}
function calculateArea(r) {
    let result = 0
    let x = r, y = r
    while (y != 0) {
        if (y & 1) {
            result += x
        }
        x <<= 1
        y >>= 1
    }
    let area = result * Math.PI
    return area
}
console.log(multiplyBitwise(5), devideBitwise(5), calculateArea(5))



