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
                var last_name = $('#last_name');
                var organization=$('#organization');

                var form = $('#form');
                $('#page').val(currentIndex);

                //first page save data via ajax
                if (currentIndex == 0) {
                    if (name.val() != "" && last_name.val()!="" && organization.val()!=0) {
                        var data = form.serialize();
                        var url = form.attr('action')
                        
                        $.post(url, data, function (result) {
                            save_status.val(result.id)
                        })
                    }
                }
                //page for Languages
                if (currentIndex == 2) {
                    var languagesSelected = "";

                    var languages = $('input[name=languages]');

                    languages.each(function (index, $this) {
                        var language = $(this);

                        if (language.is(':checked')) {
                            languagesSelected += language.val() + ",";
                        }
                    });


                        var data = {
                            id: save_status.val(),
                            page: currentIndex,
                            languagesSelected: languagesSelected
                        }

                        var url = form.attr('action')
                        $.post(url, data, function (result) {

                        })

                }
                //page for Provider Type
                if (currentIndex == 3) {
                    var providertypesSelected = "";
                    var providertypes = $('input[name=providertypes]');

                    providertypes.each(function (index, $this) {
                        var providertype = $(this);

                        if (providertype.is(':checked')) {
                            providertypesSelected += providertype.val() + ",";
                        }
                    });

                    var specialtiesSelected = "";
                    var specialties = $('input[name=specialties]');

                    specialties.each(function (index, $this) {
                        var specialty = $(this);

                        if (specialty.is(':checked')) {
                            specialtiesSelected += specialty.val() + ",";
                        }
                    });

                        var data = {
                            id: save_status.val(),
                            page: currentIndex,
                            providertypesSelected: providertypesSelected,
                            specialtiesSelected: specialtiesSelected
                        }

                        var url = form.attr('action')

                        $.post(url, data, function (result) {

                        })

                }
                //page for Degrees
                if (currentIndex == 1) {
                    var degreesSelected = "";
                    var degrees = $('input[name=degrees]');

                    degrees.each(function (index, $this) {
                        var degree = $(this);

                        if (degree.is(':checked')) {
                            degreesSelected += degree.val() + ",";
                        }
                    });


                        var data = {
                            id: save_status.val(),
                            page: currentIndex,
                            degreesSelected: degreesSelected
                        }

                        var url = form.attr('action')

                        $.post(url, data, function (result) {

                        })

                }

                //page for Primary Specialties
                if (currentIndex == 4) {
                    var specialtiesSelected = "";
                    var specialties = $('input[name=specialties]');

                    specialties.each(function (index, $this) {
                        var specialty = $(this);

                        if (specialty.is(':checked')) {
                            specialtiesSelected += specialty.val() + ",";
                        }
                    });

                        var data = {
                            id: save_status.val(),
                            page: currentIndex,
                            specialtiesSelected: specialtiesSelected
                        }

                        var url = form.attr('action')


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

                        var file_provider_agreement = response.file_provider_agreement;

                        var filesSaved=response.filesSaved

                        $('#progress_upload').addClass('sr-only');

                        if ($('#provider_agreement_file').val() != "") {
                            if (filesSaved[0] == 1) {
                                $('#provider_agreement_file_1').removeClass('sr-only');
                            } else {
                                $('#provider_agreement_file_0').removeClass('sr-only');
                            }
                        }

                        if($('#credentialing_application_file').val()!=""){
                            if (filesSaved[1] == 1) {
                                $('#credentialing_application_1').removeClass('sr-only');
                            } else {
                                $('#credentialing_application_0').removeClass('sr-only');
                            }
                        }

                        if ($('#state_licence_file').val() != "") {
                            if (filesSaved[2] == 1) {
                                $('#state_licence_file_1').removeClass('sr-only');
                            } else {
                                $('#state_licence_file_0').removeClass('sr-only');
                            }
                        }

                        if ($('#provider_data_form_file').val() != "") {
                            if (filesSaved[3] == 1) {
                                $('#provider_data_form_file_1').removeClass('sr-only');
                            } else {
                                $('#provider_data_form_file_0').removeClass('sr-only');
                            }
                        }

                        if ($('#w9_file').val() != "") {
                            if (filesSaved[4] == 1) {
                                $('#w9_file_1').removeClass('sr-only');
                            } else {
                                $('#w9_file_0').removeClass('sr-only');
                            }
                        }

                        if ($('#general_liability_coverage_file').val() != "") {
                            if (filesSaved[5] == 1) {
                                $('#general_liability_coverage_file_1').removeClass('sr-only');
                            } else {
                                $('#general_liability_coverage_file_0').removeClass('sr-only');
                            }
                        }

                        if($('#loa_loi_file').val()!=""){
                            if (filesSaved[6] == 1) {
                                $('#loa_loi_file_1').removeClass('sr-only');
                            } else {
                                $('#loa_loi_file_0').removeClass('sr-only');
                            }
                        }

                        if(response.allFileUploaded==true){
                            window.setTimeout( function(){
                                var url_index=$('#url_index').val()
                                window.location.href=url_index
                            }, 2000 );
                        }
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