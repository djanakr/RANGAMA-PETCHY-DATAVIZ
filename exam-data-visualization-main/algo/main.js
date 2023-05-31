function twoSum(numbers, targetSum) {
    const map = new Map();
  
    for (let i = 0; i < numbers.length; i++) {
      const complement = targetSum - numbers[i];
  
      if (map.has(complement)) {
        return [map.get(complement), i];
      }
  
      map.set(numbers[i], i);
    }
  
    return [];
  }
  
  // Exemples
  const numbers2 = [3, 2, 4];
  const targetSum2 = 6;
  console.log(twoSum(numbers2, targetSum2)); // Résultat attendu: [1, 2]

  const numbers1 = [2, 7, 9, 13];
  const targetSum1 = 9;
  console.log(twoSum(numbers1, targetSum1)); // Résultat attendu: [0, 1]