// add to array
const nums = [1]
nums.push(12)
nums.unshift(3)
console.log(nums) // Will print [3, 1, 12]

const nums2 = [99, 199, 299]
// Add a new item at the second position without deleting any existing items
nums2.splice(1, 0, 399)
console.log(nums2) // Will print [99, 399, 199, 299]

// remove from array
const nums3 = [10, 20, 30, 40]
nums3.pop()
nums3.pop()
nums3.shift()
console.log(nums3) // Will print [20]

// changing array
const nums4 = [10, 20, 30, 40]
// Use bracket notation to replace the last item
nums4[3] = 1000
// Use splice to replace the first item with 2000
nums4.splice(0, 1, 2000)
console.log(nums4) // Will print [2000, 20, 30, 1000]