module.exports = async function (context, req) {
    var objprod = {   "Type":"Products",
    "data": {
        "features": [
            {
                "featureType": "UNLIMITED_TXNS",
                "additionalInfo": "The first staff assisted or telephone banking withdrawals when using an operator (including cheques issued on your account and cashed over-the-counter at a mfkBank branch) are free. Every additional staff assisted withdrawal will have a charge of $3.00 each.",
                "additionalInfoUri": "https://www.mfkbank.com.au/banking/goal-saver.html"
            },
            {
                "featureType": "DIGITAL_BANKING",
                "additionalInfo": "Wherever you are in the world, mfkBank gives you the choice and control to securely manage all of your accounts on a range of devices, the way you want.",
                "additionalInfoUri": "https://www.mfkbank.com.au/digital-banking.html"
            },
            {
                "featureType": "NPP_ENABLED"
            },
            {
                "featureType": "BILL_PAYMENT",
                "additionalValue": "BPAY View",
                "additionalInfo": "See, track and easily pay your bills online in NetBank or on the go in the mfkBank app.",
                "additionalInfoUri": "https://www.mfkbank.com.au/digital-banking/bpay-view.html"
            },
            {
                "featureType": "OTHER",
                "additionalValue": "Goal Tracker",
                "additionalInfo": "Whether you have a savings goal in mind or want to build a buffer for those 'just in case' moments, Goal Tracker in the mfkBank app helps you set and reach your goals.",
                "additionalInfoUri": "https://www.mfkbank.com.au/digital-banking/goal-tracker.html"
            }
        ],
        "eligibility": [
            {
                "eligibilityType": "NATURAL_PERSON"
            },
            {
                "eligibilityType": "MIN_AGE",
                "additionalValue": "18"
            },
            {
                "eligibilityType": "OTHER",
                "additionalValue": "Other product holdings",
                "additionalInfo": "Don't already have a GoalSaver account in the same account name."
            }
        ],
        "fees": [
            {
                "name": "Account fee",
                "feeType": "PERIODIC",
                "amount": "0.00",
                "currency": "AUD",
                "additionalValue": "P1M"
            },
            {
                "name": "Staff assisted withdrawals",
                "feeType": "EVENT",
                "amount": "3.00",
                "currency": "AUD",
                "discounts": [
                    {
                        "description": "We will waive 1 assisted withdrawal fee per month (not available through ATM, EFTPOS, Agency, Cheque withdrawals)",
                        "discountType": "ELIGIBILITY_ONLY",
                        "amount": "3.00",
                        "eligibility": [
                            {
                                "discountEligibilityType": "OTHER",
                                "additionalInfo": "We will waive 1 assisted withdrawal fee per month (not available through ATM, EFTPOS, Agency, Cheque withdrawals)"
                            }
                        ]
                    }
                ],
                "additionalInfo": "A fee charged on some accounts when you take money out: At a mfkBank branch, a post office, agency, with telephone banking if using an operator or by cashing a cheque "
            },
            {
                "name": "Rejected transaction fee",
                "feeType": "EVENT",
                "amount": "2.50",
                "currency": "AUD",
                "additionalInfo": "If a payment transaction is rejected due to invalid destination account details"
            },
            {
                "name": "Paper Statement Fee",
                "feeType": "EVENT",
                "amount": "0.00",
                "additionalValue": "fees do not apply for statements issued as per the standard statement frequency"
            },
            {
                "name": "Paper Statement Fee",
                "feeType": "EVENT",
                "amount": "2.50",
                "additionalValue": "A fee charged when you ask us to give you an additional account statement outside the standard cycle. A fee charged when you ask us to issue past statements, or ordered statements."
            }
        ],
        "depositRates": [
            {
                "depositRateType": "VARIABLE",
                "rate": "0.001",
                "calculationFrequency": "P1D",
                "additionalInfo": "The standard rate. Applies on the portion of the balance $1,000,000 and over and/or if the bonus conditions are not met"
            },
            {
                "depositRateType": "BONUS",
                "rate": "0.004",
                "calculationFrequency": "P1D",
                "tiers": [
                    {
                        "name": "Amount",
                        "unitOfMeasure": "DOLLAR",
                        "minimumValue": 0,
                        "maximumValue": 49999,
                        "rateApplicationMethod": "PER_TIER"
                    }
                ],
                "additionalValue": "We pay bonus interest on credit balances below $1,000,000 if you: 1) Deposit at least $200 each calendar month, excluding interest and bank-initiated transaction; 2) Make no withdrawals each month. Interest is paid on the portion of the balance that falls within each balance band."
            },
            {
                "depositRateType": "BONUS",
                "rate": "0.009",
                "calculationFrequency": "P1D",
                "tiers": [
                    {
                        "name": "Amount",
                        "unitOfMeasure": "DOLLAR",
                        "minimumValue": 50000,
                        "maximumValue": 249999,
                        "rateApplicationMethod": "PER_TIER"
                    }
                ],
                "additionalValue": "We pay bonus interest on credit balances below $1,000,000 if you: 1) Deposit at least $200 each calendar month, excluding interest and bank-initiated transaction; 2) Make no withdrawals each month. Interest is paid on the portion of the balance that falls within each balance band."
            },
            {
                "depositRateType": "BONUS",
                "rate": "0.009",
                "calculationFrequency": "P1D",
                "tiers": [
                    {
                        "name": "Amount",
                        "unitOfMeasure": "DOLLAR",
                        "minimumValue": 250000,
                        "maximumValue": 999999,
                        "rateApplicationMethod": "PER_TIER"
                    }
                ],
                "additionalValue": "We pay bonus interest on credit balances below $1,000,000 if you: 1) Deposit at least $200 each calendar month, excluding interest and bank-initiated transaction; 2) Make no withdrawals each month. Interest is paid on the portion of the balance that falls within each balance band."
            }
        ],
        "productId": "72f214498c7f47a98fe59b794e7c01ab",
        "effectiveFrom": "2019-07-23T00:00:01Z",
        "effectiveTo": "9999-12-30T13:00:00Z",
        "lastUpdated": "2019-07-18T14:38:09Z",
        "productCategory": "TRANS_AND_SAVINGS_ACCOUNTS",
        "name": "GoalSaver",
        "description": "Be rewarded with a variable bonus rate for saving regularly each month.",
        "brand": "CBA",
        "brandName": "mfkBank",
        "applicationUri": "https://www.mfkbank.com.au/banking/goal-saver.html#apply",
        "isTailored": false,
        "additionalInformation": {
            "overviewUri": "https://www.mfkbank.com.au/banking/goal-saver.html",
            "termsUri": "https://www.mfkbank.com.au/content/dam/mfkbank/personal/apply-online/download-printed-forms/SavingsInvestment_ADB2852.pdf",
            "eligibilityUri": "https://www.mfkbank.com.au/banking/goal-saver.html#applyhow",
            "feesAndPricingUri": "https://www.mfkbank.com.au/banking/goal-saver.html#rates"
        }
    },
    "links": {
        "self": "https://api.mfkbank.com.au/public/cds-au/v1/banking/products/72f214498c7f47a98fe59b794e7c01ab"
    },
    "meta": {}
}; 
        context.res = {
            headers:{"content-type": "application/json"},
            body: JSON.stringify(objprod.data.features),
            status:404
        };
    
  
};