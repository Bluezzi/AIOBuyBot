//AIOBOT

//User Inputs
//const { responsiveArray } = require('antd/lib/_util/responsiveObserve')
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function question(message) {
    return new Promise(function (resolve, _reject) {
        rl.question(message, function (userInput) {
            return resolve(userInput);
        });
    });
}

//Email Sender
const nodemailer = require("nodemailer");

//Stores
const STORE_MAP = new Map([
    ['bb', 'BestBuy'],
    ['gs', 'GameStop'],
    ['n', 'Nike'],
    ['a', 'Adidas'],
    ['fl', 'FootLocker'],
]);

function getKeys(map) {
    return [...map.keys()];
}

function getValues(map) {
    return [...map.values()];
}

//Function that handles shipping information
function loadShippingInfoFromEnvironmentVariables() {
    return [process.env.FIRSTNAME, process.env.LASTNAME, process.env.ADDRESS, process.env.APTNUMBER, process.env.CITY, process.env.STATE, process.env.ZIPCODE];
}
//Function that handles billing information
function loadBillingInfoFromEnvironmentVariables() {
    return [process.env.FIRSTNAME, process.env.LASTNAME, process.env.CARDNUMBER, process.env.EXPDATE, process.env.CCV];
}

// prompt user for specific input
async function promptForCommand(promptMessage, validCommands, invalidCallback) {
    while (true) {
        const rawInput = await question(promptMessage);
        const cleanInput = rawInput.trim().toLowerCase();

        if (validCommands.includes(cleanInput)) {
            return cleanInput;
        } else {
            invalidCallback(cleanInput);
        }
    }
}

// prompt user for number
async function promptForNumber(promptMessage, validateCallback, invalidCallback) {
    while (true) {
        const rawInput = await question(promptMessage);
        const cleanInput = Number.parseFloat(rawInput.trim());

        if (Number.isNaN(cleanInput)) {
            console.log(`'${rawInput.trim()}' is not number!`);
        } else {
            if (validateCallback(cleanInput)) {
                return cleanInput;
            } else {
                invalidCallback();
            }
        }
    }
}

async function promptForPositiveNumber(promptMessage) {
    return await promptForNumber(
        promptMessage,
        (num) => num > 0,
        (_) => console.log('Please input a value higher than 0')
    );
}

// general prompt
async function prompt(promptMessage) {
    const rawInput = await question(promptMessage);
    return rawInput.trim().toLowerCase();
}

//Function that emails the user about inventory and restock info -/-LINE 234-\-
async function email_sender(store, product, product_amount, restock_info) {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    // let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: "gumythebot@gmail.com",//testAccount.user, // generated ethereal user
            pass: "Masoncade1"//testAccount.pass, // generated ethereal password
        },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"GUMY Bot <3" <gumythebot@gmail.com>', // sender address
        to: `${process.env.USEREMAIL}`, // list of receivers
        subject: `${product} Inventory/Restock Information (From: ${store})`, // Subject line
        text: `${product} in stock: ${product_amount} \n ${product} Restock Info: ${restock_info}`, // plain text body
        //html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
}

//AIO Inventory
function queryProductStockAmount(selectedStore, selectedProduct) {
    //Function that checks desired products inventory
    if ((['bb'].includes(selectedStore))) {
        //BestBuy
        //code to check product inventory
    } else if ((['gs'].includes(selectedStore))) {
        //GameStop
        //code to check product inventory
    } else if ((['n'].includes(selectedStore))) {
        //Nike
        //code to check product inventory
    } else if ((['a'].includes(selectedStore))) {
        //Adidas
        //code to check product inventory
    } else {
        ((['fl'].includes(selectedStore)))
        //Footlocker
        //code to check product inventory
    }
}

//AIO Restock
async function product_restock_info(selectedStore, selectedProduct) {
    //Function that checks the restock info
    if ((['bb'].includes(selectedStore))) {
        //BestBuy
        //code to check restock info here
    } else if ((['gs'].includes(selectedStore))) {
        //GameStop
        //code to check restock info here
    } else if ((['n'].includes(selectedStore))) {
        //Nike
        //code to check restock info here
    } else if ((['a'].includes(selectedStore))) {
        //Adidas
        //code to check restock info here
    } else {
        ((['fl'].includes(selectedStore)))
        //Footlocker
        //code to check restock info here
    }
}

//AIO Buy Bot
async function tryBuyProduct(selectedStore, selectedProduct, productSize, productPriceCap, quantityToBuy, shippingInfo, billingInfo) {
    //Function that buys product
    if ((['bb'].includes(selectedStore))) {
        //BestBuy
        //code to buy product here
    } else if ((['gs'].includes(selectedStore))) {
        //GameStop
        //code to buy product here
    } else if ((['n'].includes(selectedStore))) {
        //Nike
        //code to buy product here
    } else if ((['a'].includes(selectedStore))) {
        //Adidas
        //code to buy product here
    } else {
        ((['fl'].includes(selectedStore)))
        //Footlocker
        //code to buy product here
    }
}

