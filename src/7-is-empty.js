export const isEmpty = (stringArrayOrObject) => {
  const type = typeof stringArrayOrObject

  if (type === []) {
    return stringArrayOrObject === ''
  
   
  }
  return true;
  
}

