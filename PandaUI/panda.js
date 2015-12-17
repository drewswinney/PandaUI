$('.dropdown-button').click(function()
{
	$menuID = $(this).attr('data-target');
	$target = $(this).parent().children('#' + $menuID);
	if ($target.is(':visible'))
		$target.hide();
	else
		$target.show();
});

$('.toggle-button').click(function()
{
	if ($(this).children('.fa-square').length > 0)
	{
		$(this).children('span').replaceWith('<span class="fa fa-check-square"></span>');
	}
	else
	{
		$(this).children('span').replaceWith('<span class="fa fa-square"></span>');
	}
});

$('.messagebar > .fa-times').click(function()
{
	$(this).parent().remove();
});