//Runs the whole program, Inventory Amounts, Restock Info, and Buying
async function main() {
    console.log(`Stores Available:\n${getValues(STORE_MAP).join(', ')}\n*${getKeys(STORE_MAP).join(', ')}*`);

    //Shipping and billing Information
    const shippingInfo = loadShippingInfoFromEnvironmentVariables();
    const billingInfo = loadBillingInfoFromEnvironmentVariables();

    //BOT Functions
    //Store Input
    const selectedStore = await promptForCommand(
        'Select a store: ',
        getKeys(STORE_MAP),
        (invalidCommand) => console.log(`'${invalidCommand}' is not a valid store\n`)
    );
    console.log(`Selected store: ${STORE_MAP.get(selectedStore)}`);

    //Product Input
    const selectedProduct = await prompt('Enter a product name to query: ');
    console.log(`Product name to query: ${selectedProduct}`);

    //Inventory/Restock or Buy Product
    const ACTION_MAP = new Map([
        ['ir', 'Inventory/Restock Info'],
        ['bp', 'Buy Product'],
    ]);
    const selectedAction = await promptForCommand(
        'View inventory/restock info or attempt to buy product ("IR" or "BP"): ',
        getKeys(ACTION_MAP),
        (invalidCommand) => console.log(`'${invalidCommand}' is not a valid action\n`)
    );
    console.log(`Selected action: ${ACTION_MAP.get(selectedAction)}`);

    switch (selectedAction) {
        case 'ir':
            //Run the function for checking the desired products inventory/restock info
            {
                const productStock = await queryProductStockAmount(selectedStore, selectedProduct);
                console.log(`${selectedProduct} in stock: ${productStock}`);
                const restock_info = await product_restock_info(selectedStore, selectedProduct);
                console.log(`${selectedProduct} Restock Info: ${restock_info}`);

                //FUNCTION FOR SENDING EMAILS - FIX THE EMAIL FUNCTION
                //const send_info_email = await email_sender(selectedStore, selectedProduct);
                console.log(`Inventory and Restock Info has been sent via e-mail`);
            }
            break;
        case 'bp':
            //Runs the Functions for buying the desired product (loops until product comes in stock)
            {
                // product size required
                if (['n', 'a', 'fl'].includes(selectedStore)) {
                    const productSize = await promptForPositiveNumber('Please pick the size you would like to purchase: ');
                    console.log(`Product size: ${productSize}`);

                    //After asking for size proceeds to run the buy portion
                    const quantityToBuy = await promptForPositiveNumber('How many would you like to purchase? ');
                    console.log(`Amount to purchase: ${quantityToBuy}`);
                    const productPriceCap = await promptForPositiveNumber('Set max budget: ');
                    console.log(`Product budget: ${productPriceCap}`);

                    let currentPurchaseCount = 0;
                    // need some kind of function
                    while (currentPurchaseCount < quantityToBuy) {
                        const productStockAvailable = queryProductStockAmount(selectedStore, selectedProduct);
                        if (productStockAvailable === 0) {
                            console.log(`${selectedProduct} not in stock, retrying \n *LEAVE PROGRAM RUNNING*`);
                        } else {
                            console.log(`${selectedProduct} in stock: ${productStockAvailable}`);
                            console.log(`attempting to buy ${quantityToBuy}`);
                            const numberBought = await tryBuyProduct(selectedStore, selectedProduct, product_size, productPriceCap, quantityToBuy, shippingInfo, billingInfo);
                            if (numberBought > 0) {
                                console.log(`${selectedProduct}'s purchased: ${numberBought}`);
                                currentPurchaseCount += numberBought;
                            } else {
                                console.log(`could not buy ${selectedProduct}`);
                            }
                        }
                    }

                } else {
                    const quantityToBuy = await promptForPositiveNumber('How many would you like to purchase? ');
                    console.log(`Amount to purchase: ${quantityToBuy}`);
                    const productPriceCap = await promptForPositiveNumber('Set max budget: ');
                    console.log(`Product budget: ${productPriceCap}`);

                    let currentPurchaseCount = 0;
                    // need some kind of function
                    while (currentPurchaseCount < quantityToBuy) {
                        const productStockAvailable = queryProductStockAmount(selectedStore, selectedProduct);
                        if (productStockAvailable === 0) {
                            console.log(`${selectedProduct} not in stock, retrying \n *LEAVE PROGRAM RUNNING*`);
                        } else {
                            console.log(`${selectedProduct} in stock: ${productStockAvailable}`);
                            console.log(`attempting to buy ${quantityToBuy}`);
                            const numberBought = await tryBuyProduct(selectedStore, selectedProduct, product_size, productPriceCap, quantityToBuy, shippingInfo, billingInfo);
                            if (numberBought > 0) {
                                console.log(`${selectedProduct}'s purchased: ${numberBought}`);
                                currentPurchaseCount += numberBought;
                            } else {
                                console.log(`could not buy ${selectedProduct}`);
                            }
                        }
                    }
                }
            }
            break;
    }
}

main().catch((error) => {
    console.log(`Program crashed because: ${error.stack}`);
});
