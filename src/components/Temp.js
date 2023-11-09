import React, { useEffect, useState } from "react";
import "../css/Style.css";

export default function Temp() {
  const [searchText, setSearchText] = useState("Gandhinagar");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [click, setClick] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  const citySuggestions = [
    "Mumbai",
    "Delhi",
    "Bengaluru",
    "Ahmedabad",
    "Hyderabad",
    "Chennai",
    "Kolkata",
    "Pune",
    "Jaipur",
    "Surat",
    "Lucknow",
    "Kanpur",
    "Nagpur",
    "Patna",
    "Indore",
    "Thane",
    "Bhopal",
    "Visakhapatnam",
    "Vadodara",
    "Firozabad",
    "Ludhiana",
    "Rajkot",
    "Agra",
    "Siliguri",
    "Nashik",
    "Faridabad",
    "Patiala",
    "Meerut",
    "Kalyan-Dombivali",
    "Vasai-Virar",
    "Varanasi",
    "Srinagar",
    "Dhanbad",
    "Jodhpur",
    "Amritsar",
    "Raipur",
    "Allahabad",
    "Coimbatore",
    "Jabalpur",
    "Gwalior",
    "Vijayawada",
    "Madurai",
    "Guwahati",
    "Chandigarh",
    "Hubli-Dharwad",
    "Amroha",
    "Moradabad",
    "Gurgaon",
    "Aligarh",
    "Solapur",
    "Ranchi",
    "Jalandhar",
    "Tiruchirappalli",
    "Bhubaneswar",
    "Salem",
    "Warangal",
    "Mira-Bhayandar",
    "Thiruvananthapuram",
    "Bhiwandi",
    "Saharanpur",
    "Guntur",
    "Amravati",
    "Bikaner",
    "Noida",
    "Jamshedpur",
    "Bhilai Nagar",
    "Cuttack",
    "Kochi",
    "Udaipur",
    "Bhavnagar",
    "Dehradun",
    "Asansol",
    "Nanded-Waghala",
    "Ajmer",
    "Jamnagar",
    "Ujjain",
    "Sangli",
    "Loni",
    "Jhansi",
    "Pondicherry",
    "Nellore",
    "Jammu",
    "Belagavi",
    "Raurkela",
    "Mangaluru",
    "Tirunelveli",
    "Malegaon",
    "Gaya",
    "Tiruppur",
    "Davanagere",
    "Kozhikode",
    "Akola",
    "Kurnool",
    "Bokaro Steel City",
    "Rajahmundry",
    "Ballari",
    "Agartala",
    "Bhagalpur",
    "Latur",
    "Dhule",
    "Korba",
    "Bhilwara",
    "Brahmapur",
    "Mysore",
    "Muzaffarpur",
    "Ahmednagar",
    "Kollam",
    "Raghunathganj",
    "Bilaspur",
    "Shahjahanpur",
    "Thrissur",
    "Alwar",
    "Kakinada",
    "Nizamabad",
    "Sagar",
    "Tumkur",
    "Hisar",
    "Rohtak",
    "Panipat",
    "Darbhanga",
    "Kharagpur",
    "Aizawl",
    "Ichalkaranji",
    "Tirupati",
    "Karnal",
    "Bathinda",
    "Rampur",
    "Shivamogga",
    "Ratlam",
    "Modinagar",
    "Durg",
    "Shillong",
    "Imphal",
    "Hapur",
    "Ranipet",
    "Anantapur",
    "Arrah",
    "Karimnagar",
    "Parbhani",
    "Etawah",
    "Bharatpur",
    "Begusarai",
    "New Delhi",
    "Chhapra",
    "Kadapa",
    "Ramagundam",
    "Pali",
    "Satna",
    "Vizianagaram",
    "Katihar",
    "Hardwar",
    "Sonipat",
    "Nagercoil",
    "Thanjavur",
    "Murwara (Katni)",
    "Naihati",
    "Sambhal",
    "Nadiad",
    "Yamunanagar",
    "English Bazar",
    "Eluru",
    "Munger",
    "Panchkula",
    "Raayachuru",
    "Panvel",
    "Deoghar",
    "Ongole",
    "Nandyal",
    "Morena",
    "Bhiwani",
    "Porbandar",
    "Palakkad",
    "Anand",
    "Purnia",
    "Baharampur",
    "Barmer",
    "Morvi",
    "Orai",
    "Bahraich",
    "Sikar",
    "Vellore",
    "Singrauli",
    "Khammam",
    "Mahesana",
    "Silchar",
    "Sambalpur",
    "Rewa",
    "Unnao",
    "Hugli-Chinsurah",
    "Raiganj",
    "Phusro",
    "Adityapur",
    "Alappuzha",
    "Bahadurgarh",
    "Machilipatnam",
    "Rae Bareli",
    "Jalpaiguri",
    "Bharuch",
    "Pathankot",
    "Hoshiarpur",
    "Baramula",
    "Adoni",
    "Jind",
    "Tonk",
    "Tenali",
    "Kancheepuram",
    "Vapi",
    "Sirsa",
    "Navsari",
    "Mahbubnagar",
    "Puri",
    "Robertson Pet",
    "Ramgarh",
    "Shimla",
    "Tiruvannamalai",
    "Kaithal",
    "Rajnandgaon",
    "Godhra",
    "Hazaribag",
    "Bhimavaram",
    "Mandsaur",
    "Dibrugarh",
    "Kolar",
    "Bankura",
    "Mandya",
    "Dehri-on-Sone",
    "Madanapalle",
    "Malerkotla",
    "Lalitpur",
    "Bettiah",
    "Pollachi",
    "Khanna",
    "Neemuch",
    "Palwal",
    "Palanpur",
    "Guntakal",
    "Nabadwip",
    "Udupi",
    "Jagdalpur",
    "Motihari",
    "Pilibhit",
    "Dimapur",
    "Mohali",
    "Sadulpur",
    "Rajapalayam",
    "Dharmavaram",
    "Kashipur",
    "Sivakasi",
    "Darjiling",
    "Chikkamagaluru",
    "Gudivada",
    "Baleshwar Town",
    "Mancherial",
    "Srikakulam",
    "Adilabad",
    "Yavatmal",
    "Barnala",
    "Nagaon",
    "Narasaraopet",
    "Raigarh",
    "Roorkee",
    "Valsad",
    "Ambikapur",
    "Giridih",
    "Chandausi",
    "Purulia",
    "Patan",
    "Bagaha",
    "Hardoi",
    "Achalpur",
    "Osmanabad",
    "Deesa",
    "Nandurbar",
    "Azamgarh",
    "Ramgarh",
    "Firozpur",
    "Baripada Town",
    "Karwar",
    "Siwan",
    "Rajampet",
    "Pudukkottai",
    "Anantnag",
    "Tadpatri",
    "Satara",
    "Bhadrak",
    "Kishanganj",
    "Suryapet",
    "Wardha",
    "Ranebennuru",
    "Amreli",
    "Neyveli (TS)",
    "Jamalpur",
    "Marmagao",
    "Udgir",
    "Tadepalligudem",
    "Nagapattinam",
    "Buxar",
    "Aurangabad",
    "Jehanabad",
    "Phagwara",
    "Khair",
    "Sawai Madhopur",
    "Kapurthala",
    "Chilakaluripet",
    "Aurangabad",
    "Malappuram",
    "Rewari",
    "Nagaur",
    "Sultanpur",
    "Nagda",
    "Port Blair",
    "Lakhisarai",
    "Panaji",
    "Tinsukia",
    "Itarsi",
    "Kohima",
    "Balangir",
    "Nawada",
    "Jharsuguda",
    "Jagtial",
    "Viluppuram",
    "Amalner",
    "Zirakpur",
    "Tanda",
    "Tiruchengode",
    "Nagina",
    "Yemmiganur",
    "Vaniyambadi",
    "Sarni",
    "Theni Allinagaram",
    "Margao",
    "Akot",
    "Sehore",
    "Mhow Cantonment",
    "Kot Kapura",
    "Makrana",
    "Pandharpur",
    "Miryalaguda",
    "Shamli",
    "Seoni",
    "Ranibennur",
    "Kadiri",
    "Shrirampur",
    "Rudrapur",
    "Parli",
    "Najibabad",
    "Nirmal",
    "Udhagamandalam",
    "Shikohabad",
    "Jhumri Tilaiya",
    "Aruppukkottai",
    "Ponnani",
    "Jamui",
    "Sitamarhi",
    "Chirala",
    "Anjar",
    "Karaikal",
    "Hansi",
    "Anakapalle",
    "Mahasamund",
    "Faridkot",
    "Saunda",
    "Dhoraji",
    "Paramakudi",
    "Balaghat",
    "Sujangarh",
    "Khambhat",
    "Muktsar",
    "Rajpura",
    "Kavali",
    "Dhamtari",
    "Ashok Nagar",
    "Sardarshahar",
    "Mahuva",
    "Bargarh",
    "Kamareddy",
    "Sahibganj",
    "Kothagudem",
    "Ramanagaram",
    "Gokak",
    "Tikamgarh",
    "Araria",
    "Rishikesh",
    "Shahdol",
    "Medininagar (Daltonganj)",
    "Arakkonam",
    "Washim",
    "Sangrur",
    "Bodhan",
    "Fazilka",
    "Palacole",
    "Keshod",
    "Sullurpeta",
    "Wadhwan",
    "Gurdaspur",
    "Vatakara",
    "Tura",
    "Narnaul",
    "Kharar",
    "Yadgir",
    "Ambejogai",
    "Ankleshwar",
    "Savarkundla",
    "Paradip",
    "Virudhachalam",
    "Kanhangad",
    "Kadi",
    "Srivilliputhur",
    "Gobindgarh",
    "Tindivanam",
    "Mansa",
    "Taliparamba",
    "Manmad",
    "Tanuku",
    "Rayachoti",
    "Virudhunagar",
    "Koyilandy",
    "Jorhat",
    "Karur",
    "Valparai",
    "Srikalahasti",
    "Neyyattinkara",
    "Bapatla",
    "Fatehabad",
    "Malout",
    "Sankarankovil",
    "Tenkasi",
    "Ratnagiri",
    "Rabkavi Banhatti",
    "Sikandrabad",
    "Chaibasa",
    "Chirmiri",
    "Palwancha",
    "Bhawanipatna",
    "Kayamkulam",
    "Pithampur",
    "Nabha",
    "Shahabad, Hardoi",
    "Dhenkanal",
    "Uran Islampur",
    "Gopalganj",
    "Bongaigaon City",
    "Palani",
    "Pusad",
    "Sopore",
    "Pilkhuwa",
    "Tarn Taran",
    "Renukoot",
    "Mandamarri",
    "Shahabad",
    "Barbil",
    "Korat",
  ];

  const fetchCitySuggestions = (text) => {
    const filteredSuggestions = citySuggestions.filter((city) =>
      city.toLowerCase().includes(text.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        setLoading(true);
        setError(null);

        const url = `https://api.weatherapi.com/v1/current.json?key=16b7a01ea69d4ac8bb160343230811&q=${searchText}&aqi=yes`;
        const response = await fetch(url);
        const data = await response.json();

        if (response.ok) {
          setWeatherData(data);
          setClick(true);
        } else {
          setError("Failed to fetch weather data");
        }
      } catch (error) {
        setError("An error occurred while fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [searchText]);

  const handleSearch = (e) => {
    let val = e.target.value;
    setSearchText(val);
    fetchCitySuggestions(val);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchText(suggestion);
    setSuggestions([]);
  };

  return (
    <div className="container weather-container my-5">
      <div className="card horizontal-card p-4">
        <div className="row">
          <div className="col-md-4">
            <img
              src="images/logo.png"
              alt="Weather Icon"
              className="img-fluid"
            />
          </div>
          <div className="col-md-8">
            <h1 className="text-center">Weather App</h1>
            <div className="input-group mb-3">
              <input
                type="search"
                className="form-control"
                placeholder="Enter a city name"
                onChange={handleSearch}
                value={searchText}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-primary"
                  type="button"
                  // onClick={fetchWeatherData} // Call the function here
                >
                  <img
                    src="images/search-icon.png"
                    alt="Search"
                    height="20px"
                    width="20px"
                  />
                </button>
              </div>
            </div>
            {suggestions.length > 0 && (
              <ul className="list-group">
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    className="list-group-item suggestion"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
            {loading && <p className="loading text-center">Loading...</p>}
            {error && !loading && (
              <div className="alert alert-danger my-3">{error}</div>
            )}
            {weatherData && !loading && !error && click && (
              <div className="my-3">
                <h2>Weather Information</h2>
                <table className="table">
                  <tbody>
                    <tr>
                      <th>City Name</th>
                      <td>{weatherData.location.name}</td>
                    </tr>
                    <tr>
                      <th>Temperature</th>
                      <td>
                        <span className="mx-2">
                          {weatherData.current.temp_c}°C
                        </span>
                        <img
                          src="gif/temprature.gif"
                          alt={weatherData.current.temp_c}
                          height="30px"
                          width="30px"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>Weather</th>
                      <td>
                        <span className="mx-2">
                          {weatherData.current.condition.text}
                        </span>
                        {weatherData.current.condition.text === "Overcast" && (
                          <img
                            src="gif/overcast.gif"
                            alt={weatherData.current.condition.text}
                            height="50px"
                            width="50px"
                          />
                        )}
                        {weatherData.current.condition.text === "Sunny" && (
                          <img
                            src="gif/sunny.gif"
                            alt={weatherData.current.condition.text}
                            height="50px"
                            width="50px"
                          />
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
