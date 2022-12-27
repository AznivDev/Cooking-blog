let arr = [1, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4];

function findBigestNumber (arr) {
    //Տրված խնդիրը binarySearch -ով լուծելու համար նախ գտել եմ զանգվածի երկարության կեսը։
    let middle = Math.floor(arr.length / 2);
    //Դրա շնորհիվ հասանելիւթյուն ունեմ զանգվածի մեջտեղի item-ին։ 
    //Ապա այդ մեջտեղի item-ի արժեքը համեմատել եմ իրեն նախորդող և հաջորդող item-ների 
    //արժեքների հետ և եթե այն բավարարում է խնդրի պայմաններին (նախորդ item-ի արժեքից մեծ է
    // հաջորդից՝ ևս), ապա դա նշանակում է, որ անհրաժեշտ թիվը գտել եմ և վերադարձնում եմ այդ թիվը։
    if(arr[middle -1] < arr[middle] && arr[middle] > arr[middle + 1]) {
        return arr[middle];
    } else {
    //Եթե մեջտեղի item-ի արժեքը մեծ է նախորդ item-ի արժեքից և փոքր է հաջորդող item-ի արժեքից
    //ուրեմն փնտրվող թիվը գտնվում է մեջտեղի item-ից աջ։
        if(arr[middle -1] < arr[middle] && arr[middle] < arr[middle + 1]) {
    //Ռեկուրսիայի միջոցով զանվածի երկրերդ կեսը որպես արգումենտ տալիս ենք ֆունկցիային։
            return findBigestNumber(arr.slice(middle));
    //Հակառակ դեպքում թիվը գտնվում է մեջտեղի item-ից ձախ։
        } else if (arr[middle -1] > arr[middle] && arr[middle] > arr[middle + 1]) {
    //Ռեկուրսիայի միջոցով զանվածի առաջին կեսը որպես արգումենտ տալիս ենք ֆունկցիային։
            return findBigestNumber(arr.slice(0, middle));
        }
    }
} // complexiy - O(log n)
console.log(findBigestNumber(arr));