
const OPERATIONS = {
    sum: '+',
    subtract: '-',
    multiply: '*',
    division: '/'
};

function calculate ({a, b, operation}) {
    let result = null;

    switch (operation) {
        case OPERATIONS.sum:
            result = sum (a, b);
            break;
    
        case OPERATIONS.subtract:
            result = subtract (a, b);
            break;
        
        case OPERATIONS.multiply:
            result = multiply (a, b);
            break;
            
        case OPERATIONS.division:
            result = division (a, b);
            break;    
        
        default: 
            break;    
    }
    
    return result;
}