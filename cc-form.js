$(document).ready(function() {
    var billingPageDone = false;
    var shippingPageDone = false;
    var paymentPageDone = false;
    var ccBrand = "-1";
    var states = ['AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS',
        'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH',
        'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY', 'AE', 'AA', 'AP'
    ];

    $("#billingZip").keyup(function() {
        $("#billingZip").val(this.value.match(/[0-9]*/));
    });

    $("#billingPhone").keyup(function() {
        var phoneNumDigits = this.value.replace(/\D/g, '');
        if (phoneNumDigits.length > 6) {
            $("#billingPhone").val(phoneNumDigits.substring(0, 10).replace(/(\d{3})(\d{3})(\d)/, "($1) $2-$3"));
        } else if (phoneNumDigits.length > 3) {
            $("#billingPhone").val(phoneNumDigits.replace(/(\d{3})(\d)/, "($1) $2"));
        } else {
            $("#billingPhone").val(phoneNumDigits)
        }
    });


    /*

    function is_email(email){      
var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
return emailReg.test(email); } 

    */

    function validateBillingPage() {
        var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        var valid = true;
        if (document.getElementById("billingFirstName").value.length < 1) {
            $("#billingFirstNameGroup").addClass("has-error");
            valid = false;
        } else $("#billingFirstNameGroup").removeClass("has-error");
        if (document.getElementById("billingLastName").value.length < 1) {
            $("#billingLastNameGroup").addClass("has-error");
            valid = false;
        } else $("#billingLastNameGroup").removeClass("has-error");
        if (document.getElementById("billingAddressLine1").value.length < 1) {
            $("#billingAddressLine1Group").addClass("has-error");
            valid = false;
        } else $("#billingAddressLine1Group").removeClass("has-error");
        if (document.getElementById("billingCity").value.length < 1) {
            $("#billingCityGroup").addClass("has-error");
            valid = false;
        } else $("#billingCityGroup").removeClass("has-error");
        if (states.indexOf(document.getElementById("billingState").value.toUpperCase()) == -1) {
            $("#billingStateGroup").addClass("has-error");
            valid = false;
        } else $("#billingStateGroup").removeClass("has-error");
        if (document.getElementById("billingZip").value.length != 5) {
            $("#billingZipGroup").addClass("has-error");
            valid = false;
        } else $("#billingZipGroup").removeClass("has-error");
        if (!emailReg.test(document.getElementById("email").value)) {
            $("#emailGroup").addClass("has-error");
            valid = false;
        } else $("#emailGroup").removeClass("has-error");
        if (document.getElementById("billingPhone").value.replace(/\D/g, '').length != 10) {
            $("#billingPhoneGroup").addClass("has-error");
            valid = false;
        } else $("#billingPhoneGroup").removeClass("has-error");
        if (valid) {
            billingPageDone = true;
            shippingPage();
            $("#billing-error-message").removeClass().addClass("bg-danger hidden");
        } else {
            $("#billing-error-message").removeClass("hidden");
        }
    }

    $("#shippingZip").keyup(function() {
        $("#shippingZip").val(this.value.match(/[0-9]*/));
    });

    $("#shippingPhone").keyup(function() {
        var phoneNumDigits = this.value.replace(/\D/g, '');
        if (phoneNumDigits.length > 6) {
            $("#shippingPhone").val(phoneNumDigits.replace(/(\d{3})(\d{3})(\d)/, "($1) $2-$3"));
        } else if (phoneNumDigits.length > 3) {
            $("#shippingPhone").val(phoneNumDigits.replace(/(\d{3})(\d)/, "($1) $2"));
        } else {
            $("#shippingPhone").val(phoneNumDigits)
        }
    });

    function validateShippingPage() {
        var valid = true;
        if (document.getElementById("shippingFirstName").value.length < 1) {
            $("#shippingFirstNameGroup").addClass("has-error");
            console.log("fn");
            valid = false;
        } else $("#shippingFirstNameGroup").removeClass("has-error");
        if (document.getElementById("shippingLastName").value.length < 1) {
            $("#shippingLastNameGroup").addClass("has-error");
            console.log("ln");
            valid = false;
        } else $("#shippingLastNameGroup").removeClass("has-error");
        if (document.getElementById("shippingAddressLine1").value.length < 1) {
            $("#shippingAddressLine1Group").addClass("has-error");
            console.log("addr1");
            valid = false;
        } else $("#shippingAddressLine1Group").removeClass("has-error");
        if (document.getElementById("shippingCity").value.length < 1) {
            $("#shippingCityGroup").addClass("has-error");
            console.log("city");
            valid = false;
        } else $("#shippingCityGroup").removeClass("has-error");
        if (states.indexOf(document.getElementById("shippingState").value.toUpperCase()) == -1) {
            $("#shippingStateGroup").addClass("has-error");
            console.log("state");
            valid = false;
        } else $("#shippingStateGroup").removeClass("has-error");
        if (document.getElementById("shippingZip").value.length < 1) {
            $("#shippingZipGroup").addClass("has-error");
            console.log("zip");
            valid = false;
        } else $("#shippingZipGroup").removeClass("has-error");
        if (document.getElementById("shippingPhone").value.replace(/\D/g, '').length != 10) {
            $("#shippingPhoneGroup").addClass("has-error");
            console.log("phone");
            valid = false;
        } else $("#shippingPhoneGroup").removeClass("has-error");
        if (valid) {
            shippingPageDone = true;
            paymentPage();
            $("#shipping-error-message").removeClass().addClass("bg-danger hidden");
        } else {
            $("#shipping-error-message").removeClass("hidden");
        }
    }

    $('#ccNumber').on('keyup', function(event) {
        var editKeyCodes = [37, 38, 39, 40];
        if (editKeyCodes.indexOf(event.keyCode) == -1) { // allows arrow keys
            var visaRegex = new RegExp("^4");
            var mcRegex = new RegExp("^5[1-5]");
            var amexRegexp = new RegExp("^3[47]");
            var discRegex = new RegExp("^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)");
            if (this.value.match(visaRegex) != null) {
                $("#ccIcon").removeClass().addClass("fa fa-cc-visa");
                this.value = getDefaultFormattedCcNumber(this.value);
                setCvvAmexFormat(false);
                ccBrand = "VISA";
            } else if (this.value.match(mcRegex) != null) {
                $("#ccIcon").removeClass().addClass("fa fa-cc-mastercard");
                this.value = getDefaultFormattedCcNumber(this.value);
                setCvvAmexFormat(false);
                ccBrand = "MC";
            } else if (this.value.match(amexRegexp) != null) {
                $("#ccIcon").removeClass().addClass("fa fa-cc-amex");
                this.value = getAmexFormattedCcNumber(this.value);
                setCvvAmexFormat(true);
                ccBrand = "AMEX";
            } else if (this.value.match(discRegex) != null) {
                $("#ccIcon").removeClass().addClass("fa fa-cc-discover");
                this.value = getDefaultFormattedCcNumber(this.value);
                setCvvAmexFormat(false);
                ccBrand = "DISC";
            } else {
                $("#ccIcon").removeClass().addClass("fa fa-credit-card-alt");
                this.value = getDefaultFormattedCcNumber(this.value);
                setCvvAmexFormat(false);
                ccBrand = "-1";
            }
        }
    });

    function setCvvAmexFormat(amexFormat) {
        if (amexFormat) {
            $("#ccCvv").attr('placeholder', '####');
            $("#ccCvvLabel").text("CID:");
        } else {
            $("#ccCvv").attr('placeholder', '###');
            $("#ccCvvLabel").text("CVV:");
        }
    }

    function getDefaultFormattedCcNumber(ccNumInput) {
        ccNumInput = ccNumInput.replace(/ /g, '');
        if (ccNumInput.length > 12) {
            return ccNumInput.replace(/(\d{4})(\d{4})(\d{4})(\d)/, "$1 $2 $3 $4");
        } else if (ccNumInput.length > 8) {
            return ccNumInput.replace(/(\d{4})(\d{4})(\d)/, "$1 $2 $3");
        } else if (ccNumInput.length > 4) {
            return ccNumInput.replace(/(\d{4})(\d)/, "$1 $2");
        } else return ccNumInput;
    }

    function getAmexFormattedCcNumber(ccNumInput) {
        ccNumInput = ccNumInput.replace(/ /g, '');
        if (ccNumInput.length > 10) {
            return ccNumInput.replace(/(\d{4})(\d{6})(\d)/, "$1 $2 $3");
        } else if (ccNumInput.length > 4) {
            return ccNumInput.replace(/(\d{4})(\d)/, "$1 $2");
        } else return ccNumInput;
    }

    // TODO: Validate exp date

    function validatePaymentPage() {
        var valid = true;
        var cvvLength;
        var ccNumLength;
        if (ccBrand == "AMEX") {
            cvvLength = 4;
            ccNumLength = 15 + 2;
        } else {
            cvvLength = 3;
            ccNumLength = 16 + 3;
        }
        if (document.getElementById("ccNumber").value.substring(0, 1) == "3") {
            cvvLength = 4;
            ccNumLength = 15 + 2;
        }
        if (ccBrand == "-1") {
            $("#ccNumberGroup").addClass("has-error");
            valid = false;
        } else $("#ccNumberGroup").removeClass("has-error");
        if (document.getElementById("ccName").value.length < 1) {
            $("#ccNameGroup").addClass("has-error");
            valid = false;
        } else $("#ccNameGroup").removeClass("has-error");
        if (document.getElementById("ccNumber").value.length != ccNumLength || ccBrand == "-1") {
            $("#ccNumberGroup").addClass("has-error");
            valid = false;
        } else $("#ccNumberGroup").removeClass("has-error");
        if (document.getElementById("ccCvv").value.length != cvvLength) {
            $("#ccCvvGroup").addClass("has-error");
            valid = false;
        } else $("#ccCvvGroup").removeClass("has-error");
        if (document.getElementById("ccExp").value.length < 4) {
            $("#ccExpGroup").addClass("has-error");
            valid = false;
        } else $("#ccExpGroup").removeClass("has-error")
        if (valid) {
            paymentPageDone = true;
            reviewPage();
            $("#payment-error-message").removeClass().addClass("bg-danger hidden");
        } else {
            $("#payment-error-message").removeClass("hidden");
        }
    }

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
        if (!paymentPageDone) $("#review-tab").addClass("disabled");
        else $("#review-tab").removeClass("active");
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
        if (!paymentPageDone) $("#review-tab").addClass("disabled");
        else $("#review-tab").removeClass("active");
    }

    function paymentPage() {
        $("#billing-address-form").hide();
        $("#shipping-address-form").hide();
        $("#payment-method-form").show();
        $("#review-form").hide();
        $("#billing-tab").removeClass("active");
        $("#shipping-tab").removeClass("active");
        $("#payment-tab").removeClass("disabled").addClass("active");
        if (!paymentPageDone) $("#review-tab").addClass("disabled");
        else $("#review-tab").removeClass("active");
    }

    function reviewPage() {
        $("#billing-address-form").hide();
        $("#shipping-address-form").hide();
        $("#payment-method-form").hide();
        $("#review-form").show();
        $("#billing-tab").removeClass("active");
        $("#shipping-tab").removeClass("active");
        $("#payment-tab").removeClass("active");
        $("#review-tab").removeClass("disabled").addClass("active");

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
        var reviewBillingSection = reviewBillingName + "<br />" + reviewBillingAddress + "<br />" +
            reviewCityStZip + "<br />" + billingPhone + "<br />" + email;
        document.getElementById("review-billing-address").innerHTML = reviewBillingSection

        if (shippingMiddleName.length > 0) var reviewshippingName = shippingFirstName + " " + shippingMiddleName + " " + shippingLastName;
        else var reviewshippingName = shippingFirstName + " " + shippingLastName;
        if (shippingAddressLine2.length > 0) var reviewshippingAddress = shippingAddressLine1 + "<br />" + shippingAddressLine2;
        else var reviewshippingAddress = shippingAddressLine1;
        var reviewCityStZip = shippingCity + ", " + shippingState + " " + shippingZip;
        var reviewshippingSection = reviewshippingName + "<br />" + reviewshippingAddress + "<br />" +
            reviewCityStZip + "<br />" + shippingPhone;
        document.getElementById("review-shipping-address").innerHTML = reviewshippingSection;
        var lastDigits = "-1";
        if (ccBrand == "AMEX") {
            lastDigits = ccNumber.replace(/ /g, '').substring(9);
        } else {
            lastDigits = ccNumber.replace(/ /g, '').substring(12);
        }
        document.getElementById("review-payment-details").innerHTML = "Name on card: " + ccName + "<br />" +
            ccBrand + " Ending in " + lastDigits + "<br />Expires " + ccExp + "<br/>";
    }

    $("#sameAsBilling").click(function() {
        if (document.getElementById('sameAsBilling').checked) {
            $("#shippingFirstName").val($("#billingFirstName").val()).prop("disabled", true);
            $("#shippingMiddleName").val($("#billingMiddleName").val()).prop("disabled", true);
            $("#shippingLastName").val($("#billingLastName").val()).prop("disabled", true);
            $("#shippingAddressLine1").val($("#billingAddressLine1").val()).prop("disabled", true);
            $("#shippingAddressLine2").val($("#billingAddressLine2").val()).prop("disabled", true);
            $("#shippingCity").val($("#billingCity").val()).prop("disabled", true);
            $("#shippingState").val($("#billingState").val()).prop("disabled", true);
            $("#shippingZip").val($("#billingZip").val()).prop("disabled", true);
            $("#shippingPhone").val($("#billingPhone").val()).prop("disabled", true);
            $("#shipping-error-message").removeClass().addClass("bg-danger hidden");
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
            $("#shipping-error-message").removeClass("hidden");
        }
    });

    billingPage();

    $("#next-shipping").click(function() {
        validateBillingPage();
    });
    $("#prev-billing").click(function() {
        billingPage();
    });

    $("#next-payment").click(function() {
        validateShippingPage();
    });

    $("#prev-shipping").click(function() {
        shippingPage();
    });

    $("#next-review").click(function() {
        validatePaymentPage();
    });

    $("#prev-payment").click(function() {
        paymentPage();
    });

    $("#billing-tab").click(function() {
        billingPage();
    });

    $("#shipping-tab").click(function() {
        shippingPage();
    });

    $("#payment-tab").click(function() {
        paymentPage();
    });
    $("#review-tab").click(function() {
        reviewPage();
    });

});