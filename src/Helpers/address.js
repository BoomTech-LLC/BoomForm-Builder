export const getAddressFields = () => {
  return ['street', 'street2', 'city', 'state', 'zip', 'country']
}

export const getPhoneCountryByCode = (code) => {
  const [country] = countryListForPhone.filter(
    (country) => country.code === code
  )
  return country
}

export const getPhoneCountryByDialCode = (code) => {
  const [country] = countryListForPhone.filter(
    (country) => country.dial_code === code
  )
  return country
}

export const countryList = [
  {
    value: 'Afghanistan',
    dial_code: '+93',
    code: 'AF',
    name: 'Afghanistan',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Afghanistan.svg',
    key: 1
  },
  {
    value: 'Åland Islands',
    dial_code: '+358',
    code: 'AX',
    name: 'Åland Islands',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Flag_of_%C3%85land.svg',
    key: 2
  },
  {
    value: 'Albania',
    dial_code: '+355',
    code: 'AL',
    name: 'Albania',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Flag_of_Albania.svg',
    key: 3
  },
  {
    value: 'Algeria',
    dial_code: '+213',
    code: 'DZ',
    name: 'Algeria',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Algeria.svg',
    key: 4
  },
  {
    value: 'American Samoa',
    dial_code: '+1684',
    code: 'AS',
    name: 'American Samoa',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Flag_of_American_Samoa.svg',
    key: 5
  },
  {
    value: 'Andorra',
    dial_code: '+376',
    code: 'AD',
    name: 'Andorra',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Andorra.svg',
    key: 6
  },
  {
    value: 'Angola',
    dial_code: '+244',
    code: 'AO',
    name: 'Angola',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Angola.svg',
    key: 7
  },
  {
    value: 'Anguilla',
    dial_code: '+1264',
    code: 'AI',
    name: 'Anguilla',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Anguilla.svg',
    key: 8
  },
  {
    value: 'Antarctica',
    dial_code: '+672',
    code: 'AQ',
    name: 'Antarctica',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Proposed_flag_of_Antarctica_%28Graham_Bartram%29.svg',
    key: 9
  },
  {
    value: 'Antigua and Barbuda',
    dial_code: '+1268',
    code: 'AG',
    name: 'Antigua and Barbuda',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Flag_of_Antigua_and_Barbuda.svg',
    key: 10
  },
  {
    value: 'Argentina',
    dial_code: '+54',
    code: 'AR',
    name: 'Argentina',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg',
    key: 11
  },
  {
    value: 'Armenia',
    dial_code: '+374',
    code: 'AM',
    name: 'Armenia',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_Armenia.svg',
    key: 12
  },
  {
    value: 'Aruba',
    dial_code: '+297',
    code: 'AW',
    name: 'Aruba',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Flag_of_Aruba.svg',
    key: 13
  },
  {
    value: 'Australia',
    dial_code: '+61',
    code: 'AU',
    name: 'Australia',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg',
    key: 14
  },
  {
    value: 'Austria',
    dial_code: '+43',
    code: 'AT',
    name: 'Austria',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Austria.svg',
    key: 15
  },
  {
    value: 'Azerbaijan',
    dial_code: '+994',
    code: 'AZ',
    name: 'Azerbaijan',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Azerbaijan.svg',
    key: 16
  },
  {
    value: 'Bahamas',
    dial_code: '+1242',
    code: 'BS',
    name: 'Bahamas',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Flag_of_the_Bahamas.svg',
    key: 17
  },
  {
    value: 'Bahrain',
    dial_code: '+973',
    code: 'BH',
    name: 'Bahrain',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Bahrain.svg',
    key: 18
  },
  {
    value: 'Bangladesh',
    dial_code: '+880',
    code: 'BD',
    name: 'Bangladesh',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg',
    key: 19
  },
  {
    value: 'Barbados',
    dial_code: '+1246',
    code: 'BB',
    name: 'Barbados',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Flag_of_Barbados.svg',
    key: 20
  },
  {
    value: 'Belarus',
    dial_code: '+375',
    code: 'BY',
    name: 'Belarus',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Flag_of_Belarus.svg',
    key: 21
  },
  {
    value: 'Belgium',
    dial_code: '+32',
    code: 'BE',
    name: 'Belgium',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Belgium.svg',
    key: 22
  },
  {
    value: 'Belize',
    dial_code: '+501',
    code: 'BZ',
    name: 'Belize',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Flag_of_Belize.svg',
    key: 23
  },
  {
    value: 'Benin',
    dial_code: '+229',
    code: 'BJ',
    name: 'Benin',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_Benin.svg',
    key: 24
  },
  {
    value: 'Bermuda',
    dial_code: '+1441',
    code: 'BM',
    name: 'Bermuda',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Flag_of_Bermuda.svg',
    key: 25
  },
  {
    value: 'Bhutan',
    dial_code: '+975',
    code: 'BT',
    name: 'Bhutan',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Flag_of_Bhutan.svg',
    key: 26
  },
  {
    value: 'Bolivia',
    dial_code: '+591',
    code: 'BO',
    name: 'Bolivia',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Flag_of_Bolivia_%28state%29.svg/800px-Flag_of_Bolivia_%28state%29.svg.png',
    key: 27
  },
  {
    value: 'Bosnia and Herzegovina',
    dial_code: '+387',
    code: 'BA',
    name: 'Bosnia and Herzegovina',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Flag_of_Bosnia_and_Herzegovina.svg',
    key: 28
  },
  {
    value: 'Botswana',
    dial_code: '+267',
    code: 'BW',
    name: 'Botswana',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_Botswana.svg',
    key: 29
  },
  {
    value: 'Bouvet Island',
    dial_code: '+47',
    code: 'BV',
    name: 'Bouvet Island',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg',
    key: 30
  },
  {
    value: 'Brazil',
    dial_code: '+55',
    code: 'BR',
    name: 'Brazil',
    flag: 'https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg',
    key: 31
  },
  {
    value: 'Brunei Darussalam',
    dial_code: '+673',
    code: 'BN',
    name: 'Brunei Darussalam',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Brunei.svg',
    key: 32
  },
  {
    value: 'Bulgaria',
    dial_code: '+359',
    code: 'BG',
    name: 'Bulgaria',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Bulgaria.svg',
    key: 33
  },
  {
    value: 'Burkina Faso',
    dial_code: '+226',
    code: 'BF',
    name: 'Burkina Faso',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Burkina_Faso.svg',
    key: 34
  },
  {
    value: 'Burundi',
    dial_code: '+257',
    code: 'BI',
    name: 'Burundi',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Flag_of_Burundi.svg',
    key: 35
  },
  {
    value: 'Cambodia',
    dial_code: '+855',
    code: 'KH',
    name: 'Cambodia',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_Cambodia.svg',
    key: 36
  },
  {
    value: 'Cameroon',
    dial_code: '+237',
    code: 'CM',
    name: 'Cameroon',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Flag_of_Cameroon.svg',
    key: 37
  },
  {
    value: 'Canada',
    dial_code: '+1',
    code: 'CA',
    name: 'Canada',
    flag: 'https://upload.wikimedia.org/wikipedia/en/c/cf/Flag_of_Canada.svg',
    key: 38
  },
  {
    value: 'Cape Verde',
    dial_code: '+238',
    code: 'CV',
    name: 'Cape Verde',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Cape_Verde.svg',
    key: 39
  },
  {
    value: 'Cayman Islands',
    dial_code: '+ 345',
    code: 'KY',
    name: 'Cayman Islands',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_the_Cayman_Islands.svg',
    key: 40
  },
  {
    value: 'Central African Republic',
    dial_code: '+236',
    code: 'CF',
    name: 'Central African Republic',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Flag_of_the_Central_African_Republic.svg',
    key: 41
  },
  {
    value: 'Chad',
    dial_code: '+235',
    code: 'TD',
    name: 'Chad',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Flag_of_Chad.svg',
    key: 42
  },
  {
    value: 'Chile',
    dial_code: '+56',
    code: 'CL',
    name: 'Chile',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Flag_of_Chile.svg',
    key: 43
  },
  {
    value: 'China',
    dial_code: '+86',
    code: 'CN',
    name: 'China',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    key: 44
  },
  {
    value: 'Christmas Island',
    dial_code: '+61',
    code: 'CX',
    name: 'Christmas Island',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Flag_of_Christmas_Island.svg',
    key: 45
  },
  {
    value: 'Keeling Islands',
    dial_code: '+61',
    code: 'CC',
    name: 'Keeling Islands',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Flag_of_the_Cocos_%28Keeling%29_Islands.svg/1280px-Flag_of_the_Cocos_%28Keeling%29_Islands.svg.png',
    key: 46
  },
  {
    value: 'Colombia',
    dial_code: '+57',
    code: 'CO',
    name: 'Colombia',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg',
    key: 47
  },
  {
    value: 'Comoros',
    dial_code: '+269',
    code: 'KM',
    name: 'Comoros',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/9/94/Flag_of_the_Comoros.svg',
    key: 48
  },
  {
    value: 'Congo',
    dial_code: '+242',
    code: 'CG',
    name: 'Congo',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_the_Republic_of_the_Congo.svg',
    key: 49
  },
  {
    value: 'Cook Islands',
    dial_code: '+682',
    code: 'CK',
    name: 'Cook Islands',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Flag_of_the_Cook_Islands.svg',
    key: 50
  },
  {
    value: 'Costa Rica',
    dial_code: '+506',
    code: 'CR',
    name: 'Costa Rica',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Costa_Rica_%28state%29.svg',
    key: 51
  },
  {
    value: "Cote d'Ivoire",
    dial_code: '+225',
    code: 'CI',
    name: "Cote d'Ivoire",
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_C%C3%B4te_d%27Ivoire.svg/1280px-Flag_of_C%C3%B4te_d%27Ivoire.svg.png',
    key: 52
  },
  {
    value: 'Croatia',
    dial_code: '+385',
    code: 'HR',
    name: 'Croatia',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Croatia.svg',
    key: 53
  },
  {
    value: 'Cuba',
    dial_code: '+53',
    code: 'CU',
    name: 'Cuba',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Flag_of_Cuba.svg',
    key: 54
  },
  {
    value: 'Cyprus',
    dial_code: '+357',
    code: 'CY',
    name: 'Cyprus',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Cyprus.svg',
    key: 55
  },
  {
    value: 'Czech Republic',
    dial_code: '+420',
    code: 'CZ',
    name: 'Czech Republic',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_Czech_Republic.svg',
    key: 56
  },
  {
    value: 'Denmark',
    dial_code: '+45',
    code: 'DK',
    name: 'Denmark',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Denmark.svg',
    key: 57
  },
  {
    value: 'Djibouti',
    dial_code: '+253',
    code: 'DJ',
    name: 'Djibouti',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Flag_of_Djibouti.svg',
    key: 58
  },
  {
    value: 'Dominica',
    dial_code: '+1767',
    code: 'DM',
    name: 'Dominica',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Flag_of_Dominica.svg',
    key: 59
  },
  {
    value: 'Dominican Republic',
    dial_code: '+1849',
    code: 'DO',
    name: 'Dominican Republic',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_the_Dominican_Republic.svg',
    key: 60
  },
  {
    value: 'Ecuador',
    dial_code: '+593',
    code: 'EC',
    name: 'Ecuador',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Flag_of_Ecuador.svg',
    key: 61
  },
  {
    value: 'Egypt',
    dial_code: '+20',
    code: 'EG',
    name: 'Egypt',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt.svg',
    key: 62
  },
  {
    value: 'El Salvador',
    dial_code: '+503',
    code: 'SV',
    name: 'El Salvador',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Flag_of_El_Salvador.svg',
    key: 63
  },
  {
    value: 'Equatorial Guinea',
    dial_code: '+240',
    code: 'GQ',
    name: 'Equatorial Guinea',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Equatorial_Guinea.svg',
    key: 64
  },
  {
    value: 'Eritrea',
    dial_code: '+291',
    code: 'ER',
    name: 'Eritrea',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Flag_of_Eritrea.svg',
    key: 65
  },
  {
    value: 'Estonia',
    dial_code: '+372',
    code: 'EE',
    name: 'Estonia',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Estonia.svg',
    key: 66
  },
  {
    value: 'Ethiopia',
    dial_code: '+251',
    code: 'ET',
    name: 'Ethiopia',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/7/71/Flag_of_Ethiopia.svg',
    key: 67
  },
  {
    value: 'Falkland Islands',
    dial_code: '+500',
    code: 'FK',
    name: 'Falkland Islands',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_the_Falkland_Islands.svg',
    key: 68
  },
  {
    value: 'Faroe Islands',
    dial_code: '+298',
    code: 'FO',
    name: 'Faroe Islands',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Flag_of_the_Faroe_Islands.svg',
    key: 69
  },
  {
    value: 'Fiji',
    dial_code: '+679',
    code: 'FJ',
    name: 'Fiji',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Fiji.svg',
    key: 70
  },
  {
    value: 'Finland',
    dial_code: '+358',
    code: 'FI',
    name: 'Finland',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland.svg',
    key: 71
  },
  {
    value: 'France',
    dial_code: '+33',
    code: 'FR',
    name: 'France',
    flag: 'https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg',
    key: 72
  },
  {
    value: 'French Guiana',
    dial_code: '+594',
    code: 'GF',
    name: 'French Guiana',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Flag_of_French_Guiana.svg',
    key: 73
  },
  {
    value: 'French Polynesia',
    dial_code: '+689',
    code: 'PF',
    name: 'French Polynesia',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/d/db/Flag_of_French_Polynesia.svg',
    key: 74
  },
  {
    value: 'Gabon',
    dial_code: '+241',
    code: 'GA',
    name: 'Gabon',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Flag_of_Gabon.svg',
    key: 75
  },
  {
    value: 'Gambia',
    dial_code: '+220',
    code: 'GM',
    name: 'Gambia',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_The_Gambia.svg',
    key: 76
  },
  {
    value: 'Georgia',
    dial_code: '+995',
    code: 'GE',
    name: 'Georgia',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Georgia.svg',
    key: 77
  },
  {
    value: 'Germany',
    dial_code: '+49',
    code: 'DE',
    name: 'Germany',
    flag: 'https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg',
    key: 78
  },
  {
    value: 'Ghana',
    dial_code: '+233',
    code: 'GH',
    name: 'Ghana',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Ghana.svg',
    key: 79
  },
  {
    value: 'Gibraltar',
    dial_code: '+350',
    code: 'GI',
    name: 'Gibraltar',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Flag_of_Gibraltar.svg',
    key: 80
  },
  {
    value: 'Greece',
    dial_code: '+30',
    code: 'GR',
    name: 'Greece',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Greece.svg',
    key: 81
  },
  {
    value: 'Greenland',
    dial_code: '+299',
    code: 'GL',
    name: 'Greenland',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_Greenland.svg',
    key: 82
  },
  {
    value: 'Grenada',
    dial_code: '+1473',
    code: 'GD',
    name: 'Grenada',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Grenada.svg',
    key: 83
  },
  {
    value: 'Guadeloupe',
    dial_code: '+590',
    code: 'GP',
    name: 'Guadeloupe',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Flag_of_Guadeloupe_%28UPLG%29.svg/1280px-Flag_of_Guadeloupe_%28UPLG%29.svg.png',
    key: 84
  },
  {
    value: 'Guam',
    dial_code: '+1671',
    code: 'GU',
    name: 'Guam',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/0/07/Flag_of_Guam.svg',
    key: 85
  },
  {
    value: 'Guatemala',
    dial_code: '+502',
    code: 'GT',
    name: 'Guatemala',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Flag_of_Guatemala.svg',
    key: 86
  },
  {
    value: 'Guernsey',
    dial_code: '+44',
    code: 'GG',
    name: 'Guernsey',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_Guernsey.svg',
    key: 87
  },
  {
    value: 'Guinea',
    dial_code: '+224',
    code: 'GN',
    name: 'Guinea',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Flag_of_Guinea.svg',
    key: 88
  },
  {
    value: 'Guinea-Bissau',
    dial_code: '+245',
    code: 'GW',
    name: 'Guinea-Bissau',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Guinea-Bissau.svg',
    key: 89
  },
  {
    value: 'Guyana',
    dial_code: '+592',
    code: 'GY',
    name: 'Guyana',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_Guyana.svg',
    key: 90
  },
  {
    value: 'Haiti',
    dial_code: '+509',
    code: 'HT',
    name: 'Haiti',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Flag_of_Haiti.svg',
    key: 91
  },
  {
    value: 'Holy See',
    dial_code: '+379',
    code: 'VA',
    name: 'Holy See',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_the_Vatican_City.svg',
    key: 92
  },
  {
    value: 'Honduras',
    dial_code: '+504',
    code: 'HN',
    name: 'Honduras',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_Honduras_%282008_Olympics%29.svg/128px-Flag_of_Honduras_%282008_Olympics%29.svg.png',
    key: 93
  },
  {
    value: 'Hong Kong',
    dial_code: '+852',
    code: 'HK',
    name: 'Hong Kong',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Flag_of_Hong_Kong.svg',
    key: 94
  },
  {
    value: 'Hungary',
    dial_code: '+36',
    code: 'HU',
    name: 'Hungary',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Flag_of_Hungary.svg',
    key: 95
  },
  {
    value: 'Iceland',
    dial_code: '+354',
    code: 'IS',
    name: 'Iceland',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Iceland.svg',
    key: 96
  },
  {
    value: 'India',
    dial_code: '+91',
    code: 'IN',
    name: 'India',
    flag: 'https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg',
    key: 97
  },
  {
    value: 'Indonesia',
    dial_code: '+62',
    code: 'ID',
    name: 'Indonesia',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg',
    key: 98
  },
  {
    value: 'Iran',
    dial_code: '+98',
    code: 'IR',
    name: 'Iran',
    flag: ' https://upload.wikimedia.org/wikipedia/commons/c/ca/Flag_of_Iran.svg',
    key: 99
  },
  {
    value: 'Iraq',
    dial_code: '+964',
    code: 'IQ',
    name: 'Iraq',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Flag_of_Iraq.svg',
    key: 100
  },
  {
    value: 'Ireland',
    dial_code: '+353',
    code: 'IE',
    name: 'Ireland',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Flag_of_Ireland.svg',
    key: 101
  },
  {
    value: 'Isle of Man',
    dial_code: '+44',
    code: 'IM',
    name: 'Isle of Man',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_the_Isle_of_Man.svg',
    key: 102
  },
  {
    value: 'Israel',
    dial_code: '+972',
    code: 'IL',
    name: 'Israel',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Israel.svg',
    key: 103
  },
  {
    value: 'Italy',
    dial_code: '+39',
    code: 'IT',
    name: 'Italy',
    flag: 'https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg',
    key: 104
  },
  {
    value: 'Jamaica',
    dial_code: '+1876',
    code: 'JM',
    name: 'Jamaica',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_Jamaica.svg',
    key: 105
  },
  {
    value: 'Japan',
    dial_code: '+81',
    code: 'JP',
    name: 'Japan',
    flag: 'https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg',
    key: 106
  },
  {
    value: 'Jersey',
    dial_code: '+44',
    code: 'JE',
    name: 'Jersey',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Flag_of_Jersey.svg',
    key: 107
  },
  {
    value: 'Jordan',
    dial_code: '+962',
    code: 'JO',
    name: 'Jordan',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Flag_of_Jordan.svg',
    key: 108
  },
  {
    value: 'Kazakhstan',
    dial_code: '+7',
    code: 'KZ',
    name: 'Kazakhstan',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Flag_of_Kazakhstan.svg',
    key: 109
  },
  {
    value: 'Kenya',
    dial_code: '+254',
    code: 'KE',
    name: 'Kenya',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Kenya.svg',
    key: 110
  },
  {
    value: 'Kiribati',
    dial_code: '+686',
    code: 'KI',
    name: 'Kiribati',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Flag_of_Kiribati.svg',
    key: 111
  },
  {
    value: 'Korea',
    dial_code: '+850',
    code: 'KP',
    name: 'Korea',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Flag_of_North_Korea.svg',
    key: 112
  },
  {
    value: 'Korea',
    dial_code: '+82',
    code: 'KR',
    name: 'Korea',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg',
    key: 113
  },
  {
    value: 'Kosovo',
    dial_code: '+383',
    code: 'XK',
    name: 'Kosovo',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Flag_of_Kosovo.svg',
    key: 114
  },
  {
    value: 'Kuwait',
    dial_code: '+965',
    code: 'KW',
    name: 'Kuwait',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Flag_of_Kuwait.svg',
    key: 115
  },
  {
    value: 'Kyrgyzstan',
    dial_code: '+996',
    code: 'KG',
    name: 'Kyrgyzstan',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Flag_of_Kyrgyzstan.svg',
    key: 116
  },
  {
    value: 'Laos',
    dial_code: '+856',
    code: 'LA',
    name: 'Laos',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Flag_of_Laos.svg',
    key: 117
  },
  {
    value: 'Latvia',
    dial_code: '+371',
    code: 'LV',
    name: 'Latvia',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Latvia.svg',
    key: 118
  },
  {
    value: 'Lebanon',
    dial_code: '+961',
    code: 'LB',
    name: 'Lebanon',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/5/59/Flag_of_Lebanon.svg',
    key: 119
  },
  {
    value: 'Lesotho',
    dial_code: '+266',
    code: 'LS',
    name: 'Lesotho',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Flag_of_Lesotho.svg',
    key: 120
  },
  {
    value: 'Liberia',
    dial_code: '+231',
    code: 'LR',
    name: 'Liberia',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Flag_of_Liberia.svg',
    key: 121
  },
  {
    value: 'Libyan Arab Jamahiriya',
    dial_code: '+218',
    code: 'LY',
    name: 'Libyan Arab Jamahiriya',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Libya.svg/2000px-Flag_of_Libya.svg.png',
    key: 122
  },
  {
    value: 'Liechtenstein',
    dial_code: '+423',
    code: 'LI',
    name: 'Liechtenstein',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Flag_of_Liechtenstein.svg',
    key: 123
  },
  {
    value: 'Lithuania',
    dial_code: '+370',
    code: 'LT',
    name: 'Lithuania',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Lithuania.svg',
    key: 124
  },
  {
    value: 'Luxembourg',
    dial_code: '+352',
    code: 'LU',
    name: 'Luxembourg',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Flag_of_Luxembourg.svg',
    key: 125
  },
  {
    value: 'Macao',
    dial_code: '+853',
    code: 'MO',
    name: 'Macao',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Flag_of_Macau.svg',
    key: 126
  },
  {
    value: 'Macedonia',
    dial_code: '+389',
    code: 'MK',
    name: 'Macedonia',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Flag_of_North_Macedonia.png',
    key: 127
  },
  {
    value: 'Madagascar',
    dial_code: '+261',
    code: 'MG',
    name: 'Madagascar',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Madagascar.svg',
    key: 128
  },
  {
    value: 'Malawi',
    dial_code: '+265',
    code: 'MW',
    name: 'Malawi',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Flag_of_Malawi.svg',
    key: 129
  },
  {
    value: 'Malaysia',
    dial_code: '+60',
    code: 'MY',
    name: 'Malaysia',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Flag_of_Malaysia.svg',
    key: 130
  },
  {
    value: 'Maldives',
    dial_code: '+960',
    code: 'MV',
    name: 'Maldives',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Maldives.svg',
    key: 131
  },
  {
    value: 'Mali',
    dial_code: '+223',
    code: 'ML',
    name: 'Mali',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_Mali.svg',
    key: 132
  },
  {
    value: 'Malta',
    dial_code: '+356',
    code: 'MT',
    name: 'Malta',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Malta.svg',
    key: 133
  },
  {
    value: 'Marshall Islands',
    dial_code: '+692',
    code: 'MH',
    name: 'Marshall Islands',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Flag_of_the_Marshall_Islands.svg',
    key: 134
  },
  {
    value: 'Martinique',
    dial_code: '+596',
    code: 'MQ',
    name: 'Martinique',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Snake_Flag_of_Martinique.svg/750px-Snake_Flag_of_Martinique.svg.png',
    key: 135
  },
  {
    value: 'Mauritania',
    dial_code: '+222',
    code: 'MR',
    name: 'Mauritania',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Flag_of_Mauritania.svg',
    key: 136
  },
  {
    value: 'Mauritius',
    dial_code: '+230',
    code: 'MU',
    name: 'Mauritius',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Mauritius.svg',
    key: 137
  },
  {
    value: 'Mayotte',
    dial_code: '+262',
    code: 'YT',
    name: 'Mayotte',
    flag: 'https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg',
    key: 138
  },
  {
    value: 'Mexico',
    dial_code: '+52',
    code: 'MX',
    name: 'Mexico',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg',
    key: 139
  },
  {
    value: 'Micronesia',
    dial_code: '+691',
    code: 'FM',
    name: 'Micronesia',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Micronesia_flag_300.png',
    key: 140
  },
  {
    value: 'Moldova',
    dial_code: '+373',
    code: 'MD',
    name: 'Moldova',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Flag_of_Moldova.svg',
    key: 141
  },
  {
    value: 'Monaco',
    dial_code: '+377',
    code: 'MC',
    name: 'Monaco',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Flag_of_Monaco.svg',
    key: 142
  },
  {
    value: 'Mongolia',
    dial_code: '+976',
    code: 'MN',
    name: 'Mongolia',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Mongolia.svg',
    key: 143
  },
  {
    value: 'Montenegro',
    dial_code: '+382',
    code: 'ME',
    name: 'Montenegro',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Montenegro.svg',
    key: 144
  },
  {
    value: 'Montserrat',
    dial_code: '+1664',
    code: 'MS',
    name: 'Montserrat',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Montserrat.svg',
    key: 145
  },
  {
    value: 'Morocco',
    dial_code: '+212',
    code: 'MA',
    name: 'Morocco',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Morocco.svg',
    key: 146
  },
  {
    value: 'Mozambique',
    dial_code: '+258',
    code: 'MZ',
    name: 'Mozambique',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Mozambique.svg',
    key: 147
  },
  {
    value: 'Myanmar',
    dial_code: '+95',
    code: 'MM',
    name: 'Myanmar',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Flag_of_Myanmar.svg',
    key: 148
  },
  {
    value: 'Namibia',
    dial_code: '+264',
    code: 'NA',
    name: 'Namibia',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Namibia.svg',
    key: 149
  },
  {
    value: 'Nauru',
    dial_code: '+674',
    code: 'NR',
    name: 'Nauru',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Flag_of_Nauru.svg',
    key: 150
  },
  {
    value: 'Nepal',
    dial_code: '+977',
    code: 'NP',
    name: 'Nepal',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal.svg',
    key: 151
  },
  {
    value: 'Netherlands',
    dial_code: '+31',
    code: 'NL',
    name: 'Netherlands',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg',
    key: 152
  },
  {
    value: 'New Caledonia',
    dial_code: '+687',
    code: 'NC',
    name: 'New Caledonia',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/4/43/New_Caledonia_flags_merged_%282017%29.svg',
    key: 153
  },
  {
    value: 'New Zealand',
    dial_code: '+64',
    code: 'NZ',
    name: 'New Zealand',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_New_Zealand.svg',
    key: 154
  },
  {
    value: 'Nicaragua',
    dial_code: '+505',
    code: 'NI',
    name: 'Nicaragua',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Nicaragua.svg',
    key: 155
  },
  {
    value: 'Niger',
    dial_code: '+227',
    code: 'NE',
    name: 'Niger',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Flag_of_Niger.svg',
    key: 156
  },
  {
    value: 'Nigeria',
    dial_code: '+234',
    code: 'NG',
    name: 'Nigeria',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_Nigeria.svg',
    key: 157
  },
  {
    value: 'Niue',
    dial_code: '+683',
    code: 'NU',
    name: 'Niue',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Niue.svg',
    key: 158
  },
  {
    value: 'Norfolk Island',
    dial_code: '+672',
    code: 'NF',
    name: 'Norfolk Island',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Norfolk_Island.svg',
    key: 159
  },
  {
    value: 'Northern Mariana Islands',
    dial_code: '+1670',
    code: 'MP',
    name: 'Northern Mariana Islands',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Flag_of_the_Northern_Mariana_Islands.svg',
    key: 160
  },
  {
    value: 'Norway',
    dial_code: '+47',
    code: 'NO',
    name: 'Norway',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg',
    key: 161
  },
  {
    value: 'Oman',
    dial_code: '+968',
    code: 'OM',
    name: 'Oman',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Oman.svg',
    key: 162
  },
  {
    value: 'Pakistan',
    dial_code: '+92',
    code: 'PK',
    name: 'Pakistan',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg',
    key: 163
  },
  {
    value: 'Palau',
    dial_code: '+680',
    code: 'PW',
    name: 'Palau',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Palau.svg',
    key: 164
  },
  {
    value: 'Palestinian Territory',
    dial_code: '+970',
    code: 'PS',
    name: 'Palestinian Territory',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Flag_of_Palestine_-_short_triangle.svg/1280px-Flag_of_Palestine_-_short_triangle.svg.png',
    key: 165
  },
  {
    value: 'Panama',
    dial_code: '+507',
    code: 'PA',
    name: 'Panama',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Flag_of_Panama.svg',
    key: 166
  },
  {
    value: 'Papua New Guinea',
    dial_code: '+675',
    code: 'PG',
    name: 'Papua New Guinea',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Flag_of_Papua_New_Guinea.svg',
    key: 167
  },
  {
    value: 'Paraguay',
    dial_code: '+595',
    code: 'PY',
    name: 'Paraguay',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Flag_of_Paraguay.svg',
    key: 168
  },
  {
    value: 'Peru',
    dial_code: '+51',
    code: 'PE',
    name: 'Peru',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Peru.svg',
    key: 169
  },
  {
    value: 'Philippines',
    dial_code: '+63',
    code: 'PH',
    name: 'Philippines',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_the_Philippines.svg',
    key: 170
  },
  {
    value: 'Pitcairn',
    dial_code: '+64',
    code: 'PN',
    name: 'Pitcairn',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_the_Pitcairn_Islands.svg',
    key: 171
  },
  {
    value: 'Poland',
    dial_code: '+48',
    code: 'PL',
    name: 'Poland',
    flag: 'https://upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.svg',
    key: 172
  },
  {
    value: 'Portugal',
    dial_code: '+351',
    code: 'PT',
    name: 'Portugal',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg',
    key: 173
  },
  {
    value: 'Puerto Rico',
    dial_code: '+1939',
    code: 'PR',
    name: 'Puerto Rico',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/2/28/Flag_of_Puerto_Rico.svg',
    key: 174
  },
  {
    value: 'Qatar',
    dial_code: '+974',
    code: 'QA',
    name: 'Qatar',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Qatar.svg',
    key: 175
  },
  {
    value: 'Romania',
    dial_code: '+40',
    code: 'RO',
    name: 'Romania',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Romania.svg',
    key: 176
  },
  {
    value: 'Russia',
    dial_code: '+7',
    code: 'RU',
    name: 'Russia',
    flag: 'https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg',
    key: 177
  },
  {
    value: 'Rwanda',
    dial_code: '+250',
    code: 'RW',
    name: 'Rwanda',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Flag_of_Rwanda.svg',
    key: 178
  },
  {
    value: 'Reunion',
    dial_code: '+262',
    code: 'RE',
    name: 'Reunion',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Proposed_flag_of_R%C3%A9union_%28VAR%29.svg/900px-Proposed_flag_of_R%C3%A9union_%28VAR%29.svg.png',
    key: 179
  },
  {
    value: 'Saint Barthelemy',
    dial_code: '+590',
    code: 'BL',
    name: 'Saint Barthelemy',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Nuvola_Saint_Barth%C3%A9lemy_flag.svg',
    key: 180
  },
  {
    value: 'Saint Helena',
    dial_code: '+290',
    code: 'SH',
    name: 'Saint Helena',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Saint_Helena.svg',
    key: 181
  },
  {
    value: 'Saint Kitts and Nevis',
    dial_code: '+1869',
    code: 'KN',
    name: 'Saint Kitts and Nevis',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Saint_Kitts_and_Nevis.svg',
    key: 182
  },
  {
    value: 'Saint Lucia',
    dial_code: '+1758',
    code: 'LC',
    name: 'Saint Lucia',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Saint_Lucia.svg',
    key: 183
  },
  {
    value: 'Saint Martin',
    dial_code: '+590',
    code: 'MF',
    name: 'Saint Martin',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag_of_Sint_Maarten.svg/1280px-Flag_of_Sint_Maarten.svg.png',
    key: 184
  },
  {
    value: 'Saint Pierre and Miquelon',
    dial_code: '+508',
    code: 'PM',
    name: 'Saint Pierre and Miquelon',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Flag_of_Saint-Pierre_and_Miquelon.svg',
    key: 185
  },
  {
    value: 'Saint Vincent',
    dial_code: '+1784',
    code: 'VC',
    name: 'Saint Vincent',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Flag_of_Saint_Vincent_and_the_Grenadines.svg/2000px-Flag_of_Saint_Vincent_and_the_Grenadines.svg.png',
    key: 186
  },
  {
    value: 'Samoa',
    dial_code: '+685',
    code: 'WS',
    name: 'Samoa',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Samoa.svg',
    key: 187
  },
  {
    value: 'San Marino',
    dial_code: '+378',
    code: 'SM',
    name: 'San Marino',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Flag_of_San_Marino.svg',
    key: 188
  },
  {
    value: 'Sao Tome and Principe',
    dial_code: '+239',
    code: 'ST',
    name: 'Sao Tome and Principe',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Flag_of_Sao_Tome_and_Principe.svg',
    key: 189
  },
  {
    value: 'Saudi Arabia',
    dial_code: '+966',
    code: 'SA',
    name: 'Saudi Arabia',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg',
    key: 190
  },
  {
    value: 'Senegal',
    dial_code: '+221',
    code: 'SN',
    name: 'Senegal',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Flag_of_Senegal.svg',
    key: 191
  },
  {
    value: 'Serbia',
    dial_code: '+381',
    code: 'RS',
    name: 'Serbia',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Flag_of_Serbia.svg',
    key: 192
  },
  {
    value: 'Seychelles',
    dial_code: '+248',
    code: 'SC',
    name: 'Seychelles',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Seychelles.svg',
    key: 193
  },
  {
    value: 'Sierra Leone',
    dial_code: '+232',
    code: 'SL',
    name: 'Sierra Leone',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Flag_of_Sierra_Leone.svg',
    key: 194
  },
  {
    value: 'Singapore',
    dial_code: '+65',
    code: 'SG',
    name: 'Singapore',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Singapore.svg',
    key: 195
  },
  {
    value: 'Slovakia',
    dial_code: '+421',
    code: 'SK',
    name: 'Slovakia',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Flag_of_Slovakia.svg',
    key: 196
  },
  {
    value: 'Slovenia',
    dial_code: '+386',
    code: 'SI',
    name: 'Slovenia',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Flag_of_Slovenia.svg',
    key: 197
  },
  {
    value: 'Solomon Islands',
    dial_code: '+677',
    code: 'SB',
    name: 'Solomon Islands',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Flag_of_the_Solomon_Islands.svg',
    key: 198
  },
  {
    value: 'Somalia',
    dial_code: '+252',
    code: 'SO',
    name: 'Somalia',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Flag_of_Somalia.svg',
    key: 199
  },
  {
    value: 'South Africa',
    dial_code: '+27',
    code: 'ZA',
    name: 'South Africa',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa.svg',
    key: 200
  },
  {
    value: 'South Sudan',
    dial_code: '+211',
    code: 'SS',
    name: 'South Sudan',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Flag_of_South_Sudan.svg',
    key: 201
  },
  {
    value: 'Spain',
    dial_code: '+34',
    code: 'ES',
    name: 'Spain',
    flag: 'https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg',
    key: 202
  },
  {
    value: 'Sri Lanka',
    dial_code: '+94',
    code: 'LK',
    name: 'Sri Lanka',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Sri_Lanka.svg',
    key: 203
  },
  {
    value: 'Sudan',
    dial_code: '+249',
    code: 'SD',
    name: 'Sudan',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Sudan.svg',
    key: 204
  },
  {
    value: 'Suriname',
    dial_code: '+597',
    code: 'SR',
    name: 'Suriname',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Flag_of_Suriname.svg/255px-Flag_of_Suriname.svg.png',
    key: 205
  },
  {
    value: 'Svalbard and Jan Mayen',
    dial_code: '+47',
    code: 'SJ',
    name: 'Svalbard and Jan Mayen',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/2000px-Flag_of_Norway.svg.png',
    key: 206
  },
  {
    value: 'Swaziland',
    dial_code: '+268',
    code: 'SZ',
    name: 'Swaziland',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Flag_of_Eswatini.svg',
    key: 207
  },
  {
    value: 'Sweden',
    dial_code: '+46',
    code: 'SE',
    name: 'Sweden',
    flag: 'https://upload.wikimedia.org/wikipedia/en/4/4c/Flag_of_Sweden.svg',
    key: 208
  },
  {
    value: 'Switzerland',
    dial_code: '+41',
    code: 'CH',
    name: 'Switzerland',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Flag_of_Switzerland_%28Pantone%29.svg',
    key: 209
  },
  {
    value: 'Syrian Arab Republic',
    dial_code: '+963',
    code: 'SY',
    name: 'Syrian Arab Republic',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Flag_of_Syria.svg',
    key: 210
  },
  {
    value: 'Taiwan',
    dial_code: '+886',
    code: 'TW',
    name: 'Taiwan',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Flag_of_the_Republic_of_China.svg',
    key: 211
  },
  {
    value: 'Tajikistan',
    dial_code: '+992',
    code: 'TJ',
    name: 'Tajikistan',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Tajikistan.svg',
    key: 212
  },
  {
    value: 'Tanzania',
    dial_code: '+255',
    code: 'TZ',
    name: 'Tanzania',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flag_of_Tanzania.svg/1280px-Flag_of_Tanzania.svg.png',
    key: 213
  },
  {
    value: 'Thailand',
    dial_code: '+66',
    code: 'TH',
    name: 'Thailand',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Thailand.svg',
    key: 214
  },
  {
    value: 'Timor-Leste',
    dial_code: '+670',
    code: 'TL',
    name: 'Timor-Leste',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/2/26/Flag_of_East_Timor.svg',
    key: 215
  },
  {
    value: 'Togo',
    dial_code: '+228',
    code: 'TG',
    name: 'Togo',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/6/68/Flag_of_Togo.svg',
    key: 216
  },
  {
    value: 'Tokelau',
    dial_code: '+690',
    code: 'TK',
    name: 'Tokelau',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Flag_of_Tokelau.svg',
    key: 217
  },
  {
    value: 'Tonga',
    dial_code: '+676',
    code: 'TO',
    name: 'Tonga',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Tonga.svg',
    key: 218
  },
  {
    value: 'Trinidad and Tobago',
    dial_code: '+1868',
    code: 'TT',
    name: 'Trinidad and Tobago',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Trinidad_and_Tobago.svg',
    key: 219
  },
  {
    value: 'Tunisia',
    dial_code: '+216',
    code: 'TN',
    name: 'Tunisia',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Tunisia.svg',
    key: 220
  },
  {
    value: 'Turkey',
    dial_code: '+90',
    code: 'TR',
    name: 'Turkey',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg',
    key: 221
  },
  {
    value: 'Turkmenistan',
    dial_code: '+993',
    code: 'TM',
    name: 'Turkmenistan',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Turkmenistan.svg',
    key: 222
  },
  {
    value: 'Turks and Caicos Islands',
    dial_code: '+1649',
    code: 'TC',
    name: 'Turks and Caicos Islands',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Flag_of_the_Turks_and_Caicos_Islands.svg',
    key: 223
  },
  {
    value: 'Tuvalu',
    dial_code: '+688',
    code: 'TV',
    name: 'Tuvalu',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Tuvalu.svg',
    key: 224
  },
  {
    value: 'Uganda',
    dial_code: '+256',
    code: 'UG',
    name: 'Uganda',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Flag_of_Uganda.svg',
    key: 225
  },
  {
    value: 'Ukraine',
    dial_code: '+380',
    code: 'UA',
    name: 'Ukraine',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg',
    key: 226
  },
  {
    value: 'United Arab Emirates',
    dial_code: '+971',
    code: 'AE',
    name: 'United Arab Emirates',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg',
    key: 227
  },
  {
    value: 'United Kingdom',
    dial_code: '+44',
    code: 'GB',
    name: 'United Kingdom',
    flag: 'https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg',
    key: 228
  },
  {
    value: 'United States',
    dial_code: '+1',
    code: 'US',
    name: 'United States',
    flag: 'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg',
    key: 229
  },
  {
    value: 'Uruguay',
    dial_code: '+598',
    code: 'UY',
    name: 'Uruguay',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Uruguay.svg',
    key: 230
  },
  {
    value: 'Uzbekistan',
    dial_code: '+998',
    code: 'UZ',
    name: 'Uzbekistan',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Uzbekistan.svg',
    key: 231
  },
  {
    value: 'Vanuatu',
    dial_code: '+678',
    code: 'VU',
    name: 'Vanuatu',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Vanuatu.svg',
    key: 232
  },
  {
    value: 'Venezuela',
    dial_code: '+58',
    code: 'VE',
    name: 'Venezuela',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Flag_of_Venezuela_%28state%29.svg',
    key: 233
  },
  {
    value: 'Vietnam',
    dial_code: '+84',
    code: 'VN',
    name: 'Vietnam',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/255px-Flag_of_Vietnam.svg.png',
    key: 234
  },
  {
    value: 'Virgin Islands, British',
    dial_code: '+1284',
    code: 'VG',
    name: 'Virgin Islands, British',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Flag_of_the_British_Virgin_Islands.svg/2000px-Flag_of_the_British_Virgin_Islands.svg.png',
    key: 235
  },
  {
    value: 'Virgin Islands, U.S.',
    dial_code: '+1340',
    code: 'VI',
    name: 'Virgin Islands, U.S.',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Flag_of_the_United_States_Virgin_Islands.svg/255px-Flag_of_the_United_States_Virgin_Islands.svg.png',
    key: 236
  },
  {
    value: 'Wallis and Futuna',
    dial_code: '+681',
    code: 'WF',
    name: 'Wallis and Futuna',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Flag_of_Wallis_and_Futuna.svg',
    key: 237
  },
  {
    value: 'Yemen',
    dial_code: '+967',
    code: 'YE',
    name: 'Yemen',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Flag_of_Yemen.svg',
    key: 238
  },
  {
    value: 'Zambia',
    dial_code: '+260',
    code: 'ZM',
    name: 'Zambia',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Flag_of_Zambia.svg',
    key: 239
  },
  {
    value: 'Zimbabwe',
    dial_code: '+263',
    code: 'ZW',
    name: 'Zimbabwe',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Flag_of_Zimbabwe.svg',
    key: 240
  }
]

