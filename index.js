// 1. Scenario: Online Library Membership
// Context: An online library offers different levels of membership. Depending on the type of membership, users have access to different resources:
// Basic Membership: Access to only free books.
// Standard Membership: Access to free books and discounted paid books.
// Premium Membership: Access to all books, including exclusive content.
// Question: Imagine you have a variable that stores a user’s membership type. Using conditional statements, determine what resources the user can access and display a message indicating their access level. Consider how you would handle a situation where the membership type is invalid.
// const prompt = require("prompt-sync")();
var membershipType = prompt("membershipType?");
if (membershipType === "Basic") {
    console.log("Access to only free books");
} else if (membershipType === "Standard") {
    console.log("Access to free books and discounted paid books");
} else if (membershipType === "Premium") {
    console.log("Access to all books, including exclusive content");
} else {
    console.log("Invalid membership type");
}
// . Scenario: E-Commerce Discount Application
// ---------------------------------------------
// Context: An e-commerce platform applies discounts based on the user's membership status and the total purchase amount:

// Regular Customers: No discount for purchases under $100. A 5% discount for purchases between $100 and $500. A 10% discount for purchases over $500.

// VIP Customers: A 10% discount for purchases under $100. A 15% discount for purchases between $100 and $500. A 20% discount for purchases over $500.

// Question: Suppose you have variables that represent a user’s membership status and purchase amount. Use conditional statements to determine the final price after applying the appropriate discount. Think about how to handle invalid inputs, such as negative purchase amounts or unrecognized membership statuses.
// var prompt = require("prompt-sync")();
var membershipType = prompt("membershipType?");
var purchaseAmount = prompt("purchase_amount?");
purchaseAmount = Number.parseInt(purchaseAmount);
if (membershipType === "Regular") {
    if (0 < purchaseAmount && purchaseAmount < 100) {
        console.log(purchaseAmount);
    } else if (100 <= purchaseAmount && purchaseAmount <= 500) {
        console.log(purchaseAmount - purchaseAmount * (5 / 100));
    } else if (purchaseAmount > 500) {
        console.log(purchaseAmount - purchaseAmount * (10 / 100));
    } else {
        console.log("invalid puchase amount");
    }
} else if (membershipType === "VIP") {
    if (0 < purchaseAmount && purchaseAmount < 100) {
        console.log(purchaseAmount - purchaseAmount * (10 / 100));
    } else if (100 <= purchaseAmount && purchaseAmount <= 500) {
        console.log(purchaseAmount - purchaseAmount * (15 / 100));
    } else if (purchaseAmount > 500) {
        console.log(purchaseAmount - purchaseAmount * (20 / 100));
    } else {
        console.log("invalid puchase amount");
    }
} else {
    console.log("invalid membership type");
}

// 3. Scenario: Academic Scholarship Eligibility
// ----------------------------------------------
// Context: A university offers scholarships to students based on their GPA and extracurricular involvement:
// Merit-Based Scholarship: Requires a GPA of 3.5 or higher.
// Leadership Scholarship: Requires active participation in at least two extracurricular activities and a GPA of 3.0 or higher.
// Community Service Scholarship: Requires 100 or more hours of community service and a GPA of 2.5 or higher.
// Question: Given variables that store a student's GPA, number of extracurricular activities, and community service hours, use conditional statements to determine which scholarships the student is eligible for. Consider scenarios where a student qualifies for multiple scholarships or none.
// var prompt = require("prompt-sync")();
var gpa = prompt("gpa?");
var extracurricularActivities = prompt("extracurricularActivities?");
var communityServiceHours = prompt("communityServiceHours?");
gpa = Number.parseFloat(gpa);
extracurricularActivities = Number.parseInt(extracurricularActivities);
communityServiceHours = Number.parseInt(communityServiceHours);
if (gpa >= 3.5) {
    console.log("eligible for Merit-Based Scholarship");
} else if (extracurricularActivities >= 2 && gpa >= 3.0) {
    console.log("eligible for Leadership Scholarship");
} else if (communityServiceHours >= 100 && gpa >= 2.5) {
    console.log("eligible for Community Service Scholarship");
} else {
    console.log("not eligible for any scholarship");
}
// 4. Scenario: Movie Ticket Pricing
// ----------------------------------
// Context: A movie theater charges different prices based on the day of the week and the customer's age:
// Weekdays: Standard price of $12. Seniors (65 and older) and children (under 12) receive a 50% discount.
// Weekends: Standard price of $15. Seniors and children receive a 30% discount.
// Question: Assume you have variables for the day of the week and the customer’s age. Use conditional statements to determine the correct ticket price. Consider how to handle situations where the day or age is invalid.
// var prompt = require("prompt-sync")();
var age = prompt("age?");
age = Number.parseInt(age)
var dayOfWeek = prompt("dayOfWeek?");
let standard_price_weekdays = 12;
let standard_price_weekends = 15;
if (dayOfWeek === "Monday" || dayOfWeek === "Tuesday" || dayOfWeek === "Wednesday" || dayOfWeek === "Thursday" || dayOfWeek === "Friday") {
    if (age >= 65 && age <= 12 && age > 0) {
        console.log(standard_price_weekdays - (standard_price_weekdays * 0.5));
    }
    else {
        console.log(standard_price_weekdays)
    }
}
else if (dayOfWeek === "Saturday" || dayOfWeek === "Sunday") {
    if (age >= 65 && age <= 12 && age > 0) {
        console.log(standard_price_weekends - (standard_price_weekends * 0.3));
    }
    else {
        console.log(standard_price_weekends)
    }
}
else {
    console.log("invalid day of week")
}
// 5. Scenario: Event Registration Validation
// -------------------------------------------
// Context: An event registration system needs to validate user inputs before confirming their registration:
// The user must be 18 years or older to register.
// The event allows a maximum of 100 participants. If the event is full, no more registrations are accepted.
// The user must provide a valid email address.
// Question: You have variables for the user’s age, the number of participants already registered, and their email address. Use conditional statements to validate whether the user can register for the event. Think about how to handle cases where some or all conditions are not met.
// var prompt = require("prompt-sync")();
var usersage = prompt("age?");
var email = prompt("email?");
usersage = Number.parseInt(usersage);
var noofparticipants = prompt("noofofparticipants?");
noofparticipents = Number.parseInt(noofparticipants);
if (usersage >= 18 && noofparticipants < 100 && email === "valid") {
    console.log("you can register for the event");
}
else if (usersage < 18) {
    console.log("you are not eligible to register for the event");
}
else {
    console.log("event is full");
}
