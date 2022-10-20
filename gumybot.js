//AIOBOT

//User Input
const { responsiveArray } = require('antd/lib/_util/responsiveObserve')
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Email Sender
//Import Here

//Function that handles shipping information
async function shipping_info() {
    const shippinginfolist = [
        process.env.FIRSTNAME,
        process.env.LASTNAME,
        process.env.ADDRESS,
        process.env.APTNUMBER,
        process.env.CITY,
        process.env.STATE,
        process.env.ZIPCODE,
    ]
    return shippinginfolist
}


//Function that handles billing information
async function billing_info() {
    const billinginfolist = [
        process.env.FIRSTNAME,
        process.env.LASTNAME,
        process.env.CARDNUMBER,
        process.env.EXPDATE,
        process.env.CCV,
    ]
    return billinginfolist
}


//Function that stores the userinput store
const userinput_store = () => {
    return new Promise((resolve, reject) => {
        rl.question(`Please select a store \n`, (selected_store) => {
            console.log(`Selected Store: ${selected_store}`)
            selected_store = selected_store.toLowerCase()
            let store_input_list = [
                "bb",
                "gs",
                "n",
                "a",
                "fl",
            ]
            if (store_input_list.includes(selected_store)) {
                resolve(selected_store)
            }
            else {
                //(!store_input_list.includes(selected_store))
                reject(new Error(`${selected_store} is an invalid store`))
                rl.question();
            }
        })
    })
}


//Function that stores the userinput Product
const userinput_product = () => {
    return new Promise((resolve, reject) => {
        rl.question(`Please pick a product \n`, (selected_product) => {
            if ((selected_product)) {
                resolve(selected_product)
            }
            console.log(`Selected Product: ${selected_product}`)
        })
    })
}


//Section Pick
//Function that lets you pick between the Inventory/Restock Tracker and the buy portion
const userinput_inventoryrestock_pr_buy = () => {
    return new Promise((resolve, reject) => {
        rl.question(`Inventory/Restock Info or Buy Product (Select: "IR" or "BP")\n`, (ir_or_bp) => {
            if ((ir_or_bp)) {
                resolve(ir_or_bp)
            }
            console.log(`Initialized Action: ${ir_or_bp}`)
        })
    })
}


//function that sets the product size
const userinput_product_size = () => {
    return new Promise((resolve, reject) => {
        rl.question(`Please pick the size you would like to purchase \n`, (size_of_the_product) => {
            if (isNaN(size_of_the_product)) {
                reject(new Error("Please input a value higher than ZERO"))
            } else if (size_of_the_product < 0) {
                reject(new Error("Please input a value higher than ZERO"))
            } else {
                resolve(size_of_the_product)
            }
            console.log(`Product Size: ${size_of_the_product}`)
        })
    })
}


//Function that sets a price cap
const userinput_price_cap = () => {
    return new Promise((resolve, reject) => {
        rl.question(`Please pick the size you would like to purchase \n`, (price_cap_of_the_product) => {
            if (isNaN(price_cap_of_the_product)) {
                reject(new Error("Please input a value higher than ZERO"))
            } else if (price_cap_of_the_product < 0) {
                reject(new Error("Please input a value higher than ZERO"))
            } else {
                resolve(price_cap_of_the_product)
            }
            console.log(`Product Price Cap: ${price_cap_of_the_product}`)
        })
    })
}


//Function that sets the quantity to buy
const userinput_quantity_to_buy = () => {
    return new Promise((resolve, reject) => {
        rl.question(`How many would you like to purchase? \n`, (amount_to_purchase) => {
            if (isNaN(amount_to_purchase)) {
                reject(new Error("Please input a value higher than ZERO"))
            } else if (amount_to_purchase < 0) {
                reject(new Error("Please input a value higher than ZERO"))
            } else {
                resolve(amount_to_purchase)
            }
            console.log(`Amount to purchase: ${amount_to_purchase}`)
        })
    })
}


//Function that emails the user about inventory and restock info
async function email_sender(store, product) {
    //code to send the email here
}


//AIO Inventory 
async function product_stock_amount(store, product) {
    //Best Buy (store) (product)
    //Function that checks desired products inventory
    if (store == "BestBuy", "bestbuy", "bb", "BB") {
        //code to check product inventory
    } else {
    }

    //GameStop (store) (product)
    //Function that checks desired products inventory
    if (store == "GameStop", "gamestop", "gs", "GS") {
        //code to check product inventory
    } else {
    }

    //Nike (store) (product)
    //Function that checks desired products inventory
    if (store == "Nike", "nike", "N", "n") {
        //code to check product inventory
    } else {
    }

    //Adidas (store) (product)
    //Function that checks desired products inventory
    if (store == "Adidas", "adidas", "A", "a") {
        //code to check product inventory
    } else {
    }

    //Footlocker (store) (product)
    //Function that checks desired products inventory
    if (store == "FootLocker", "footlocker", "fl", "FL") {
        //code to check product inventory
    } else {
    }
}


