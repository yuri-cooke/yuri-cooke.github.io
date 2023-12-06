const states = [
    { name: 'Pennsylvania', acronym: 'PA' },
    { name: 'Alabama', acronym: 'AL' },
    { name: 'Alaska', acronym: 'AK' },
    { name: 'Arizona', acronym: 'AZ' },
    { name: 'Arkansas', acronym: 'AR' },
    { name: 'California', acronym: 'CA' },
    { name: 'Colorado', acronym: 'CO' },
    { name: 'Connecticut', acronym: 'CT' },
    { name: 'Delaware', acronym: 'DE' },
    { name: 'D.C.', acronym: 'DC' },
    { name: 'Florida', acronym: 'FL' },
    { name: 'Georgia', acronym: 'GA' },
    { name: 'Hawaii', acronym: 'HI' },
    { name: 'Idaho', acronym: 'ID' },
    { name: 'Illinois', acronym: 'IL' },
    { name: 'Indiana', acronym: 'IN' },
    { name: 'Iowa', acronym: 'IA' },
    { name: 'Kansas', acronym: 'KS' },
    { name: 'Kentucky', acronym: 'KY' },
    { name: 'Louisiana', acronym: 'LA' },
    { name: 'Maine', acronym: 'ME' },
    { name: 'Maryland', acronym: 'MD' },
    { name: 'Massachusetts', acronym: 'MA' },
    { name: 'Michigan', acronym: 'MI' },
    { name: 'Minnesota', acronym: 'MN' },
    { name: 'Mississippi', acronym: 'MS' },
    { name: 'Missouri', acronym: 'MO' },
    { name: 'Montana', acronym: 'MT' },
    { name: 'Nebraska', acronym: 'NE' },
    { name: 'Nevada', acronym: 'NV' },
    { name: 'New Hampshire', acronym: 'NH' },
    { name: 'New Jersey', acronym: 'NJ' },
    { name: 'New Mexico', acronym: 'NM' },
    { name: 'New York', acronym: 'NY' },
    { name: 'North Carolina', acronym: 'NC' },
    { name: 'North Dakota', acronym: 'ND' },
    { name: 'Ohio', acronym: 'OH' },
    { name: 'Oklahoma', acronym: 'OK' },
    { name: 'Oregon', acronym: 'OR' },
    { name: 'Rhode Island', acronym: 'RI' },
    { name: 'South Carolina', acronym: 'SC' },
    { name: 'South Dakota', acronym: 'SD' },
    { name: 'Tennessee', acronym: 'TN' },
    { name: 'Texas', acronym: 'TX' },
    { name: 'Utah', acronym: 'UT' },
    { name: 'Vermont', acronym: 'VT' },
    { name: 'Virginia', acronym: 'VA' },
    { name: 'Washington', acronym: 'WA' },
    { name: 'West Virginia', acronym: 'WV' },
    { name: 'Wisconsin', acronym: 'WI' },
    { name: 'Wyoming', acronym: 'WY' },
  ];

  const select = document.getElementById('stateSelect');

  // Function to check screen width and update select options accordingly
  function updateOptions() {
      const width = window.innerWidth;

      // Clear existing options
      select.innerHTML = '';

      // Choose whether to display full state names or acronyms based on screen width
      const options = states.map(state => {
          return {
              value: width < 1200 ? state.acronym : state.name,
              text: width < 1200 ? state.acronym : state.name
          };
      });

      // Create and append option elements to the select
      options.forEach(optionData => {
          const option = document.createElement('option');
          option.value = optionData.value;
          option.text = optionData.text;
          select.appendChild(option);
      });

      // Set default selected option
      select.selectedIndex = 0;
  }

  // Initial call to populate options based on screen width
  updateOptions();

  // Update options on window resize
  window.addEventListener('resize', updateOptions);