export const countryListForPhone = [
  {
    value: 'Afghanistan',
    dial_code: '+93',
    code: 'AF',
    name: 'Afghanistan',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Flag_of_Afghanistan_%281931%E2%80%931973%29.svg/330px-Flag_of_Afghanistan_%281931%E2%80%931973%29.svg.png',
    key: 1
  },
  {
    value: 'Åland Islands',
    dial_code: '+358',
    code: 'AX',
    name: 'Åland Islands',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Flag_of_%C3%85land.svg',
    key: 2
  },
  {
    value: 'Albania',
    dial_code: '+355',
    code: 'AL',
    name: 'Albania',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Flag_of_Albania.svg',
    key: 3
  },
  {
    value: 'Algeria',
    dial_code: '+213',
    code: 'DZ',
    name: 'Algeria',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Algeria.svg',
    key: 4
  },
  {
    value: 'American Samoa',
    dial_code: '+1684',
    code: 'AS',
    name: 'American Samoa',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Flag_of_American_Samoa.svg',
    key: 5
  },
  {
    value: 'Andorra',
    dial_code: '+376',
    code: 'AD',
    name: 'Andorra',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Andorra.svg',
    key: 6
  },
  {
    value: 'Angola',
    dial_code: '+244',
    code: 'AO',
    name: 'Angola',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Angola.svg',
    key: 7
  },
  {
    value: 'Anguilla',
    dial_code: '+1264',
    code: 'AI',
    name: 'Anguilla',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Anguilla.svg',
    key: 8
  },
  {
    value: 'Antarctica',
    dial_code: '+672',
    code: 'AQ',
    name: 'Antarctica',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Proposed_flag_of_Antarctica_%28Graham_Bartram%29.svg',
    key: 9
  },
  {
    value: 'Antigua and Barbuda',
    dial_code: '+1268',
    code: 'AG',
    name: 'Antigua and Barbuda',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Flag_of_Antigua_and_Barbuda.svg',
    key: 10
  },
  {
    value: 'Argentina',
    dial_code: '+54',
    code: 'AR',
    name: 'Argentina',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg',
    key: 11
  },
  {
    value: 'Armenia',
    dial_code: '+374',
    code: 'AM',
    name: 'Armenia',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_Armenia.svg',
    key: 12
  },
  {
    value: 'Aruba',
    dial_code: '+297',
    code: 'AW',
    name: 'Aruba',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Flag_of_Aruba.svg',
    key: 13
  },
  {
    value: 'Australia',
    dial_code: '+61',
    code: 'AU',
    name: 'Australia',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg',
    key: 14
  },
  {
    value: 'Austria',
    dial_code: '+43',
    code: 'AT',
    name: 'Austria',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Austria.svg',
    key: 15
  },
  {
    value: 'Azerbaijan',
    dial_code: '+994',
    code: 'AZ',
    name: 'Azerbaijan',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Azerbaijan.svg',
    key: 16
  },
  {
    value: 'Bahamas',
    dial_code: '+1242',
    code: 'BS',
    name: 'Bahamas',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Flag_of_the_Bahamas.svg',
    key: 17
  },
  {
    value: 'Bahrain',
    dial_code: '+973',
    code: 'BH',
    name: 'Bahrain',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Bahrain.svg',
    key: 18
  },
  {
    value: 'Bangladesh',
    dial_code: '+880',
    code: 'BD',
    name: 'Bangladesh',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg',
    key: 19
  },
  {
    value: 'Barbados',
    dial_code: '+1246',
    code: 'BB',
    name: 'Barbados',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Flag_of_Barbados.svg',
    key: 20
  },
  {
    value: 'Belarus',
    dial_code: '+375',
    code: 'BY',
    name: 'Belarus',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Flag_of_Belarus.svg',
    key: 21
  },
  {
    value: 'Belgium',
    dial_code: '+32',
    code: 'BE',
    name: 'Belgium',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Belgium.svg',
    key: 22
  },
  {
    value: 'Belize',
    dial_code: '+501',
    code: 'BZ',
    name: 'Belize',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Flag_of_Belize.svg',
    key: 23
  },
  {
    value: 'Benin',
    dial_code: '+229',
    code: 'BJ',
    name: 'Benin',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_Benin.svg',
    key: 24
  },
  {
    value: 'Bermuda',
    dial_code: '+1441',
    code: 'BM',
    name: 'Bermuda',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Flag_of_Bermuda.svg',
    key: 25
  },
  {
    value: 'Bhutan',
    dial_code: '+975',
    code: 'BT',
    name: 'Bhutan',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Flag_of_Bhutan.svg',
    key: 26
  },
  {
    value: 'Bolivia',
    dial_code: '+591',
    code: 'BO',
    name: 'Bolivia',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Flag_of_Bolivia_%28state%29.svg/800px-Flag_of_Bolivia_%28state%29.svg.png',
    key: 27
  },
  {
    value: 'Bosnia and Herzegovina',
    dial_code: '+387',
    code: 'BA',
    name: 'Bosnia and Herzegovina',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Flag_of_Bosnia_and_Herzegovina.svg',
    key: 28
  },
  {
    value: 'Botswana',
    dial_code: '+267',
    code: 'BW',
    name: 'Botswana',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_Botswana.svg',
    key: 29
  },
  {
    value: 'Bouvet Island',
    dial_code: '+47',
    code: 'BV',
    name: 'Bouvet Island',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg',
    key: 30
  },
  {
    value: 'Brazil',
    dial_code: '+55',
    code: 'BR',
    name: 'Brazil',
    flag: 'https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg',
    key: 31
  },
  {
    value: 'Brunei Darussalam',
    dial_code: '+673',
    code: 'BN',
    name: 'Brunei Darussalam',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Brunei.svg',
    key: 32
  },
  {
    value: 'Bulgaria',
    dial_code: '+359',
    code: 'BG',
    name: 'Bulgaria',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Bulgaria.svg',
    key: 33
  },
  {
    value: 'Burkina Faso',
    dial_code: '+226',
    code: 'BF',
    name: 'Burkina Faso',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Burkina_Faso.svg',
    key: 34
  },
  {
    value: 'Burundi',
    dial_code: '+257',
    code: 'BI',
    name: 'Burundi',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Flag_of_Burundi.svg',
    key: 35
  },
  {
    value: 'Cambodia',
    dial_code: '+855',
    code: 'KH',
    name: 'Cambodia',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_Cambodia.svg',
    key: 36
  },
  {
    value: 'Cameroon',
    dial_code: '+237',
    code: 'CM',
    name: 'Cameroon',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Flag_of_Cameroon.svg',
    key: 37
  },
  {
    value: 'Canada',
    dial_code: '+1',
    code: 'CA',
    name: 'Canada',
    flag: 'https://upload.wikimedia.org/wikipedia/en/c/cf/Flag_of_Canada.svg',
    key: 38
  },
  {
    value: 'Cape Verde',
    dial_code: '+238',
    code: 'CV',
    name: 'Cape Verde',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Cape_Verde.svg',
    key: 39
  },
  {
    value: 'Cayman Islands',
    dial_code: '+ 345',
    code: 'KY',
    name: 'Cayman Islands',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_the_Cayman_Islands.svg',
    key: 40
  },
  {
    value: 'Central African Republic',
    dial_code: '+236',
    code: 'CF',
    name: 'Central African Republic',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Flag_of_the_Central_African_Republic.svg',
    key: 41
  },
  {
    value: 'Chad',
    dial_code: '+235',
    code: 'TD',
    name: 'Chad',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Flag_of_Chad.svg',
    key: 42
  },
  {
    value: 'Chile',
    dial_code: '+56',
    code: 'CL',
    name: 'Chile',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Flag_of_Chile.svg',
    key: 43
  },
  {
    value: 'China',
    dial_code: '+86',
    code: 'CN',
    name: 'China',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    key: 44
  },
  {
    value: 'Christmas Island',
    dial_code: '+61',
    code: 'CX',
    name: 'Christmas Island',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Flag_of_Christmas_Island.svg',
    key: 45
  },
  {
    value: 'Keeling Islands',
    dial_code: '+61',
    code: 'CC',
    name: 'Keeling Islands',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Flag_of_the_Cocos_%28Keeling%29_Islands.svg/1280px-Flag_of_the_Cocos_%28Keeling%29_Islands.svg.png',
    key: 46
  },
  {
    value: 'Colombia',
    dial_code: '+57',
    code: 'CO',
    name: 'Colombia',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg',
    key: 47
  },
  {
    value: 'Comoros',
    dial_code: '+269',
    code: 'KM',
    name: 'Comoros',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/9/94/Flag_of_the_Comoros.svg',
    key: 48
  },
  {
    value: 'Congo',
    dial_code: '+242',
    code: 'CG',
    name: 'Congo',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_the_Republic_of_the_Congo.svg',
    key: 49
  },
  {
    value: 'Cook Islands',
    dial_code: '+682',
    code: 'CK',
    name: 'Cook Islands',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Flag_of_the_Cook_Islands.svg',
    key: 50
  },
  {
    value: 'Costa Rica',
    dial_code: '+506',
    code: 'CR',
    name: 'Costa Rica',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Costa_Rica_%28state%29.svg',
    key: 51
  },
  {
    value: "Cote d'Ivoire",
    dial_code: '+225',
    code: 'CI',
    name: "Cote d'Ivoire",
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_C%C3%B4te_d%27Ivoire.svg/1280px-Flag_of_C%C3%B4te_d%27Ivoire.svg.png',
    key: 52
  },
  {
    value: 'Croatia',
    dial_code: '+385',
    code: 'HR',
    name: 'Croatia',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Croatia.svg',
    key: 53
  },
  {
    value: 'Cuba',
    dial_code: '+53',
    code: 'CU',
    name: 'Cuba',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Flag_of_Cuba.svg',
    key: 54
  },
  {
    value: 'Cyprus',
    dial_code: '+357',
    code: 'CY',
    name: 'Cyprus',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Cyprus.svg',
    key: 55
  },
  {
    value: 'Czech Republic',
    dial_code: '+420',
    code: 'CZ',
    name: 'Czech Republic',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_Czech_Republic.svg',
    key: 56
  },
  {
    value: 'Denmark',
    dial_code: '+45',
    code: 'DK',
    name: 'Denmark',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Denmark.svg',
    key: 57
  },
  {
    value: 'Djibouti',
    dial_code: '+253',
    code: 'DJ',
    name: 'Djibouti',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Flag_of_Djibouti.svg',
    key: 58
  },
  {
    value: 'Dominica',
    dial_code: '+1767',
    code: 'DM',
    name: 'Dominica',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Flag_of_Dominica.svg',
    key: 59
  },
  {
    value: 'Dominican Republic',
    dial_code: '+1849',
    code: 'DO',
    name: 'Dominican Republic',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_the_Dominican_Republic.svg',
    key: 60
  },
  {
    value: 'Ecuador',
    dial_code: '+593',
    code: 'EC',
    name: 'Ecuador',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Flag_of_Ecuador.svg',
    key: 61
  },
  {
    value: 'Egypt',
    dial_code: '+20',
    code: 'EG',
    name: 'Egypt',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt.svg',
    key: 62
  },
  {
    value: 'El Salvador',
    dial_code: '+503',
    code: 'SV',
    name: 'El Salvador',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Flag_of_El_Salvador.svg',
    key: 63
  },
  {
    value: 'Equatorial Guinea',
    dial_code: '+240',
    code: 'GQ',
    name: 'Equatorial Guinea',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Equatorial_Guinea.svg',
    key: 64
  },
  {
    value: 'Eritrea',
    dial_code: '+291',
    code: 'ER',
    name: 'Eritrea',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Flag_of_Eritrea.svg',
    key: 65
  },
  {
    value: 'Estonia',
    dial_code: '+372',
    code: 'EE',
    name: 'Estonia',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Estonia.svg',
    key: 66
  },
  {
    value: 'Ethiopia',
    dial_code: '+251',
    code: 'ET',
    name: 'Ethiopia',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/7/71/Flag_of_Ethiopia.svg',
    key: 67
  },
  {
    value: 'Falkland Islands',
    dial_code: '+500',
    code: 'FK',
    name: 'Falkland Islands',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_the_Falkland_Islands.svg',
    key: 68
  },
  {
    value: 'Faroe Islands',
    dial_code: '+298',
    code: 'FO',
    name: 'Faroe Islands',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Flag_of_the_Faroe_Islands.svg',
    key: 69
  },
  {
    value: 'Fiji',
    dial_code: '+679',
    code: 'FJ',
    name: 'Fiji',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Fiji.svg',
    key: 70
  },
  {
    value: 'Finland',
    dial_code: '+358',
    code: 'FI',
    name: 'Finland',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland.svg',
    key: 71
  },
  {
    value: 'France',
    dial_code: '+33',
    code: 'FR',
    name: 'France',
    flag: 'https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg',
    key: 72
  },
  {
    value: 'French Guiana',
    dial_code: '+594',
    code: 'GF',
    name: 'French Guiana',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Flag_of_French_Guiana.svg',
    key: 73
  },
  {
    value: 'French Polynesia',
    dial_code: '+689',
    code: 'PF',
    name: 'French Polynesia',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/d/db/Flag_of_French_Polynesia.svg',
    key: 74
  },
  {
    value: 'Gabon',
    dial_code: '+241',
    code: 'GA',
    name: 'Gabon',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Flag_of_Gabon.svg',
    key: 75
  },
  {
    value: 'Gambia',
    dial_code: '+220',
    code: 'GM',
    name: 'Gambia',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_The_Gambia.svg',
    key: 76
  },
  {
    value: 'Georgia',
    dial_code: '+995',
    code: 'GE',
    name: 'Georgia',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Georgia.svg',
    key: 77
  },
  {
    value: 'Germany',
    dial_code: '+49',
    code: 'DE',
    name: 'Germany',
    flag: 'https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg',
    key: 78
  },
  {
    value: 'Ghana',
    dial_code: '+233',
    code: 'GH',
    name: 'Ghana',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Ghana.svg',
    key: 79
  },
  {
    value: 'Gibraltar',
    dial_code: '+350',
    code: 'GI',
    name: 'Gibraltar',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Flag_of_Gibraltar.svg',
    key: 80
  },
  {
    value: 'Greece',
    dial_code: '+30',
    code: 'GR',
    name: 'Greece',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Greece.svg',
    key: 81
  },
  {
    value: 'Greenland',
    dial_code: '+299',
    code: 'GL',
    name: 'Greenland',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_Greenland.svg',
    key: 82
  },
  {
    value: 'Grenada',
    dial_code: '+1473',
    code: 'GD',
    name: 'Grenada',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Grenada.svg',
    key: 83
  },
  {
    value: 'Guadeloupe',
    dial_code: '+590',
    code: 'GP',
    name: 'Guadeloupe',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Flag_of_Guadeloupe_%28UPLG%29.svg/1280px-Flag_of_Guadeloupe_%28UPLG%29.svg.png',
    key: 84
  },
  {
    value: 'Guam',
    dial_code: '+1671',
    code: 'GU',
    name: 'Guam',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/0/07/Flag_of_Guam.svg',
    key: 85
  },
  {
    value: 'Guatemala',
    dial_code: '+502',
    code: 'GT',
    name: 'Guatemala',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Flag_of_Guatemala.svg',
    key: 86
  },
  {
    value: 'Guernsey',
    dial_code: '+44',
    code: 'GG',
    name: 'Guernsey',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_Guernsey.svg',
    key: 87
  },
  {
    value: 'Guinea',
    dial_code: '+224',
    code: 'GN',
    name: 'Guinea',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Flag_of_Guinea.svg',
    key: 88
  },
  {
    value: 'Guinea-Bissau',
    dial_code: '+245',
    code: 'GW',
    name: 'Guinea-Bissau',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Guinea-Bissau.svg',
    key: 89
  },
  {
    value: 'Guyana',
    dial_code: '+592',
    code: 'GY',
    name: 'Guyana',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_Guyana.svg',
    key: 90
  },
  {
    value: 'Haiti',
    dial_code: '+509',
    code: 'HT',
    name: 'Haiti',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Flag_of_Haiti.svg',
    key: 91
  },
  {
    value: 'Holy See',
    dial_code: '+379',
    code: 'VA',
    name: 'Holy See',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_the_Vatican_City.svg',
    key: 92
  },
  {
    value: 'Honduras',
    dial_code: '+504',
    code: 'HN',
    name: 'Honduras',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_Honduras_%282008_Olympics%29.svg/128px-Flag_of_Honduras_%282008_Olympics%29.svg.png',
    key: 93
  },
  {
    value: 'Hong Kong',
    dial_code: '+852',
    code: 'HK',
    name: 'Hong Kong',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Flag_of_Hong_Kong.svg',
    key: 94
  },
  {
    value: 'Hungary',
    dial_code: '+36',
    code: 'HU',
    name: 'Hungary',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Flag_of_Hungary.svg',
    key: 95
  },
  {
    value: 'Iceland',
    dial_code: '+354',
    code: 'IS',
    name: 'Iceland',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Iceland.svg',
    key: 96
  },
  {
    value: 'India',
    dial_code: '+91',
    code: 'IN',
    name: 'India',
    flag: 'https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg',
    key: 97
  },
  {
    value: 'Indonesia',
    dial_code: '+62',
    code: 'ID',
    name: 'Indonesia',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg',
    key: 98
  },
  {
    value: 'Iran',
    dial_code: '+98',
    code: 'IR',
    name: 'Iran',
    flag: ' https://upload.wikimedia.org/wikipedia/commons/c/ca/Flag_of_Iran.svg',
    key: 99
  },
  {
    value: 'Iraq',
    dial_code: '+964',
    code: 'IQ',
    name: 'Iraq',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Flag_of_Iraq.svg',
    key: 100
  },
  {
    value: 'Ireland',
    dial_code: '+353',
    code: 'IE',
    name: 'Ireland',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Flag_of_Ireland.svg',
    key: 101
  },
  {
    value: 'Isle of Man',
    dial_code: '+44',
    code: 'IM',
    name: 'Isle of Man',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_the_Isle_of_Man.svg',
    key: 102
  },
  {
    value: 'Israel',
    dial_code: '+972',
    code: 'IL',
    name: 'Israel',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Israel.svg',
    key: 103
  },
  {
    value: 'Italy',
    dial_code: '+39',
    code: 'IT',
    name: 'Italy',
    flag: 'https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg',
    key: 104
  },
  {
    value: 'Jamaica',
    dial_code: '+1876',
    code: 'JM',
    name: 'Jamaica',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_Jamaica.svg',
    key: 105
  },
  {
    value: 'Japan',
    dial_code: '+81',
    code: 'JP',
    name: 'Japan',
    flag: 'https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg',
    key: 106
  },
  {
    value: 'Jersey',
    dial_code: '+44',
    code: 'JE',
    name: 'Jersey',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Flag_of_Jersey.svg',
    key: 107
  },
  {
    value: 'Jordan',
    dial_code: '+962',
    code: 'JO',
    name: 'Jordan',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Flag_of_Jordan.svg',
    key: 108
  },
  {
    value: 'Kazakhstan',
    dial_code: '+7',
    code: 'KZ',
    name: 'Kazakhstan',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Flag_of_Kazakhstan.svg',
    key: 109
  },
  {
    value: 'Kenya',
    dial_code: '+254',
    code: 'KE',
    name: 'Kenya',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Kenya.svg',
    key: 110
  },
  {
    value: 'Kiribati',
    dial_code: '+686',
    code: 'KI',
    name: 'Kiribati',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Flag_of_Kiribati.svg',
    key: 111
  },
  {
    value: 'Korea',
    dial_code: '+850',
    code: 'KP',
    name: 'Korea',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Flag_of_North_Korea.svg',
    key: 112
  },
  {
    value: 'Korea',
    dial_code: '+82',
    code: 'KR',
    name: 'Korea',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg',
    key: 113
  },
  {
    value: 'Kosovo',
    dial_code: '+383',
    code: 'XK',
    name: 'Kosovo',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Flag_of_Kosovo.svg',
    key: 114
  },
  {
    value: 'Kuwait',
    dial_code: '+965',
    code: 'KW',
    name: 'Kuwait',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Flag_of_Kuwait.svg',
    key: 115
  },
  {
    value: 'Kyrgyzstan',
    dial_code: '+996',
    code: 'KG',
    name: 'Kyrgyzstan',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Flag_of_Kyrgyzstan.svg',
    key: 116
  },
  {
    value: 'Laos',
    dial_code: '+856',
    code: 'LA',
    name: 'Laos',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Flag_of_Laos.svg',
    key: 117
  },
  {
    value: 'Latvia',
    dial_code: '+371',
    code: 'LV',
    name: 'Latvia',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Latvia.svg',
    key: 118
  },
  {
    value: 'Lebanon',
    dial_code: '+961',
    code: 'LB',
    name: 'Lebanon',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/5/59/Flag_of_Lebanon.svg',
    key: 119
  },
  {
    value: 'Lesotho',
    dial_code: '+266',
    code: 'LS',
    name: 'Lesotho',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Flag_of_Lesotho.svg',
    key: 120
  },
  {
    value: 'Liberia',
    dial_code: '+231',
    code: 'LR',
    name: 'Liberia',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Flag_of_Liberia.svg',
    key: 121
  },
  {
    value: 'Libyan Arab Jamahiriya',
    dial_code: '+218',
    code: 'LY',
    name: 'Libyan Arab Jamahiriya',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Libya.svg/2000px-Flag_of_Libya.svg.png',
    key: 122
  },
  {
    value: 'Liechtenstein',
    dial_code: '+423',
    code: 'LI',
    name: 'Liechtenstein',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Flag_of_Liechtenstein.svg',
    key: 123
  },
  {
    value: 'Lithuania',
    dial_code: '+370',
    code: 'LT',
    name: 'Lithuania',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Lithuania.svg',
    key: 124
  },
  {
    value: 'Luxembourg',
    dial_code: '+352',
    code: 'LU',
    name: 'Luxembourg',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Flag_of_Luxembourg.svg',
    key: 125
  },
  {
    value: 'Macao',
    dial_code: '+853',
    code: 'MO',
    name: 'Macao',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Flag_of_Macau.svg',
    key: 126
  },
  {
    value: 'Macedonia',
    dial_code: '+389',
    code: 'MK',
    name: 'Macedonia',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Flag_of_North_Macedonia.png',
    key: 127
  },
  {
    value: 'Madagascar',
    dial_code: '+261',
    code: 'MG',
    name: 'Madagascar',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Madagascar.svg',
    key: 128
  },
  {
    value: 'Malawi',
    dial_code: '+265',
    code: 'MW',
    name: 'Malawi',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Flag_of_Malawi.svg',
    key: 129
  },
  {
    value: 'Malaysia',
    dial_code: '+60',
    code: 'MY',
    name: 'Malaysia',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Flag_of_Malaysia.svg',
    key: 130
  },
  {
    value: 'Maldives',
    dial_code: '+960',
    code: 'MV',
    name: 'Maldives',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Maldives.svg',
    key: 131
  },
  {
    value: 'Mali',
    dial_code: '+223',
    code: 'ML',
    name: 'Mali',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_Mali.svg',
    key: 132
  },
  {
    value: 'Malta',
    dial_code: '+356',
    code: 'MT',
    name: 'Malta',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Malta.svg',
    key: 133
  },
  {
    value: 'Marshall Islands',
    dial_code: '+692',
    code: 'MH',
    name: 'Marshall Islands',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Flag_of_the_Marshall_Islands.svg',
    key: 134
  },
  {
    value: 'Martinique',
    dial_code: '+596',
    code: 'MQ',
    name: 'Martinique',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Snake_Flag_of_Martinique.svg/750px-Snake_Flag_of_Martinique.svg.png',
    key: 135
  },
  {
    value: 'Mauritania',
    dial_code: '+222',
    code: 'MR',
    name: 'Mauritania',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Flag_of_Mauritania.svg',
    key: 136
  },
  {
    value: 'Mauritius',
    dial_code: '+230',
    code: 'MU',
    name: 'Mauritius',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Mauritius.svg',
    key: 137
  },
  {
    value: 'Mayotte',
    dial_code: '+262',
    code: 'YT',
    name: 'Mayotte',
    flag: 'https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg',
    key: 138
  },
  {
    value: 'Mexico',
    dial_code: '+52',
    code: 'MX',
    name: 'Mexico',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg',
    key: 139
  },
  {
    value: 'Micronesia',
    dial_code: '+691',
    code: 'FM',
    name: 'Micronesia',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Micronesia_flag_300.png',
    key: 140
  },
  {
    value: 'Moldova',
    dial_code: '+373',
    code: 'MD',
    name: 'Moldova',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Flag_of_Moldova.svg',
    key: 141
  },
  {
    value: 'Monaco',
    dial_code: '+377',
    code: 'MC',
    name: 'Monaco',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Flag_of_Monaco.svg',
    key: 142
  },
  {
    value: 'Mongolia',
    dial_code: '+976',
    code: 'MN',
    name: 'Mongolia',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Mongolia.svg',
    key: 143
  },
  {
    value: 'Montenegro',
    dial_code: '+382',
    code: 'ME',
    name: 'Montenegro',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Montenegro.svg',
    key: 144
  },
  {
    value: 'Montserrat',
    dial_code: '+1664',
    code: 'MS',
    name: 'Montserrat',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Montserrat.svg',
    key: 145
  },
  {
    value: 'Morocco',
    dial_code: '+212',
    code: 'MA',
    name: 'Morocco',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Morocco.svg',
    key: 146
  },
  {
    value: 'Mozambique',
    dial_code: '+258',
    code: 'MZ',
    name: 'Mozambique',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Mozambique.svg',
    key: 147
  },
  {
    value: 'Myanmar',
    dial_code: '+95',
    code: 'MM',
    name: 'Myanmar',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Flag_of_Myanmar.svg',
    key: 148
  },
  {
    value: 'Namibia',
    dial_code: '+264',
    code: 'NA',
    name: 'Namibia',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Namibia.svg',
    key: 149
  },
  {
    value: 'Nauru',
    dial_code: '+674',
    code: 'NR',
    name: 'Nauru',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Flag_of_Nauru.svg',
    key: 150
  },
  {
    value: 'Nepal',
    dial_code: '+977',
    code: 'NP',
    name: 'Nepal',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal.svg',
    key: 151
  },
  {
    value: 'Netherlands',
    dial_code: '+31',
    code: 'NL',
    name: 'Netherlands',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg',
    key: 152
  },
  {
    value: 'New Caledonia',
    dial_code: '+687',
    code: 'NC',
    name: 'New Caledonia',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/4/43/New_Caledonia_flags_merged_%282017%29.svg',
    key: 153
  },
  {
    value: 'New Zealand',
    dial_code: '+64',
    code: 'NZ',
    name: 'New Zealand',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_New_Zealand.svg',
    key: 154
  },
  {
    value: 'Nicaragua',
    dial_code: '+505',
    code: 'NI',
    name: 'Nicaragua',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Nicaragua.svg',
    key: 155
  },
  {
    value: 'Niger',
    dial_code: '+227',
    code: 'NE',
    name: 'Niger',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Flag_of_Niger.svg',
    key: 156
  },
  {
    value: 'Nigeria',
    dial_code: '+234',
    code: 'NG',
    name: 'Nigeria',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_Nigeria.svg',
    key: 157
  },
  {
    value: 'Niue',
    dial_code: '+683',
    code: 'NU',
    name: 'Niue',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Niue.svg',
    key: 158
  },
  {
    value: 'Norfolk Island',
    dial_code: '+672',
    code: 'NF',
    name: 'Norfolk Island',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Norfolk_Island.svg',
    key: 159
  },
  {
    value: 'Northern Mariana Islands',
    dial_code: '+1670',
    code: 'MP',
    name: 'Northern Mariana Islands',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Flag_of_the_Northern_Mariana_Islands.svg',
    key: 160
  },
  {
    value: 'Norway',
    dial_code: '+47',
    code: 'NO',
    name: 'Norway',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg',
    key: 161
  },
  {
    value: 'Oman',
    dial_code: '+968',
    code: 'OM',
    name: 'Oman',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Oman.svg',
    key: 162
  },
  {
    value: 'Pakistan',
    dial_code: '+92',
    code: 'PK',
    name: 'Pakistan',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg',
    key: 163
  },
  {
    value: 'Palau',
    dial_code: '+680',
    code: 'PW',
    name: 'Palau',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Palau.svg',
    key: 164
  },
  {
    value: 'Palestinian Territory',
    dial_code: '+970',
    code: 'PS',
    name: 'Palestinian Territory',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Flag_of_Palestine_-_short_triangle.svg/1280px-Flag_of_Palestine_-_short_triangle.svg.png',
    key: 165
  },
  {
    value: 'Panama',
    dial_code: '+507',
    code: 'PA',
    name: 'Panama',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Flag_of_Panama.svg',
    key: 166
  },
  {
    value: 'Papua New Guinea',
    dial_code: '+675',
    code: 'PG',
    name: 'Papua New Guinea',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Flag_of_Papua_New_Guinea.svg',
    key: 167
  },
  {
    value: 'Paraguay',
    dial_code: '+595',
    code: 'PY',
    name: 'Paraguay',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Flag_of_Paraguay.svg',
    key: 168
  },
  {
    value: 'Peru',
    dial_code: '+51',
    code: 'PE',
    name: 'Peru',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Peru.svg',
    key: 169
  },
  {
    value: 'Philippines',
    dial_code: '+63',
    code: 'PH',
    name: 'Philippines',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_the_Philippines.svg',
    key: 170
  },
  {
    value: 'Pitcairn',
    dial_code: '+64',
    code: 'PN',
    name: 'Pitcairn',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_the_Pitcairn_Islands.svg',
    key: 171
  },
  {
    value: 'Poland',
    dial_code: '+48',
    code: 'PL',
    name: 'Poland',
    flag: 'https://upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.svg',
    key: 172
  },
  {
    value: 'Portugal',
    dial_code: '+351',
    code: 'PT',
    name: 'Portugal',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg',
    key: 173
  },
  {
    value: 'Puerto Rico',
    dial_code: '+1939',
    code: 'PR',
    name: 'Puerto Rico',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/2/28/Flag_of_Puerto_Rico.svg',
    key: 174
  },
  {
    value: 'Qatar',
    dial_code: '+974',
    code: 'QA',
    name: 'Qatar',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Qatar.svg',
    key: 175
  },
  {
    value: 'Romania',
    dial_code: '+40',
    code: 'RO',
    name: 'Romania',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Romania.svg',
    key: 176
  },
  {
    value: 'Russia',
    dial_code: '+7',
    code: 'RU',
    name: 'Russia',
    flag: 'https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg',
    key: 177
  },
  {
    value: 'Rwanda',
    dial_code: '+250',
    code: 'RW',
    name: 'Rwanda',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Flag_of_Rwanda.svg',
    key: 178
  },
  {
    value: 'Reunion',
    dial_code: '+262',
    code: 'RE',
    name: 'Reunion',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Proposed_flag_of_R%C3%A9union_%28VAR%29.svg/900px-Proposed_flag_of_R%C3%A9union_%28VAR%29.svg.png',
    key: 179
  },
  {
    value: 'Saint Barthelemy',
    dial_code: '+590',
    code: 'BL',
    name: 'Saint Barthelemy',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Nuvola_Saint_Barth%C3%A9lemy_flag.svg',
    key: 180
  },
  {
    value: 'Saint Helena',
    dial_code: '+290',
    code: 'SH',
    name: 'Saint Helena',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Saint_Helena.svg',
    key: 181
  },
  {
    value: 'Saint Kitts and Nevis',
    dial_code: '+1869',
    code: 'KN',
    name: 'Saint Kitts and Nevis',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Saint_Kitts_and_Nevis.svg',
    key: 182
  },
  {
    value: 'Saint Lucia',
    dial_code: '+1758',
    code: 'LC',
    name: 'Saint Lucia',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Saint_Lucia.svg',
    key: 183
  },
  {
    value: 'Saint Martin',
    dial_code: '+590',
    code: 'MF',
    name: 'Saint Martin',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag_of_Sint_Maarten.svg/1280px-Flag_of_Sint_Maarten.svg.png',
    key: 184
  },
  {
    value: 'Saint Pierre and Miquelon',
    dial_code: '+508',
    code: 'PM',
    name: 'Saint Pierre and Miquelon',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Flag_of_Saint-Pierre_and_Miquelon.svg',
    key: 185
  },
  {
    value: 'Saint Vincent',
    dial_code: '+1784',
    code: 'VC',
    name: 'Saint Vincent',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Flag_of_Saint_Vincent_and_the_Grenadines.svg/2000px-Flag_of_Saint_Vincent_and_the_Grenadines.svg.png',
    key: 186
  },
  {
    value: 'Samoa',
    dial_code: '+685',
    code: 'WS',
    name: 'Samoa',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Samoa.svg',
    key: 187
  },
  {
    value: 'San Marino',
    dial_code: '+378',
    code: 'SM',
    name: 'San Marino',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Flag_of_San_Marino.svg',
    key: 188
  },
  {
    value: 'Sao Tome and Principe',
    dial_code: '+239',
    code: 'ST',
    name: 'Sao Tome and Principe',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Flag_of_Sao_Tome_and_Principe.svg',
    key: 189
  },
  {
    value: 'Saudi Arabia',
    dial_code: '+966',
    code: 'SA',
    name: 'Saudi Arabia',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg',
    key: 190
  },
  {
    value: 'Senegal',
    dial_code: '+221',
    code: 'SN',
    name: 'Senegal',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Flag_of_Senegal.svg',
    key: 191
  },
  {
    value: 'Serbia',
    dial_code: '+381',
    code: 'RS',
    name: 'Serbia',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Flag_of_Serbia.svg',
    key: 192
  },
  {
    value: 'Seychelles',
    dial_code: '+248',
    code: 'SC',
    name: 'Seychelles',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Seychelles.svg',
    key: 193
  },
  {
    value: 'Sierra Leone',
    dial_code: '+232',
    code: 'SL',
    name: 'Sierra Leone',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Flag_of_Sierra_Leone.svg',
    key: 194
  },
  {
    value: 'Singapore',
    dial_code: '+65',
    code: 'SG',
    name: 'Singapore',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Singapore.svg',
    key: 195
  },
  {
    value: 'Slovakia',
    dial_code: '+421',
    code: 'SK',
    name: 'Slovakia',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Flag_of_Slovakia.svg',
    key: 196
  },
  {
    value: 'Slovenia',
    dial_code: '+386',
    code: 'SI',
    name: 'Slovenia',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Flag_of_Slovenia.svg',
    key: 197
  },
  {
    value: 'Solomon Islands',
    dial_code: '+677',
    code: 'SB',
    name: 'Solomon Islands',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Flag_of_the_Solomon_Islands.svg',
    key: 198
  },
  {
    value: 'Somalia',
    dial_code: '+252',
    code: 'SO',
    name: 'Somalia',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Flag_of_Somalia.svg',
    key: 199
  },
  {
    value: 'South Africa',
    dial_code: '+27',
    code: 'ZA',
    name: 'South Africa',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa.svg',
    key: 200
  },
  {
    value: 'South Sudan',
    dial_code: '+211',
    code: 'SS',
    name: 'South Sudan',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Flag_of_South_Sudan.svg',
    key: 201
  },
  {
    value: 'Spain',
    dial_code: '+34',
    code: 'ES',
    name: 'Spain',
    flag: 'https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg',
    key: 202
  },
  {
    value: 'Sri Lanka',
    dial_code: '+94',
    code: 'LK',
    name: 'Sri Lanka',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Sri_Lanka.svg',
    key: 203
  },
  {
    value: 'Sudan',
    dial_code: '+249',
    code: 'SD',
    name: 'Sudan',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Sudan.svg',
    key: 204
  },
  {
    value: 'Suriname',
    dial_code: '+597',
    code: 'SR',
    name: 'Suriname',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Flag_of_Suriname.svg/255px-Flag_of_Suriname.svg.png',
    key: 205
  },
  {
    value: 'Svalbard and Jan Mayen',
    dial_code: '+47',
    code: 'SJ',
    name: 'Svalbard and Jan Mayen',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/2000px-Flag_of_Norway.svg.png',
    key: 206
  },
  {
    value: 'Swaziland',
    dial_code: '+268',
    code: 'SZ',
    name: 'Swaziland',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Flag_of_Eswatini.svg',
    key: 207
  },
  {
    value: 'Sweden',
    dial_code: '+46',
    code: 'SE',
    name: 'Sweden',
    flag: 'https://upload.wikimedia.org/wikipedia/en/4/4c/Flag_of_Sweden.svg',
    key: 208
  },
  {
    value: 'Switzerland',
    dial_code: '+41',
    code: 'CH',
    name: 'Switzerland',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Flag_of_Switzerland_%28Pantone%29.svg',
    key: 209
  },
  {
    value: 'Syrian Arab Republic',
    dial_code: '+963',
    code: 'SY',
    name: 'Syrian Arab Republic',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Flag_of_Syria.svg',
    key: 210
  },
  {
    value: 'Taiwan',
    dial_code: '+886',
    code: 'TW',
    name: 'Taiwan',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Flag_of_the_Republic_of_China.svg',
    key: 211
  },
  {
    value: 'Tajikistan',
    dial_code: '+992',
    code: 'TJ',
    name: 'Tajikistan',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Tajikistan.svg',
    key: 212
  },
  {
    value: 'Tanzania',
    dial_code: '+255',
    code: 'TZ',
    name: 'Tanzania',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flag_of_Tanzania.svg/1280px-Flag_of_Tanzania.svg.png',
    key: 213
  },
  {
    value: 'Thailand',
    dial_code: '+66',
    code: 'TH',
    name: 'Thailand',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Thailand.svg',
    key: 214
  },
  {
    value: 'Timor-Leste',
    dial_code: '+670',
    code: 'TL',
    name: 'Timor-Leste',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/2/26/Flag_of_East_Timor.svg',
    key: 215
  },
  {
    value: 'Togo',
    dial_code: '+228',
    code: 'TG',
    name: 'Togo',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/6/68/Flag_of_Togo.svg',
    key: 216
  },
  {
    value: 'Tokelau',
    dial_code: '+690',
    code: 'TK',
    name: 'Tokelau',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Flag_of_Tokelau.svg',
    key: 217
  },
  {
    value: 'Tonga',
    dial_code: '+676',
    code: 'TO',
    name: 'Tonga',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Tonga.svg',
    key: 218
  },
  {
    value: 'Trinidad and Tobago',
    dial_code: '+1868',
    code: 'TT',
    name: 'Trinidad and Tobago',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Trinidad_and_Tobago.svg',
    key: 219
  },
  {
    value: 'Tunisia',
    dial_code: '+216',
    code: 'TN',
    name: 'Tunisia',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Tunisia.svg',
    key: 220
  },
  {
    value: 'Turkey',
    dial_code: '+90',
    code: 'TR',
    name: 'Turkey',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg',
    key: 221
  },
  {
    value: 'Turkmenistan',
    dial_code: '+993',
    code: 'TM',
    name: 'Turkmenistan',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Turkmenistan.svg',
    key: 222
  },
  {
    value: 'Turks and Caicos Islands',
    dial_code: '+1649',
    code: 'TC',
    name: 'Turks and Caicos Islands',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Flag_of_the_Turks_and_Caicos_Islands.svg',
    key: 223
  },
  {
    value: 'Tuvalu',
    dial_code: '+688',
    code: 'TV',
    name: 'Tuvalu',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Tuvalu.svg',
    key: 224
  },
  {
    value: 'Uganda',
    dial_code: '+256',
    code: 'UG',
    name: 'Uganda',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Flag_of_Uganda.svg',
    key: 225
  },
  {
    value: 'Ukraine',
    dial_code: '+380',
    code: 'UA',
    name: 'Ukraine',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg',
    key: 226
  },
  {
    value: 'United Arab Emirates',
    dial_code: '+971',
    code: 'AE',
    name: 'United Arab Emirates',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg',
    key: 227
  },
  {
    value: 'United Kingdom',
    dial_code: '+44',
    code: 'GB',
    name: 'United Kingdom',
    flag: 'https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg',
    key: 228
  },
  {
    value: 'United States',
    dial_code: '+1',
    code: 'US',
    name: 'United States',
    flag: 'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg',
    key: 229
  },
  {
    value: 'Uruguay',
    dial_code: '+598',
    code: 'UY',
    name: 'Uruguay',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Uruguay.svg',
    key: 230
  },
  {
    value: 'Uzbekistan',
    dial_code: '+998',
    code: 'UZ',
    name: 'Uzbekistan',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Uzbekistan.svg',
    key: 231
  },
  {
    value: 'Vanuatu',
    dial_code: '+678',
    code: 'VU',
    name: 'Vanuatu',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Vanuatu.svg',
    key: 232
  },
  {
    value: 'Venezuela',
    dial_code: '+58',
    code: 'VE',
    name: 'Venezuela',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Flag_of_Venezuela_%28state%29.svg',
    key: 233
  },
  {
    value: 'Vietnam',
    dial_code: '+84',
    code: 'VN',
    name: 'Vietnam',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/255px-Flag_of_Vietnam.svg.png',
    key: 234
  },
  {
    value: 'Virgin Islands, British',
    dial_code: '+1284',
    code: 'VG',
    name: 'Virgin Islands, British',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Flag_of_the_British_Virgin_Islands.svg/2000px-Flag_of_the_British_Virgin_Islands.svg.png',
    key: 235
  },
  {
    value: 'Virgin Islands, U.S.',
    dial_code: '+1340',
    code: 'VI',
    name: 'Virgin Islands, U.S.',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Flag_of_the_United_States_Virgin_Islands.svg/255px-Flag_of_the_United_States_Virgin_Islands.svg.png',
    key: 236
  },
  {
    value: 'Wallis and Futuna',
    dial_code: '+681',
    code: 'WF',
    name: 'Wallis and Futuna',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Flag_of_Wallis_and_Futuna.svg',
    key: 237
  },
  {
    value: 'Yemen',
    dial_code: '+967',
    code: 'YE',
    name: 'Yemen',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Flag_of_Yemen.svg',
    key: 238
  },
  {
    value: 'Zambia',
    dial_code: '+260',
    code: 'ZM',
    name: 'Zambia',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Flag_of_Zambia.svg',
    key: 239
  },
  {
    value: 'Zimbabwe',
    dial_code: '+263',
    code: 'ZW',
    name: 'Zimbabwe',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Flag_of_Zimbabwe.svg',
    key: 240
  }
]
