$(document).ready(function(){
    var billingPageDone = false;
    var shippingPageDone = false;
    var paymentPageDone = false;
    var ccBrand = "-1"
    function billingPage() {
        $("#billing-address-form").show();
        $("#shipping-address-form").hide();
        $("#payment-method-form").hide();
        $("#review-form").hide();
        $("#billing-tab").addClass("active");
        if (!billingPageDone) $("#shipping-tab").addClass("disabled");
        else $("#shipping-tab").removeClass("active");
        if (!shippingPageDone) $("#payment-tab").addClass("disabled");
        else $("#payment-tab").removeClass("active");
        if (!paymentPageDone) $("#order-tab").addClass("disabled");
        else $("#order-tab").removeClass("active");
    }
    function shippingPage() {
        $("#billing-address-form").hide();
        $("#shipping-address-form").show();
        $("#payment-method-form").hide();
        $("#review-form").hide();
        $("#billing-tab").removeClass("active");
        $("#shipping-tab").removeClass("disabled").addClass("active");
        if (!shippingPageDone) $("#payment-tab").addClass("disabled");
        else $("#payment-tab").removeClass("active");
        if (!paymentPageDone) $("#order-tab").addClass("disabled");
        else $("#order-tab").removeClass("active");
    }
    function paymentPage() {
        $("#billing-address-form").hide();
        $("#shipping-address-form").hide();
        $("#payment-method-form").show();
        $("#review-form").hide();
        $("#billing-tab").removeClass("active");
        $("#shipping-tab").removeClass("active");
        $("#payment-tab").removeClass("disabled").addClass("active");
        if (!paymentPageDone) $("#order-tab").addClass("disabled");
        else $("#order-tab").removeClass("active");
    }
    function reviewPage() {
        $("#billing-address-form").hide();
        $("#shipping-address-form").hide();
        $("#payment-method-form").hide();
        $("#review-form").show();
        $("#billing-tab").removeClass("active");
        $("#shipping-tab").removeClass("active");
        $("#payment-tab").removeClass("active");
        $("#order-tab").removeClass("disabled").addClass("active");

        var billingFirstName = document.getElementById("billingFirstName").value;
        var billingMiddleName = document.getElementById("billingMiddleName").value;
        var billingLastName = document.getElementById("billingLastName").value;
        var billingAddressLine1 = document.getElementById("billingAddressLine1").value;
        var billingAddressLine2 = document.getElementById("billingAddressLine2").value;
        var billingCity = document.getElementById("billingCity").value;
        var billingState = document.getElementById("billingState").value;
        var billingZip = document.getElementById("billingZip").value;
        var email = document.getElementById("email").value;
        var billingPhone = document.getElementById("billingPhone").value;

        var shippingFirstName = document.getElementById("shippingFirstName").value;
        var shippingMiddleName = document.getElementById("shippingMiddleName").value;
        var shippingLastName = document.getElementById("shippingLastName").value;
        var shippingAddressLine1 = document.getElementById("shippingAddressLine1").value;
        var shippingAddressLine2 = document.getElementById("shippingAddressLine2").value;
        var shippingCity = document.getElementById("shippingCity").value;
        var shippingState = document.getElementById("shippingState").value;
        var shippingZip = document.getElementById("shippingZip").value;
        var shippingPhone = document.getElementById("shippingPhone").value;
        
        var ccName = document.getElementById("ccName").value;
        var ccNumber = document.getElementById("ccNumber").value;
        var ccCvv = document.getElementById("ccCvv").value;
        var ccExp = document.getElementById("ccExp").value;

        if (billingMiddleName.length > 0) var reviewBillingName = billingFirstName + " " + billingMiddleName + " " + billingLastName;
        else var reviewBillingName = billingFirstName + " " + billingLastName;
        if (billingAddressLine2.length > 0) var reviewBillingAddress = billingAddressLine1 + "<br />" + billingAddressLine2;
        else var reviewBillingAddress = billingAddressLine1;
        var reviewCityStZip = billingCity + ", " + billingState + " " + billingZip;
        var reviewBillingSection = reviewBillingName + "<br />" + reviewBillingAddress + "<br />" 
            + reviewCityStZip + "<br />" + billingPhone + "<br />" + email;
        document.getElementById("review-billing-address").innerHTML = reviewBillingSection

        if (shippingMiddleName.length > 0) var reviewshippingName = shippingFirstName + " " + shippingMiddleName + " " + shippingLastName;
        else var reviewshippingName = shippingFirstName + " " + shippingLastName;
        if (shippingAddressLine2.length > 0) var reviewshippingAddress = shippingAddressLine1 + "<br />" + shippingAddressLine2;
        else var reviewshippingAddress = shippingAddressLine1;
        var reviewCityStZip = shippingCity + ", " + shippingState + " " + shippingZip;
        var reviewshippingSection = reviewshippingName + "<br />" + reviewshippingAddress + "<br />" 
            + reviewCityStZip + "<br />" + shippingPhone;
        document.getElementById("review-shipping-address").innerHTML = reviewshippingSection
        var lastDigits = "-1";
        if (ccBrand == "AMEX") {
            lastDigits = ccNumber.value.substring(9, 14);
        } else {
            lastDigits = ccNumber.value.substring(11, 15);
        }
        document.getElementById("review-payment-details").innerHTML = ccName + "<br />" + 
                ccBrand + " Ending in " + lastDigits + "<br />Expires " + ccExp;
    }
    $("#sameAsBilling").click(function(){
        if(document.getElementById('sameAsBilling').checked) {
            $("#shippingFirstName").val($("#billingFirstName").val()).prop("disabled", true);
            $("#shippingMiddleName").val($("#billingMiddleName").val()).prop("disabled", true);
            $("#shippingLastName").val($("#billingLastName").val()).prop("disabled", true);
            $("#shippingAddressLine1").val($("#billingAddressLine1").val()).prop("disabled", true);
            $("#shippingAddressLine2").val($("#billingAddressLine2").val()).prop("disabled", true);
            $("#shippingCity").val($("#billingCity").val()).prop("disabled", true);
            $("#shippingState").val($("#billingState").val()).prop("disabled", true);
            $("#shippingZip").val($("#billingZip").val()).prop("disabled", true);
            $("#shippingPhone").val($("#billingPhone").val()).prop("disabled", true);
        } else {
            $("#shippingFirstName").val("").prop("disabled", false);
            $("#shippingMiddleName").val("").prop("disabled", false);
            $("#shippingLastName").val("").prop("disabled", false);
            $("#shippingAddressLine1").val("").prop("disabled", false);
            $("#shippingAddressLine2").val("").prop("disabled", false);
            $("#shippingCity").val("").prop("disabled", false);
            $("#shippingState").val("").prop("disabled", false);
            $("#shippingZip").val("").prop("disabled", false);
            $("#shippingPhone").val("").prop("disabled", false);
        }
    });
    billingPage();
    $("#next-shipping").click(function(){
        shippingPage();
        billingPageDone = true;
    });
    $("#prev-billing").click(function(){
        billingPage();
    });
    $("#next-payment").click(function(){
        paymentPage();
        shippingPageDone = true;
    });
    $("#prev-shipping").click(function(){
        shippingPage();
    });
    
    $("#next-review").click(function(){
        
        paymentPageDone = true;
        reviewPage();
    });
    $("#prev-payment").click(function(){
        
        shippingPageDone = true;
        paymentPage();
    });
    $("#billing-tab").click(function(){
        billingPage();
    });
    $("#shipping-tab").click(function(){
        shippingPage();
    });
    $("#payment-tab").click(function(){
        paymentPage();
    });
    $("#review-tab").click(function(){
        reviewPage();
    });
    

    $('#ccNumber').on('input', function() { 
        if ($(this).val().match("^3")) {
            $("#ccIcon")
                    .removeClass("fa-credit-card-alt")
                    .removeClass("fa-cc-visa")
                    .removeClass("fa-cc-discover")
                    .removeClass("fa-cc-mastercard")
                    .addClass("fa-cc-amex");
            ccBrand = "AMEX";
        } else if ($(this).val().match("^4")) {
            $("#ccIcon")
                    .removeClass("fa-credit-card-alt")
                    .removeClass("fa-cc-amex")
                    .removeClass("fa-cc-discover")
                    .removeClass("fa-cc-mastercard")
                    .addClass("fa-cc-visa");
            ccBrand = "VISA";
        } else if ($(this).val().match("^5")) {
            $("#ccIcon")
                    .removeClass("fa-credit-card-alt")
                    .removeClass("fa-cc-amex")
                    .removeClass("fa-cc-discover")
                    .removeClass("fa-cc-visa")
                    .addClass("fa-cc-mastercard");
            ccBrand = "MC";
        } else if ($(this).val().match("^6")) {
            $("#ccIcon")
                    .removeClass("fa-credit-card-alt")
                    .removeClass("fa-cc-amex")
                    .removeClass("fa-cc-visa")
                    .removeClass("fa-cc-mastercard")
                    .addClass("fa-cc-discover");
            ccBrand = "DISC";
        } else {
            $("#ccIcon")
                    .removeClass("fa-cc-discover")
                    .removeClass("fa-cc-amex")
                    .removeClass("fa-cc-visa")
                    .removeClass("fa-cc-mastercard")
                    .addClass("fa-credit-card-alt");
            ccBrand = "-1";
        }
    });


});
