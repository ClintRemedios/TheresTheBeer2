var locations =
[
	{
		name: 'Human Resources',
		uuid:'B9407F30-F5F8-466E-AFF9-25556B57FE6D',
		major: 50320,
		minor: 57488
	},
	{
		name: 'R & D',
		uuid:'2f234454-cf6d-4a0f-adf2-f4911ba9ffa6',
		major: 1,
		minor: 2
	}
]

function displayCurrentLocation(beacon)
{
	for (var r in locations)
	{
		var location = locations[r];
		if (location.uuid.toUpperCase() == beacon.uuid.toUpperCase())
		{
			return location.name;
		}
	}
}
