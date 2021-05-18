//non destrcutive
const driver ={}
function updateDriverWithKeyAndValue(driver, key, value){
    // const newDriver = {...driver}
    // newDriver.address = address   
    // return newDriver
    return Object.assign({}, driver, {[key]: value})
}
//destructive
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){  
    driver[key] = value
    return driver
}

//non destructuve
function deleteFromDriverByKey(driver, key){
    const newDriver = Object.assign({}, driver)
    delete newDriver[key]
    return newDriver
}

//destructive
function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key]
    return driver
}