$('.hidden-checkfield').change(function(){
    if($(this).is(":checked")) {
        $('.registration-form').addClass("agent-info");
    } else {
        $('.registration-form').removeClass("agent-info");
		$('.company-logo').removeClass('hover');
		$('.picture-holder').css({
			'display':'none'
		});
    }
});
$(document).on('click', '.nav-opener', function(){
	$('body').toggleClass('nav-active');
});

$(document).on('tap, click', '#main', function(){
	$('body').removeClass('nav-active');
});
$(document).ready(function(){
	$('.registration-form').find('.role-listing').hide();
});

$(document).on('click', '.role-opener', function(){
	$('.registration-form').find('.role-listing').slideToggle();
	$(this).toggleClass('active');
});

$(document).ready(function(){
	$('.registration-form').find('.societiesBlock-listing').hide();
});

$(document).on('click', '.societiesBlock-opener', function(){
	$('.registration-form').find('.societiesBlock-listing').slideToggle();
	$(this).toggleClass('active');
});

function countCheckedRoles(){
	var totalCheckedRoles = 0;
	$('.userRole-checkbox').each(function() {
  		if($(this).is(':checked'))
		  totalCheckedRoles++;
	});
	if(totalCheckedRoles == 0)
		$('.role-opener').html('Other Roles');
	else	
		$('.role-opener').html(totalCheckedRoles+' Roles selected');
}

$(document).on('change', '.userRole-checkbox', function(){
	countCheckedRoles();
});


function countCheckedSocieties(){
	var totalCheckedSocieties = 0;
	$('.selectSociety-checkbox').each(function() {
  		if($(this).is(':checked'))
		  totalCheckedSocieties++;
	});
	if(totalCheckedSocieties == 0)
		$('.societiesBlock-opener').html('Select Societies You Deal In:');
	else{
		
		if(totalCheckedSocieties > 1){
			$('.societiesBlock-opener').html(totalCheckedSocieties+' Societies selected');
		}
		else{
			$('.societiesBlock-opener').html(totalCheckedSocieties+' Society selected');
		}
	}
}

$(document).on('change', '.selectSociety-checkbox', function(){
	countCheckedSocieties();
});

$(document).on('change', '.agent-brokerCheckbox', function(){
	if($(this).is(':checked')){
		$('.agent-brokerCheckbox').each(function(){
			$(this).prop('checked', true);
		});
		$('.registration-form').addClass('agent-info')
	}
	else {
		$('.agent-brokerCheckbox').each(function(){
			$(this).prop('checked', false);
			$('.registration-form').removeClass('agent-info')
		});
	}
	countCheckedRoles();
});

 function companyLogoUploader(file, target)
 {
	previewFile(file, target);
	$(file).closest('.company-logo').find('.picture-holder').css({
		 'display':'block'
	});
	$(file).closest('.company-logo').addClass('hover');
 }
 
 $(document).on('click', '.delete', function(){
	 $(this).closest('.company-logo').find('.company-profileP').attr('src', '');
	 $(this).closest('.company-logo').find('.company-profileP').attr('alt', '');
	 $(this).closest('.company-logo').removeClass('hover');
	 $(this).closest('.company-logo').find('.picture-holder').css({
		 'display':'none'
	 });
 });
 