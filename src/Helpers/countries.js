const countries = [
  { name: 'Afghanistan', key: 'AF', dial_code: '+93' },
  { name: 'Albania', key: 'AL', dial_code: '+355' },
  { name: 'Algeria', key: 'DZ', dial_code: '+213' },
  { name: 'American Samoa', key: 'AS', dial_code: '+1684' },
  { name: 'Andorra', key: 'AD', dial_code: '+376' },
  { name: 'Angola', key: 'AO', dial_code: '+244' },
  { name: 'Anguilla', key: 'AI', dial_code: '+1264' },
  { name: 'Antarctica', key: 'AQ', dial_code: '+672 ' },
  { name: 'Antigua and Barbuda', key: 'AG', dial_code: '+1268' },
  { name: 'Argentina', key: 'AR', dial_code: '+54' },
  { name: 'Armenia', key: 'AM', dial_code: '+374' },
  { name: 'Aruba', key: 'AW', dial_code: '+297' },
  { name: 'Australia', key: 'AU', dial_code: '+61 ' },
  { name: 'Austria', key: 'AT', dial_code: '+43' },
  { name: 'Azerbaijan', key: 'AZ', dial_code: '+994' },
  { name: 'Bahamas', key: 'BS', dial_code: '+1242' },
  { name: 'Bahrain', key: 'BH', dial_code: '+973' },
  { name: 'Bangladesh', key: 'BD', dial_code: '+880' },
  { name: 'Barbados', key: 'BB', dial_code: '+1246' },
  { name: 'Belarus', key: 'BY', dial_code: '+375' },
  { name: 'Belgium', key: 'BE', dial_code: '+32' },
  { name: 'Belize', key: 'BZ', dial_code: '+501' },
  { name: 'Benin', key: 'BJ', dial_code: '+229' },
  { name: 'Bermuda', key: 'BM', dial_code: '+1441' },
  { name: 'Bhutan', key: 'BT', dial_code: '+975' },
  { name: 'Bolivia, Plurinational State of', key: 'BO', dial_code: '+591' },
  { name: 'Bosnia and Herzegovina', key: 'BA', dial_code: '+387' },
  { name: 'Botswana', key: 'BW', dial_code: '+267' },
  { name: 'Bouvet Island', key: 'BV', dial_code: '+47' },
  { name: 'Brazil', key: 'BR', dial_code: '+55' },
  { name: 'British Indian Ocean Territory', key: 'IO', dial_code: '+246' },
  { name: 'Brunei Darussalam', key: 'BN', dial_code: '+673' },
  { name: 'Bulgaria', key: 'BG', dial_code: '+359' },
  { name: 'Burkina Faso', key: 'BF', dial_code: '+226' },
  { name: 'Burundi', key: 'BI', dial_code: '+257' },
  { name: 'Cambodia', key: 'KH', dial_code: '+855' },
  { name: 'Cameroon', key: 'CM', dial_code: '+237' },
  { name: 'Canada', key: 'CA', dial_code: '+1' },
  { name: 'Cape Verde', key: 'CV', dial_code: '+238' },
  { name: 'Caribbean Netherlands', key: 'BQ', dial_code: '+599' },
  { name: 'Cayman Islands', key: 'KY', dial_code: '+345' },
  { name: 'Central African Republic', key: 'CF', dial_code: '+236' },
  { name: 'Chad', key: 'TD', dial_code: '+235' },
  { name: 'Chile', key: 'CL', dial_code: '+56' },
  { name: "China (People's Republic of China)", key: 'CN', dial_code: '+86' },
  { name: 'Christmas Island', key: 'CX', dial_code: ' +61' },
  { name: 'Cocos (Keeling) Islands', key: 'CC', dial_code: '+61' },
  { name: 'Colombia', key: 'CO', dial_code: '+57' },
  { name: 'Comoros', key: 'KM', dial_code: '+269' },
  {
    name: 'Congo, the Democratic Republic of the',
    key: 'CD',
    dial_code: '+243'
  },
  { name: 'Cook Islands', key: 'CK', dial_code: '+682' },
  { name: 'Costa Rica', key: 'CR', dial_code: '+506' },
  { name: 'Croatia', key: 'HR', dial_code: '+385' },
  { name: 'Cuba', key: 'CU', dial_code: '+53' },
  { name: 'CuraÃƒÂ§ao', key: 'CW', dial_code: '+599' },
  { name: 'Cyprus', key: 'CY', dial_code: '+357' },
  { name: 'Czech Republic', key: 'CZ', dial_code: '+420' },
  { name: "CÃƒÂ´te d'Ivoire", key: 'CI', dial_code: '+225' },
  { name: 'Denmark', key: 'DK', dial_code: '+45' },
  { name: 'Djibouti', key: 'DJ', dial_code: '+253' },
  { name: 'Dominica', key: 'DM', dial_code: '+1767' },
  { name: 'Dominican Republic', key: 'DO', dial_code: '+1849' },
  { name: 'Ecuador', key: 'EC', dial_code: '+593' },
  { name: 'Egypt', key: 'EG', dial_code: '+20' },
  { name: 'El Salvador', key: 'SV', dial_code: '+503' },
  { name: 'England', key: 'GB-ENG', dial_code: '+44' },
  { name: 'Equatorial Guinea', key: 'GQ', dial_code: '+240' },
  { name: 'Eritrea', key: 'ER', dial_code: '+291' },
  { name: 'Estonia', key: 'EE', dial_code: '+372' },
  { name: 'Ethiopia', key: 'ET', dial_code: '+251' },
  { name: 'Europe', key: 'EU', dial_code: '+44' },
  { name: 'Falkland Islands (Malvinas)', key: 'FK', dial_code: '+500' },
  { name: 'Faroe Islands', key: 'FO', dial_code: '+298' },
  { name: 'Fiji', key: 'FJ', dial_code: '+679' },
  { name: 'Finland', key: 'FI', dial_code: '+358' },
  { name: 'France', key: 'FR', dial_code: '+33' },
  { name: 'French Guiana', key: 'GF', dial_code: '+594' },
  { name: 'French Polynesia', key: 'PF', dial_code: '+689' },
  { name: 'French Southern Territories', key: 'TF', dial_code: '+262' },
  { name: 'Gabon', key: 'GA', dial_code: '+241' },
  { name: 'Gambia', key: 'GM', dial_code: '+220' },
  { name: 'Georgia', key: 'GE', dial_code: '+995' },
  { name: 'Germany', key: 'DE', dial_code: '+49' },
  { name: 'Ghana', key: 'GH', dial_code: '+233' },
  { name: 'Gibraltar', key: 'GI', dial_code: '+350' },
  { name: 'Greece', key: 'GR', dial_code: '+30' },
  { name: 'Greenland', key: 'GL', dial_code: '+299' },
  { name: 'Grenada', key: 'GD', dial_code: '+1473' },
  { name: 'Guadeloupe', key: 'GP', dial_code: '+590' },
  { name: 'Guam', key: 'GU', dial_code: '+1671' },
  { name: 'Guatemala', key: 'GT', dial_code: '+502' },
  { name: 'Guernsey', key: 'GG', dial_code: '+44' },
  { name: 'Guinea', key: 'GN', dial_code: '+224' },
  { name: 'Guinea-Bissau', key: 'GW', dial_code: '+245' },
  { name: 'Guyana', key: 'GY', dial_code: '+592' },
  { name: 'Haiti', key: 'HT', dial_code: '+509' },
  { name: 'Heard Island and McDonald Islands', key: 'HM', dial_code: '+672' },
  { name: 'Holy See (Vatican City State)', key: 'VA', dial_code: '+379' },
  { name: 'Honduras', key: 'HN', dial_code: '+504' },
  { name: 'Hong Kong', key: 'HK', dial_code: '+852' },
  { name: 'Hungary', key: 'HU', dial_code: '+36' },
  { name: 'Iceland', key: 'IS', dial_code: '+354' },
  { name: 'India', key: 'IN', dial_code: '+91' },
  { name: 'Indonesia', key: 'ID', dial_code: '+62' },
  { name: 'Iran, Islamic Republic of', key: 'IR', dial_code: '+98' },
  { name: 'Iraq', key: 'IQ', dial_code: '+964' },
  { name: 'Ireland', key: 'IE', dial_code: '+353' },
  { name: 'Isle of Man', key: 'IM', dial_code: '+44 ' },
  { name: 'Israel', key: 'IL', dial_code: '+972' },
  { name: 'Italy', key: 'IT', dial_code: '+39' },
  { name: 'Jamaica', key: 'JM', dial_code: '+1876' },
  { name: 'Japan', key: 'JP', dial_code: '+81' },
  { name: 'Jersey', key: 'JE', dial_code: ' +44' },
  { name: 'Jordan', key: 'JO', dial_code: '+962' },
  { name: 'Kazakhstan', key: 'KZ', dial_code: '+7 ' },
  { name: 'Kenya', key: 'KE', dial_code: '+254' },
  { name: 'Kiribati', key: 'KI', dial_code: '+686' },
  {
    name: "Korea, Democratic People's Republic of",
    key: 'KP',
    dial_code: '+850'
  },
  { name: 'Korea, Republic of', key: 'KR', dial_code: '+82' },
  { name: 'Kosovo', key: 'XK', dial_code: '+383' },
  { name: 'Kuwait', key: 'KW', dial_code: '+965' },
  { name: 'Kyrgyzstan', key: 'KG', dial_code: '+996' },
  {
    name: "Laos (Lao People's Democratic Republic)",
    key: 'LA',
    dial_code: '+856'
  },
  { name: 'Latvia', key: 'LV', dial_code: '+371' },
  { name: 'Lebanon', key: 'LB', dial_code: '+961' },
  { name: 'Lesotho', key: 'LS', dial_code: '+266' },
  { name: 'Liberia', key: 'LR', dial_code: '+231' },
  { name: 'Libya', key: 'LY', dial_code: '+218' },
  { name: 'Liechtenstein', key: 'LI', dial_code: '+423' },
  { name: 'Lithuania', key: 'LT', dial_code: '+370' },
  { name: 'Luxembourg', key: 'LU', dial_code: '+352' },
  { name: 'Macao', key: 'MO', dial_code: '+853' },
  { name: 'Madagascar', key: 'MG', dial_code: '+261' },
  { name: 'Malawi', key: 'MW', dial_code: '+265' },
  { name: 'Malaysia', key: 'MY', dial_code: '+60' },
  { name: 'Maldives', key: 'MV', dial_code: '+960' },
  { name: 'Mali', key: 'ML', dial_code: '+223' },
  { name: 'Malta', key: 'MT', dial_code: '+356' },
  { name: 'Marshall Islands', key: 'MH', dial_code: '+692' },
  { name: 'Martinique', key: 'MQ', dial_code: '+596' },
  { name: 'Mauritania', key: 'MR', dial_code: '+222' },
  { name: 'Mauritius', key: 'MU', dial_code: '+230' },
  { name: 'Mayotte', key: 'YT', dial_code: '+262' },
  { name: 'Mexico', key: 'MX', dial_code: '+52' },
  { name: 'Micronesia, Federated States of', key: 'FM', dial_code: '+691' },
  { name: 'Moldova, Republic of', key: 'MD', dial_code: '+373' },
  { name: 'Monaco', key: 'MC', dial_code: '+377' },
  { name: 'Mongolia', key: 'MN', dial_code: '+976' },
  { name: 'Montenegro', key: 'ME', dial_code: '+382' },
  { name: 'Montserrat', key: 'MS', dial_code: '+1664' },
  { name: 'Morocco', key: 'MA', dial_code: '+212' },
  { name: 'Mozambique', key: 'MZ', dial_code: '+258' },
  { name: 'Myanmar', key: 'MM', dial_code: '+95' },
  { name: 'Namibia', key: 'NA', dial_code: '+264' },
  { name: 'Nauru', key: 'NR', dial_code: '+674' },
  { name: 'Nepal', key: 'NP', dial_code: '+977' },
  { name: 'Netherlands', key: 'NL', dial_code: '+31' },
  { name: 'New Caledonia', key: 'NC', dial_code: '+687' },
  { name: 'New Zealand', key: 'NZ', dial_code: '+64' },
  { name: 'Nicaragua', key: 'NI', dial_code: '+505' },
  { name: 'Niger', key: 'NE', dial_code: '+227' },
  { name: 'Nigeria', key: 'NG', dial_code: '+234' },
  { name: 'Niue', key: 'NU', dial_code: '+683' },
  { name: 'Norfolk Island', key: 'NF', dial_code: '+672' },
  { name: 'North Macedonia', key: 'MK', dial_code: '+389' },
  { name: 'Northern Ireland', key: 'GB-NIR', dial_code: '+44' },
  { name: 'Northern Mariana Islands', key: 'MP', dial_code: '+1670' },
  { name: 'Norway', key: 'NO', dial_code: '+47 ' },
  { name: 'Oman', key: 'OM', dial_code: '+968' },
  { name: 'Pakistan', key: 'PK', dial_code: '+92' },
  { name: 'Palau', key: 'PW', dial_code: '+680' },
  { name: 'Palestine', key: 'PS', dial_code: '+970' },
  { name: 'Panama', key: 'PA', dial_code: '+507' },
  { name: 'Papua New Guinea', key: 'PG', dial_code: '+675' },
  { name: 'Paraguay', key: 'PY', dial_code: '+595' },
  { name: 'Peru', key: 'PE', dial_code: '+51' },
  { name: 'Philippines', key: 'PH', dial_code: '+63' },
  { name: 'Pitcairn', key: 'PN', dial_code: '+64' },
  { name: 'Poland', key: 'PL', dial_code: '+48' },
  { name: 'Portugal', key: 'PT', dial_code: '+351' },
  { name: 'Puerto Rico', key: 'PR', dial_code: '+1939' },
  { name: 'Qatar', key: 'QA', dial_code: '+974' },
  { name: 'Republic of the Congo', key: 'CG', dial_code: '+242' },
  { name: 'Romania', key: 'RO', dial_code: '+40' },
  { name: 'Russian Federation', key: 'RU', dial_code: '+7' },
  { name: 'Rwanda', key: 'RW', dial_code: '+250' },
  { name: 'RÃƒÆ’Ã‚Â©union', key: 'RE', dial_code: '+262 ' },
  { name: 'Saint BarthÃƒÆ’Ã‚Â©lemy', key: 'BL', dial_code: '+590 ' },
  {
    name: 'Saint Helena, Ascension and Tristan da Cunha',
    key: 'SH',
    dial_code: '+290'
  },
  { name: 'Saint Kitts and Nevis', key: 'KN', dial_code: '+1869' },
  { name: 'Saint Lucia', key: 'LC', dial_code: '+1758' },
  { name: 'Saint Martin', key: 'MF', dial_code: ' +590' },
  { name: 'Saint Pierre and Miquelon', key: 'PM', dial_code: '+508' },
  { name: 'Saint Vincent and the Grenadines', key: 'VC', dial_code: '+1784' },
  { name: 'Samoa', key: 'WS', dial_code: '+685' },
  { name: 'San Marino', key: 'SM', dial_code: '+378' },
  { name: 'Sao Tome and Principe', key: 'ST', dial_code: '+239' },
  { name: 'Saudi Arabia', key: 'SA', dial_code: '+966' },
  { name: 'Scotland', key: 'GB-SCT', dial_code: '+44' },
  { name: 'Senegal', key: 'SN', dial_code: '+221' },
  { name: 'Serbia', key: 'RS', dial_code: '+381' },
  { name: 'Seychelles', key: 'SC', dial_code: '+248' },
  { name: 'Sierra Leone', key: 'SL', dial_code: '+232' },
  { name: 'Singapore', key: 'SG', dial_code: '+65' },
  { name: 'Sint Maarten (Dutch part)', key: 'SX', dial_code: '+721' },
  { name: 'Slovakia', key: 'SK', dial_code: '+421' },
  { name: 'Slovenia', key: 'SI', dial_code: '+386' },
  { name: 'Solomon Islands', key: 'SB', dial_code: '+677' },
  { name: 'Somalia', key: 'SO', dial_code: '+252' },
  { name: 'South Africa', key: 'ZA', dial_code: '+27' },
  {
    name: 'South Georgia and the South Sandwich Islands',
    key: 'GS',
    dial_code: '+500'
  },
  { name: 'South Sudan', key: 'SS', dial_code: '+211' },
  { name: 'Spain', key: 'ES', dial_code: '+34' },
  { name: 'Sri Lanka', key: 'LK', dial_code: '+94' },
  { name: 'Sudan', key: 'SD', dial_code: '+249' },
  { name: 'Suriname', key: 'SR', dial_code: '+597' },
  { name: 'Svalbard and Jan Mayen Islands', key: 'SJ', dial_code: ' +47' },
  { name: 'Swaziland', key: 'SZ', dial_code: '+268' },
  { name: 'Sweden', key: 'SE', dial_code: '+46' },
  { name: 'Switzerland', key: 'CH', dial_code: '+41' },
  { name: 'Syrian Arab Republic', key: 'SY', dial_code: '+963' },
  { name: 'Taiwan (Republic of China)', key: 'TW', dial_code: '+886' },
  { name: 'Tajikistan', key: 'TJ', dial_code: '+992' },
  { name: 'Tanzania, United Republic of', key: 'TZ', dial_code: '+255' },
  { name: 'Thailand', key: 'TH', dial_code: '+66' },
  { name: 'Timor-Leste', key: 'TL', dial_code: '+670' },
  { name: 'Togo', key: 'TG', dial_code: '+228' },
  { name: 'Tokelau', key: 'TK', dial_code: '+690' },
  { name: 'Tonga', key: 'TO', dial_code: '+676' },
  { name: 'Trinidad and Tobago', key: 'TT', dial_code: '+1868' },
  { name: 'Tunisia', key: 'TN', dial_code: '+216' },
  { name: 'Turkey', key: 'TR', dial_code: '+90' },
  { name: 'Turkmenistan', key: 'TM', dial_code: '+993' },
  { name: 'Turks and Caicos Islands', key: 'TC', dial_code: '+1649' },
  { name: 'Tuvalu', key: 'TV', dial_code: '+688' },
  { name: 'US Minor Outlying Islands', key: 'UM', dial_code: '+246' },
  { name: 'Uganda', key: 'UG', dial_code: '+256' },
  { name: 'Ukraine', key: 'UA', dial_code: '+380' },
  { name: 'United Arab Emirates', key: 'AE', dial_code: '+971' },
  { name: 'United Kingdom', key: 'GB', dial_code: '+ 44' },
  { name: 'United States', key: 'US', dial_code: '+1 ' },
  { name: 'Uruguay', key: 'UY', dial_code: '+598' },
  { name: 'Uzbekistan', key: 'UZ', dial_code: '+998' },
  { name: 'Vanuatu', key: 'VU', dial_code: '+678' },
  { name: 'Venezuela, Bolivarian Republic of', key: 'VE', dial_code: '+58' },
  { name: 'Vietnam', key: 'VN', dial_code: '+84' },
  { name: 'Virgin Islands, British', key: 'VG', dial_code: '+1284' },
  { name: 'Virgin Islands, U.S.', key: 'VI', dial_code: '+1340' },
  { name: 'Wales', key: 'GB-WLS', dial_code: '+44' },
  { name: 'Wallis and Futuna Islands', key: 'WF', dial_code: '+681' },
  { name: 'Western Sahara', key: 'EH', dial_code: '+212' },
  { name: 'Yemen', key: 'YE', dial_code: '+967' },
  { name: 'Zambia', key: 'ZM', dial_code: '+260' },
  { name: 'Zimbabwe', key: 'ZW', dial_code: '+263' },
  { name: 'Ãƒâ€¦land Islands', key: 'AX', dial_code: '+358 ' }
]

export default countries
