$(document).ready(function () {
    $('.blog-tags ul li').click(function () {
        var id = $(this).attr('id');
        switch(id) {
            case 'company_tag':
                $('#keyword').val('');
                break;
            case 'zip_tag':
                $('#zipcode').val('');
                break;
            case 'mcdot_tag':
                $('#mcdot').val('');
                break;
            case 'country_tag':
                $('#country').val('');
                break;
            case 'state_tag':
                $('#state').html('');
                break;
            case 'city_tag':
                $('#city').html('');
                break;
            case 'sort_tag':
                $('#sortby').val('');
                break;
            default:
            // code block
        }
        $(this).hide();
    });

    $('.tag-input').on('keypress',function(e) {
        if(e.which == 13) {
            var id = $(this).attr('id');
            var data = $(this).val();
            var str = '<i class="fa fa-tags"></i>';
            switch(id) {
                case 'keyword':
                    $('#company_tag a').html(str + data);
                    $('#company_tag').css('display', 'inline-block');
                    break;
                case 'zipcode':
                    $('#zip_tag a').html(str + data);
                    $('#zip_tag').css('display', 'inline-block');
                    break;
                case 'mcdot':
                    $('#mcdot_tag a').html(str + data);
                    $('#mcdot_tag').css('display', 'inline-block');
                    break;
                default:
                // code block
            }
        }
    });
});



function getState(country) {
    setTag('country');
    
}

function getCity(state) {
    var country = $('#country').val();
    setTag('state');
    
}
function showFilter() {
    $('.filter-container').slideToggle(500);
}

function setTag(id){
    var str = '<i class="fa fa-tags"></i>';
    switch(id) {
        case 'country':
            value = $('#country option:selected').html();
            $('#country_tag a').html(str + value);
            $('#country_tag').css('display', 'inline-block');
            break;
        case 'state':
            value = $('#state option:selected').html();
            $('#state_tag a').html(str + value);
            $('#state_tag').css('display', 'inline-block');
            break;
        case 'city':
            value = $('#city option:selected').html();
            $('#city_tag a').html(str + value);
            $('#city_tag').css('display', 'inline-block');
            break;

        case 'sort':
            value = $('#sortby option:selected').html();
            $('#sort_tag a').html(str + value);
            $('#sort_tag').css('display', 'inline-block');
            break;
        default:
        // code block
    }
}



