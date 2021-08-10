export const investment = {
    "403(B) Defined Contribution Retirement plan":{
        investment: ["invest1","invest2","invest3"]
    }
}

export const phFullData = {
    "101":{
        name: "James Smith",
        age: 28,
        income: 25000,
        goals:{
            "Retirement":{
                term: "short",
                products:["403(B) Defined Contribution Retirement plan","457 Retriement plan","401(K) Retriement plan", "Traditional IRA plan","After tax Annuties(ATA)"]
            }
        }
    },
    "102":{
            name: "James Smith",
            age: 28,
            income: 25000,
            goals:{
                "Travel":{
                    term: "short",
                    products:["403(B) Defined Contribution Retirement plan","457 Retriement plan","401(K) Retriement plan"]
                },
                "Celebration":{
                    term: "short",
                    products:["CelebrationProduct1","CelebrationProduct2"]
                },
                "Loan":{
                    term: "short",
                    products:["Bank1","Bank2","Bank3"]
                },
                "Buy a Home": {
                    term: "long",
                    products:["Home product1","Home product2","Home product3"]
                },
                "Saving": {
                    term: "long",
                    products:["Saving product1","Saving product2","Saving product3"]
                }
            }
        }
    
    }

export const phData = {
    "101":{
        name: "James Smith",
        age: 28,
        income: 25000,
        shortterm:["Travel", "Celebration", "Loan"],
        longterm:["Buy a Home", "Saving"],
        Travel: ["TravelProduct1","TravelProduct1","TravelProduct1"],
        Celebration: ["CelebrationProduct1","CelebrationProduct2"],
        Loan:["Bank1","Bank2","Bank3"],
        home:["financeProduct1","financeProduct1"]
    },
    "102":{
        name: "Michael Donald",
        age: 35,
        income: 30000,
        shortterm:["Celebration", "Loan Payment"],
        longterm:["Health Savings", "Education savings"],
        Travel: ["TravelProduct1","TravelProduct1","TravelProduct1"],
        Celebration: ["CelebrationProduct1","CelebrationProduct2"],
        Loan:["Bank1","Bank2","Bank3"],
        home:["financeProduct1","financeProduct1"]
    },
    "103":{
        name: "William Paul",
        age: 31,
        income: 45000,
        shortterm:["Travel", "Celebration"],
        longterm:["home", "Saving"],
        Travel: ["TravelProduct1","TravelProduct1","TravelProduct1"],
        Celebration: ["CelebrationProduct1","CelebrationProduct2"],
        Loan:["Bank1","Bank2","Bank3"],
        home:["financeProduct1","financeProduct1"]
    },
    "104":{
        name: "Robert Kevin",
        age: 44,
        income: 45000,
        shortterm:["Loan payment"],
        longterm:["Health Savings"],
        Travel: ["TravelProduct1","TravelProduct1","TravelProduct1"],
        Celebration: ["CelebrationProduct1","CelebrationProduct2"],
        Loan:["Bank1","Bank2","Bank3"],
        home:["financeProduct1","financeProduct1"]
    }
};


export const persons = [
    {
      id: 102,
      name: "James",
      age:30,
      income:30000,
      recommendedGoal:["Travel","Celebration","Loan payment"],
      longgoals:["Buy a home","Retirement"],
      proposalProduct: {
        Travel: ["short term investment", "assets"],
        Celebration: ["from saving", "salary"],
        home: ["loan", "exchanging asset"]
      }
    },
    {
      id: 102,
      name: "Sobha",
      age:30,
      income:70000,
      recommendedGoal:["Travel","General Investing","Buy a home"]
    },
    {
      id: 103,
      name: "Navaneeth",
      age:30,
      income:770000,
      recommendedGoal:["Travel","Celebration","Start a Business"]
    },
    {
      id: 104,
      name: "Smith",
      age:40,
      income:80000,
      recommendedGoal:["Retirement","Health Savings"]
    },
    {
      id: 105,
      name: "Willison",
      age:55,
      income:120000,
      recommendedGoal:["Travel","Celebration","General Investing"]
    },
    {
      id: 106,
      name: "Allison",
      age:32,
      income:55000,
      recommendedGoal:["Retirement","Celebration","Buy a home"]
    }
  ];