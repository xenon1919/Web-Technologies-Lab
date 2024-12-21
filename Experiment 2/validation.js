function validateAndGreet() {
    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var dob = document.getElementById("dob").value;
    var gender = document.getElementById("gender").value;
    var course = document.getElementById("course").value;
    var year = document.getElementById("year").value;
    var cgpa = document.getElementById("cgpa").value;
    var address = document.getElementById("address").value;
    var phone = document.getElementById("phone").value;
    var county = document.getElementById("county").value;
    var state = document.getElementById("state").value;
    var city = document.getElementById("city").value;
    var photo = document.getElementById("photo").files[0];
    var resume = document.getElementById("resume").files[0];
    var parentName = document.getElementById("parent-name").value;
    var parentPhone = document.getElementById("parent-phone").value;
    var prevSchool = document.getElementById("prev-school").value;
    var prevGrade = document.getElementById("prev-grade").value;

    var messageDiv = document.getElementById("greeting");

    // Check required fields
    if (!firstName || !lastName || !email || !dob || !gender || !course || !year || !cgpa || 
        !address || !phone || !county || !state || !city || !photo || !resume || 
        !parentName || !parentPhone || !prevSchool || !prevGrade) {
        messageDiv.innerHTML = "<p style='color: red;'>All fields are required!</p>";
        return false;
    }

    // Validate email format
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        messageDiv.innerHTML = "<p style='color: red;'>Invalid email format!</p>";
        return false;
    }

    // Validate phone number format (10 digits)
    var phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        messageDiv.innerHTML = "<p style='color: red;'>Invalid phone number format! Must be 10 digits.</p>";
        return false;
    }

    if (!phonePattern.test(parentPhone)) {
        messageDiv.innerHTML = "<p style='color: red;'>Invalid parent phone number format! Must be 10 digits.</p>";
        return false;
    }

    // Validate CGPA format (between 0 and 10)
    if (cgpa < 0 || cgpa > 10) {
        messageDiv.innerHTML = "<p style='color: red;'>Invalid CGPA! Must be between 0 and 10.</p>";
        return false;
    }

    // Validate previous grade format (between 0 and 100)
    if (prevGrade < 0 || prevGrade > 100) {
        messageDiv.innerHTML = "<p style='color: red;'>Invalid previous grade! Must be between 0 and 100.</p>";
        return false;
    }

    // Display greeting message
    messageDiv.innerHTML = `<p style='color: green;'>Thank you, ${firstName} ${lastName}! Your registration is complete.</p>`;
    return false;  // Prevent form submission for demonstration purposes
}