//AIO Restock
async function product_restock_info(store, product) {
    //Best Buy (store) (product)
    //Function that checks the restock info
    if (store == "BestBuy", "bestbuy", "bb", "BB") {
        //code to check restock info here
    } else {
    }

    //GameStop (store) (produc
    //Function that checks the restock info
    if (store == "GameStop", "gamestop", "gs", "GS") {
        //code to check restock info here
    } else {
    }

    //Nike (store) (product)
    //Function that checks the restock info
    if (store == "Nike", "nike", "N", "n") {
        //code to check restock info here
    } else {
    }

    //Adidas (store) (product)
    //Function that checks the restock info
    if (store == "Adidas", "adidas", "A", "a") {
        //code to check restock info here
    } else {
    }

    //Footlocker (store) (product)
    //Function that checks the restock info
    if (store == "FootLocker", "footlocker", "fl", "FL") {
        //code to check restock info here
    } else {
    }
}


//AIO Buy Bot
async function buy_product(store, product, product_size, product_price_cap, quantity_to_buy, shippinginfo, billinginfo) {
    //Best Buy (store) (product)
    //Function that buys product
    if (store == "BestBuy", "bestbuy", "bb", "BB") {
        //code to buy product here
    } else {
    }

    //GameStop 
    //Function that buys product
    if (store == "GameStop", "gamestop", "gs", "GS") {
        //code to buy product here
    } else {
    }

    //Nike
    //Function that buys product
    if (store == "Nike", "nike", "N", "n") {
        //code to buy product here
    } else {
    }

    //Adidas 
    //Function that buys product
    if (store == "Adidas", "adidas", "A", "a") {
        //code to buy product here
    } else {
    }

    //Footlocker
    //Function that buys product
    if (store == "FootLocker", "footlocker", "fl", "FL") {
        //code to buy product here
    } else {
    }
}


//Runs the whole program, Inventory Amounts, Restock Info, and Buying
async function main() {
    console.log('Stores Available: \n BestBuy, GameStop, Nike, Adidas, FootLocker \n *BB, GS, N, A, FL*')
    //Shipping and billing Information
    let shippinginfo = await shipping_info();
    let billinginfo = await billing_info();

    //BOT Functions
    //Store Input
    let store = await userinput_store();

    //Product Input
    let product = await userinput_product();

    //Inventory/Restock or Buy Product
    let action_command = await userinput_inventoryrestock_pr_buy();
    let ir_action_command_list = [
        "ir",
        "IR",
    ]
    let buy_action_command_list = [
        "bp",
        "BP",
    ]
    if (ir_action_command_list.includes(action_command.toLowerCase())) {
        //Run the function for checking the desired products inventory/restock info
        let product_amount = await product_stock_amount(store, product);
        console.log(`${product} in stock: ${product_amount}`)
        let restock_info = await product_restock_info(store, product);
        console.log(`${product} Restock Info: ${restock_info}`)
        let send_info_email = await email_sender(store, product);
        console.log(`Inventory and Restock Info has been sent via e-mail`)
    } else {
        (buy_action_command_list.includes(action_command.toLowerCase()))
        //Runs the Functions for buying the desired product (loops until product comes in stock)
        
        //Prudct size if applicable 
        if (store == "n,", "a", "fl") {
            let product_size = await userinput_product_size();
        } else {
            let quantity_to_buy = await userinput_quantity_to_buy();
            let product_price_cap = await userinput_price_cap();
            if (quantity_to_buy > product_amount)
                return quantity_to_buy = product_amount
            while (product_amount == 0) {
                console.log(`${product} not in stock, retrying \n *LEAVE PROGRAM RUNNING*`)
            } if (product_amount > 1) {
                console.log(`${product} in stock, attempting to Buy`)
                await buy_product(store, product, product_size, product_price_cap, quantity_to_buy, shippinginfo, billinginfo);
            } console.log(`${product}'s Bought: ${quantity_to_buy}`)
        }
    }
}

main().catch((error) => {
    console.log(`Program crashed because: ${error.stack}`);
});
