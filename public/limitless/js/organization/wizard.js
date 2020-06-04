/* ------------------------------------------------------------------------------
 *
 *  # Steps wizard
 *
 *  Demo JS code for form_wizard.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var FormWizard = function () {


    //
    // Setup module components
    //

    // Wizard
    var _componentWizard = function () {
        if (!$().steps) {
            console.warn('Warning - steps.min.js is not loaded.');
            return;
        }


        //
        // Wizard with validation
        //

        // Stop function if validation is missing
        if (!$().validate) {
            console.warn('Warning - validate.min.js is not loaded.');
            return;
        }

        // Show form
        var form = $('.steps-validation').show();


        // Initialize wizard
        $('.steps-validation').steps({
            headerTag: 'h6',
            bodyTag: 'fieldset',
            titleTemplate: '<span class="number">#index#</span> #title#',
            labels: {
                previous: '<i class="icon-arrow-left13 mr-2" /> Previous',
                next: 'Next <i class="icon-arrow-right14 ml-2" />',
                finish: 'Save  <i class="fas fa-save ml-2"></i>'
            },
            transitionEffect: 'fade',
            autoFocus: true,
            onStepChanging: function (event, currentIndex, newIndex) {

                // Allways allow previous action even if the current form is not valid!
                if (currentIndex > newIndex) {
                    return true;
                }

                var save_status = $('#save_status');
                var name = $('#name');
                var form = $('#form');
                $('#page').val(currentIndex);

                //first page save data vai ajax
                if (currentIndex == 0) {
                    if (name.val() != "") {

                        var accreditationsSelected = "";
                        var accreditations = $('input[name=accreditations]');

                        accreditations.each(function (index, $this) {
                            var accreditation = $(this);

                            if (accreditation.is(':checked')) {
                                accreditationsSelected += accreditation.val() + ",";
                            }
                        });

                        $('#accreditationSelected').val(accreditationsSelected)

                        var data = form.serialize();
                        var url = form.attr('action')

                        $.post(url, data, function (result) {
                            save_status.val(result.id)
                            console.log(result.page)
                        })
                    }
                }

                if (currentIndex == 1) {
                    var specialtiesSelected = "";

                    var specialties = $('input[name=specialties]');

                    specialties.each(function (index, $this) {
                        var specialty = $(this);

                        if (specialty.is(':checked')) {
                            specialtiesSelected += specialty.val() + ",";
                        }
                    });

                    if (specialtiesSelected != "") {
                        var data = {
                            id: save_status.val(),
                            page: currentIndex,
                            specialtiesSelected: specialtiesSelected
                        }

                        var url = form.attr('action')

                        $.post(url, data, function (result) {
                            console.log(result.page)
                        })
                    }
                }
                if (currentIndex == 2) {
                    var clasificationSelected = "";
                    var clasifications = $('input[name=clasifications]');

                    clasifications.each(function (index, $this) {
                        var clasification = $(this);

                        if (clasification.is(':checked')) {
                            clasificationSelected += clasification.val() + ",";
                        }
                    });

                    if (clasificationSelected != "") {
                        var data = {
                            id: save_status.val(),
                            page: currentIndex,
                            clasificationSelected: clasificationSelected
                        }

                        var url = form.attr('action')

                        $.post(url, data, function (result) {

                        })
                    }
                }
                if (currentIndex == 3) {

                    var hospital_afiliation = $('#hospital_afiliation').val();
                    var notes = $('#notes').val();
                    var non_standard_rates = $('#non_standard_rates').val();
                    var standard_rates = 0;
                    var enabled = 0;

                    if ($('#standard_rates').is(':checked')) {
                        standard_rates = 1;
                    }

                    if ($('#enabled').is(':checked')) {
                        enabled = 1;
                    }

                    var url = form.attr('action')

                    var data = {
                        id: save_status.val(),
                        page: currentIndex,
                        hospital_afiliation: hospital_afiliation,
                        notes: notes,
                        non_standard_rates: non_standard_rates,
                        standard_rates: standard_rates,
                        enabled: enabled
                    }

                    $.post(url, data, function (result) {


                    })
                }

                // Needed in some cases if the user went back (clean up)
                if (currentIndex < newIndex) {

                    // To remove error styles
                    form.find('.body:eq(' + newIndex + ') label.error').remove();
                    form.find('.body:eq(' + newIndex + ') .error').removeClass('error');
                }

                form.validate().settings.ignore = ':disabled,:hidden';
                return form.valid();
            },
            onFinishing: function (event, currentIndex) {
                form.validate().settings.ignore = ':disabled';
                return form.valid();
            },
            onFinished: function (event, currentIndex) {

                //save files
                var form = $('#form');
                $('#page').val(currentIndex)
                var url = form.attr('action')
                var data = new FormData(form[0]);

                $('#progress_upload').removeClass('sr-only');

                $.ajax({
                    type: 'POST',
                    url: url,
                    data: data,
                    dataType: 'json',
                    processData: false,
                    contentType: false,
                    cache: false,
                    success: function (response) {

                        uploadError = response.uploadError;
                        $('#progress_upload').addClass('sr-only');

                        if ($('#provider_agreement_file').val() != "") {
                            if (uploadError[0] == 1) {
                                $('#provider_agreement_file_1').removeClass('sr-only');
                            } else {
                                $('#provider_agreement_file_0').removeClass('sr-only');
                            }
                        }
                        if ($('#state_licence_file').val() != "") {
                            if (uploadError[1] == 1) {
                                $('#state_licence_file_1').removeClass('sr-only');
                            } else {
                                $('#state_licence_file_0').removeClass('sr-only');
                            }
                        }

                        if ($('#provider_data_form_file').val() != "") {
                            if (uploadError[2] == 1) {
                                $('#provider_data_form_file_1').removeClass('sr-only');
                            } else {
                                $('#provider_data_form_file_0').removeClass('sr-only');
                            }
                        }

                        if ($('#w9_file').val() != "") {
                            if (uploadError[3] == 1) {
                                $('#w9_file_1').removeClass('sr-only');
                            } else {
                                $('#w9_file_0').removeClass('sr-only');
                            }
                        }

                        if ($('#roster_file').val() != "") {
                            if (uploadError[4] == 1) {
                                $('#roster_file_1').removeClass('sr-only');
                            } else {
                                $('#roster_file_0').removeClass('sr-only');
                            }
                        }

                        if ($('#general_liability_coverage_file').val() != "") {
                            if (uploadError[5] == 1) {
                                $('#general_liability_coverage_file_1').removeClass('sr-only');
                            } else {
                                $('#general_liability_coverage_file_0').removeClass('sr-only');
                            }
                        }

                        if ($('#site_visit_survery_file').val() != "") {
                            if (uploadError[6] == 1) {
                                $('#site_visit_survery_file_1').removeClass('sr-only');
                            } else {
                                $('#site_visit_survery_file_0').removeClass('sr-only');
                            }
                        }

                        if ($('#accreditation_certificate_file').val() != "") {
                            if (uploadError[7] == 1) {
                                $('#accreditation_certificate_file_1').removeClass('sr-only');
                            } else {
                                $('#accreditation_certificate_file_0').removeClass('sr-only');
                            }
                        }

                        if($('#loa_loi_file').val()!=""){
                            if (uploadError[8] == 1) {
                                $('#loa_loi_file_1').removeClass('sr-only');
                            } else {
                                $('#loa_loi_file_0').removeClass('sr-only');
                            }
                        }

                       var url_index= $('#url_index').val()
                       window.location.href=url_index

                    },
                    error: function (response, desc, err) {
                        if (response.responseJSON && response.responseJSON.message) {

                        } else {

                        }
                    }
                });


            }
        });


        // Initialize validation
        $('.steps-validation').validate({
            ignore: 'input[type=hidden], .select2-search__field', // ignore hidden fields
            errorClass: 'validation-invalid-label',
            highlight: function (element, errorClass) {
                $(element).removeClass(errorClass);
            },
            unhighlight: function (element, errorClass) {
                $(element).removeClass(errorClass);
            },

            // Different components require proper error label placement
            errorPlacement: function (error, element) {

                // Unstyled checkboxes, radios
                if (element.parents().hasClass('form-check')) {
                    error.appendTo(element.parents('.form-check').parent());
                }

                // Input with icons and Select2
                else if (element.parents().hasClass('form-group-feedback') || element.hasClass('select2-hidden-accessible')) {
                    error.appendTo(element.parent());
                }

                // Input group, styled file input
                else if (element.parent().is('.uniform-uploader, .uniform-select') || element.parents().hasClass('input-group')) {
                    error.appendTo(element.parent().parent());
                }

                // Other elements
                else {
                    error.insertAfter(element);
                }
            },
            rules: {
                email: {
                    email: true
                }
            }
        });
    };

    // Uniform
    var _componentUniform = function () {
        if (!$().uniform) {
            console.warn('Warning - uniform.min.js is not loaded.');
            return;
        }

        // Initialize
        $('.form-input-styled').uniform({
            fileButtonClass: 'action btn bg-blue'
        });
    };

    // Select2 select
    var _componentSelect2 = function () {
        if (!$().select2) {
            console.warn('Warning - select2.min.js is not loaded.');
            return;
        }

        // Initialize
        var $select = $('.form-control-select2').select2({
            minimumResultsForSearch: Infinity,
            width: '100%'
        });

        // Trigger value change when selection is made
        $select.on('change', function () {
            $(this).trigger('blur');
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function () {
            _componentWizard();
            _componentUniform();
            _componentSelect2();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function () {
    FormWizard.init();
});